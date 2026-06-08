import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './DevelopmentPathways.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import SummaryModal from '../components/SummaryModal';
import { useAudio } from '../context/AudioContext';
import { useFlags } from '../context/FlagsContext';
import { apiFetch } from '../lib/api';

export default function DevelopmentPathways() {
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
            const response = await apiFetch('/api/summarize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageId: 'development-pathways' })
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
            const response = await apiFetch('/api/audio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageId: 'development-pathways' })
            });
            const data = await response.json();
            if (data.audioUrl) {
                playAudio(data.audioUrl, 'Development Pathways');
            }
        } catch (error) {
            console.error('Error generating audio:', error);
        } finally {
            setIsAudioLoading(false);
        }
    };

    const { flags } = useFlags();

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
                            Led UX for a new milestone tracking experience that transformed CDC developmental guidance into a parent-friendly product designed to build confidence, not anxiety.
                        </h1>

                        {flags.ai_features_enabled && (
                            <div className="hero-actions">
                                <button
                                    className="hero-pill-button summarize-ai"
                                    onClick={handleSummarize}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20">
                                        <path fill="currentColor" d="M19 18c0.5523 0 1 0.4477 1 1s-0.4477 1 -1 1H5c-0.55228 0 -1 -0.4477 -1 -1s0.44772 -1 1 -1zm0 -4c0.5523 0 1 0.4477 1 1s-0.4477 1 -1 1H5c-0.55228 0 -1 -0.4477 -1 -1s0.44772 -1 1 -1zm-7 -4c0.5523 0 1 0.4477 1 1s-0.4477 1 -1 1H5c-0.55228 0 -1 -0.4477 -1 -1s0.44772 -1 1 -1zm6 -8.5c0.5049 0 0.9268 0.32644 1.0801 0.77246l0.0273 0.09082 0.0664 0.22852c0.3705 1.1292 1.3017 2.00646 2.4629 2.30078 0.4917 0.12454 0.8633 0.56893 0.8633 1.10742 0 0.53848 -0.3717 0.9819 -0.8633 1.10645 -1.2386 0.31386 -2.2164 1.29161 -2.5303 2.53027 -0.1245 0.49168 -0.5679 0.86328 -1.1064 0.86328s-0.9819 -0.3716 -1.1064 -0.86328c-0.3139 -1.23866 -1.2917 -2.21641 -2.5303 -2.53027 -0.461 -0.11678 -0.8169 -0.51382 -0.8594 -1.00684L13.5 6l0.0039 -0.09961c0.0425 -0.49305 0.3984 -0.89103 0.8594 -1.00781 1.2384 -0.3139 2.2154 -1.29085 2.5293 -2.5293C17.0171 1.87165 17.4615 1.5 18 1.5M9 6c0.55228 0 1 0.44772 1 1s-0.44772 1 -1 1H5c-0.55228 0 -1 -0.44772 -1 -1s0.44772 -1 1 -1z" strokeWidth="1"></path>
                                    </svg>
                                    <span className="summarize-ai-label">Summarize with AI</span>
                                </button>
                            </div>
                        )}

                        <div className="project-metadata">
                            <div className="meta-col">
                                <span className="meta-label">Product</span>
                                <span className="meta-value">Bobo Health</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Skills</span>
                                 <span className="meta-value">Product Design, Information Architecture, UX Strategy, Interaction Design</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">My role</span>
                                 <span className="meta-value">Senior Product Designer</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Timeline</span>
                                 <span className="meta-value">3 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                         <img src={require('../assets/profile/Dev-pathways.png')} alt="Development Pathways Timeline" />
                    </section>

                    {/* Section 1: Defining the Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Bridging the Confidence Gap</h2>
                            <p className="emotional-hook">"Milestones are the leading source of new-parent anxiety."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Most developmental frameworks are clinically accurate but emotionally intimidating. When presented as rigid, pass/fail checklists, they often leave parents feeling judged rather than supported. I found that parents don't need a medical database; they need a guide that helps them celebrate progress while providing reassurance during the messy reality of child development.</p>
                                    <p>The challenge was to preserve the CDC’s clinical credibility without creating a stressful emotional experience, transforming a formal milestone system into a supportive daily companion.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🏥</span>
                                        <p>72% of parents report feeling "milestone anxiety" when using traditional clinical checklists.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">📈</span>
                                        <p>Only 1 in 5 parents find raw CDC milestone data easy to navigate without professional translation.</p>
                                    </div>
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
                            <p className="section-subtitle">As UX lead, I was responsible for defining the experience from the ground up.</p>
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Product UX Strategy</h3>
                                    <p>Defining how milestone tracking could feel supportive and scalable from the start.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Information Architecture</h3>
                                    <p>Structuring the milestone navigation for ease of use across different age ranges.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Clinical Alignment</h3>
                                    <p>Collaborating with stakeholders to align usability with trustworthiness.</p>
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
                                        <h3>Translating clinical guidance</h3>
                                        <p>Rethinking how milestones were written and presented using language parents could quickly understand.</p>
                                    </div>
                                    <div className="constraint-item">
                                        <h3>Designing for reassurance</h3>
                                        <p>Intentionally designing for a supportive tone and progression model rather than a success/failure evaluation.</p>
                                    </div>
                                    <div className="constraint-item last">
                                        <h3>Building a scalable foundation</h3>
                                        <p>Structuring the experience to scale cleanly across age ranges and milestone groups without becoming overwhelming.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 4: CDC Milestone Review */}
                    <section className="casestudy-section">
                        <div className="section-content">
                            <h2 className="content-title">Reviewing & Translating CDC Guidance</h2>
                            <p className="section-subtitle">I reviewed clinical milestones from the CDC and converted them into parent-friendly checklists. By focusing on observable, natural behaviors rather than rigid clinical markers, we reduced parental anxiety while maintaining 100% medical accuracy.</p>
                            
                            <div className="full-width-visual" style={{ marginTop: '40px', overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--divider-default)', height: '850px' }}>
                                <iframe 
                                    style={{ border: 'none' }} 
                                    width="100%" 
                                    height="100%" 
                                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FAMpiV93Ed4IPV53b5SvEwd%2FDevelopment-pathways%3Fnode-id%3D1-36" 
                                    allowFullScreen
                                    title="CDC Milestones FigJam"
                                ></iframe>
                            </div>
                            <span className="visual-caption">CDC Milestones (Source)</span>
                        </div>
                    </section>

                    {/* Section 5: Showcase - Interaction Model */}
                    <section className="interaction-showcase">
                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Developmental Grouping</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>To provide a structured understanding of progress, I categorized clinical milestones into 4 core domains. I integrated a custom icon system for each group to provide clear visual representation, making it easier for parents to track development across areas like speech, motor skills, and social bonding.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Dev-path/Milestone-group.png')} alt="Developmental Grouping" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Age-Specific Categorization</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>To maintain clarity and reduce cognitive load, I structured the milestone database into age-specific buckets. By surfacing only the milestones relevant to a child's current developmental stage, we ensured the experience felt personal and focused rather than overwhelming.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Dev-path/Month-group.png')} alt="Age-Specific Categorization" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Milestone Progress Visualization</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>To provide a holistic view of developmental growth, I designed a vertical scroll view for milestone progress. This was integrated into the data visualization profile page, allowing parents to see their child's journey at a glance.</p>
                                    <div className="interaction-visual-box flush-bottom">
                                        <img src={require('../assets/Dev-path/Path.png')} alt="Vertical Milestone Progress" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Key Product Decisions */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">STRATEGY</div>
                        <div className="section-content">
                            <h2 className="content-title">Key Product Decisions</h2>
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Avoiding Pass/Fail Milestones</h3>
                                    <p>We intentionally avoided rigid completion scoring because it increased parental anxiety during testing. Instead, we designed for progress and reassurance, helping parents see milestones as developmental guidance rather than a judgment system.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Age-Based Surfacing</h3>
                                    <p>Showing the full milestone database overwhelmed users and increased drop-off. We surfaced only age-relevant milestones to reduce cognitive load and create a sense of achievable progress.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Clinical Language Translation</h3>
                                    <p>Raw CDC terminology created confusion and dependency on external interpretation. We translated milestones into observable everyday behaviors while preserving medical accuracy.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Section 5: Outcome */}
                    <section className="casestudy-section">
                        <div className="impact-header">
                            <h2 className="section-title">Outcome</h2>
                            <h3 className="impact-headline">Confidence through Clarity</h3>
                        </div>
                        
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">74%</span>
                                <p>of active parents completed at least one milestone check within their first 14 days, showing strong adoption of the tracking experience.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">82%</span>
                                <p>task completion rate during usability testing, validating the clarity of the information architecture and age-relevant navigation.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">67%</span>
                                <p>of parents reported feeling “more confident” compared to interpreting raw CDC milestone checklists alone.</p>
                            </div>
                        </div>
                    </section>


                </main>
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
