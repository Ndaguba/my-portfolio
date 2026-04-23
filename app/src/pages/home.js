import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBriefcase } from "react-icons/pi";
import './home.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import { IoLocationOutline } from "react-icons/io5";
import Footer from '../components/Footer';

const OptimizedImage = ({ src, alt, className, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = React.useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);
  
  return (
    <div className={`image-container ${isLoaded ? 'loaded' : 'loading'}`}>
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        className={`${className} ${isLoaded ? 'visible' : 'hidden'}`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={priority ? "high" : "auto"}
      />
      {!isLoaded && <div className="image-skeleton" />}
    </div>
  );
};

export default function Home() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Design');

  const renderTitle = () => {
    const lines = [
      "I design and build products",
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
      category: "Design",
      link: "/poppy-ai",
      imgClass: "poppy-image",
      status: "SHIPPED"
    },
    {
      id: "development-pathways",
      title: "Development Pathways",
      company: "Digitizing CDIC clinical milestones into a tracking platform",
      image: require('../assets/profile/Dev-pathways.png'),
      category: "Design",
      link: "/development-pathways",
      imgClass: "dp-image",
      status: "SHIPPED"
    },
    {
      id: "skip-westjet",
      title: "Skip x WestJet Partnership",
      company: "Canada's largest food delivery partnership",
      image: require('../assets/profile/SKIP X WESTJET.png'),
      category: "Design",
      link: "/skip-westjet",
      imgClass: "skip-image",
      status: "SHIPPED"
    },
    {
      id: "order-tracker",
      title: "Order Tracker Redesign",
      company: "Real-time logistics and delivery tracking",
      image: require('../assets/profile/Delivery-tracker.png'),
      category: "Design",
      link: null,
      imgClass: "order-tracker-image",
      status: "NOT SHIPPED"
    },
    {
      id: "forella",
      title: "Forella",
      company: "AI Personal Assistant",
      image: require('../assets/engineering/Forella.png'),
      category: "Engineering",
      link: "/forella",
      imgClass: "forella-image",
      status: "SHIPPED"
    },
    {
      id: "ophir-labs",
      title: "Ophir Labs",
      company: "AI Agent for Compliance",
      image: require('../assets/engineering/ophir-labs.png'),
      category: "Engineering",
      link: null,
      imgClass: "ophir-image",
      status: "NOT SHIPPED"
    }
  ];

  const filteredProjects = projects.filter(p => p.category === activeFilter);

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
                  Hey - I’m Emeka. A Product Designer and Design Engineer currently building the future of pediatric care at Bobo Health. Previously at SkipTheDishes.
                </p>
                <div className="hero-education-row">
                    <p className="hero-education">Based in Canada</p>
                </div>
                <div className="hero-social-row">
                  <a href="https://github.com/ndaguba" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20">
                      <path fill="currentColor" fillRule="evenodd" d="M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm1.815 5.11a7.99 7.99 0 0 1 5.182 -1.903 7.99 7.99 0 0 1 2.531 15.572c-0.405 0.077 -0.535 -0.159 -0.535 -0.372v-2.212a1.893 1.893 0 0 0 -0.546 -1.473c1.78 -0.197 3.648 -0.871 3.648 -3.942a3.086 3.086 0 0 0 -0.822 -2.146 2.87 2.87 0 0 0 -0.08 -2.114s-0.666 -0.214 -2.194 0.82a7.561 7.561 0 0 0 -4.002 0C8.472 7.306 7.8 7.52 7.8 7.52a2.867 2.867 0 0 0 -0.078 2.114 3.09 3.09 0 0 0 -0.823 2.144c0 3.063 1.866 3.748 3.64 3.95a1.705 1.705 0 0 0 -0.508 1.065 1.702 1.702 0 0 1 -2.325 -0.664 1.678 1.678 0 0 0 -1.224 -0.823s-0.78 -0.01 -0.054 0.487c0.426 0.271 0.74 0.686 0.887 1.168 0 0 0.459 1.535 2.682 1.053 0.003 0.504 0.002 0.929 0 1.19l0 0.2c0 0.21 -0.126 0.445 -0.525 0.375A7.99 7.99 0 0 1 6.815 6.11Z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/emeka-ndaguba" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20">
                      <path fill="currentColor" fillRule="evenodd" d="M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm1.205 6.91a1.705 1.705 0 1 0 0 -3.41 1.705 1.705 0 0 0 0 3.41ZM7.909 19.5V9.273H4.5V19.5h3.41Zm4.432 -10.227H9.273V19.5h3.068v-6.17c0.395 -0.642 1.077 -1.33 2.045 -1.33 1.364 0 1.705 1.364 1.705 2.046V19.5H19.5v-5.454c0 -1.828 -0.797 -4.773 -3.75 -4.773 -1.878 0 -2.92 0.685 -3.41 1.327V9.273Z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <section className="portfolio-section">
            <div className="filter-group" data-active={activeFilter}>
              <div className="filter-slider" />
              {['Design', 'Engineering'].map(filter => (
                <button 
                  key={filter} 
                  className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === 'Design' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" className="filter-icon" height="14" width="14">
                      <path fill="currentColor" fillRule="evenodd" d="M13.2785 0.719056c-1.0082 -1.001769 -2.7007 -0.949749 -3.64554 0.111866l-0.00045 0.000509L4.72835 6.31438c-0.17798 -0.02267 -0.35786 -0.03177 -0.53809 -0.02703 -0.47908 0.01261 -0.95056 0.12278 -1.38562 0.32377 -0.42996 0.19864 -0.81542 0.48185 -1.13341 0.83268 -0.45064 0.45466 -0.672087 0.91112 -0.749099 1.38573 -0.060945 0.3756 -0.023667 0.75008 0.005107 1.03913 0.004622 0.04643 0.009024 0.09066 0.012765 0.13234 0.029459 0.3282 0.035864 0.5999 -0.048559 0.894 -0.083342 0.2904 -0.271378 0.6545 -0.71592 1.1146 -0.2347126 0.2429 -0.2339339 0.6284 0.001758 0.8703 0.913748 0.9382 2.147998 1.2305 3.328338 1.0842 1.14662 -0.1421 2.28087 -0.6986 3.13429 -1.5318 0.35347 -0.3178 0.63903 -0.7039 0.83948 -1.135 0.20205 -0.4346 0.31337 -0.9058 0.32715 -1.38482 0.00686 -0.23845 -0.01052 -0.47635 -0.0515 -0.7101L13.1683 4.3674l0.0003 -0.00027c1.0622 -0.94472 1.1145 -2.63749 0.1121 -3.645888l0 -0.000006 -0.0022 -0.00218ZM5.12717 7.69855c-0.28722 -0.11477 -0.59483 -0.16977 -0.90402 -0.16163 -0.3092 0.00814 -0.61349 0.07924 -0.89427 0.20896 -0.28079 0.12972 -0.53217 0.31533 -0.73879 0.54549 -0.0075 0.00835 -0.01522 0.0165 -0.02315 0.02443 -0.2914 0.2914 -0.37925 0.51863 -0.41095 0.71394 -0.03285 0.20246 -0.01452 0.39628 0.01351 0.69263 0.00494 0.05223 0.01018 0.10765 0.0155 0.16686 0.03304 0.36807 0.05788 0.82817 -0.09207 1.35067 -0.10528 0.3668 -0.28876 0.7389 -0.57839 1.1254 0.5253 0.3297 1.16318 0.4419 1.83734 0.3583 0.87581 -0.1085 1.77167 -0.5468 2.43994 -1.2104l0.0198 -0.0198 0.00144 -0.0015c0.01776 -0.0177 0.03632 -0.0342 0.05557 -0.0494 0.19852 -0.1929 0.36035 -0.4207 0.47729 -0.6722 0.1304 -0.2805 0.20225 -0.5846 0.21114 -0.89376 0.00889 -0.30917 -0.04536 -0.61691 -0.15942 -0.90441 -0.11407 -0.2875 -0.28557 -0.54872 -0.50401 -0.7677 -0.21844 -0.21897 -0.47924 -0.39111 -0.76646 -0.50588Z" clipRule="evenodd"></path>
                    </svg>
                  )}
                  {filter === 'Engineering' && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="filter-icon" height="14" width="14">
                      <path d="M4.32 5.884375 1.78125 8l2.53875 2.115625a0.5 0.5 0 1 1 -0.64 0.768125l-3 -2.5a0.5 0.5 0 0 1 0 -0.768125l3 -2.5a0.5 0.5 0 0 1 0.64 0.76875Zm11 1.73125 -3 -2.5a0.5 0.5 0 1 0 -0.64 0.76875L14.21875 8l-2.53875 2.115625a0.5 0.5 0 1 0 0.64 0.768125l3 -2.5a0.5 0.5 0 0 0 0 -0.768125Zm-5.149375 -5.585625a0.5 0.5 0 0 0 -0.640625 0.299375l-4 11a0.5 0.5 0 0 0 0.299375 0.64125A0.50875 0.50875 0 0 0 6 14a0.5 0.5 0 0 0 0.47 -0.329375l4 -11a0.5 0.5 0 0 0 -0.299375 -0.640625Z"></path>
                    </svg>
                  )}
                  {filter}
                </button>
              ))}
            </div>
            <div className="portfolio-grid">
              {filteredProjects.map((project, index) => (
                project.link ? (
                  <Link key={project.id} to={project.link} className="portfolio-item-wrapper link-wrapper">
                    <div className={`portfolio-item ${project.id}-item ${project.status === 'NOT SHIPPED' ? 'not-shipped-item' : ''}`}>
                      <div className="status-pill">
                        <span className={`status-dot ${project.status === 'NOT SHIPPED' ? 'not-shipped' : ''}`}></span>
                        {project.status}
                      </div>
                      {project.image && (
                        <OptimizedImage 
                          className={project.imgClass} 
                          src={project.image} 
                          alt={project.title}
                          priority={index < 2} 
                        />
                      )}
                      {project.status === 'NOT SHIPPED' && (
                        <div className="lock-overlay">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="lock-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="portfolio-label">
                      <p className="portfolio-project">{project.title}</p>
                      <p className="portfolio-company">{project.company}</p>
                    </div>
                  </Link>
                ) : (
                  <div key={project.id} className="portfolio-item-wrapper">
                    <div className={`portfolio-item ${project.id}-item ${project.status === 'NOT SHIPPED' ? 'not-shipped-item' : ''}`}>
                      <div className="status-pill">
                        <span className={`status-dot ${project.status === 'NOT SHIPPED' ? 'not-shipped' : ''}`}></span>
                        {project.status}
                      </div>
                      {project.image && (
                        <OptimizedImage 
                          className={project.imgClass} 
                          src={project.image} 
                          alt={project.title}
                          priority={index < 2}
                        />
                      )}
                      {project.status === 'NOT SHIPPED' && (
                        <div className="lock-overlay">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="lock-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                          </svg>
                        </div>
                      )}
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
                I’m Emeka, a Product Designer and Design Engineer based in Winnipeg with a background in frontend development and user experience design. I specialize in building digital products at the intersection of design, engineering, and product strategy. My goal is to create simple experiences that solve complex technical problems.
              </p>
              <p className="about-text">
                Across <span className="highlight-green">SkipTheDishes</span>, <span className="highlight-green">IntuitionPay</span>, and <span className="highlight-green">Bobo Health</span>, I’ve led product design for consumer platforms, financial systems, and AI-powered healthcare. I own the work from early concept through shipped production.
              </p>
              <p className="about-text">
                I bridge the gap between design and code by thinking deeply about system behavior and implementation quality. I don’t just stop at mockups. I often work directly in the code using tools like Cursor, Claude Code, and React to ensure the final product matches the vision.
              </p>
              <p className="about-text">
                I believe the best products come from the space where design precision meets engineering execution. I care about building reliable, human-centered interfaces that make complex systems feel clear and trustworthy.
              </p>

              <div className="experience-section">
                <div className="experience-header">
                  <span className="experience-tag">Experience</span>
                </div>
                <div className="experience-list">
                  <ExperienceItem 
                    company="Bobo Health"
                    role="Senior Product Designer / Design Engineer"
                    date="Aug 2025 - Present"
                    description={
                      <>
                        <strong>Senior Product Designer / Design Engineer</strong> at Bobo Health, serving as the first in-house designer and owning product design, brand, and user experience across the company. Lead design across mobile, web, and core product experiences while also writing frontend code for both the marketing website and product surfaces within the app. Built and launched <strong>Echo</strong>, the company’s first design system, creating scalable patterns, stronger consistency, and faster product development across teams. Responsible for shaping the product from strategy to shipped experience, including high-impact initiatives such as Poppy AI, Development Pathways, Doctor’s Reports, and core pediatric health tracking experiences.
                      </>
                    }
                  />
                  <ExperienceItem 
                    company="SkipTheDishes"
                    role="Product Designer"
                    date="Mar 2023 - Aug 2025"
                    description={
                      <>
                        <strong>Product Designer</strong> at SkipTheDishes, owning design across the Partnerships portfolio and post-order experience. Led UX for strategic partner integrations, including the WestJet partnership experience, designing discovery, onboarding, permissions, and account management flows that strengthened cross-platform engagement and rewards adoption. Drove improvements to the post-order experience through the Order Tracker redesign, introducing a scalable bottom-sheet architecture that unlocked features like PIN verification, multi-partner logistics support, upsell opportunities, and additional advertising surfaces. Regularly contributed to the PIE design system and helped shape reusable product patterns across the platform.
                      </>
                    }
                  />
                  <ExperienceItem 
                    company="InTuitionPay"
                    role="Founding Product Designer & Frontend Developer"
                    date="Feb 2021 - Aug 2023"
                    description={
                      <>
                        <strong>Founding Product Designer</strong> at InTuitionPay, serving as the first in-house designer and leading both product design and frontend engineering across mobile, web, and back-office platforms. Owned the full product experience from strategy and UX to implementation, writing production frontend code and driving execution across teams. Built and launched <strong>Cookies</strong>, the company’s first design system, creating consistency, scalability, and faster development across the entire product ecosystem. Led both design and engineering workflows, helping shape the product from early concept to launch. Played a key role in the company’s growth leading up to its 2024 appearance on Dragons' Den.
                      </>
                    }
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
