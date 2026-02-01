import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { LuSparkles } from "react-icons/lu";

export default function Header({ onChatToggle, isChatOpen }) {

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="brand-link">
            <span className="brand-name">EMEKA NDAGUBA</span>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/">WORK</Link>
          <a href="/#projects">ABOUT</a>
          <a href="/#contact">RESUME</a>
          <p className='chat-trigger' onClick={onChatToggle}>
            <LuSparkles className="emekaLLM-icon" />
            {!isChatOpen && <span className="chat-trigger-text"></span>}
          </p>
        </nav>
        <div className="actions"></div>
      </div>
    </header>
  );
}
