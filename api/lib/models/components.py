from mongoengine import Document, MapField


class Components(Document):
    """An element to hold various schemas for the specification.

    Attributes
    ----------

    schemas: dict               Holds reusable schema objects.
    """

    schemas: dict = MapField()
    responses: dict = MapField()
    parameters: dict = MapField()
    examples: dict = MapField()
    requestBodies: dict = MapField()
    headers: dict = MapField()
    securitySchemas: dict = MapField()
    links: dict = MapField()
    callbacks: dict = MapField()