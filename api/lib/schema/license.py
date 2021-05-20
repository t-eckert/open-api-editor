from graphene_mongo import MongoengineObjectType
from lib.models.license import License as LicenseModel


class License(MongoengineObjectType):
    class Meta:
        model = LicenseModel