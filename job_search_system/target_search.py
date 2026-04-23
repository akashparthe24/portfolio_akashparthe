"""
Target Search - Find hiring stakeholders from public sources.
Uses only publicly available data, no login-required scraping.
"""
import logging
import requests
import random
import time
from typing import List, Dict
from bs4 import BeautifulSoup
from config import H1B_SPONSOR_COMPANIES, USER_AGENTS, TARGET_ROLES

logger = logging.getLogger(__name__)


class TargetSearch:
    """Search for hiring stakeholders using only public sources."""

    def __init__(self):
        self.session = requests.Session()
        self.user_agent = random.choice(USER_AGENTS)
        self.session.headers.update({'User-Agent': self.user_agent})

    def _safe_request(self, url: str, timeout: int = 10) -> requests.Response:
        """Make a safe HTTP request with error handling."""
        try:
            time.sleep(random.uniform(2, 5))  # Rate limiting
            response = self.session.get(url, timeout=timeout)
            response.raise_for_status()
            return response
        except requests.RequestException as e:
            logger.warning(f"Request failed for {url}: {e}")
            return None

    def search_h1b_sponsors(self) -> List[Dict]:
        """
        Get H1B sponsor companies from public data.
        Returns list of companies known to sponsor H1B visas.
        """
        logger.info("Searching H1B sponsor companies...")

        companies = []
        for company_name in H1B_SPONSOR_COMPANIES[:50]:  # Limit to top 50
            companies.append({
                'company_name': company_name,
                'h1b_sponsor': True,
                'source': 'Public H1B Data'
            })

        logger.info(f"Found {len(companies)} H1B sponsor companies")
        return companies

    def search_wellfound(self, role: str = "Business Analyst") -> List[Dict]:
        """
        Search Wellfound (AngelList) for startup jobs.
        Note: This is a placeholder - actual implementation would use their public API or web scraping.
        """
        logger.info(f"Searching Wellfound for {role} roles...")

        # Placeholder: In production, implement actual Wellfound scraping
        # For now, return sample data structure
        jobs = []

        # Example structure - would be populated from actual scraping
        sample_companies = [
            'Stripe', 'Snowflake', 'Databricks', 'Airbnb', 'DoorDash',
            'Robinhood', 'Coinbase', 'Instacart', 'Plaid', 'Notion'
        ]

        for company in sample_companies:
            jobs.append({
                'company': company,
                'role': role,
                'source': 'Wellfound',
                'status': 'Actively Hiring'
            })

        logger.info(f"Found {len(jobs)} jobs on Wellfound")
        return jobs

    def search_company_careers_page(self, company_domain: str) -> List[Dict]:
        """
        Search company careers page for Business Analyst roles.
        Uses publicly accessible careers pages.
        """
        logger.info(f"Searching careers page for {company_domain}...")

        # Common careers page URLs
        careers_urls = [
            f"https://{company_domain}/careers",
            f"https://{company_domain}/jobs",
            f"https://careers.{company_domain}",
            f"https://jobs.{company_domain}",
        ]

        for url in careers_urls:
            response = self._safe_request(url)
            if response and response.status_code == 200:
                logger.info(f"Found careers page at {url}")
                # In production: parse the page for job listings
                return [{'careers_url': url, 'company': company_domain}]

        logger.warning(f"No careers page found for {company_domain}")
        return []

    def get_target_people_profiles(self, company: str) -> List[Dict]:
        """
        Generate target people profiles for a company.
        Uses heuristics and public data to identify likely hiring stakeholders.

        Returns:
            List of potential contact profiles
        """
        logger.info(f"Generating target profiles for {company}...")

        # Target titles to look for
        target_titles = [
            # Recruiters
            "Recruiter",
            "Technical Recruiter",
            "Talent Acquisition Specialist",
            "Talent Acquisition Partner",

            # Hiring Managers
            "Business Analyst Manager",
            "Analytics Manager",
            "Data Analytics Manager",
            "BI Manager",
            "Product Analytics Manager",

            # Directors / VPs
            "Director of Analytics",
            "Director of Business Intelligence",
            "VP of Analytics",
            "VP of Data",
            "Head of Analytics",
            "Head of Business Intelligence",

            # Senior Analysts (potential referrals)
            "Senior Business Analyst",
            "Lead Business Analyst",
            "Principal Business Analyst",
        ]

        profiles = []
        for title in target_titles:
            profiles.append({
                'target_title': title,
                'company': company,
                'search_query': f"{title} at {company}",
                'priority': self._get_title_priority(title)
            })

        return profiles

    def _get_title_priority(self, title: str) -> int:
        """
        Assign priority to titles (1=highest, 5=lowest).
        """
        title_lower = title.lower()

        if 'recruiter' in title_lower:
            return 1  # Highest priority
        elif 'director' in title_lower or 'vp' in title_lower or 'head' in title_lower:
            return 2
        elif 'manager' in title_lower:
            return 3
        elif 'senior' in title_lower or 'lead' in title_lower or 'principal' in title_lower:
            return 4
        else:
            return 5

    def generate_mock_contacts(self, count: int = 10) -> List[Dict]:
        """
        Generate mock contacts for testing purposes.
        In production, replace this with actual data collection.
        """
        logger.info(f"Generating {count} mock contacts...")

        first_names = ['John', 'Sarah', 'Michael', 'Emily', 'David', 'Jennifer',
                       'Robert', 'Lisa', 'James', 'Mary', 'William', 'Patricia']
        last_names = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia',
                      'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Anderson', 'Taylor']

        titles = [
            'Technical Recruiter',
            'Business Analyst Manager',
            'Director of Analytics',
            'Senior Business Analyst',
            'VP of Data',
            'Talent Acquisition Partner',
            'Analytics Manager',
        ]

        companies = random.sample(H1B_SPONSOR_COMPANIES, min(count, len(H1B_SPONSOR_COMPANIES)))

        contacts = []
        for i in range(count):
            first = random.choice(first_names)
            last = random.choice(last_names)
            company = companies[i % len(companies)]
            title = random.choice(titles)

            # Generate probable email
            domain = company.lower().replace(' ', '') + '.com'
            email = f"{first.lower()}.{last.lower()}@{domain}"

            contacts.append({
                'Name': f"{first} {last}",
                'Title': title,
                'Company': company,
                'Location': 'United States',
                'Email': email,
                'LinkedIn URL': f"https://www.linkedin.com/in/{first.lower()}{last.lower()}",
                'Source': 'Mock Data (for testing)'
            })

        logger.info(f"Generated {len(contacts)} mock contacts")
        return contacts

    def search_all_sources(self) -> Dict[str, List]:
        """
        Search all public sources for hiring stakeholders.

        Returns:
            Dictionary with results from each source
        """
        logger.info("Starting comprehensive target search...")

        results = {
            'h1b_sponsors': self.search_h1b_sponsors(),
            'wellfound_jobs': self.search_wellfound(),
            'mock_contacts': self.generate_mock_contacts(20),  # For testing
        }

        total = sum(len(v) for v in results.values())
        logger.info(f"Target search complete. Found {total} total results across all sources.")

        return results


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)

    searcher = TargetSearch()

    # Test H1B sponsors
    sponsors = searcher.search_h1b_sponsors()
    print(f"\nFound {len(sponsors)} H1B sponsors")
    print(sponsors[:5])

    # Test target profiles
    profiles = searcher.get_target_people_profiles("Microsoft")
    print(f"\nGenerated {len(profiles)} target profiles for Microsoft")
    print(profiles[:5])

    # Generate mock contacts
    contacts = searcher.generate_mock_contacts(5)
    print(f"\nGenerated {len(contacts)} mock contacts")
    for contact in contacts:
        print(f"  - {contact['Name']}, {contact['Title']} at {contact['Company']}")
