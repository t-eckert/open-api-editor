from azure.functions import HttpRequest, HttpResponse
from func_documents_handler.documents_router import documents_router
from lib.auth import jwt
from lib.models import User
from lib.sentry import connect_to_sentry, serverless_function
from typing import Optional

import logging


connect_to_sentry()


@serverless_function
def handle_documents_request(request: HttpRequest) -> HttpResponse:
    logging.info(f"/documents recieved a {request.method} request")

    token: Optional[str] = request.headers["token"]

    if not token:
        return HttpResponse("Invalid auth token", status_code=401)

    try:
        user_info: dict = jwt.decode(token)
    except:
        return HttpResponse("Invalid auth token", status_code=401)

    user: User = User.from_json(user_info)

    response: HttpResponse = documents_router.route(request.method, user, request)

    return response or HttpResponse("Could not process request")
