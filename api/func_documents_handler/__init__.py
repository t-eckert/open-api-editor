from azure.functions import HttpRequest, HttpResponse
from func_documents_handler.documents_router import documents_router
from lib.sentry import connect_to_sentry, serverless_function

import logging


connect_to_sentry()


@serverless_function
def handle_documents_request(request: HttpRequest) -> HttpResponse:
    logging.info(f"/documents recieved a {request.method} request")

    response: HttpResponse = documents_router.route(request.method, request)

    return response or HttpResponse("Could not process request")
