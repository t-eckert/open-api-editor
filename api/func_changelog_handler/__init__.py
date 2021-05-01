from typing import Optional
from azure.functions import HttpRequest, HttpResponse
from lib import cache

import logging
import requests


def handle_changelog_request(request: HttpRequest) -> HttpResponse:
    logging.info("/changelog called")

    changelog: Optional[str] = cache.get("changelog")

    if changelog:
        logging.info("Returning Changelog from cache")
        return HttpResponse(changelog)

    response = requests.get("https://raw.githubusercontent.com/t-eckert/open-api-editor/main/CHANGELOG.md")
    changelog = response.text

    if changelog:
        logging.info("Returning Changelog from GitHub")
        cache["changelog"] = changelog
        return HttpResponse(changelog)

    return HttpResponse(None, status_code=404)