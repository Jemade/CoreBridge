from typing import Optional
from datetime import datetime
from pydantic import BaseModel, ConfigDict

class CaseStudyBase(BaseModel):
    slug: str
    title: str
    summary: str
    challenge: Optional[str] = None
    approach: Optional[str] = None
    solution: Optional[str] = None
    results: Optional[str] = None
    technology: Optional[str] = None
    industry: Optional[str] = None
    is_featured: bool = False
    is_published: bool = True

class CaseStudyCreate(CaseStudyBase):
    pass

class CaseStudyUpdate(BaseModel):
    title: Optional[str] = None
    summary: Optional[str] = None
    challenge: Optional[str] = None
    approach: Optional[str] = None
    solution: Optional[str] = None
    results: Optional[str] = None
    technology: Optional[str] = None
    industry: Optional[str] = None
    is_featured: Optional[bool] = None
    is_published: Optional[bool] = None

class CaseStudyOut(CaseStudyBase):
    id: str
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
