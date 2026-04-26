import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './Forella.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import SummaryModal from '../components/SummaryModal';

export default function Forella() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [summary, setSummary] = useState('');
    const [isSummaryLoading, setIsSummaryLoading] = useState(false);
    const [isAudioLoading, setIsAudioLoading] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);

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
                body: JSON.stringify({ pageId: 'forella' })
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
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
            return;
        }

        setIsAudioLoading(true);
        try {
            const response = await fetch('/api/audio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageId: 'forella' })
            });
            const data = await response.json();
            if (data.audioUrl) {
                setAudioUrl(data.audioUrl);
                const audio = new Audio(data.audioUrl);
                audio.play();
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
                            Forella is a proactive AI personal assistant designed to manage the complexities of daily life through natural conversation and voice interaction.
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
                                <span className="meta-value">Forella AI</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Skills</span>
                                <span className="meta-value">Conversational UX, Voice AI, Interaction Design, Product Strategy</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">My role</span>
                                <span className="meta-value">End-to-end Product Design</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">4 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                        <img src={require('../assets/engineering/Forella.png')} alt="Forella AI Interface" />
                    </section>

                    {/* Section 1: Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">The Manual Friction</h2>
                            <p className="emotional-hook">"Traditional calendars are passive tools—they store info, but they don't help you act."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Most calendar apps are built around manual interaction. Users are expected to create events, set reminders, and organize priorities entirely on their own. This creates constant friction for something people do every day. The opportunity was to design something more intelligent: a true personal assistant that understands context and reduces planning effort.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🧠</span>
                                        <p>Users don't want a better calendar; they want fewer things to remember.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 2: Research/Insight */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">RESEARCH</div>
                        <div className="section-content">
                            <h2 className="content-title">Cognitive Load Reduction</h2>
                            <p className="section-subtitle">To bridge the gap between navigation and action, I focused on identifying where users felt the most planning fatigue.</p>
                            
                            <div className="section-grid">
                                <div className="text-content">
                                    <div style={{ marginBottom: '40px' }}>
                                        <h3>Life Coordination {'>'} Schedule Management</h3>
                                        <p>I shifted the product focus from optimizing event creation to reducing forgotten tasks and surfacing what matters now. The goal was to help users prepare ahead rather than just reacting to notifications.</p>
                                    </div>
                                    <div>
                                        <h3>Designing Intelligence</h3>
                                        <p>I benchmarked existing assistants to understand how to move from "reactive storage" to "proactive suggestions," ensuring the assistant felt anticipatory without becoming intrusive.</p>
                                    </div>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">📈</span>
                                        <h3>Insight</h3>
                                        <p>Reducing manual entry by 40% significantly increases long-term habit formation in planning tools.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">🛡️</span>
                                        <h3>Insight</h3>
                                        <p>Trust is the primary driver of adoption for AI assistants. Every action must be transparent and controllable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 3: Constraints */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">CONSTRAINTS</div>
                        <div className="section-content">
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="constellation-title">The Challenge of Trust</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Reliability</h3>
                                        <p>Calendars are critical; mistakes create immediate distrust. Every AI action required visible confirmation.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Low Friction</h3>
                                        <p>Replacing complex forms with natural language intentions without losing precision.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Proactive vs. Intrusive</h3>
                                        <p>Defining the boundaries of when the assistant should speak up and when it should stay silent.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Multi-modal Feedback</h3>
                                        <p>Ensuring voice interactions provided clear auditory cues so users didn't need to check their screens.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 4: Solution */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="content-title">The Proactive Coordinator</h2>
                                    <p className="section-subtitle" style={{ fontSize: '1.1rem', marginTop: '20px', lineHeight: '1.6' }}>An AI-native assistant designed to manage schedules through conversation, proactively suggest planning opportunities, and maintain trust through clear control loops.</p>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Natural Language Interactions</h3>
                                        <p>A conversational and voice interface that parses complex intentions into structured calendar events and reminders.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Trust-First Architecture</h3>
                                        <p>A transparent reasoning engine that explains why suggestions are made and requires approval for all critical schedule changes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 5: Interaction Showcase */}
                    <section className="interaction-showcase">
                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Conversational Creation</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>Users can type naturally—"Remind me to call Sarah next Thursday at 3 PM"—removing the friction of multi-step forms. The AI handles parsing, context detection, and linked reminders in one step.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/engineering/Forella.png')} alt="Conversational Interaction" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Proactive Planning</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>Forella identifies opportunities for assistance before the user asks, such as blocking lunch during back-to-back meetings or suggesting airport prep reminders based on flight details.</p>
                                    <div className="interaction-visual-box">
                                        <div className="placeholder-box">
                                            [Interactive Suggestion Mockup]
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Voice-First Execution</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>Designed for high-mobility moments, the Voice AI allows hands-free coordination. I focused on clear auditory feedback loops so users stay informed without needing to look at their screens.</p>
                                    <div className="interaction-visual-box">
                                        <div className="placeholder-box">
                                            [Voice Interaction State Mockup]
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Trust Through Visibility</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>Every AI recommendation explains its reasoning. By making "Why" a visible feature, we maintain user confidence and ensure the assistant remains a tool for support, not a source of uncertainty.</p>
                                    <div className="interaction-visual-box">
                                        <div className="placeholder-box">
                                            [Trust Confirmation Loop Mockup]
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Impact & Learnings */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Outcome</h2>
                            <h3 className="impact-headline">Scaling Planning Confidence</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">Proactive</span>
                                <p>Shifted user behavior from reactive schedule management to proactive life coordination.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Reliable</span>
                                <p>Established long-term trust through transparent AI reasoning and visible control loops.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Effortless</span>
                                <p>Reduced the cognitive load of daily planning by replacing manual forms with natural language.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid">
                                <div className="learning-item">
                                    <h3>Confidence over Intelligence</h3>
                                    <p>Designing AI products is not about adding chat; it's about designing confidence. Users adopt AI when they feel safe and in control.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>The Value of Silence</h3>
                                    <p>Sometimes the most helpful AI action is staying quiet. Knowing when not to intrude is just as important as being proactive.</p>
                                </div>
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
