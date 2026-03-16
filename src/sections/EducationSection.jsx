import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/portfolioData";

function EducationSection() {
  return (
    <SectionContainer id="education">
      <SectionTitle eyebrow="Education" title="Academic Foundation" />

      <div className="education-grid">
        {education.map((item) => (
          <article key={item.degree} className="education-card">
            <h3>{item.degree}</h3>
            <p className="education-meta">
              {item.school} | {item.location}
            </p>
            <p className="education-date">{item.timeline}</p>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

export default EducationSection;
