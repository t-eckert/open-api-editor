from azure.functions import HttpRequest, HttpResponse


def handle_get(request: HttpRequest) -> HttpResponse:

    user_id: str = request.route_params["id"]

    if not user_id:
        return HttpResponse("Pass id parameter", status_code=404)

    user = User.objects()

    if not user:
        return HttpResponse("No user found with that id")

    return HttpResponse("User", body=user)


def handle_post(request: HttpRequest) -> HttpResponse:

    try:
        body: dict = request.get_json()
    except ValueError:
        return HttpResponse("Format body as JSON", status_code=400)

    try:
        name: Union[str, None] = body["name"]
        email = body["email"]
        password = body["password"]
    except KeyError:
        return HttpResponse(
            "Please pass name, email, and password in the body of the request",
            status_code=400,
        )

    user = User.create(name, email, password)
    user.save()

    return HttpResponse(user.id)


def handle_put(request: HttpRequest) -> HttpResponse:

    return HttpResponse("Recieved PUT request")


def handle_delete(request: HttpRequest) -> HttpResponse:

    user_id: str = request.route_params["id"]

    if not user_id:
        return HttpResponse("Pass id parameter", status_code=404)

    user = User.objects()

    if not user:
        return HttpResponse("No user found with that id")

    user.delete()

    return HttpResponse("Recieved DELETE request")