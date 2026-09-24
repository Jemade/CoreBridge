from fastapi import APIRouter
from app.api.v1.endpoints import (
    health,
    auth,
    audits,
    contact,
    services,
    industries,
    case_studies,
    admin
)

api_router = APIRouter()

api_router.include_router(health.router, tags=["Health"])
api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(audits.router, tags=["Audits"])
api_router.include_router(contact.router, tags=["Contact"])
api_router.include_router(services.router, tags=["Services"])
api_router.include_router(industries.router, tags=["Industries"])
api_router.include_router(case_studies.router, tags=["Case Studies"])
api_router.include_router(admin.router, tags=["Admin Operations"])
