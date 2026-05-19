import click
from datetime import timedelta
from src.database import SessionLocal
from src.models import Deal, PriceHistory, QCError
from src.market_data.yfinance_provider import YFinanceProvider
from src.utils.logging_config import logger

def fetch_all_prices():
    """
    Finds all unique tickers and fetches price data for the window around their deals.
    From 10 calendar days before announcement to 45 calendar days after.
    """
    db = SessionLocal()

    deals = db.query(Deal).all()
    provider = YFinanceProvider()

    success_count = 0
    fail_count = 0

    for deal in deals:
        ticker = deal.ticker
        announcement_date = deal.announcement_date

        if not announcement_date:
            logger.warning(f"Deal for {ticker} has no announcement date. Skipping price fetch.")
            continue

        start_date = announcement_date - timedelta(days=10)
        end_date = announcement_date + timedelta(days=45)

        prices = provider.fetch_historical_prices(ticker, start_date, end_date)

        if not prices:
            fail_count += 1

            # Log QC Error
            error = QCError(
                ticker=ticker,
                issue_type="Market Data Failed",
                severity="High",
                message=f"Failed to fetch market data from {start_date} to {end_date}",
                related_table="deals",
                related_id=deal.id
            )
            db.add(error)
            db.commit()
            continue

        inserted_count = 0
        for price_record in prices:
            # Check if this exact date and ticker already exist
            existing = db.query(PriceHistory).filter(
                PriceHistory.ticker == ticker,
                PriceHistory.date == price_record['date']
            ).first()

            if not existing:
                ph = PriceHistory(
                    ticker=ticker,
                    date=price_record['date'],
                    open=price_record['open'],
                    high=price_record['high'],
                    low=price_record['low'],
                    close=price_record['close'],
                    adjusted_close=price_record['adjusted_close'],
                    volume=price_record['volume'],
                    data_provider=price_record['data_provider']
                )
                db.add(ph)
                inserted_count += 1

        if inserted_count > 0:
            logger.info(f"Inserted {inserted_count} new price records for {ticker}")
        else:
            logger.info(f"No new price records inserted for {ticker} (already exist)")

        try:
            db.commit()
            success_count += 1
        except Exception as e:
            logger.error(f"Error committing prices for {ticker}: {e}")
            db.rollback()
            fail_count += 1

    db.close()
    logger.info(f"Market data fetch complete. Success: {success_count}. Failed: {fail_count}.")
