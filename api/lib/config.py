# sourcery skip: hoist-statement-from-if
from dotenv import load_dotenv
from lib.env import get_required_env_var
from pathlib import Path
from typing import Optional

import logging
import os

# Load environment variables from a file at `../.env`
env_path = Path(__file__).parent.parent / ".env"
load_dotenv(env_path)

FUNC_ENV: str = os.getenv("FUNC_ENV", "local")

MAX_FREE_DOCUMENTS: int = 2


logging.info(f"Loading environment variables for {FUNC_ENV}")

if FUNC_ENV == "production":
    # Database
    DATABASE_CONNECTION_STRING: str = get_required_env_var("DB_CONNECTION_PRODUCTION")

    # GitHub
    GITHUB_OAUTH_API: str = "https://github.com/login/oauth/access_token"
    GITHUB_USER_API: str = "https://api.github.com/user"
    GITHUB_CLIENT_ID: str = get_required_env_var("GITHUB_CLIENT_ID")
    GITHUB_CLIENT_SECRET: str = get_required_env_var("GITHUB_CLIENT_SECRET")

    # Sendgrid
    SENDGRID_API_KEY: str = get_required_env_var("SENDGRID_API_KEY")
    DEV_EMAIL: str = get_required_env_var("DEV_EMAIL")

    # Sentry
    SENTRY_URL: str = get_required_env_var("SENTRY_URL")
    SENTRY_CONFIG: dict = {"debug": False, "environment": FUNC_ENV}

    # JWT
    VALID_TIME: int = 3600  # seconds
    JWT_SECRET: str = get_required_env_var("JWT_SECRET")


elif FUNC_ENV == "development":
    # Database
    DATABASE_CONNECTION_STRING: str = get_required_env_var("DB_CONNECTION_DEVELOPMENT")

    # GitHub
    GITHUB_OAUTH_API: str = "https://github.com/login/oauth/access_token"
    GITHUB_USER_API: str = "https://api.github.com/user"
    GITHUB_CLIENT_ID: str = get_required_env_var("GITHUB_CLIENT_ID")
    GITHUB_CLIENT_SECRET: str = get_required_env_var("GITHUB_CLIENT_SECRET")

    # Sendgrid
    SENDGRID_API_KEY: str = get_required_env_var("SENDGRID_API_KEY")
    DEV_EMAIL: str = get_required_env_var("DEV_EMAIL")

    # Sentry
    SENTRY_URL: str = get_required_env_var("SENTRY_URL")
    SENTRY_CONFIG: dict = {"debug": True, "environment": FUNC_ENV}

    # JWT
    VALID_TIME: int = 3600  # seconds
    JWT_SECRET: str = get_required_env_var("JWT_SECRET")


elif FUNC_ENV == "test":
    # Database
    DATABASE_CONNECTION_STRING: str = get_required_env_var("DB_CONNECTION_TEST")

    # GitHub
    GITHUB_OAUTH_API: str = ""
    GITHUB_USER_API: str = ""
    GITHUB_CLIENT_ID: str = ""
    GITHUB_CLIENT_SECRET: str = ""

    # Sendgrid
    SENDGRID_API_KEY: str = get_required_env_var("SENDGRID_API_KEY")
    DEV_EMAIL: str = get_required_env_var("DEV_EMAIL")

    # Sentry
    SENTRY_URL: str = get_required_env_var("SENTRY_URL")
    SENTRY_CONFIG: dict = {"debug": True, "environment": FUNC_ENV}

    # JWT
    VALID_TIME: int = 3600  # seconds
    JWT_SECRET: str = get_required_env_var("JWT_SECRET")


else:  # Local mode
    # Database
    DATABASE_CONNECTION_STRING: str = get_required_env_var("DB_CONNECTION_LOCAL")

    # GitHub
    GITHUB_OAUTH_API: str = "https://github.com/login/oauth/access_token"
    GITHUB_USER_API: str = "https://api.github.com/user"
    GITHUB_CLIENT_ID: str = get_required_env_var("GITHUB_CLIENT_ID")
    GITHUB_CLIENT_SECRET: str = get_required_env_var("GITHUB_CLIENT_SECRET")

    # Sendgrid
    SENDGRID_API_KEY: str = get_required_env_var("SENDGRID_API_KEY")
    DEV_EMAIL: str = get_required_env_var("DEV_EMAIL")

    # Sentry
    SENTRY_URL: str = get_required_env_var("SENTRY_URL")
    SENTRY_CONFIG: dict = {"environment": FUNC_ENV}

    # JWT
    VALID_TIME: int = 3600  # seconds
    JWT_SECRET: str = get_required_env_var("JWT_SECRET")