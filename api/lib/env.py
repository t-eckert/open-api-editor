from typing import Optional

import os


def get_required_env_var(env_var: str) -> str:
    """Ensures an environment variable is set by throwing a ValueError if it is not

    Args:
        env_var (str):          name of the environment variable whose value will be returned

    Raises:
        ValueError:             if the environment variable is not found

    Returns:
        str:                    value of the environment variable
    """

    value: Optional[str] = os.getenv(env_var)

    if value is None:
        raise ValueError(f"{env_var} not found")

    return value