from typing import Optional
from lib.config import SENDGRID_API_KEY
from sendgrid.helpers.mail import Email as EmailAddress, Mail, To

import sendgrid


class Email:
    sender: EmailAddress
    recipients: To
    subject: str
    body: str
    reply_to: Optional[str]

    def __init__(self, sender: str, recipients: list[str], subject: str, body: str, reply_to: Optional[str] = None):
        self.sender = EmailAddress(sender)
        self.recipients = To(recipients)
        self.subject = subject
        self.body = body
        self.reply_to = reply_to

    def send(self):
        client = sendgrid.SendGridAPIClient(api_key=SENDGRID_API_KEY)
        mail = Mail(self.sender, self.recipients, self.subject, self.body)

        if self.reply_to:
            mail.reply_to = self.reply_to

        return client.send(mail)
