from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from app.core.database import Base

class Consent(Base):
    __tablename__ = "consents"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    consent_given = Column(String, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)
