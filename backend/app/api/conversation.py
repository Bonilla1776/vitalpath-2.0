from fastapi import APIRouter

router = APIRouter()

@router.post("/start")
def start_conversation():
    return {"message": "Conversation started"}
