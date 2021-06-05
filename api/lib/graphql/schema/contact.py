from graphene_mongo import MongoengineObjectType
from lib.models import Contact


class ContactType(MongoengineObjectType):
    class Meta:
        model = Contact