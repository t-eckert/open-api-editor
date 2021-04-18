from lib.models import OpenApiDocument
from lib.models.open_api_document import Info

mock_info = Info(title="Test")
mock_open_api_document = OpenApiDocument(info=mock_info)
