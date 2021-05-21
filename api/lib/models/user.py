from datetime import datetime
from lib.config import MAX_FREE_DOCUMENTS
from mongoengine import (
    BooleanField,
    DateTimeField,
    Document,
    ListField,
    IntField,
    ReferenceField,
    StringField,
    URLField,
)


class User(Document):
    """A user of the Open API Editor

    Note: fields are written in camelCase to ease transfer to JS frontend

    Attributes:
        name (StringField):                 name of the user
        email (StringField):                email of the user
        githubUid (StringField):            GitHub user id (if user has logged in using GitHub OAuth)

        picture (URLField):                 a picture of the user to show in the UI

        plan (StringField):                 tier the user is subscribed to (e.g. "free", "paid")

        created (DateTimeField):            when the user object was first created
        lastLogin (DateTimeField):          the last time the user logged in

        documents (List[OpenApiDocument]):  the user's Open API documents
        settings (Settings):                the user's settings
    """

    name = StringField(required=True)
    email = StringField()
    githubUid = IntField()

    picture = URLField()

    # TODO remove this field
    isPro = BooleanField()
    plan = StringField(required=True, default="free")

    created = DateTimeField(default=datetime.now())
    lastLogin = DateTimeField(default=datetime.now())

    documents = ListField(ReferenceField("OpenApiDocument"), default=[])
    settings = ReferenceField("Settings")

    @staticmethod
    def from_github_data(**kwargs) -> "User":
        return User(
            name=kwargs.get("name"),
            email=kwargs.get("email"),
            githubUid=kwargs.get("id"),
            picture=kwargs.get("avatar_url"),
        )
