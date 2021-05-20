from graphene_mongo import MongoengineObjectType
from lib.models.external_docs import ExternalDocs as ExternalDocsModel


class ExternalDocs(MongoengineObjectType):
    class Meta:
        model = ExternalDocsModel