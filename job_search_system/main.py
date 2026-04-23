#!/usr/bin/env python3
"""
Job Search System - Main Entry Point

Autonomous job search and outreach system using only free, open-source tools
and publicly available data.

Usage:
    python main.py --help                 Show help
    python main.py --analyze-resume       Analyze resume and show summary
    python main.py --collect-contacts     Collect new contacts (one-time)
    python main.py --run-workflow         Run complete workflow once
    python main.py --start-automation     Start daily automation (safe mode)
    python main.py --send-now             Send pending emails immediately (dry run)
    python main.py --send-now --live      Send pending emails (LIVE MODE - REAL EMAILS)
    python main.py --stats                Show database statistics
    python main.py --export-report        Export Excel report
"""

import sys
import argparse
import logging
from logging.config import dictConfig
from pathlib import Path

from config import LOGGING_CONFIG
from resume_analyzer import ResumeAnalyzer
from contact_collector import ContactCollector
from data_manager import DataManager
from email_scheduler import EmailScheduler
from automation import JobSearchAutomation
from optimization_insights import OptimizationInsights

# Setup logging
dictConfig(LOGGING_CONFIG)
logger = logging.getLogger(__name__)


def analyze_resume():
    """Analyze resume and show summary."""
    logger.info("Analyzing resume...")
    analyzer = ResumeAnalyzer()
    analysis = analyzer.analyze_resume()

    print("\n" + "="*80)
    print(analysis['summary'])
    print("\n" + "="*80)
    print("\nELEVATOR PITCH:")
    print(analysis['elevator_pitch'])
    print("\n" + "="*80)
    print("\nTOP TARGET ROLES:")
    for i, role in enumerate(analysis['target_roles'], 1):
        print(f"  {i}. {role}")
    print("\n" + "="*80)
    print(f"\nATS KEYWORDS ({len(analysis['ats_keywords'])} total):")
    print(", ".join(analysis['ats_keywords'][:20]) + "...")
    print("="*80 + "\n")


def collect_contacts(count: int = 20):
    """Collect new contacts."""
    logger.info(f"Collecting {count} new contacts...")
    collector = ContactCollector()
    data_manager = DataManager()

    contacts = collector.collect_new_contacts(count=count)
    added = data_manager.add_contacts_bulk(contacts)

    print(f"\n✓ Collected and added {added} new contacts to database")
    show_stats()


def show_stats():
    """Show database statistics."""
    data_manager = DataManager()
    stats = data_manager.get_statistics()

    print("\n" + "="*80)
    print("DATABASE STATISTICS")
    print("="*80)
    for key, value in stats.items():
        print(f"  {key.replace('_', ' ').title()}: {value}")
    print("="*80 + "\n")


def export_report():
    """Export detailed Excel report."""
    data_manager = DataManager()
    report_path = data_manager.export_report()
    print(f"\n✓ Report exported to: {report_path}\n")


def generate_optimization_insights():
    """Generate resume optimization and job market insights."""
    logger.info("Generating optimization insights...")
    insights = OptimizationInsights()
    report = insights.generate_full_report()

    print(report)

    # Save to file
    from pathlib import Path
    output_path = Path('data/optimization_report.txt')
    output_path.parent.mkdir(exist_ok=True)
    with open(output_path, 'w') as f:
        f.write(report)

    print(f"\n✓ Report saved to: {output_path}\n")


def send_emails_now(live_mode: bool = False):
    """Send pending emails immediately."""
    data_manager = DataManager()
    scheduler = EmailScheduler()

    # Set mode
    scheduler.set_dry_run(not live_mode)

    if live_mode:
        print("\n" + "⚠️ "*20)
        print("WARNING: LIVE MODE - REAL EMAILS WILL BE SENT!")
        print("⚠️ "*20 + "\n")
        response = input("Are you sure you want to send REAL emails? (yes/no): ")
        if response.lower() != 'yes':
            print("Cancelled.")
            return

    # Get pending emails
    pending = data_manager.get_pending_emails(limit=30)

    if pending.empty:
        print("\nNo pending emails to send.\n")
        return

    print(f"\nPreparing to send {len(pending)} emails...")

    # Prepare batch
    emails_to_send = []
    for _, contact in pending.iterrows():
        draft = contact['Email Draft']
        if not draft or 'Subject:' not in draft:
            continue

        parts = draft.split('\n\n', 1)
        subject = parts[0].replace('Subject: ', '')
        body = parts[1] if len(parts) > 1 else ''

        emails_to_send.append({
            'to_email': contact['Email'],
            'subject': subject,
            'body': body
        })

    # Send
    stats = scheduler.send_batch(emails_to_send)

    # Update database if live mode
    if live_mode and stats['sent'] > 0:
        for email_data in emails_to_send[:stats['sent']]:
            data_manager.mark_as_sent(email_data['to_email'])

    print(f"\n{'='*80}")
    print(f"Send complete: {stats['sent']} sent, {stats['failed']} failed, {stats['skipped']} skipped")
    print(f"{'='*80}\n")


def run_workflow():
    """Run complete workflow once."""
    automation = JobSearchAutomation()
    automation.run_manual_workflow()


def start_automation():
    """Start daily automation."""
    automation = JobSearchAutomation()

    print("\n" + "="*80)
    print("STARTING AUTOMATED JOB SEARCH SYSTEM")
    print("="*80)
    print("\nMode: DRY RUN (safe mode - no real emails will be sent)")
    print("\nSchedule:")
    print(f"  • Daily scraping: 9:00 PM")
    print(f"  • Daily sending: 8:30 AM")
    print("\nPress Ctrl+C to stop\n")
    print("="*80 + "\n")

    automation.run_scheduler()


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="Autonomous Job Search and Outreach System",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python main.py --analyze-resume          Analyze your resume
  python main.py --collect-contacts 50     Collect 50 new contacts
  python main.py --run-workflow            Run complete workflow once
  python main.py --start-automation        Start daily automation (safe mode)
  python main.py --send-now                Send emails (dry run)
  python main.py --send-now --live         Send emails (LIVE - real emails!)
  python main.py --stats                   Show statistics
  python main.py --export-report           Export Excel report
        """
    )

    parser.add_argument('--analyze-resume', action='store_true',
                        help='Analyze resume and show summary')
    parser.add_argument('--collect-contacts', type=int, nargs='?', const=20,
                        help='Collect new contacts (default: 20)')
    parser.add_argument('--run-workflow', action='store_true',
                        help='Run complete workflow once')
    parser.add_argument('--start-automation', action='store_true',
                        help='Start daily automation')
    parser.add_argument('--send-now', action='store_true',
                        help='Send pending emails immediately')
    parser.add_argument('--live', action='store_true',
                        help='Enable live mode (send real emails)')
    parser.add_argument('--stats', action='store_true',
                        help='Show database statistics')
    parser.add_argument('--export-report', action='store_true',
                        help='Export detailed Excel report')
    parser.add_argument('--optimize', action='store_true',
                        help='Generate optimization insights and recommendations')

    args = parser.parse_args()

    # Execute commands
    if args.analyze_resume:
        analyze_resume()
    elif args.collect_contacts is not None:
        collect_contacts(count=args.collect_contacts)
    elif args.run_workflow:
        run_workflow()
    elif args.start_automation:
        start_automation()
    elif args.send_now:
        send_emails_now(live_mode=args.live)
    elif args.stats:
        show_stats()
    elif args.export_report:
        export_report()
    elif args.optimize:
        generate_optimization_insights()
    else:
        parser.print_help()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nInterrupted by user. Exiting...\n")
        sys.exit(0)
    except Exception as e:
        logger.error(f"Fatal error: {e}", exc_info=True)
        sys.exit(1)
