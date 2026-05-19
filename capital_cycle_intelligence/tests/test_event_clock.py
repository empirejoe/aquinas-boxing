import pytest
import datetime
from src.event_study.event_clock import get_trading_days, get_next_trading_day, get_previous_trading_day

def test_get_trading_days():
    start = datetime.date(2023, 1, 1)
    end = datetime.date(2023, 1, 10)
    days = get_trading_days(start, end)

    # 2023-01-01 is Sunday
    # 2023-01-02 is Monday (New Year's Day observed) -> US holiday
    assert datetime.date(2023, 1, 2) not in days
    assert datetime.date(2023, 1, 3) in days # Tuesday

def test_get_next_trading_day():
    days = [datetime.date(2023, 1, 3), datetime.date(2023, 1, 4)]
    assert get_next_trading_day(datetime.date(2023, 1, 1), days) == datetime.date(2023, 1, 3)
    assert get_next_trading_day(datetime.date(2023, 1, 3), days) == datetime.date(2023, 1, 3)

def test_get_previous_trading_day():
    days = [datetime.date(2023, 1, 3), datetime.date(2023, 1, 4)]
    assert get_previous_trading_day(datetime.date(2023, 1, 4), days) == datetime.date(2023, 1, 3)
