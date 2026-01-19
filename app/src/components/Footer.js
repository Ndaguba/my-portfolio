import React from 'react';
import './Footer.css';
import { GrLinkedin } from 'react-icons/gr';
import { PiInstagramLogoBold } from 'react-icons/pi';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { MdOutlineLightMode } from 'react-icons/md';
import { LuMoon } from 'react-icons/lu';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="site-footer">
      <div className="theme-slider">
        <button
          className={`theme-option ${theme === 'system' ? 'active' : ''}`}
          onClick={() => setTheme('system')}
          aria-label="System theme"
        >
          <FiMonitor />
        </button>
        <button
          className={`theme-option ${theme === 'light' ? 'active' : ''}`}
          onClick={() => setTheme('light')}
          aria-label="Light theme"
        >
          <MdOutlineLightMode />
        </button>
        <button
          className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => setTheme('dark')}
          aria-label="Dark theme"
        >
          <LuMoon />
        </button>
      </div>

      <div className="footer-row">
        <div className="footer-left">DESIGNED + CODED BY EMEKA NDAGUBA</div>
        <div className="footer-right">
          <a href="#" aria-label="LinkedIn" className="social-icon"><GrLinkedin /></a>
          <a href="#" aria-label="Instagram" className="social-icon"><PiInstagramLogoBold /></a>
          <a href="#" aria-label="X (Twitter)" className="social-icon"><BsTwitterX /></a>
          <a href="#" aria-label="GitHub" className="social-icon"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}
