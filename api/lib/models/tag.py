from mongoengine import Document, StringField


class Tag(Document):

    name: str = StringField()
    description: str = StringField()