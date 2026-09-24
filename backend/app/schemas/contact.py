from typing import Optional
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field, ConfigDict

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=255)
    subject: Optional[str] = Field(None, max_length=255)
    message: str = Field(..., min_length=5, max_length=5000)
    honeypot: Optional[str] = None

class ContactStatusUpdate(BaseModel):
    status: str = Field(..., pattern="^(NEW|READ|REPLIED|ARCHIVED)$")

class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    company: Optional[str] = None
    subject: Optional[str] = None
    message: str
    status: str
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)

class ContactSubmitSuccess(BaseModel):
    success: bool = True
    id: str
    message: str
