from graphene_mongo import MongoengineObjectType
from lib.models import ExternalDocs


class ExternalDocsType(MongoengineObjectType):
    class Meta:
        model = ExternalDocs