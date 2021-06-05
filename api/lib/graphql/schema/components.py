from graphene_mongo import MongoengineObjectType
from lib.models import Components
from mongoengine import EmbeddedDocument, DictField


class ComponentsType(MongoengineObjectType):
    class Meta:
        model = Components