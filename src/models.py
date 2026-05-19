from datetime import datetime
from sqlalchemy import create_engine, Column, Integer, String, Float, Date, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class Deal(Base):
    __tablename__ = 'deals'

    id = Column(Integer, primary_key=True)
    ticker = Column(String, nullable=False, index=True)
    company = Column(String)
    event_type = Column(String, default="Registered Direct Offering")
    announcement_date = Column(Date, index=True)
    announcement_time = Column(String) # For later use, e.g., "08:00 AM"
    pricing_date = Column(Date)
    closing_date = Column(Date)
    shares_issued = Column(Float)
    price_per_share = Column(Float)
    gross_proceeds_usd_millions = Column(Float)
    warrant_coverage = Column(String)
    warrant_exercise_price = Column(Float)
    placement_agent = Column(String)
    source_url = Column(String)
    source_name = Column(String)
    qc_status = Column(String) # e.g. "Clean", "Issues Found"
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class PriceHistory(Base):
    __tablename__ = 'price_history'

    id = Column(Integer, primary_key=True)
    ticker = Column(String, nullable=False, index=True)
    date = Column(Date, nullable=False, index=True)
    open = Column(Float)
    high = Column(Float)
    low = Column(Float)
    close = Column(Float)
    adjusted_close = Column(Float)
    volume = Column(Float)
    data_provider = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

class EventReturn(Base):
    __tablename__ = 'event_returns'

    id = Column(Integer, primary_key=True)
    deal_id = Column(Integer, ForeignKey('deals.id'), nullable=False, index=True)
    ticker = Column(String, nullable=False, index=True)
    announcement_date = Column(Date, index=True)
    pre_announcement_close = Column(Float)
    day_0_close = Column(Float)
    return_1d = Column(Float)
    return_5d = Column(Float)
    return_10d = Column(Float)
    return_30d = Column(Float)
    max_gain_10d = Column(Float)
    max_drawdown_10d = Column(Float)
    max_gain_30d = Column(Float)
    max_drawdown_30d = Column(Float)
    closed_below_offering_price = Column(Boolean)
    reclaimed_offering_price = Column(Boolean)
    days_to_reclaim_offering_price = Column(Integer)
    post_event_volume_10d = Column(Float)
    post_event_volume_30d = Column(Float)
    deal_absorption_10d = Column(Float)
    deal_absorption_30d = Column(Float)
    qc_status = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

class IssuerProfile(Base):
    __tablename__ = 'issuer_profiles'

    id = Column(Integer, primary_key=True)
    ticker = Column(String, nullable=False, index=True, unique=True)
    company = Column(String)
    financing_count_3m = Column(Integer)
    financing_count_6m = Column(Integer)
    financing_count_12m = Column(Integer)
    financing_count_24m = Column(Integer)
    total_capital_raised_12m = Column(Float)
    total_shares_issued_12m = Column(Float)
    repeat_dilutor_score = Column(Float)
    dilution_risk_score = Column(Float)
    post_dilution_upside_score = Column(Float)
    last_updated = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class QCError(Base):
    __tablename__ = 'qc_errors'

    id = Column(Integer, primary_key=True)
    related_table = Column(String)
    related_id = Column(Integer)
    ticker = Column(String, index=True)
    issue_type = Column(String)
    severity = Column(String) # 'High', 'Low', 'Warning'
    message = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

class Source(Base):
    __tablename__ = 'sources'

    id = Column(Integer, primary_key=True)
    deal_id = Column(Integer, ForeignKey('deals.id'), nullable=False, index=True)
    source_url = Column(String)
    source_name = Column(String)
    source_type = Column(String)
    retrieved_at = Column(DateTime, default=datetime.utcnow)
