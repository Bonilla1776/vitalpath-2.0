# backend/app/api/discovery.py

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.discovery import Discovery
from app.core.auth import jwt, SECRET_KEY, ALGORITHM

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

def get_current_email(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload.get("sub")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")

@router.post("/discovery")
def submit_discovery(form_data: dict, db: Session = Depends(get_db), email: str = Depends(get_current_email)):
    discovery = Discovery(user_email=email, data=form_data)
    db.add(discovery)
    db.commit()
    return {"message": "Discovery recorded"}
