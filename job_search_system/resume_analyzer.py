"""
Resume Analyzer - Extract and analyze candidate profile.
"""
import logging
from typing import Dict, List
from config import RESUME_DATA

logger = logging.getLogger(__name__)


class ResumeAnalyzer:
    """Analyzes candidate resume and generates summary."""

    def __init__(self):
        self.resume = RESUME_DATA

    def get_candidate_summary(self) -> str:
        """Generate a concise candidate summary."""
        summary = f"""
CANDIDATE PROFILE SUMMARY
========================

Name: {self.resume['name']}
Title: {self.resume['title']}
Location: {self.resume['location']}
Experience: {self.resume['years_experience']} years

EDUCATION:
- {self.resume['education']['current']}
- {self.resume['education']['degree']} from {self.resume['education']['school']}

TOP SKILLS:
Business Analysis: {', '.join(self.resume['skills']['business_analysis'][:6])}
Analytics: {', '.join(self.resume['skills']['analytics'][:6])}
Technical: {', '.join(self.resume['skills']['technical'][:6])}

KEY ACHIEVEMENTS:
{chr(10).join(f"- {achievement}" for achievement in self.resume['achievements'])}

DOMAIN EXPERTISE:
{', '.join(self.resume['domain_expertise'])}

CERTIFICATIONS:
{chr(10).join(f"- {cert}" for cert in self.resume['certifications'])}

SENIORITY LEVEL: Mid to Senior Level (3+ years experience)

TOP MATCHING ROLES:
1. Business Analyst
2. Senior Business Analyst
3. Product Analyst
4. Data Analyst
5. Analytics Consultant
        """
        return summary.strip()

    def get_skills_list(self) -> List[str]:
        """Get flat list of all skills."""
        all_skills = []
        for category in self.resume['skills'].values():
            all_skills.extend(category)
        return all_skills

    def get_experience_years(self) -> int:
        """Extract years of experience as integer."""
        exp = self.resume['years_experience']
        # Extract numeric value
        if '+' in exp:
            return int(exp.replace('+', ''))
        return int(exp.split('-')[0])

    def get_target_roles(self) -> List[str]:
        """Get recommended target roles."""
        return [
            'Business Analyst',
            'Senior Business Analyst',
            'Product Analyst',
            'Data Analyst',
            'Analytics Consultant',
            'Business Intelligence Analyst',
            'BI Developer',
            'Analytics Engineer'
        ]

    def get_elevator_pitch(self) -> str:
        """Generate a 2-3 sentence elevator pitch."""
        return (
            f"{self.resume['name']} is a Business Analyst with {self.resume['years_experience']} years "
            f"of experience driving measurable business impact through data-driven solutions. "
            f"Currently completing an MSBA at Carnegie Mellon University, with expertise in "
            f"stakeholder management, process improvement, and analytics tools including "
            f"SQL, Python, Power BI, and Azure. Track record includes 40% cost reduction, "
            f"30% faster delivery, and executive visibility into $5M+ cloud spend."
        )

    def get_skill_keywords_for_ats(self) -> List[str]:
        """Get ATS-optimized keywords."""
        return [
            # Business Analysis
            'Business Analyst', 'Business Analysis', 'Requirements Gathering',
            'Stakeholder Management', 'Process Improvement', 'Gap Analysis',
            'BRD', 'FRD', 'User Stories', 'UAT', 'Agile', 'Scrum',

            # Analytics
            'SQL', 'Python', 'Power BI', 'Tableau', 'Excel',
            'Data Analysis', 'Data Visualization', 'Business Intelligence',
            'Dashboard', 'KPI', 'Metrics', 'Reporting',

            # Technical
            'Azure', 'Microsoft Fabric', 'Azure Synapse', 'Databricks',
            'ETL', 'Data Warehousing', 'PySpark', 'Data Pipeline',

            # Soft Skills
            'Cross-functional Collaboration', 'Communication', 'Problem Solving',
            'Critical Thinking', 'Analytical Skills',

            # Domain
            'FinOps', 'Cloud Cost Optimization', 'Migration', 'AI/ML'
        ]

    def analyze_resume(self) -> Dict:
        """Complete resume analysis."""
        logger.info("Analyzing candidate resume...")

        analysis = {
            'summary': self.get_candidate_summary(),
            'elevator_pitch': self.get_elevator_pitch(),
            'skills': self.get_skills_list(),
            'target_roles': self.get_target_roles(),
            'experience_years': self.get_experience_years(),
            'ats_keywords': self.get_skill_keywords_for_ats(),
            'candidate_data': self.resume
        }

        logger.info(f"Resume analysis complete. Found {len(analysis['skills'])} skills.")
        return analysis


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    analyzer = ResumeAnalyzer()

    print("\n" + "="*80)
    print(analyzer.get_candidate_summary())
    print("\n" + "="*80)
    print("\nELEVATOR PITCH:")
    print(analyzer.get_elevator_pitch())
    print("\n" + "="*80)
