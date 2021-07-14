from graphene_mongo import MongoengineObjectType
from lib.models import License


class LicenseType(MongoengineObjectType):
    class Meta:
        model = License
