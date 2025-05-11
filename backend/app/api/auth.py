# E:\Projects\vitalpath-2.0\backend\app\api\auth.py

from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from app.models import user as models
from app.core import database
from passlib.context import CryptContext
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserCreate(BaseModel):
    email: str
    password: str
    full_name: str | None = None

class TokenResponse(BaseModel):
    access_token: str
    token_type: str

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register", status_code=status.HTTP_201_CREATED)
def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = pwd_context.hash(user.password)
    new_user = models.User(
        email=user.email,
        full_name=user.full_name,
        hashed_password=hashed_password,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User registered successfully"}

@router.post("/login", response_model=TokenResponse)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    if not pwd_context.verify(form_data.password, db_user.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    # For now just return dummy token (later upgrade with real JWT if needed)
    return {"access_token": "dummy-token", "token_type": "bearer"}



