from typing import Any, Callable


class Router:
    """Routes calls to functions by method names

    Expects the user to pass a dictionary mapping strings to callables. The `route` method will call the correct
    function based on the HTTP method name passed to the method.

    Example:

    ```python
    def get(request):
        print(request.body)

    routes = {
        "GET", get
    }

    router = Router(routes)

    router.route("GET", request)

    # Prints the request body by routing the input to the `get` function and calling it
    ```
    """

    def __init__(self, routes: dict):
        """Instantiates a new instance of the Router class

        Args:
            routes (dict):      a mapping of route names to callables
        """

        self._routes: dict = routes

    def route(self, method: str, *args, **kwargs) -> Any:
        """Looks for the method in the routes dictionary and calls the callable matching that method
        returning what the callable returns

        Args:
            method (str):       method of the route to call

        Raises:
            ValueError:         raised if method does not exist in the routes dictionary

        Returns:
            Any:                whatever the callable returns
        """

        func: Callable = self._routes.get(method)

        if func is None:
            raise ValueError(f"Method name {method} does not exist in the routes dictionary")

        return func(*args, **kwargs)

    @property
    def methods(self) -> set:
        """Returns the set of methods that can be routed by the router

        Returns:
            set:                methods routable by the router
        """

        return self._routes.keys()