from lib.config import DATABASE_CONNECTION_STRING
from mongoengine import connect, disconnect
from typing import Any, Callable


def database(function: Callable) -> Callable:
    """Decorator providing a database connection for the lifetime of a function

    Usage:

    ```python
    @database
    def save_document(document: Document):
        document.save()
    ```

    Args:
        function (Callable):    function to be decorated with database access

    Returns:
        Callable:               function, decorated with database access
    """

    def connect_to_database(*args, **kwargs) -> Any:
        """Connects to the database prior to calling the curried function. Disposes connection after call completes.

        Returns:
            Any:                value returned by the decorated function
        """

        connect(host=DATABASE_CONNECTION_STRING)
        return_value = function(*args, **kwargs)
        disconnect()

        return return_value

    return connect_to_database
