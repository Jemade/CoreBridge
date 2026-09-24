import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.core.config import settings

logger = logging.getLogger("corebridge.email")

def send_email_message(to_email: str, subject: str, body_text: str, body_html: str = None) -> bool:
    if not settings.SMTP_HOST or not settings.SMTP_USER:
        logger.info(
            f"\n[EMAIL DISPATCH SIMULATION (SMTP not configured)]"
            f"\nTo: {to_email}"
            f"\nSubject: {subject}"
            f"\n--- BODY ---\n{body_text}\n------------"
        )
        return True

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = settings.EMAILS_FROM_EMAIL
        msg["To"] = to_email

        part1 = MIMEText(body_text, "plain")
        msg.attach(part1)

        if body_html:
            part2 = MIMEText(body_html, "html")
            msg.attach(part2)

        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
            server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            server.sendmail(settings.EMAILS_FROM_EMAIL, to_email, msg.as_string())

        logger.info(f"Email sent successfully to {to_email}: {subject}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {e}")
        return False

def send_audit_notification(audit) -> bool:
    subject = f"[Corebridge Lead] New 15-Minute Operational Audit: {audit.company} ({audit.name})"
    body = f"""
NEW OPERATIONAL AUDIT REQUEST
----------------------------------------
Lead Name:     {audit.name}
Company:       {audit.company}
Email:         {audit.email}
Phone:         {audit.phone}
Submission ID: {audit.id}

Problem / Friction Described:
{audit.message}
----------------------------------------
View and update status in Admin Portal:
http://localhost:5173/admin/audits
"""
    return send_email_message(settings.ADMIN_NOTIFICATION_EMAIL, subject, body)

def send_contact_notification(contact) -> bool:
    subject = f"[Corebridge Inquiry] Inbound Message: {contact.name} - {contact.subject or 'General'}"
    body = f"""
NEW CONTACT INQUIRY
----------------------------------------
From:    {contact.name} ({contact.email})
Company: {contact.company or 'Not provided'}
Subject: {contact.subject or 'General Inquiry'}

Message:
{contact.message}
----------------------------------------
View in Admin Portal:
http://localhost:5173/admin/contacts
"""
    return send_email_message(settings.ADMIN_NOTIFICATION_EMAIL, subject, body)
