import json
from azure.functions import HttpRequest, HttpResponse
from lib.auth import github
from lib.models import User

import lib.config
import jwt
import logging


def handle_login_request(request: HttpRequest) -> HttpResponse:
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
        return HttpResponse(
            "Format body as JSON with `code` and `state` parameters", status_code=400
        )

    # access_token: str = github.fetch_access_token(code, state)
    response = github.fetch_access_token(code, state)

    # user_data: dict = github.fetch_user_data(access_token)

    # user: Optional[User] = User.objects(github_id=user_data["id"])

    # user = User.from_github_data(**user_data)

    # token = jwt.encode(json.loads(user.to_json()), "")

    return HttpResponse(response)
