from azure.functions import HttpRequest, HttpResponse
from lib.auth import jwt
from lib.models import User
from lib.schema import schema
from lib.sentry import connect_to_sentry, serverless_function
from mocks.open_api_document import mock_open_api_document_1
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
        logging.info(request.get_json())
        query = request.get_json()["query"]
    except:
        return HttpRequest("Invalid schema", 400)

    result = schema.execute(query)

    return HttpResponse(json.dumps(result.data))
