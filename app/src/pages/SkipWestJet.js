import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './SkipWestJet.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import SummaryModal from '../components/SummaryModal';
import { useAudio } from '../context/AudioContext';
import { apiFetch } from '../lib/api';

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
            const response = await apiFetch('/api/summarize', {
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
            const response = await apiFetch('/api/audio', {
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
                            Led the design for the Skip x WestJet partnership, creating a seamless end-to-end experience for users to earn travel rewards through food delivery. The framework's success led to its adoption across Just Eat Takeaway markets globally.
                        </h1>

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
                        <div className="section-label">THE GOAL</div>
                        <div className="section-content">
                            <h2 className="content-title">Defining the Partnership Experience</h2>
                            <p className="emotional-hook">Creating a bridge between food delivery and travel rewards for millions of users.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>WestJet and Skip decided to form a strategic partnership to bring unique value to their shared customer base. The goal was simple: create an integrated product experience that allowed users to earn WestJet Dollars on Skip orders.</p>
                                    <p><strong>The Challenge:</strong> I needed to design a flow that felt native to both brands while handling the complexities of account linking and real-time reward tracking.</p>
                                    <p>This wasn't just about a one-time promotion; it was about building a persistent, trustworthy feature that added long-term value to the Skip ecosystem.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🤝</span>
                                        <h3>Objective</h3>
                                        <p>Build a scalable partnership framework that could be reused for future loyalty integrations across the platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Team */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">TEAM</div>
                        <div className="section-content">
                            <h2 className="content-title">Working Across Two Organizations</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>I worked alongside a Senior Project Manager and Senior Product Manager on the partnerships side, a Senior UX Researcher, and a cross-platform engineering team (Android, Web, iOS) to ship this experience end to end.</p>
                                    <p>As the Product Designer, I led the UX process: facilitating design exploration, creating wireframes and prototypes, validating solutions with research, and partnering closely with engineering throughout implementation.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Discovery */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">DISCOVERY</div>
                        <div className="section-content">
                            <h2 className="content-title">Research and Competitive Analysis</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>I partnered with a Senior UX Researcher to run moderated sessions on UserTesting.com, focused on customer attitudes toward rewards, partnerships, and account linking. The goal was to understand what would make a partner reward feel valuable, what would motivate participation, and what could create hesitation when connecting accounts.</p>
                                    <p>Alongside that, I reviewed loyalty and partnership experiences on adjacent platforms like <strong>Uber x Aeroplan</strong> and <strong>DashPass x Lyft</strong> to see how other gig and delivery products introduced partner value and moved customers into activation.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🔍</span>
                                        <h3>Key Patterns</h3>
                                        <p><strong>Lead with value</strong> — stronger experiences made the reward obvious before asking customers to act. <strong>Make it feel native</strong> — the best examples felt integrated into the rewards experience, not a standalone promotion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* User Flows */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">STRATEGY</div>
                        <div className="section-content">
                            <h2 className="content-title">Mapping the Discovery Journey</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>With research and competitive patterns in place, I mapped the experience customers would move through before account linking. The journey needed to balance clear value, low friction, and WestJet's requirement for explicit data-sharing consent.</p>
                                    <p>The core journey moved through four steps: <strong>discover</strong> the partnership, <strong>understand</strong> the six-month Skip+ benefit, <strong>review</strong> data sharing, and <strong>connect</strong> accounts. I explored two entry points for discovery — Settings and Rewards — before testing settled the direction.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🗺️</span>
                                        <h3>Core Journey</h3>
                                        <p>Discover → Understand the benefit → Review data sharing → Connect accounts.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="full-width-visual" style={{ marginTop: '40px', overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--divider-default)', height: '650px' }}>
                                <iframe
                                    style={{ border: 'none', background: '#f8fafc', marginTop: '-1px' }}
                                    width="100%"
                                    height="710"
                                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FQO7yLh4CNh3NIfk2SwZTTR%2FSKIP-X-WJ%3Fnode-id%3D0-1"
                                    allowFullScreen
                                    title="Skip x WestJet User Flow"
                                ></iframe>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Validation */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">VALIDATION</div>
                        <div className="section-content">
                            <h2 className="content-title">Usability Testing</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>I conducted moderated usability testing through UserTesting.com to validate the partnership experience before finalizing the direction. The goal was to understand whether customers could find the partnership, understand the benefit, and complete the linking flow without confusion — testing discoverability across Settings versus Rewards, comprehension of the six-month free Skip+ offer, clarity of the account-linking flow, and understanding of the required data-sharing consent.</p>
                                    <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>What We Learned</h3>
                                    <p>The core flow was understandable, but discoverability had the biggest impact on whether users engaged with the partnership. Users were more likely to notice and engage when it appeared within Rewards rather than Settings. The six months of free Skip+ gave users a clear reason to continue into the linking flow, and users were comfortable signing in through WestJet without viewing it as a security concern.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🧠</span>
                                        <h3>Insight</h3>
                                        <p>Rewards was the stronger entry point — users expect to find partnerships where they already look for value, not where they manage their accounts.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">🔒</span>
                                        <h3>Insight</h3>
                                        <p>Consent needed to be explicit, but not complicated — users understood the data-sharing requirement when it was clearly explained as part of the linking process.</p>
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
                                    <p>Testing proved users expected partnerships in Rewards, not Settings. I moved discovery and management to where users naturally looked for value.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Value Before Permission</h3>
                                    <p>I surfaced benefits before the linking flow. Users only proceed when tangible rewards are clear; permission without visible value feels like a risk.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Consent as Value Exchange</h3>
                                    <p>I framed permissions around the benefits users were enabling (earning travel value), rather than dense data-sharing jargon. This made consent intentional.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Persistent Management</h3>
                                    <p>I rejected one-time setup. A dedicated management surface allows users to view status and control permissions, building long-term confidence.</p>
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
                            <p className="section-subtitle">Four core product surfaces bridging two brands into a seamless product, not a promotion.</p>
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
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/skip-westjet/PartnershipsTab.png')} alt="Partnerships Tab in Rewards" />
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
                                    <p>A value-first destination framing the relationship entirely around user benefits. By explicitly outlining rewards upfront, I turned an intimidating account-linking request into an anticipated upgrade.</p>
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/skip-westjet/Partnership Landing Page.png')} alt="Partnership Landing Page" />
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
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/skip-westjet/Permission-request.png')} alt="Permission Request Flow" />
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
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/skip-westjet/partnership-management.png')} alt="Partnership Management Page" />
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
                            <h3 className="impact-headline">From Local Launch to Global Standard</h3>
                        </div>
                        
                        <div className="impact-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <div className="impact-card">
                                <span className="impact-value">500K</span>
                                <p>Skip+ activations driven by the WestJet partnership, making it a meaningful acquisition channel.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">2</span>
                                <p>Additional strategic partnerships (Live Nation and CIBC) reused this flow as a framework.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Global</span>
                                <p>The approach was later adopted more broadly by Just Eat Takeaway.com, extending the model beyond the Canadian Skip ecosystem.</p>
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
