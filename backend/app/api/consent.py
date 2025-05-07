from fastapi import APIRouter, Request, HTTPException, status, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.consent import Consent
from app.schemas.consent import ConsentSubmission
import os

router = APIRouter()
security = HTTPBearer()

B2C_JWT_ISSUER = os.getenv("AZURE_AD_B2C_ISSUER")
B2C_JWT_AUDIENCE = os.getenv("AZURE_AD_B2C_CLIENT_ID")

def get_user_id_from_token(credentials: HTTPAuthorizationCredentials):
    token = credentials.credentials
    try:
        claims = jwt.decode(token, options={"verify_signature": False})
        if claims.get("aud") != B2C_JWT_AUDIENCE:
            raise HTTPException(status_code=401, detail="Invalid audience")
        return claims.get("sub")
    except JWTError as e:
        raise HTTPException(status_code=401, detail=f"Invalid token: {str(e)}")

@router.post("/api/consent")
async def submit_consent(
    consent: ConsentSubmission,
    db: Session = Depends(get_db),
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    if not consent.consentGiven:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Consent not given."
        )

    user_id = get_user_id_from_token(credentials)

    existing = db.query(Consent).filter(Consent.user_id == user_id).first()
    if existing:
        existing.consent_given = True
    else:
        new_consent = Consent(user_id=user_id, consent_given=True)
        db.add(new_consent)

    db.commit()
    return {"message": "Consent recorded successfully."}

