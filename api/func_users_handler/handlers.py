from azure.functions import HttpRequest, HttpResponse
from lib.database import db
from lib.models import User
from typing import Optional


@db
def handle_get(request: HttpRequest) -> HttpResponse:

    user_id: str = request.route_params["id"]

    if not user_id:
        return HttpResponse("Pass id parameter", status_code=404)

    user = User.objects()

    if not user:
        return HttpResponse("No user found with that id")

    return HttpResponse("User", body=user)


@db
def handle_put(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved PUT request")


@db
def handle_delete(request: HttpRequest) -> HttpResponse:

    user_id: str = request.route_params["id"]

    if not user_id:
        return HttpResponse("Pass id parameter", status_code=404)

    user = User.objects()

    if not user:
        return HttpResponse("No user found with that id")

    user.delete()

    return HttpResponse("Recieved DELETE request")