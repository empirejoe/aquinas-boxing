import pytest
from src.ingest.validators import normalize_ticker, parse_date, extract_float

def test_normalize_ticker():
    assert normalize_ticker(" AAPL ") == "AAPL"
    assert normalize_ticker("msft") == "MSFT"
    assert normalize_ticker(None) == ""

def test_parse_date():
    import datetime
    assert parse_date("2023-01-10") == datetime.date(2023, 1, 10)
    assert parse_date("invalid") is None

def test_extract_float():
    assert extract_float("150.5") == 150.5
    assert extract_float(None) is None
    assert extract_float("invalid") is None
