import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './PoppyAI.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function PoppyAI() {
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
                            Simplifying child care with a 24/7 pediatric assistant that turns messy, natural language into actionable guidance and logging.
                        </h1>

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

                    {/* Section 7: Impact & Learnings */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Impact</h2>
                            <h3 className="impact-headline">Scaling Parental Confidence</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">30%</span>
                                <p>Increase in overall health tracking, with a majority of logs now submitted via natural language.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">24%</span>
                                <p>Lift in subscription conversion as Poppy AI became the primary driver for premium upgrades.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">40%</span>
                                <p>Increase in daily interaction time as users shifted from simple logging to developmental inquiries.</p>
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
            <ChatPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
        </div>
    );
}
