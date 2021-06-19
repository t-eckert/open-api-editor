from graphene_mongo import MongoengineObjectType
from lib.models import Path


class PathType(MongoengineObjectType):
    class Meta:
        model = Path