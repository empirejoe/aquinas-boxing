from abc import ABC, abstractmethod
from typing import List, Dict, Any
from datetime import date

class MarketDataProvider(ABC):
    @abstractmethod
    def fetch_historical_prices(self, ticker: str, start_date: date, end_date: date) -> List[Dict[str, Any]]:
        """
        Fetch OHLCV price history for a given ticker and date range.

        Returns a list of dictionaries with keys:
        - date (date)
        - open (float)
        - high (float)
        - low (float)
        - close (float)
        - adjusted_close (float)
        - volume (float)
        """
        pass
