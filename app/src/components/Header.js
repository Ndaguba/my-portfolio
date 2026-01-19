import React from 'react';
import './Header.css';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <span className="brand-name">EMEKA NDAGUBA</span>
          <span className="brand-rols">PRODUCT DESIGNER + ENGINEER</span>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="actions">
          <button
            className="theme-toggle-button"
            onClick={toggle}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
