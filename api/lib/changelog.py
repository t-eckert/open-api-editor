from functools import lru_cache

import requests


@lru_cache
def get_changelog() -> str:
    """Fetches the Open API Editor changelog from GitHub result is cached for the lifetime of the Azure Function

    Returns:
        str:                    raw content from the CHANGELOG.md or "" if the request fails
    """

    response = requests.get("https://raw.githubusercontent.com/t-eckert/open-api-editor/main/CHANGELOG.md")

    return response.text if response.ok else ""
