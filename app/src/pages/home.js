import React, { useState } from 'react';
import './home.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';

export default function Home() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="home-container">
      <div className={`main-content ${isPanelOpen ? 'panel-open' : ''}`}>
        <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} />
        <main className="home-page">
          <p className='intro-message'>I'm Emeka, a product<br></br> designer that writes code.</p>
        </main>
      </div>
      <ChatPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </div>
  );
}
