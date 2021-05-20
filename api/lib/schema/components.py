from graphene_mongo import MongoengineObjectType
from lib.models.components import Components as ComponentsModel


class Components(MongoengineObjectType):
    class Meta:
        model = ComponentsModel