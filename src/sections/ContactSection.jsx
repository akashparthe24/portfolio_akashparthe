import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { contact } from "../data/portfolioData";

function ContactSection() {
  return (
    <SectionContainer id="contact">
      <SectionTitle
        eyebrow="Contact"
        title="Let's Build Something Impactful"
        subtitle="Open to Business Analytics, AI Engineering, and Data Engineering Opportunities."
      />

      <div className="contact-grid">
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>
            <FiMail aria-hidden="true" /> {contact.email}
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <FiGithub aria-hidden="true" /> GitHub
          </a>
        </div>

        <form className="contact-form" action={`mailto:${contact.email}`} method="post" encType="text/plain">
          <p id="contact-form-note">
            This form opens your email client. You can also contact me directly via email above.
          </p>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" aria-describedby="contact-form-note" required />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
