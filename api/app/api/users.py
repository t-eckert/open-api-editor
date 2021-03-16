from app.api import api
from app.models import User
from flask import request, Response


@api.route("/users/<id>", methods=["GET"])
def get(id: str) -> Response:

    return 200, "OK"


@api.route("/users", methods=["POST"])
def post() -> Response:

    body = request.json()

    return 200, "OK"


@api.route("/users", methods=["PUT"])
def put() -> Response:

    return 200, "OK"


@api.route("/users", methods=["DELETE"])
def delete() -> Response:

    return 200, "OK"