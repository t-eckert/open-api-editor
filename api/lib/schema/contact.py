from graphene_mongo import MongoengineObjectType
from lib.models.contact import Contact as ContactModel


class Contact(MongoengineObjectType):
    class Meta:
        model = ContactModel