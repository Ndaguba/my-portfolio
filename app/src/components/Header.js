import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { LuSparkles, LuSun, LuMenu } from "react-icons/lu";

export default function Header({ onChatToggle, isChatOpen }) {

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="brand-link">
            <span className="brand-name">Emeka Ndaguba</span>
          </Link>
        </div>
        
        <div className="header-actions">
          <button className="book-call-btn">
            <span className="phone-icon">📞</span> Book a call
          </button>
          
          <div className="header-icons">
             <LuSun className="header-icon" />
             <LuMenu className="header-icon" onClick={onChatToggle} />
          </div>
        </div>
      </div>
    </header>
  );
}
