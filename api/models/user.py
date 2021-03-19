from dataclasses import dataclass
from mongoengine import Document, ListField, ReferenceField, StringField


@dataclass
class User:
    email = StringField(require=True)
    name = StringField(required=True)
