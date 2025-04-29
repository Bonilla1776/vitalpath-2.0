from fastapi import FastAPI
from app.api import auth, user, conversation
from fastapi import APIRouter

app = FastAPI()

# Include main app routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(user.router, prefix="/user", tags=["user"])
app.include_router(conversation.router, prefix="/conversation", tags=["conversation"])

# Root route
@app.get("/")
def read_root():
    return {"message": "VitalPath 2.0 Backend is Running"}

# Health check route for Azure Health Probe
@app.get("/healthz")
def health_check():
    return {"status": "ok"}

