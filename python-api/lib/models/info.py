from lib.models.contact import Contact
from lib.models.license import License
from mongoengine import EmbeddedDocument, EmbeddedDocumentField, StringField


class Info(EmbeddedDocument):
    """Provides metadata about the API. The metadata may be used by the clients if needed, and may be presented in
        editing or documentation generation tools for convenience.

    Attributes:
    title (str):                The title of the API.
    description (str):          A short description of the API. CommonMark syntax MAY be used for rich text
                                representation.
    termsOfService (str):       A URL to the Terms of Service for the API. MUST be in the format of a URL.
    contact (Contact):          The contact information for the exposed API.
    license (License):          The license information for the exposed API.
    version (str):              The version of the OpenAPI document.
    """

    title: str = StringField()
    description: str = StringField()
    termsOfService: str = StringField()
    contact: Contact = EmbeddedDocumentField(Contact)
    license: License = EmbeddedDocumentField(License)
    version: str = StringField()
