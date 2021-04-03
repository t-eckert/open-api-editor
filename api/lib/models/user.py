from datetime import datetime
from lib.config import MAX_FREE_DOCUMENTS
from lib.models import OpenApiDocument, Settings
from mongoengine import (
    BooleanField,
    DateTimeField,
    Document,
    ListField,
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

        isPro (BooleanField):               if the user has pro feature access

        created (DateTimeField):            when the user object was first created
        lastLogin (DateTimeField):          the last time the user logged in

        documents (List[OpenApiDocument]):  the user's Open API documents
        settings (Settings):                the user's settings
    """

    name = StringField(required=True)
    email = StringField(required=True)
    githubUid = StringField()

    picture = URLField()

    isPro = BooleanField(required=True, default=False)

    created = DateTimeField(default=datetime.now())
    lastLogin = DateTimeField(default=datetime.now())

    documents = ListField(ReferenceField(OpenApiDocument), default=[])
    settings = ReferenceField(Settings)

    def can_create_document(self) -> bool:
        return self.isPro or (len(self.documents) < MAX_FREE_DOCUMENTS and not self.isPro)

    @staticmethod
    def from_github_data(**kwargs) -> "User":
        return User(
            name=kwargs["name"],
            email=kwargs["email"],
            githubUid=kwargs["id"],
            picture=kwargs["avatar_url"],
        )
