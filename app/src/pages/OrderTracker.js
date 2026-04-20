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
                            Led the redesign of Skip’s order tracking experience by introducing a bottom-sheet architecture that created a more flexible foundation for logistics, monetization, and post-purchase growth.
                        </h1>

                        <div className="project-metadata">
                            <div className="meta-col">
                                <span className="meta-label">Product</span>
                                <span className="meta-value">SkipTheDishes Order Tracker</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Skills</span>
                                 <span className="meta-value">Mobile Product Design, Logistics UX, Platform Thinking, Monetization Design</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">My role</span>
                                 <span className="meta-value">Senior Product Designer</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Timeline</span>
                                 <span className="meta-value">5 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                         <img src={require('../assets/profile/Delivery-tracker.png')} alt="Order Tracker Redesign" />
                    </section>

                    {/* Section 1: Overview & Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">OVERVIEW</div>
                        <div className="section-content">
                            <h2 className="content-title">Overview</h2>
                            <p className="emotional-hook">Order tracking was one of the most frequently visited surfaces in the Skip experience, but it had become too limited for the evolving needs of the business. What had historically functioned as a status page needed to become a more extensible product surface.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>I led UX for the redesign of the tracking experience, with the goal of creating a new structural foundation that could support emerging logistics requirements and unlock new business opportunities.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">The Problem</h2>
                            <p className="section-subtitle">The challenge was bigger than improving visibility during delivery. Skip needed the tracking experience to do more.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>The existing model did not create enough flexibility for PIN-based handoff flows, multi-partner delivery, and monetization opportunities. The experience needed a new architecture that could support all of that without becoming cluttered or overwhelming.</p>
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
                            <p className="section-subtitle">As UX lead, I was responsible for rethinking the experience and defining the new interaction model.</p>
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Product UX Strategy</h3>
                                    <p>Rethinking the tracking surface from a status page to a flexible platform surface.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Bottom-Sheet Architecture</h3>
                                    <p>Introducing a new interaction model that allows the experience to scale gracefully.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Monetization Design</h3>
                                    <p>Creating space for additional merchandising and upsell opportunities during transit.</p>
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
                                        <h3>Turning page into platform</h3>
                                        <p>Introducing a bottom-sheet model that allowed the experience to scale as new business needs were added.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Operational simplicity</h3>
                                        <p>Designing for complex logistics (PIN codes, pooled delivery) while keeping the experience simple for the user.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Creating room for growth</h3>
                                        <p>Creating space for merchandising and upsell opportunities while the user is actively engaged with their order.</p>
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
                            <h3 className="impact-headline">A Calmer Journey</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">Extensible</span>
                                <p>Repositioned order tracking into a more extensible platform surface inside Skip.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Flexible</span>
                                <p>Created a new bottom-sheet architecture that supports evolving logistics requirements.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Strategic</span>
                                <p>Unlocked room for post-purchase upsell and additional monetization surfaces.</p>
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
