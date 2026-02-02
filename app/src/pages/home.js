import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBriefcase } from "react-icons/pi";
import './home.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import { IoLocationOutline } from "react-icons/io5";
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function Home() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="home-container">
      <div className={`main-content ${isPanelOpen ? 'panel-open' : ''}`}>
        <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />
        <main className="home-page">
          <div className="hero-section">
            <div className="intro-group">
              <span className="intro-primary">Emeka Ndaguba — Senior Product Designer</span>
              <h1 className='intro-secondary'>
                I design, build, and ship 0 → 1 products for startups and scale-ups. Currently at Bobo App (previously at SkipTheDishes). I focus on turning messy ideas into simple, scalable experiences.
              </h1>
            </div>

          </div>

          <section className="portfolio-section">
            <div className="portfolio-grid">
              <Link to="/development-pathways" className="portfolio-item-wrapper link-wrapper">
                <div className="portfolio-item">
                  <img className="dp-image" src={require('../assets/profile/developmentPathways.png')} alt="Development Pathways" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">Development Pathways</p>
                  <p className="portfolio-company">Professional growth and learning platform</p>
                </div>
              </Link>
              <Link to="/echo-design-system" className="portfolio-item-wrapper link-wrapper">
                <div className="portfolio-item">
                  <img className="echo-image" src={require('../assets/profile/echo.png')} alt="echo Design System" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">echo Design System</p>
                  <p className="portfolio-company">Internal design system for Bobo App</p>
                </div>
              </Link>
              <div className="portfolio-item-wrapper">
                <div className="portfolio-item">
                  <img className="skip-image" src={require('../assets/profile/Skip.png')} alt="SKIP x WESTJET" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">SKIP x WESTJET</p>
                  <p className="portfolio-company">SKIPTHEDISHES</p>
                </div>
              </div>
              <div className="portfolio-item-wrapper">
                <div className="portfolio-item">
                  <img className="forella-image" src={require('../assets/profile/forella.png')} alt="Forella" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">Forella AI</p>
                  <p className="portfolio-company">AI personal assistant in your pocket</p>
                </div>
              </div>
              <div className="portfolio-item-wrapper">
                <div className="portfolio-item">
                  <img className="ophir-image" src={require('../assets/profile/OPhirlabs.png')} alt="OPhir Labs" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">Ophir Labs AI</p>
                  <p className="portfolio-company">AI agents for HR</p>
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
