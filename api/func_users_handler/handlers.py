from azure.functions import HttpRequest, HttpResponse
from lib.auth import github, jwt
from lib.database import db
from lib.models import User
from typing import Optional

import json
import logging


def handle_get(request: HttpRequest) -> HttpResponse:

    user_id: str = request.route_params["id"]

    if not user_id:
        return HttpResponse("Pass id parameter", status_code=404)

    user = User.objects()

    if not user:
        return HttpResponse("No user found with that id")

    return HttpResponse("User", body=user)


def handle_post(request: HttpRequest) -> HttpResponse:
    """Parses a POST request and uses the code and state values in the JSON body to authenticate the user with GitHub

    Args:
        request (HttpRequest):  request containing code and state values for logging the user in

    Returns:
        HttpResponse:           response containing the user data encoded as a JWT
    """

    try:
        body: dict = request.get_json()
        code: str = body["code"]
        state: str = body["state"]
    except ValueError:
        return HttpResponse("Format body as JSON with `code` and `state` parameters", status_code=400)

    access_token: str = github.fetch_access_token(code, state)

    user_data: dict = github.fetch_user_data(access_token)

    try:
        user = User.from_github_data(**user_data)
    except:
        return HttpResponse("Could not find or create user", 500)

    token = jwt.encode(json.loads(user.to_json()))

    return HttpResponse(token)


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