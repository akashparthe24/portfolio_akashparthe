import Card from "../components/Card";
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
      />

      <SectionLayout twoColumn className="about-layout">
        <Card className="about-bio-card" hover={false}>
          <p className="about-bio">{about.summary}</p>
        </Card>

        <Card className="about-focus-card">
          <h3>Core Focus Areas</h3>
          <ul className="about-points">
            {(about.highlights?.length
              ? about.highlights
              : [
                  "Translate complex goals into KPI-driven analytics plans.",
                  "Build production-ready AI workflows with reliable evaluation.",
                  "Design scalable data systems that improve decision speed.",
                ]
            ).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Card>
      </SectionLayout>
    </SectionContainer>
  );
}

export default AboutSection;
