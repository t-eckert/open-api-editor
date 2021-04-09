from func_documents_handler.handlers import (
    handle_get,
    handle_post,
    handle_put,
    handle_delete,
)
from lib.router import Router

routes: dict = {
    "GET": handle_get,
    "POST": handle_post,
    "PUT": handle_put,
    "DELETE": handle_delete,
}

documents_router = Router(routes)