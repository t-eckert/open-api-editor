from lib.models import OpenApiDocument, User

import pytest


def test_from_json():
    # Given
    email = "bill.posters@email.com"
    name = "Bill Posters"
    profile_picture = "https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"

    user_json = {
        "email": email,
        "name": name,
        "profilePicture": profile_picture,
    }

    expected = User(email=email, name=name, profile_picture=profile_picture)

    # When
    actual = User.from_json(user_json)

    # Then
    assert expected.email == actual.email
    assert expected.name == actual.name
    assert expected.profile_picture == actual.profile_picture


@pytest.mark.parametrize(
    "user,expected",
    [
        [
            User(
                name="Bill Posters",
                email="bill.posters@email.com",
                is_pro=False,
                hashed_password="",
                documents=[OpenApiDocument(), OpenApiDocument()],
            ),
            False,
        ],
        [
            User(
                name="Bill Posters",
                email="bill.posters@email.com",
                is_pro=True,
                hashed_password="",
                documents=[OpenApiDocument(), OpenApiDocument()],
            ),
            True,
        ],
        [
            User(
                name="Bill Posters",
                email="bill.posters@email.com",
                is_pro=False,
                hashed_password="",
                documents=[OpenApiDocument()],
            ),
            True,
        ],
        [
            User(
                name="Bill Posters",
                email="bill.posters@email.com",
                is_pro=False,
                hashed_password="",
                documents=[],
            ),
            True,
        ],
    ],
)
def test_can_user_create_document(user: User, expected: bool):
    # When
    actual = user.can_create_document()

    # Then
    assert expected == actual