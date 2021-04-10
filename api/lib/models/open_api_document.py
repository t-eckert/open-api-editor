from lib.models.user import User
from mongoengine.fields import EmailField, StringField, URLField
from mongoengine import (
    Document,
    BooleanField,
    EmailField,
    EmbeddedDocument,
    EmbeddedDocumentField,
    ListField,
    ReferenceField,
    URLField,
)


class Info(EmbeddedDocument):
    ...


class Server(EmbeddedDocument):
    ...


class Paths(EmbeddedDocument):
    ...


class Components(EmbeddedDocument):
    ...


class Security(EmbeddedDocument):
    ...


class Tag(EmbeddedDocument):
    ...


class ExternalDocs(EmbeddedDocument):
    ...


class OpenApiDocument(Document):
    """Represents the Open API document

    Implements and extends the [specification](https://swagger.io/specification/)

    Attributes:
        authors (list[User]):   list of document owners

        is_deleted (boolean):   soft delete for the document

    """

    authors = ListField(ReferenceField(User))

    isDeleted = BooleanField(default=False)

    info = EmbeddedDocumentField(Info)
    servers = ListField(EmbeddedDocumentField(Server))
    paths = EmbeddedDocumentField(Paths)
    components = EmbeddedDocumentField(Components)
    security = ListField(EmbeddedDocument(Security))
    tags = ListField(EmbeddedDocument(Tag))
    externalDocs = EmbeddedDocumentField(ExternalDocs)
