import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './EchoDesignSystem.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SummaryModal from '../components/SummaryModal';
import { useAudio } from '../context/AudioContext';

export default function EchoDesignSystem() {
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
                body: JSON.stringify({ pageId: 'echo-design-system' })
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
                body: JSON.stringify({ pageId: 'echo-design-system' })
            });
            const data = await response.json();
            if (data.audioUrl) {
                playAudio(data.audioUrl, 'Echo Design System');
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
                            Echo is a tokenized, human-centered design language built to bridge the gap between design precision and engineering execution.
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
                                <span className="meta-value">Bobo Health</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Skills</span>
                                <span className="meta-value">Design Tokens, IA, System Architecture, Documentation</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Team</span>
                                <span className="meta-value">Product Design & Engineering</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">Ongoing</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                         <img src={require('../assets/profile/echo.png')} alt="Echo Design System Architecture" />
                    </section>

                    {/* Section 1: Defining the Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Defining the Problem</h2>
                            <p className="emotional-hook">"A design system is a living engine, not a static library."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>As Bobo Health grew, UI inconsistency became a major bottleneck. Designers were designing in pixels, but engineers were building in flexible units. This <strong>"Translation Gap"</strong> led to massive visual bugs and an engineering team that had to re-guess every design decision during handoff.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🎨</span>
                                        <p>Manual UI updates to cross-platform themes previously took weeks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 2: The Approach */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">APPROACH</div>
                        <div className="section-content">
                            <h2 className="content-title">The Approach</h2>
                            <p className="section-subtitle">We combined aesthetic audits with technical interviews to map out where the system was failing our teams.</p>
                            
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Engineering Interviews</h3>
                                    <p>Found that 60% of CSS work was spent on overrides. The team was treating the system as a "suggestion" rather than a foundation.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>System Mapping</h3>
                                    <p>Learned that most bugs weren't from "bad design," but from a lack of shared taxonomy (Pixels vs Rem).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">INSIGHTS</div>
                        <div className="section-content">
                            <h2 className="content-title">Research Themes</h2>
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Interdisciplinary Audits</h3>
                                    <p>Spoke with engineers to identify why 60% of CSS work was spent on overrides. The team lacked a shared language.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>System Taxonomy</h3>
                                    <p>Design Constraint: Pixels don't translate to code variables. We had to design an immutable token structure to bridge this gap.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Contrast Accessibility</h3>
                                    <p>Design Constraint: Compliance was being "skipped" during sprints. We baked WCAG 2.1 checks directly into the color engine tokens.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Governance Logic</h3>
                                    <p>Designed a contribution model that allows the library to grow without becoming a "collection of orphans."</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 3: Solution */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <h2 className="content-title">The Unified Language</h2>
                            
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="constellation-title">Design Decisions</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Immutable Tokens</h3>
                                        <p>Designed a Semantic Token architecture that maps abstract values (e.g., Pink-500) to functional uses (e.g., CTA-Background).</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Governance by Design</h3>
                                        <p>Designed a tiered contribution flow that allows designers to "propose" components, keeping the system alive but governed.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>System Taxonomy</h3>
                                        <p>The disconnect between design tools and code was the #1 source of debt. We designed a 1:1 tokenized bridge.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="solution-visuals" style={{ marginTop: '40px' }}>
                                <div className="main-visual">
                                     <img src={require('../assets/profile/echo.png')} alt="Echo Design System Library" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 4: Showcase */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SHOWCASE</div>
                        <div className="section-content">
                            <h2 className="content-title">The Living Library Showcase</h2>
                            <div className="full-width-visual">
                                <div className="placeholder-box large">Echo Design System High-Fidelity UI Library Visuals</div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Impact & Learnings */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Impact</h2>
                            <h3 className="impact-headline">A Resilient Foundation</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">2X</span>
                                <p>Increase in design-to-engineering handoff speed for new features since tokenization.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">40%</span>
                                <p>Reduction in cross-platform visual regression bugs and layout inconsistencies.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">100%</span>
                                <p>Unified dark mode coverage across all core flagship applications with zero manual overrides.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid">
                                <div className="learning-item">
                                    <h3>Systems are Living</h3>
                                    <p>A design system is never "finished." Success is measured by how well the team can evolve the tokens, not how perfect the initial library was.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>Governance is Key</h3>
                                    <p>Building the tokens was 20% of the work. The remaining 80% was building the social culture of documentation and contribution.</p>
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
