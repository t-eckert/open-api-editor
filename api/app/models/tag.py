from mongoengine import EmbeddedDocument, StringField


class Tag(EmbeddedDocument):

    name: str = StringField()
    description: str = StringField()