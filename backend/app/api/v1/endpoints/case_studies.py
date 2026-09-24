from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.case_study import CaseStudy
from app.schemas.case_study import CaseStudyOut

router = APIRouter()

@router.get("/case-studies", response_model=List[CaseStudyOut])
def get_public_case_studies(db: Session = Depends(get_db)):
    return db.query(CaseStudy).filter(CaseStudy.is_published == True).order_by(CaseStudy.created_at.desc()).all()

@router.get("/case-studies/{slug}", response_model=CaseStudyOut)
def get_public_case_study_by_slug(slug: str, db: Session = Depends(get_db)):
    study = db.query(CaseStudy).filter(CaseStudy.slug == slug, CaseStudy.is_published == True).first()
    if not study:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Case study '{slug}' not found."
        )
    return study
