import uuid
from sqlalchemy import String, Text, Boolean
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base, TimestampMixin

class CaseStudy(Base, TimestampMixin):
    __tablename__ = "case_studies"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    slug: Mapped[str] = mapped_column(String(150), unique=True, index=True, nullable=False)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    summary: Mapped[str] = mapped_column(Text, nullable=False)
    challenge: Mapped[str] = mapped_column(Text, nullable=True)
    approach: Mapped[str] = mapped_column(Text, nullable=True)
    solution: Mapped[str] = mapped_column(Text, nullable=True)
    results: Mapped[str] = mapped_column(Text, nullable=True)
    technology: Mapped[str] = mapped_column(String(255), nullable=True)
    industry: Mapped[str] = mapped_column(String(100), nullable=True)
    is_featured: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    is_published: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
