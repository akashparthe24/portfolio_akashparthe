import Card from "../components/Card";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { certifications } from "../data/portfolioData";

function CertificationsSection() {
  return (
    <SectionContainer id="certifications">
      <SectionTitle eyebrow="Certifications" title="Validated Credentials" />
      <ul className="cert-list">
        {certifications.map((cert) => {
          if (typeof cert === "string") {
            return (
              <li key={cert}>
                <Card as="div" className="cert-card">
                  {cert}
                </Card>
              </li>
            );
          }

          return (
            <li key={cert.label}>
              <Card as="a" className="cert-card" href={cert.href} target="_blank" rel="noopener noreferrer">
                {cert.label}
              </Card>
            </li>
          );
        })}
      </ul>
    </SectionContainer>
  );
}

export default CertificationsSection;
