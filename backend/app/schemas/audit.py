from typing import Optional
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field, ConfigDict

class AuditCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    company: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=50)
    message: str = Field(..., min_length=5, max_length=5000)
    honeypot: Optional[str] = None

class AuditStatusUpdate(BaseModel):
    status: str = Field(..., pattern="^(NEW|CONTACTED|DISCOVERY|PROPOSAL|WON|LOST|ARCHIVED)$")
    notes: Optional[str] = None

class AuditResponse(BaseModel):
    id: str
    name: str
    company: str
    email: str
    phone: str
    message: str
    status: str
    notes: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)

class AuditSubmitSuccess(BaseModel):
    success: bool = True
    id: str
    message: str
