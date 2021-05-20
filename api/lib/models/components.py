from mongoengine import EmbeddedDocument, DictField


class Components(EmbeddedDocument):
    """An element to hold various schemas for the specification.

    Attributes
    ----------

    schemas: dict               Holds reusable schema objects.
    """

    schemas: dict = DictField()
    responses: dict = DictField()
    parameters: dict = DictField()
    examples: dict = DictField()
    requestBodies: dict = DictField()
    headers: dict = DictField()
    securitySchemas: dict = DictField()
    links: dict = DictField()
    callbacks: dict = DictField()