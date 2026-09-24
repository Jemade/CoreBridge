from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.service import Service
from app.schemas.service import ServiceOut

router = APIRouter()

@router.get("/services", response_model=List[ServiceOut])
def get_public_services(db: Session = Depends(get_db)):
    return db.query(Service).filter(Service.is_active == True).order_by(Service.display_order.asc()).all()
