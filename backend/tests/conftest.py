import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from app.main import app as fastapi_app
from app.db.base import Base
from app.db.session import get_db
from app.core.security import get_password_hash, create_access_token
from app.models.user import User
from app.models.service import Service
from app.models.industry import Industry
from app.models.case_study import CaseStudy
from app.models.audit import AuditRequest
from app.models.contact import ContactMessage
from app.models.site_setting import SiteSetting

SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

test_engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=test_engine)

@pytest.fixture(scope="session", autouse=True)
def setup_test_db():
    Base.metadata.create_all(bind=test_engine)
    db = TestingSessionLocal()
    try:
        # Create test superuser
        test_user = User(
            id="test-admin-uuid-1234",
            email="testadmin@corebridge.co.zw",
            hashed_password=get_password_hash("TestPassword123!"),
            full_name="Test Administrator",
            role="superadmin",
            is_active=True
        )
        db.add(test_user)

        # Seed sample service
        svc = Service(
            id="svc-test-1",
            slug="custom-software-test",
            name="Custom Software Test",
            short_description="Test service description",
            display_order=1,
            is_active=True
        )
        db.add(svc)

        # Seed sample industry
        ind = Industry(
            id="ind-test-1",
            slug="transport-logistics-test",
            name="Transport & Logistics Test",
            short_desc="Test industry description",
            display_order=1,
            is_active=True
        )
        db.add(ind)

        db.commit()
    finally:
        db.close()
    yield
    Base.metadata.drop_all(bind=test_engine)

def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

fastapi_app.dependency_overrides[get_db] = override_get_db

@pytest.fixture
def client():
    with TestClient(fastapi_app) as c:
        yield c

@pytest.fixture
def admin_token():
    return create_access_token(subject="test-admin-uuid-1234")

@pytest.fixture
def auth_headers(admin_token):
    return {"Authorization": f"Bearer {admin_token}"}
