# backend/app/api/dashboard.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.db import get_db
from app.models.user import User
from app.schemas.schemas import UserInDB
from app.api.auth import get_current_user

router = APIRouter()

@router.get("/dashboard", response_model=UserInDB)
def get_dashboard_data(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if not current_user.consent_given or not current_user.discovery_complete:
        raise HTTPException(status_code=403, detail="Complete consent and discovery first.")

    return current_user
