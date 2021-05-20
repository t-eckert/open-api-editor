from graphene import ObjectType, List
from lib.schema.open_api_document import OpenApiDocument


class Query(ObjectType):
    open_api_documents = List(OpenApiDocument)

    def resolve_open_api_documents(self, info):
        return list(OpenApiDocument.objects.all())
