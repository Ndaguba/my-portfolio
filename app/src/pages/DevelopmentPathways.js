import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './DevelopmentPathways.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function DevelopmentPathways() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-study-container">
            <div className={`case-study-content ${isPanelOpen ? 'panel-open' : ''}`}>
                <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />

                <main className="case-study-page">
                    <Link to="/" className="back-link">
                        <IoArrowBack /> Back to Work
                    </Link>

                    <header className="case-study-header">
                        <h1 className="case-study-title">Development Pathways</h1>
                        <p className="case-study-subtitle">Transforming clinical CDC milestones into an intuitive tracking experience that reduces parental anxiety and builds confidence.</p>
                    </header>

                    {/* PROJECT OVERVIEW */}
                    <section className="case-study-section">
                        <span className="section-label">Project</span>
                        <h2>Milestone tracking for modern parents</h2>
                        <p>I designed a system that translates clinical CDC guidelines into personalized, understandable progress pathways. By removing clinical jargon, we made it easy for parents to track their child's development with confidence.</p>

                        <div className="grid-2" style={{ marginTop: '32px' }}>
                            <div className="info-block">
                                <span className="info-label">ROLE</span>
                                <span className="info-value">Lead Product Designer</span>
                            </div>
                            <div className="info-block">
                                <span className="info-label">SCOPE</span>
                                <span className="info-value">IA, UX Flows, Interaction & Visual Design</span>
                            </div>
                            <div className="info-block">
                                <span className="info-label">TIMELINE</span>
                                <span className="info-value">8 weeks</span>
                            </div>
                            <div className="info-block">
                                <span className="info-label">PLATFORM</span>
                                <span className="info-value">iOS Mobile App</span>
                            </div>
                        </div>
                    </section>

                    {/* PROBLEM */}
                    <section className="case-study-section">
                        <span className="section-label">Problem</span>
                        <h2>Clinical data breeds anxiety</h2>
                        <p>Authoritative resources like CDC milestones use dense, medical language that's difficult to interpret without training. Most apps present these as static, overwhelming lists that lack context and progression, leaving parents feeling more anxious than informed.</p>
                    </section>

                    {/* PROCESS */}
                    <section className="case-study-section">
                        <span className="section-label">Process</span>
                        <h2>Thinking in progress, not charts</h2>

                        <p>I conducted 1:1 virtual interviews with 8 parents to understand why clinical data felt so overwhelming. I observed parents consistently skipping medical headers (like "Gross Motor") in favor of age-based answers. This revealed a core friction: the mental load of "translating" clinical taxonomy into everyday parenting questions.</p>

                        <div className="insight-card">
                            <p><strong>Key Insight:</strong> Parents think in questions ("What should they be doing now?"), not medical groupings. This reframed our goal from <em>presenting data</em> to <em>communicating progress</em>.</p>
                        </div>

                        <p>I translated raw CDC data into a hierarchy: Child → Timeline → Skill Categories → Milestones.</p>

                        <h3>Exploring Concepts</h3>
                        <div className="concept-options">
                            <div className="concept-card">
                                <h4>Age-Based Lists</h4>
                                <p className="pros">✓ Simple</p>
                                <p className="cons">✗ Overwhelming</p>
                            </div>

                            <div className="concept-card">
                                <h4>Pure Timeline</h4>
                                <p className="pros">✓ Progression</p>
                                <p className="cons">✗ Hard to scan</p>
                            </div>

                            <div className="concept-card">
                                <h4>Category Checklists</h4>
                                <p className="pros">✓ Familiar</p>
                                <p className="cons">✗ No sense of time</p>
                            </div>

                            <div className="concept-card selected">
                                <h4>Hybrid Timeline</h4>
                                <p className="pros">✓ Best of all</p>
                                <p className="pros">✓ Contextual growth</p>
                            </div>
                        </div>
                    </section>

                    {/* SOLUTION */}
                    <section className="case-study-section">
                        <span className="section-label">Solution</span>
                        <h2>A journey, not a checklist</h2>
                        <p>The final design uses a horizontal timeline for orientation and category-based checklists for action, creating a supportive, non-evaluative experience.</p>

                        <div className="diagram-placeholder">[HERO UI: Profile Timeline & Category Checklist]</div>

                        <div className="grid-2">
                            <div>
                                <h3>Contextual Details</h3>
                                <p>Each milestone uses plain-language explanations and real-world examples to help parents understand and support their child's growth.</p>
                            </div>
                            <div>
                                <h3>Design Principles</h3>
                                <ul>
                                    <li><strong>Progress over evaluation:</strong> No "behind" labels.</li>
                                    <li><strong>Clarity:</strong> Actionable, human language.</li>
                                    <li><strong>Orientation:</strong> Clear "You are here" markers.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* OUTCOME */}
                    <section className="case-study-section">
                        <span className="section-label">Outcome</span>
                        <h2>Confidence through clarity</h2>

                        <div className="metrics-grid">
                            <div className="metric-card">
                                <p className="metric-value">42%</p>
                                <p className="metric-label">Increase in weekly downloads</p>
                            </div>
                            <div className="metric-card">
                                <p className="metric-value">100</p>
                                <p className="metric-label">Number of feature Shares</p>
                            </div>
                            <div className="metric-card">
                                <p className="metric-value">28%</p>
                                <p className="metric-label">New signup conversion lift</p>
                            </div>
                        </div>

                        <p><strong>Key Learnings:</strong> Strong architecture is the foundation for simple UI. By framing development around <em>progress</em> rather than assessment, we reduced user anxiety and increased long-term engagement.</p>
                    </section>
                </main>

                <Footer />
            </div>
            <ChatPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
        </div>
    );
}
