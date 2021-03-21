import azure.functions as func
import logging


def handle_settings_request(request: func.HttpRequest) -> func.HttpResponse:
    logging.info("/users recieved a request")

    # Route the request appropriately
    if request.method in ("get"):
        return handle_get(request)
    elif request.method in ("post"):
        return handle_post(request)
    elif request.method in ("put"):
        return handle_put(request)
    elif request.method in ("delete"):
        return handle_delete(request)

    return func.HttpResponse("Could not process request")


def handle_get(request: func.HttpRequest) -> func.HttpResponse:

    return func.HttpResponse("Recieved GET request")


def handle_post(request: func.HttpRequest) -> func.HttpResponse:

    return func.HttpResponse("Recieved POST request")


def handle_put(request: func.HttpRequest) -> func.HttpResponse:

    return func.HttpResponse("Recieved PUT request")


def handle_delete(request: func.HttpRequest) -> func.HttpResponse:

    return func.HttpResponse("Recieved DELETE request")