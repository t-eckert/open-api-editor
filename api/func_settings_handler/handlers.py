from azure.functions import HttpRequest, HttpResponse


def handle_get(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved GET request")


def handle_post(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved POST request")


def handle_put(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved PUT request")


def handle_delete(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved DELETE request")