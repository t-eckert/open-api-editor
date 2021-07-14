from app.cache import cache
from app.config import CHANGELOG_URL
from app.models.changelog import Changelog
from app.models.changelog_version import ChangelogVersion

import requests


def get_changelog() -> Changelog:
    """Fetches the Open API Editor changelog from GitHub or the cache

    Returns:
        Changelog:              formatted changelog from GitHub
    """

    return cache.get("changelog") or hydrate_changelog()


def hydrate_changelog() -> Changelog:

    # TODO properly implement this
    changelog_yaml = requests.get(CHANGELOG_URL).text

    return Changelog(versions=[ChangelogVersion.from_yaml(yaml) for yaml in changelog_yaml])
