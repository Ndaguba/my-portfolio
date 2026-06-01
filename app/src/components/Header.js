import React from 'react';
import './Header.css';

export default function Header({ activeSection = 'home' }) {
  const scrollToSection = (e, id) => {
    const el = document.getElementById(id);
    // Only intercept when the target section exists on this page.
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        </div>
      </div>
    </header>
  );
}
