from app import app
from flask import Response


@app.post("/login")
def handle_login() -> Response:
    return "Ok", 200
