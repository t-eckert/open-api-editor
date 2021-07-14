from app.config import DATABASE_CONNECTION_STRING
from flask import Flask
from secrets import token_urlsafe


app = Flask(__name__)
app.secret_key = token_urlsafe(24)

# TODO connect to database


if __name__ == "__main__":
    app.run()
