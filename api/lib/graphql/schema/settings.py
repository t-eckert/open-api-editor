from lib.models.security import Security
from graphene import InputObjectType, Mutation
from graphene_mongo import MongoengineObjectType
from lib.models import Settings


class SettingsType(MongoengineObjectType):
    class Meta:
        model = Settings

class SettingsInput(InputObjectType):

    

class CreateSettings(Mutation):
    settings = SettingsType

    class Arguments:
        settings_input = 