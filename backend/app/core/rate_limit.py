import time
import logging
from collections import defaultdict
from fastapi import Request, HTTPException, status
from app.core.config import settings

logger = logging.getLogger("corebridge.ratelimit")

# In-memory fallback tracking: ip -> list of timestamps
_memory_rate_limits = defaultdict(list)
_redis_client = None

try:
    import redis
    _redis_client = redis.from_url(settings.REDIS_URL, socket_connect_timeout=1)
    _redis_client.ping()
    logger.info("Connected to Redis for rate limiting.")
except Exception as e:
    _redis_client = None
    logger.info("Redis not available; using in-memory rate limiting.")

def check_rate_limit(request: Request, limit: int = 15, window_seconds: int = 60):
    """
    Ensures that a client IP does not exceed `limit` requests in `window_seconds`.
    """
    if not settings.RATE_LIMIT_ENABLED:
        return

    client_ip = request.client.host if request.client else "127.0.0.1"
    current_time = time.time()

    if _redis_client:
        try:
            key = f"ratelimit:{client_ip}:{request.url.path}"
            pipeline = _redis_client.pipeline()
            pipeline.incr(key)
            pipeline.expire(key, window_seconds)
            count, _ = pipeline.execute()
            if count > limit:
                raise HTTPException(
                    status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                    detail="Rate limit exceeded. Please wait a moment before trying again."
                )
            return
        except HTTPException:
            raise
        except Exception as e:
            logger.warning(f"Redis rate limit check error ({e}), falling back to memory.")

    # In-memory fallback
    key = f"{client_ip}:{request.url.path}"
    timestamps = _memory_rate_limits[key]
    # Prune timestamps older than window
    cutoff = current_time - window_seconds
    _memory_rate_limits[key] = [t for t in timestamps if t > cutoff]

    if len(_memory_rate_limits[key]) >= limit:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many submissions from this connection. Please wait a minute before submitting again."
        )

    _memory_rate_limits[key].append(current_time)

def verify_honeypot(honeypot_value: str = None):
    """
    Anti-spam protection: If honeypot field is filled, reject silently or with standard message.
    """
    if honeypot_value and len(honeypot_value.strip()) > 0:
        logger.warning(f"Bot spam honeypot triggered: '{honeypot_value}'")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Automated submission detected."
        )
