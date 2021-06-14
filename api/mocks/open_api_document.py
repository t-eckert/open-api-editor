from lib.models import OpenApiDocument
from lib.models.open_api_document import Info

mock_info = Info(title="Test")
mock_open_api_document_1 = OpenApiDocument(info=mock_info)
mock_open_api_document_1._id = {"$oid": "a867b112-85ac-4bb0-86e1-0a6c6f555e0c"}

mock_open_api_documents = [mock_open_api_document_1]