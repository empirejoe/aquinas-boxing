import pandas as pd
from typing import List, Dict, Any
from sqlalchemy.orm import Session
from src.database import get_db, SessionLocal
from src.models import Deal, QCError, Source
from src.utils.logging_config import logger
from src.ingest.validators import normalize_ticker, parse_date, extract_float, extract_string

def log_qc_error(db: Session, ticker: str, issue_type: str, severity: str, message: str, related_table: str = "deals", related_id: int = None):
    error = QCError(
        ticker=ticker,
        issue_type=issue_type,
        severity=severity,
        message=message,
        related_table=related_table,
        related_id=related_id
    )
    db.add(error)
    db.commit()

def ingest_deals_file(filepath: str):
    logger.info(f"Starting ingestion for {filepath}")

    try:
        if filepath.endswith('.xlsx'):
            df = pd.read_excel(filepath)
        elif filepath.endswith('.csv'):
            df = pd.read_csv(filepath)
        else:
            logger.error(f"Unsupported file format: {filepath}")
            return
    except Exception as e:
        logger.error(f"Failed to read file {filepath}: {e}")
        return

    # Expected columns: Ticker, Company, Announcement_Date, Shares_Issued,
    # Price_per_Share, Gross_Proceeds_USD_millions, Warrant_Coverage, Placement_Agent, Closing_Date, Citation

    db = SessionLocal()

    success_count = 0
    fail_count = 0

    for idx, row in df.iterrows():
        try:
            ticker = normalize_ticker(row.get('Ticker', ''))
            if not ticker:
                logger.warning(f"Row {idx}: Missing Ticker. Skipping.")
                fail_count += 1
                continue

            # Extract basic data
            company = extract_string(row.get('Company'))
            announcement_date = parse_date(row.get('Announcement_Date'))
            shares_issued = extract_float(row.get('Shares_Issued'))
            price_per_share = extract_float(row.get('Price_per_Share'))
            gross_proceeds = extract_float(row.get('Gross_Proceeds_USD_millions'))
            warrant_coverage = extract_string(row.get('Warrant_Coverage'))
            placement_agent = extract_string(row.get('Placement_Agent'))
            closing_date = parse_date(row.get('Closing_Date'))

            # Handle optional fields and defaults
            event_type = extract_string(row.get('Event_Type')) or "Registered Direct Offering"
            announcement_time = extract_string(row.get('Announcement_Time'))
            pricing_date = parse_date(row.get('Pricing_Date'))
            warrant_exercise_price = extract_float(row.get('Warrant_Exercise_Price'))

            # Citation / Source
            source_url = extract_string(row.get('Source_URL'))
            source_name = extract_string(row.get('Source_Name'))
            citation = extract_string(row.get('Citation'))

            if not source_url and citation:
                # Use citation as source_url/source_name placeholder per instructions
                source_url = citation
                source_name = citation

            # Check if deal already exists (simple deduplication based on ticker and announcement date)
            existing_deal = db.query(Deal).filter(
                Deal.ticker == ticker,
                Deal.announcement_date == announcement_date
            ).first()

            if existing_deal:
                logger.info(f"Deal for {ticker} on {announcement_date} already exists. Skipping.")
                continue

            # Create deal
            deal = Deal(
                ticker=ticker,
                company=company,
                event_type=event_type,
                announcement_date=announcement_date,
                announcement_time=announcement_time,
                pricing_date=pricing_date,
                closing_date=closing_date,
                shares_issued=shares_issued,
                price_per_share=price_per_share,
                gross_proceeds_usd_millions=gross_proceeds,
                warrant_coverage=warrant_coverage,
                warrant_exercise_price=warrant_exercise_price,
                placement_agent=placement_agent,
                source_url=source_url,
                source_name=source_name,
                qc_status="Clean"
            )
            db.add(deal)
            db.commit()
            db.refresh(deal)

            # Store in Source table
            if source_url or source_name:
                source = Source(
                    deal_id=deal.id,
                    source_url=source_url,
                    source_name=source_name,
                    source_type="Citation Placeholder" if (citation and not source_url) else "Direct"
                )
                db.add(source)
                db.commit()

            # --- Apply Quality Control Flags ---
            qc_issues = []

            if not shares_issued or shares_issued <= 0:
                qc_issues.append(("Missing Share Count", "Warning", "Shares issued is missing or zero."))

            if not price_per_share or price_per_share <= 0:
                qc_issues.append(("Missing Offering Price", "Warning", "Offering price per share is missing or zero."))

            if not source_url and not citation:
                qc_issues.append(("Missing Source URL", "Warning", "Both Source URL and Citation are missing."))

            if not announcement_time:
                qc_issues.append(("Announcement Timing Unclear", "Warning", "Announcement time is not provided."))

            if qc_issues:
                deal.qc_status = "Issues Found"
                for issue_type, severity, msg in qc_issues:
                    log_qc_error(db, ticker, issue_type, severity, msg, "deals", deal.id)
                db.commit()

            success_count += 1

        except Exception as e:
            logger.error(f"Error processing row {idx} for ticker {row.get('Ticker', 'Unknown')}: {e}")
            fail_count += 1
            db.rollback()

    db.close()
    logger.info(f"Ingestion complete. Successfully ingested: {success_count}. Failed: {fail_count}.")
