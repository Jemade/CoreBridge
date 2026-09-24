from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, ConfigDict

class ServiceBase(BaseModel):
    slug: str
    name: str
    short_description: str
    description: Optional[str] = None
    deliverables: Optional[List[str]] = []
    icon_name: Optional[str] = None
    display_order: int = 0
    is_active: bool = True

class ServiceCreate(ServiceBase):
    pass

class ServiceUpdate(BaseModel):
    name: Optional[str] = None
    short_description: Optional[str] = None
    description: Optional[str] = None
    deliverables: Optional[List[str]] = None
    icon_name: Optional[str] = None
    display_order: Optional[int] = None
    is_active: Optional[bool] = None

class ServiceOut(ServiceBase):
    id: str
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
