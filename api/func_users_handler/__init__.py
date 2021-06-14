from azure.functions import HttpRequest, HttpResponse
from func_users_handler.users_router import users_router
from lib.sentry import connect_to_sentry, serverless_function

import logging


connect_to_sentry()


@serverless_function
def handle_users_request(request: HttpRequest) -> HttpResponse:
    """Entrypoint for requests to /users path

    Handles requests related to authentication and getting user data

    Allowed verbs: GET, POST, PUT, DELETE

    Args:
        request (HttpRequest):  request received from the client

    Returns:
        HttpResponse:           response to send to the client
    """

    logging.info("/users recieved a request")

    response: HttpResponse = users_router.route(request.method, request)

    return response or HttpResponse("Could not process request")
