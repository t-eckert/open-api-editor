from app.api import api
from app.models import OpenApiDocument
from flask import request, Response


@api.route("/docs/<id>", methods=["GET"])
def get(id: str) -> Response:

    return 200, "OK"


@api.route("/docs/<id>", methods=["POST"])
def post() -> Response:

    body = request.json()

    return 200, "OK"


@api.route("/docs/<id>", methods=["PUT"])
def put() -> Response:

    return 200, "OK"


@api.route("/docs/<id>", methods=["DELETE"])
def delete() -> Response:

    return 200, "OK"