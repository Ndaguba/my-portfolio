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

                    {/* Section 1: Overview */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Overview</h2>
                        <div className="section-grid">
                            <div className="text-content">
                                <p>Poppy AI acts as a <strong>pediatric assistant</strong>, helping parents log activities naturally in one message and receive insights based on tracked activity patterns. It bridges the gap between manual tracking and expert medical guidance.</p>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">🏥</span>
                                    <p>85% of parents feel overwhelmed by conflicting medical advice online.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Problem */}
                    <section className="casestudy-section alt-bg">
                        <h2 className="section-title">Problem</h2>
                        <div className="section-grid">
                            <div className="text-content">
                                <p>Parents struggle to access reliable pediatric guidance while managing daily child care. Logging activities like sleep, feeding, milestones, and medicine is tedious, and there’s no single tool that combines tracking + advice.</p>
                                <p>Existing apps feel clinical and demand excessive manual data entry, leading to high drop-off rates after the first few months.</p>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">📉</span>
                                    <p>Tracking habits typically drop off after the first 3 months of child care.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Research */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Research</h2>
                        <p className="section-subtitle">Understanding parental habits and identifying common questions and phrasing.</p>
                        
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

                    {/* Section 4: Technical Constraints */}
                    <section className="casestudy-section constraint-list-section">
                        <div className="constraints-layout">
                            <div className="constraints-left">
                                <h2 className="constellation-title">A constellation of constraints</h2>
                            </div>
                            <div className="constraints-right">
                                <p className="constraints-summary">Balancing a natural, fluid conversational experience with the rigid data and clinical accuracy requirements of a pediatric medical engine.</p>
                                <span className="constraints-label">Technical Constraints</span>
                                
                                <div className="constraint-item">
                                    <h3>Latency & "Thinking" States</h3>
                                    <p>Complex parsing requirements for multi-activity logs meant an unavoidable 1-2 second lag. Designed precise micro-animations to indicate the AI is "listening" and "structuring" data to maintain user trust.</p>
                                </div>
                                <div className="constraint-item">
                                    <h3>Ambiguity Resolution</h3>
                                    <p>Engineering limits in resolving vague pronouns (e.g., "he" vs "she" with multiple kids) required a design fallback to ask clarifying questions without breaking the conversational flow.</p>
                                </div>
                                <div className="constraint-item">
                                    <h3>Rigid Data Mapping</h3>
                                    <p>The pediatric database required specific integer formats for medicine dosage and time. Design had to ensure the conversational input naturally guided parents to provide these without feeling like a form.</p>
                                </div>
                                <div className="constraint-item">
                                    <h3>Clinical Verification Delay</h3>
                                    <p>Real-time cross-referencing with verified medical journals added overhead. Implemented a "Verified Source" badge UI that appears progressively to manage perceived wait time.</p>
                                </div>
                                <div className="constraint-item">
                                    <h3>Inquiry & Missing Data Loops</h3>
                                    <p>When the agent required additional data for medical accuracy (e.g., dosage or timing), I designed non-intrusive prompts to collect missing details without breaking the parent's momentum.</p>
                                </div>
                                <div className="constraint-item last">
                                    <h3>Session Memory Limits</h3>
                                    <p>To optimize for mobile data, session context had to be periodically refreshed. Designed a clear visual indicator for "Active Conversation" vs "Summarized Session" to manage expectations of memory.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Prototyping */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Prototyping</h2>
                        <p className="section-subtitle">Iterating on the conversational flow and activity logging interface.</p>
                        <div className="full-width-visual">
                            <div className="placeholder-box large">
                                <span>Prototype Walkthrough / Wireframes</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Solution */}
                    <section className="casestudy-section solution-section">
                        <div className="solution-header-layout">
                            <div className="solution-left">
                                <h2 className="section-title">Solution</h2>
                                <p className="solution-tagline">Not your average pediatric tracker</p>
                            </div>
                            <div className="solution-right">
                                <p className="solution-intro">Poppy AI simplifies pediatric care by combining conversational tracking with proactive clinical insights, removing the friction of manual data entry.</p>
                                
                                <div className="solution-feature-list">
                                    <div className="feature-item">
                                        <span className="feature-icon">💬</span>
                                        <p>Conversational logging for sleep, feeding, and medicine</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">📊</span>
                                        <p>Automated insight generation from tracked patterns</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🏥</span>
                                        <p>Direct access to verified pediatric guidance 24/7</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🔔</span>
                                        <p>Proactive alerts for upcoming milestones and health checks</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="solution-visuals">
                            <div className="main-visual">
                                 <img src={require('../assets/profile/bobo-poppy.png')} alt="Main Solution Interface" />
                            </div>
                            <div className="visual-grid">
                                <div className="placeholder-box"><span>Mockup 1</span></div>
                                <div className="placeholder-box"><span>Mockup 2</span></div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact */}
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
