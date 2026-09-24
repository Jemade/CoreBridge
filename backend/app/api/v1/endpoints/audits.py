from fastapi import APIRouter, Depends, Request, BackgroundTasks, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.audit import AuditRequest
from app.schemas.audit import AuditCreate, AuditSubmitSuccess
from app.core.rate_limit import check_rate_limit, verify_honeypot
from app.services.email import send_audit_notification

router = APIRouter()

@router.post("/audits", response_model=AuditSubmitSuccess, status_code=status.HTTP_201_CREATED)
def request_operational_audit(
    request: Request,
    audit_in: AuditCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    # 1. Anti-spam honeypot
    verify_honeypot(audit_in.honeypot)

    # 2. Rate limiting check (e.g., max 10 requests per minute per IP)
    check_rate_limit(request, limit=10, window_seconds=60)

    client_ip = request.client.host if request.client else None

    # 3. Create persistent record
    audit = AuditRequest(
        name=audit_in.name.strip(),
        company=audit_in.company.strip(),
        email=audit_in.email.lower().strip(),
        phone=audit_in.phone.strip(),
        message=audit_in.message.strip(),
        status="NEW",
        ip_address=client_ip
    )
    db.add(audit)
    db.commit()
    db.refresh(audit)

    # 4. Asynchronous email alert dispatch
    background_tasks.add_task(send_audit_notification, audit)

    return {
        "success": True,
        "id": audit.id,
        "message": "Operational audit request received. An engineering lead will review your submission and contact you within 24 hours."
    }
