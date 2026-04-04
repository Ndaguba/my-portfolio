import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './EchoDesignSystem.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function EchoDesignSystem() {
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
                            A tokenized, human-centered design language built to transition Bobo from a static agency handoff to a scalable, living product system.
                        </h1>

                        <div className="project-metadata">
                            <div className="meta-col">
                                <span className="meta-label">Product</span>
                                <span className="meta-value">Bobo Health</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Skills</span>
                                <span className="meta-value">Design Tokens, IA, System Architecture, Documentation</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Team</span>
                                <span className="meta-value">Product Design & Engineering</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">Ongoing</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                         <img src={require('../assets/profile/echo.png')} alt="Echo Design System Architecture" />
                    </section>

                    {/* Section 1: Defining the Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Defining the Problem</h2>
                            <p className="emotional-hook">"A design system is a living engine, not a static library."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>As Bobo Health grew, UI inconsistency became a major bottleneck. Designers were designing in pixels, but engineers were building in flexible units. This <strong>"Translation Gap"</strong> led to massive visual bugs and an engineering team that had to re-guess every design decision during handoff.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🎨</span>
                                        <p>Manual UI updates to cross-platform themes previously took weeks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 2: The Approach */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">APPROACH</div>
                        <div className="section-content">
                            <h2 className="content-title">The Approach</h2>
                            <p className="section-subtitle">We combined aesthetic audits with technical interviews to map out where the system was failing our teams.</p>
                            
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Engineering Interviews</h3>
                                    <p>Found that 60% of CSS work was spent on overrides. The team was treating the system as a "suggestion" rather than a foundation.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>System Mapping</h3>
                                    <p>Learned that most bugs weren't from "bad design," but from a lack of shared taxonomy (Pixels vs Rem).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">INSIGHTS</div>
                        <div className="section-content">
                            <h2 className="content-title">Research Themes</h2>
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Interdisciplinary Audits</h3>
                                    <p>Spoke with engineers to identify why 60% of CSS work was spent on overrides. The team lacked a shared language.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>System Taxonomy</h3>
                                    <p>Design Constraint: Pixels don't translate to code variables. We had to design an immutable token structure to bridge this gap.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Contrast Accessibility</h3>
                                    <p>Design Constraint: Compliance was being "skipped" during sprints. We baked WCAG 2.1 checks directly into the color engine tokens.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Governance Logic</h3>
                                    <p>Designed a contribution model that allows the library to grow without becoming a "collection of orphans."</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 3: Solution */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <h2 className="content-title">The Unified Language</h2>
                            
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="constellation-title">Design Decisions</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Immutable Tokens</h3>
                                        <p>Designed a Semantic Token architecture that maps abstract values (e.g., Pink-500) to functional uses (e.g., CTA-Background).</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Governance by Design</h3>
                                        <p>Designed a tiered contribution flow that allows designers to "propose" components, keeping the system alive but governed.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>System Taxonomy</h3>
                                        <p>The disconnect between design tools and code was the #1 source of debt. We designed a 1:1 tokenized bridge.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="solution-visuals" style={{ marginTop: '40px' }}>
                                <div className="main-visual">
                                     <img src={require('../assets/profile/echo.png')} alt="Echo Design System Library" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 4: Showcase */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SHOWCASE</div>
                        <div className="section-content">
                            <h2 className="content-title">The Living Library Showcase</h2>
                            <div className="full-width-visual">
                                <div className="placeholder-box large">Echo Design System High-Fidelity UI Library Visuals</div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact & Learnings */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Impact</h2>
                            <h3 className="impact-headline">A Resilient Foundation</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">2X</span>
                                <p>Increase in design-to-engineering handoff speed for new features since tokenization.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">40%</span>
                                <p>Reduction in cross-platform visual regression bugs and layout inconsistencies.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">100%</span>
                                <p>Unified dark mode coverage across all core flagship applications with zero manual overrides.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid">
                                <div className="learning-item">
                                    <h3>Systems are Living</h3>
                                    <p>A design system is never "finished." Success is measured by how well the team can evolve the tokens, not how perfect the initial library was.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>Governance is Key</h3>
                                    <p>Building the tokens was 20% of the work. The remaining 80% was building the social culture of documentation and contribution.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-section">
                        <h2 className="section-title">Next project</h2>
                        <Link to="/poppy-ai" className="next-project-card">
                            <div className="next-meta">
                                <span className="next-badge">SHIPPED</span>
                                <h3>Poppy AI</h3>
                                <p>Conversational AI for pediatric care</p>
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
