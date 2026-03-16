import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { hero } from "../data/portfolioData";

function HeroSection() {
  const primaryResume = hero.resumeLinks[0];

  return (
    <section id="top" className="hero section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Available for Full-Time opportunities</p>
          <h1>{hero.name}</h1>
          <p className="hero-title">{hero.title}</p>
          <p className="hero-tagline">{hero.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={primaryResume.href} target="_blank" rel="noopener noreferrer">
              <FiDownload aria-hidden="true" /> Download Resume
            </a>
            <a className="btn btn-ghost" href="#projects">
              View Projects
            </a>
          </div>

          <div className="socials" aria-label="social links">
            <a href={hero.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FiGithub aria-hidden="true" />
            </a>
            <a
              href={hero.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin aria-hidden="true" />
            </a>
            <a href={hero.socialLinks.email} aria-label="Send email">
              <FiMail aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <h2>Role Lens</h2>
          <ul>
            <li>Business Analytics: KPI frameworks, stakeholder alignment, decision intelligence</li>
            <li>AI Engineering: ML pipelines, RAG systems, explainability, evaluation</li>
            <li>Data Engineering: ETL architecture, cloud migration, performance optimization</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
