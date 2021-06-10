from azure.functions import HttpRequest, HttpResponse
from lib.auth import jwt
from lib.graphql import execute_query
from lib.sentry import connect_to_sentry, serverless_function
from typing import Optional

import logging
import json


connect_to_sentry()


@serverless_function
def handle_graphql_request(request: HttpRequest) -> HttpResponse:
    """Recieves and properly routes the request to the correct handler and returns the result

    Args:
        request (HttpRequest):  request to be routed

    Returns:
        HttpResponse:           response to the client
    """

    logging.info(f"/graphql recieved a {request.method} request")

    token: Optional[str] = request.headers.get("Authorization")

    try:
        query = request.get_json()["query"]
        result = execute_query(query)
    except Exception:
        return HttpResponse("Invalid query", status_code=400)

    if (errors := result.errors) :
        logging.error(errors)
        return HttpResponse("Invalid query", status_code=400)

    return HttpResponse(json.dumps(result.data))
