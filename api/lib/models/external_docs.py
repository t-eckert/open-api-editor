from mongoengine import Document, StringField


class ExternalDocs(Document):

    description: str = StringField()
    url: str = StringField()