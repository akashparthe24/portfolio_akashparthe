// Central content source for all sections.
export const siteMetadata = {
  name: "Akash Parthe",
  title: "Business Analyst | AI Engineer | Data Engineer",
  description:
    "Portfolio of Akash Parthe, a Business Analyst with deep experience in AI engineering and data engineering.",
  url: "https://akashparthe.dev",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Akash Vilas Parthe",
  title: "Business Analyst | Product Analyst | Analytics Consultant",
  tagline:
    "Business Analyst with 3+ years driving measurable business impact—40% cost reduction, 30% faster delivery, and $5M+ executive visibility—by translating stakeholder needs into data-driven solutions. Currently completing MSBA at Carnegie Mellon.",
  location: "Pittsburgh, PA",
  socialLinks: {
    github: "https://github.com/akashparthe24/akash-parthe24",
    linkedin: "https://www.linkedin.com/in/akashparthe/",
    email: "mailto:aparthe@tepper.cmu.edu",
  },
};

export const about = {
  summary:
    "I am a Business Analyst and MSBA candidate at Carnegie Mellon University with 3+ years of experience partnering with stakeholders to translate business goals into measurable outcomes. At LTIMindtree, I led requirements discussions and process improvements that contributed to a 40% cost reduction, 30% faster delivery, and executive visibility into $5M+ cloud spend.",
  highlights: [],
};

export const skillCategories = [
  {
    title: "Business Analysis & Requirements",
    items: [
      "Requirements Gathering",
      "Business Requirements Documents (BRDs)",
      "Functional Requirements Documents (FRDs)",
      "Stakeholder Management",
      "Business Process Improvement",
      "Gap Analysis",
      "Root Cause Analysis",
      "User Story Development",
      "Acceptance Criteria",
      "UAT Coordination",
      "Process Analysis",
      "KPI Design",
      "Agile",
      "Scrum",
      "Sprint Planning",
      "SDLC",
      "Change Management",
      "Unified Modeling Language (UML)",
    ],
  },
  {
    title: "Analytics & Visualization",
    items: [
      "SQL",
      "Python",
      "Excel",
      "Power BI",
      "Tableau",
      "Data Analysis",
      "Statistical Analysis",
      "Data Visualization",
      "Business Intelligence",
      "Executive Reporting",
      "Dashboard Design",
      "Data Storytelling",
      "KPI Development",
    ],
  },
  {
    title: "Technical Proficiency",
    items: [
      "ETL Pipelines",
      "Data Warehousing",
      "Data Modeling",
      "PySpark",
      "Apache Spark",
      "Databricks",
      "Apache Airflow",
      "Azure Data Factory",
      "Azure Synapse",
      "Azure Data Lake Storage",
      "REST APIs",
      "Microsoft Fabric",
      "Snowflake",
    ],
  },
];

export const skillLevels = [
  { label: "Business Analytics", value: 92 },
  { label: "AI Engineering", value: 86 },
  { label: "Data Engineering", value: 90 },
  { label: "Stakeholder Leadership", value: 88 },
];

export type ProjectEntry = {
  title: string;
  category?: string;
  description: string;
  problem: string;
  approach: string;
  impact: string;
  whyItMatters: string;
  highlights: {
    impact: string;
    scale: string;
    tools: string;
  };
  tech: string[];
  github: string;
  demo: string;
};

export const featuredProjects: ProjectEntry[] = [
  {
    title: "Angel Protection System",
    category: "Business Analysis + Product Delivery",
    description:
      "Led a stakeholder-driven safety initiative that improved alert quality and decision confidence for security teams.",
    problem:
      "Security teams needed faster, more reliable alerts because manual monitoring created delays and high false-alarm volume.",
    approach:
      "Facilitated requirements workshops with security users, translated needs into specifications, and coordinated UAT and cross-functional delivery; Python, OpenCV, Amazon Rekognition, and Amazon Bedrock supported implementation.",
    impact:
      "Achieved 20+ FPS inference while improving precision by 20% and reducing false positives by 25%.",
    whyItMatters:
      "Improved trust in alerts and enabled faster operational decision-making in a high-risk environment.",
    highlights: {
      impact: "20+ FPS | +20% precision | -25% false positives",
      scale: "Real-time human-in-the-loop monitoring workflow",
      tools: "Requirements Workshops, UAT, Stakeholder Management, Python, Amazon Rekognition",
    },
    tech: ["Amazon Rekognition", "Amazon Bedrock", "Python", "Transfer Learning", "OpenCV"],
    github: "https://github.com/akashparthe24/akash-parthe24",
    demo: "",
  },
  {
    title: "FinOps Executive Dashboard",
    category: "Business Analysis + Financial Analytics",
    description:
      "Built executive cost visibility that helped leadership monitor cloud spend and make faster optimization decisions.",
    problem:
      "Finance and engineering teams lacked unified visibility into $5M+ cloud spend, limiting timely cost decisions.",
    approach:
      "Led cross-functional workshops with finance and engineering stakeholders, defined cost KPIs, and delivered a Power BI dashboard backed by Microsoft Fabric and Azure Synapse data.",
    impact:
      "Improved cost visibility and operational efficiency by 10-15% through centralized KPI reporting.",
    whyItMatters:
      "Enabled executive teams to make faster, data-backed cost-performance tradeoff decisions.",
    highlights: {
      impact: "+10-15% cost visibility and operational efficiency",
      scale: "$5M+ cloud spend across platforms",
      tools: "Stakeholder Workshops, KPI Development, Power BI, Microsoft Fabric, Azure Synapse",
    },
    tech: ["Power BI", "Microsoft Fabric", "Azure Synapse", "T-SQL", "PySpark"],
    github: "https://github.com/akashparthe24/akash-parthe24",
    demo: "",
  },
  {
    title: "Smart Validation Tool",
    category: "Business Process Improvement",
    description:
      "Improved release readiness by replacing manual validation with a stakeholder-driven automation workflow.",
    problem:
      "Manual validation created release bottlenecks and increased risk in migration delivery.",
    approach:
      "Conducted stakeholder interviews and gap analysis with analyst teams, captured requirements, and implemented an automated source-target validation process aligned to business needs.",
    impact:
      "Reduced manual effort by 90%, validated 10M+ rows in ~20 minutes, and accelerated release cycles by 30%.",
    whyItMatters:
      "Reduced delivery risk and improved release confidence while increasing operational speed.",
    highlights: {
      impact: "↓90% manual effort | 10M+ rows in ~20 mins | +30% release speed",
      scale: "Enterprise-scale migration datasets",
      tools: "Stakeholder Interviews, Gap Analysis, Process Automation, Python, SQL, Azure",
    },
    tech: ["Python", "Multiprocessing", "SQL", "Azure Data Engineering"],
    github: "https://github.com/akashparthe24/akash-parthe24",
    demo: "",
  },
];

export const projectsByCategory = [
  {
    category: "AI Projects",
    projects: <ProjectEntry[]>[
      {
        title: "Angel Protection System",
        description:
          "Partnered with security stakeholders to improve alert quality and support faster response decisions.",
        problem:
          "Manual monitoring caused delayed response and high false-alarm overhead.",
        approach:
          "Led requirements workshops, translated needs into acceptance criteria, and coordinated UAT while supporting delivery using Python, OpenCV, Amazon Rekognition, and Amazon Bedrock.",
        impact:
          "Achieved 20+ FPS inference while improving precision by 20% and reducing false positives by 25%.",
        whyItMatters:
          "Enabled faster frontline decisions with more trusted alerts in a safety-critical setting.",
        highlights: {
          impact: "20+ FPS | +20% precision | -25% false positives",
          scale: "Real-time human-in-the-loop monitoring",
          tools: "Python, OpenCV, Amazon Rekognition, Amazon Bedrock",
        },
        tech: ["Python", "OpenCV", "Amazon Rekognition", "Bedrock"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
      {
        title: "Cricket Player RAG Chatbot",
        description:
          "Addressed slow document search by creating a reliable, business-friendly knowledge retrieval assistant.",
        problem:
          "Scattered documents slowed decision-making and reduced confidence in retrieved information.",
        approach:
          "Conducted user research on information needs and delivered a structured retrieval workflow using Python, FAISS, and validation guardrails.",
        impact:
          "Improved response reliability and reduced time spent searching across unstructured documents.",
        whyItMatters:
          "Helped users access critical information faster for day-to-day decisions.",
        highlights: {
          impact: "Faster information retrieval with higher response reliability",
          scale: "Multi-document unstructured PDF corpus",
          tools: "User Research, Requirements Discovery, Python, FAISS, Hugging Face",
        },
        tech: ["LangChain", "FAISS", "LLMs", "Hugging Face"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
    ],
  },
  {
    category: "Data Engineering Projects",
    projects: <ProjectEntry[]>[
      {
        title: "Metadata-Driven Ingestion Framework",
        description:
          "Collaborated with analytics stakeholders to standardize onboarding and improve reporting readiness.",
        problem:
          "Manual onboarding delays and inconsistent processes slowed reporting delivery.",
        approach:
          "Gathered requirements from reporting teams and implemented a standardized metadata-driven onboarding process using Azure Data Factory, PySpark, T-SQL, and Microsoft Fabric.",
        impact:
          "Reduced manual onboarding effort by 40% and improved downstream reporting reliability.",
        whyItMatters:
          "Improved time-to-insight and created a repeatable foundation for business reporting decisions.",
        highlights: {
          impact: "↓40% manual onboarding effort",
          scale: "Enterprise multi-source analytics ingestion",
          tools: "Azure Data Factory, PySpark, T-SQL, Microsoft Fabric",
        },
        tech: ["Azure Data Factory", "PySpark", "T-SQL", "Fabric"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
      {
        title: "Semantic Model Migration Automation",
        description:
          "Worked with BI stakeholders to speed dashboard modernization while reducing migration risk.",
        problem:
          "Manual model migration created delays, rework, and performance uncertainty for reporting teams.",
        approach:
          "Captured migration requirements from BI users, prioritized high-impact conversion rules, and automated model transition and validation in Python, Power BI, and Microsoft Fabric.",
        impact:
          "Cut semantic model migration time by 60% while improving consistency and reducing rework.",
        whyItMatters:
          "Enabled faster release of modernized dashboards with lower risk to business-critical reporting.",
        highlights: {
          impact: "↓60% semantic migration time",
          scale: "Enterprise BI semantic model workloads",
          tools: "Python, Microsoft Fabric, Power BI, SQL",
        },
        tech: ["Python", "Microsoft Fabric", "Power BI", "SQL"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
      {
        title: "Smart Validation Tool",
        description:
          "Partnered with analyst teams to remove validation bottlenecks and improve release confidence.",
        problem:
          "Manual validation effort delayed releases and increased migration risk.",
        approach:
          "Conducted stakeholder interviews and gap analysis, then implemented an automated validation workflow using Python and SQL based on analyst requirements.",
        impact:
          "Reduced manual effort by 90%, validated 10M+ rows in ~20 minutes, and accelerated release cycles by 30%.",
        whyItMatters:
          "Improved confidence in release quality while increasing delivery speed for business teams.",
        highlights: {
          impact: "↓90% manual effort | 10M+ rows in ~20 mins | +30% release speed",
          scale: "Enterprise-scale migration datasets",
          tools: "Stakeholder Interviews, Gap Analysis, Python, SQL, Azure",
        },
        tech: ["Python", "SQL", "Data Validation", "Azure"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
      {
        title: "Unified FinOps Observability Platform",
        description:
          "Led finance and engineering alignment to improve cloud cost governance through shared KPI visibility.",
        problem:
          "Fragmented cost and usage visibility limited proactive optimization and governance decisions.",
        approach:
          "Led requirements workshops with finance and engineering stakeholders to define cost KPIs, then delivered integrated Power BI reporting across Fabric, Synapse, and ADF.",
        impact:
          "Improved cost visibility and operational efficiency by 10-15% through centralized monitoring and KPI-driven reporting.",
        whyItMatters:
          "Enabled leadership to make faster cost-performance decisions using consistent KPI reporting.",
        highlights: {
          impact: "+10-15% cost visibility and operational efficiency",
          scale: "Unified monitoring across Fabric, Synapse, and ADF",
          tools: "T-SQL, PySpark, Power BI, Microsoft Fabric, Azure Synapse",
        },
        tech: ["T-SQL", "PySpark", "Power BI", "Microsoft Fabric", "Azure Synapse"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
    ],
  },
];

export const experience = [
  {
    role: "MSBA Student Ambassador",
    company: "Carnegie Mellon University - Tepper School of Business",
    location: "Pittsburgh, PA",
    timeline: "Sep 2025 - Present",
    bullets: [
      "Represent the MSBA program in webinars, campus tours, and Q&A sessions for prospective candidates.",
      "Guide applicants on academics, student life, and analytics career outcomes to support informed decisions.",
      "Facilitate connections between incoming and current students to strengthen community engagement.",
    ],
    tech: ["Stakeholder Communication", "Program Representation", "Community Building"],
  },
  {
    role: "Business Analyst",
    company: "LTIMindtree",
    location: "Mumbai, India",
    timeline: "Oct 2022 - Aug 2025",
    bullets: [
      "Partnered with business and engineering stakeholders to gather migration requirements and accelerated SQL Server/Snowflake migration to Azure Synapse and Microsoft Fabric by 50%.",
      "Worked with analyst teams to identify validation pain points, translated needs into automation requirements, and reduced manual validation effort by 90% while validating 10M+ records in ~20 minutes and improving release speed by 30%.",
      "Collaborated with reporting stakeholders to standardize onboarding requirements, improving ingestion efficiency by 40% and reducing delivery delays.",
      "Led cross-functional KPI definition with finance and engineering teams, improving cost visibility and operational efficiency by 10-15%.",
      "Aligned data quality requirements with business users and reduced data quality incidents by 30% through a self-service monitoring framework.",
      "Coordinated BI modernization requirements and reduced semantic model migration time by 60% through workflow automation.",
    ],
    tech: ["Microsoft Fabric", "Azure Synapse", "ADF", "PySpark", "T-SQL", "Power BI", "Python", "Databricks"],
  },
  {
    role: "Graduate Engineering Trainee",
    company: "LTIMindtree",
    location: "Mumbai, India",
    timeline: "Jun 2022 - Sep 2022",
    bullets: [
      "Completed intensive SQL, Python, and Azure training, enabling faster delivery of production-grade cloud data solutions.",
      "Built an ADF ingestion pipeline for Azure SQL to ADLS bulk migration, improving transfer speed by 40% while maintaining data integrity.",
      "Created Power BI dashboards that reduced stakeholder analysis time by 50% and accelerated insight delivery.",
      "Optimized Azure storage and processing workflows, reducing manual handling effort by 35%.",
    ],
    tech: ["Azure SQL", "ADLS", "ADF", "Power BI", "Python", "SQL"],
  },
  {
    role: "Business Analyst Intern - Marketing & Advertising",
    company: "Digifuse",
    location: "Mumbai, India",
    timeline: "Apr 2021 - Jun 2021",
    bullets: [
      "Conducted competitive benchmarking and audience segmentation to inform 3+ high-priority marketing initiatives.",
      "Evaluated campaign performance and recommended data-driven strategies that improved audience engagement by 25%.",
      "Synthesized complex market data into actionable reports for cross-functional stakeholders.",
    ],
    tech: ["Campaign Analytics", "Market Research", "Stakeholder Reporting"],
  },
  {
    role: "Business Analyst - I",
    company: "Make Me Builder",
    location: "Mumbai, India",
    timeline: "Jan 2021 - Apr 2021",
    bullets: [
      "Translated business requirements into technical specifications for scalable web solutions.",
      "Collaborated with cross-functional teams to prioritize features and reduce rework by 25%.",
      "Improved workflow and UI recommendations that increased user retention and usability by 30%.",
      "Monitored post-deployment outcomes and resolved gaps to improve system stability.",
    ],
    tech: ["WAMP", "Process Analysis", "Product Metrics"],
  },
];

export const education = [
  {
    degree: "Master of Science in Business Analytics",
    school: "Carnegie Mellon University, Tepper School of Business",
    location: "Pittsburgh, PA",
    timeline: "Aug 2025 - May 2026",
    details:
      "Coursework includes Statistics, Machine Learning, Operations Research, Financial Analysis, Modern Database Management, and Business Intelligence.",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "University of Mumbai, Pillai College of Engineering",
    location: "Navi Mumbai, India",
    timeline: "Jun 2018 - May 2022",
    details:
      "Coursework includes Data Warehousing and Mining, DBMS, Artificial Intelligence, Cloud Computing, and Data Structures & Algorithms.",
  },
];

export const certifications = [
  {
    label: "Microsoft Certified: Fabric Analytics Engineer Associate",
    href: "https://learn.microsoft.com/en-us/users/akashvilasparthe-2200/credentials/e396cb69186285b6?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    label: "Microsoft Certified: Fabric Data Engineer Associate",
    href: "https://learn.microsoft.com/en-us/users/akashvilasparthe-2200/credentials/7671e35fb53fb29f?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    label: "Microsoft Certified: Power BI Data Analyst Associate",
    href: "https://learn.microsoft.com/en-us/users/akashvilasparthe-2200/credentials/2f6a9e9eaac16f40?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    label: "Databricks Certified Data Engineer Associate",
    href: "https://credentials.databricks.com/d65a4b76-b932-4bf1-940c-3ef53f12a929#acc.K5vRh2SM",
  },
];

export const contact = {
  email: "aparthe@tepper.cmu.edu",
  linkedin: "https://www.linkedin.com/in/akashparthe/",
  github: "https://github.com/akashparthe24/akash-parthe24",
};
