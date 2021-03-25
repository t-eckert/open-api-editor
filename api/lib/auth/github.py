from lib.config import GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET
from requests import Response
from typing import Optional

import logging
import requests


def fetch_access_token(code: str, state: str) -> Optional[str]:
    """Queries the GitHub access token API with a code and state, returns an access token for the user if valid

    Args:
        code (str):             a code retrieved from the GitHub API with an expiration of 10 minutes
        state (str):            a random string previously exchanged with GitHub to verify the caller

    Returns:
        Optional[str]:          access token if it can be retrived, otherwise None
    """

    response: Response = requests.post(
        "https://github.com/login/oauth/access_token",
        headers={"Accept": "application/json"},
        params={
            "client_id": GITHUB_CLIENT_ID,
            "client_secret": GITHUB_CLIENT_SECRET,
            "code": code,
            "state": state,
        },
    )

    if response.status_code != 200:
        logging.error("Request for access token from GitHub failed")
        return None

    return response.json()["access_token"]


def fetch_user_data(access_token: str) -> Optional[dict]:
    """Queries the GitHub user API with an access token, returns user data if the access token is valid

    Args:
        access_token (str):     token for accessing data about a user on GitHub

    Returns:
        Optional[dict]:         user data from GitHub if it can be retrieved, otherwise None
    """

    response: Response = requests.get(
        "https://api.github.com/user",
        headers={"Authorization": f"token {access_token}"},
    )

    return response.json()
