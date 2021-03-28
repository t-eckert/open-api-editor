from azure.functions import HttpRequest, HttpResponse
from func_settings_handler.settings_router import settings_router
from lib.sentry import connect_to_sentry, serverless_function

import logging

connect_to_sentry()


@serverless_function
def handle_settings_request(request: HttpRequest) -> HttpResponse:
    logging.info("api/settings recieved a request")

    response: HttpResponse = settings_router.route(request.method, request)

    return response or HttpResponse("Could not process request")
