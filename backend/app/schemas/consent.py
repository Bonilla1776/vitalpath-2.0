from pydantic import BaseModel

class ConsentSubmission(BaseModel):
    consentGiven: bool
