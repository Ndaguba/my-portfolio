import React from 'react';
import './Header.css';
import { LuSparkles } from "react-icons/lu";

export default function Header({ onChatToggle, isChatOpen }) {

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <span className="brand-name">EMEKA NDAGUBA</span>
        </div>
        <nav className="nav">
          <a href="/">WORK</a>
          <a href="/#projects">ABOUT</a>
          <a href="/#contact">RESUME</a>
          <a href="/#stories">STARTUP STORIES</a>
        </nav>
        <div className="actions">
          <p className='chat-trigger' onClick={onChatToggle}>
            <LuSparkles className="emekaLLM-icon" />
            {!isChatOpen && <span className="chat-trigger-text">EMEKALLM</span>}
          </p>
        </div>
      </div>
    </header>
  );
}
