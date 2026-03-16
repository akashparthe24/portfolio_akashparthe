import ProjectCard from "../components/ProjectCard";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { featuredProjects } from "../data/portfolioData";

function FeaturedProjectsSection() {
  return (
    <SectionContainer id="featured-projects">
      <SectionTitle
        eyebrow="Featured"
        title="High-Impact Work"
        subtitle="Projects where business outcomes and engineering execution were both critical."
      />

      <div className="project-grid featured-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </div>
    </SectionContainer>
  );
}

export default FeaturedProjectsSection;
