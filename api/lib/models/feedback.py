from mongoengine import Document, StringField, EmailField


class Feedback(Document):
    feedbackBody = StringField(required=True)
    email = EmailField()