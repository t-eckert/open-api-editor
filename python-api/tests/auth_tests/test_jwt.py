from lib.auth import jwt
from lib.config import JWT_SECRET
from time import sleep

import jwt as pyjwt
import pytest


def test_encode():
    # Given
    payload = {"name": "Bill Posters"}

    # When
    token = jwt.encode(payload)

    # Then
    assert token.count(".") == 2


def test_encode_and_decode():
    # Given
    payload = {"name": "Bill Posters"}

    # When
    token = jwt.encode(payload)
    actual = jwt.decode(token)

    # Then
    assert payload["name"] == actual["name"]


def test_decoding_a_bad_token_raises_an_exception():
    # Given
    payload = {"name": "Bill Posters"}
    bad_token = pyjwt.encode(payload, "bad secret", algorithm="HS256")

    # When
    with pytest.raises(pyjwt.exceptions.InvalidSignatureError):
        jwt.decode(bad_token)


def test_tokens_without_expiration_fail_decode():
    # Given
    bad_token = pyjwt.encode({}, JWT_SECRET)

    # When
    with pytest.raises(ValueError):
        jwt.decode(bad_token)


def test_expired_tokens_fail_decode():
    # Given
    payload = {"exp": 1600000000}
    bad_token = pyjwt.encode(payload, JWT_SECRET)

    # When
    with pytest.raises(pyjwt.exceptions.ExpiredSignatureError):
        jwt.decode(bad_token)


def test_renew():
    # Given
    payload = {"name": "Bill Posters"}

    # When
    first_token = jwt.encode(payload)
    first_expiration = jwt.decode(first_token)["exp"]
    sleep(1)

    second_token = jwt.renew(first_token)
    second_expiration = jwt.decode(second_token)["exp"]

    # Then
    assert first_expiration < second_expiration