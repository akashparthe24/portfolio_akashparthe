import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
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
      <div className="contact-premium">
        <div className="contact-premium-layout">
          <div className="contact-intro">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s Build Something Impactful</h2>
            <p className="contact-description">
              Open to Business Analytics, AI Engineering, and Data Engineering opportunities. Let&apos;s connect on
              work where data, product, and AI create measurable business value.
            </p>

            <div className="contact-chips">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    className="contact-chip"
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <span className="contact-chip-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <form className="contact-premium-form" action={`mailto:${contact.email}`} method="post" encType="text/plain">
            <p id="contact-form-note">
              This form opens your email client. You can also contact me directly via email above.
            </p>

            <div className="contact-field">
              <input id="name" name="name" type="text" autoComplete="name" placeholder=" " required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="contact-field">
              <input id="email" name="email" type="email" autoComplete="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="contact-field">
              <textarea id="message" name="message" rows={5} aria-describedby="contact-form-note" placeholder=" " required />
              <label htmlFor="message">Message</label>
            </div>

            <Button type="submit" variant="primary" className="contact-submit-btn">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
