import React, { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { Nav_links, Personal_Info } from "../utils/constants";
import useScrollSpy, { scrollToSection } from "../../hooks/useScrollSpy";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(Nav_links.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__brand">
          <Code className="navbar__logo" />
          <button
            className="navbar__brandButton"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="home"
          >
            {Personal_Info?.name}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Primary">
          {Nav_links?.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`navbar__link ${
                activeSection === link.id ? "navbar__link--active" : ""
              }`}
              type="button"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          {!isMenuOpen && (
            <button
              className="navbar__cta"
              onClick={() => handleNavClick("contact")}
              type="button"
            >
              Hire me
            </button>
          )}

          {/* Mobile toggle (opcional) */}
          <button
            className="navbar__menuButton"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {isMenuOpen ? <X className="navbar__icon" /> : <Menu className="navbar__icon" />}
          </button>
        </div>
      </div>

      {/* Mobile menu (opcional) */}
      {isMenuOpen && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {Nav_links?.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`navbar__mobileLink ${
                activeSection === link.id ? "navbar__mobileLink--active" : ""
              }`}
              type="button"
            >
              {link.label}
            </button>
          ))}
           <button
            className="navbar__cta"
            onClick={() => handleNavClick("contact")}
            type="button"
          >
            Hire me
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
