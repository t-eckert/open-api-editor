from lib.config import SENDGRID_API_KEY
from sendgrid.helpers.mail import Email as EmailAddress, Mail, To

import sendgrid


class Email:
    sender: EmailAddress
    recipients: To
    subject: str
    body: str

    def __init__(self, sender: str, recipients: list[str], subject: str, body: str):
        self.sender = EmailAddress(sender)
        self.recipients = To(recipients)
        self.subject = subject
        self.body = body

    def send(self):
        client = sendgrid.SendGridAPIClient(api_key=SENDGRID_API_KEY).client
        mail = Mail(self.sender, self.recipients, self.subject, self.body)

        return client.mail.send.post(request_body=mail.get())
