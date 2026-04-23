"""
Automation - Daily automation orchestrator.
Schedules and runs the job search workflow.
"""
import schedule
import time
import logging
from datetime import datetime
from pathlib import Path

from resume_analyzer import ResumeAnalyzer
from contact_collector import ContactCollector
from data_manager import DataManager
from email_scheduler import EmailScheduler
from config import SEND_TIME, SCRAPE_TIME, MAX_EMAILS_PER_DAY

logger = logging.getLogger(__name__)


class JobSearchAutomation:
    """Orchestrates the automated job search workflow."""

    def __init__(self):
        self.resume_analyzer = ResumeAnalyzer()
        self.collector = ContactCollector()
        self.data_manager = DataManager()
        self.email_scheduler = EmailScheduler()

        # Safety: dry run by default
        self.email_scheduler.set_dry_run(True)

    def daily_scraping_task(self):
        """
        Daily task (9:00 PM): Scrape new contacts and prepare emails.
        """
        logger.info("="*80)
        logger.info("DAILY SCRAPING TASK STARTED")
        logger.info(f"Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        logger.info("="*80)

        try:
            # Step 1: Collect new contacts
            logger.info("Step 1: Collecting new contacts...")
            new_contacts = self.collector.collect_new_contacts(count=30)

            # Step 2: Add to database (deduplication handled automatically)
            logger.info("Step 2: Adding contacts to database...")
            added_count = self.data_manager.add_contacts_bulk(new_contacts)

            # Step 3: Mark as scheduled
            if added_count > 0:
                new_emails = [c['Email'] for c in new_contacts if c.get('Email')]
                self.data_manager.mark_as_scheduled(new_emails[:MAX_EMAILS_PER_DAY])

            # Step 4: Generate report
            stats = self.data_manager.get_statistics()
            logger.info("="*80)
            logger.info("DAILY SCRAPING TASK COMPLETED")
            logger.info(f"New contacts added: {added_count}")
            logger.info(f"Database statistics: {stats}")
            logger.info("="*80)

            return {
                'success': True,
                'new_contacts': added_count,
                'stats': stats
            }

        except Exception as e:
            logger.error(f"Error in daily scraping task: {e}", exc_info=True)
            return {'success': False, 'error': str(e)}

    def daily_sending_task(self):
        """
        Daily task (8:30 AM): Send scheduled outreach emails.
        """
        logger.info("="*80)
        logger.info("DAILY SENDING TASK STARTED")
        logger.info(f"Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        logger.info("="*80)

        try:
            # Step 1: Get pending emails
            logger.info("Step 1: Fetching pending emails...")
            pending = self.data_manager.get_pending_emails(limit=MAX_EMAILS_PER_DAY)

            if pending.empty:
                logger.info("No pending emails to send.")
                return {'success': True, 'sent': 0}

            # Step 2: Prepare email batch
            logger.info(f"Step 2: Preparing {len(pending)} emails for sending...")
            emails_to_send = []

            for _, contact in pending.iterrows():
                # Parse email draft
                draft = contact['Email Draft']
                if not draft or 'Subject:' not in draft:
                    logger.warning(f"Invalid email draft for {contact['Email']}")
                    continue

                # Extract subject and body
                parts = draft.split('\n\n', 1)
                subject = parts[0].replace('Subject: ', '')
                body = parts[1] if len(parts) > 1 else ''

                emails_to_send.append({
                    'to_email': contact['Email'],
                    'subject': subject,
                    'body': body,
                    'contact_name': contact['Name']
                })

            # Step 3: Send emails
            logger.info(f"Step 3: Sending {len(emails_to_send)} emails...")
            send_stats = self.email_scheduler.send_batch(emails_to_send)

            # Step 4: Update database
            logger.info("Step 4: Updating database...")
            for email_data in emails_to_send:
                self.data_manager.mark_as_sent(email_data['to_email'])

            # Step 5: Reset daily counter (for next day)
            self.email_scheduler.reset_daily_counter()

            logger.info("="*80)
            logger.info("DAILY SENDING TASK COMPLETED")
            logger.info(f"Send statistics: {send_stats}")
            logger.info("="*80)

            return {
                'success': True,
                'sent': send_stats['sent'],
                'failed': send_stats['failed'],
                'skipped': send_stats['skipped']
            }

        except Exception as e:
            logger.error(f"Error in daily sending task: {e}", exc_info=True)
            return {'success': False, 'error': str(e)}

    def run_manual_workflow(self):
        """
        Run the complete workflow manually (for testing).
        """
        logger.info("\n" + "="*80)
        logger.info("RUNNING MANUAL WORKFLOW")
        logger.info("="*80 + "\n")

        # Step 1: Resume Analysis
        logger.info("Step 1: Analyzing resume...")
        analysis = self.resume_analyzer.analyze_resume()
        print("\n" + analysis['summary'])

        # Step 2: Collect contacts
        logger.info("\nStep 2: Collecting contacts...")
        scrape_result = self.daily_scraping_task()
        print(f"\nCollected {scrape_result.get('new_contacts', 0)} new contacts")

        # Step 3: Show statistics
        stats = self.data_manager.get_statistics()
        print(f"\nDatabase Statistics:")
        for key, value in stats.items():
            print(f"  {key}: {value}")

        # Step 4: Export report
        logger.info("\nStep 3: Exporting report...")
        report_path = self.data_manager.export_report()
        print(f"\nReport exported to: {report_path}")

        logger.info("\n" + "="*80)
        logger.info("MANUAL WORKFLOW COMPLETED")
        logger.info("="*80 + "\n")

    def setup_schedule(self):
        """
        Setup daily scheduled tasks.
        """
        logger.info("Setting up daily schedule...")

        # Schedule scraping at 9:00 PM
        schedule.every().day.at(SCRAPE_TIME).do(self.daily_scraping_task)
        logger.info(f"Scheduled scraping task for {SCRAPE_TIME} daily")

        # Schedule sending at 8:30 AM
        schedule.every().day.at(SEND_TIME).do(self.daily_sending_task)
        logger.info(f"Scheduled sending task for {SEND_TIME} daily")

        logger.info("Schedule setup complete")

    def run_scheduler(self):
        """
        Run the scheduler (blocking).
        This should be run as a background service.
        """
        self.setup_schedule()

        logger.info("="*80)
        logger.info("JOB SEARCH AUTOMATION STARTED")
        logger.info(f"Scraping time: {SCRAPE_TIME}")
        logger.info(f"Sending time: {SEND_TIME}")
        logger.info("Press Ctrl+C to stop")
        logger.info("="*80)

        try:
            while True:
                schedule.run_pending()
                time.sleep(60)  # Check every minute
        except KeyboardInterrupt:
            logger.info("\nScheduler stopped by user")

    def enable_email_sending(self, enable: bool = True):
        """Enable or disable actual email sending."""
        self.email_scheduler.set_dry_run(not enable)
        if enable:
            logger.warning("⚠️  EMAIL SENDING ENABLED - Emails will be sent for real!")
        else:
            logger.info("Email sending disabled (dry run mode)")


if __name__ == "__main__":
    import sys
    from logging.config import dictConfig
    from config import LOGGING_CONFIG

    # Setup logging
    dictConfig(LOGGING_CONFIG)

    automation = JobSearchAutomation()

    if len(sys.argv) > 1 and sys.argv[1] == '--run-now':
        # Run workflow immediately (for testing)
        automation.run_manual_workflow()
    elif len(sys.argv) > 1 and sys.argv[1] == '--enable-sending':
        # Enable real email sending and run scheduler
        automation.enable_email_sending(True)
        automation.run_scheduler()
    else:
        # Run scheduler in dry-run mode (safe)
        automation.run_scheduler()
