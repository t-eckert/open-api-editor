from graphene_mongo import MongoengineObjectType
from lib.models import User


class UserType(MongoengineObjectType):
    class Meta:
        model = User