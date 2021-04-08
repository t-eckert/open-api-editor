from lib.email import Email

import pytest


@pytest.mark.skip()
def test_send_email():
    # Given
    email = Email("thomas@openapieditor.com", ["thomas.james.eckert@gmail.com"], "Test email", "This is just for fun.")

    # When
    email.send()
