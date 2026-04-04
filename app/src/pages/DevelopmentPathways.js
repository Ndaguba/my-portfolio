import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './DevelopmentPathways.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function DevelopmentPathways() {
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
                            Transforming clinical CDC milestones into an intuitive tracking experience that reduces parental anxiety and builds confidence.
                        </h1>

                        <div className="project-metadata">
                            <div className="meta-col">
                                <span className="meta-label">Product</span>
                                <span className="meta-value">Bobo Health</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Skills</span>
                                <span className="meta-value">Product design, IA, UX Flows, Interaction Design</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">My role</span>
                                <span className="meta-value">Lead Product Designer</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">8 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                         <img src={require('../assets/profile/Dev-pathways.png')} alt="Development Pathways Timeline" />
                    </section>

                    {/* Section 1: Defining the Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Defining the Problem</h2>
                            <p className="emotional-hook">"Growth is a celebration, not a checklist."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Child development data is currently presented as a high-stakes checklist. When medical data is cold and clinical, parents panic over minor milestone gaps. This **"Anxiety Loop"** turns supportive tracking into a pass/fail test for parents and children alike.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🏥</span>
                                        <p>CDC milestones use dense medical language that is difficult to interpret.</p>
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
                            <p className="section-subtitle">We mapped the emotional journey of parents to replace "checklist panic" with clinical confidence.</p>
                            
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>User Interviews</h3>
                                    <p>Spoke with 20+ parents. 70% reported "high anxiety" when milestones were presented as a cold pass/fail list.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Milestone Anxiety</h3>
                                    <p>Design Constraint: parents internalize "unchecked" boxes as failure. We redesigned the UI to highlight "Emerging Behaviors."</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Clinical Jargon Wall</h3>
                                    <p>Design Constraint: Raw CDC headers (e.g. Social-Emotional Convergence) cause panic. We translated 100% of headers into human questions.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Non-linear Growth UI</h3>
                                    <p>Designed a timeline that supports child growth as a journey, moving away from a rigid binary checklist.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 3: Solution */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <h2 className="content-title">The Supportive Timeline</h2>
                            
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="constellation-title">Design Decisions</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Action-Oriented Language</h3>
                                        <p>Translated 100% of CDC headers into everyday questions (e.g. "Does baby look when called?").</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Next-Step Guidance</h3>
                                        <p>Every "Not Yet" entry is met with a clinical tip, turning a milestone into an opportunity for growth.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Supportive timeline</h3>
                                        <p>Child development isn't binary. Designed a journey that honors the reality of growth over pass/fail checklists.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="solution-visuals" style={{ marginTop: '40px' }}>
                                <div className="main-visual">
                                     <img src={require('../assets/profile/Dev-pathways.png')} alt="Final Supportive Timeline UI" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 4: Showcase */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SHOWCASE</div>
                        <div className="section-content">
                            <h2 className="content-title">High-Fidelity Interactive Showcase</h2>
                            <div className="full-width-visual">
                                <div className="placeholder-box large">Developmental Timeline Final Mockups</div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact & Learnings */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Impact</h2>
                            <h3 className="impact-headline">Confidence through clarity</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">+42%</span>
                                <p>Increase in weekly active users within the milestone tracking module after the re-design.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Positive</span>
                                <p>Significant shift in qualitative sentiment towards a more helpful, supportive experience.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Global</span>
                                <p>Core feature of the Bobo platform, now utilized by thousands of families worldwide.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid">
                                <div className="learning-item">
                                    <h3>Support is Feature #1</h3>
                                    <p>In healthcare, the emotional state of the user is just as important as the data. Features must be supportive, not just functional.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>Translation is Design</h3>
                                    <p>Designing for complex data often means being a translator. Success was measured by how little medical jargon the parent had to see.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-section">
                        <h2 className="section-title">Next project</h2>
                        <Link to="/echo-design-system" className="next-project-card">
                            <div className="next-meta">
                                <span className="next-badge">SHIPPED</span>
                                <h3>Echo Design System</h3>
                                <p>A human-centered design language for pediatric care</p>
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
