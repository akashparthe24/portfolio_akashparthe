import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/portfolioData";

function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionTitle
        eyebrow="Experience"
        title="Career Timeline"
        subtitle="Roles focused on analytics delivery, cloud data modernization, and measurable business impact."
      />

      <div className="timeline">
        {experience.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default ExperienceSection;
