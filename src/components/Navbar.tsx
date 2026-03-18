import { navLinks } from "../data/portfolioData";

function Navbar() {
  const scrollWithoutHash = (event, href) => {
    if (!href?.startsWith("#")) return;

    event.preventDefault();
    const sectionId = href.slice(1);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#top" className="brand" onClick={(event) => scrollWithoutHash(event, "#top")}>
          Akash Parthe
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(event) => scrollWithoutHash(event, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
