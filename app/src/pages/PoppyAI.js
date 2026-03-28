import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './PoppyAI.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function PoppyAI() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-study-container">
            <div className={`case-study-content ${isPanelOpen ? 'panel-open' : ''}`}>
                <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />

                <main className="case-study-page">
                    <header className="case-study-header">
                        <Link to="/" className="back-link">
                            <IoArrowBack /> Back
                        </Link>
                        
                        <div className="shipped-badge">
                            <span className="dot"></span> SHIPPED
                        </div>

                        <h1 className="hero-statement">
                            In 2024, Poppy AI was developed to serve as a 24/7 pediatric assistant, bridging the gap between clinical guidance and daily child care through conversational AI.
                        </h1>

                        <div className="project-metadata">
                            <div className="meta-col">
                                <span className="meta-label">Product</span>
                                <span className="meta-value">Bobo Health</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Skills</span>
                                <span className="meta-value">Product design, Conversational UX, User research, AI Prompting</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">My role</span>
                                <span className="meta-value">Lead Product Designer</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">Oct 2023 - Present</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                        <img src={require('../assets/profile/Frame 23458.png')} alt="Poppy AI Interface" />
                    </section>

                    <section className="casestudy-section">
                        <h2 className="section-title">Overview</h2>
                        <div className="section-grid">
                            <div className="text-content">
                                <p>Parents struggle to access reliable pediatric guidance while managing daily child care. Logging activities like sleep, feeding, milestones, and medicine is tedious, and there’s no single tool that combines tracking + advice.</p>
                                <p>Poppy AI acts as a <strong>pediatric assistant</strong>, helping parents log activities naturally in one message and receive insights based on tracked activity patterns.</p>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">🏥</span>
                                    <p>85% of parents feel overwhelmed by conflicting medical advice online.</p>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-icon">📉</span>
                                    <p>Tracking habits typically drop off after the first 3 months of child care.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="casestudy-section alt-bg">
                        <h2 className="section-title">Understanding parental habits</h2>
                        <p className="section-subtitle">Identified common questions and phrasing to build a truly natural experience.</p>
                        
                        <div className="constraint-grid">
                            <div className="constraint-card">
                                <h3>Natural Phrasing</h3>
                                <p>Observed how parents phrase logs naturally (“Baby slept 2 hours,” “How much formula?”) to train the NLP model.</p>
                            </div>
                            <div className="constraint-card">
                                <h3>Activity Patterns</h3>
                                <p>Studied parents’ common questions and logging habits to identify which alerts would be most useful.</p>
                            </div>
                            <div className="constraint-card">
                                <h3>Resource Accessibility</h3>
                                <p>Pinpointed exactly where parents seek help (e.g., midnight feeding sessions) to offer instant guidance.</p>
                            </div>
                        </div>
                    </section>

                    <section className="casestudy-section">
                        <h2 className="section-title">Conversational Logging</h2>
                        <div className="process-split">
                             <div className="process-text">
                                <p>The assistant parses and updates all relevant logs automatically, removing the friction of manual data entry.</p>
                                <div className="quote-callout">
                                    “Baby slept 3 hours, took medicine, and drank 3 oz of bottle.”
                                </div>
                             </div>
                             <div className="process-visual">
                                <div className="visual-placeholder">
                                    <img src={require('../assets/profile/bobo-poppy.png')} alt="Conversational UI" />
                                </div>
                             </div>
                        </div>
                    </section>

                    <section className="casestudy-section">
                        <h2 className="section-title">Impact</h2>
                        <h3 className="impact-headline">Giving peace of mind to parents</h3>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">+45%</span>
                                <p>Tracking consistency among beta users</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Real-time</span>
                                <p>Access to verified pediatric guidance</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Confidence</span>
                                <p>Parents felt more supported in child care</p>
                            </div>
                        </div>
                    </section>

                    <section className="cta-section">
                        <h2 className="section-title">Next project</h2>
                        <Link to="/development-pathways" className="next-project-card">
                            <div className="next-meta">
                                <span className="next-badge">SHIPPED</span>
                                <h3>Development Pathways</h3>
                                <p>Digitizing CDIC milestones into a global tracking platform</p>
                            </div>
                            <div className="next-arrow">→</div>
                        </Link>
                    </section>
                </main>

                <Footer />
            </div>
            <ChatPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
        </div>
    );
}
