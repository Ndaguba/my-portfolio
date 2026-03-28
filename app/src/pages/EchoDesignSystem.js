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

                    {/* Section 1: Overview */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Overview</h2>
                        <div className="section-grid">
                            <div className="text-content">
                                <p>echo is Bobo’s internal design system focused on creating consistent, accessible, and human-centered interfaces through a token-driven foundation. It establishes a strong foundational layer that powers visual decisions across all desktop and mobile products.</p>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">🎨</span>
                                    <p>Covers 100% of core app foundations (Color, Type, Space, Radius).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Problem */}
                    <section className="casestudy-section alt-bg">
                        <h2 className="section-title">Problem</h2>
                        <div className="section-grid">
                            <div className="text-content">
                                <p>As Bobo’s ecosystem expanded, visual foundations were hardcoded at the component level. Managing dark mode required "re-translating" values for every feature, resulting in deep inconsistencies and fragmented user experiences across platforms.</p>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">🛠️</span>
                                    <p>Dark mode updates previously took 3+ weeks of manual effort.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Research */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Research</h2>
                        <p className="section-subtitle">Conducted audits and interviewed engineers to understand pain points with CSS inheritance and design handoff.</p>
                        
                        <div className="constraint-grid">
                            <div className="constraint-card">
                                <h3>Synthesizing Intent</h3>
                                <p>Discovered that listing values wasn't enough; the system needed to communicate *why* a color or spacing was chosen.</p>
                            </div>
                            <div className="constraint-card">
                                <h3>Engineering Friction</h3>
                                <p>Identified that hardcoded hex values were the leading cause of visual regression bugs during sprints.</p>
                            </div>
                            <div className="constraint-card">
                                <h3>Design Fragmentation</h3>
                                <p>Figma files were disconnected from production code, leading to "pixel-pushing" back-and-forth during QA.</p>
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
                                <p className="constraints-summary">Architecting a system that works across multiple frontend frameworks and varying levels of platform maturity.</p>
                                <span className="constraints-label">Technical Constraints</span>
                                
                                <div className="constraint-item">
                                    <h3>Multi-Platform Legacy</h3>
                                    <p>The system had to support legacy web components while enabling modern Swift UI and Kotlin Compose implementations.</p>
                                </div>
                                <div className="constraint-item">
                                    <h3>Token Pipeline Integration</h3>
                                    <p>Designed a workflow to export tokens from Figma to Style Dictionary without breaking existing CSS class structures.</p>
                                </div>
                                <div className="constraint-item last">
                                    <h3>Theming Complexity</h3>
                                    <p>Ensuring that 100% WCAG compliance was maintained across both light and dark modes required a rigid semantic token layer.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Prototyping */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Prototyping</h2>
                        <p className="section-subtitle">Iterating on the Three-Tier Token Architecture (Global → Semantic → Component).</p>
                        <div className="full-width-visual">
                            <div className="placeholder-box large">
                                <span>Architecture Diagram: From Hex Codes to Semantic Intent</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Solution */}
                    <section className="casestudy-section solution-section">
                        <div className="solution-header-layout">
                            <div className="solution-left">
                                <h2 className="section-title">Solution</h2>
                                <p className="solution-tagline">Shared language for scale</p>
                            </div>
                            <div className="solution-right">
                                <p className="solution-intro">echo is a tiered, tokenized system where every visual decision—from 4px spatial grids to color palettes—is predictable, accessible, and easily thematic.</p>
                                
                                <div className="solution-feature-list">
                                    <div className="feature-item">
                                        <span className="feature-icon">💎</span>
                                        <p>Three-Tier Architecture: Abstracting color from value</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">📏</span>
                                        <p>4px Baseline Grid: Eliminating spacing guesswork</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🔡</span>
                                        <p>Geometric Typography Scales (Major Second hierarchy)</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🪞</span>
                                        <p>Dynamic Radius & Shadow System for visual coherence</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="solution-visuals">
                            <div className="main-visual">
                                <div className="placeholder-box"><span>Main Visual: Design Token Library</span></div>
                            </div>
                            <div className="visual-grid">
                                <div className="placeholder-box"><span>Mockup: Spatial Grid System</span></div>
                                <div className="placeholder-box"><span>Mockup: Dark Mode Mapping</span></div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Impact</h2>
                        <h3 className="impact-headline">A Resilient Foundation</h3>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">2X</span>
                                <p>Faster design-to-dev handoff</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">40%</span>
                                <p>Reduction in visual regression bugs</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">100%</span>
                                <p>Dark mode coverage across core products</p>
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
