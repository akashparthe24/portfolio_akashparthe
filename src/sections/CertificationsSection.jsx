import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { certifications } from "../data/portfolioData";

function CertificationsSection() {
  return (
    <SectionContainer id="certifications">
      <SectionTitle eyebrow="Certifications" title="Validated Credentials" />
      <ul className="cert-list">
        {certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </SectionContainer>
  );
}

export default CertificationsSection;
