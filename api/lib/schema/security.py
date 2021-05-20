from graphene_mongo import MongoengineObjectType
from lib.models.security import Security as SecurityModel


class Security(MongoengineObjectType):
    class Meta:
        model = SecurityModel