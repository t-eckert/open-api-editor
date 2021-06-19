from app.graphql.schema.settings import SettingsType
from graphene import Schema
from app.database import database
from app.graphql.mutation import Mutation
from app.graphql.query import Query
from typing import Any

schema = Schema(query=Query)


@database
def execute_query(query: str) -> Any:
    """Executes a GraphQL query while connected to the database

    Args:
        query (str):            GraphQL query
    """

    return schema.execute(query)
