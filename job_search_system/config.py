"""
Configuration settings for the job search system.
"""
import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Base paths
BASE_DIR = Path(__file__).parent
DATA_DIR = BASE_DIR / "data"
LOG_DIR = BASE_DIR / "logs"
TEMPLATES_DIR = BASE_DIR / "templates"

# Ensure directories exist
DATA_DIR.mkdir(exist_ok=True)
LOG_DIR.mkdir(exist_ok=True)
TEMPLATES_DIR.mkdir(exist_ok=True)

# Email configuration
SMTP_CONFIG = {
    'server': os.getenv('SMTP_SERVER', 'smtp.gmail.com'),
    'port': int(os.getenv('SMTP_PORT', 587)),
    'email': os.getenv('EMAIL_ADDRESS'),
    'password': os.getenv('EMAIL_PASSWORD'),
}

# Rate limiting
MAX_EMAILS_PER_DAY = int(os.getenv('MAX_EMAILS_PER_DAY', 30))
EMAIL_DELAY_SECONDS = int(os.getenv('EMAIL_DELAY_SECONDS', 15))

# Scheduling times
SEND_TIME = os.getenv('SEND_TIME', '08:30')
SCRAPE_TIME = os.getenv('SCRAPE_TIME', '21:00')

# Candidate information
CANDIDATE = {
    'name': os.getenv('CANDIDATE_NAME', 'Akash Vilas Parthe'),
    'email': os.getenv('CANDIDATE_EMAIL', 'aparthe@tepper.cmu.edu'),
    'linkedin': os.getenv('CANDIDATE_LINKEDIN', 'https://www.linkedin.com/in/akashparthe/'),
    'visa_status': os.getenv('VISA_STATUS', 'OPT/H1B sponsorship required'),
}

# Target criteria
TARGET_LOCATION = os.getenv('TARGET_LOCATION', 'United States')
TARGET_ROLES = os.getenv('TARGET_ROLES', 'Business Analyst,Senior Business Analyst,Data Analyst,Product Analyst').split(',')

# CSV file path
CONTACTS_CSV = DATA_DIR / "contacts.csv"

# Resume data (from actual resume)
RESUME_DATA = {
    'name': 'Akash Vilas Parthe',
    'title': 'Business Analyst | Data Engineer',
    'location': 'Pittsburgh, PA',
    'email': 'aparthe@tepper.cmu.edu',
    'phone': '(412) 478-6687',
    'linkedin': 'https://www.linkedin.com/in/akashparthe/',
    'github': 'https://github.com/akashparthe24',
    'years_experience': '3',
    'education': {
        'current': 'MSBA at Carnegie Mellon University',
        'degree': 'Master of Science in Business Analytics',
        'school': 'Carnegie Mellon University, Tepper School of Business',
        'timeline': 'Aug 2025 – May 2026',
        'coursework': [
            'Statistics', 'Machine Learning', 'Operations Research',
            'Financial Analysis', 'Database Management'
        ],
        'undergrad': 'Bachelor of Engineering in Computer Engineering',
        'undergrad_school': 'University of Mumbai, Pillai College of Engineering'
    },
    'skills': {
        'business_analysis': [
            'Requirements Gathering', 'Business Requirements Documents (BRDs)',
            'Functional Requirements Documents (FRDs)', 'Stakeholder Management',
            'User Stories', 'Acceptance Criteria', 'Gap Analysis',
            'Root Cause Analysis', 'Business Process Modeling (BPMN)',
            'Process Improvement', 'UAT Coordination', 'Change Management',
            'SDLC', 'Decision Support', 'Data Storytelling'
        ],
        'analytics': [
            'SQL Querying', 'Python', 'Excel (Advanced)', 'Power BI', 'Tableau',
            'Statistical Analysis', 'Data Visualization', 'KPI Development',
            'Executive Reporting', 'Data Validation', 'A/B Testing'
        ],
        'methodologies_tools': [
            'Agile/Scrum', 'Sprint Planning', 'Backlog Refinement',
            'JIRA', 'Confluence', 'Microsoft Office Suite',
            'Data Modeling', 'ETL', 'Reporting Automation'
        ],
        'platforms': [
            'Microsoft Fabric', 'Azure Synapse', 'Azure Data Factory',
            'Azure Data Lake', 'Snowflake', 'Databricks'
        ]
    },
    'achievements': [
        'Reduced scope changes by 35% through stakeholder requirements gathering',
        'Increased project delivery accuracy by 30% through requirements workshops',
        'Improved cost visibility by 20% with Power BI dashboards and executive reporting',
        'Reduced manual effort by 40% through automation and data quality frameworks',
        'Improved data reliability by 30% with gap and root cause analysis',
        'Enabled 45% faster data access through cloud migration and SQL optimization',
        'Increased customer interaction by 25% through analytics-driven product insights'
    ],
    'experience': [
        {
            'company': 'LTIMindtree',
            'location': 'Mumbai, India',
            'title': 'Business Analyst / Data Engineer',
            'timeline': 'Jun 2022 – Aug 2025',
            'highlights': [
                'Partnered with 15+ business stakeholders to define KPIs',
                'Led requirements workshops across SDLC phases',
                'Developed Power BI dashboards for executive reporting',
                'Conducted gap analysis and root cause analysis',
                'Collaborated in Agile/Scrum environments',
                'Analyzed large-scale operational datasets'
            ]
        },
        {
            'company': 'Make Me Builder',
            'location': 'Mumbai, India',
            'title': 'Business Analyst Intern',
            'timeline': 'Jan 2021 – Apr 2021',
            'highlights': [
                'Developed web-based analytics dashboards',
                'Conducted competitive analysis and user research',
                '25% increase in customer interaction'
            ]
        }
    ],
    'projects': [
        {
            'name': 'Angel Protection System (MSBA Capstone)',
            'organization': 'Carnegie Mellon University',
            'role': 'Project Manager & Analytics Lead',
            'timeline': 'Jan 2026 – Apr 2026',
            'description': 'Real-time security monitoring using computer vision analytics'
        }
    ],
    'domain_expertise': [
        'Requirements Analysis', 'Stakeholder Engagement', 'Process Improvement',
        'Cloud Migration', 'Data Quality Management', 'Executive Reporting',
        'Agile Delivery', 'Business Intelligence'
    ],
    'certifications': []  # Not mentioned in resume, but can be added later
}

# H1B Sponsor Companies (public data)
H1B_SPONSOR_COMPANIES = [
    'Amazon', 'Microsoft', 'Google', 'Meta', 'Apple', 'IBM', 'Oracle',
    'Salesforce', 'Adobe', 'Intel', 'Cisco', 'Dell', 'HP', 'Accenture',
    'Deloitte', 'PwC', 'EY', 'KPMG', 'Cognizant', 'Infosys', 'TCS',
    'Capgemini', 'Wipro', 'HCL', 'JPMorgan Chase', 'Bank of America',
    'Goldman Sachs', 'Morgan Stanley', 'Citi', 'Wells Fargo',
    'McKinsey', 'BCG', 'Bain', 'Tableau', 'Snowflake', 'Databricks',
    'Palantir', 'Splunk', 'ServiceNow', 'Workday', 'SAP', 'Uber',
    'Lyft', 'Airbnb', 'Netflix', 'Tesla', 'Bloomberg', 'Capital One',
    'American Express', 'Visa', 'Mastercard', 'PayPal', 'Square',
    'Stripe', 'Robinhood', 'Coinbase'
]

# Public job boards and APIs (no authentication required)
JOB_SOURCES = [
    {
        'name': 'Wellfound (AngelList)',
        'url': 'https://wellfound.com/role/r/business-analyst',
        'type': 'web'
    },
    {
        'name': 'LinkedIn Jobs (public)',
        'url': 'https://www.linkedin.com/jobs/search/?keywords=Business%20Analyst&location=United%20States',
        'type': 'web'
    },
    {
        'name': 'H1B Grader',
        'url': 'https://h1bgrader.com',
        'type': 'web'
    },
    {
        'name': 'MyVisaJobs',
        'url': 'https://www.myvisajobs.com',
        'type': 'web'
    }
]

# User agents for web scraping
USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
]

# Email domains common patterns
EMAIL_PATTERNS = [
    '{first}.{last}@{domain}',
    '{first}{last}@{domain}',
    '{f}{last}@{domain}',
    '{first}@{domain}',
]

# Logging configuration
LOGGING_CONFIG = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'colored': {
            '()': 'colorlog.ColoredFormatter',
            'format': '%(log_color)s%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            'log_colors': {
                'DEBUG': 'cyan',
                'INFO': 'green',
                'WARNING': 'yellow',
                'ERROR': 'red',
                'CRITICAL': 'red,bg_white',
            },
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'colored',
            'level': 'INFO',
        },
        'file': {
            'class': 'logging.FileHandler',
            'filename': LOG_DIR / 'job_search.log',
            'formatter': 'colored',
            'level': 'DEBUG',
        },
    },
    'root': {
        'level': 'DEBUG',
        'handlers': ['console', 'file'],
    },
}
