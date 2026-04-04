import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './OrderTracker.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function OrderTracker() {
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
                            Redesigning order tracking from the ground up to provide real-time visibility and reduce support volume for millions of deliveries.
                        </h1>

                        <div className="project-metadata">
                            <div className="meta-col">
                                <span className="meta-label">Product</span>
                                <span className="meta-value">SkipTheDishes Order Tracker</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Skills</span>
                                <span className="meta-value">Mobile Design, Real-time Interaction, Logistics UX</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">My role</span>
                                <span className="meta-value">Senior Product Designer</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">16 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                         <img src={require('../assets/profile/Delivery-tracker.png')} alt="Order Tracker Redesign" />
                    </section>

                    {/* Section 1: Defining the Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Defining the Problem</h2>
                            <p className="emotional-hook">"Waiting for food shouldn't feel like staring into a void."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Order tracking is a high-stakes moment for Skip’s millions of users. The legacy system was vague and static, leading to a **40% support call volume** for "Where is my order?" (WISMO) inquiries. Our UI failing to provide real-time confidence forced users to call a human for information a computer already had.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">☎️</span>
                                        <p>High support volume due to lack of real-time visibility.</p>
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
                            <p className="section-subtitle">We combined logistics data with behavioral audits to understand why users "stress-refresh" the app.</p>
                            
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Competitive Analysis</h3>
                                    <p>Audited 5 global delivery apps. Found that most fail during the "Blind Spot"—the 10-minute gap where the courier is waiting at the restaurant.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Refresh Loop Audit</h3>
                                    <p>Design Constraint: Uncertainty drives "Stress Refreshing." We had to design active reassurance moments to keep users from manual refreshing.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Motion Integrity</h3>
                                    <p>Design Constraint: Small location jumps look like "system bugs." We designed a soft-motion buffer to mask data jitter and maintain visual trust.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Status Taxonomy</h3>
                                    <p>Mapped 50+ archaic backend codes into 5 simple human stages to eliminate user guessing during the hunger window.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 3: Solution */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <h2 className="content-title">The Real-Time Narrative</h2>
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="constellation-title">Design Decisions</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Smoothing the Jump</h3>
                                        <p>Designed a soft-motion buffer to mask data jitter and maintain visual trust during courier transit.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Proactive Reassurance</h3>
                                        <p>Designed alert cards for restaurant delays, explaining the status before the user feels the need to call support.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Reassurance moments</h3>
                                        <p>Uncertainty drives "Stress Refreshing." We designed active moments to keep users from manual refreshing.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="solution-visuals" style={{ marginTop: '40px' }}>
                                <div className="main-visual">
                                     <img src={require('../assets/profile/Delivery-tracker.png')} alt="Final Tracking Interface" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 4: Showcase */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SHOWCASE</div>
                        <div className="section-content">
                            <h2 className="content-title">Live Tracking Interaction Showcase</h2>
                            <div className="full-width-visual">
                                <div className="main-visual">
                                     <img src={require('../assets/profile/Delivery-tracker.png')} alt="Final Tracking Interface Showcase" />
                                </div>
                                <div className="visual-grid" style={{ marginTop: '20px' }}>
                                    <div className="placeholder-box"><span>Mockup: Detailed Steps</span></div>
                                    <div className="placeholder-box"><span>Mockup: Map Interaction</span></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact & Learnings */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Impact</h2>
                            <h3 className="impact-headline">A Calmer Journey</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">-25%</span>
                                <p>Reduction in status-related support calls (WISMO) during the nationwide rollout.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">+15%</span>
                                <p>Increase in post-delivery satisfaction scores for order visibility.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Shipped</span>
                                <p>Seamless transition to 100% of the market with positive user sentiment.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid">
                                <div className="learning-item">
                                    <h3>Transparency Breeds Trust</h3>
                                    <p>Even bad news is better than silence. Telling a user a restaurant is busy reduces support calls more than saying "Soon."</p>
                                </div>
                                <div className="learning-item">
                                    <h3>Precision over Movement</h3>
                                    <p>High-fidelity status text does more for a user's mental calm than a high-fidelity moving icon on a map.</p>
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
