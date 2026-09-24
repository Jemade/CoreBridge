from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.api.v1.endpoints.auth import get_current_user
from app.models.user import User
from app.models.audit import AuditRequest
from app.models.contact import ContactMessage
from app.models.service import Service
from app.models.case_study import CaseStudy
from app.models.site_setting import SiteSetting
from app.schemas.audit import AuditResponse, AuditStatusUpdate
from app.schemas.contact import ContactResponse, ContactStatusUpdate
from app.schemas.service import ServiceOut, ServiceCreate, ServiceUpdate
from app.schemas.case_study import CaseStudyOut, CaseStudyCreate, CaseStudyUpdate

router = APIRouter(prefix="/admin", dependencies=[Depends(get_current_user)])

# ── Audit Requests Management ──

@router.get("/audits", response_model=List[AuditResponse])
def get_all_audits(
    status_filter: Optional[str] = Query(None, alias="status"),
    db: Session = Depends(get_db)
):
    query = db.query(AuditRequest)
    if status_filter and status_filter != "ALL":
        query = query.filter(AuditRequest.status == status_filter)
    return query.order_by(AuditRequest.created_at.desc()).all()

@router.patch("/audits/{audit_id}/status", response_model=AuditResponse)
def update_audit_lead_status(
    audit_id: str,
    update_in: AuditStatusUpdate,
    db: Session = Depends(get_db)
):
    audit = db.query(AuditRequest).filter(AuditRequest.id == audit_id).first()
    if not audit:
        raise HTTPException(status_code=404, detail="Audit request not found.")
    audit.status = update_in.status
    if update_in.notes is not None:
        audit.notes = update_in.notes
    db.commit()
    db.refresh(audit)
    return audit

# ── Contact Messages Management ──

@router.get("/contact", response_model=List[ContactResponse])
def get_all_contacts(
    status_filter: Optional[str] = Query(None, alias="status"),
    db: Session = Depends(get_db)
):
    query = db.query(ContactMessage)
    if status_filter and status_filter != "ALL":
        query = query.filter(ContactMessage.status == status_filter)
    return query.order_by(ContactMessage.created_at.desc()).all()

@router.patch("/contact/{contact_id}/status", response_model=ContactResponse)
def update_contact_inquiry_status(
    contact_id: str,
    update_in: ContactStatusUpdate,
    db: Session = Depends(get_db)
):
    contact = db.query(ContactMessage).filter(ContactMessage.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact message not found.")
    contact.status = update_in.status
    db.commit()
    db.refresh(contact)
    return contact

# ── Services Management ──

@router.get("/services", response_model=List[ServiceOut])
def list_admin_services(db: Session = Depends(get_db)):
    return db.query(Service).order_by(Service.display_order.asc()).all()

@router.post("/services", response_model=ServiceOut, status_code=status.HTTP_201_CREATED)
def create_new_service(service_in: ServiceCreate, db: Session = Depends(get_db)):
    existing = db.query(Service).filter(Service.slug == service_in.slug).first()
    if existing:
        raise HTTPException(status_code=400, detail="Service with this slug already exists.")
    svc = Service(**service_in.model_dump())
    db.add(svc)
    db.commit()
    db.refresh(svc)
    return svc

@router.put("/services/{service_id}", response_model=ServiceOut)
def update_existing_service(service_id: str, update_in: ServiceUpdate, db: Session = Depends(get_db)):
    svc = db.query(Service).filter(Service.id == service_id).first()
    if not svc:
        raise HTTPException(status_code=404, detail="Service not found.")
    for field, val in update_in.model_dump(exclude_unset=True).items():
        setattr(svc, field, val)
    db.commit()
    db.refresh(svc)
    return svc

@router.delete("/services/{service_id}")
def delete_existing_service(service_id: str, db: Session = Depends(get_db)):
    svc = db.query(Service).filter(Service.id == service_id).first()
    if not svc:
        raise HTTPException(status_code=404, detail="Service not found.")
    db.delete(svc)
    db.commit()
    return {"success": True, "message": "Service deleted successfully."}

# ── Case Studies Management ──

@router.get("/case-studies", response_model=List[CaseStudyOut])
def list_admin_case_studies(db: Session = Depends(get_db)):
    return db.query(CaseStudy).order_by(CaseStudy.created_at.desc()).all()

@router.post("/case-studies", response_model=CaseStudyOut, status_code=status.HTTP_201_CREATED)
def create_new_case_study(study_in: CaseStudyCreate, db: Session = Depends(get_db)):
    existing = db.query(CaseStudy).filter(CaseStudy.slug == study_in.slug).first()
    if existing:
        raise HTTPException(status_code=400, detail="Case study with this slug already exists.")
    study = CaseStudy(**study_in.model_dump())
    db.add(study)
    db.commit()
    db.refresh(study)
    return study

@router.put("/case-studies/{study_id}", response_model=CaseStudyOut)
def update_existing_case_study(study_id: str, update_in: CaseStudyUpdate, db: Session = Depends(get_db)):
    study = db.query(CaseStudy).filter(CaseStudy.id == study_id).first()
    if not study:
        raise HTTPException(status_code=404, detail="Case study not found.")
    for field, val in update_in.model_dump(exclude_unset=True).items():
        setattr(study, field, val)
    db.commit()
    db.refresh(study)
    return study

@router.delete("/case-studies/{study_id}")
def delete_existing_case_study(study_id: str, db: Session = Depends(get_db)):
    study = db.query(CaseStudy).filter(CaseStudy.id == study_id).first()
    if not study:
        raise HTTPException(status_code=404, detail="Case study not found.")
    db.delete(study)
    db.commit()
    return {"success": True, "message": "Case study deleted."}

# ── Site Settings ──

@router.get("/settings")
def get_site_settings(db: Session = Depends(get_db)):
    settings_records = db.query(SiteSetting).all()
    return {s.key: s.value for s in settings_records}

@router.post("/settings")
def update_site_settings(payload: dict, db: Session = Depends(get_db)):
    for key, val in payload.items():
        record = db.query(SiteSetting).filter(SiteSetting.key == key).first()
        if record:
            record.value = str(val)
        else:
            db.add(SiteSetting(key=key, value=str(val)))
    db.commit()
    return {"success": True, "settings": payload}
