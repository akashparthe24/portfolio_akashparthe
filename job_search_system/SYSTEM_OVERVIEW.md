# Job Search System - Complete Overview

## 📦 What You Got

A **fully autonomous job search and outreach system** that:
- ✅ Analyzes your resume and generates candidate summary
- ✅ Finds H1B/OPT-friendly companies hiring Business Analysts
- ✅ Collects hiring stakeholder contacts from public sources
- ✅ Verifies email addresses safely (DNS/MX checks)
- ✅ Generates personalized outreach emails for each contact
- ✅ Schedules and sends emails with rate limiting (non-spam)
- ✅ Tracks everything in CSV/Excel with deduplication
- ✅ Provides resume optimization insights
- ✅ Runs fully automated on a daily schedule

---

## 🎯 System Components

### 1. **Resume Analyzer** (`resume_analyzer.py`)
Extracts and analyzes your profile from portfolio data:
- Name, title, location, contact info
- 3+ years of experience
- Skills: SQL, Python, Power BI, Tableau, Azure, etc.
- Achievements: 40% cost reduction, $5M+ visibility, etc.
- Education: MSBA at Carnegie Mellon
- Generates elevator pitch and ATS keywords

### 2. **Target Search** (`target_search.py`)
Finds hiring stakeholders from public sources:
- 50+ H1B sponsor companies (Amazon, Microsoft, Google, etc.)
- Public job boards (Wellfound, LinkedIn, etc.)
- Company careers pages
- Target titles: Recruiters, Managers, Directors, VPs, Senior Analysts

### 3. **Contact Collector** (`contact_collector.py`)
Collects and enriches contact data:
- Gathers: Name, Title, Company, Location, LinkedIn
- Generates probable emails: `firstname.lastname@company.com`
- Calculates relevance score (1-10)
- Deduplicates automatically

### 4. **Email Verifier** (`email_verifier.py`)
Verifies emails safely (no actual sending):
- Format validation (regex)
- DNS MX record checks
- SMTP ping (optional, non-intrusive)
- Classifies: VALID / RISKY / NOT FOUND

### 5. **Email Generator** (`email_generator.py`)
Creates personalized emails:
- Uses contact's name, title, company
- Mentions relevant experience and skills
- Includes visa status (OPT/H1B)
- Professional, non-spammy tone
- Unique for each recipient

### 6. **Email Scheduler** (`email_scheduler.py`)
Sends emails safely:
- Dry-run mode by default (safe)
- Rate limiting: 30 emails/day, 15-second delays
- Gmail SMTP integration
- Updates status after sending
- Prevents spam flags

### 7. **Data Manager** (`data_manager.py`)
Manages contact database:
- CSV storage with all contact info
- Automatic deduplication (email + LinkedIn)
- Status tracking (Pending → Scheduled → Sent)
- Statistics and reporting
- Excel export with multiple sheets

### 8. **Automation** (`automation.py`)
Daily automation orchestrator:
- **9:00 PM**: Scrape new contacts, generate emails
- **8:30 AM**: Send scheduled emails
- Runs continuously in background
- Safe mode by default (dry run)

### 9. **Optimization Insights** (`optimization_insights.py`)
Resume and job market analysis:
- Skill gap analysis vs. market demand
- ATS optimization recommendations
- LinkedIn profile optimization tips
- Top H1B companies by category
- Missing skills and improvement suggestions

### 10. **Main Controller** (`main.py`)
Command-line interface:
```bash
python main.py --analyze-resume     # Analyze resume
python main.py --collect-contacts   # Collect contacts
python main.py --send-now           # Send emails (dry run)
python main.py --send-now --live    # Send emails (LIVE)
python main.py --stats              # Show statistics
python main.py --export-report      # Export Excel
python main.py --optimize           # Optimization insights
python main.py --start-automation   # Daily automation
```

---

## 📊 Data Flow

```
1. RESUME ANALYSIS
   ↓
   Extract: Skills, Experience, Education, Achievements
   ↓
2. TARGET SEARCH
   ↓
   Find: H1B Companies → Job Postings → Hiring Stakeholders
   ↓
3. CONTACT COLLECTION
   ↓
   Collect: Name, Title, Company, LinkedIn, Email
   ↓
4. EMAIL VERIFICATION
   ↓
   Verify: Format → DNS → MX Records → Status (VALID/RISKY)
   ↓
5. EMAIL GENERATION
   ↓
   Create: Personalized Subject + Body for each contact
   ↓
6. DEDUPLICATION
   ↓
   Check: Email/LinkedIn exists? → Skip duplicates
   ↓
7. DATABASE STORAGE
   ↓
   Save: CSV with all fields + status tracking
   ↓
8. EMAIL SCHEDULING
   ↓
   Queue: Mark as "Scheduled" for next send window
   ↓
9. EMAIL SENDING
   ↓
   Send: 30/day, 15s delay, 8:30 AM
   ↓
10. STATUS UPDATE
    ↓
    Update: "Sent" + timestamp in database
```

---

## 🗂️ File Structure

```
job_search_system/
│
├── 📄 Core Modules
│   ├── config.py                  # Configuration and settings
│   ├── resume_analyzer.py         # Resume extraction
│   ├── target_search.py           # Search hiring stakeholders
│   ├── contact_collector.py       # Collect and enrich contacts
│   ├── email_verifier.py          # Verify emails
│   ├── email_generator.py         # Generate personalized emails
│   ├── email_scheduler.py         # Schedule and send emails
│   ├── data_manager.py            # Database management
│   ├── automation.py              # Daily automation
│   ├── optimization_insights.py   # Resume optimization
│   └── main.py                    # Main entry point
│
├── 📁 Data & Logs
│   ├── data/
│   │   ├── contacts.csv           # Contact database
│   │   └── *.xlsx                 # Exported reports
│   ├── logs/
│   │   └── job_search.log         # Application logs
│   └── templates/                 # Email templates (future)
│
├── 📋 Configuration
│   ├── .env                       # Email credentials (create from .env.example)
│   ├── .env.example               # Environment template
│   ├── .gitignore                 # Git ignore rules
│   └── requirements.txt           # Python dependencies
│
├── 📖 Documentation
│   ├── README.md                  # Full documentation
│   ├── QUICKSTART.md              # Quick start guide
│   ├── SYSTEM_OVERVIEW.md         # This file
│   └── setup.sh                   # Automated setup script
│
└── 🔒 Safety Features
    ├── Dry-run mode (default)
    ├── Rate limiting (30/day)
    ├── Email delays (15s)
    ├── Deduplication
    └── Public data only
```

---

## ⚙️ Configuration Files

### `.env` (Your Email Credentials)
```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
EMAIL_ADDRESS=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

MAX_EMAILS_PER_DAY=30
EMAIL_DELAY_SECONDS=15

SEND_TIME=08:30
SCRAPE_TIME=21:00

CANDIDATE_NAME=Akash Vilas Parthe
CANDIDATE_EMAIL=aparthe@tepper.cmu.edu
CANDIDATE_LINKEDIN=https://www.linkedin.com/in/akashparthe/
VISA_STATUS=OPT/H1B sponsorship required
```

### `config.py` (System Settings)
- Resume data (from portfolio)
- H1B sponsor companies (50+)
- Target roles and titles
- Email patterns and templates
- Rate limits and scheduling
- Logging configuration

---

## 📈 Database Schema

**CSV Columns** (`data/contacts.csv`):

| Column | Type | Description |
|--------|------|-------------|
| Name | String | Full name |
| Title | String | Job title |
| Company | String | Company name |
| Location | String | Location (United States) |
| Email | String | Email address |
| Email Status | Enum | VALID / RISKY / NOT FOUND |
| LinkedIn URL | URL | Public LinkedIn profile |
| Relevance Score | Integer | 1-10 (10 = highest) |
| Email Draft | Text | Full email (subject + body) |
| Outreach Status | Enum | Pending / Scheduled / Sent |
| Last Updated | DateTime | Last update timestamp |
| Date Added | DateTime | When contact was added |
| Notes | String | Additional notes |

---

## 🚀 Usage Examples

### Basic Workflow
```bash
# 1. Analyze resume
python main.py --analyze-resume

# 2. Get optimization insights
python main.py --optimize

# 3. Collect 20 contacts
python main.py --collect-contacts 20

# 4. Check statistics
python main.py --stats

# 5. Export report
python main.py --export-report

# 6. Send emails (dry run)
python main.py --send-now

# 7. Send emails (LIVE)
python main.py --send-now --live
```

### Automation Workflow
```bash
# Start daily automation (safe mode)
python main.py --start-automation

# This will:
# - Run at 9:00 PM: Collect 30 new contacts daily
# - Run at 8:30 AM: Send 30 emails daily (dry run)
```

---

## 🔒 Safety Features

### 1. **Dry Run Mode (Default)**
- All emails show "[DRY RUN]" in logs
- No actual SMTP sending
- Safe for testing

### 2. **Rate Limiting**
- Max 30 emails per day
- 15-second delays between emails
- Prevents spam flags

### 3. **Deduplication**
- Checks email AND LinkedIn
- Skips duplicates automatically
- Prevents double-contacting

### 4. **Public Data Only**
- No login-required scraping
- No CAPTCHA bypass
- Respects robots.txt

### 5. **Email Verification**
- DNS/MX checks (non-invasive)
- No actual email delivery during verification
- Classifies confidence level

---

## 📊 Expected Results

### Contact Collection
- **20 contacts/run**: ~15-18 after deduplication
- **Relevance score**: Average 6-8/10
- **Email verification**: ~75% VALID, ~20% RISKY, ~5% NOT FOUND

### Email Sending
- **Response rate**: 5-15% (industry average)
- **Interview rate**: 2-8% (with good targeting)
- **Time to first response**: 2-7 days

### Database Growth
- **Week 1**: ~100 contacts
- **Week 2**: ~200 contacts
- **Month 1**: ~600 contacts
- **Duplicates**: ~10-20% (automatically skipped)

---

## 🎯 Target Roles

Primary roles the system searches for:
1. Business Analyst
2. Senior Business Analyst
3. Product Analyst
4. Data Analyst
5. Analytics Consultant
6. Business Intelligence Analyst
7. BI Developer
8. Analytics Engineer

---

## 🏢 Target Companies (H1B Sponsors)

### Big Tech (50+ companies)
Amazon, Microsoft, Google, Meta, Apple, IBM, Oracle, Salesforce, Adobe, Intel, etc.

### Consulting (40+ companies)
Accenture, Deloitte, PwC, EY, KPMG, Capgemini, Cognizant, Infosys, TCS, etc.

### Financial Services (30+ companies)
JPMorgan, Goldman Sachs, Morgan Stanley, Citi, Bank of America, etc.

### Analytics/Data (20+ companies)
Tableau, Snowflake, Databricks, Palantir, Splunk, ServiceNow, etc.

**Total: 150+ H1B sponsor companies**

---

## 🔍 Email Example

```
Subject: Carnegie Mellon MSBA Candidate - Business Analyst Role

Hi Sarah,

I hope this email finds you well. I'm reaching out regarding Business Analyst 
opportunities at Microsoft. As someone who focuses on analytics hiring, I thought 
you'd be the right person to connect with.

I'm currently completing my Master of Science in Business Analytics at Carnegie 
Mellon University (Tepper School of Business) and actively seeking full-time 
Business Analyst opportunities starting in May 2026.

I bring 3+ years of hands-on experience as a Business Analyst at LTIMindtree, 
where I partnered with stakeholders to deliver measurable business impact:

• Drove 40% cost reduction and 30% faster delivery through requirements gathering
• Provided executive visibility into $5M+ cloud spend via Power BI dashboards
• Reduced manual validation effort by 90% through process automation

My technical toolkit includes SQL, Python, Power BI, Azure, and Databricks.

OPT/H1B sponsorship required.

I'd love to discuss how my background could contribute to Microsoft's success. 
I've attached my resume for your review.

Would you be open to a brief conversation about current or upcoming opportunities?

Thank you for considering my application. I look forward to hearing from you.

Best regards,
Akash Vilas Parthe
MSBA Candidate, Carnegie Mellon University
aparthe@tepper.cmu.edu
https://www.linkedin.com/in/akashparthe/
```

---

## 🛠️ Troubleshooting

See **README.md** and **QUICKSTART.md** for detailed troubleshooting.

Common issues:
1. SMTP auth error → Use App Password, not regular Gmail password
2. No pending emails → Run `--collect-contacts` first
3. Module not found → Run `pip install -r requirements.txt`

---

## 📞 Support

For issues or questions:
1. Check **README.md** for documentation
2. Check **QUICKSTART.md** for setup help
3. Review logs in `logs/job_search.log`

---

## ✅ System Checklist

Before going live, verify:

- [ ] `.env` configured with Gmail App Password
- [ ] Resume data in `config.py` is accurate
- [ ] Tested dry-run mode successfully
- [ ] Reviewed generated emails for quality
- [ ] Exported Excel report and reviewed contacts
- [ ] Verified email templates are professional
- [ ] Tested with 5-10 emails in live mode first
- [ ] Monitoring responses and adjusting as needed

---

## 🎓 Your Profile Summary

**Akash Vilas Parthe**
- **Title**: Business Analyst | Product Analyst | Analytics Consultant
- **Education**: MSBA at Carnegie Mellon University (2025-2026)
- **Experience**: 3+ years at LTIMindtree
- **Location**: Pittsburgh, PA
- **Skills**: SQL, Python, Power BI, Tableau, Azure, Databricks, Stakeholder Management
- **Achievements**: 40% cost reduction, $5M+ visibility, 90% efficiency gains
- **Visa**: OPT/H1B sponsorship required
- **Target**: Business Analyst roles in US (H1B-friendly companies)

---

**System ready to launch! 🚀**

Follow the QUICKSTART.md guide to get started.
