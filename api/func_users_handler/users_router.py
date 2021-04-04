from func_users_handler.handlers import (
    handle_get,
    handle_put,
    handle_delete,
)
from lib.router import Router

routes: dict = {
    "GET": handle_get,
    "PUT": handle_put,
    "DELETE": handle_delete,
}

users_router = Router(routes)