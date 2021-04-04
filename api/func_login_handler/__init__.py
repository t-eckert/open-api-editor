from azure.functions import HttpRequest, HttpResponse
from lib.database import db
from lib.auth import github, jwt
from lib.models import User
from lib.sentry import connect_to_sentry, serverless_function

import json
import logging

connect_to_sentry()


@serverless_function
def handle_login_request(request: HttpRequest) -> HttpResponse:
    """Parses a POST request and uses the code and state values in the JSON body to authenticate the user with GitHub

    Args:
        request (HttpRequest):  request containing code and state values for logging the user in

    Returns:
        HttpResponse:           response containing the user data encoded as a JWT
    """

    logging.info("api/login called")

    try:
        body: dict = request.get_json()
        code: str = body["code"]
        state: str = body["state"]
    except ValueError:
        return HttpResponse("Format body as JSON with `code` and `state` parameters", status_code=400)

    access_token: str = github.fetch_access_token(code, state)

    user_data: dict = github.fetch_user_data(access_token)

    try:
        user = get_or_create_user(user_data)
    except:
        return HttpResponse("Could not find or create user", 500)

    token = jwt.encode(json.loads(user.to_json()))

    return HttpResponse(token)


@db
def get_or_create_user(user_data: dict) -> User:

    return User.objects(github_id=user_data["id"]) or User.from_github_data(**user_data)
