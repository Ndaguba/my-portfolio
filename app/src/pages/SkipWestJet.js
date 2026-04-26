import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './SkipWestJet.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import SummaryModal from '../components/SummaryModal';
import { useAudio } from '../context/AudioContext';

export default function SkipWestJet() {
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
                body: JSON.stringify({ pageId: 'skip-westjet' })
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
                body: JSON.stringify({ pageId: 'skip-westjet' })
            });
            const data = await response.json();
            if (data.audioUrl) {
                playAudio(data.audioUrl, 'Skip x WestJet');
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
                            Led UX for the Skip x WestJet partnership, designing a trust-first experience connecting food delivery with travel rewards. By prioritizing user confidence over promotional mechanics, we made cross-brand value feel native, intuitive, and frictionless.
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
                                <span className="meta-value">SkipTheDishes x WestJet</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Skills</span>
                                 <span className="meta-value">Product Design, UX Strategy, Interaction Design, User Research</span>
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

                    {/* Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Designing Trust Across Brands</h2>
                            <p className="emotional-hook">Partnerships often fail because the UX creates hesitation, not because the offer is weak.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Users were asked to connect two major ecosystems—food delivery and airline loyalty—requiring explicit data-sharing permissions.</p>
                                    <p><strong>The Challenge:</strong> How do we make account linking feel secure and worthwhile without triggering distrust or abandonment?</p>
                                    <p>If the flow felt too promotional or legally heavy, users would bounce. This wasn't a marketing problem—it was a product trust problem.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">⚠️</span>
                                        <h3>Insight</h3>
                                        <p>Trust must be visible, not implied. Users abandon flows that feel overly legal or promotional before ever seeing the value.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Validation */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">VALIDATION</div>
                        <div className="section-content">
                            <h2 className="content-title">Testing Mental Models</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>We tested the end-to-end flow to validate comprehension, discoverability, and trust. Our goal: ensure the partnership felt familiar enough to be safe.</p>
                                    <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Aligning with Expectations</h3>
                                    <p>Users instantly understood the relationship, comparing it to established banking and airline loyalty programs. Instead of questioning the partnership, they immediately asked, <em>"What rewards do I get?"</em>—validating our native, non-promotional design approach.</p>
                                    <p>Crucially, testing revealed users naturally hunted for partnerships inside the <strong>Rewards</strong> tab, never <strong>Settings</strong>. This single insight drove a major architectural pivot.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🧠</span>
                                        <h3>Insight</h3>
                                        <p>Familiar mental models from banking and airline loyalty ecosystems significantly reduced permission anxiety during onboarding.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">🗺️</span>
                                        <h3>Insight</h3>
                                        <p>Users expect to find partnerships where they already look for value (Rewards), not where they manage their accounts (Settings).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Key Product Decisions */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">DECISIONS</div>
                        <div className="section-content">
                            <h2 className="content-title">Key Product Decisions</h2>
                            
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Rewards-First Architecture</h3>
                                    <p>Testing proved users expected partnerships in Rewards, not Settings. We moved discovery and management to where users naturally looked for value.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Value Before Permission</h3>
                                    <p>We surfaced benefits before the linking flow. Users only proceed when tangible rewards are clear; permission without visible value feels like a risk.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Consent as Value Exchange</h3>
                                    <p>We framed permissions around the benefits users were enabling (earning travel value), rather than dense data-sharing jargon. This made consent intentional.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Persistent Management</h3>
                                    <p>We rejected one-time setup. A dedicated management surface allows users to view status and control permissions, building long-term confidence.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Solution Intro */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <h2 className="content-title">A Trust-First Experience</h2>
                            <p className="section-subtitle">Four core product surfaces bridging two brands into a seamless product—not a promotion.</p>
                        </div>
                    </section>

                    {/* Solution - Interaction Showcase */}
                    <section className="interaction-showcase">
                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Partnerships Tab</h2>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--muted)', marginTop: '8px' }}>Rewards Discovery</h3>
                                </div>
                                <div className="interaction-right">
                                    <p>Placed natively within the Rewards tab to match natural mental models. This ensures partnerships are discovered as core product features, rather than hidden in Settings.</p>
                                    <div className="interaction-visual-box" style={{ background: 'rgba(0,0,0,0.03)', border: '1px dashed var(--divider-default)' }}>
                                        {/* Image Placeholder */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Partnership Landing Page</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>A value-first destination framing the relationship entirely around user benefits. By explicitly outlining rewards upfront, we turned an intimidating account-linking request into an anticipated upgrade.</p>
                                    <div className="interaction-visual-box" style={{ background: 'rgba(0,0,0,0.03)', border: '1px dashed var(--divider-default)' }}>
                                        {/* Image Placeholder */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Permission Request Flow</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>A transparent consent experience that translates dense data-sharing agreements into a clear value exchange. Framing permissions around earning travel rewards dramatically reduced drop-off while maintaining legal compliance.</p>
                                    <div className="interaction-visual-box" style={{ background: 'rgba(0,0,0,0.03)', border: '1px dashed var(--divider-default)' }}>
                                        {/* Image Placeholder */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Management Page</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>An ongoing control surface designed to preserve trust post-setup. Users can effortlessly monitor their status and revoke permissions at any time, eliminating the fear of a permanent data connection.</p>
                                    <div className="interaction-visual-box" style={{ background: 'rgba(0,0,0,0.03)', border: '1px dashed var(--divider-default)' }}>
                                        {/* Image Placeholder */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Outcome */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Outcome</h2>
                            <h3 className="impact-headline">Turning Trust into Adoption</h3>
                        </div>
                        
                        <div className="impact-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                            <div className="impact-card">
                                <span className="impact-value">72%</span>
                                <p>Account-link completion rate driven by value-first onboarding.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">41%</span>
                                <p>Drop-off reduction during permission requests by reframing consent.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">58%</span>
                                <p>Return rate to partnership management within 30 days, proving ongoing trust.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Zero Friction</span>
                                <p>Moving partnerships from Settings to Rewards eliminated a major adoption barrier.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                <div className="learning-item">
                                    <h3>Trust Is a Product Surface</h3>
                                    <p>Consent design is product design. How you ask for trust determines whether users believe the value is worth it.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>Mental Models Over Logic</h3>
                                    <p>System architecture doesn't matter to users. Designing for natural expectations was our most critical pivot.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>UX Breaks Partnerships First</h3>
                                    <p>Strong offers underperform if value is hard to access. Clarity and control matter more than the promotion.</p>
                                </div>
                            </div>
                            <p style={{ marginTop: '40px', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--muted)' }}>
                                This project reinforced that the best partnership experiences don't feel like partnerships. They feel native, obvious, and trustworthy.
                            </p>
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
