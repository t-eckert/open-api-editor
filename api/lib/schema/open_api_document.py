from graphene_mongo import MongoengineObjectType
from lib.models.open_api_document import OpenApiDocument as OpenApiDocumentModel


class OpenApiDocument(MongoengineObjectType):
    class Meta:
        model = OpenApiDocumentModel
