from app.models.changelog_version import ChangelogVersion
from dataclasses import dataclass


@dataclass
class Changelog:
    versions: list[ChangelogVersion]
