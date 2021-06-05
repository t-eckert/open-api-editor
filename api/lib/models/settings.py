from lib.models.user import User
from mongoengine import Document, BooleanField, ListField, ReferenceField


class Settings(Document):

    prefersReducedMotion = BooleanField()
