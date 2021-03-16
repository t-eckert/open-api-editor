"""Starting point for the application"""

from app.config import DATABASE_CONNECTION_STRING
from flask import Flask
from secrets import token_urlsafe

import mongoengine

# Set up the application
app = Flask(__name__)
app.secret_key = token_urlsafe(24)

# Connect to the database
mongoengine.connect(DATABASE_CONNECTION_STRING)

from app.api import api

app.register_blueprint(api)