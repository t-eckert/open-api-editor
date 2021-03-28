from azure.functions import HttpRequest, HttpResponse
from func_users_handler.users_router import users_router
from lib.config import DATABASE_CONNECTION_STRING
from lib.database import connect_to_database, disconnect_from_database
from lib.sentry import connect_to_sentry, serverless_function

import logging


connect_to_sentry()


@serverless_function
def handle_users_request(request: HttpRequest) -> HttpResponse:

    logging.info("api/users recieved a request")

    connect_to_database()

    response: HttpResponse = users_router.route(request.method, request)

    disconnect_from_database()

    return HttpResponse("Could not process request")
