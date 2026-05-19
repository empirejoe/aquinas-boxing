import pandas as pd
from typing import Dict, Any, List

def normalize_ticker(ticker: str) -> str:
    """Cleans and normalizes ticker symbols."""
    if not isinstance(ticker, str):
        return ""
    return ticker.strip().upper()

def parse_date(date_val: Any):
    """Parses date to pandas datetime, returns None if invalid."""
    if pd.isna(date_val):
        return None
    try:
        return pd.to_datetime(date_val).date()
    except Exception:
        return None

def extract_float(val: Any) -> float:
    """Extracts a float, returns None if invalid."""
    if pd.isna(val):
        return None
    try:
        return float(val)
    except (ValueError, TypeError):
        return None

def extract_string(val: Any) -> str:
    """Extracts a string, returns None if empty or invalid."""
    if pd.isna(val):
        return None
    res = str(val).strip()
    return res if res else None
