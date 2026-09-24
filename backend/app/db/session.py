import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from app.core.config import settings

logger = logging.getLogger("corebridge.db")

db_url = settings.DATABASE_URL
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

connect_args = {}
if db_url.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

try:
    engine = create_engine(db_url, connect_args=connect_args, pool_pre_ping=True)
    # Test connection
    with engine.connect() as conn:
        pass
    logger.info(f"Database connected using primary URL: {db_url.split('@')[-1] if '@' in db_url else db_url}")
except Exception as e:
    logger.warning(f"Could not connect to primary DATABASE_URL ({e}). Falling back to local SQLite.")
    sqlite_url = "sqlite:///./corebridge_local.db"
    engine = create_engine(sqlite_url, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()
