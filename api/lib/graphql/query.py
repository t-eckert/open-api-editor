from graphene import ObjectType, List, String
from graphene import Node, Field
from graphene_mongo import MongoengineConnectionField
from lib.changelog import get_changelog


class Query(ObjectType):
    changelog = String()

    def resolve_changelog(self, info):
        return get_changelog()
