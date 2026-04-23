"""
Data Manager - Handle CSV storage and deduplication.
"""
import pandas as pd
import logging
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional
from config import CONTACTS_CSV

logger = logging.getLogger(__name__)


class DataManager:
    """Manages contact data storage and deduplication."""

    def __init__(self, csv_path: Path = CONTACTS_CSV):
        self.csv_path = csv_path
        self.df = self._load_or_create_csv()

    def _load_or_create_csv(self) -> pd.DataFrame:
        """Load existing CSV or create new one."""
        if self.csv_path.exists():
            logger.info(f"Loading existing contacts from {self.csv_path}")
            return pd.read_csv(self.csv_path)
        else:
            logger.info("Creating new contacts database")
            columns = [
                'Name',
                'Title',
                'Company',
                'Location',
                'Email',
                'Email Status',
                'LinkedIn URL',
                'Relevance Score',
                'Email Draft',
                'Outreach Status',
                'Last Updated',
                'Date Added',
                'Notes'
            ]
            return pd.DataFrame(columns=columns)

    def save(self):
        """Save dataframe to CSV."""
        self.df.to_csv(self.csv_path, index=False)
        logger.info(f"Saved {len(self.df)} contacts to {self.csv_path}")

    def is_duplicate(self, email: Optional[str] = None, linkedin: Optional[str] = None) -> bool:
        """Check if contact already exists."""
        if email and not self.df.empty:
            if email in self.df['Email'].values:
                logger.debug(f"Duplicate found: Email {email}")
                return True

        if linkedin and not self.df.empty:
            if linkedin in self.df['LinkedIn URL'].values:
                logger.debug(f"Duplicate found: LinkedIn {linkedin}")
                return True

        return False

    def add_contact(self, contact: Dict) -> bool:
        """Add new contact if not duplicate."""
        if self.is_duplicate(contact.get('Email'), contact.get('LinkedIn URL')):
            logger.warning(f"Skipping duplicate contact: {contact.get('Name')}")
            return False

        # Add metadata
        contact['Date Added'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        contact['Last Updated'] = contact['Date Added']
        contact['Outreach Status'] = contact.get('Outreach Status', 'Pending')

        # Append to dataframe
        self.df = pd.concat([self.df, pd.DataFrame([contact])], ignore_index=True)
        logger.info(f"Added new contact: {contact['Name']} at {contact['Company']}")
        return True

    def add_contacts_bulk(self, contacts: List[Dict]) -> int:
        """Add multiple contacts, skipping duplicates."""
        added_count = 0
        for contact in contacts:
            if self.add_contact(contact):
                added_count += 1

        self.save()
        logger.info(f"Added {added_count}/{len(contacts)} new contacts")
        return added_count

    def get_pending_emails(self, limit: Optional[int] = None) -> pd.DataFrame:
        """Get contacts with Pending or Scheduled status."""
        pending = self.df[
            (self.df['Outreach Status'] == 'Pending') |
            (self.df['Outreach Status'] == 'Scheduled')
        ]

        if limit:
            return pending.head(limit)
        return pending

    def update_status(self, email: str, status: str):
        """Update outreach status for a contact."""
        mask = self.df['Email'] == email
        if mask.any():
            self.df.loc[mask, 'Outreach Status'] = status
            self.df.loc[mask, 'Last Updated'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            logger.info(f"Updated {email} status to {status}")

    def mark_as_scheduled(self, emails: List[str]):
        """Mark contacts as scheduled for sending."""
        for email in emails:
            self.update_status(email, 'Scheduled')
        self.save()

    def mark_as_sent(self, email: str):
        """Mark contact as sent."""
        self.update_status(email, 'Sent')
        self.save()

    def get_statistics(self) -> Dict:
        """Get database statistics."""
        if self.df.empty:
            return {
                'total_contacts': 0,
                'pending': 0,
                'scheduled': 0,
                'sent': 0,
                'valid_emails': 0,
                'risky_emails': 0
            }

        return {
            'total_contacts': len(self.df),
            'pending': len(self.df[self.df['Outreach Status'] == 'Pending']),
            'scheduled': len(self.df[self.df['Outreach Status'] == 'Scheduled']),
            'sent': len(self.df[self.df['Outreach Status'] == 'Sent']),
            'valid_emails': len(self.df[self.df['Email Status'] == 'VALID']),
            'risky_emails': len(self.df[self.df['Email Status'] == 'RISKY']),
            'not_found': len(self.df[self.df['Email Status'] == 'NOT FOUND'])
        }

    def export_report(self, output_path: Optional[Path] = None) -> Path:
        """Export detailed report to Excel."""
        if output_path is None:
            output_path = self.csv_path.parent / f"contacts_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"

        with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
            # Main contacts sheet
            self.df.to_excel(writer, sheet_name='All Contacts', index=False)

            # Statistics sheet
            stats = pd.DataFrame([self.get_statistics()])
            stats.to_excel(writer, sheet_name='Statistics', index=False)

            # Pending outreach
            pending = self.get_pending_emails()
            pending.to_excel(writer, sheet_name='Pending Outreach', index=False)

        logger.info(f"Exported report to {output_path}")
        return output_path


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)

    # Test
    dm = DataManager()
    print(f"\nStatistics: {dm.get_statistics()}")
