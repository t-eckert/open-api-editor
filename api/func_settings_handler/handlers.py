from lib.database import database
from azure.functions import HttpRequest, HttpResponse


@database
def handle_get(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved GET request")


@database
def handle_post(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved POST request")


@database
def handle_put(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved PUT request")


@database
def handle_delete(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved DELETE request")