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
                            Simplifying child care with a 24/7 pediatric assistant that turns messy, natural language into actionable guidance and logging.
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

                    {/* Section 1: Defining the Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Defining the Problem</h2>
                            <p className="emotional-hook">"3 AM is the loneliest hour for a new parent."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Parents are overwhelmed. Traditional baby logbooks are cold and require too much effort during the 3 AM exhaustion window. <strong>The real gap?</strong> Generic AI lacks child-specific context. We needed to build a pediatric assistant that remembers <em>your</em> child's history, not just medical facts.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🏥</span>
                                        <p>Parents value personalized insights over generic advice.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 2: Research */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">RESEARCH</div>
                        <div className="section-content">
                            <h2 className="content-title">Discovery & Strategy</h2>
                            <p className="section-subtitle">We combined clinical audits, competitive analysis, and direct doctor testing to bridge the "Intent Gap."</p>
                            
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Competitive Analysis</h3>
                                    <p>Audited leading apps and found a 60% drop-off due to "table fatigue"—most tools were data-entry forms, not assistants.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Pediatrician Testing</h3>
                                    <p>Collaborated with doctors to verify AI responses for clinical safety, ensuring the "Nurse Partner" tone was empathetic and accurate.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 2.5: Constraints & Flow */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">CONSTRAINTS</div>
                        <div className="section-content">
                            <h2 className="content-title">User/AI Interaction Flow</h2>
                            <p className="section-subtitle">We mapped the "Exhaustion Window" where parents stop tracking. This flow was governed by four critical technical constraints that prioritized natural conversation and trust.</p>
                            
                            <div className="constraints-layout" style={{ marginTop: '30px' }}>
                                <div className="constraints-left">
                                    <h2 className="constellation-title">Technical Challenges</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Guided Correction</h3>
                                        <p>Handling vague human input (e.g. "he ate well") and interpreting intentions without adding friction.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Contextual Recall</h3>
                                        <p>Reducing cognitive load for exhausted parents by surfacing history exactly when and where it's needed.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Guidance vs. Jargon</h3>
                                        <p>Maintaining clinical authority through empathetic language rather than medical terminology.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Thinking States</h3>
                                        <p>Managing latency trust by surfacing category tags during secure clinical medical lookups.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="full-width-visual" style={{ marginTop: '30px' }}>
                                <div className="placeholder-box large">User/AI Interactive Flow Logic Mockups & Assets</div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 3: Solution */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <h2 className="content-title">The Conversational Pediatrician</h2>
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="constellation-title">Design Decisions</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Empathetic Interaction Design</h3>
                                        <p>Moving away from rigid data-entry towards a supportive narrative flow that feels like a healthcare partner, not a tool.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Clinical Transparency</h3>
                                        <p>Surfacing our medical search intent and doctor-verified sources to prioritize user safety and trust in AI results.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="solution-visuals" style={{ marginTop: '40px' }}>
                                <div className="main-visual">
                                     <img src={require('../assets/profile/bobo-poppy.png')} alt="Main Solution Interface" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 4: Showcase */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SHOWCASE</div>
                        <div className="section-content">
                            <h2 className="content-title">High-Fidelity Interaction Showcase</h2>
                            <div className="full-width-visual">
                                <img src={require('../assets/profile/bobo-poppy.png')} alt="Poppy AI Interaction Showcase" />
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact & Learnings */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Impact</h2>
                            <h3 className="impact-headline">Scaling Parental Confidence</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">45%</span>
                                <p>Increase in weekly active logging sessions compared to legacy form-based apps.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Verified</span>
                                <p>100% clinical source transparency for all AI-generated pediatric tips.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">12 Min</span>
                                <p>Average reduction in "time-to-insight" during high-stress health checks.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid">
                                <div className="learning-item">
                                    <h3>Confidence over Jargon</h3>
                                    <p>Parents don't need complex medical data; they need to know their child is okay. Tone is just as important as accuracy.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>The Value of "Failure"</h3>
                                    <p>Designing empathetic "I don't know" states for the AI was crucial for maintaining long-term trust in medical guidance.</p>
                                </div>
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
