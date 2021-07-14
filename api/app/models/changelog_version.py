from dataclasses import dataclass


@dataclass
class ChangelogVersion:
    version: int
    title: str
    released: str
    updates: list[str]
