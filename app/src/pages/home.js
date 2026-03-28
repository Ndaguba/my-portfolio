import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBriefcase } from "react-icons/pi";
import './home.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import { IoLocationOutline } from "react-icons/io5";
import Footer from '../components/Footer';

export default function Home() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const renderTitle = () => {
    const lines = [
      "I design products",
      "for impact and scale"
    ];
    let totalCharIndex = 0;
    return lines.map((line, lineIndex) => (
      <span key={lineIndex} style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.2em', marginBottom: '-0.2em' }}>
        {line.split('').map((char, charIndex) => {
          const delay = totalCharIndex * 0.05;
          totalCharIndex++;
          return (
            <span 
              key={charIndex} 
              className="char" 
              style={{ animationDelay: `${delay}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </span>
    ));
  };

  const projects = [
    {
      id: "poppy-ai",
      title: "Poppy AI",
      company: "Pediatric AI Chatbot",
      image: require('../assets/profile/Frame 23458.png'),
      category: "B2C",
      imgClass: "poppy-image"
    },
    {
      id: "order-tracker",
      title: "Order Tracker Redesign",
      company: "Real-time logistics and delivery tracking",
      image: require('../assets/profile/Delivery-tracker.png'),
      category: "B2B",
      imgClass: "order-tracker-image"
    }
  ];

  return (
    <div className="home-container">
      <div className="main-content">
        <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />
        <main className="home-page">
          <div className="hero-section">
            <div className="hero-main-content">
              <h1 className="hero-title">
                {renderTitle()}
              </h1>
              
              <div className="hero-subtext-group">
                <p className="hero-description">
                  Hey - I’m Emeka. Product designer currently building the future of pediatric care at Bobo Health. Previously at SkipTheDishes.
                </p>
                <div className="hero-education-row">
                    <p className="hero-education">Based in Canada</p>
                </div>
              </div>
            </div>

          </div>

          <section className="portfolio-section">
            <div className="portfolio-grid">
              {projects.map(project => (
                project.link ? (
                  <Link key={project.id} to={project.link} className="portfolio-item-wrapper link-wrapper">
                    <div className={`portfolio-item ${project.id}-item`}>
                      {project.image && <img className={project.imgClass} src={project.image} alt={project.title} />}
                    </div>
                    <div className="portfolio-label">
                      <p className="portfolio-project">{project.title}</p>
                      <p className="portfolio-company">{project.company}</p>
                    </div>
                  </Link>
                ) : (
                  <div key={project.id} className="portfolio-item-wrapper">
                    <div className={`portfolio-item ${project.id}-item`}>
                      {project.image && <img className={project.imgClass} src={project.image} alt={project.title} />}
                    </div>
                    <div className="portfolio-label">
                      <p className="portfolio-project">{project.title}</p>
                      <p className="portfolio-company">{project.company}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </section>

          <section className="about-section">
            <div className="about-left">
              <h2 className="about-title">About</h2>
            </div>
            <div className="about-right">
              <p className="about-text">
                I'm Emeka, a Product Designer based in Winnipeg with a background in Computer Science. 
                Currently at <span className="highlight-green">Bobo Health</span> leading the design of AI-powered pediatric care solutions. 
                I specialize in building B2C consumer apps that feel human and scale easily.
              </p>
              <p className="about-text">
                I take pride in creating thoughtful, user-centered products that deliver meaningful business results by bridging the gap between complex engineering and simple user experiences.
              </p>
              <p className="about-text">
                Before Bobo Health, I worked at <span className="highlight-green">SkipTheDishes</span>, helping optimize courier and merchant experiences for millions of users across Canada.
              </p>
              <p className="about-text">
                In my downtime, I enjoy experimenting with new web technologies and exploring the intersection of design and code.
              </p>

              <div className="experience-section">
                <div className="experience-header">
                  <span className="experience-tag">Experience</span>
                </div>
                <div className="experience-list">
                  <ExperienceItem 
                    company="Bobo Health"
                    role="Product Designer"
                    date="Aug 2023 - Present"
                    description="Leading the design of AI-powered pediatric care solutions. Built 'echo', a human-centered design system to scale Bobo's product ecosystem and accelerate development cycles."
                  />
                  <ExperienceItem 
                    company="SkipTheDishes"
                    role="Product Designer"
                    date="2021 - 2023"
                    description="Optimized courier and merchant workflows for Canada's largest food delivery platform. Collaborated with cross-functional teams to ship user-centered features that improved delivery efficiency and partner satisfaction."
                  />
                  <ExperienceItem 
                    company="IntuitionPay"
                    role="Product Designer"
                    date="2019 - 2021"
                    description="Led the user experience for a simplified fintech payment platform. Focused on streamlining the onboarding process and improving overall transaction transparency for small to medium-sized businesses."
                  />
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

function ExperienceItem({ company, role, date, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`experience-item ${isExpanded ? 'expanded' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
      <div className="experience-item-header">
        <div className="company-info">
          <h3 className="company-name">{company}</h3>
          <p className="role-name">{role}</p>
          <p className="experience-date">{date}</p>
        </div>
        <div className="experience-close-icon">
          {isExpanded ? '✕' : '+'}
        </div>
      </div>
      <div className={`experience-description-wrapper ${isExpanded ? 'active' : ''}`}>
        <p className="experience-description">
          {description}
        </p>
      </div>
    </div>
  );
}
