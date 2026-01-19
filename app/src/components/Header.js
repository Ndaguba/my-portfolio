import React from 'react';
import './Header.css';
import { useTheme } from '../context/ThemeContext';
import { LuSparkles } from "react-icons/lu";

export default function Header({ onChatToggle }) {
  const { theme, toggle } = useTheme();

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <span className="brand-name">EMEKA NDAGUBA</span>
          <span className="brand-role">PRODUCT DESIGNER + ENGINEER</span>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="actions">
            <p className='chat-trigger' onClick={onChatToggle}>
              <LuSparkles className="emekaLLM-icon" />EMEKALLM
            </p>
        </div>
      </div>
    </header>
  );
}
