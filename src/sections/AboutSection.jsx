import SectionContainer from "../components/SectionContainer";
import SectionLayout from "../components/SectionLayout";
import SectionTitle from "../components/SectionTitle";
import { about } from "../data/portfolioData";

function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionTitle
        eyebrow="About"
        title="Business Insight Backed by Engineering Depth"
        subtitle="I combine product thinking, analytics rigor, and implementation speed to deliver outcomes end-to-end."
      />

      <SectionLayout twoColumn>
        <p className="about-bio">{about.summary}</p>

        <ul className="about-points">
          {about.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </SectionLayout>
    </SectionContainer>
  );
}

export default AboutSection;
