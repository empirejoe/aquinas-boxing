import yfinance as yf
from datetime import date, timedelta
from typing import List, Dict, Any
from src.market_data.provider_base import MarketDataProvider
from src.utils.logging_config import logger

class YFinanceProvider(MarketDataProvider):
    def fetch_historical_prices(self, ticker: str, start_date: date, end_date: date) -> List[Dict[str, Any]]:
        yf_end_date = end_date + timedelta(days=1)

        logger.info(f"Fetching yfinance data for {ticker} from {start_date} to {yf_end_date}")

        try:
            ticker_obj = yf.Ticker(ticker)
            df = ticker_obj.history(start=start_date.isoformat(), end=yf_end_date.isoformat(), auto_adjust=False)

            if df.empty:
                logger.warning(f"No price data returned from yfinance for {ticker}")
                return []

            prices = []
            for index, row in df.iterrows():
                record_date = index.date()
                adj_close = row.get('Adj Close', row.get('Close'))

                prices.append({
                    'date': record_date,
                    'open': float(row['Open']),
                    'high': float(row['High']),
                    'low': float(row['Low']),
                    'close': float(row['Close']),
                    'adjusted_close': float(adj_close),
                    'volume': float(row['Volume']),
                    'data_provider': 'yfinance'
                })

            return prices

        except Exception as e:
            logger.error(f"Failed to fetch data from yfinance for {ticker}: {e}")
            return []
