from lib.models.feedback import Feedback
from azure.functions import HttpRequest, HttpResponse
from lib.config import DEV_EMAIL
from lib.email import Email
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

    try:
        body: dict = request.get_json()
        feedbackBody: str = body.get("feedbackBody")
        email: str = body.get("email")
    except ValueError:
        return HttpResponse("Body not formatted as JSON", status_code=400)

    feedback = Feedback(feedbackBody, email)

    subject = "Feedback from " + feedback.email or "anonymous"
    email_message = Email(feedback.email or DEV_EMAIL, [DEV_EMAIL], subject, feedback.feedbackBody)
    email_message.send()

    return HttpResponse("Ok")
