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
  const [projectCategory, setProjectCategory] = useState('professional');

  return (
    <div className="home-container">
      <div className={`main-content ${isPanelOpen ? 'panel-open' : ''}`}>
        <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />
        <main className="home-page">
          <div className="hero-section">
            <div className="intro-group">
              <span className="intro-primary">I'm Emeka, a Product Designer based in Winnipeg.</span>
              <h1 className='intro-secondary'>
                I'm a Product Designer with a passion for crafting intuitive digital experiences that blend form and function. I bring ideas to life through thoughtful design, collaboration, and a touch of creativity.
              </h1>
              <div className="intro-info">
                <div className="intro-meta">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="intro-icon" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                  <span className="intro-edu">BSc Computer Science @ University of Winnipeg</span>
                </div>
                <div className="intro-role">
                  <PiBriefcase className="role-icon" aria-hidden="true" />
                  <span className="intro-role-text">Currently leading design @ Bobo Health</span>
                </div>
              </div>
            </div>

          </div>

          <section className="portfolio-section">
            <div className="portfolio-header">
              <div className={`category-tabs ${projectCategory === 'personal' ? 'personal' : 'professional'}`}>
                <button
                  className={`tab ${projectCategory === 'professional' ? 'active' : ''}`}
                  onClick={() => setProjectCategory('professional')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="tab-icon" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                  Professional Work
                </button>
                <button
                  className={`tab ${projectCategory === 'personal' ? 'active' : ''}`}
                  onClick={() => setProjectCategory('personal')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="tab-icon" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  Personal Projects
                </button>
                <div className="tab-indicator" />
              </div>
              <div className="category-logos" aria-hidden="true">
                <img src={require('../assets/logo/bobo.png')} alt="Bobo" className="category-logo" />
                <img src={require('../assets/logo/Skip.png')} alt="Skip" className="category-logo" />
                <img src={require('../assets/logo/intuition.png')} alt="Intuition" className="category-logo category-logo--intuition" />
              </div>
            </div>

            <div className="portfolio-grid">
              <Link to="/development-pathways" className={`portfolio-item-wrapper link-wrapper ${projectCategory !== 'professional' ? 'hidden' : ''}`}>
                <div className="portfolio-item">
                  <img className="dp-image" src={require('../assets/profile/developmentPathways.png')} alt="Development Pathways" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">Development Pathways</p>
                  <p className="portfolio-company">Professional growth and learning platform</p>
                </div>
              </Link>
              <div className={`portfolio-item-wrapper ${projectCategory !== 'professional' ? 'hidden' : ''}`}>
                <div className="portfolio-item">
                  <img className="skip-image" src={require('../assets/profile/Skip.png')} alt="SKIP x WESTJET" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">SKIP x WESTJET</p>
                  <p className="portfolio-company">SKIPTHEDISHES</p>
                </div>
              </div>
              <Link to="/echo-design-system" className={`portfolio-item-wrapper link-wrapper ${projectCategory !== 'professional' ? 'hidden' : ''}`}>
                <div className={`portfolio-item`}> 
                  <img className="echo-image" src={require('../assets/profile/echo.png')} alt="echo Design System" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">echo Design System</p>
                  <p className="portfolio-company">Internal design system for Bobo App</p>
                </div>
              </Link>
              <div className={`portfolio-item-wrapper ${projectCategory !== 'personal' ? 'hidden' : ''}`}>
                <div className="portfolio-item">
                  <img className="forella-image" src={require('../assets/profile/forella.png')} alt="Forella" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">Forella AI</p>
                  <p className="portfolio-company">AI personal assistant in your pocket</p>
                </div>
              </div>
              <div className={`portfolio-item-wrapper ${projectCategory === 'professional' ? 'hidden' : ''}`}>
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
