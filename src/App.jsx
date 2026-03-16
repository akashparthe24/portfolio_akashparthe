import Navbar from "./components/Navbar";
import { contact, siteMetadata } from "./data/portfolioData";
import { useThemePreference } from "./hooks/useThemePreference";
import AboutSection from "./sections/AboutSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import FeaturedProjectsSection from "./sections/FeaturedProjectsSection";
import GithubActivitySection from "./sections/GithubActivitySection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  // Theme preference persists between sessions for a consistent UX.
  const { theme, toggleTheme } = useThemePreference();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <GithubActivitySection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {siteMetadata.name}
          </p>
          <p>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
