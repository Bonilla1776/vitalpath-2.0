from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.db import get_db
from backend.app.models import User, Consent, DiscoveryData

router = APIRouter()

@router.get("/auth/check-status")
def check_user_status(email: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        return {"registered": False, "consent": False, "discovery": False}

    consent = db.query(Consent).filter(Consent.user_id == user.id).first()
    discovery = db.query(DiscoveryData).filter(DiscoveryData.user_id == user.id).first()

    return {
        "registered": True,
        "consent": bool(consent),
        "discovery": bool(discovery)
    }

