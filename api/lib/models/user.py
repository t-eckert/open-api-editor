from lib.config import MAX_FREE_DOCUMENTS
from lib.models import OpenApiDocument, Settings
from mongoengine import (
    BooleanField,
    Document,
    ListField,
    ReferenceField,
    StringField,
    URLField,
)


class User(Document):
    """A user of the Open API Editor

    Attributes:
        name (StringField):
        email (StringField):
        is_pro (BooleanField):
        profile_pictures (URLField):

        hashed_password (StringField):

        documents (List[OpenApiDocument]):
        settings (Settings):
    """

    name = StringField(required=True)
    email = StringField(require=True)
    is_pro = BooleanField(required=True)
    profile_picture = URLField()

    hashed_password = StringField(required=True)

    documents = ListField(ReferenceField(OpenApiDocument))
    settings = ReferenceField(Settings)

    def can_create_document(self) -> bool:
        return self.is_pro or (
            len(self.documents) < MAX_FREE_DOCUMENTS and not self.is_pro
        )

    def login(email: str, password: str) -> "User":
        ...

    @staticmethod
    def create(name: str, email: str, password: str) -> "User":
        hashed_password: str = password

        return User(
            name=name, email=email, hashed_password=hashed_password, is_pro=False
        )

    @staticmethod
    def from_json(user: dict) -> "User":
        return User(
            name=user["name"],
            email=user["email"],
            profile_picture=user["profilePicture"],
        )
