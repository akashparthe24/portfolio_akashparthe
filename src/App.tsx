import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import { siteMetadata } from "./data/portfolioData";
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
  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <div className="site-bg">
      <div className="bg-base" aria-hidden="true" />
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-blob bg-blob-top" aria-hidden="true" />
      <div className="bg-blob bg-blob-right" aria-hidden="true" />
      <div className="bg-blob bg-blob-left" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />

      <div className="site-content">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
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
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
