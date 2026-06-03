import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ activeSection = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    const el = document.getElementById(id);
    // Only intercept when the target section exists on this page.
    if (el) {
      e.preventDefault();
      // For "home", scroll the page container fully to the top (the hero has
      // top padding under the fixed header, so scrollIntoView leaves a gap).
      if (id === 'home') {
        const scroller = document.querySelector('.main-content');
        if (scroller) {
          scroller.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMenuOpen(false);
  };

  // Close the mobile menu when the viewport grows back to desktop width.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 920) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="site-header">
      <div className="header-shell">
        <div className="header-right">
          <nav className="header-nav" aria-label="Primary">
            <a
              href="/"
              onClick={(e) => scrollToSection(e, 'home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a
              href="/#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
            >
              Projects
            </a>
            <a
              href="/#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a
              className="nav-link"
              href="https://docs.google.com/document/d/1iJj-DzZBh493NrEzz_oyp5eKeDDIDJy65WbonwRHjpI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile">
          <a
            href="/"
            onClick={(e) => scrollToSection(e, 'home')}
            className={`mobile-menu-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a
            href="/#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className={`mobile-menu-link ${activeSection === 'work' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a
            href="/#about"
            className="mobile-menu-link"
            onClick={(e) => { scrollToSection(e, 'about'); setMenuOpen(false); }}
          >
            About
          </a>
          <a
            className="mobile-menu-link"
            href="https://docs.google.com/document/d/1iJj-DzZBh493NrEzz_oyp5eKeDDIDJy65WbonwRHjpI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
