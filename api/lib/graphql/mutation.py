from graphene import ObjectType
from lib.graphql.schema.settings import CreateSettings


class Mutation(ObjectType):

    create_settings = CreateSettings.Field()
