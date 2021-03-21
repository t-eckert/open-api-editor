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


class ContactInformation(EmbeddedDocument):
    name = StringField()
    email = EmailField()
    website = URLField()


class License(EmbeddedDocument):
    name = StringField()
    url = URLField()


class OpenApiDocument(Document):
    # authors = ListField(ReferenceField())

    is_deleted = BooleanField(default=False)

    title = StringField()
    version = StringField()
    description = StringField()
    terms_of_service = StringField()

    contact_information = EmbeddedDocumentField(ContactInformation)

    license = EmbeddedDocumentField(License)

    @staticmethod
    def from_json(document: dict) -> "OpenApiDocument":
        return OpenApiDocument(
            # authors=document["authors"], is_deleted=document["isDeleted"]
        )
