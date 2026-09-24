from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, ConfigDict

class IndustryBase(BaseModel):
    slug: str
    name: str
    short_desc: str
    desc: Optional[str] = None
    image: Optional[str] = None
    challenges: Optional[List[str]] = []
    solutions: Optional[List[str]] = []
    display_order: int = 0
    is_active: bool = True

class IndustryCreate(IndustryBase):
    pass

class IndustryUpdate(BaseModel):
    name: Optional[str] = None
    short_desc: Optional[str] = None
    desc: Optional[str] = None
    image: Optional[str] = None
    challenges: Optional[List[str]] = None
    solutions: Optional[List[str]] = None
    display_order: Optional[int] = None
    is_active: Optional[bool] = None

class IndustryOut(IndustryBase):
    id: str
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
