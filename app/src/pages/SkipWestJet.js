import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './SkipWestJet.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function SkipWestJet() {
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
                            Building Canada's largest food delivery partnership, bridging the gap between frequent flyers and their favorite local eats.
                        </h1>

                        <div className="project-metadata">
                            <div className="meta-col">
                                <span className="meta-label">Product</span>
                                <span className="meta-value">SkipTheDishes x WestJet</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Skills</span>
                                <span className="meta-value">Loyalty Integration, UX Flows, Partnership Strategy</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">My role</span>
                                <span className="meta-value">Senior Product Designer</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">12 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                         <img src={require('../assets/profile/SKIP X WESTJET.png')} alt="Skip x WestJet Partnership" />
                    </section>

                    {/* Section 1: Defining the Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Defining the Problem</h2>
                            <p className="emotional-hook">"Travel rewards are only valuable if they happen in the moment."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Cross-brand partnerships often fail because they are buried in settings. Skip and WestJet needed to bridge the gap between travel and utility, but users didn't realize they could spend "WestJet Dollars" on food until they were already at a busy checkout—where any friction leads to immediate abandonment.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">✈️</span>
                                        <p>65% of flyers found it difficult to use rewards across disconnected apps.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Research */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">RESEARCH</div>
                        <div className="section-content">
                            <h2 className="content-title">Discovery & Strategy</h2>
                            <p className="section-subtitle">We mapped the "Traveler's Journey" to find the precise moment where food and flight intersect.</p>
                            
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Competitive Analysis</h3>
                                    <p>Audited 10+ travel rewards programs; found that most buried point-redemption in deep menus, causing a 65% drop-off at checkout.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>User Flow Mapping</h3>
                                    <p>Mapped the "Landing Window"—the 30-minute stress window after touchdown where food intent is at its absolute peak.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Authorization Friction</h3>
                                    <p>Design Constraint: Users refuse to enter a password during a hungry checkout. We had to design an "Invisible Handshake" for secure, one-tap linking.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Abstract Value Gap</h3>
                                    <p>Design Constraint: Points feel like play-money. We transitioned to showing raw dollar values ($15 off) to drive immediate perceived value.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 3: Solution */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <h2 className="content-title">The One-Tap Bridge</h2>
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="constellation-title">Design Decisions</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Silent Account Bridging</h3>
                                        <p>Designed a secure handshake that links accounts in the background, removing the trust barrier of manual login.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Contextual Notifications</h3>
                                        <p>Triggered push notifications precisely when the plane lands, driving a 300% increase in reward utilization.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Invisible Handshake</h3>
                                        <p>Designed for secure, one-tap linking precisely when food intent is at its peak after touchdown.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="solution-visuals" style={{ marginTop: '40px' }}>
                                <div className="main-visual">
                                     <img src={require('../assets/profile/SKIP X WESTJET.png')} alt="Final Solution Interface" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 4: Showcase */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SHOWCASE</div>
                        <div className="section-content">
                            <h2 className="content-title">Seamless Reward Redemption Showcase</h2>
                            <div className="full-width-visual">
                                <div className="main-visual">
                                     <img src={require('../assets/profile/SKIP X WESTJET.png')} alt="Skip x WestJet Interface Showcase" />
                                </div>
                                <div className="visual-grid" style={{ marginTop: '20px' }}>
                                    <div className="placeholder-box"><span>Mockup: Rewards Dashboard</span></div>
                                    <div className="placeholder-box"><span>Mockup: Checkout Flow</span></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact & Learnings */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Impact</h2>
                            <h3 className="impact-headline">A Win for the Flyer</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">20k+</span>
                                <p>New members signed up in the first month following the redesigned linking experience.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">+15%</span>
                                <p>Increase in cross-platform rewards redemption and active usage.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Shipped</span>
                                <p>Successfully rolled out to millions of users with zero friction in the linking UI.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid">
                                <div className="learning-item">
                                    <h3>Reduce the "Ask"</h3>
                                    <p>We initially asked for too much data up front. Reducing the linking flow to a single tap increased conversion by 30%.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>Context is Currency</h3>
                                    <p>A reward shown when a user is at the airport is worth 10x more than the same reward shown in a generic email.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-section">
                        <h2 className="section-title">Next project</h2>
                        <Link to="/order-tracker" className="next-project-card">
                            <div className="next-meta">
                                <span className="next-badge">SHIPPED</span>
                                <h3>Order Tracker Redesign</h3>
                                <p>Real-time logistics and delivery visibility</p>
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
