from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class DiscoveryData(Base):
    __tablename__ = "discovery_data"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    health_goal = Column(String, nullable=True)
    current_status = Column(String, nullable=True)

