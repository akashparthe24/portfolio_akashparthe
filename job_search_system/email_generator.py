"""
Email Generator - Create personalized outreach emails.
"""
import logging
from typing import Dict
from jinja2 import Template
from config import RESUME_DATA, CANDIDATE

logger = logging.getLogger(__name__)


class EmailGenerator:
    """Generate personalized outreach emails."""

    def __init__(self):
        self.resume = RESUME_DATA
        self.candidate = CANDIDATE

    def generate_subject(self, contact: Dict) -> str:
        """Generate email subject line."""
        templates = [
            "Carnegie Mellon MSBA Candidate - Business Analyst Role",
            "Experienced BA Candidate | CMU MSBA | {company}",
            "Business Analyst with Azure & Power BI Experience",
            "{years}+ Years BA Experience | Open to {role} Opportunities",
            "CMU Student | Business Analyst | Interested in {company}",
        ]

        # Choose template based on contact info
        company = contact.get('Company', '')
        title = contact.get('Title', '')
        role = 'Business Analyst'

        if 'Senior' in title or 'Director' in title or 'VP' in title:
            subject = templates[1].format(company=company)
        elif company:
            subject = templates[4].format(company=company)
        else:
            subject = templates[0]

        return subject

    def generate_email_body(self, contact: Dict) -> str:
        """Generate personalized email body."""
        name = contact.get('Name', '').split()[0]  # First name
        title = contact.get('Title', '')
        company = contact.get('Company', '')

        # Determine personalization based on title
        greeting = self._get_greeting(name, title)
        opening = self._get_opening(title, company)
        body = self._get_body(title, company)
        closing = self._get_closing()

        email = f"""{greeting}

{opening}

{body}

{closing}

Best regards,
{self.candidate['name']}
MSBA Candidate, Carnegie Mellon University
{self.candidate['email']}
{self.candidate['linkedin']}
"""
        return email

    def _get_greeting(self, name: str, title: str) -> str:
        """Get personalized greeting."""
        if name:
            return f"Hi {name},"
        elif 'recruiter' in title.lower():
            return "Hi,"
        else:
            return "Hello,"

    def _get_opening(self, title: str, company: str) -> str:
        """Get personalized opening line."""
        title_lower = title.lower()

        if 'recruiter' in title_lower:
            return (
                f"I hope this email finds you well. I'm reaching out regarding Business Analyst "
                f"opportunities at {company}. As someone who focuses on analytics hiring, "
                f"I thought you'd be the right person to connect with."
            )
        elif 'director' in title_lower or 'vp' in title_lower:
            return (
                f"I hope you're doing well. I'm reaching out because I greatly admire {company}'s "
                f"work in analytics and business intelligence. As someone leading the analytics "
                f"organization, I wanted to introduce myself for any current or future opportunities."
            )
        elif 'business analyst' in title_lower or 'analyst' in title_lower:
            return (
                f"I came across your profile and noticed your role as a {title} at {company}. "
                f"I'm impressed by the analytics work at {company}, and I'm reaching out to "
                f"explore potential opportunities to contribute to your team."
            )
        elif 'manager' in title_lower or 'lead' in title_lower:
            return (
                f"I hope this email finds you well. I'm reaching out regarding Business Analyst "
                f"opportunities within your team at {company}. Your work in analytics caught my attention, "
                f"and I believe my background could be a strong fit."
            )
        else:
            return (
                f"I hope you're doing well. I'm reaching out to explore Business Analyst opportunities "
                f"at {company}. I believe my experience aligns well with the work your team is doing."
            )

    def _get_body(self, title: str, company: str) -> str:
        """Get main email body with experience summary."""
        # Customize based on company or role
        body = f"""I'm currently completing my Master of Science in Business Analytics at Carnegie Mellon University (Tepper School of Business) and actively seeking full-time Business Analyst opportunities starting in May 2026.

I bring 3 years of hands-on experience as a Business Analyst at LTIMindtree, where I partnered with 15+ business stakeholders to translate requirements into measurable outcomes:

• Reduced scope changes by 35% through stakeholder interviews, workshops, and BRD/FRD documentation
• Increased project delivery accuracy by 30% by leading requirements workshops across SDLC phases
• Improved cost visibility by 20% with Power BI dashboards and executive reporting
• Reduced manual effort by 40% through gap analysis, automation, and data quality frameworks
• Enabled 45% faster data access by supporting cloud migration initiatives with SQL optimization

My technical toolkit includes SQL, Python, Power BI, Tableau, Azure (Synapse, Data Factory, Fabric), Snowflake, and Databricks. I'm proficient in Agile/Scrum methodologies and tools like JIRA and Confluence.

I'm particularly drawn to roles where I can combine stakeholder collaboration, requirements analysis, and data-driven decision support to drive business outcomes."""

        # Add visa status
        body += f"\n\n{self.candidate['visa_status']}."

        # Add call to action
        body += f"""

I'd love to discuss how my background in business analysis, analytics, and stakeholder management could contribute to {company}'s success. I've attached my resume for your review.

Would you be open to a brief conversation about current or upcoming opportunities?"""

        return body

    def _get_closing(self) -> str:
        """Get email closing."""
        return "Thank you for considering my application. I look forward to hearing from you."

    def generate_email(self, contact: Dict) -> Dict[str, str]:
        """
        Generate complete email with subject and body.

        Args:
            contact: Contact dictionary with Name, Title, Company, etc.

        Returns:
            Dictionary with 'subject' and 'body'
        """
        subject = self.generate_subject(contact)
        body = self.generate_email_body(contact)

        logger.info(f"Generated email for {contact.get('Name')} at {contact.get('Company')}")

        return {
            'subject': subject,
            'body': body
        }

    def generate_bulk_emails(self, contacts: list) -> list:
        """Generate emails for multiple contacts."""
        emails = []
        for contact in contacts:
            email = self.generate_email(contact)
            email['contact'] = contact
            emails.append(email)

        logger.info(f"Generated {len(emails)} personalized emails")
        return emails


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)

    generator = EmailGenerator()

    # Test
    test_contact = {
        'Name': 'Jane Smith',
        'Title': 'Senior Recruiter',
        'Company': 'Microsoft',
        'Email': 'jane.smith@microsoft.com'
    }

    email = generator.generate_email(test_contact)
    print("="*80)
    print(f"SUBJECT: {email['subject']}")
    print("="*80)
    print(email['body'])
    print("="*80)
