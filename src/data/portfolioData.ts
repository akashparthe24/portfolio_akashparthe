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
  title: "Business Analyst | AI Engineer | Data Engineer",
  tagline:
    "I translate business goals into data products, intelligent systems, and reliable pipelines that improve decision speed and impact.",
  location: "Pittsburgh, PA",
  socialLinks: {
    github: "https://github.com/akashparthe24/akash-parthe24",
    linkedin: "https://www.linkedin.com/in/akashparthe/",
    email: "mailto:aparthe@tepper.cmu.edu",
  },
};

export const about = {
  summary:
    "I am an MS in Business Analytics candidate at Carnegie Mellon University with 3+ years of industry experience working at the intersection of business strategy, data analytics, and AI systems. I specialize in translating ambiguous business problems into structured analytics solutions and measurable KPIs. My work spans building scalable data pipelines, BI dashboards, and AI applications including computer vision and retrieval-augmented systems. I focus on delivering practical, data-driven solutions that help organizations make faster, more informed decisions.",
  highlights: [],
};

export const skillCategories = [
  {
    title: "Business Analytics",
    items: [
      "SQL",
      "Excel",
      "Power BI",
      "Tableau",
      "Stakeholder Communication",
      "Business Process Improvement",
      "User Story Development",
      "Unified Modeling Language (UML)",
      "Process Analysis",
      "KPI Design",
      "Financial & Operations Analytics",
    ],
  },
  {
    title: "AI / Machine Learning",
    items: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "RAG Systems",
      "LLM Integration",
      "GenAI-Assisted SQL Modernization",
      "Prompt Engineering",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "ETL Pipelines",
      "Data Warehousing",
      "Spark / PySpark",
      "Databricks",
      "Apache Airflow",
      "Data Modeling",
      "Azure Data Factory",
      "Azure Synapse",
      "ADLS",
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

export const featuredProjects = [
  {
    title: "Angel Protection System",
    category: "AI + Product Analytics",
    description:
      "Led capstone delivery of a firearm detection system from requirements to deployment milestones. Built a real-time computer vision pipeline with explainable AI outputs for human-in-the-loop monitoring.",
    impact: ["20+ FPS inference", "20% higher precision", "25% fewer false positives"],
    tech: ["Amazon Rekognition", "Amazon Bedrock", "Python", "Transfer Learning", "OpenCV"],
    github: "https://github.com/akashparthe24/akash-parthe24",
    demo: "",
  },
  {
    title: "Cricket Player RAG Chatbot",
    category: "AI / NLP",
    description:
      "Designed and deployed an end-to-end RAG system on unstructured PDF data with robust retrieval validation and hallucination mitigation.",
    impact: ["Grounded LLM responses", "CPU-aware inference tuning", "Deployed on Hugging Face Spaces"],
    tech: ["LangChain", "FAISS", "Transformers", "Python", "Hugging Face Spaces"],
    github: "https://github.com/akashparthe24/akash-parthe24",
    demo: "",
  },
  {
    title: "Smart Validation Tool",
    category: "Data Engineering + Quality",
    description:
      "Engineered a multiprocessing Python validation system to compare source and target datasets at scale for migration reliability.",
    impact: [
      "90% reduction in manual validation effort",
      "10M+ records validated in ~20 minutes",
      "30% faster release cycles",
    ],
    tech: ["Python", "Multiprocessing", "SQL", "Azure Data Engineering"],
    github: "https://github.com/akashparthe24/akash-parthe24",
    demo: "",
  },
];

export const projectsByCategory = [
  {
    category: "AI Projects",
    projects: [
      {
        title: "Angel Protection System",
        description:
          "Real-time computer vision + explainable AI for safety detection with measurable precision gains.",
        tech: ["Python", "OpenCV", "Amazon Rekognition", "Bedrock"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
      {
        title: "Cricket Player RAG Chatbot",
        description:
          "Document-grounded chatbot with retrieval pipelines and post-processing for reliability.",
        tech: ["LangChain", "FAISS", "LLMs", "Hugging Face"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
    ],
  },
  {
    category: "Data Engineering Projects",
    projects: [
      {
        title: "Metadata-Driven Ingestion Framework",
        description:
          "Built a scalable ingestion architecture supporting full/incremental loads to reduce manual onboarding effort.",
        tech: ["Azure Data Factory", "PySpark", "T-SQL", "Fabric"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
      {
        title: "Semantic Model Migration Automation",
        description:
          "Automated migration from Import/DirectQuery to Direct Lake with improved performance and lower migration errors.",
        tech: ["Python", "Microsoft Fabric", "Power BI", "SQL"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
      {
        title: "Smart Validation Tool",
        description:
          "Built a multiprocessing validation utility to verify source-target parity across large-scale migration datasets.",
        tech: ["Python", "SQL", "Data Validation", "Azure"],
        github: "https://github.com/akashparthe24/akash-parthe24",
        demo: "",
      },
      {
        title: "Unified FinOps Observability Platform",
        description:
          "Created cross-platform cost and operations dashboards for Fabric, Synapse, and ADF to improve cloud efficiency.",
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
    role: "Data Engineer",
    company: "LTIMindtree",
    location: "Mumbai, India",
    timeline: "Oct 2022 - Aug 2025",
    bullets: [
      "Accelerated SQL Server and Snowflake migration to Azure Synapse and Microsoft Fabric by 50% with automated object/script transfer and GenAI-assisted legacy SQL interpretation.",
      "Reduced manual validation effort by 90% by building a multiprocessing Python Smart Validation Tool that verified 10M+ records in ~20 minutes and shortened release cycles by 30%.",
      "Streamlined RDBMS-to-ADLS ingestion by 40% with a metadata-driven, dynamically partitioned framework supporting millions of daily records.",
      "Improved cost visibility and operational efficiency by 10-15% by building a unified FinOps observability platform across Fabric, Synapse, and ADF.",
      "Reduced data quality incidents by 30% through a self-service framework with autonomous scheduling and anomaly detection.",
      "Cut semantic model migration time by 60% by automating conversion from Import/DirectQuery to Direct Lake.",
    ],
    tech: ["Microsoft Fabric", "Azure Synapse", "ADF", "PySpark", "T-SQL", "Power BI", "Python", "Databricks"],
  },
  {
    role: "Graduate Engineering Trainee",
    company: "LTIMindtree",
    location: "Mumbai, India",
    timeline: "Jul 2022 - Sep 2022",
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
