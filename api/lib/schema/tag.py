from graphene_mongo import MongoengineObjectType
from lib.models.tag import Tag as TagModel


class Tag(MongoengineObjectType):
    class Meta:
        model = TagModel