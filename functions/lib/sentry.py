from app.config import SENTRY_URL, SENTRY_CONFIG
from sentry_sdk.integrations.serverless import serverless_function

import sentry_sdk


def connect_to_sentry():
    """Creates a connection to Sentry for logging"""

    sentry_sdk.init(SENTRY_URL, traces_sample_rate=1.0, **SENTRY_CONFIG)
