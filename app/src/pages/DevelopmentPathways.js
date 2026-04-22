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

                    {/* Section 1: Defining the Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Bridging the Confidence Gap</h2>
                            <p className="emotional-hook">"Milestones are the leading source of new-parent anxiety."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Most developmental frameworks are clinically accurate but emotionally intimidating. When presented as rigid, pass/fail checklists, they often leave parents feeling judged rather than supported. I found that parents don't need a medical database; they need a guide that helps them celebrate progress while providing reassurance during the messy reality of child development.</p>
                                    <p>The challenge was to preserve the CDC’s clinical credibility without creating a stressful emotional experience, transforming a formal milestone system into a supportive daily companion.</p>
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
                            
                            <div className="full-width-visual" style={{ marginTop: '40px', overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--divider-default)', height: '850px' }}>
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
                    </section>

                    {/* Section 5: Showcase - Interaction Model */}
                    <section className="interaction-showcase">
                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Developmental Grouping</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>To provide a structured understanding of progress, I categorized clinical milestones into five core domains. This grouping allows parents to track development across specific areas like speech, motor skills, and social bonding, making the data more actionable and less overwhelming.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Dev-path/Milestone-group.png')} alt="Developmental Grouping" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Age-Specific Categorization</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>To maintain clarity and reduce cognitive load, I structured the milestone database into age-specific buckets. By surfacing only the milestones relevant to a child's current developmental stage, we ensured the experience felt personal and focused rather than overwhelming.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Dev-path/Month-group.png')} alt="Age-Specific Categorization" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Milestone Progress Visualization</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>To provide a holistic view of developmental growth, I designed a vertical scroll view for milestone progress. This was integrated into the data visualization profile page, allowing parents to see their child's journey at a glance.</p>
                                    <div className="interaction-visual-box flush-bottom">
                                        <img src={require('../assets/Dev-path/milestones.png')} alt="Vertical Milestone Progress" />
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
