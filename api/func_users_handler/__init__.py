from azure.functions import HttpRequest, HttpResponse
from func_users_handler.users_router import users_router
from lib.sentry import connect_to_sentry, serverless_function

import logging


connect_to_sentry()


@serverless_function
def handle_users_request(request: HttpRequest) -> HttpResponse:

    logging.info("api/users recieved a request")

    response: HttpResponse = users_router.route(request.method, request)

    return HttpResponse("Could not process request")
