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
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: "development-pathways",
      title: "Development Pathways",
      company: "Professional growth and learning platform",
      image: require('../assets/profile/developmentPathways.png'),
      category: "B2B",
      link: "/development-pathways",
      imgClass: "dp-image"
    },
    {
      id: "echo-design-system",
      title: "echo Design System",
      company: "Internal design system for Bobo Health",
      image: require('../assets/profile/echo.png'),
      category: "Design systems",
      link: "/echo-design-system",
      imgClass: "echo-image"
    },
    {
      id: "skip-westjet",
      title: "SKIP x WESTJET",
      company: "SKIPTHEDISHES",
      image: require('../assets/profile/Skip.png'),
      category: "B2C",
      imgClass: "skip-image"
    },
    {
      id: "forella-ai",
      title: "Forella AI",
      company: "AI personal assistant in your pocket",
      image: require('../assets/profile/forella.png'),
      category: "B2C",
      imgClass: "forella-image"
    },
    {
      id: "ophir-labs-ai",
      title: "Ophir Labs AI",
      company: "AI agents for HR",
      image: require('../assets/profile/OPhirlabs.png'),
      category: "B2B",
      imgClass: "ophir-image"
    }
  ];

  const categories = ['All', 'B2C', 'B2B', 'Design systems'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="home-container">
      <div className={`main-content ${isPanelOpen ? 'panel-open' : ''}`}>
        <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />
        <main className="home-page">
          <div className="hero-section">
            <div className="hero-main-content">
              <h1 className="hero-title">
                I design products<br />
                for impact, at scale.
              </h1>
              
              <div className="hero-subtext-group">
                <p className="hero-description">
                  Hey - I’m Emeka. Senior Product designer currently building the future of pediatric health at Bobo Health. Previously at SkipTheDishes.
                </p>
                <div className="hero-education-row">
                   <p className="hero-education">BSc Computer Science, University of Winnipeg</p>
                </div>
              </div>
            </div>

            <div className="hero-footer">
              <div className="hero-footer-line"></div>
              <div className="hero-footer-content">
                <span className="hero-location">BASED IN WINNIPEG, MANITOBA</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-social-link">LINKEDIN ↗</a>
              </div>
            </div>
          </div>

          <section className="portfolio-section">
            <div className="filter-group">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-pill ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="portfolio-grid">
              {filteredProjects.map(project => (
                project.link ? (
                  <Link key={project.id} to={project.link} className="portfolio-item-wrapper link-wrapper">
                    <div className="portfolio-item">
                      <img className={project.imgClass} src={project.image} alt={project.title} />
                    </div>
                    <div className="portfolio-label">
                      <p className="portfolio-project">{project.title}</p>
                      <p className="portfolio-company">{project.company}</p>
                    </div>
                  </Link>
                ) : (
                  <div key={project.id} className="portfolio-item-wrapper">
                    <div className="portfolio-item">
                      <img className={project.imgClass} src={project.image} alt={project.title} />
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
                I'm Emeka, a Senior Product Designer based in Winnipeg with a background in Computer Science. 
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
                    role="Senior Product Designer"
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
