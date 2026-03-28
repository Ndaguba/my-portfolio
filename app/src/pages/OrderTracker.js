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
                            Redesigning order tracking from the ground up to provide zero-friction visibility for millions of deliveries across Canada.
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

                    {/* Section 1: Overview */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Overview</h2>
                        <div className="section-grid">
                            <div className="text-content">
                                <p>A complete overhaul of the order tracking experience to provide real-time updates and proactive status information, reducing user anxiety and support volume.</p>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">📦</span>
                                    <p>Millions of daily users now have precise status visibility.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Problem */}
                    <section className="casestudy-section alt-bg">
                        <h2 className="section-title">Problem</h2>
                        <div className="section-grid">
                            <div className="text-content">
                                <p>The legacy order tracker was static and vague, leading to high support volumes as users felt unsure about where their orders were and when they would arrive.</p>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">☎️</span>
                                    <p>40% of support calls were related to order status inquiries.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Research */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Research</h2>
                        <p className="section-subtitle">Analyzed heatmaps and support data to pinpoint frictions in the tracking experience.</p>
                        
                        <div className="constraint-grid">
                            <div className="constraint-card">
                                <h3>Status Anxiety</h3>
                                <p>Found that most users checked the app 5+ times during a single delivery order.</p>
                            </div>
                            <div className="constraint-card">
                                <h3>Map vs Steps</h3>
                                <p>Discovered that users valued accurate status text ("Preparing your food") over pure map movement.</p>
                            </div>
                            <div className="constraint-card">
                                <h3>Edge Case Friction</h3>
                                <p>Identified that delayed or reassigned orders were the biggest source of user frustration.</p>
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
                                <p className="constraints-summary">Balancing complex logistics events with a simple, high-confidence user interface.</p>
                                <span className="constraints-label">Technical Constraints</span>
                                
                                <div className="constraint-item">
                                    <h3>GPS Latency</h3>
                                    <p>Designing for a smooth UI even when courier GPS updates are intermittent or less accurate.</p>
                                </div>
                                <div className="constraint-item">
                                    <h3>Event-Driven Sync</h3>
                                    <p>Ensuring that push notifications and in-app status updates were perfectly synchronized across platforms.</p>
                                </div>
                                <div className="constraint-item last">
                                    <h3>Legacy Status Mapping</h3>
                                    <p>Translating dozens of legacy backend status codes into human-readable steps without losing precision.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Prototyping */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Prototyping</h2>
                        <p className="section-subtitle">Iterating from status lists to a map-centric live journey.</p>
                        <div className="full-width-visual">
                            <div className="placeholder-box large">
                                <span>UX Explorations: Status Stepper vs Live Map View</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Solution */}
                    <section className="casestudy-section solution-section">
                        <div className="solution-header-layout">
                            <div className="solution-left">
                                <h2 className="section-title">Solution</h2>
                                <p className="solution-tagline">Visibility at every step</p>
                            </div>
                            <div className="solution-right">
                                <p className="solution-intro">The final solution features a progressive status journey and a real-time live map, ensuring users always know exactly what’s happening with their order.</p>
                                
                                <div className="solution-feature-list">
                                    <div className="feature-item">
                                        <span className="feature-icon">📍</span>
                                        <p>Real-time live map with courier tracking</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">📶</span>
                                        <p>Proactive status updates for any delays or issues</p>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🛡️</span>
                                        <p>Increased transparency into preparing and delivery steps</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="solution-visuals">
                            <div className="main-visual">
                                 <div className="placeholder-box"><span>Main Visual: Order Tracker Interface</span></div>
                            </div>
                            <div className="visual-grid">
                                <div className="placeholder-box"><span>Mockup: Detailed Steps</span></div>
                                <div className="placeholder-box"><span>Mockup: Map Interaction</span></div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact */}
                    <section className="casestudy-section">
                        <h2 className="section-title">Impact</h2>
                        <h3 className="impact-headline">A calmer delivery journey</h3>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">-25%</span>
                                <p>Reduction in status-related support calls</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">+15%</span>
                                <p>Increase in post-delivery order satisfaction</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Zero</span>
                                <p>Friction transition between old and new tracking UX</p>
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
