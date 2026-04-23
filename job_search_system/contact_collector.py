"""
Contact Collector - Collect and process contact information.
"""
import logging
from typing import List, Dict
from target_search import TargetSearch
from email_verifier import EmailVerifier
from email_generator import EmailGenerator

logger = logging.getLogger(__name__)


class ContactCollector:
    """Collect, verify, and enrich contact data."""

    def __init__(self):
        self.searcher = TargetSearch()
        self.verifier = EmailVerifier()
        self.email_gen = EmailGenerator()

    def calculate_relevance_score(self, contact: Dict) -> int:
        """
        Calculate relevance score (1-10) for a contact.

        Factors:
        - Title match with target roles
        - Company is H1B sponsor
        - Location match
        - Seniority level
        """
        score = 5  # Base score

        title = contact.get('Title', '').lower()
        company = contact.get('Company', '')

        # Title relevance
        if 'recruiter' in title:
            score += 3  # Recruiters are high priority
        elif 'director' in title or 'vp' in title or 'head' in title:
            score += 2
        elif 'manager' in title:
            score += 2
        elif 'senior' in title or 'lead' in title:
            score += 1

        # Role relevance
        if 'business analyst' in title or 'analytics' in title:
            score += 2
        elif 'data' in title or 'bi' in title:
            score += 1

        # Company size/recognition (heuristic)
        big_tech = ['google', 'amazon', 'microsoft', 'meta', 'apple', 'netflix']
        if any(comp.lower() in company.lower() for comp in big_tech):
            score += 1

        # Cap at 10
        return min(score, 10)

    def process_contact(self, contact: Dict) -> Dict:
        """
        Process a single contact: verify email, calculate score, generate email.

        Args:
            contact: Contact dict with Name, Title, Company, Email, etc.

        Returns:
            Enriched contact dict
        """
        # Verify email
        email = contact.get('Email')
        if email:
            status, reason = self.verifier.verify_email(email)
            contact['Email Status'] = status
        else:
            contact['Email Status'] = 'NOT FOUND'

        # Calculate relevance score
        contact['Relevance Score'] = self.calculate_relevance_score(contact)

        # Generate personalized email
        try:
            email_content = self.email_gen.generate_email(contact)
            contact['Email Draft'] = f"Subject: {email_content['subject']}\n\n{email_content['body']}"
        except Exception as e:
            logger.error(f"Error generating email for {contact.get('Name')}: {e}")
            contact['Email Draft'] = ''

        # Set initial status
        if contact['Email Status'] == 'VALID':
            contact['Outreach Status'] = 'Pending'
        elif contact['Email Status'] == 'RISKY':
            contact['Outreach Status'] = 'Pending'  # Still worth trying
        else:
            contact['Outreach Status'] = 'Email Not Found'

        logger.debug(f"Processed contact: {contact.get('Name')} - Score: {contact['Relevance Score']}")
        return contact

    def process_contacts_batch(self, contacts: List[Dict]) -> List[Dict]:
        """
        Process multiple contacts.

        Args:
            contacts: List of contact dicts

        Returns:
            List of enriched contact dicts
        """
        logger.info(f"Processing {len(contacts)} contacts...")

        processed = []
        for i, contact in enumerate(contacts, 1):
            if i % 10 == 0:
                logger.info(f"Processing contact {i}/{len(contacts)}")

            enriched = self.process_contact(contact)
            processed.append(enriched)

        logger.info(f"Processed {len(processed)} contacts")
        return processed

    def collect_new_contacts(self, count: int = 20) -> List[Dict]:
        """
        Main method: Search, collect, verify, and enrich contacts.

        Args:
            count: Number of contacts to collect

        Returns:
            List of enriched contact dicts
        """
        logger.info(f"Starting contact collection (target: {count} contacts)...")

        # Search all sources
        search_results = self.searcher.search_all_sources()

        # For now, use mock contacts (in production, combine all sources)
        raw_contacts = search_results['mock_contacts'][:count]

        # Process and enrich
        enriched_contacts = self.process_contacts_batch(raw_contacts)

        # Sort by relevance score (highest first)
        enriched_contacts.sort(key=lambda x: x['Relevance Score'], reverse=True)

        logger.info(f"Contact collection complete. Collected {len(enriched_contacts)} contacts")

        # Log statistics
        valid_emails = sum(1 for c in enriched_contacts if c['Email Status'] == 'VALID')
        risky_emails = sum(1 for c in enriched_contacts if c['Email Status'] == 'RISKY')
        avg_score = sum(c['Relevance Score'] for c in enriched_contacts) / len(enriched_contacts)

        logger.info(f"Statistics: Valid={valid_emails}, Risky={risky_emails}, Avg Score={avg_score:.1f}")

        return enriched_contacts


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)

    collector = ContactCollector()

    # Test
    contacts = collector.collect_new_contacts(count=10)

    print(f"\n{'='*80}")
    print(f"Collected {len(contacts)} contacts")
    print(f"{'='*80}\n")

    for contact in contacts[:3]:
        print(f"Name: {contact['Name']}")
        print(f"Title: {contact['Title']}")
        print(f"Company: {contact['Company']}")
        print(f"Email: {contact['Email']} ({contact['Email Status']})")
        print(f"Relevance: {contact['Relevance Score']}/10")
        print(f"\n{'-'*80}\n")
