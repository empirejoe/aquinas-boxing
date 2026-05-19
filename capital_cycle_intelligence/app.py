import click
from src.database import init_db
from src.ingest.deal_ingest import ingest_deals_file
from src.market_data.fetch import fetch_all_prices
from src.event_study.returns import calculate_returns

@click.group()
def cli():
    """Capital Cycle Intelligence CLI"""
    pass

@cli.command(name='init-db')
def init_db_cmd():
    """Initialize the database."""
    init_db()

@cli.command(name='ingest-deals')
@click.option('--file', required=True, help="Path to the raw deals Excel/CSV file.")
def ingest_deals(file):
    """Ingest deals from a file."""
    ingest_deals_file(file)

@cli.command(name='fetch-prices')
def fetch_prices_cmd():
    """Fetch daily OHLCV price data for ingested deals."""
    fetch_all_prices()

@cli.command(name='calculate-returns')
def calculate_returns_cmd():
    """Calculate post-deal event returns."""
    calculate_returns()

if __name__ == "__main__":
    cli()
