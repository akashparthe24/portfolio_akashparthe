import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const navMenuId = "primary-navigation";

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#top" className="brand" onClick={closeMenu}>
          Akash Parthe
        </a>

        <nav id={navMenuId} className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className="menu-btn"
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls={navMenuId}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
