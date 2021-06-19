from lib.models.security import Security
from graphene import InputObjectType, Mutation, Boolean
from graphene_mongo import MongoengineObjectType
from lib.models import Settings


class SettingsType(MongoengineObjectType):
    class Meta:
        model = Settings


class SettingsInput(InputObjectType):

    prefersReducedMotion = Boolean()


class CreateSettings(Mutation):
    settings = SettingsType

    class Arguments:
        settings_input = SettingsInput(required=True)

    def mutate(self, info, settings_input=None):
        settings = Settings(prefersReducedMotion=settings_input.prefersReducedMotion)
        settings.save()

        return CreateSettings(settings=settings)