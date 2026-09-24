import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from app.core.config import settings
from app.api.v1.api import api_router
from app.db.session import SessionLocal
from app.db.init_db import init_db

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("corebridge.main")

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize DB on startup
    logger.info("Initializing Corebridge backend database and seed data...")
    db = SessionLocal()
    try:
        init_db(db)
    finally:
        db.close()
    yield
    logger.info("Shutting down Corebridge backend...")

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url=f"{settings.API_V1_STR}/docs",
    redoc_url=f"{settings.API_V1_STR}/redoc",
    lifespan=lifespan
)

# Security Headers Middleware
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        return response

app.add_middleware(SecurityHeadersMiddleware)

import os
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_origin_regex=r"https://.*\.onrender\.com",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Versioned API
app.include_router(api_router, prefix=settings.API_V1_STR)

# Optional SPA static serving for unified container deployment
SERVE_STATIC = os.getenv("SERVE_STATIC", "false").lower() in ("true", "1")
frontend_dist = os.getenv("FRONTEND_DIST", "")

if not frontend_dist:
    for candidate in [
        os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "dist")),
        os.path.abspath("./dist"),
        os.path.abspath("/app/dist")
    ]:
        if os.path.exists(candidate) and os.path.exists(os.path.join(candidate, "index.html")):
            frontend_dist = candidate
            break

if SERVE_STATIC and frontend_dist and os.path.exists(frontend_dist):
    logger.info(f"Serving static frontend build from {frontend_dist}")
    assets_dir = os.path.join(frontend_dist, "assets")
    if os.path.exists(assets_dir):
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")

    @app.get("/{full_path:path}", include_in_schema=False)
    async def serve_spa(full_path: str):
        if full_path.startswith("api") or full_path.startswith("docs") or full_path.startswith("redoc") or full_path == "openapi.json":
            return JSONResponse(status_code=404, content={"detail": "Not found"})
        file_path = os.path.join(frontend_dist, full_path)
        if os.path.isfile(file_path):
            return FileResponse(file_path)
        return FileResponse(os.path.join(frontend_dist, "index.html"))
else:
    @app.get("/")
    def root():
        return {
            "service": settings.PROJECT_NAME,
            "version": settings.VERSION,
            "api_v1": f"{settings.API_V1_STR}",
            "documentation": f"{settings.API_V1_STR}/docs",
            "company": {
                "name": settings.COMPANY_NAME,
                "phone": settings.COMPANY_PHONE,
                "email": settings.COMPANY_EMAIL,
                "address": settings.COMPANY_ADDRESS
            }
        }
