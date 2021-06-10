from mongoengine import EmbeddedDocument, DictField


class Paths(EmbeddedDocument):
    # TODO Not sure how to implement this.
    path = DictField()