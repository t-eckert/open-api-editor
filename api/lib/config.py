from dotenv import load_dotenv
from pathlib import Path
from typing import Optional

import os

# Load environment variables from a file at `../.env`
env_path = Path(__file__).parent.parent / ".env"
load_dotenv(env_path)

environment = os.getenv("FLASK_ENV")

MAX_FREE_DOCUMENTS: int = 2
GITHUB_CLIENT_ID: str = "d2e20ee498c0e3d317fe"

GITHUB_CLIENT_SECRET: Optional[str] = os.getenv("GITHUB_CLIENT_SECRET")

if environment == "production":
    DATABASE_CONNECTION_STRING: Optional[str] = os.getenv(
        "DATABASE_CONNECTION_STRING_PRODUCTION"
    )
elif environment == "development":
    DATABASE_CONNECTION_STRING: Optional[str] = os.getenv(
        "DATABASE_CONNECTION_STRING_DEVELOPMENT"
    )
else:  # Test mode
    DATABASE_CONNECTION_STRING: Optional[str] = os.getenv(
        "DATABASE_CONNECTION_STRING_LOCAL"
    )