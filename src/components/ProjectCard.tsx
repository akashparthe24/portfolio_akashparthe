import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { ProjectEntry } from "@/data/portfolioData";
import Card from "./Card";
import Button from "./Button";

type ProjectCardProps = {
  project: ProjectEntry;
  featured?: boolean;
  showLinks?: boolean;
};

function ProjectCard({ project, featured = false, showLinks = true }: ProjectCardProps) {
  // Reusable card supports both featured and grouped project layouts.
  return (
    <Card className={`project-card ${featured ? "featured" : ""}`}>
      {project.category ? <p className="project-category">{project.category}</p> : null}
      <h3>{project.title}</h3>
      <p className="project-summary">{project.impact}</p>

      <ul className="project-story-list">
        <li>
          <span>Business Challenge:</span> {project.problem}
        </li>
        <li>
          <span>Solution Approach:</span> {project.approach}
        </li>
        <li>
          <span>Why It Matters:</span> {project.whyItMatters}
        </li>
      </ul>

      <div className="project-highlights">
        <p className="project-highlights-title">Highlights</p>
        <ul>
          <li>
            <span>Impact:</span> {project.highlights.impact}
          </li>
          <li>
            <span>Scale:</span> {project.highlights.scale}
          </li>
          <li>
            <span>Tools:</span> {project.highlights.tools}
          </li>
        </ul>
      </div>

      {project.tech?.length ? (
        <ul className="chip-list">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      ) : null}

      {showLinks ? (
        <div className="project-links">
          {!featured ? (
            <Button
              as="a"
              variant="inline"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
            >
              <FiGithub /> Code
            </Button>
          ) : null}
          {project.demo ? (
            <Button
              as="a"
              variant="inline"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${project.title}`}
            >
              <FiExternalLink /> Demo
            </Button>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}

export default ProjectCard;
