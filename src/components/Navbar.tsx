import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import NavItem from "./NavItem";
import { navLinks } from "../data/portfolioData";

function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const visibilityRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const sections = navLinks
      .map((link) => link.href.replace(/^#/, ""))
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return undefined;

    const updateActiveSection = () => {
      if (window.scrollY <= 80) {
        setActiveSection(null);
        return;
      }

      let bestSection: string | null = null;
      let bestRatio = -1;

      for (const section of sections) {
        const ratio = visibilityRef.current[section.id] ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestSection = section.id;
        }
      }

      if (bestSection && bestRatio > 0) {
        setActiveSection(bestSection);
        return;
      }

      const centerY = window.innerHeight * 0.5;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= centerY && rect.bottom >= centerY) {
          setActiveSection(section.id);
          return;
        }
      }

      setActiveSection(null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibilityRef.current[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        }
        updateActiveSection();
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const scrollWithoutHash = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href?.startsWith("#")) return;

    event.preventDefault();
    const sectionId = href.slice(1);
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection(null);
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="site-header">
      <div className="nav-container nav-wrap">
        <a href="#top" className="brand" onClick={(event) => scrollWithoutHash(event, "#top")}>
          Akash Parthe
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              active={activeSection === link.href.slice(1)}
              onClick={(event) => {
                scrollWithoutHash(event, link.href);
              }}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
