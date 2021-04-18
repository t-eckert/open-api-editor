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
    """Recieves and properly routes the request to the correct handler and returns the result

    Args:
        request (HttpRequest):  request to be routed

    Returns:
        HttpResponse:           response to the client
    """

    logging.info(f"/documents recieved a {request.method} request")

    token: Optional[str] = request.headers["Authorization"]

    if not token:
        return HttpResponse("Invalid auth token", status_code=401)

    try:
        token_payload: dict = jwt.decode(token)
        user_id: str = token_payload["_id"]["$oid"]
    except Exception:
        return HttpResponse("Invalid auth token", status_code=401)

    response: HttpResponse = documents_router.route(request.method, request, user_id, token)

    return response or HttpResponse("Could not process request")
