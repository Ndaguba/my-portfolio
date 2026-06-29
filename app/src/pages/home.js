import React, { useEffect, useState } from 'react';
import { useFlags } from '../context/FlagsContext';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import './home.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import AboutCanvas from '../components/AboutCanvas';
import claudeLogo from '../assets/Claude_AI_logo.svg.png';
import cursorLogo from '../assets/Cursor_logo.svg.png';
import boboLogo from '../assets/bobo.png';
import skipLogo from '../assets/Skipbadge.png';
import forellaLogo from '../assets/Forella.png';
import forellaWeb from '../assets/forella-web.png';
import forellaMobile from '../assets/forella-mobile-app.png';
import ophirLogo from '../assets/Ophir.png';
import ophirLabs from '../assets/Ophir-labs.png';
import retailMediaImage from '../assets/Order tracker.png';
import retailMediaOverlay from '../assets/AD.png';
import westjetImage from '../assets/WestJet.png';
import devExpanded from '../assets/expanded.png';
import skipExpanded from '../assets/skip-expanded.png';

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
        fetchPriority={priority ? "high" : "auto"}
      />
      {!isLoaded && <div className="image-skeleton" />}
    </div>
  );
};

export default function Home() {
  const { theme } = useTheme();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [askInput, setAskInput] = useState('');
  const [initialMessage, setInitialMessage] = useState('');
  const [seedText, setSeedText] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [headerHidden, setHeaderHidden] = useState(false);
  const scrollRef = React.useRef(null);
  const { flags } = useFlags();

  // Auto-hide the header on scroll down, reveal on scroll up / near the top.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    let lastY = root.scrollTop;
    let accum = 0; // accumulated distance in the current scroll direction
    let ticking = false;
    // Require a deliberate amount of travel before flipping, so a fast flick
    // commits once and lets the slide transition play out instead of toggling
    // mid-animation.
    const HIDE_TRAVEL = 90;
    const SHOW_TRAVEL = 50;

    const update = () => {
      const y = root.scrollTop;
      const delta = y - lastY;

      // Reset the accumulator whenever the scroll direction reverses.
      if ((delta > 0 && accum < 0) || (delta < 0 && accum > 0)) accum = 0;
      accum += delta;

      // Only start hiding once the user has scrolled down into the case-study
      // area (roughly when the work section reaches the upper-middle of the
      // viewport). Above that, the header always stays visible.
      const workEl = document.getElementById('work');
      const hideThreshold = workEl
        ? workEl.offsetTop - root.clientHeight * 0.4
        : 360;

      if (y < hideThreshold) {
        setHeaderHidden(false);
      } else if (accum > HIDE_TRAVEL) {
        setHeaderHidden(true);
      } else if (accum < -SHOW_TRAVEL) {
        setHeaderHidden(false);
      }
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    root.addEventListener('scroll', onScroll, { passive: true });
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight Home over the hero, Projects over the case studies.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const sections = ['home', 'work', 'about']
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { root, rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);


  const allProjects = [
    {
      id: "skip-westjet",
      title: "Skip x WestJet Partnership",
      company: "Canada's largest food delivery partnership",
      description: "An end-to-end loyalty integration connecting SkipTheDishes and WestJet Rewards. I led UX for discovery, account linking, and rewards earn-and-redeem.",
      image: westjetImage,
      showImage: true,
      overlayImage: skipExpanded,
      mediaBg: '#e4e0f3',
      mediaBgDark: '#2a2740',
      logo: skipLogo,
      logoLabel: "SkipTheDishes",
      category: "Design",
      tags: ["Design"],
      link: "/skip-westjet",
      imgClass: "skip-image",
      status: "SHIPPED",
      statValue: "500K",
      statLabel: "accounts connected"
    },
    {
      id: "development-pathways",
      title: "Development Pathways",
      company: "Digitizing CDIC clinical milestones into a tracking platform",
      description: "Digitizing the CDIC clinical milestone framework into a structured tracking platform with milestone timelines, clinician review flows, and parent-facing summaries.",
      image: require('../assets/profile/Dev-apth.png'),
      showImage: true,
      overlayImage: devExpanded,
      mediaBg: '#dbe7f5',
      mediaBgDark: '#222b3a',
      logo: boboLogo,
      logoLabel: "Bobo Health",
      category: "Design",
      tags: ["Design"],
      link: "/development-pathways",
      imgClass: "dp-image",
      status: "SHIPPED",
      statValue: "+35%",
      statLabel: "free-to-paid upgrades"
    },
    {
      id: "poppy-ai",
      title: "Poppy AI",
      company: "Pediatric AI Chatbot",
      image: require('../assets/profile/Frame 23458.png'),
      category: "Design",
      link: "/poppy-ai",
      imgClass: "poppy-image",
      status: "SHIPPED",
      statValue: "3.2",
      statLabel: "issues / wk"
    },
    {
      id: "order-tracker",
      title: "Order Tracker Redesign",
      company: "Real-time logistics and delivery tracking",
      image: require('../assets/profile/Delivery-tracker.png'),
      category: "Design",
      link: null,
      imgClass: "order-tracker-image",
      status: "NOT SHIPPED",
      statValue: "—",
      statLabel: "in progress"
    },
    {
      id: "forella",
      title: "Forella",
      company: "AI-Powered Calendar",
      description: "An AI-native calendar I designed and built end to end. An Expo / React Native iOS app where a streaming agent operates the app through interactive cards. Now in beta with 50+ users.",
      image: forellaWeb,
      showImage: true,
      mediaBg: '#f7e6ec',
      mediaBgDark: '#2e2228',
      logo: forellaLogo,
      logoLabel: "Forella",
      category: "Engineering",
      tags: ["Design", "Engineering"],
      link: "/forella",
      visitUrl: "https://platform.forella.app",
      imgClass: "forella-image",
      status: "SHIPPED",
      statValue: "50",
      statLabel: "beta users"
    },
    {
      id: "ophir-labs",
      title: "Ophir Labs",
      company: "AI Agent for Compliance",
      description: "An AI agent that automates compliance review by ingesting policies and firm standards, then answering and flagging questions against them. I lead design and frontend across the knowledge base, Q&A, and evidence flows.",
      image: ophirLabs,
      showImage: true,
      mediaBg: '#dde9e2',
      mediaBgDark: '#212c27',
      logo: ophirLogo,
      logoLabel: "Ophir Labs",
      category: "Engineering",
      tags: ["Design", "Engineering"],
      link: null,
      visitUrl: "https://app.ophir.sh/login",
      imgClass: "ophir-image",
      status: "NOT SHIPPED",
      statValue: "1",
      statLabel: "organizational pilot"
    },
    {
      id: "retail-media",
      title: "Retail Media Advertising",
      company: "Retail Media Network",
      description: "I led the design of the ROKT media integration into the Skip platform, creating advertising placements and a new revenue stream across the customer journey — without introducing friction into the order experience.",
      image: retailMediaImage,
      overlayImage: retailMediaOverlay,
      showImage: true,
      mediaBg: '#f1ede4',
      mediaBgDark: '#2c2820',
      logo: skipLogo,
      logoLabel: "Skip",
      category: "Design",
      tags: ["Design"],
      link: null,
      visitUrl: null,
      imgClass: "retail-media-image",
      status: "COMING SOON",
      statValue: "$15M+",
      statLabel: "in advertising revenue"
    }
  ];

  // Projects shown in the case-study section, in this exact order.
  const featuredOrder = ['development-pathways', 'skip-westjet', 'retail-media', 'forella'];
  const featuredProjects = featuredOrder
    .map(id => allProjects.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div className="home-container">
      <div className="main-content" ref={scrollRef}>
        <Header activeSection={activeSection} hidden={headerHidden} />
        <main className="home-page">
          <div id="home" className="hero-section">
            <div className="intro-hero">
              <h1 className="intro-line intro-line-top">
                <span>I&apos;m </span>
                <span className="intro-name">Emeka</span>
                <span>, Senior Product Designer.</span>
              </h1>
              <p className="intro-supporting">
                <span>I design products that solve </span>
                <span className="intro-accent">complex problems</span>
                <span>, drive business outcomes, and scale across </span>
                <span className="intro-italic">millions of customer experiences.</span>
              </p>

              <p className="intro-subtext">
                Currently leading design <span className="intro-subtext-accent">@ Bobo Health</span>
              </p>

              <form
                className="ask-bar"
                onSubmit={(e) => {
                  e.preventDefault();
                  const text = askInput.trim();
                  if (!text) return;
                  setInitialMessage(text);
                  setIsPanelOpen(true);
                  setAskInput('');
                }}
              >
                <span className="ask-bar-prefix" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="16" width="16">
                    <path fill="currentColor" fillRule="evenodd" d="M4.66515 0.979874c-1.59836 0 -2.90081 1.266986 -2.95782 2.851436C0.690751 4.62493 -0.000976562 5.67789 -0.000976562 7.17822c0 1.14978 0.417839562 1.92544 1.033416562 2.65329 0.05722 1.77069 1.51061 3.18869 3.2953 3.18869 1.09943 0 2.07318 -0.5381 2.67223 -1.3654 0.59905 0.8273 1.5728 1.3654 2.67223 1.3654 1.7847 0 3.2381 -1.418 3.2953 -3.18869 0.6156 -0.72785 1.0334 -1.50351 1.0334 -2.65329 0 -1.50033 -0.6917 -2.55329 -1.7083 -3.34691 -0.057 -1.58445 -1.3594 -2.851436 -2.95781 -2.851436 -0.94871 0 -1.79317 0.446356 -2.33482 1.140526C6.45832 1.42623 5.61386 0.979874 4.66515 0.979874ZM2.95539 3.93964c0 -0.94428 0.76549 -1.70977 1.70976 -1.70977 0.94428 0 1.70977 0.76549 1.70977 1.70977L6.3749 5.86218c-0.01634 0.18969 -0.12495 0.5874 -0.37436 0.9511 -0.24716 0.36041 -0.5905 0.63058 -1.0611 0.68311 -0.34305 0.03828 -0.59011 0.34742 -0.55182 0.69047 0.03829 0.34304 0.34742 0.5901 0.69047 0.55181 0.52263 -0.05833 0.9519 -0.25669 1.29679 -0.52008l-0.00002 1.50447c0 1.13064 -0.91653 2.04714 -2.04712 2.04714 -1.13057 0 -2.04705 -0.9165 -2.04705 -2.04714v-0.01897c0.03552 -0.18671 0.10725 -0.405 0.20408 -0.60191 0.10425 -0.21201 0.21058 -0.34444 0.28194 -0.40079 0.27091 -0.21391 0.31712 -0.60693 0.10321 -0.87784 -0.2139 -0.2709 -0.60692 -0.31711 -0.87783 -0.10321 -0.20146 0.15908 -0.36585 0.36999 -0.49611 0.58611 -0.16475 -0.33285 -0.24696 -0.68703 -0.24696 -1.12823 0 -0.81621 0.27799 -1.44107 0.79088 -1.97254 0.11125 0.19263 0.24112 0.3595 0.37708 0.50063 0.31738 0.32945 0.70034 0.55146 1.01423 0.62302 0.33654 0.07673 0.67156 -0.1339 0.74829 -0.47044 0.07672 -0.33654 -0.1339 -0.67156 -0.47044 -0.74829 0.00019 0.00005 0.00017 0.00004 -0.00006 -0.00003 -0.00171 -0.00047 -0.01474 -0.00408 -0.03865 -0.01436 -0.02603 -0.0112 -0.05951 -0.02798 -0.0983 -0.05142 -0.07802 -0.04717 -0.16797 -0.11554 -0.25484 -0.20572 -0.16957 -0.17602 -0.31945 -0.42569 -0.36182 -0.76147v-0.13796Zm5.96646 4.79903c-0.52263 -0.05833 -0.9519 -0.25669 -1.29679 -0.52008l0.00002 1.50447c0 1.13064 0.91653 2.04714 2.04712 2.04714 1.1306 0 2.047 -0.9165 2.047 -2.04714v-0.01897c-0.0355 -0.18671 -0.1072 -0.405 -0.204 -0.60191 -0.1043 -0.21201 -0.2106 -0.34444 -0.282 -0.40079 -0.2709 -0.21391 -0.3171 -0.60693 -0.1032 -0.87784 0.2139 -0.2709 0.6069 -0.31711 0.8779 -0.10321 0.2014 0.15908 0.3658 0.36999 0.4961 0.58611 0.1647 -0.33285 0.2469 -0.68703 0.2469 -1.12823 0 -0.81617 -0.2779 -1.44101 -0.7908 -1.97246 -0.1112 0.19259 -0.2411 0.35944 -0.377 0.50055 -0.3174 0.32945 -0.7004 0.55146 -1.0142 0.62302 -0.3366 0.07673 -0.67161 -0.1339 -0.74833 -0.47044 -0.07673 -0.33654 0.13389 -0.67156 0.47043 -0.74829l0.0001 -0.00002 0 -0.00001c0.0017 -0.00047 0.0147 -0.00408 0.0386 -0.01436 0.026 -0.0112 0.0595 -0.02798 0.0983 -0.05142 0.078 -0.04717 0.168 -0.11554 0.2549 -0.20572 0.1694 -0.17585 0.3191 -0.42521 0.3617 -0.7605v-0.13893c0 -0.94428 -0.7655 -1.70977 -1.70981 -1.70977 -0.94428 0 -1.70977 0.76549 -1.70977 1.70977l0.00002 1.92255c0.01634 0.1897 0.12495 0.58739 0.37436 0.95109 0.24716 0.36041 0.5905 0.63058 1.0611 0.68311 0.34305 0.03828 0.59011 0.34742 0.55182 0.69047 -0.03829 0.34304 -0.34742 0.5901 -0.69047 0.55181Z" clipRule="evenodd" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="ask-bar-input"
                  placeholder="Ask my Digital Brain"
                  value={askInput}
                  onChange={(e) => {
                    const text = e.target.value;
                    // First keystroke opens the full-screen chat and carries the text over.
                    if (!isPanelOpen && text) {
                      setSeedText(text);
                      setIsPanelOpen(true);
                      setAskInput('');
                    } else {
                      setAskInput(text);
                    }
                  }}
                />
                <button type="submit" className="ask-bar-send" aria-label="Send">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>

              <p className="ask-bar-credit">
                <span>Built with</span>
                <img src={claudeLogo} alt="Claude" className="ask-bar-credit-logo ask-bar-credit-logo--claude" />
                <span>Code &amp;</span>
                <img src={cursorLogo} alt="Cursor" className="ask-bar-credit-logo" />
              </p>
            </div>
          </div>

          <section id="work" className="case-studies">
            {featuredProjects.map((project, index) => (
              <article key={project.id} className="case-study">
                <div className="case-study-text">
                  <h3 className="case-study-title">{project.title}</h3>
                  <p className="case-study-desc">{project.description || project.company}</p>

                  {project.logo && (
                    <div className="case-study-company">
                      <img src={project.logo} alt={project.logoLabel} className="case-study-company-logo" />
                      <span className="case-study-company-name">{project.logoLabel}</span>
                    </div>
                  )}

                  {project.tags && (
                    <div className="case-study-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className={`case-study-tag case-study-tag--${tag.toLowerCase()}`}>
                          {tag === 'Design' && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="case-study-tag-icon" height="14" width="14" aria-hidden="true">
                              <path fill="#0acf83" d="M8.0833 23.750025c2.162 0 3.91665 -1.754675 3.91665 -3.916675V15.916675H8.0833c-2.162 0 -3.916675 1.754675 -3.916675 3.916675s1.754675 3.916675 3.916675 3.916675Z" />
                              <path fill="#a259ff" d="M4.166625 11.999975c0 -2.162 1.754675 -3.91665 3.916675 -3.91665h3.91665v7.833325H8.0833c-2.162 0 -3.916675 -1.754675 -3.916675 -3.916675Z" />
                              <path fill="#f24e1e" d="M4.166625 4.166675C4.166625 2.0046675 5.9213 0.25 8.0833 0.25h3.91665v7.833325H8.0833c-2.162 0 -3.916675 -1.75465 -3.916675 -3.91665Z" />
                              <path fill="#ff7262" d="M11.999875 0.25h3.916675c2.162 0 3.91665 1.7546675 3.91665 3.916675 0 2.162 -1.75465 3.91665 -3.91665 3.91665H11.999875V0.25Z" />
                              <path fill="#1abcfe" d="M19.8332 11.999975c0 2.162 -1.75465 3.916675 -3.91665 3.916675s-3.916675 -1.754675 -3.916675 -3.916675 1.754675 -3.91665 3.916675 -3.91665 3.91665 1.75465 3.91665 3.91665Z" />
                            </svg>
                          )}
                          {tag === 'Engineering' && (
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="case-study-tag-icon" height="14" width="14" aria-hidden="true">
                              <path d="M14.1809 4.2755c0.4001 0.1072 0.6376 0.51846 0.5304 0.91856L10.7377 20.0238c-0.1073 0.4001 -0.5185 0.6375 -0.91861 0.5303 -0.4001 -0.1072 -0.63753 -0.5185 -0.53033 -0.9186L13.2624 4.80583c0.1072 -0.4001 0.5184 -0.63754 0.9185 -0.53033Z" fill="currentColor" />
                              <path d="M16.4425 7.32781c0.2771 -0.30788 0.7513 -0.33284 1.0592 -0.05575l1.7375 1.56374c0.7364 0.66267 1.3472 1.2124 1.7666 1.7109 0.441 0.5243 0.7545 1.0875 0.7545 1.7828s-0.3135 1.2586 -0.7545 1.7828c-0.4194 0.4986 -1.0302 1.0483 -1.7666 1.711l-1.7375 1.5637c-0.3079 0.2771 -0.7821 0.2521 -1.0592 -0.0557 -0.2771 -0.3079 -0.2521 -0.7821 0.0558 -1.0592l1.6964 -1.5269c0.7879 -0.709 1.3191 -1.1894 1.6632 -1.5985 0.3303 -0.3926 0.4024 -0.6217 0.4024 -0.8172 0 -0.1954 -0.0721 -0.4246 -0.4024 -0.8172 -0.3441 -0.409 -0.8753 -0.8894 -1.6632 -1.59847L16.4983 8.387c-0.3079 -0.27709 -0.3329 -0.75131 -0.0558 -1.05919Z" fill="currentColor" />
                              <path d="M7.50178 8.387c0.30788 -0.27709 0.33284 -0.75131 0.05574 -1.05919 -0.27709 -0.30788 -0.75131 -0.33284 -1.05919 -0.05575L4.76084 8.8358c-0.73634 0.66267 -1.34715 1.2124 -1.76656 1.7109 -0.44103 0.5243 -0.75453 1.0875 -0.75453 1.7828s0.3135 1.2586 0.75453 1.7828c0.41941 0.4986 1.03021 1.0483 1.76654 1.7109l1.73751 1.5638c0.30788 0.2771 0.7821 0.2521 1.05919 -0.0557 0.2771 -0.3079 0.25214 -0.7821 -0.05574 -1.0592l-1.69647 -1.5269c-0.78788 -0.709 -1.31908 -1.1894 -1.66318 -1.5985 -0.33025 -0.3926 -0.40238 -0.6217 -0.40238 -0.8172 0 -0.1954 0.07213 -0.4246 0.40238 -0.8172 0.3441 -0.409 0.8753 -0.8894 1.66318 -1.59847L7.50178 8.387Z" fill="currentColor" />
                            </svg>
                          )}
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="case-study-stat">
                    <span className="case-study-stat-value">{project.statValue}</span>
                    <span className="case-study-stat-label">{project.statLabel}</span>
                  </div>

                  <div className="case-study-actions">
                    {project.link ? (
                      <Link to={project.link} className="case-study-btn">
                        <span>View case study</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </Link>
                    ) : (
                      <span className="case-study-btn is-disabled">
                        <span>Coming soon</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                        </svg>
                      </span>
                    )}
                    {project.visitUrl && (
                      <a
                        href={project.visitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="case-study-visit-link"
                      >
                        <span>Visit site</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" height="16" width="16">
                          <path d="m4.0625 10.9375 6.875 -6.875m0 0h-5.625m5.625 0v5.625" strokeWidth="1" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="case-study-media-wrap">
                  <div
                    className={`case-study-media ${project.id === 'forella' ? 'forella-media' : ''}`}
                    style={(() => {
                      const bg = theme === 'dark' ? (project.mediaBgDark || project.mediaBg) : project.mediaBg;
                      return bg ? { background: bg } : undefined;
                    })()}
                  >
                    {project.showImage && project.image && (
                      <img src={project.image} alt={project.title} className={`case-study-media-img ${project.id === 'forella' ? 'forella-media-img' : ''} ${project.id === 'ophir-labs' ? 'ophir-media-img' : ''}`} />
                    )}
                    {project.id === 'forella' && (
                      <img src={forellaMobile} alt="Forella mobile app" className="forella-mobile-img" />
                    )}
                  </div>
                  {project.overlayImage && (
                    <img src={project.overlayImage} alt="" aria-hidden="true" className={`case-study-media-overlay ${project.id === 'skip-westjet' ? 'skip-overlay' : ''} ${project.id === 'retail-media' ? 'retail-overlay' : ''}`} />
                  )}
                </div>
              </article>
            ))}
          </section>

          <AboutCanvas />

          {/* Legacy text About section hidden — set to true to re-enable */}
          {false && (
          <section id="about" className="about-section">
            <div className="about-left">
              <h2 className="about-title">About</h2>
            </div>
            <div className="about-right">
              <p className="about-text">
                I’m Emeka, a Product Designer{flags.product_design_only ? "" : " and Design Engineer"} based in Winnipeg{flags.product_design_only ? "" : " with a background in frontend development and user experience design"}. I specialize in building digital products at the intersection of design{flags.product_design_only ? "" : ", engineering,"} and product strategy. My goal is to create simple experiences that solve complex{flags.product_design_only ? "" : " technical"} problems.
              </p>
              <p className="about-text">
                Across <span className="highlight-green">SkipTheDishes</span>, <span className="highlight-green">IntuitionPay</span>, and <span className="highlight-green">Bobo Health</span>, I’ve led product design for consumer platforms, financial systems, and AI-powered healthcare. I own the work from early concept through shipped production.
              </p>
              <p className="about-text">
                {flags.product_design_only 
                  ? "I focus on creating high-fidelity, human-centered interfaces that make complex systems feel clear and trustworthy. I lead design strategy and execution, ensuring every pixel serves a purpose."
                  : "I bridge the gap between design and code by thinking deeply about system behavior and implementation quality. I don’t just stop at mockups. I often work directly in the code using tools like Cursor, Claude Code, and React to ensure the final product matches the vision."
                }
              </p>
              <p className="about-text">
                I believe the best products come from the space where design precision meets {!flags.product_design_only ? "engineering execution" : "user needs"}. I care about building reliable, human-centered interfaces that make complex systems feel clear and trustworthy.
              </p>

              <div className="experience-section">
                <div className="experience-header">
                  <span className="experience-tag">Experience</span>
                </div>
                <div className="experience-list">
                  <ExperienceItem 
                    company="Bobo Health"
                    role={flags.product_design_only ? "Senior Product Designer" : "Senior Product Designer / Design Engineer"}
                    date="Aug 2025 - Present"
                    description={
                      <>
                        <strong>{flags.product_design_only ? "Senior Product Designer" : "Senior Product Designer / Design Engineer"}</strong> at Bobo Health, serving as the first in-house designer and owning product design, brand, and user experience across the company. Lead design across mobile, web, and core product experiences {!flags.product_design_only && "while also writing frontend code for both the marketing website and product surfaces within the app"}. Built and launched <strong>Echo</strong>, the company’s first design system, creating scalable patterns, stronger consistency, and faster product development across teams. Responsible for shaping the product from strategy to shipped experience, including high-impact initiatives such as Poppy AI, Development Pathways, Doctor’s Reports, and core pediatric health tracking experiences.
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
                    role={flags.product_design_only ? "Founding Product Designer" : "Founding Product Designer & Frontend Developer"}
                    date="Feb 2021 - Aug 2023"
                    description={
                      <>
                        <strong>{flags.product_design_only ? "Founding Product Designer" : "Founding Product Designer & Frontend Developer"}</strong> at InTuitionPay, serving as the first in-house designer and leading {!flags.product_design_only ? "both product design and frontend engineering" : "product design"} across mobile, web, and back-office platforms. Owned the full product experience from strategy and UX {!flags.product_design_only && "to implementation, writing production frontend code and driving execution across teams"}. Built and launched <strong>Cookies</strong>, the company’s first design system, creating consistency, scalability, and faster development across the entire product ecosystem. Led both design {!flags.product_design_only && "and engineering"} workflows, helping shape the product from early concept to launch. Played a key role in the company’s growth leading up to its 2024 appearance on Dragons' Den.
                        <div style={{ marginTop: '24px', width: '100%', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9', background: 'rgba(0,0,0,0.05)' }}>
                          <iframe 
                            src="https://www.cbc.ca/i/phoenix/player/syndicate/?mediaId=9.6620729" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            allowFullScreen
                            title="InTuitionPay on Dragons' Den"
                          ></iframe>
                        </div>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </section>
          )}
        </main>
      </div>
      <ChatPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        initialMessage={initialMessage}
        onInitialMessageConsumed={() => setInitialMessage('')}
        seedText={seedText}
        onSeedConsumed={() => setSeedText('')}
        variant="fullscreen"
      />
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
        <div className="experience-description">
          {description}
        </div>
      </div>
    </div>
  );
}
