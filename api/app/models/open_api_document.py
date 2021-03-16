from app.models.user import User
from dataclasses import dataclass
from mongoengine import Document, BooleanField, ListField, ReferenceField


@dataclass
class OpenApiDocument(Document):
    authors = ListField(ReferenceField(User))

    is_deleted = BooleanField(default=False)