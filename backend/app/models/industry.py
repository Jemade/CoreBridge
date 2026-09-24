import uuid
from sqlalchemy import String, Text, Integer, Boolean, JSON
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base, TimestampMixin

class Industry(Base, TimestampMixin):
    __tablename__ = "industries"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    slug: Mapped[str] = mapped_column(String(100), unique=True, index=True, nullable=False)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    short_desc: Mapped[str] = mapped_column(Text, nullable=False)
    desc: Mapped[str] = mapped_column(Text, nullable=True)
    image: Mapped[str] = mapped_column(String(500), nullable=True)
    challenges: Mapped[dict] = mapped_column(JSON, default=list, nullable=True)
    solutions: Mapped[dict] = mapped_column(JSON, default=list, nullable=True)
    display_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
