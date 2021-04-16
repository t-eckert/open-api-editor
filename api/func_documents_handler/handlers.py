from azure.functions import HttpRequest, HttpResponse
from lib.auth import jwt
from lib.database import database
from lib.models import User, OpenApiDocument
from mock.open_api_document import mock_open_api_document

import logging
import json


@database
def handle_get(request: HttpRequest, user_id: str, token: str) -> HttpResponse:
    """Retrieves an Open API document from the database by its id if the user has access to it

    Args:
        request (HttpRequest):  GET request containing the document id in the route_params
        user_id (str):          id of the user requesting the documents
        token (str):            JSON web token from the client

    Returns:
        HttpResponse:           response to send to the client
    """

    mock_open_api_document.save()

    headers = {"Authorization": jwt.renew(token)}
    return HttpResponse(
        json.dumps([json.loads(mock_open_api_document.to_json())]), headers=headers, mimetype="application/json"
    )

    document_ids: Optional[list[str]] = [request.route_params["id"]] or request.get_json()["documentIds"]

    if not document_ids:
        return HttpResponse("No document ids in request", status_code=400)

    users_documents = (document.id for document in user.documents)

    if document_ids not in users_documents:
        return HttpResponse("User does not own this document", status_code=403)

    open_api_document: OpenApiDocument = OpenApiDocument.objects(id=document_ids)

    if not open_api_document:
        return HttpResponse("Document not found", 404)

    return HttpResponse("Fetched Open API document", body=open_api_document)


@database
def handle_post(_: HttpRequest, user_id: str, token: str) -> HttpResponse:
    """Tries to create an Open API document in the database and returns it to the caller

    Args:
        _ (HttpRequest):        POST request from the client (not used)
        user_id (str):          id of the user requesting to create a document
        token (str):            JSON web token from the client

    Returns:
        HttpResponse:           reponse to send to the client
    """

    user = User.objects(id=user_id).first()

    if not user:
        return HttpResponse("User does not exist", status_code=403)

    if not user.can_create_document():
        return HttpResponse("User cannot create document", status_code=403)

    open_api_document: OpenApiDocument = OpenApiDocument()

    headers = {"Authorization": jwt.renew(token)}
    return HttpResponse(json.dumps([open_api_document.to_json()]), status_code=201, headers=headers)


@database
def handle_put(request: HttpRequest, user_id: str, token: str) -> HttpResponse:
    """Tries to update the Open API document passed in on the request

    Args:
        request (HttpRequest):  PUT request containing the updated document

    Returns:
        HttpResponse:           response to send to the client
    """

    # TODO: #31 Handle PUT request to documents endpoint

    return HttpResponse("Recieved PUT request")


@database
def handle_delete(request: HttpRequest, user_id: str, token: str) -> HttpResponse:
    """Tries to delete the Open API document by the id passed in on the request

    Args:
        request (HttpRequest):  DELETE request containing the id of the document and the `permanent` flag

    Returns:
        HttpResponse:           response to send to the client
    """

    # TODO: #32 Handle DELETE request to documents endpoint

    return HttpResponse("Recieved DELETE request")