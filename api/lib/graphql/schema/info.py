from graphene_mongo import MongoengineObjectType
from lib.models import Info


class InfoType(MongoengineObjectType):
    class Meta:
        model = Info