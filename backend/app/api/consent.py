# backend/app/api/consent.py

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.consent import Consent
from app.core.auth import jwt, SECRET_KEY, ALGORITHM

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

def get_current_email(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload.get("sub")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")

@router.post("/consent")
def submit_consent(consentGiven: bool, db: Session = Depends(get_db), email: str = Depends(get_current_email)):
    consent = Consent(user_email=email, consent_given=consentGiven)
    db.add(consent)
    db.commit()
    return {"message": "Consent recorded"}


