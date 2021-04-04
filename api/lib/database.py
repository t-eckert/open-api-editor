from lib.config import DATABASE_CONNECTION_STRING
from mongoengine import connect, disconnect
from typing import Any, Callable


def db(function: Callable) -> Callable:
    def connect_to_database(*args, **kwargs) -> Any:
        connect(host=DATABASE_CONNECTION_STRING)
        return_value = function(*args, **kwargs)
        disconnect()

        return return_value

    return connect_to_database
