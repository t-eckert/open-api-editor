from graphene import ObjectType, List, String
import graphene
from lib.schema.open_api_document import OpenApiDocument
from lib.models.open_api_document import OpenApiDocument as OpenApiDocumentModel
from lib.changelog import get_changelog
from mocks.open_api_document import mock_open_api_documents


class Query(ObjectType):
    open_api_documents = String()
    changelog = String()

    def resolve_open_api_documents(self, info):
        return "Hi"

    def resolve_changelog(self, info):
        return get_changelog()
