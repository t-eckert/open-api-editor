from mongoengine import Document, StringField


class Contact(Document):
    name: str = StringField()
    url: str = StringField()
    email: str = StringField()