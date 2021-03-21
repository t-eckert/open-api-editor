from mongoengine import Document, BooleanField, ListField, ReferenceField


class Settings(Document):
    # user = ReferenceField(User)

    @staticmethod
    def from_json(document: dict) -> "Settings":
        ...