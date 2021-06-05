from lib.models.security import Security
from graphene_mongo import MongoengineObjectType
from lib.models import Settings


class SettingsType(MongoengineObjectType):
    class Meta:
        model = Security
