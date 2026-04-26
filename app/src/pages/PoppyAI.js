import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './PoppyAI.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import { useAudio } from '../context/AudioContext';

export default function PoppyAI() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [summary, setSummary] = useState('');
    const [isSummaryLoading, setIsSummaryLoading] = useState(false);
    const [isAudioLoading, setIsAudioLoading] = useState(false);
    const { playAudio, audioUrl: currentAudioUrl, isPlaying } = useAudio();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSummarize = async () => {
        setIsSummaryOpen(true);
        if (summary) return; // Use cached summary in state
        
        setIsSummaryLoading(true);
        try {
            const response = await fetch('/api/summarize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageId: 'poppy-ai' })
            });
            const data = await response.json();
            setSummary(data.summary);
        } catch (error) {
            console.error('Error fetching summary:', error);
            setSummary("Failed to load summary. Please try again.");
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
                body: JSON.stringify({ pageId: 'poppy-ai' })
            });
            const data = await response.json();
            if (data.audioUrl) {
                playAudio(data.audioUrl, 'Poppy AI');
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
                            Simplifying child care with a 24/7 pediatric assistant that turns messy, natural language into actionable guidance and logging.
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
                                <span className="meta-value">Product design, Conversational UX, User research, AI Prompting</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">My role</span>
                                <span className="meta-value">Lead Product Designer</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">3 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                        <img src={require('../assets/profile/Frame 23458.png')} alt="Poppy AI Interface" />
                    </section>

                    {/* Section 1: Defining the Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Defining the Gap</h2>
                            <p className="emotional-hook">"3 AM is the loneliest hour for a new parent."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>To build an effective solution, I needed to understand why parents abandon vital infant tracking during critical development windows. I found that traditional logbooks fail because they are cold, high-friction, and emotionally taxing during the 3 AM "Exhaustion Window"—parents don't need another database; they need a partner that remembers their child's unique history when they can't.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🏥</span>
                                        <p>78% of parents value personalized, child-specific insights over generic medical advice.</p>
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
                            <p className="section-subtitle">To bridge the "intent gap" between messy parental inputs and clinical-grade logging, I combined competitive audits with direct physician testing.</p>
                            
                            <div className="section-grid">
                                <div className="text-content">
                                    <div style={{ marginBottom: '40px' }}>
                                        <h3>Competitive Audit</h3>
                                        <p>I benchmarked leading pediatric apps to identify where user cognitive load peaked, discovering that "Table Fatigue" was the primary driver of churn because users felt like data-entry clerks rather than parents.</p>
                                    </div>
                                    <div>
                                        <h3>Clinical Validation</h3>
                                        <p>I collaborated with doctors to audit AI response safety, establishing that an empathetic "Nurse Partner" tone is a core safety requirement to ensure medical authority never feels cold or alarming.</p>
                                    </div>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">📈</span>
                                        <h3>Insight</h3>
                                        <p>Form-based apps suffer a 60% drop-off because they prioritize data-capture over parent-support.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">🏥</span>
                                        <h3>Insight</h3>
                                        <p>Tone is a safety feature. Empathetic dialogue is the only way to maintain clinical trust at 3 AM.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 2.5: User/AI Interaction Flow */}
                    <section className="casestudy-section">
                        <div className="section-content">
                            <h2 className="content-title">User/AI Interaction Model</h2>
                            <p className="section-subtitle">To manage technical latency while maintaining trust, I structured a transparent conversational state-machine. By surfacing "thinking cycles" and tool-call states, parents understand exactly why the AI requires time to query clinical databases during critical health checks.</p>

                            <div className="full-width-visual" style={{ marginTop: '40px', overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--divider-default)', height: '650px' }}>
                                <iframe 
                                    style={{ border: 'none', background: '#f8fafc', marginTop: '-1px' }} 
                                    width="100%" 
                                    height="710" 
                                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2F8LMDh0uQpnDxjnS6sJbBdi%2FPOPPY-AI-INTERACTION-FLOW%3Fnode-id%3D0-1" 
                                    allowFullScreen
                                    title="Poppy AI Interaction Flow"
                                ></iframe>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 2.6: Technical Constraints */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">CONSTRAINTS</div>
                        <div className="section-content">
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="constellation-title">Technical Challenges</h2>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Guided Correction</h3>
                                        <p>Handling vague human input (e.g. "he ate well") and interpreting intentions without adding friction.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Contextual Recall</h3>
                                        <p>Reducing cognitive load for exhausted parents by surfacing history exactly when and where it's needed.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Guidance vs. Jargon</h3>
                                        <p>Maintaining clinical authority through empathetic language rather than medical terminology.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Thinking States</h3>
                                        <p>Managing latency trust by surfacing category tags during secure clinical medical lookups.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 3: Solution */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <div className="constraints-layout">
                                <div className="constraints-left">
                                    <h2 className="content-title">The Conversational Pediatrician</h2>
                                    <p className="section-subtitle" style={{ fontSize: '1.1rem', marginTop: '20px', lineHeight: '1.6' }}>A conversational pediatric assistant designed to transform messy, natural language inputs into structured health logs and doctor-verified clinical guidance.</p>
                                </div>
                                <div className="constraints-right">
                                    <div className="constraint-item">
                                        <h3>Empathetic Interaction Design</h3>
                                        <p>A conversational interface that converts messy, natural language inputs into structured clinical data points by handling the cognitive load of tracking for parents.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Clinical Transparency</h3>
                                        <p>A transparent reasoning engine that surfaces search intent and doctor-verified pediatric sources to provide medical authority during conversational health lookups.</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>

                    {/* Section 4: Showcase - Interaction Model */}
                    <section className="interaction-showcase">
                        <div className="interaction-item"> {/* Force re-sync */}
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Conversational Foundations</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>The initial chat state introduces the 24/7 pediatric assistant as a friendly partner. By greeting parents by name and offering clear, conversational prompts, the interface lowers the barrier to initial interaction during stressful moments.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/projects/poppy-interaction/Initial.png')} alt="Initial Chat State" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Managing Latency with Transparency</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>During complex medical lookups, the AI surfaces its internal 'thinking cycles' through interactive state-markers. This transparency maintains user trust during the brief latency required for secure clinical database queries.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/projects/poppy-interaction/thinking-2.png')} alt="Thinking State" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Seamless Data Synchronization</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>Once a trackable event is identified—such as a feeding or symptom—the assistant confirms the log in real-time. This turns messy natural language into structured records, closing the data-gap between home life and clinical care.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/projects/poppy-interaction/Complete-session.png')} alt="Complete Session State" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Proactive Context Gathering</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>To ensure accuracy in clinical logging, I designed an interaction model where the AI proactively asks for missing details. By using supportive, low-friction prompts, we capture precise data points—like volume or duration—without overwhelming the parent during high-stress moments.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/projects/poppy-interaction/Sleeep-modal.png')} alt="Proactive Context Gathering" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 6: Key Product Decisions */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">STRATEGY</div>
                        <div className="section-content">
                            <h2 className="content-title">Key Product Decisions</h2>
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Designing Thinking States</h3>
                                    <p>Users lost trust during silent latency and assumed the AI had failed. We introduced visible reasoning states to make processing transparent and preserve confidence during sensitive medical interactions.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Avoiding Pure Automation</h3>
                                    <p>Automatically logging vague inputs created dangerous ambiguity in health records. We chose guided clarification over silent assumptions to protect data accuracy and user trust.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Tone as a Safety Feature</h3>
                                    <p>Clinical accuracy alone was not enough. During physician reviews, cold medical language increased anxiety, so we designed for an empathetic “nurse partner” tone that balanced authority with reassurance.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 7: Impact & Learnings */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Impact</h2>
                            <h3 className="impact-headline">Scaling Parental Confidence</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">68%</span>
                                <p>Logs completed via Poppy AI instead of traditional forms, proving a preference for conversational logging.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">42%</span>
                                <p>Reduction in abandoned sessions by replacing rigid forms with guided conversational prompts.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">37%</span>
                                <p>Faster log completion time by reducing input friction and using proactive follow-up questions.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid">
                                <div className="learning-item">
                                    <h3>Confidence over Jargon</h3>
                                    <p>Parents don't need complex medical data; they need to know their child is okay. Tone is just as important as accuracy.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>The Value of "Failure"</h3>
                                    <p>Designing empathetic "I don't know" states for the AI was crucial for maintaining long-term trust in medical guidance.</p>
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
