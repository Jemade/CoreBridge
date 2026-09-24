from fastapi import APIRouter, Depends, Request, BackgroundTasks, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.contact import ContactMessage
from app.schemas.contact import ContactCreate, ContactSubmitSuccess
from app.core.rate_limit import check_rate_limit, verify_honeypot
from app.services.email import send_contact_notification

router = APIRouter()

@router.post("/contact", response_model=ContactSubmitSuccess, status_code=status.HTTP_201_CREATED)
def submit_contact_inquiry(
    request: Request,
    contact_in: ContactCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    # 1. Anti-spam honeypot
    verify_honeypot(contact_in.honeypot)

    # 2. Rate limiting check
    check_rate_limit(request, limit=10, window_seconds=60)

    client_ip = request.client.host if request.client else None

    # 3. Create persistent record
    contact = ContactMessage(
        name=contact_in.name.strip(),
        email=contact_in.email.lower().strip(),
        company=contact_in.company.strip() if contact_in.company else None,
        subject=contact_in.subject.strip() if contact_in.subject else None,
        message=contact_in.message.strip(),
        status="NEW",
        ip_address=client_ip
    )
    db.add(contact)
    db.commit()
    db.refresh(contact)

    # 4. Background email alert
    background_tasks.add_task(send_contact_notification, contact)

    return {
        "success": True,
        "id": contact.id,
        "message": "Thank you for contacting Corebridge. Our engineering team will get back to you promptly."
    }
