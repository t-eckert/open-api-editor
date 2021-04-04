from azure.functions import HttpRequest, HttpResponse
from lib.sentry import connect_to_sentry, serverless_function

import logging

connect_to_sentry()


@serverless_function
def handle_feedback_request(request: HttpRequest) -> HttpResponse:
    """Parses a POST request for feedback data, stores feedback to the database and sends it as an email to the developer

    Args:
        request (HttpRequest):  request containing feedback to be stored and sent as email

    Returns:
        HttpResponse:           response to the caller
    """

    logging.info("api/feedback called")

    return HttpResponse("Ok")
