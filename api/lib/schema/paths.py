from graphene_mongo import MongoengineObjectType
from lib.models.paths import Paths as PathsModel


class Paths(MongoengineObjectType):
    class Meta:
        model = PathsModel