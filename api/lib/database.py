from lib.config import DATABASE_CONNECTION_STRING
from mongoengine import connect, disconnect


def connect_to_database():
    """Initiates a connection to the database using the connection string"""

    connect(DATABASE_CONNECTION_STRING)


def disconnect_from_database():
    """Disconnects the application from the database"""

    disconnect()
