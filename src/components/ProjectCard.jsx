import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard({ project, featured = false, showLinks = true }) {
  // Reusable card supports both featured and grouped project layouts.
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      {project.category ? <p className="project-category">{project.category}</p> : null}
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.impact ? (
        <ul className="impact-list">
          {project.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      <ul className="chip-list">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {showLinks ? (
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title}`}
          >
            <FiGithub /> Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${project.title}`}
            >
              <FiExternalLink /> Demo
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export default ProjectCard;
