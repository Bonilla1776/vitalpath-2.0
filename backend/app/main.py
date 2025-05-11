# backend/app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, user, conversation, consent, dashboard
from app.core.database import Base, engine

# Initialize FastAPI app
app = FastAPI(
    title="VitalPath 2.0 Backend",
    description="API for VitalPath health coaching platform",
    version="1.0.0",
)

# Create database tables if they don't exist
Base.metadata.create_all(bind=engine)

# CORS configuration: Allow frontend app to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://vitalpath-frontend.gentlepebble-9bae58f5.westus2.azurecontainerapps.io"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(user.router, prefix="/user", tags=["User"])
app.include_router(conversation.router, prefix="/conversation", tags=["Conversation"])
app.include_router(consent.router, prefix="/api", tags=["Consent"])
app.include_router(dashboard.router, prefix="/api", tags=["Dashboard"])

# Root endpoint
@app.get("/", tags=["Root"])
def read_root():
    return {"message": "VitalPath 2.0 Backend is Running"}

# Health check endpoint
@app.get("/healthz", tags=["Health"])
def health_check():
    return {"status": "ok"}








