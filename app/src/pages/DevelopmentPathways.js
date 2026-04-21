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
                            Led UX for a new milestone tracking experience that transformed CDC developmental guidance into a parent-friendly product designed to build confidence, not anxiety.
                        </h1>

                        <div className="project-metadata">
                            <div className="meta-col">
                                <span className="meta-label">Product</span>
                                <span className="meta-value">Bobo Health</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Skills</span>
                                 <span className="meta-value">Product Design, Information Architecture, UX Strategy, Interaction Design</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">My role</span>
                                 <span className="meta-value">Senior Product Designer</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Timeline</span>
                                 <span className="meta-value">3 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                         <img src={require('../assets/profile/Dev-pathways.png')} alt="Development Pathways Timeline" />
                    </section>

                    {/* Section 1: Overview & Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">OVERVIEW</div>
                        <div className="section-content">
                            <h2 className="content-title">Overview</h2>
                            <p className="emotional-hook">Bobo saw an opportunity to expand into developmental tracking by creating a product experience rooted in trusted milestone guidance. The challenge was that most developmental frameworks are clinically useful but emotionally difficult for parents to engage with, especially when presented as rigid checklists.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>I led UX for Development Pathways as a new product initiative, defining how milestone tracking could feel supportive, understandable, and scalable from the start.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🌍</span>
                                        <p>Milestone tracking is a top-3 priority for new parents, yet 60% lack a consistent, digital tool.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">The Problem</h2>
                            <p className="section-subtitle">Clinical milestone systems are typically designed for accuracy, not everyday usability. Left untranslated, they can feel formal, intimidating, and judgmental. That creates a poor emotional experience for parents and makes consistent engagement less likely.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>The challenge was to preserve clinical credibility without creating a pass/fail dynamic. Bobo needed an experience that could help parents understand development, track progress over time, and feel supported when a child was not yet meeting a milestone.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🏥</span>
                                        <p>72% of parents report feeling "milestone anxiety" when using traditional clinical checklists.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">📈</span>
                                        <p>Only 1 in 5 parents find raw CDC milestone data easy to navigate without professional translation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 2: Role & Approach */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">ROLE</div>
                        <div className="section-content">
                            <h2 className="content-title">My Role</h2>
                            <p className="section-subtitle">As UX lead, I was responsible for defining the experience from the ground up.</p>
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Product UX Strategy</h3>
                                    <p>Defining how milestone tracking could feel supportive and scalable from the start.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Information Architecture</h3>
                                    <p>Structuring the milestone navigation for ease of use across different age ranges.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Clinical Alignment</h3>
                                    <p>Collaborating with stakeholders to align usability with trustworthiness.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">APPROACH</div>
                        <div className="section-content">
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="constellation-title">The Approach</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Translating clinical guidance</h3>
                                        <p>Rethinking how milestones were written and presented using language parents could quickly understand.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Designing for reassurance</h3>
                                        <p>Intentionally designing for a supportive tone and progression model rather than a success/failure evaluation.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Building a scalable foundation</h3>
                                        <p>Structuring the experience to scale cleanly across age ranges and milestone groups without becoming overwhelming.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 4: CDC Milestone Review */}
                    <section className="casestudy-section">
                        <div className="section-content">
                            <h2 className="content-title">Reviewing & Translating CDC Guidance</h2>
                            <p className="section-subtitle">I reviewed clinical milestones from the CDC and converted them into parent-friendly checklists. By focusing on observable, natural behaviors rather than rigid clinical markers, we reduced parental anxiety while maintaining 100% medical accuracy.</p>
                            
                            <div className="dual-visual-grid">
                                <div className="visual-column">
                                    <div className="figjam-embed-container" style={{ overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--divider-default)', height: '850px', background: '#f8fafc' }}>
                                        <iframe 
                                            style={{ border: 'none' }} 
                                            width="100%" 
                                            height="100%" 
                                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FAMpiV93Ed4IPV53b5SvEwd%2FDevelopment-pathways%3Fnode-id%3D1-36" 
                                            allowFullScreen
                                            title="CDC Milestones FigJam"
                                        ></iframe>
                                    </div>
                                    <span className="visual-caption">CDC Milestones (Source)</span>
                                </div>
                                <div className="visual-column">
                                    <img src={require('../assets/profile/cdc-checklist.png')} alt="Categorization Mockup" className="process-visual" />
                                    <span className="visual-caption">Categorization Mockup</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>
                    
                    {/* Section 5: Showcase - Interaction Model */}
                    <section className="interaction-showcase">
                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Milestone Progress Visualization</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>To provide a holistic view of developmental growth, I designed a vertical scroll view for milestone progress. This was integrated into the data visualization profile page, allowing parents to see their child's journey at a glance.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/profile/milestone-visualization.png')} alt="Vertical Milestone Progress" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 5: Outcome */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Outcome</h2>
                            <h3 className="impact-headline">Confidence through Clarity</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">Supportive</span>
                                <p>Created a parent-friendly model for milestone tracking that builds confidence.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Scalable</span>
                                <p>Established a UX foundation for future developmental experiences.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Bridged</span>
                                <p>Created a stronger bridge between clinical credibility and everyday usability.</p>
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
