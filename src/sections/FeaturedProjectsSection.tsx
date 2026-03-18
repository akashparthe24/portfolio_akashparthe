import ProjectCard from "../components/ProjectCard";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { featuredProjects } from "../data/portfolioData";

function FeaturedProjectsSection() {
  const loopedProjects = [...featuredProjects, ...featuredProjects];

  return (
    <SectionContainer id="featured-projects">
      <SectionTitle
        eyebrow="Featured"
        title="High-Impact Work"
        subtitle="Projects where business outcomes and engineering execution were both critical."
      />

      <div className="featured-carousel" aria-label="Featured projects slider">
        <div className="featured-carousel-viewport">
          <div className="featured-carousel-track">
            {loopedProjects.map((project, index) => (
              <div key={`${project.title}-${index}`} className="featured-carousel-slide">
                <ProjectCard project={project} featured />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default FeaturedProjectsSection;
