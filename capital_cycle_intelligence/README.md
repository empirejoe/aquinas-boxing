# Capital Cycle Intelligence

A production-quality local Python research application designed to analyze small-cap public companies that rely on dilutive capital-markets financing.

**Research Only Disclaimer**: This is a research and intelligence platform, not an automated trading system or a generic stock scanner. It does not make trade recommendations.

## Requirements
- Python 3.11+
- See `requirements.txt` for dependencies.

## Setup Instructions
1. Clone the repository (or initialize it).
2. Create and activate a Python virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Configuration & Usage
Place your raw input Excel file (e.g., `2026_registered_direct_offerings.xlsx`) into the `data/raw/` directory.

### Initialize the Database
```bash
python app.py init-db
```

### Ingest Deals
```bash
python app.py ingest-deals --file data/raw/2026_registered_direct_offerings.xlsx
```

### Fetch Prices
```bash
python app.py fetch-prices
```

### Calculate Returns
```bash
python app.py calculate-returns
```

### Outputs
Data is stored locally in an SQLite database `data/capital_cycle_intelligence.db` and output logs are available in `logs/app.log`.

### QC Flags
The system generates Quality Control (QC) flags if data is missing or anomalies (like massive split discrepancies) are detected. These are logged in the `qc_errors` database table.
