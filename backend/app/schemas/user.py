from typing import Optional
from pydantic import BaseModel, EmailStr, ConfigDict
from datetime import datetime

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: str
    email: EmailStr
    full_name: Optional[str] = None
    role: str
    is_active: bool
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: Optional[UserOut] = None

class TokenPayload(BaseModel):
    sub: Optional[str] = None
    exp: Optional[int] = None
