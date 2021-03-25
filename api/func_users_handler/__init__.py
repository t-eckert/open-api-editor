from lib.config import DATABASE_CONNECTION_STRING
from lib.models import User
from azure.functions import HttpRequest, HttpResponse
from mongoengine import connect, disconnect
from typing import Union

import logging


def handle_users_request(request: HttpRequest) -> HttpResponse:

    logging.info("/users recieved a request")
    connect(host=DATABASE_CONNECTION_STRING)

    # Route the request appropriately
    if request.method in ("GET"):
        return handle_get(request)
    elif request.method in ("POST"):
        return handle_post(request)
    elif request.method in ("PUT"):
        return handle_put(request)
    elif request.method in ("DELETE"):
        return handle_delete(request)

    disconnect()

    return HttpResponse("Could not process request")


def handle_get(request: HttpRequest) -> HttpResponse:

    user_id: str = request.route_params["id"]

    if not user_id:
        return HttpResponse("Pass id parameter", status_code=404)

    user = User.objects()

    if not user:
        return HttpResponse("No user found with that id")

    return HttpResponse("User", body=user)


def handle_post(request: HttpRequest) -> HttpResponse:

    try:
        body: dict = request.get_json()
    except ValueError:
        return HttpResponse("Format body as JSON", status_code=400)

    try:
        name: Union[str, None] = body["name"]
        email = body["email"]
        password = body["password"]
    except KeyError:
        return HttpResponse(
            "Please pass name, email, and password in the body of the request",
            status_code=400,
        )

    user = User.create(name, email, password)
    user.save()

    return HttpResponse(user.id)


def handle_put(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved PUT request")


def handle_delete(request: HttpRequest) -> HttpResponse:

    user_id: str = request.route_params["id"]

    if not user_id:
        return HttpResponse("Pass id parameter", status_code=404)

    user = User.objects()

    if not user:
        return HttpResponse("No user found with that id")

    user.delete()

    return HttpResponse("Recieved DELETE request")