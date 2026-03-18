import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { projectsByCategory } from "../data/portfolioData";

function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <SectionTitle
        eyebrow="Projects"
        title="Portfolio by Domain"
        subtitle="Grouped to make recruiter review fast and role-aligned."
      />

      <div className="project-categories">
        {projectsByCategory.map((group) => (
          <Card key={group.category} className="project-category-block" hover={false}>
            <h3>{group.category}</h3>
            <div className="project-grid">
              {group.projects.map((project) => (
                <ProjectCard key={project.title} project={project} showLinks={false} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ProjectsSection;
