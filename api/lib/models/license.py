from mongoengine import Document, StringField


class License(Document):
    name: str = StringField()
    url: str = StringField()
