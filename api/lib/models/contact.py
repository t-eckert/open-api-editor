from mongoengine import EmbeddedDocument, StringField


class Contact(EmbeddedDocument):
    name: str = StringField()
    url: str = StringField()
    email: str = StringField()