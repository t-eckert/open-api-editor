from graphene_mongo import MongoengineObjectType
from lib.models.server import Server as ServerModel


class Server(MongoengineObjectType):
    class Meta:
        model = ServerModel