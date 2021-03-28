from dotenv import load_dotenv
from pathlib import Path
from typing import Optional

import logging
import os
import sentry_sdk

# Load environment variables from a file at `../.env`
env_path = Path(__file__).parent.parent / ".env"
load_dotenv(env_path)

environment: str = os.getenv("FUNC_ENV", "local")

MAX_FREE_DOCUMENTS: int = 2
SENTRY_URL: Optional[str] = os.getenv("SENTRY_URL")

sentry_sdk.init(SENTRY_URL, traces_sample_rate=1.0)


def get_required_env_var(env_var: str) -> str:
    """Ensures an environment variable is set by throwing a ValueError if it is not

    Args:
        env_var (str):          name of the environment variable whose value will be returned

    Raises:
        ValueError:             if the environment variable is not found

    Returns:
        str:                    value of the environment variable
    """

    value: Optional[str] = os.getenv(env_var)

    if value is None:
        raise ValueError(f"{env_var} not found")

    return value


logging.info(f"Loading environment variables for {environment}")

if environment == "production":
    # Database
    DATABASE_CONNECTION_STRING: str = get_required_env_var("DB_CONNECTION_PRODUCTION")

    # GitHub
    GITHUB_OAUTH_API: str = "https://github.com/login/oauth/access_token"
    GITHUB_USER_API: str = "https://api.github.com/user"
    GITHUB_CLIENT_ID: str = get_required_env_var("GITHUB_CLIENT_ID")
    GITHUB_CLIENT_SECRET: str = get_required_env_var("GITHUB_CLIENT_SECRET")

elif environment == "development":
    # Database
    DATABASE_CONNECTION_STRING: str = get_required_env_var("DB_CONNECTION_DEVELOPMENT")

    # GitHub
    GITHUB_OAUTH_API: str = "https://github.com/login/oauth/access_token"
    GITHUB_USER_API: str = "https://api.github.com/user"
    GITHUB_CLIENT_ID: str = get_required_env_var("GITHUB_CLIENT_ID")
    GITHUB_CLIENT_SECRET: str = get_required_env_var("GITHUB_CLIENT_SECRET")

elif environment == "test":
    # Database
    DATABASE_CONNECTION_STRING: str = get_required_env_var("DB_CONNECTION_TEST")

    # GitHub
    GITHUB_OAUTH_API: str = ""
    GITHUB_USER_API: str = ""
    GITHUB_CLIENT_ID: str = ""
    GITHUB_CLIENT_SECRET: str = ""

else:  # Local mode
    # Database
    DATABASE_CONNECTION_STRING: str = get_required_env_var("DB_CONNECTION_LOCAL")

    # GitHub
    GITHUB_OAUTH_API: str = "https://github.com/login/oauth/access_token"
    GITHUB_USER_API: str = "https://api.github.com/user"
    GITHUB_CLIENT_ID: str = get_required_env_var("GITHUB_CLIENT_ID")
    GITHUB_CLIENT_SECRET: str = get_required_env_var("GITHUB_CLIENT_SECRET")
