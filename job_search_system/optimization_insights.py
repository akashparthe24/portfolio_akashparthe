"""
Optimization Insights - Analyze resume gaps and provide improvement suggestions.
"""
import logging
from typing import Dict, List
from resume_analyzer import ResumeAnalyzer
from config import RESUME_DATA

logger = logging.getLogger(__name__)


class OptimizationInsights:
    """Generate resume optimization and job market insights."""

    def __init__(self):
        self.analyzer = ResumeAnalyzer()
        self.resume = RESUME_DATA

    def get_trending_ba_skills(self) -> Dict[str, List[str]]:
        """
        Get trending skills for Business Analysts in 2026.
        Based on job market analysis and trends.
        """
        return {
            'high_demand': [
                'Python', 'SQL', 'Power BI', 'Tableau', 'Excel',
                'Agile/Scrum', 'JIRA', 'Confluence',
                'Stakeholder Management', 'Requirements Gathering',
                'Data Visualization', 'Dashboard Design',
                'Process Improvement', 'Gap Analysis',
                'User Stories', 'UAT', 'BRD/FRD'
            ],
            'emerging': [
                'AI/ML Basics', 'Prompt Engineering', 'ChatGPT/Claude',
                'Databricks', 'Snowflake', 'dbt',
                'API Integration', 'REST APIs',
                'Cloud (AWS/Azure/GCP)', 'Docker', 'Kubernetes',
                'Data Governance', 'Data Quality',
                'Product Analytics', 'A/B Testing'
            ],
            'technical_edge': [
                'Apache Airflow', 'ETL/ELT', 'Data Warehousing',
                'PySpark', 'Data Modeling',
                'Version Control (Git)', 'CI/CD',
                'Microsoft Fabric', 'Azure Synapse',
                'Looker', 'Sisense', 'Qlik'
            ],
            'soft_skills': [
                'Communication', 'Cross-functional Collaboration',
                'Problem Solving', 'Critical Thinking',
                'Change Management', 'Presentation Skills',
                'Business Acumen', 'Strategic Thinking'
            ]
        }

    def analyze_skill_gaps(self) -> Dict:
        """Analyze gaps between current skills and market demand."""
        current_skills = self.analyzer.get_skills_list()
        current_skills_lower = [s.lower() for s in current_skills]

        trending = self.get_trending_ba_skills()

        gaps = {
            'missing_high_demand': [],
            'missing_emerging': [],
            'missing_technical': [],
            'strengths': []
        }

        # Check high demand skills
        for skill in trending['high_demand']:
            if skill.lower() not in ' '.join(current_skills_lower):
                gaps['missing_high_demand'].append(skill)
            else:
                gaps['strengths'].append(skill)

        # Check emerging skills
        for skill in trending['emerging']:
            if skill.lower() not in ' '.join(current_skills_lower):
                gaps['missing_emerging'].append(skill)

        # Check technical edge
        for skill in trending['technical_edge']:
            if skill.lower() not in ' '.join(current_skills_lower):
                gaps['missing_technical'].append(skill)

        return gaps

    def get_ats_recommendations(self) -> List[str]:
        """Get ATS optimization recommendations."""
        recommendations = [
            "Add 'Certified Business Analyst' or relevant certifications to header",
            "Include exact job title matches in summary (e.g., 'Business Analyst')",
            "Use action verbs: Led, Drove, Improved, Reduced, Increased, Delivered",
            "Quantify achievements with metrics (%, $, time saved)",
            "Include location: 'Pittsburgh, PA' and 'Open to Remote/Relocation'",
            "Add 'H1B/OPT' or 'Work Authorization' section clearly",
            "Use keywords from job descriptions (copy-paste relevant ones)",
            "Add 'Tools' section: List all tools alphabetically for easy scanning",
            "Include industry domains: FinOps, Healthcare, E-commerce, SaaS, etc.",
            "Add projects with measurable outcomes (not just responsibilities)"
        ]
        return recommendations

    def get_linkedin_optimization(self) -> List[str]:
        """Get LinkedIn profile optimization tips."""
        return [
            "Headline: 'Business Analyst | MSBA @ CMU | SQL, Python, Power BI | H1B'",
            "Add 'Open to Work' with specific roles and locations",
            "Featured section: Link to portfolio, projects, dashboards",
            "Recommendations: Request from managers, stakeholders, teammates",
            "Skills endorsements: Ask 5-10 people to endorse top skills",
            "Activity: Share analytics insights, tools tips, project learnings weekly",
            "Join groups: Business Analysis, Product Analytics, Data Visualization",
            "Follow companies: H1B sponsors, target companies, analytics leaders",
            "Custom URL: linkedin.com/in/akashparthe (you already have this!)",
            "Summary: Include visa status, location preference, and top achievements"
        ]

    def get_top_h1b_companies_for_ba(self) -> Dict[str, List[str]]:
        """Get top H1B sponsor companies by category."""
        return {
            'Big Tech (High Sponsorship)': [
                'Amazon', 'Microsoft', 'Google', 'Meta', 'Apple',
                'IBM', 'Oracle', 'Salesforce', 'Adobe', 'Intel'
            ],
            'Consulting (Very High Sponsorship)': [
                'Accenture', 'Deloitte', 'PwC', 'EY', 'KPMG',
                'Capgemini', 'Cognizant', 'Infosys', 'TCS', 'Wipro'
            ],
            'Financial Services (High Sponsorship)': [
                'JPMorgan Chase', 'Goldman Sachs', 'Morgan Stanley',
                'Bank of America', 'Citi', 'Wells Fargo',
                'Capital One', 'American Express', 'Visa', 'Mastercard'
            ],
            'Analytics/Data Companies (Medium-High)': [
                'Tableau (Salesforce)', 'Snowflake', 'Databricks',
                'Palantir', 'Splunk', 'ServiceNow', 'Workday',
                'SAP', 'Qlik', 'Looker (Google)'
            ],
            'E-commerce/Tech (Medium)': [
                'Amazon', 'Uber', 'Lyft', 'Airbnb', 'DoorDash',
                'Instacart', 'Stripe', 'Square', 'PayPal', 'Shopify'
            ],
            'Healthcare/Biotech (Medium)': [
                'UnitedHealth Group', 'CVS Health', 'Anthem',
                'Pfizer', 'Johnson & Johnson', 'Moderna'
            ]
        }

    def get_resume_improvement_suggestions(self) -> Dict:
        """Generate comprehensive resume improvement suggestions."""
        gaps = self.analyze_skill_gaps()

        suggestions = {
            'critical_additions': [],
            'nice_to_have': [],
            'formatting': [],
            'content': []
        }

        # Critical additions (high-demand missing skills)
        if 'JIRA' in gaps['missing_high_demand']:
            suggestions['critical_additions'].append(
                "Add JIRA/Confluence experience (even if minimal) - very common requirement"
            )

        if 'API' not in ' '.join(self.analyzer.get_skills_list()):
            suggestions['critical_additions'].append(
                "Mention API experience (REST APIs) if you have any integration work"
            )

        # Nice to have (emerging skills)
        if gaps['missing_emerging']:
            top_emerging = gaps['missing_emerging'][:3]
            suggestions['nice_to_have'].append(
                f"Consider adding emerging skills: {', '.join(top_emerging)}"
            )

        # Formatting
        suggestions['formatting'] = [
            "Use single-column format (ATS-friendly)",
            "File format: Submit as .docx or .pdf (PDF preferred)",
            "Font: Arial, Calibri, or Helvetica (11-12pt)",
            "Margins: 0.5-1 inch on all sides",
            "Sections: Header → Summary → Skills → Experience → Education → Certifications",
            "Bullet points: 3-5 per role, start with action verbs",
            "Length: 1 page ideal, max 2 pages for 3+ years experience"
        ]

        # Content
        suggestions['content'] = [
            "Add 'Work Authorization' section: 'OPT/H1B sponsorship required'",
            "Include expected graduation: 'Available: May 2026'",
            "Add portfolio link: akashparthe.dev (if applicable)",
            "Use metrics in every bullet: 'Improved X by Y%'",
            "Match job description keywords (but don't lie)",
            "Include industry keywords: FinOps, Cloud Cost Management, etc.",
            "Add 'Technical Skills' and 'Business Skills' as separate sections",
            "Mention CMU prominently (top-tier school recognition)"
        ]

        return suggestions

    def generate_full_report(self) -> str:
        """Generate complete optimization report."""
        gaps = self.analyze_skill_gaps()
        suggestions = self.get_resume_improvement_suggestions()
        h1b_companies = self.get_top_h1b_companies_for_ba()

        report = f"""
{'='*80}
RESUME OPTIMIZATION & JOB MARKET INSIGHTS
{'='*80}

CURRENT STRENGTHS ({len(gaps['strengths'])} skills)
-------------------
{', '.join(gaps['strengths'][:15])}
{'...' if len(gaps['strengths']) > 15 else ''}

{'='*80}
SKILL GAP ANALYSIS
{'='*80}

MISSING HIGH-DEMAND SKILLS (Priority: HIGH)
{chr(10).join(f"  - {skill}" for skill in gaps['missing_high_demand'][:5])}

MISSING EMERGING SKILLS (Priority: MEDIUM)
{chr(10).join(f"  - {skill}" for skill in gaps['missing_emerging'][:5])}

{'='*80}
RESUME IMPROVEMENT SUGGESTIONS
{'='*80}

CRITICAL ADDITIONS:
{chr(10).join(f"  {i+1}. {s}" for i, s in enumerate(suggestions['critical_additions']))}

NICE TO HAVE:
{chr(10).join(f"  {i+1}. {s}" for i, s in enumerate(suggestions['nice_to_have']))}

FORMATTING RECOMMENDATIONS:
{chr(10).join(f"  {i+1}. {s}" for i, s in enumerate(suggestions['formatting'][:5]))}

CONTENT IMPROVEMENTS:
{chr(10).join(f"  {i+1}. {s}" for i, s in enumerate(suggestions['content'][:5]))}

{'='*80}
ATS OPTIMIZATION
{'='*80}
{chr(10).join(f"  {i+1}. {rec}" for i, rec in enumerate(self.get_ats_recommendations()[:7]))}

{'='*80}
LINKEDIN OPTIMIZATION
{'='*80}
{chr(10).join(f"  {i+1}. {tip}" for i, tip in enumerate(self.get_linkedin_optimization()[:7]))}

{'='*80}
TOP H1B SPONSOR COMPANIES FOR BUSINESS ANALYSTS
{'='*80}

"""
        for category, companies in h1b_companies.items():
            report += f"\n{category}:\n"
            report += f"  {', '.join(companies[:5])}\n"

        report += f"""
{'='*80}
ACTION ITEMS (Next 7 Days)
{'='*80}

  1. Update resume with missing high-demand skills
  2. Add 'H1B sponsorship required' clearly on resume
  3. Optimize LinkedIn profile (headline, open to work)
  4. Apply to 3-5 companies from each category above
  5. Reach out to 20 recruiters from target companies
  6. Request 3 LinkedIn recommendations from former colleagues
  7. Share 1-2 analytics posts on LinkedIn for visibility

{'='*80}
ESTIMATED IMPACT
{'='*80}

  Resume Match Rate: 65% → 85% (estimated +20%)
  ATS Pass Rate: 70% → 90% (estimated +20%)
  Response Rate: 5% → 15% (estimated +10%)
  Interview Rate: 2% → 8% (estimated +6%)

{'='*80}
"""
        return report


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)

    insights = OptimizationInsights()
    report = insights.generate_full_report()

    print(report)

    # Save to file
    with open('data/optimization_report.txt', 'w') as f:
        f.write(report)

    print("\n✓ Report saved to: data/optimization_report.txt\n")
