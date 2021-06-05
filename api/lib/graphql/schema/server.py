from graphene_mongo import MongoengineObjectType
from lib.models import Server


class ServerType(MongoengineObjectType):
    class Meta:
        model = Server