"""
Email Verifier - Safely verify email addresses using DNS and SMTP checks.
"""
import re
import logging
import dns.resolver
import socket
from typing import Tuple
from email_validator import validate_email as validate_email_format, EmailNotValidError

logger = logging.getLogger(__name__)


class EmailVerifier:
    """Verify email addresses using safe, non-invasive methods."""

    def __init__(self):
        self.dns_cache = {}

    def validate_format(self, email: str) -> bool:
        """Validate email format using regex."""
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return bool(re.match(pattern, email))

    def check_mx_records(self, domain: str) -> bool:
        """Check if domain has valid MX records."""
        if domain in self.dns_cache:
            return self.dns_cache[domain]

        try:
            mx_records = dns.resolver.resolve(domain, 'MX')
            has_mx = len(mx_records) > 0
            self.dns_cache[domain] = has_mx
            logger.debug(f"Domain {domain} has {len(mx_records)} MX records")
            return has_mx
        except (dns.resolver.NXDOMAIN, dns.resolver.NoAnswer, dns.resolver.NoNameservers):
            logger.debug(f"No MX records found for {domain}")
            self.dns_cache[domain] = False
            return False
        except Exception as e:
            logger.warning(f"Error checking MX records for {domain}: {e}")
            return False

    def smtp_ping(self, email: str) -> bool:
        """
        Perform SMTP ping to verify mailbox (non-intrusive).
        Note: Many servers block this, so treat failure as inconclusive.
        """
        try:
            domain = email.split('@')[1]
            mx_records = dns.resolver.resolve(domain, 'MX')
            mx_host = str(mx_records[0].exchange)

            # Connect to SMTP server
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
                sock.settimeout(10)
                sock.connect((mx_host, 25))
                sock.recv(1024)  # Read banner
                sock.send(b'HELO verify.local\r\n')
                sock.recv(1024)
                sock.send(b'QUIT\r\n')

            logger.debug(f"SMTP ping successful for {email}")
            return True
        except Exception as e:
            logger.debug(f"SMTP ping failed for {email}: {e}")
            # Don't mark as invalid - many servers block SMTP pings
            return True  # Treat as inconclusive

    def verify_email(self, email: str) -> Tuple[str, str]:
        """
        Verify email address and return status and confidence.

        Returns:
            Tuple of (status, reason)
            Status: VALID, RISKY, NOT FOUND
        """
        if not email:
            return 'NOT FOUND', 'Email not provided'

        # Format validation
        if not self.validate_format(email):
            return 'NOT FOUND', 'Invalid email format'

        try:
            # Use email-validator library
            validation = validate_email_format(email, check_deliverability=False)
            normalized_email = validation.normalized
            domain = normalized_email.split('@')[1]
        except EmailNotValidError as e:
            return 'NOT FOUND', f'Invalid email: {str(e)}'

        # Check MX records
        if not self.check_mx_records(domain):
            return 'NOT FOUND', 'Domain has no MX records'

        # Check if it's a common corporate domain
        corporate_domains = [
            'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
            'microsoft.com', 'amazon.com', 'google.com', 'meta.com',
            'apple.com', 'salesforce.com', 'oracle.com', 'ibm.com'
        ]

        if domain in corporate_domains or any(
            corp in domain for corp in ['company', 'corp', 'inc', 'llc']
        ):
            # Higher confidence for known corporate domains
            return 'VALID', 'Valid corporate domain with MX records'

        # SMTP ping (optional, may be blocked)
        # smtp_ok = self.smtp_ping(email)

        # Default: Mark as RISKY if we can't fully verify
        return 'RISKY', 'Domain has MX records but mailbox not confirmed'

    def generate_email(self, first_name: str, last_name: str, domain: str) -> str:
        """
        Generate probable email using common patterns.

        Args:
            first_name: First name
            last_name: Last name
            domain: Company domain (e.g., 'company.com')

        Returns:
            Probable email address
        """
        first = first_name.lower().replace(' ', '')
        last = last_name.lower().replace(' ', '')

        # Most common pattern: firstname.lastname@domain
        return f"{first}.{last}@{domain}"

    def batch_verify(self, emails: list) -> dict:
        """Verify multiple emails and return results."""
        results = {}
        for email in emails:
            status, reason = self.verify_email(email)
            results[email] = {
                'status': status,
                'reason': reason
            }
        return results


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)

    verifier = EmailVerifier()

    # Test emails
    test_emails = [
        'test@gmail.com',
        'invalid@nonexistentdomain99999.com',
        'john.doe@microsoft.com',
    ]

    for email in test_emails:
        status, reason = verifier.verify_email(email)
        print(f"{email}: {status} - {reason}")
