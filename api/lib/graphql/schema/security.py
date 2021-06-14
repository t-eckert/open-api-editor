from graphene_mongo import MongoengineObjectType
from lib.models import Security


class SecurityType(MongoengineObjectType):
    class Meta:
        model = Security