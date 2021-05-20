from graphene_mongo import MongoengineObjectType
from lib.models.info import Info as InfoModel


class Info(MongoengineObjectType):
    class Meta:
        model = InfoModel