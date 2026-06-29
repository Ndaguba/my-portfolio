import React, { useState, useEffect } from 'react';
import './Header.css';
import heroProfile from '../assets/Emeka.png';

export default function Header({ activeSection = 'home', hidden = false }) {
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
    <header className={`site-header ${hidden && !menuOpen ? 'site-header--hidden' : ''}`}>
      <div className="header-shell">
        <a
          href="/"
          onClick={(e) => scrollToSection(e, 'home')}
          className="header-avatar-link"
          aria-label="Home"
        >
          <span className="header-avatar-wrap">
            <img src={heroProfile} alt="Emeka portrait" className="header-avatar" />
            <span className="header-avatar-dot" />
          </span>
        </a>
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
