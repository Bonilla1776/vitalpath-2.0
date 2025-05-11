from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from app.core.config import settings

# Create the SQLAlchemy engine
engine = create_engine(settings.database_url, pool_pre_ping=True)

# Create a configured "SessionLocal" class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for declarative models
Base = declarative_base()

# Dependency function for getting a DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
