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
  resumeLinks: [
    // The first item is used as the primary CTA in the hero section.
    {
      label: "Unified Resume",
      href: "/resumes/Business_Analyst_Akash_Parthe.pdf",
    },
    { label: "Business Analyst Resume", href: "/resumes/Business_Analyst_Akash_Parthe.pdf" },
    { label: "AI Engineer Resume", href: "/resumes/ML_Akash_Parthe.pdf" },
    { label: "Data Engineer Resume", href: "/resumes/Data_Engineer_Akash_Parthe.pdf" },
  ],
};

export const about = {
  summary:
    "I am an MS in Business Analytics candidate at Carnegie Mellon University with 3+ years of industry experience building analytics products and cloud-scale data solutions. My work sits at the intersection of business strategy, AI systems, and modern data engineering.",
  highlights: [
    "Turn ambiguous stakeholder goals into measurable analytics roadmaps and KPI-driven decisions.",
    "Build end-to-end AI solutions including computer vision and RAG systems with explainable outputs.",
    "Design metadata-driven ETL architectures and cloud data models for scalable reporting and governance.",
  ],
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
      "Prompt Engineering",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "ETL Pipelines",
      "Data Warehousing",
      "Spark / PySpark",
      "Apache Airflow",
      "Data Modeling",
      "Azure Data Factory",
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
    ],
  },
];

export const experience = [
  {
    role: "Data Engineer",
    company: "LTIMindtree",
    location: "Mumbai, India",
    timeline: "Jun 2022 - Aug 2025",
    bullets: [
      "Architected MS Fabric pipelines and KPI models that reduced reporting latency by 30% and enabled real-time executive visibility.",
      "Developed metadata-driven ingestion and data quality systems that reduced onboarding effort by 40% and improved data reliability by 50%.",
      "Automated SQL Server/Snowflake migration to Azure Synapse and Microsoft Fabric, improving migration productivity by up to 50%.",
      "Built FinOps observability pipelines and BI dashboards that helped reduce Azure cloud costs by 20%.",
    ],
    tech: ["Microsoft Fabric", "Azure Synapse", "ADF", "PySpark", "T-SQL", "Power BI"],
  },
  {
    role: "Business Analyst Intern - Marketing & Advertising",
    company: "Digifuse",
    location: "Mumbai, India",
    timeline: "Apr 2021 - Jun 2021",
    bullets: [
      "Delivered market and campaign insights that informed optimization strategies and improved campaign effectiveness by 20%.",
    ],
    tech: ["Campaign Analytics", "Market Research", "Stakeholder Reporting"],
  },
  {
    role: "Business Analyst - I",
    company: "Make Me Builder",
    location: "Mumbai, India",
    timeline: "Jan 2021 - Apr 2021",
    bullets: [
      "Developed web workflows that improved product usability and increased customer engagement by 25%.",
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
  "Microsoft Certified: Fabric Analytics Engineer Associate (DP-700)",
  "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
  "Databricks Certified Data Engineer Associate",
];

export const contact = {
  email: "aparthe@tepper.cmu.edu",
  linkedin: "https://www.linkedin.com/in/akashparthe/",
  github: "https://github.com/akashparthe24/akash-parthe24",
};
