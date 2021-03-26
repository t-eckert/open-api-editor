from dotenv import load_dotenv
from pathlib import Path
from typing import Optional

import os

# Load environment variables from a file at `../.env`
env_path = Path(__file__).parent.parent / ".env"
load_dotenv(env_path)

environment: Optional[str] = os.getenv("FUNC_ENV")

MAX_FREE_DOCUMENTS: int = 2
GITHUB_CLIENT_ID: str = "d2e20ee498c0e3d317fe"

if environment == "production":
    # Database
    DATABASE_CONNECTION_STRING: Optional[str] = os.getenv("DB_CONNECTION_PRODUCTION")

    # GitHub
    GITHUB_OAUTH_API: str = "https://github.com/login/oauth/access_token"
    GITHUB_USER_API: str = "https://api.github.com/user"
    GITHUB_CLIENT_SECRET: Optional[str] = os.getenv("GITHUB_CLIENT_SECRET")

elif environment == "development":
    # Database
    DATABASE_CONNECTION_STRING: Optional[str] = os.getenv("DB_CONNECTION_DEVELOPMENT")

    # GitHub
    GITHUB_OAUTH_API: str = "https://github.com/login/oauth/access_token"
    GITHUB_USER_API: str = "https://api.github.com/user"
    GITHUB_CLIENT_SECRET: Optional[str] = os.getenv("GITHUB_CLIENT_SECRET")

elif environment == "test":
    # Database
    DATABASE_CONNECTION_STRING: Optional[str] = os.getenv("DB_CONNECTION_TEST")

    # GitHub
    GITHUB_OAUTH_API: str = ""
    GITHUB_USER_API: str = ""
    GITHUB_CLIENT_SECRET: str = ""

else:  # Local mode
    # Database
    DATABASE_CONNECTION_STRING: Optional[str] = os.getenv("DB_CONNECTION_LOCAL")

    # GitHub
    GITHUB_OAUTH_API: str = "https://github.com/login/oauth/access_token"
    GITHUB_USER_API: str = "https://api.github.com/user"
    GITHUB_CLIENT_SECRET: Optional[str] = os.getenv("GITHUB_CLIENT_SECRET")
