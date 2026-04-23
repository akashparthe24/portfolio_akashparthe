# Quick Start Guide

## 1. Setup (5 minutes)

### Option A: Automatic Setup
```bash
chmod +x setup.sh
./setup.sh
```

### Option B: Manual Setup
```bash
# Install dependencies
pip install -r requirements.txt

# Create environment file
cp .env.example .env

# Edit .env with your email credentials
nano .env
```

## 2. Configure Gmail (2 minutes)

1. Go to https://myaccount.google.com/apppasswords
2. Enable 2-factor authentication if not already enabled
3. Generate an "App Password"
4. Copy the 16-character password
5. Edit `.env` file:
   ```env
   EMAIL_ADDRESS=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password_here
   ```

## 3. Test the System (5 minutes)

```bash
# Analyze your resume
python main.py --analyze-resume

# Collect 10 test contacts
python main.py --collect-contacts 10

# View statistics
python main.py --stats

# Test email generation (dry run - no real sending)
python main.py --send-now

# Export Excel report
python main.py --export-report
```

## 4. Review Generated Emails

Open `data/contacts_report_YYYYMMDD_HHMMSS.xlsx` and review:
- Contact quality
- Email addresses
- Generated email drafts
- Relevance scores

## 5. Send Test Batch (Live Mode)

⚠️ This sends REAL emails!

```bash
# Start with a small batch (5 emails)
# First, make sure you have only 5 pending contacts
python main.py --stats

# Send them (you'll be asked for confirmation)
python main.py --send-now --live
```

## 6. Enable Automation (Optional)

```bash
# Start daily automation (dry run mode - safe)
python main.py --start-automation
```

This will:
- Run at 9:00 PM daily to collect new contacts
- Run at 8:30 AM daily to send emails (dry run)

To enable live sending, edit `automation.py` and change:
```python
self.email_scheduler.set_dry_run(False)  # Enable live sending
```

---

## Common Commands

```bash
# Collect more contacts
python main.py --collect-contacts 50

# Check status
python main.py --stats

# Export report
python main.py --export-report

# Send emails (dry run)
python main.py --send-now

# Send emails (LIVE)
python main.py --send-now --live
```

---

## Sample Output

### Resume Analysis
```
====================================================
CANDIDATE PROFILE SUMMARY
====================================================

Name: Akash Vilas Parthe
Title: Business Analyst | Product Analyst | Analytics Consultant
Experience: 3+ years

TOP SKILLS:
Business Analysis: Requirements Gathering, BRD/FRD, Stakeholder Management...
Analytics: SQL, Python, Power BI, Tableau...
Technical: ETL, Azure, Databricks, PySpark...

KEY ACHIEVEMENTS:
- 40% cost reduction
- 30% faster delivery
- $5M+ executive visibility
```

### Contact Collection
```
Collecting 20 new contacts...
✓ Collected and added 18 new contacts to database (2 duplicates skipped)

DATABASE STATISTICS
==================
Total Contacts: 48
Pending: 18
Valid Emails: 40
```

### Email Sending (Dry Run)
```
Preparing to send 18 emails...

[DRY RUN] Would send email to john.doe@microsoft.com
Subject: Carnegie Mellon MSBA Candidate - Business Analyst Role
Body preview: Hi John,

I hope you're doing well...

Send complete: 0 sent (dry run), 0 failed, 18 skipped
```

---

## Troubleshooting

### "SMTP Authentication Error"
- Use **App Password**, not regular Gmail password
- Enable 2FA first
- Generate at: https://myaccount.google.com/apppasswords

### "No pending emails"
- Run: `python main.py --collect-contacts 20`
- Check: `python main.py --stats`

### "Module not found"
- Run: `pip install -r requirements.txt`
- Or: `./setup.sh`

---

## Next Steps

1. ✅ Review generated emails for quality
2. ✅ Test with small batch (5-10 emails)
3. ✅ Monitor responses
4. ✅ Adjust email templates if needed
5. ✅ Scale up to 30/day
6. ✅ Enable automation

**Good luck with your job search! 🎯**
