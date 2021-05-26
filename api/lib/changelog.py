from functools import lru_cache

import requests


@lru_cache
def get_changelog() -> str:

    response = requests.get("https://raw.githubusercontent.com/t-eckert/open-api-editor/main/CHANGELOG.md")
    return response.text
