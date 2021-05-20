from mongoengine import EmbeddedDocument, StringField


class ExternalDocs(EmbeddedDocument):

    description: str = StringField()
    url: str = StringField()