from mongoengine import EmbeddedDocument, DictField, StringField


class Server(EmbeddedDocument):
    """Represents a server

    Attributes
    ----------

    url: str                    A URL to the target host. This URL supports Server Variables and MAY be relative, to
                                indicate that the host location is relative to the location where the OpenAPI document
                                is being served. Variable substitutions will be made when a variable is named in {brackets}.
    description: str            An optional string describing the host designated by the URL. CommonMark syntax MAY be
                                used for rich text representation.
    variables: dict             A map between a variable name and its value. The value is used for substitution in the
                                server's URL template.
    """

    url: str = StringField()
    description: str = StringField()
    variables: dict = DictField()