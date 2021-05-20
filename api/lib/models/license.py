from mongoengine import EmbeddedDocument, StringField


class License(EmbeddedDocument):
    name: str = StringField()
    url: str = StringField()
