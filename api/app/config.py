from dotenv import load_dotenv
from pathlib import Path

import os

# Load environment variables from a file at `../.env`
env_path = Path(__file__).parent.parent / ".env"
load_dotenv(env_path)

environment = os.getenv("FLASK_ENV")

if environment == "production":
    DATABASE_CONNECTION_STRING = ""
elif environment == "development":
    DATABASE_CONNECTION_STRING = os.getenv("DATABASE_CONNECTION_STRING_LOCAL")
else:  # Test mode
    DATABASE_CONNECTION_STRING = ""
