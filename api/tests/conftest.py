import os
import pytest

# Set environment variable for testing
@pytest.fixture(scope="session", autouse=True)
def set_environment_variables():
    os.environ["FUNC_ENV"] = "test"