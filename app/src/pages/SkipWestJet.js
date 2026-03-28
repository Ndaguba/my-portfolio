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

                    {/* Section 1: Overview */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Overview</h2>
                        <div className="section-grid">
                            <div className="text-content">
                                <p>Designing the integration of Skip’s food delivery ecosystem with WestJet Rewards, allowing millions of flyers to earn and redeem value across both platforms seamlessly.</p>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">✈️</span>
                                    <p>Millions of WestJet members now have direct access to food rewards.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Problem */}
                    <section className="casestudy-section alt-bg">
                        <h2 className="section-title">Problem</h2>
                        <div className="section-grid">
                            <div className="text-content">
                                <p>Integrating two distinct ecosystems (travel vs food) into a single user flow was physically and logically complex. Users found existing rewards programs disconnected and difficult to navigate during their travel journeys.</p>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">🤔</span>
                                    <p>65% of flyers found it difficult to understand how to use rewards across apps.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Research */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Research</h2>
                        <p className="section-subtitle">Analyzed travel patterns and delivery habits of WestJet Rewards members to identify the highest-impact integration points.</p>
                        
                        <div className="constraint-grid">
                            <div className="constraint-card">
                                <h3>Contextual Rewards</h3>
                                <p>Discovered that users were most interested in rewards during flight delays or immediately after landing.</p>
                            </div>
                            <div className="constraint-card">
                                <h3>Brand Synergy</h3>
                                <p>Ensured the visual language felt authoritative like WestJet but approachable like Skip.</p>
                            </div>
                            <div className="constraint-card">
                                <h3>Technical Hurdles</h3>
                                <p>Identified that disparate API structures were the leading cause of user-facing latency in rewards updates.</p>
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
                                <p className="constraints-summary">Balancing complex loyalty API requirements with a frictionless, high-speed delivery experience.</p>
                                <span className="constraints-label">Technical Constraints</span>
                                
                                <div className="constraint-item">
                                    <h3>Real-Time Token Sync</h3>
                                    <p>Syncing WestJet Rewards balance with Skip’s checkout in under 500ms to avoid friction at payment.</p>
                                </div>
                                <div className="constraint-item">
                                    <h3>Security & Authentication</h3>
                                    <p>Designing a secure OAuth flow that didn't feel like a heavy hurdle for users just wanting to order a meal during their journey.</p>
                                </div>
                                <div className="constraint-item">
                                    <h3>Data Privacy & Multi-brand Consent</h3>
                                    <p>Managing the legal requirement for cross-platform data sharing through a transparent, high-confidence consent journey that avoided user drop-off.</p>
                                </div>
                                <div className="constraint-item last">
                                    <h3>Error Handling & Fallbacks</h3>
                                    <p>Designing systems for when the WestJet Rewards API was offline, ensuring users could still complete their food orders without frustration.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Prototyping */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Prototyping</h2>
                        <p className="section-subtitle">Iterating on the "Connect Account" flow and contextual rewards dashboards.</p>
                        <div className="full-width-visual">
                            <div className="placeholder-box large">
                                <span>UX Flows: From Flight Status to Food Checkout</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Solution */}
                    <section className="casestudy-section solution-section">
                        <div className="solution-header-layout">
                            <div className="solution-left">
                                <h2 className="section-title">Solution</h2>
                                <p className="solution-tagline">Seamless flight-to-food integration</p>
                            </div>
                            <div className="solution-right">
                                <p className="solution-intro">The final solution features a unified rewards dashboard and a one-tap account link, making it easier than ever for flyers to fuel their journeys.</p>
                                
                                <div className="solution-feature-list">
                                    <div className="feature-item">
                                        <span className="feature-icon">🌉</span>
                                        <p>One-tap rewards linking across WestJet and Skip apps</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🎫</span>
                                        <p>Contextual rewards based on active flight status</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">💎</span>
                                        <p>Unified earnings view for cross-platform transparency</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="solution-visuals">
                            <div className="main-visual">
                                 <div className="placeholder-box"><span>Main Visual: Partnership Interface</span></div>
                            </div>
                            <div className="visual-grid">
                                <div className="placeholder-box"><span>Mockup: Rewards Dashboard</span></div>
                                <div className="placeholder-box"><span>Mockup: Checkout Flow</span></div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Impact</h2>
                        <h3 className="impact-headline">A massive win for flyers</h3>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">+15%</span>
                                <p>Increase in cross-platform rewards redemption</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">+20k</span>
                                <p>New WestJet members signed up via Skip in the first month</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Seamless</span>
                                <p>High positive sentiment in airport delivery pilots</p>
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
