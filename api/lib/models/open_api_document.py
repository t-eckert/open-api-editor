from datetime import datetime
from lib.models.components import Components
from lib.models.external_docs import ExternalDocs
from lib.models.paths import Paths
from lib.models.info import Info
from lib.models.security import Security
from lib.models.server import Server
from lib.models.tag import Tag
from lib.models.user import User
from mongoengine import (
    BooleanField,
    Document,
    DateField,
    DictField,
    EmbeddedDocumentField,
    ListField,
    ReferenceField,
    StringField,
)


class OpenApiDocument(Document):
    """Represents the Open API document

    Implements and extends the [specification](https://swagger.io/specification/)

    Attributes
    ----------

    authors: list[User]         list of document owners

    is_deleted: bool            soft delete for the document

    openapi: str                This string must be the semantic version number of the OpenAPI specification version
                                that the OpenAPI document uses. The openapi field should be used by tooling
                                specifications and clients to interpret the OpenAPI document.
    info: Info                  Provides metadata about the API. The metadata may be used by tooling as required.
    servers: list[Server]       An array of Server objects, which provide connectivity information to a target server.
                                If the servers property is not provided, or is an empty array, the default value would
                                be a Server object with a url value of "/".
    paths: list[Paths]          The available paths and operations for the API.
    components: Components      An element to hold various schemas for the specification.
    security: list[Security]    A declaration of which security mechanisms can be used across the API. The list of
                                values includes alternative security requirement objects that can be used. Only one
                                of the security requirement objects need to be satisfied to authorize a request.
                                Individual operations can override this definition. To make security optional, an empty
                                security requirement ({}) can be included in the array.
    tags: list[Tag]             A list of tags used by the specification with additional metadata. The order of the tags
                                can be used to reflect on their order by the parsing tools. Not all tags that are used
                                by the Operation Object must be declared. The tags that are not declared MAY be
                                organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.
    externalDocs: ExternalDocs  Additional external documentation
    """

    _id: dict = DictField()

    authors: list[User] = ListField(ReferenceField(User))

    createdAt: datetime = DateField()
    updatedAt: datetime = DateField()
    isDeleted: bool = BooleanField(default=False)

    openapi: str = StringField()
    info: Info = EmbeddedDocumentField(Info)
    servers: list[Server] = ListField(EmbeddedDocumentField(Server))
    paths: Paths = EmbeddedDocumentField(Paths)
    components: Components = EmbeddedDocumentField(Components)
    security: list[Security] = ListField(EmbeddedDocumentField(Security))
    tags: list[Tag] = ListField(EmbeddedDocumentField(Tag))
    externalDocs: ExternalDocs = EmbeddedDocumentField(ExternalDocs)
