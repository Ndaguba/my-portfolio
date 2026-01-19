import React, { useState } from 'react';
import './home.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';

export default function Home() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="home-container">
      <div className={`main-content ${isPanelOpen ? 'panel-open' : ''}`}>
        <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />
        <main className="home-page">
          <p className='intro-message'>I'm Emeka, a pr<span className="o-image"><img src={require('../assets/Emeka.png')} alt="o" /></span> duct<br></br> designer that <i>writes code.</i></p>

          <section className="portfolio-section">
            <div className="portfolio-grid">
              <div className="portfolio-item-wrapper">
                <div className="portfolio-item" />
                <div className="portfolio-label">
                  <p className="portfolio-project">AI PERSONAL ASSISTANT IN YOUR POCKET</p>
                  <p className="portfolio-company">FORELLA AI</p>
                </div>
              </div>
              <div className="portfolio-item-wrapper">
                <div className="portfolio-item" />
                <div className="portfolio-label">
                  <p className="portfolio-project">CHILDCARE PAEDIATRIC ASSISTANT</p>
                  <p className="portfolio-company">BOBO APP</p>
                </div>
              </div>
              <div className="portfolio-item-wrapper">
                <div className="portfolio-item" />
                <div className="portfolio-label">
                  <p className="portfolio-project">AI AGENTS FOR HR</p>
                  <p className="portfolio-company">OPHIR LABS</p>
                </div>
              </div>
              <div className="portfolio-item-wrapper">
                <div className="portfolio-item" />
                <div className="portfolio-label">
                  <p className="portfolio-project">STRATEGIC PARTNERSHIPS</p>
                  <p className="portfolio-company">SKIPTHEDISHES</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <ChatPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </div>
  );
}
