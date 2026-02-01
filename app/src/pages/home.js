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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for 3s, then hide loader
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="home-container">
      <div className={`main-content ${isPanelOpen ? 'panel-open' : ''}`}>
        <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />
        <main className="home-page">
          <p className='intro-message'>I'm Emeka, a pr<span className="o-image"><img src={require('../assets/Emeka.png')} alt="o" /></span> duct<br></br> designer that <i>writes code.</i></p>
          <section className="profile-info">
            <div className="profile-column">
              <PiBriefcase className='profile-icon' />
              <p className="profile-value">Senior product designer @ bobo app, Prevoisly at SKIP</p>
            </div>
            <div className="profile-column">
              <IoLocationOutline className='profile-icon' />
              <p className="profile-value">Winnipeg, Manitoba, Canada</p>
            </div>
          </section>

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
              <div className="portfolio-item-wrapper">
                <div className="portfolio-item">
                  <img className="mossy-image" src={require('../assets/profile/mossyAI.png')} alt="Mossy AI" />
                </div>
                <div className="portfolio-label">
                  <p className="portfolio-project">Mossy AI bookkeeping</p>
                  <p className="portfolio-company">MOSSY AI</p>
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
