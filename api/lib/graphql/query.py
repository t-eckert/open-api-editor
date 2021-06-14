from lib.models.settings import Settings
from graphene import ObjectType, List, String
from graphene_mongo import MongoengineConnectionField
from lib.changelog import get_changelog
from lib.graphql.schema.settings import SettingsType


class Query(ObjectType):
    changelog = String()
    settings = List(SettingsType)

    def resolve_changelog(self, info):
        return get_changelog()

    def resolve_settings(self, info):
        return list(Settings.objects.all())