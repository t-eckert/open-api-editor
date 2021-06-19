from graphene_mongo import MongoengineObjectType
from lib.models import OpenApiDocument


class OpenApiDocumentType(MongoengineObjectType):
    class Meta:
        model = OpenApiDocument