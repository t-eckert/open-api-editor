from graphene_mongo import MongoengineObjectType
from lib.models import Tag


class TagType(MongoengineObjectType):
    class Meta:
        model = Tag