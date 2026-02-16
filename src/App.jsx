import { useEffect, useMemo, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { target: 3, label: "Years of Experience" },
  { target: 90, label: "Validation Time Reduced %" },
  { target: 60, label: "Model Migration Faster %" },
  { target: 20, label: "Real-time CV FPS +" },
];

const projects = [
  {
    category: "ml-ai",
    tag: "MSBA Capstone",
    title: "Angel Protection System",
    description:
      "Real-time firearm detection pipeline with transfer learning, Amazon Rekognition, and LLM explainability.",
    impact: "20+ FPS inference with reduced false positives.",
  },
  {
    category: "ml-ai",
    tag: "Personal Project",
    title: "Cricket Player RAG Chatbot",
    description:
      "End-to-end RAG system over unstructured PDF corpora using embeddings and FAISS retrieval.",
    impact: "Improved reliability with hallucination mitigation and CPU tuning.",
  },
  {
    category: "data",
    tag: "Enterprise Platform",
    title: "Smart Validation Tool",
    description:
      "High-throughput validation engine for cross-platform migration checks with Python multiprocessing.",
    impact: "90% lower manual validation time and faster releases.",
  },
  {
    category: "data",
    tag: "Enterprise Platform",
    title: "Metadata-driven Ingestion Framework",
    description:
      "Dynamic partition-aware framework for RDBMS-to-ADLS/Fabric ingestion at scale.",
    impact: "40% faster onboarding of new data sources.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [projectFilter, setProjectFilter] = useState("all");
  const year = new Date().getFullYear();

  const visibleProjects = useMemo(() => {
    if (projectFilter === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === projectFilter);
  }, [projectFilter]);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const statEls = document.querySelectorAll(".stat-number");
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const el = entry.target;
          const target = Number(el.getAttribute("data-target"));
          let current = 0;
          const duration = 1200;
          const stepTime = 20;
          const increment = Math.max(1, Math.round((target * stepTime) / duration));

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = target >= 20 ? `${current}+` : `${current}`;
          }, stepTime);

          observer.unobserve(el);
        });
      },
      { threshold: 0.45 }
    );

    statEls.forEach((el) => counterObserver.observe(el));
    return () => counterObserver.disconnect();
  }, []);

  const handleProjectMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  return (
    <>
      <div className="ambient ambient-a"></div>
      <div className="ambient ambient-b"></div>
      <div className="ambient ambient-c"></div>

      <header className="topbar">
        <a className="brand" href="#home">
          Akash Parthe
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="home">
        <section className="hero reveal">
          <div className="hero-grid">
            <div className="hero-panel">
              <p className="eyebrow">Data Engineer • Analytics • AI Systems</p>
              <h1>Building reliable data products with engineering depth and business impact.</h1>
              <p className="hero-copy">
                I design cloud-native data pipelines, migration frameworks, and AI-assisted
                analytics systems across Azure, Microsoft Fabric, Databricks, Python, SQL,
                and Power BI.
              </p>

              <div className="hero-actions">
                <a href="mailto:aparthe@tepper.cmu.edu" className="btn btn-solid">
                  Hire Me
                </a>
                <a
                  href="https://www.linkedin.com/in/akashparthe"
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/akashparthe24"
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="portrait-panel">
              <img src="/profile-photo.png" alt="Akash Parthe profile photo" />
              <div className="availability">Open to Data Engineering and Analytics roles</div>
            </div>
          </div>

          <div className="stats-row">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <p className="stat-number" data-target={stat.target}>
                  0
                </p>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>Profile Snapshot</h2>
          </div>

          <div className="bento">
            <article className="tile tile-wide">
              <h3>Who I Am</h3>
              <p>
                Data Engineer with 3 years of enterprise delivery experience, currently pursuing
                MS in Business Analytics at Carnegie Mellon. I bridge platform engineering with
                analytics strategy to build systems that are fast, trusted, and decision-ready.
              </p>
            </article>
            <article className="tile">
              <h3>Current Program</h3>
              <p>MS in Business Analytics, Carnegie Mellon University (2025-2026).</p>
            </article>
            <article className="tile">
              <h3>Certifications</h3>
              <p>DP-700, PL-300, Databricks Data Engineer Associate.</p>
            </article>
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects and Product Engineering</h2>
          </div>

          <div className="filter-bar">
            <button
              className={`filter-btn ${projectFilter === "all" ? "active" : ""}`}
              onClick={() => setProjectFilter("all")}
            >
              All
            </button>
            <button
              className={`filter-btn ${projectFilter === "data" ? "active" : ""}`}
              onClick={() => setProjectFilter("data")}
            >
              Data Engineering
            </button>
            <button
              className={`filter-btn ${projectFilter === "ml-ai" ? "active" : ""}`}
              onClick={() => setProjectFilter("ml-ai")}
            >
              ML / AI
            </button>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article
                className="project-card"
                key={project.title}
                onMouseMove={handleProjectMove}
              >
                <p className="tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="impact">{project.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>Professional Timeline</h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <h3>Data Engineer • LTIMindtree</h3>
              <p className="meta">Navi Mumbai | Jun 2022 - Aug 2025</p>
              <ul>
                <li>50% faster SQL Server/Snowflake migration to Synapse/Fabric via automation.</li>
                <li>90% reduction in validation effort with a Python multiprocessing framework.</li>
                <li>40% faster onboarding through metadata-driven ingestion architecture.</li>
                <li>Unified FinOps observability improving cost and operational visibility.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <h3>MSBA Student Ambassador • Carnegie Mellon University</h3>
              <p className="meta">Pittsburgh | Sep 2025 - Present</p>
              <ul>
                <li>Representing the program through webinars, tours, and prospective student sessions.</li>
                <li>Helping incoming students make informed academic and career decisions.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <h3>Business Analyst Roles • Digifuse &amp; Make Me Builder</h3>
              <p className="meta">Mumbai | 2021</p>
              <ul>
                <li>Delivered campaign and product analysis to improve engagement and usability.</li>
                <li>Converted business requirements into scalable implementation plans.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">Capabilities</p>
            <h2>Stack and Domains</h2>
          </div>

          <div className="skills-wrap">
            <article className="skills-card">
              <h3>Cloud & Data Platforms</h3>
              <div className="chips">
                <span>Microsoft Fabric</span>
                <span>Azure Synapse</span>
                <span>Azure Data Factory</span>
                <span>ADLS</span>
                <span>Databricks</span>
                <span>Snowflake</span>
              </div>
            </article>

            <article className="skills-card">
              <h3>Engineering & Programming</h3>
              <div className="chips">
                <span>Python</span>
                <span>SQL</span>
                <span>PySpark</span>
                <span>T-SQL</span>
                <span>REST APIs</span>
                <span>Airflow</span>
              </div>
            </article>

            <article className="skills-card">
              <h3>Analytics & AI</h3>
              <div className="chips">
                <span>Power BI</span>
                <span>Tableau</span>
                <span>RAG</span>
                <span>LLMs</span>
                <span>Computer Vision</span>
                <span>FAISS</span>
              </div>
            </article>

            <article className="skills-card">
              <h3>Beyond Work</h3>
              <div className="chips">
                <span>Photography</span>
                <span>Videography</span>
                <span>Cooking</span>
                <span>Reading</span>
                <span>Traveling</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Let’s Build Something Valuable</h2>
          </div>

          <p className="contact-copy">
            Open to Data Engineering, Analytics, and AI-focused opportunities.
          </p>

          <div className="contact-grid">
            <a href="mailto:aparthe@tepper.cmu.edu" className="contact-card contact-primary">
              aparthe@tepper.cmu.edu
            </a>
            <a href="tel:+14124786687" className="contact-card">
              +1 (412) 478-6687
            </a>
            <a
              href="https://www.linkedin.com/in/akashparthe"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>Copyright © {year} Akash Parthe. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
