from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.industry import Industry
from app.schemas.industry import IndustryOut

router = APIRouter()

@router.get("/industries", response_model=List[IndustryOut])
def get_public_industries(db: Session = Depends(get_db)):
    return db.query(Industry).filter(Industry.is_active == True).order_by(Industry.display_order.asc()).all()

@router.get("/industries/{slug}", response_model=IndustryOut)
def get_public_industry_by_slug(slug: str, db: Session = Depends(get_db)):
    industry = db.query(Industry).filter(Industry.slug == slug, Industry.is_active == True).first()
    if not industry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Industry '{slug}' not found."
        )
    return industry
