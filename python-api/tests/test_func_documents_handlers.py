from azure.functions import HttpRequest, HttpResponse
from func_documents_handler.handlers import handle_get, handle_post

import pytest


@pytest.mark.parametrize("given,expected", [[(HttpRequest("get", ""), "1234", ""), HttpResponse()]])
def test_handle_get(given: dict, expected: HttpResponse):
    # Given
    request, user_id, token = given

    # When
    actual = handle_get(request, user_id, token)

    # Then
    assert expected == actual


@pytest.mark.parametrize("given,expected", [[(HttpRequest("post", ""), "1234", ""), HttpResponse()]])
def test_handle_get(given: dict, expected: HttpResponse):
    # Given
    request, user_id, token = given

    # When
    actual = handle_post(request, user_id, token)

    # Then
    assert expected == actual