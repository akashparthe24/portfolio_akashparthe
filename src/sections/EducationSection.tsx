import Card from "../components/Card";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/portfolioData";
import { GraduationCap } from "lucide-react";

function EducationSection() {
  return (
    <SectionContainer id="education">
      <SectionTitle eyebrow="Education" title="Academic Foundation" />

      <div className="education-grid">
        {education.map((item) => (
          <Card key={item.degree} className="education-card">
            <div className="education-card-top">
              <span className="education-icon" aria-hidden="true">
                <GraduationCap size={16} />
              </span>
              <p className="education-date">{item.timeline}</p>
            </div>

            <h3 className="education-degree">{item.degree}</h3>
            <p className="education-school">{item.school}</p>
            <p className="education-location">{item.location}</p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

export default EducationSection;
