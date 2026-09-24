import logging
from sqlalchemy.orm import Session
from app.db.base import Base
from app.db.session import engine, SessionLocal
from app.core.config import settings
from app.core.security import get_password_hash
from app.models.user import User
from app.models.service import Service
from app.models.industry import Industry
from app.models.site_setting import SiteSetting

logger = logging.getLogger("corebridge.init")

INITIAL_SERVICES = [
    {
        "slug": "custom-software",
        "name": "Custom Software Development",
        "short_description": "Tailored web and mobile applications built for your unique business needs.",
        "description": "Off-the-shelf software rarely fits nuanced operational processes. We architect, build, and deploy resilient custom web and mobile platforms engineered to handle high transaction volumes and complex business logic.",
        "deliverables": [
            "Custom web platforms & internal operational portals",
            "Field & customer-facing mobile applications",
            "Scalable backend architectures and relational databases",
            "Automated testing, continuous deployment, and security hardening"
        ],
        "display_order": 1,
        "is_active": True
    },
    {
        "slug": "system-integrations",
        "name": "System Integrations",
        "short_description": "Connect your tools, data and teams for seamless workflows and better visibility.",
        "description": "Eliminate data silos, manual copy-pasting, and disconnected spreadsheets. We design reliable API pipelines, webhook listeners, and bi-directional synchronizations across your critical tools.",
        "deliverables": [
            "Custom RESTful & GraphQL API development",
            "Legacy software database bridging and ETL pipelines",
            "Payment gateway integrations (EcoCash, Paynow, Visa/Mastercard)",
            "Automated error recovery and event auditing"
        ],
        "display_order": 2,
        "is_active": True
    },
    {
        "slug": "ai-integrations",
        "name": "AI Integrations",
        "short_description": "Automate processes, add intelligence and improve decision-making with AI.",
        "description": "Practical AI integration focused on business value, not hype. We deploy intelligent document parsers, automated customer support agents, predictive stock replenishment, and intelligent workflow assistants.",
        "deliverables": [
            "Intelligent WhatsApp and omnichannel conversational agents",
            "Document processing, invoice extraction, and optical verification",
            "Predictive demand forecasting and anomaly detection",
            "Proprietary retrieval-augmented generation (RAG) on company knowledge"
        ],
        "display_order": 3,
        "is_active": True
    },
    {
        "slug": "odoo-zoho-implementation",
        "name": "Odoo & Zoho Implementation",
        "short_description": "Configure and customize powerful ERP and CRM platforms for your business.",
        "description": "Maximized ROI from enterprise ERP and CRM platforms. We manage end-to-end architecture, module customization, data migration, and staff enablement for Odoo and Zoho ecosystems.",
        "deliverables": [
            "Odoo Community & Enterprise module customization (Python/XML)",
            "Zoho One suite orchestration (CRM, Books, Inventory, Desk)",
            "Clean data migration from legacy accounting systems",
            "Role-based access controls, automated approvals, and compliance audit trails"
        ],
        "display_order": 4,
        "is_active": True
    },
    {
        "slug": "it-consultancy",
        "name": "IT Consultancy & Troubleshooting",
        "short_description": "Strategic advice, system optimization and hands-on support when you need it.",
        "description": "Unbiased technical leadership for growing businesses. Whether evaluating modern infrastructure, untangling technical debt, or debugging mission-critical system outages, we provide actionable guidance.",
        "deliverables": [
            "Comprehensive system architecture & security reviews",
            "Infrastructure cost optimization and cloud migration",
            "Incident investigation, bottleneck profiling, and performance tuning",
            "Technology roadmap planning and fractional CTO support"
        ],
        "display_order": 5,
        "is_active": True
    }
]

INITIAL_INDUSTRIES = [
    {
        "slug": "pharmacies-health",
        "name": "Pharmacies & Health",
        "short_desc": "Compliance. Traceability. Better patient care.",
        "desc": "Ensure strict batch traceability, cold-chain monitoring, automated prescription management, and regulatory compliance with healthcare authorities.",
        "image": "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=85",
        "challenges": [
            "Stringent regulatory reporting and audit traceability",
            "Expiry date management and batch-level stock tracking",
            "Integration with health insurance and digital claims"
        ],
        "solutions": [
            "Automated batch expiry alerting and FEFO inventory enforcement",
            "Integrated electronic dispensary and point-of-sale systems",
            "Secure patient communication and prescription re-order bots"
        ],
        "display_order": 1,
        "is_active": True
    },
    {
        "slug": "transport-logistics",
        "name": "Transport & Logistics",
        "short_desc": "Track. Automate. Deliver faster.",
        "desc": "Connect telematics, dispatch schedules, driver waybills, and client notifications into a unified, real-time logistics command center.",
        "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=85",
        "challenges": [
            "Blind spots in transit and unpredictable delivery ETA communications",
            "Manual paperwork and trip reconciliation errors",
            "Fuel management and fleet maintenance tracking"
        ],
        "solutions": [
            "Automated customer WhatsApp delivery notifications and live tracking",
            "Digital driver manifests and mobile proof-of-delivery (e-POD)",
            "Automated billing triggers synchronized with GPS route completion"
        ],
        "display_order": 2,
        "is_active": True
    },
    {
        "slug": "fmcg-wholesalers",
        "name": "FMCG Wholesalers",
        "short_desc": "Smarter stock. Faster sales.",
        "desc": "Keep multi-warehouse stock accurate, prevent stockouts, speed up order turnaround, and equip field sales teams with mobile ordering capabilities.",
        "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=85",
        "challenges": [
            "High volume order processing delays and reconciliation lags",
            "Discrepancies between physical warehouse stock and accounting figures",
            "Credit limit enforcement during fast-paced field sales"
        ],
        "solutions": [
            "High-throughput barcode scanning and mobile warehouse picking apps",
            "Real-time multi-branch inventory synchronization",
            "Automated credit checks and instantaneous invoice generation"
        ],
        "display_order": 3,
        "is_active": True
    },
    {
        "slug": "manufacturing",
        "name": "Manufacturing",
        "short_desc": "Control costs. Increase output.",
        "desc": "Gain complete transparency over bills of materials (BOM), production scrap, machine uptime, and direct labor overheads.",
        "image": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=85",
        "challenges": [
            "Uncertain cost-per-unit metrics due to unrecorded wastage",
            "Production delays caused by raw material stockout surprises",
            "Disconnected maintenance schedules leading to machine downtime"
        ],
        "solutions": [
            "Odoo Manufacturing / MRP configuration with automated BOM cost rollups",
            "Predictive preventive maintenance work order scheduling",
            "Shop-floor touchscreen tracking for job stage transitions"
        ],
        "display_order": 4,
        "is_active": True
    },
    {
        "slug": "microfinance-credit",
        "name": "Microfinance & Credit",
        "short_desc": "Simpler onboarding. Better collections.",
        "desc": "Accelerate loan origination, automate KYC verification, enforce repayment schedules, and minimize portfolio delinquency.",
        "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85",
        "challenges": [
            "Paper-intensive onboarding resulting in slow turnaround times",
            "High default rates from late payment follow-ups",
            "Complex interest calculations and compliance audit logs"
        ],
        "solutions": [
            "Digital self-service and agent-assisted mobile loan onboarding",
            "Automated payment reminders via WhatsApp & SMS with direct payment links",
            "Automated ledger posting and portfolio aging analytics"
        ],
        "display_order": 5,
        "is_active": True
    },
    {
        "slug": "private-security",
        "name": "Private Security",
        "short_desc": "Manage teams. Ensure safety.",
        "desc": "Coordinate guard patrols, streamline incident reporting, automate shift rosters, and deliver transparent SLA reports to clients.",
        "image": "https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&w=800&q=85",
        "challenges": [
            "Proof-of-presence verification across dispersed patrol sites",
            "Slow response times and manual incident report compiling",
            "Complex guard shift scheduling and overtime payroll calculation"
        ],
        "solutions": [
            "NFC/GPS guard tour patrol verification with instant exception alerts",
            "Mobile incident capture with photo and geo-tagging",
            "Automated shift rostering synchronized with biometric attendance"
        ],
        "display_order": 6,
        "is_active": True
    }
]

def init_db(db: Session) -> None:
    # 1. Create tables
    Base.metadata.create_all(bind=engine)

    # 2. Superuser check
    user = db.query(User).filter(User.email == settings.FIRST_SUPERUSER_EMAIL).first()
    if not user:
        user = User(
            email=settings.FIRST_SUPERUSER_EMAIL,
            hashed_password=get_password_hash(settings.FIRST_SUPERUSER_PASSWORD),
            full_name="Corebridge System Administrator",
            role="superadmin",
            is_active=True
        )
        db.add(user)
        logger.info(f"Initialized superuser: {settings.FIRST_SUPERUSER_EMAIL}")

    # 3. Seed services
    for s_data in INITIAL_SERVICES:
        existing = db.query(Service).filter(Service.slug == s_data["slug"]).first()
        if not existing:
            db.add(Service(**s_data))

    # 4. Seed industries
    for ind_data in INITIAL_INDUSTRIES:
        existing = db.query(Industry).filter(Industry.slug == ind_data["slug"]).first()
        if not existing:
            db.add(Industry(**ind_data))

    # 5. Seed default site settings
    default_settings = {
        "company_phone": settings.COMPANY_PHONE,
        "company_email": settings.COMPANY_EMAIL,
        "company_address": settings.COMPANY_ADDRESS,
        "notification_email": settings.ADMIN_NOTIFICATION_EMAIL
    }
    for k, v in default_settings.items():
        existing = db.query(SiteSetting).filter(SiteSetting.key == k).first()
        if not existing:
            db.add(SiteSetting(key=k, value=v, description=f"Default {k}"))

    db.commit()
    logger.info("Database schema and verified seed data initialized successfully.")

if __name__ == "__main__":
    db = SessionLocal()
    try:
        init_db(db)
    finally:
        db.close()
