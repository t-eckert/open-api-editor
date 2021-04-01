from lib.config import JWT_SECRET, VALID_TIME
from time import time
from typing import Optional

import jwt


def encode(payload: dict) -> str:
    """Encodes the payload as a JWT using the HS256 algorithm

    Sets an expiration time based on the current time plus the VALID_TIME value in seconds

    Args:
        payload (dict):         data to encode in the JWT

    Returns:
        str:                    an encoded JWT
    """

    # Set the expiration based on VALID_TIME
    expiration = int(time()) + VALID_TIME

    return jwt.encode({**payload, "exp": expiration}, JWT_SECRET, algorithm="HS256")


def decode(token: str) -> dict:
    """Attempts to decode the token using the HS256 algorithm and returns the payload if successful

    If the token is not valid, an exception is thrown.

    Args:
        token (str):            JWT to be decoded

    Returns:
        dict:                   payload of the JWT
    """

    return jwt.decode(token, JWT_SECRET, algorithms="HS256")


def renew(token: str) -> Optional[str]:
    """Attempts to decode the token then returns a new token with the same payload except for a new expiration time

    Args:
        token (str):            JWT to be renewed

    Returns:
        Optional[str]:          a renewed JWT if the input JWT is valid
    """

    try:
        payload: dict = decode(token)
    except:
        return None

    return encode(payload)
