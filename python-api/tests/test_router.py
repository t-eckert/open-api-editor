from lib.router import Router


def test_creating_and_executing_function():
    # Given
    index: str = "inc"

    def increment(n: int):
        return n + 1

    routes: dict = {index: increment}
    router: Router = Router(routes)

    pre_increment = 1
    expected = 2

    # When
    actual = router.route("inc", pre_increment)

    # Then
    assert expected == actual


def test_getting_methods():
    # Given
    inc: str = "inc"
    dec: str = "dec"

    def increment(n: int):
        return n + 1

    def decrement(n: int):
        return n - 1

    routes: dict = {inc: increment, dec: decrement}
    router: Router = Router(routes)

    expected = {inc, dec}

    # When
    actual = router.methods

    # Then
    assert expected == actual