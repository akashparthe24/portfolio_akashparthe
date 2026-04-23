"""
Email Scheduler - Schedule and send emails safely.
"""
import smtplib
import logging
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from typing import Dict, List
from config import SMTP_CONFIG, MAX_EMAILS_PER_DAY, EMAIL_DELAY_SECONDS

logger = logging.getLogger(__name__)


class EmailScheduler:
    """Schedule and send emails in a controlled, non-spam manner."""

    def __init__(self):
        self.smtp_config = SMTP_CONFIG
        self.max_per_day = MAX_EMAILS_PER_DAY
        self.delay_seconds = EMAIL_DELAY_SECONDS
        self.sent_today = 0
        self.dry_run = True  # Safety: default to dry run

    def set_dry_run(self, dry_run: bool):
        """Enable or disable dry run mode."""
        self.dry_run = dry_run
        logger.info(f"Dry run mode: {'ENABLED' if dry_run else 'DISABLED'}")

    def _create_email_message(
        self,
        to_email: str,
        subject: str,
        body: str,
        attachment_path: str = None
    ) -> MIMEMultipart:
        """Create email message."""
        msg = MIMEMultipart()
        msg['From'] = self.smtp_config['email']
        msg['To'] = to_email
        msg['Subject'] = subject

        # Add body
        msg.attach(MIMEText(body, 'plain'))

        # TODO: Add resume attachment if provided
        # if attachment_path:
        #     with open(attachment_path, 'rb') as f:
        #         attachment = MIMEApplication(f.read(), _subtype='pdf')
        #         attachment.add_header('Content-Disposition', 'attachment',
        #                             filename=os.path.basename(attachment_path))
        #         msg.attach(attachment)

        return msg

    def send_email(
        self,
        to_email: str,
        subject: str,
        body: str,
        attachment_path: str = None
    ) -> bool:
        """
        Send a single email.

        Args:
            to_email: Recipient email
            subject: Email subject
            body: Email body
            attachment_path: Optional path to resume PDF

        Returns:
            True if sent successfully, False otherwise
        """
        if self.dry_run:
            logger.info(f"[DRY RUN] Would send email to {to_email}")
            logger.debug(f"Subject: {subject}")
            logger.debug(f"Body preview: {body[:100]}...")
            return True

        if self.sent_today >= self.max_per_day:
            logger.warning(f"Daily limit reached ({self.max_per_day}). Skipping {to_email}")
            return False

        try:
            # Create message
            msg = self._create_email_message(to_email, subject, body, attachment_path)

            # Connect to SMTP server
            logger.info(f"Connecting to SMTP server...")
            with smtplib.SMTP(self.smtp_config['server'], self.smtp_config['port']) as server:
                server.starttls()
                server.login(self.smtp_config['email'], self.smtp_config['password'])

                # Send email
                server.send_message(msg)
                logger.info(f"✓ Email sent successfully to {to_email}")

            self.sent_today += 1
            return True

        except smtplib.SMTPAuthenticationError:
            logger.error("SMTP authentication failed. Check your email credentials.")
            return False
        except smtplib.SMTPException as e:
            logger.error(f"SMTP error sending to {to_email}: {e}")
            return False
        except Exception as e:
            logger.error(f"Unexpected error sending to {to_email}: {e}")
            return False

    def send_batch(
        self,
        emails: List[Dict],
        delay_seconds: int = None
    ) -> Dict[str, int]:
        """
        Send batch of emails with rate limiting.

        Args:
            emails: List of dicts with 'to_email', 'subject', 'body'
            delay_seconds: Override default delay between emails

        Returns:
            Statistics dict with sent/failed counts
        """
        delay = delay_seconds or self.delay_seconds

        stats = {
            'sent': 0,
            'failed': 0,
            'skipped': 0
        }

        logger.info(f"Starting batch send: {len(emails)} emails")
        logger.info(f"Delay between emails: {delay} seconds")

        for i, email_data in enumerate(emails, 1):
            # Check daily limit
            if self.sent_today >= self.max_per_day:
                logger.warning(f"Daily limit reached. Skipping remaining {len(emails) - i + 1} emails")
                stats['skipped'] = len(emails) - i + 1
                break

            to_email = email_data['to_email']
            subject = email_data['subject']
            body = email_data['body']

            logger.info(f"Sending email {i}/{len(emails)} to {to_email}")

            # Send email
            success = self.send_email(to_email, subject, body)

            if success:
                stats['sent'] += 1
            else:
                stats['failed'] += 1

            # Rate limiting delay (except for last email)
            if i < len(emails):
                logger.debug(f"Waiting {delay} seconds before next email...")
                time.sleep(delay)

        logger.info(f"Batch send complete. Sent: {stats['sent']}, Failed: {stats['failed']}, Skipped: {stats['skipped']}")
        return stats

    def schedule_send(self, emails: List[Dict], send_time: str = "08:30") -> Dict:
        """
        Schedule emails to be sent at a specific time.
        This is a placeholder - in production, use actual scheduling.

        Args:
            emails: List of email dicts
            send_time: Time to send (HH:MM format)

        Returns:
            Schedule info dict
        """
        logger.info(f"Scheduling {len(emails)} emails for {send_time}")

        schedule_info = {
            'total_emails': len(emails),
            'scheduled_time': send_time,
            'scheduled_date': datetime.now().strftime('%Y-%m-%d'),
            'status': 'scheduled'
        }

        # In production: integrate with actual scheduler (cron, celery, APScheduler, etc.)
        logger.warning("Note: Actual scheduling requires integration with cron or scheduler")

        return schedule_info

    def reset_daily_counter(self):
        """Reset daily sent counter (call this at midnight)."""
        logger.info(f"Resetting daily counter. Sent today: {self.sent_today}")
        self.sent_today = 0


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)

    scheduler = EmailScheduler()
    scheduler.set_dry_run(True)  # Safe mode

    # Test
    test_emails = [
        {
            'to_email': 'test1@example.com',
            'subject': 'Test Email 1',
            'body': 'This is a test email.'
        },
        {
            'to_email': 'test2@example.com',
            'subject': 'Test Email 2',
            'body': 'This is another test email.'
        }
    ]

    stats = scheduler.send_batch(test_emails, delay_seconds=2)
    print(f"\nSend statistics: {stats}")
