from app import app
from flask import Response


@app.post("/graphql")
def handle_graphql() -> Response:
    return "Ok", 200
