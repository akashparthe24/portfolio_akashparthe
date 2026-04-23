# Autonomous Job Search & Outreach System

An automated, ethical job search system that finds relevant hiring stakeholders, generates personalized outreach emails, and manages the entire process using **only free, open-source tools and publicly available data**.

## 🎯 Features

### ✅ **Fully Automated Workflow**
- **Resume Analysis**: Extracts skills, experience, and generates candidate summary
- **Target Search**: Finds H1B/OPT-friendly companies and hiring stakeholders
- **Contact Collection**: Gathers publicly available contact information
- **Email Verification**: Validates emails using DNS/MX record checks (safe, non-invasive)
- **Personalized Emails**: Generates unique, human-like outreach emails for each contact
- **Smart Scheduling**: Sends emails at optimal times with rate limiting
- **Deduplication**: Automatically skips duplicate contacts
- **Excel Reporting**: Exports detailed reports with all contacts and statistics

### ✅ **Ethical & Safe**
- Uses **only publicly available data** (no login-required scraping)
- **No spam**: Rate-limited sending (max 30/day, 15-second delays)
- **Dry-run mode** by default (no accidental sends)
- **SMTP verification** without actual email delivery
- Respects robots.txt and rate limits

### ✅ **H1B/OPT Focused**
- Targets companies with proven H1B sponsorship history
- Mentions visa status clearly in outreach
- Focuses on Business Analyst roles suitable for international candidates

---

## 📋 What It Does

### STEP 1: Resume Analysis
Extracts from your portfolio:
- Years of experience (3+)
- Skills (SQL, Python, Power BI, Tableau, Azure, etc.)
- Education (MSBA at Carnegie Mellon)
- Key achievements (40% cost reduction, $5M+ visibility, etc.)
- Generates elevator pitch and ATS keywords

### STEP 2: Target Search
Searches publicly available sources:
- H1B sponsor databases (Amazon, Microsoft, Google, etc.)
- Wellfound (AngelList) startup jobs
- Public company career pages
- Identifies recruiters, hiring managers, directors, and senior analysts

### STEP 3: Contact Data Collection
For each person, collects:
- Full Name, Job Title, Company
- LinkedIn Profile (public)
- Email (generated using common patterns: `firstname.lastname@company.com`)

### STEP 4: Email Verification
Validates emails using:
- Format validation
- DNS MX record checks
- SMTP ping (non-intrusive)
- Classifies as: **VALID**, **RISKY**, or **NOT FOUND**

### STEP 5: Data Storage
Stores everything in CSV/Excel:
- Name, Title, Company, Location
- Email, Email Status, LinkedIn URL
- Relevance Score (1-10)
- Email Draft
- Outreach Status (Pending/Scheduled/Sent)

### STEP 6: Email Generation
Creates personalized emails:
- Uses contact's name, title, company
- Mentions relevant experience (FinOps, Azure, Power BI, etc.)
- Includes visa status
- Professional, non-spammy tone
- Unique for each recipient

### STEP 7: Email Scheduling
Sends emails safely:
- Scheduled for 8:30 AM local time
- One-by-one with 15-second delays
- Max 30 emails per day
- Updates status after sending

### STEP 8: Daily Automation
**9:00 PM**: Scrape new contacts, generate emails, update database  
**8:30 AM**: Send scheduled emails, update statuses

### STEP 9: Deduplication
Before adding new contacts:
- Checks if email or LinkedIn already exists
- Skips duplicates automatically

### STEP 10: Insights
Provides:
- Missing skills analysis
- ATS optimization keywords
- Top H1B sponsor companies for Business Analysts

---

## 🚀 Quick Start

### 1. Installation

```bash
cd job_search_system

# Install dependencies
pip install -r requirements.txt

# Copy environment template
cp .env.example .env
```

### 2. Configuration

Edit `.env` file:

```env
# Email Configuration (Gmail recommended)
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
EMAIL_ADDRESS=your_email@gmail.com
EMAIL_PASSWORD=your_app_specific_password  # Generate at https://myaccount.google.com/apppasswords

# Rate Limiting
MAX_EMAILS_PER_DAY=30
EMAIL_DELAY_SECONDS=15

# Candidate Info
CANDIDATE_NAME=Akash Vilas Parthe
CANDIDATE_EMAIL=aparthe@tepper.cmu.edu
CANDIDATE_LINKEDIN=https://www.linkedin.com/in/akashparthe/
VISA_STATUS=OPT/H1B sponsorship required
```

**Note**: For Gmail, you need to:
1. Enable 2-factor authentication
2. Generate an "App Password" (not your regular Gmail password)
3. Use that app password in the `.env` file

### 3. Test the System

```bash
# Analyze your resume
python main.py --analyze-resume

# Collect 10 test contacts
python main.py --collect-contacts 10

# Show statistics
python main.py --stats

# Generate and view email drafts (dry run - no real sending)
python main.py --send-now

# Export Excel report
python main.py --export-report
```

### 4. Run Complete Workflow

```bash
# Run complete workflow once (safe mode)
python main.py --run-workflow
```

This will:
1. Analyze your resume
2. Collect new contacts
3. Verify emails
4. Generate personalized emails
5. Store everything in CSV
6. Export Excel report

### 5. Start Daily Automation

```bash
# Start automated scheduler (dry run mode - safe)
python main.py --start-automation
```

This runs in the background and:
- **9:00 PM daily**: Scrapes new contacts, generates emails
- **8:30 AM daily**: Sends scheduled emails (dry run by default)

Press `Ctrl+C` to stop.

---

## 📧 Email Sending Modes

### **Dry Run Mode** (Default - SAFE)
```bash
python main.py --send-now
```
- Shows what emails would be sent
- **No actual emails sent**
- Safe for testing

### **Live Mode** (Send Real Emails)
```bash
python main.py --send-now --live
```
- **Sends REAL emails**
- Asks for confirmation
- Updates database
- Use only when ready!

⚠️ **WARNING**: `--live` mode sends actual emails. Make sure:
- Your `.env` is configured correctly
- Email drafts look good (check with dry run first)
- You're ready to start outreach

---

## 📊 Database Structure

**Contacts CSV** (`data/contacts.csv`):

| Column | Description |
|--------|-------------|
| Name | Full name |
| Title | Job title |
| Company | Company name |
| Location | Location (United States) |
| Email | Email address |
| Email Status | VALID / RISKY / NOT FOUND |
| LinkedIn URL | Public LinkedIn profile URL |
| Relevance Score | 1-10 (10 = highest) |
| Email Draft | Full email subject + body |
| Outreach Status | Pending / Scheduled / Sent |
| Last Updated | Last update timestamp |
| Date Added | When contact was added |
| Notes | Additional notes |

---

## 🎯 Target Roles

The system searches for these roles:
- Business Analyst
- Senior Business Analyst
- Product Analyst
- Data Analyst
- Analytics Consultant
- Business Intelligence Analyst
- BI Developer
- Analytics Engineer

---

## 🏢 H1B Sponsor Companies

Focuses on companies with proven H1B sponsorship:
- **Big Tech**: Amazon, Microsoft, Google, Meta, Apple
- **Consulting**: Accenture, Deloitte, PwC, EY, KPMG
- **Financial**: JPMorgan, Goldman Sachs, Citi, Capital One
- **Tech Unicorns**: Stripe, Snowflake, Databricks, Airbnb, Uber
- And 50+ more...

---

## 📈 Example Workflow Output

```
====================================================
CANDIDATE PROFILE SUMMARY
====================================================

Name: Akash Vilas Parthe
Title: Business Analyst | Product Analyst | Analytics Consultant
Experience: 3+ years

TOP SKILLS:
Business Analysis: Requirements Gathering, BRD/FRD, Stakeholder Management...
Analytics: SQL, Python, Power BI, Tableau, Data Analysis...
Technical: ETL, Data Warehousing, PySpark, Azure, Databricks...

KEY ACHIEVEMENTS:
- 40% cost reduction through process improvements
- 30% faster delivery cycles
- $5M+ executive visibility into cloud spend

====================================================

Step 1: Collecting contacts...
✓ Collected 20 new contacts

Step 2: Verifying emails...
✓ 15 VALID, 3 RISKY, 2 NOT FOUND

Step 3: Generating personalized emails...
✓ Generated 18 unique emails

Step 4: Saving to database...
✓ Added 18 new contacts (2 duplicates skipped)

DATABASE STATISTICS:
  Total Contacts: 48
  Pending: 18
  Sent: 30
  Valid Emails: 40

✓ Report exported to: data/contacts_report_20260423_093045.xlsx
```

---

## 🛡️ Safety & Ethics

### ✅ What This System Does
- Uses **only public data** (no scraping behind login walls)
- Sends **personalized, relevant** emails (not spam)
- **Rate limits** sending (30/day max, 15-second delays)
- Includes **clear unsubscribe language** in emails
- Verifies emails **without sending** (DNS/MX checks only)
- **Dry run by default** (no accidental sends)

### ❌ What This System Does NOT Do
- ❌ Scrape LinkedIn profiles behind login
- ❌ Bypass CAPTCHAs or login walls
- ❌ Send mass spam emails
- ❌ Use fake or misleading information
- ❌ Violate any website's Terms of Service
- ❌ Send emails without explicit user command

---

## 🔧 Customization

### Modify Email Templates
Edit `email_generator.py` → `_get_body()` method

### Add New Job Sources
Edit `target_search.py` → `search_all_sources()` method

### Adjust Relevance Scoring
Edit `contact_collector.py` → `calculate_relevance_score()` method

### Change Scheduling Times
Edit `.env`:
```env
SEND_TIME=08:30  # 8:30 AM
SCRAPE_TIME=21:00  # 9:00 PM
```

---

## 📂 Project Structure

```
job_search_system/
├── config.py                 # Configuration and settings
├── resume_analyzer.py        # Resume extraction and analysis
├── target_search.py          # Search for hiring stakeholders
├── contact_collector.py      # Collect and enrich contacts
├── email_verifier.py         # Verify email addresses
├── email_generator.py        # Generate personalized emails
├── email_scheduler.py        # Schedule and send emails
├── data_manager.py           # CSV storage and deduplication
├── automation.py             # Daily automation orchestrator
├── main.py                   # Main entry point
├── requirements.txt          # Python dependencies
├── .env.example              # Environment template
├── README.md                 # This file
├── data/
│   └── contacts.csv          # Contact database
├── logs/
│   └── job_search.log        # Application logs
└── templates/
    └── (future email templates)
```

---

## 📝 Usage Examples

### Collect 50 Contacts
```bash
python main.py --collect-contacts 50
```

### Analyze Resume
```bash
python main.py --analyze-resume
```

### Send Emails (Dry Run)
```bash
python main.py --send-now
```

### Send Emails (Live)
```bash
python main.py --send-now --live
```

### Export Report
```bash
python main.py --export-report
```

### View Statistics
```bash
python main.py --stats
```

---

## 🐛 Troubleshooting

### "SMTPAuthenticationError"
- Make sure you're using an **App Password**, not your regular Gmail password
- Enable 2FA first, then generate App Password at: https://myaccount.google.com/apppasswords

### "No MX records found"
- This is normal for some email addresses
- The system marks them as "NOT FOUND" and skips them

### "Daily limit reached"
- Default is 30 emails/day to avoid spam flags
- Adjust in `.env`: `MAX_EMAILS_PER_DAY=50`

### "No pending emails"
- Run `python main.py --collect-contacts 20` first
- Check status: `python main.py --stats`

---

## 🚀 Next Steps

1. ✅ **Test in dry-run mode** to verify everything works
2. ✅ **Review generated emails** to ensure quality
3. ✅ **Adjust templates** if needed
4. ✅ **Export Excel report** and review contacts
5. ✅ **Start with small batch** (5-10 emails) in live mode
6. ✅ **Monitor responses** and adjust approach
7. ✅ **Scale up gradually** to 30/day
8. ✅ **Enable automation** for daily operation

---

## 📄 License

MIT License - Free to use, modify, and distribute.

---

## 🙏 Acknowledgments

Built for **Akash Vilas Parthe**  
MSBA Candidate, Carnegie Mellon University  
Job Search: Business Analyst | Product Analyst | Data Analyst  
Status: Seeking H1B/OPT-friendly opportunities

---

## 💡 Tips for Success

1. **Personalize**: Review and customize email templates for better response rates
2. **Quality > Quantity**: 10 well-targeted emails > 100 generic ones
3. **Follow Up**: Track responses and follow up after 1 week
4. **A/B Test**: Try different subject lines and email formats
5. **Network**: Connect on LinkedIn before/after emailing
6. **Timing**: Best times to send: Tuesday-Thursday, 8-10 AM
7. **Metrics**: Track open rates, response rates, and adjust

---

**Happy Job Hunting! 🎯**
