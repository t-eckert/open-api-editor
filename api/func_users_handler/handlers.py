from azure.functions import HttpRequest, HttpResponse
from datetime import datetime
from lib.auth import github, jwt
from lib.database import database
from lib.models import User

import json
import logging


@database
def handle_get(request: HttpRequest) -> HttpResponse:

    user_id: str = request.route_params["id"]

    if not user_id:
        return HttpResponse("Pass id parameter", status_code=404)

    user = User.objects()

    if not user:
        return HttpResponse("No user found with that id")

    return HttpResponse("User", body=user)


@database
def handle_post(request: HttpRequest) -> HttpResponse:
    """Parses a POST request and uses the code and state values in the JSON body to authenticate the user with GitHub

    Gets user info from GitHub and checks if that user exists in the database. If it does not, create a new user, add
    it to the database.

    Take the user and encode its data in a signed JSON web token. Return this token to the client.

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

    user: User = User.objects(githubUid=user_data["id"]).first() or User.from_github_data(**user_data).save()

    user.lastLogin = datetime.now()
    user.save()

    token = jwt.encode(json.loads(user.to_json()))

    return HttpResponse(token)


@database
def handle_put(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved PUT request")


@database
def handle_delete(request: HttpRequest) -> HttpResponse:

    user_id: str = request.route_params["id"]

    if not user_id:
        return HttpResponse("Pass id parameter", status_code=404)

    user = User.objects()

    if not user:
        return HttpResponse("No user found with that id")

    user.delete()

    return HttpResponse("Recieved DELETE request")