from graphene_mongo import MongoengineObjectType
from lib.models import Paths


class PathsType(MongoengineObjectType):
    class Meta:
        model = Paths