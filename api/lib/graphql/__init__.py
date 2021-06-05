from graphene import Schema
from lib.database import database
from lib.graphql.mutation import Mutation
from lib.graphql.query import Query
from typing import Any

schema = Schema(query=Query)


@database
def execute_query(query: str) -> Any:
    """Executes a GraphQL query while connected to the database

    Args:
        query (str):            GraphQL query
    """

    return schema.execute(query)