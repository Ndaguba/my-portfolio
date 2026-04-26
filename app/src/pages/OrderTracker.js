import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './OrderTracker.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import SummaryModal from '../components/SummaryModal';
import { useAudio } from '../context/AudioContext';

export default function OrderTracker() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [summary, setSummary] = useState('');
    const [isSummaryLoading, setIsSummaryLoading] = useState(false);
    const [isAudioLoading, setIsAudioLoading] = useState(false);
    const { playAudio } = useAudio();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSummarize = async () => {
        setIsSummaryOpen(true);
        if (summary) return;
        
        setIsSummaryLoading(true);
        try {
            const response = await fetch('/api/summarize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageId: 'order-tracker-redesign' })
            });
            const data = await response.json();
            setSummary(data.summary);
        } catch (error) {
            console.error('Error fetching summary:', error);
            setSummary("Failed to load summary.");
        } finally {
            setIsSummaryLoading(false);
        }
    };

    const handleAudio = async () => {
        setIsAudioLoading(true);
        try {
            const response = await fetch('/api/audio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageId: 'order-tracker-redesign' })
            });
            const data = await response.json();
            if (data.audioUrl) {
                playAudio(data.audioUrl, 'Order Tracker');
            }
        } catch (error) {
            console.error('Error generating audio:', error);
        } finally {
            setIsAudioLoading(false);
        }
    };

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

                        <div className="hero-actions">
                            <button 
                                className={`hero-pill-button ${isAudioLoading ? 'loading' : ''}`}
                                onClick={handleAudio}
                                disabled={isAudioLoading}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Google-Podcast-Logo--Streamline-Logos" height="20" width="20">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 1a1.5 1.5 0 0 0 -1.5 1.5V4a1.5 1.5 0 0 0 3 0V2.5A1.5 1.5 0 0 0 12 1Zm3.5 5.5a1.5 1.5 0 0 1 3 0V8a1.5 1.5 0 0 1 -3 0V6.5ZM5.5 7a1.5 1.5 0 1 1 3 0v4.5a1.5 1.5 0 0 1 -3 0V7ZM12 7a1.5 1.5 0 0 0 -1.5 1.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 12 7ZM2.5 9.75a1.5 1.5 0 0 0 -1.5 1.5v1.5a1.5 1.5 0 0 0 3 0v-1.5a1.5 1.5 0 0 0 -1.5 -1.5Zm3 6.25a1.5 1.5 0 0 1 3 0v1.5a1.5 1.5 0 0 1 -3 0V16Zm6.5 2.5a1.5 1.5 0 0 0 -1.5 1.5v1.5a1.5 1.5 0 0 0 3 0V20a1.5 1.5 0 0 0 -1.5 -1.5Zm9.5 -8.75a1.5 1.5 0 0 0 -1.5 1.5v1.5a1.5 1.5 0 0 0 3 0v-1.5a1.5 1.5 0 0 0 -1.5 -1.5Zm-6 2.75a1.5 1.5 0 0 1 3 0V17a1.5 1.5 0 0 1 -3 0v-4.5Z" clipRule="evenodd" strokeWidth="1"></path>
                                </svg>
                                {isAudioLoading ? 'Generating...' : 'Listen'}
                            </button>
                            <button 
                                className="hero-pill-button"
                                onClick={handleSummarize}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20">
                                    <path fill="currentColor" d="M19 18c0.5523 0 1 0.4477 1 1s-0.4477 1 -1 1H5c-0.55228 0 -1 -0.4477 -1 -1s0.44772 -1 1 -1zm0 -4c0.5523 0 1 0.4477 1 1s-0.4477 1 -1 1H5c-0.55228 0 -1 -0.4477 -1 -1s0.44772 -1 1 -1zm-7 -4c0.5523 0 1 0.4477 1 1s-0.4477 1 -1 1H5c-0.55228 0 -1 -0.4477 -1 -1s0.44772 -1 1 -1zm6 -8.5c0.5049 0 0.9268 0.32644 1.0801 0.77246l0.0273 0.09082 0.0664 0.22852c0.3705 1.1292 1.3017 2.00646 2.4629 2.30078 0.4917 0.12454 0.8633 0.56893 0.8633 1.10742 0 0.53848 -0.3717 0.9819 -0.8633 1.10645 -1.2386 0.31386 -2.2164 1.29161 -2.5303 2.53027 -0.1245 0.49168 -0.5679 0.86328 -1.1064 0.86328s-0.9819 -0.3716 -1.1064 -0.86328c-0.3139 -1.23866 -1.2917 -2.21641 -2.5303 -2.53027 -0.461 -0.11678 -0.8169 -0.51382 -0.8594 -1.00684L13.5 6l0.0039 -0.09961c0.0425 -0.49305 0.3984 -0.89103 0.8594 -1.00781 1.2384 -0.3139 2.2154 -1.29085 2.5293 -2.5293C17.0171 1.87165 17.4615 1.5 18 1.5M9 6c0.55228 0 1 0.44772 1 1s-0.44772 1 -1 1H5c-0.55228 0 -1 -0.44772 -1 -1s0.44772 -1 1 -1z" strokeWidth="1"></path>
                                </svg>
                                Summarize
                            </button>
                        </div>

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
            <SummaryModal 
                isOpen={isSummaryOpen} 
                onClose={() => setIsSummaryOpen(false)} 
                summary={summary}
                isLoading={isSummaryLoading}
            />
            <ChatPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
        </div>
    );
}
