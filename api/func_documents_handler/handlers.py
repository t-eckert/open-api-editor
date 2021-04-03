from azure.functions import HttpRequest, HttpResponse
from lib.database import db
from lib.models import User, OpenApiDocument
from typing import Optional

import logging


@db
def handle_get(user: User, request: HttpRequest) -> HttpResponse:
    """Retrieves an Open API document from the database by its id if the user has access to it

    Args:
        user (User):            user attempting to access the document
        request (HttpRequest):  GET request containing the document id in the route_params

    Returns:
        HttpResponse:           response to send to the client
    """

    open_api_document_id: Optional[str] = request.route_params["id"]

    if not open_api_document_id:
        return HttpResponse("No document `id` passed in request", status_code=400)

    users_documents = (document.id for document in user.documents)

    if open_api_document_id not in users_documents:
        return HttpResponse("User does not own this document", status_code=403)

    open_api_document: OpenApiDocument = OpenApiDocument.objects(id=open_api_document_id)

    if not open_api_document:
        return HttpResponse("Document not found", 404)

    return HttpResponse("Fetched Open API document", body=open_api_document)


@db
def handle_post(user: User, _: HttpRequest) -> HttpResponse:
    """Tries to create an Open API document in the database and returns it to the caller

    Args:
        user (User):            user requesting to create a document
        _ (HttpRequest):        POST request from the client (not used)

    Returns:
        HttpResponse:           reponse to send to the client
    """

    if not user.can_create_document():
        return HttpResponse("User cannot create document", status_code=403)

    open_api_document: OpenApiDocument = OpenApiDocument()

    return HttpResponse("Created Open API Document", status_code=201, body=open_api_document.to_json())


@db
def handle_put(user: User, request: HttpRequest) -> HttpResponse:
    """Tries to update the Open API document passed in on the request

    Args:
        user (User):            user requesting to change the document
        request (HttpRequest):  PUT request containing the updated document

    Returns:
        HttpResponse:           response to send to the client
    """

    # TODO: #31 Handle PUT request to documents endpoint

    return HttpResponse("Recieved PUT request")


@db
def handle_delete(user: User, request: HttpRequest) -> HttpResponse:
    """Tries to delete the Open API document by the id passed in on the request

    Args:
        user (User):            user requesting to delete the document
        request (HttpRequest):  DELETE request containing the id of the document and the `permanent` flag

    Returns:
        HttpResponse:           response to send to the client
    """

    # TODO: #32 Handle DELETE request to documents endpoint

    return HttpResponse("Recieved DELETE request")