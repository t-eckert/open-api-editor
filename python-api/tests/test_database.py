from lib.database import database
from mongoengine import Document, StringField

import pytest


class SampleDocument(Document):
    name = StringField(required=True)


@pytest.mark.skip()
def test_save_and_fetch_document():
    # Given
    expected = SampleDocument(name="Bill Posters")

    @database
    def save_sample(document: SampleDocument):
        document.save()

    @database
    def retrieve_sample(SampleDocument: SampleDocument, *args, **kwargs) -> list[SampleDocument]:
        return SampleDocument.objects(*args, **kwargs)

    # When
    save_sample(expected)
    actual = retrieve_sample(SampleDocument, name="Bill Posters")[0]

    # Then
    assert expected == actual
