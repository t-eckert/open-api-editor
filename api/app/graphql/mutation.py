from graphene import ObjectType
from app.graphql.schema.settings import CreateSettings


class Mutation(ObjectType):

    create_settings = CreateSettings.Field()
