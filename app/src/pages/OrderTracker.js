import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './OrderTracker.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import SummaryModal from '../components/SummaryModal';
import { useAudio } from '../context/AudioContext';
import { useFlags } from '../context/FlagsContext';
import { apiFetch } from '../lib/api';

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
            const response = await apiFetch('/api/summarize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageId: 'order-tracker' })
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
                body: JSON.stringify({ pageId: 'order-tracker' })
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
                            Evolving order tracking from a status screen into a scalable post-order experience.
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
                                <span className="meta-value">Skip — Consumer Mobile Experience</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Focus</span>
                                 <span className="meta-value">Delivery Experience, Information Architecture, Platform Scalability</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">My role</span>
                                 <span className="meta-value">Product Designer</span>
                             </div>
                             <div className="meta-col">
                                 <span className="meta-label">Timeline</span>
                                 <span className="meta-value">5 weeks</span>
                             </div>
                        </div>
                    </header>

                    <section className="hero-visual">
                        <div className="placeholder-box large">Hero — redesigned Order Tracker across delivery states</div>
                    </section>

                    {/* Section 1: Overview & Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">OVERVIEW</div>
                        <div className="section-content">
                            <h2 className="content-title">Overview</h2>
                            <p className="emotional-hook">As Skip expanded its delivery experience, the Order Tracker was being asked to do significantly more than it was originally designed for.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>What had started as a relatively straightforward way for customers to understand the status of their order was becoming an important surface for communication, safety, support, grocery fulfilment and new business opportunities.</p>
                                    <p>I worked on rethinking the experience so it could accommodate these growing needs while keeping the thing customers cared about most at the centre: <strong>where is my order, and when will it arrive?</strong></p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">📦</span>
                                        <h3>Objective</h3>
                                        <p>Evolve a single-purpose status screen into an extensible foundation for Skip's post-order experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">CHALLENGE</div>
                        <div className="section-content">
                            <h2 className="content-title">The Order Tracker was running out of room</h2>
                            <p className="section-subtitle">The existing experience worked well when its primary responsibility was communicating order status. But as the delivery ecosystem evolved, new requirements continued to compete for the same limited space.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>We needed to support courier chat, delivery verification codes, additional delivery instructions, grocery item substitutions, retail media, post-checkout upselling and multi-partner pooled delivery.</p>
                                    <p>Adding each requirement independently would have gradually turned the tracker into a collection of competing modules. The challenge wasn't simply <strong>where to put the new features</strong> — it was figuring out <strong>what the Order Tracker needed to become.</strong></p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🧩</span>
                                        <h3>Competing for space</h3>
                                        <p>Courier chat, delivery codes, delivery instructions, grocery substitutions, retail media, upselling and multi-partner pooled delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="full-width-visual" style={{ marginTop: '40px' }}>
                                <div className="interaction-visual-box placeholder">
                                    <span className="placeholder-text">Existing Order Tracker — annotated with where the scalability problems appeared</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">WHY IT MATTERED</div>
                        <div className="section-content">
                            <h2 className="content-title">Why this mattered</h2>
                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>01 — Customer confidence</h3>
                                    <p>Waiting for food is inherently uncertain. Customers want to know whether their order has been confirmed, whether preparation is progressing, where their courier is and whether anything requires their attention. The tracker needed to communicate progress more clearly and reduce the anxiety that comes from not knowing.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>02 — Delivery reliability</h3>
                                    <p>Skip was also introducing delivery verification codes. The feature had already demonstrated a 55% reduction in undelivered orders in other markets, creating an opportunity to improve successful handoffs while giving customers and couriers greater confidence at the point of delivery.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>03 — Business growth</h3>
                                    <p>The existing architecture limited our ability to introduce new revenue opportunities. Retail media, upselling and multi-partner experiences needed somewhere to live — but they couldn't come at the expense of the customer's primary delivery information.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">DESIGN QUESTION</div>
                        <div className="section-content">
                            <h2 className="content-title">How might we make the Order Tracker significantly more capable without making it feel significantly more complicated?</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Instead of treating every new requirement as another component to fit onto the existing screen, I looked at the tracker as a <strong>system of information with different levels of urgency.</strong></p>
                                    <p>Some information is critical right now. Some requires customer action. Some provides reassurance. And some creates additional value but should never interfere with the core delivery journey.</p>
                                    <p>That distinction gave us a framework for deciding what should appear, when it should appear and how much attention it should demand.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🧠</span>
                                        <h3>Reframe</h3>
                                        <p>Not "where do the new features go?" but "what level of urgency does each piece of information carry?"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PRINCIPLES</div>
                        <div className="section-content">
                            <h2 className="content-title">Design principles</h2>

                            <div className="constraint-grid">
                                <div className="constraint-card">
                                    <h3>Progress should always be obvious</h3>
                                    <p>A customer should be able to open the tracker and understand the state of their order almost immediately.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Surface information when it becomes relevant</h3>
                                    <p>Delivery codes, substitutions and courier communication shouldn't compete for attention throughout the entire journey. They should become prominent when customers actually need them.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Protect the core experience</h3>
                                    <p>Commercial opportunities such as advertising and upselling needed to coexist with tracking rather than overwhelm it. The customer's order always remained the primary hierarchy.</p>
                                </div>
                                <div className="constraint-card">
                                    <h3>Design for what comes next</h3>
                                    <p>Rather than solving for one new requirement at a time, the structure needed to accommodate future delivery capabilities without requiring another fundamental redesign.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    <section className="casestudy-section asymmetric">
                        <div className="section-label">ANXIETY</div>
                        <div className="section-content">
                            <h2 className="content-title">More information isn't always more reassuring</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>One of the important tensions in the project was that customers naturally want more information while waiting for an order — but adding more information can also make an interface harder to understand.</p>
                                    <p>Rather than exposing everything simultaneously, the redesign prioritized <strong>progressive disclosure</strong>. The experience could change alongside the order:</p>
                                    <p><strong>Order confirmed → Preparing → Courier assigned → On the way → Arriving → Delivered</strong></p>
                                    <p>At each stage, the tracker could prioritize the information and actions most relevant to that moment. The goal was to make the experience feel less like repeatedly checking a status page and more like being kept informed throughout the delivery.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🌡️</span>
                                        <h3>Insight</h3>
                                        <p>Customers want more information while they wait, but more information on screen makes an interface harder to read. Timing resolves the tension.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="full-width-visual" style={{ marginTop: '40px' }}>
                                <div className="interaction-visual-box placeholder">
                                    <span className="placeholder-text">Progressive disclosure across the six delivery states</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Solution Intro */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">SOLUTION</div>
                        <div className="section-content">
                            <h2 className="content-title">A more flexible Order Tracker</h2>
                            <p className="section-subtitle">A clearer hierarchy between order progress, contextual actions and secondary content — not a new UI, but a more extensible foundation for Skip's post-order experience.</p>
                        </div>
                    </section>

                    {/* Solution - Interaction Showcase */}
                    <section className="interaction-showcase">
                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Order Progress</h2>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--muted)', marginTop: '8px' }}>The primary hierarchy</h3>
                                </div>
                                <div className="interaction-right">
                                    <p>The state of the order stays the first thing a customer reads, at every stage of delivery. Everything else in the experience is arranged around it rather than competing with it.</p>
                                    <div className="interaction-visual-box placeholder">
                                        <span className="placeholder-text">Redesigned Order Tracker — order progress</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Delivery Verification</h2>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--muted)', marginTop: '8px' }}>Making handoffs more reliable</h3>
                                </div>
                                <div className="interaction-right">
                                    <p>Customers receive a code to provide to their courier at handoff, confirming the order reached the right person. The model had already demonstrated a 55% reduction in undelivered orders in other markets, so the design challenge was integrating it naturally: easy to discover when needed, difficult to miss at the moment of delivery, and quiet enough not to distract before it becomes relevant.</p>
                                    <div className="interaction-visual-box placeholder">
                                        <span className="placeholder-text">Delivery code — discovery, states and handoff moment</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Courier Communication</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>Chat and delivery instructions become prominent once a courier is assigned, rather than occupying space throughout the entire order. The contextual layer lets communication surface at the point it can actually change the outcome.</p>
                                    <div className="interaction-visual-box placeholder">
                                        <span className="placeholder-text">Courier chat and delivery instructions</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Grocery Substitutions</h2>
                                </div>
                                <div className="interaction-right">
                                    <p>Grocery fulfilment introduced decisions that require customer action while the order is still being assembled. Substitutions are treated as an action-required state, given the attention that demands, and resolved before it reaches the handoff.</p>
                                    <div className="interaction-visual-box placeholder">
                                        <span className="placeholder-text">Grocery item substitutions — action required state</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interaction-item">
                            <div className="interaction-header">
                                <div className="interaction-left">
                                    <h2>Room for Growth</h2>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--muted)', marginTop: '8px' }}>Monetization surfaces</h3>
                                </div>
                                <div className="interaction-right">
                                    <p>Instead of treating advertising, upselling or partner experiences as additions competing with delivery information, the new hierarchy provided defined areas where secondary experiences could appear appropriately — giving the business room to explore retail media, post-checkout upselling and multi-partner pooling without compromising the primary journey.</p>
                                    <div className="interaction-visual-box placeholder">
                                        <span className="placeholder-text">Retail media and upsell placements within the new hierarchy</span>
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
                            <h3 className="impact-headline">One redesign, multiple product opportunities</h3>
                        </div>

                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">Scalable</span>
                                <p>Established a foundation capable of supporting a growing delivery ecosystem rather than a single tracking use case.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Capable</span>
                                <p>Accommodated delivery verification, courier communication, grocery substitutions and richer delivery information.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">Commercial</span>
                                <p>Opened defined space for new monetization surfaces without compromising the primary customer journey.</p>
                            </div>
                        </div>

                        <div className="learnings-block">
                            <h2 className="section-title">Learnings</h2>
                            <div className="learnings-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                <div className="learning-item">
                                    <h3>Structure Outlives Features</h3>
                                    <p>Solving for one requirement at a time produces a screen that has to be redesigned again. Solving for levels of urgency produces a foundation that absorbs the next requirement.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>Timing Is Hierarchy</h3>
                                    <p>Deciding when something appears is as much a hierarchy decision as deciding how large it is. Progressive disclosure let the tracker carry more without reading as more.</p>
                                </div>
                                <div className="learning-item">
                                    <h3>Commercial Space Must Be Designed</h3>
                                    <p>Monetization added defensively will always feel like an intrusion. Given a defined place in the hierarchy, it can coexist with the customer's primary need.</p>
                                </div>
                            </div>
                            <p style={{ marginTop: '40px', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--muted)' }}>
                                Most importantly, the experience continued to optimize around the fundamental customer need: “Help me understand what's happening with my order and what I need to do next.”
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
