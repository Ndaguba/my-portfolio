import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ activeSection = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    const el = document.getElementById(id);
    // Only intercept when the target section exists on this page.
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            <a href="/#about" className="nav-link">About</a>
            <a
              className="nav-link"
              href="https://drive.google.com/file/d/1t96-lAIvs9h8_11M5JLWqenU8XNJ6fOS/view?usp=sharing"
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
          <a href="/#about" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>About</a>
          <a
            className="mobile-menu-link"
            href="https://drive.google.com/file/d/1t96-lAIvs9h8_11M5JLWqenU8XNJ6fOS/view?usp=sharing"
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
