from typing import Any, Callable


from lib.config import DATABASE_CONNECTION_STRING
from mongoengine import connect, disconnect


def db(function: Callable) -> Callable:
    def connect_to_database(*args, **kwargs) -> Any:
        connect(DATABASE_CONNECTION_STRING)
        return_value = function(*args, **kwargs)
        disconnect()

        return return_value

    return connect_to_database
