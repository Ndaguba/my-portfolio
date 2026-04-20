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
                            Led UX for a new loyalty partnership experience between Skip and WestJet, creating a seamless bridge between food delivery and travel rewards at national scale.
                        </h1>

                        <div className="project-metadata">
                            <div className="meta-col">
                                <span className="meta-label">Product</span>
                                <span className="meta-value">SkipTheDishes x WestJet</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Skills</span>
                                 <span className="meta-value">Product Design, Partnership UX, Journey Design, Strategic Thinking</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">My role</span>
                                 <span className="meta-value">Senior Product Designer</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Timeline</span>
                                 <span className="meta-value">6 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                         <img src={require('../assets/profile/SKIP X WESTJET.png')} alt="Skip x WestJet Partnership" />
                    </section>

                    {/* Section 1: Overview & Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">OVERVIEW</div>
                        <div className="section-content">
                            <h2 className="content-title">Overview</h2>
                            <p className="emotional-hook">Skip partnered with WestJet to create a new cross-brand experience that allowed users to connect loyalty value with everyday food ordering. This was not just a promotional surface. It was a new product experience that needed to feel coherent across two very different ecosystems: travel rewards and on-demand delivery.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>I led UX for the partnership experience, defining how users would understand the value, connect accounts, and redeem benefits without introducing unnecessary friction.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">The Problem</h2>
                            <p className="section-subtitle">Partnership products often fail when the value is conceptually strong but hard to access in the moment. In this case, the challenge was not awareness alone. It was usability.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Users needed to understand what the partnership offered, trust the account-linking flow, and act on that value in high-intent ordering moments. If the flow felt confusing, overly branded, or operationally heavy, the partnership would lose momentum despite its strategic potential.</p>
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
                            <p className="section-subtitle">As UX lead, I was responsible for shaping the end-to-end experience for the partnership.</p>
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>User Flow Design</h3>
                                    <p>Defining the fundamental flows for account linking and reward redemption.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Partnership Strategy</h3>
                                    <p>Aligning UX across Skip and partner requirements for a coherent brand experience.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Interaction Design</h3>
                                    <p>Reducing friction in high-intent moments to ensure a seamless checkout experience.</p>
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
                                        <h3>Making value understandable</h3>
                                        <p>Focusing on reducing cognitive load and making rewards value feel tangible and relevant in the ordering flow.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Reducing friction in linking</h3>
                                        <p>Designing the linking experience to feel lightweight, trustworthy, and as close to invisible as possible.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Designing for intent</h3>
                                        <p>Focusing on where partnership value would feel most meaningful and timely rather than treating it as a static promotion.</p>
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
                            <h3 className="impact-headline">A Win for the User</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">Coherent</span>
                                <p>Established a clearer model for cross-brand rewards integration at national scale.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Smooth</span>
                                <p>Created a smoother experience for linking and using partnership benefits.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Scalable</span>
                                <p>Built a stronger product foundation for loyalty-based experiences across brands.</p>
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
