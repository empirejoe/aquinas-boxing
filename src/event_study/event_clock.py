import pandas as pd
from datetime import date
from typing import List

def get_trading_days(start_date: date, end_date: date) -> List[date]:
    """
    Returns a list of valid US trading dates between start_date and end_date.
    Uses pandas bdate_range combined with USFederalHolidayCalendar.
    """
    from pandas.tseries.holiday import USFederalHolidayCalendar
    cal = USFederalHolidayCalendar()

    # We create a business day range
    b_days = pd.bdate_range(start=start_date, end=end_date)

    # And filter out the holidays
    holidays = cal.holidays(start=start_date, end=end_date)
    trading_days = b_days[~b_days.isin(holidays)]

    return [d.date() for d in trading_days]

def get_next_trading_day(target_date: date, trading_days: List[date]) -> date:
    """Returns the next trading day from the list of valid trading days."""
    for d in trading_days:
        if d >= target_date:
            return d
    return target_date # Fallback

def get_previous_trading_day(target_date: date, trading_days: List[date]) -> date:
    """Returns the previous trading day from the list of valid trading days."""
    for d in reversed(trading_days):
        if d < target_date:
            return d
    return target_date # Fallback
