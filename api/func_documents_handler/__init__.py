from azure.functions import HttpRequest, HttpResponse
from lib.models import User, OpenApiDocument

import logging


def handle_documents_request(request: HttpRequest) -> HttpResponse:
    logging.info("/documents recieved a request")

    logging.info(request.method)

    # Route the request appropriately
    if request.method in ("GET"):
        return handle_get(request)
    elif request.method in ("POST"):
        return handle_post(request)
    elif request.method in ("PUT"):
        return handle_put(request)
    elif request.method in ("DELETE"):
        return handle_delete(request)

    return HttpResponse("Could not process request")


def handle_get(request: HttpRequest) -> HttpResponse:

    open_api_document_id: str = request.route_params["id"]

    open_api_document: OpenApiDocument = OpenApiDocument.objects(
        id=open_api_document_id
    )

    # TODO validate that the user can access this doc

    return HttpResponse("Fetched Open API document", body=open_api_document)


def handle_post(request: HttpRequest) -> HttpResponse:
    """Tries to create an Open API document in the database and returns it to the caller

    Args:
        request (HttpRequest):  post request from the client

    Returns:
        HttpResponse:           reponse to send to the client
    """

    user_id: str = request.params["user-id"]

    if not user_id:
        return HttpResponse("`user-id` parameter required", status_code=400)

    user: User = User.objects(id=user_id)

    if not user:
        return HttpResponse("`user-id` not found", status_code=400)

    if not user.can_create_document():
        return HttpResponse("User cannot create document", status_code=403)

    open_api_document: OpenApiDocument = OpenApiDocument()

    return HttpResponse(
        "Created Open API Document", status_code=201, body=open_api_document
    )


def handle_put(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved PUT request")


def handle_delete(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved DELETE request")