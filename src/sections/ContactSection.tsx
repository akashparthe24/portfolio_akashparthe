import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Card from "../components/Card";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { contact } from "../data/portfolioData";

function ContactSection() {
  const contactItems = [
    {
      label: contact.email,
      href: `mailto:${contact.email}`,
      icon: FiMail,
    },
    {
      label: "LinkedIn",
      href: contact.linkedin,
      icon: FiLinkedin,
      external: true,
    },
    {
      label: "GitHub",
      href: contact.github,
      icon: FiGithub,
      external: true,
    },
  ];

  return (
    <SectionContainer id="contact">
      <Card className="contact-consistent-card" hover={false}>
        <div className="contact-consistent-header">
          <SectionTitle
            eyebrow="Contact"
            title="Let&apos;s Build Something Impactful"
            subtitle="Open to Business Analytics, AI Engineering, and Data Engineering opportunities. Let&apos;s connect on work where data, product, and AI create measurable business value."
          />
          <Button as="a" href={`mailto:${contact.email}`} className="contact-cta-btn">
            Let&apos;s Connect
          </Button>
        </div>

        <div className="contact-chips contact-chips-wide">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                className="contact-chip contact-chip-premium"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                <span className="contact-chip-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="contact-chip-body">
                  <span className="contact-chip-title">{item.label}</span>
                </span>
              </a>
            );
          })}
        </div>
      </Card>
    </SectionContainer>
  );
}

export default ContactSection;
