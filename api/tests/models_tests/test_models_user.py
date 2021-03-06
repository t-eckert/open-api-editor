from lib.models import OpenApiDocument, User

import json
import pytest


def test_from_json():
    # Given
    email = "bill.posters@email.com"
    name = "Bill Posters"
    picture = "https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"

    user_json = json.dumps(
        {
            "email": email,
            "name": name,
            "picture": picture,
        }
    )

    expected = User(email=email, name=name, picture=picture)

    # When
    actual = User.from_json(user_json)

    # Then
    assert expected.email == actual.email
    assert expected.name == actual.name
    assert expected.picture == actual.picture


@pytest.mark.parametrize(
    "github_data",
    [
        {
            "name": "Bill Posters",
            "email": "bill.posters@gmail.com",
            "id": 1234,
            "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=7FTwFAtLWc&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        },
        {
            "name": "Bill Posters",
            "id": 1234,
            "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=7FTwFAtLWc&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        },
    ],
)
def test_from_github_data(github_data: dict):
    # When
    user = User.from_github_data(**github_data)

    # Then
    assert github_data.get("name") == user.name
    assert github_data.get("email") == user.email
    assert github_data.get("id") == user.githubUid
    assert github_data.get("avatar_url") == user.picture
    assert False == user.isPro


@pytest.mark.parametrize(
    "user,expected",
    [
        [
            User(
                name="Bill Posters",
                email="bill.posters@email.com",
                isPro=False,
                documents=[OpenApiDocument(), OpenApiDocument()],
            ),
            False,
        ],
        [
            User(
                name="Bill Posters",
                email="bill.posters@email.com",
                isPro=True,
                documents=[OpenApiDocument(), OpenApiDocument()],
            ),
            True,
        ],
        [
            User(
                name="Bill Posters",
                email="bill.posters@email.com",
                isPro=False,
                documents=[OpenApiDocument()],
            ),
            True,
        ],
        [
            User(
                name="Bill Posters",
                email="bill.posters@email.com",
                isPro=False,
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