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

# Resume data (from portfolio)
RESUME_DATA = {
    'name': 'Akash Vilas Parthe',
    'title': 'Business Analyst | Product Analyst | Analytics Consultant',
    'location': 'Pittsburgh, PA',
    'email': 'aparthe@tepper.cmu.edu',
    'linkedin': 'https://www.linkedin.com/in/akashparthe/',
    'github': 'https://github.com/akashparthe24',
    'years_experience': '3+',
    'education': {
        'current': 'MSBA at Carnegie Mellon University',
        'degree': 'Master of Science in Business Analytics',
        'school': 'Carnegie Mellon University, Tepper School of Business',
    },
    'skills': {
        'business_analysis': [
            'Requirements Gathering', 'BRD/FRD', 'Stakeholder Management',
            'Business Process Improvement', 'Gap Analysis', 'Root Cause Analysis',
            'User Story Development', 'UAT Coordination', 'KPI Design',
            'Agile', 'Scrum', 'SDLC'
        ],
        'analytics': [
            'SQL', 'Python', 'Excel', 'Power BI', 'Tableau',
            'Data Analysis', 'Statistical Analysis', 'Data Visualization',
            'Business Intelligence', 'Executive Reporting', 'Dashboard Design'
        ],
        'technical': [
            'ETL Pipelines', 'Data Warehousing', 'PySpark', 'Apache Spark',
            'Databricks', 'Apache Airflow', 'Azure Data Factory',
            'Azure Synapse', 'Microsoft Fabric', 'Snowflake'
        ]
    },
    'achievements': [
        '40% cost reduction through process improvements',
        '30% faster delivery cycles',
        '$5M+ executive visibility into cloud spend',
        '90% reduction in manual validation effort',
        '30% faster release cycles'
    ],
    'domain_expertise': [
        'FinOps', 'Cloud Cost Optimization', 'Business Process Improvement',
        'Data Engineering', 'AI Engineering', 'Migration Projects'
    ],
    'certifications': [
        'Microsoft Certified: Fabric Analytics Engineer Associate',
        'Microsoft Certified: Fabric Data Engineer Associate',
        'Microsoft Certified: Power BI Data Analyst Associate',
        'Databricks Certified Data Engineer Associate'
    ]
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
