from fastapi import FastAPI
from app.api import auth, user, conversation

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(user.router, prefix="/user", tags=["user"])
app.include_router(conversation.router, prefix="/conversation", tags=["conversation"])

@app.get("/")
def read_root():
    return {"message": "VitalPath 2.0 Backend is Running"}
