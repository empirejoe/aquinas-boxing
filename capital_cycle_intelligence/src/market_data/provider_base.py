from abc import ABC, abstractmethod
from typing import List, Dict, Any
from datetime import date

class MarketDataProvider(ABC):
    @abstractmethod
    def fetch_historical_prices(self, ticker: str, start_date: date, end_date: date) -> List[Dict[str, Any]]:
        pass
