from datetime import date, timedelta
from typing import List, Dict, Any
from sqlalchemy.orm import Session
from src.database import SessionLocal
from src.models import Deal, PriceHistory, EventReturn, QCError
from src.event_study.event_clock import get_trading_days, get_next_trading_day, get_previous_trading_day
from src.utils.logging_config import logger
from src.ingest.validators import extract_float

def calculate_returns():
    """
    Calculate forward returns, deal absorption, max drawdown etc. for each deal.
    """
    db = SessionLocal()

    deals = db.query(Deal).all()

    success_count = 0
    fail_count = 0

    for deal in deals:
        try:
            ticker = deal.ticker
            announcement_date = deal.announcement_date
            shares_issued = deal.shares_issued
            price_per_share = deal.price_per_share

            if not announcement_date:
                logger.warning(f"Skipping deal {deal.id} for {ticker}: No announcement date.")
                continue

            # Check if returns already calculated
            existing_return = db.query(EventReturn).filter(EventReturn.deal_id == deal.id).first()
            if existing_return:
                logger.info(f"Returns for deal {deal.id} ({ticker}) already exist. Skipping.")
                continue

            # Fetch all price history for this deal's window roughly
            start_window = announcement_date - timedelta(days=15)
            end_window = announcement_date + timedelta(days=60)

            prices_query = db.query(PriceHistory).filter(
                PriceHistory.ticker == ticker,
                PriceHistory.date >= start_window,
                PriceHistory.date <= end_window
            ).order_by(PriceHistory.date.asc()).all()

            if not prices_query:
                # Log insufficient price data
                error = QCError(
                    ticker=ticker,
                    issue_type="Insufficient Price Data",
                    severity="High",
                    message="No price data found in the window to calculate returns.",
                    related_table="deals",
                    related_id=deal.id
                )
                db.add(error)
                db.commit()
                fail_count += 1
                continue

            # Dictionary for quick O(1) lookups
            price_map = {p.date: p for p in prices_query}

            # Use event clock logic
            # Build list of available trading dates from our database price history
            available_trading_dates = sorted([p.date for p in prices_query])

            # Since we assume announcement time is missing (per Phase 1 rules),
            # Day 0 defaults to Announcement_Date if trading day, else next trading day
            day_0_date = get_next_trading_day(announcement_date, available_trading_dates)
            pre_announcement_date = get_previous_trading_day(day_0_date, available_trading_dates)

            pre_close_record = price_map.get(pre_announcement_date)
            day_0_record = price_map.get(day_0_date)

            if not pre_close_record or not day_0_record:
                logger.warning(f"Could not find valid Day 0 or Pre-announcement close for {ticker}. Available dates may not align.")
                error = QCError(
                    ticker=ticker,
                    issue_type="Insufficient Price Data",
                    severity="High",
                    message="Missing Day 0 or Pre-announcement price.",
                    related_table="deals",
                    related_id=deal.id
                )
                db.add(error)
                db.commit()
                fail_count += 1
                continue

            # Corporate Actions / Splits QC Check
            pre_announcement_close = pre_close_record.adjusted_close or pre_close_record.close
            day_0_close = day_0_record.adjusted_close or day_0_record.close

            if price_per_share and pre_announcement_close:
                offer_ratio = price_per_share / pre_announcement_close
                if offer_ratio < 0.10 or offer_ratio > 10.0:
                    db.add(QCError(
                        ticker=ticker,
                        issue_type="Possible Reverse Split Issue",
                        severity="Warning",
                        message=f"Offer price ({price_per_share}) to pre-announcement close ({pre_announcement_close}) ratio is {offer_ratio:.2f}.",
                        related_table="deals",
                        related_id=deal.id
                    ))

            # Filter future prices starting from Day 1 to calculate N-day metrics
            future_dates = [d for d in available_trading_dates if d > day_0_date]

            def get_nth_day_close(n: int) -> float:
                if len(future_dates) >= n:
                    p = price_map[future_dates[n-1]]
                    return p.adjusted_close or p.close
                return None

            day_1_close = get_nth_day_close(1)
            day_5_close = get_nth_day_close(5)
            day_10_close = get_nth_day_close(10)
            day_30_close = get_nth_day_close(30)

            def calc_return(future_close):
                if future_close and day_0_close:
                    return (future_close / day_0_close) - 1.0
                return None

            return_1d = calc_return(day_1_close)
            return_5d = calc_return(day_5_close)
            return_10d = calc_return(day_10_close)
            return_30d = calc_return(day_30_close)

            # Calculate Max Drawdown & Max Gain for 10D and 30D, Post-Event Volume, Absorption
            def calc_window_metrics(n_days: int):
                window_dates = future_dates[:n_days]
                max_gain = None
                max_drawdown = None
                total_volume = 0.0

                if not window_dates:
                    return None, None, 0.0

                highest_high = -float('inf')
                lowest_low = float('inf')

                for d in window_dates:
                    p = price_map[d]

                    # Estimate high/low from daily prices (using adjusted if possible, but high/low aren't usually adjusted in simple pulls, we'll use unadjusted ratio)
                    # For simplicity, since yfinance auto_adjust=False, we just look at raw or adjusted. Let's use close for simplicity of max gain/drawdown vs Day 0 close
                    p_close = p.adjusted_close or p.close
                    highest_high = max(highest_high, p_close)
                    lowest_low = min(lowest_low, p_close)
                    total_volume += (p.volume or 0.0)

                if day_0_close > 0:
                    max_gain = (highest_high / day_0_close) - 1.0
                    max_drawdown = (lowest_low / day_0_close) - 1.0

                return max_gain, max_drawdown, total_volume

            max_gain_10d, max_drawdown_10d, post_volume_10d = calc_window_metrics(10)
            max_gain_30d, max_drawdown_30d, post_volume_30d = calc_window_metrics(30)

            # Deal Absorption = post-event volume / shares_issued
            deal_absorption_10d = (post_volume_10d / shares_issued) if shares_issued and shares_issued > 0 else None
            deal_absorption_30d = (post_volume_30d / shares_issued) if shares_issued and shares_issued > 0 else None

            # Reclaim offering price logic
            closed_below_offering_price = False
            reclaimed_offering_price = False
            days_to_reclaim = None

            if price_per_share:
                # Check day 0 and beyond
                all_post_event_dates = [day_0_date] + future_dates

                for idx, d in enumerate(all_post_event_dates):
                    p_close = price_map[d].adjusted_close or price_map[d].close

                    if p_close < price_per_share:
                        closed_below_offering_price = True

                    if closed_below_offering_price and p_close >= price_per_share:
                        reclaimed_offering_price = True
                        days_to_reclaim = idx
                        break

            # Save the event returns
            event_return = EventReturn(
                deal_id=deal.id,
                ticker=ticker,
                announcement_date=announcement_date,
                pre_announcement_close=pre_announcement_close,
                day_0_close=day_0_close,
                return_1d=return_1d,
                return_5d=return_5d,
                return_10d=return_10d,
                return_30d=return_30d,
                max_gain_10d=max_gain_10d,
                max_drawdown_10d=max_drawdown_10d,
                max_gain_30d=max_gain_30d,
                max_drawdown_30d=max_drawdown_30d,
                closed_below_offering_price=closed_below_offering_price,
                reclaimed_offering_price=reclaimed_offering_price,
                days_to_reclaim_offering_price=days_to_reclaim,
                post_event_volume_10d=post_volume_10d,
                post_event_volume_30d=post_volume_30d,
                deal_absorption_10d=deal_absorption_10d,
                deal_absorption_30d=deal_absorption_30d,
                qc_status="Clean"
            )
            db.add(event_return)
            db.commit()
            success_count += 1
            logger.info(f"Calculated returns for deal {deal.id} ({ticker})")

        except Exception as e:
            logger.error(f"Error calculating returns for deal {deal.id} ({deal.ticker}): {e}")
            db.rollback()
            fail_count += 1

    db.close()
    logger.info(f"Return calculation complete. Success: {success_count}. Failed: {fail_count}.")
