import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './OrderTracker.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import SummaryModal from '../components/SummaryModal';
import { useFlags } from '../context/FlagsContext';

const PAGE_SUMMARY = `**The ask.** Add delivery verification codes to the Skip Order Tracker. Just Eat had already shipped them and seen a 65% drop in undelivered orders, worth an estimated $1M a year at Skip's volume.

**The problem.** The tracker was not an empty screen. A courier message and an advertising placement already sat as cards on top of the map, and more requirements were queued behind the code. Mocking the code up as one more card pushed the map, the thing customers open the tracker to see, completely out of view.

**The decision.** Rather than ship the code and redesign again in six months, I argued for changing the scope: rebuild how the tracker decides what to show, then place the code inside that structure.

**The insight.** Starbucks, DoorDash and Uber Eats had all landed on the same answer. One bottom sheet holds everything, over a map that stays visible behind it. A card can only cover the map. A sheet grows and scrolls.

**The research.** Just Eat had already studied information hierarchy in delivery tracking, so I skipped discovery and designed against their findings, putting the time into testing instead.

**The outcome.** The tracker moved into a single sheet: status and ETA at the top, the delivery code rising as the courier approaches, courier contact once there is a courier, ads at the bottom. Testing showed it read as clearer rather than fuller. The redesign is in development, and the delivery code, grocery substitutions and pooled deliveries all have a place in it.`;

export default function OrderTracker() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [summary, setSummary] = useState('');
    const [isSummaryLoading, setIsSummaryLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // The summary is written ahead of time rather than generated. The delay and
    // shimmer exist so the interaction reads the way people expect it to.
    const handleSummarize = async () => {
        setIsSummaryOpen(true);
        if (summary) return;

        setIsSummaryLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1400));
        setSummary(PAGE_SUMMARY);
        setIsSummaryLoading(false);
    };

    const { flags } = useFlags();

    return (
        <div className="case-study-container order-tracker-page">
            <div className={`case-study-content ${isPanelOpen ? 'panel-open' : ''}`}>
                <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />

                <main className="case-study-page">
                    <header className="case-study-header">
                        <Link to="/" className="back-link">
                            <IoArrowBack /> Back
                        </Link>
                        
                        <div className="shipped-badge">
                            <span className="dot"></span> IN DEVELOPMENT
                        </div>

                        <h1 className="hero-statement">
                            Rebuilding the Skip Order Tracker so it could hold what came next
                        </h1>

                        <p className="hero-supporting">
                            I was asked to add delivery codes to the Order Tracker. Mocking them up showed the tracker had run out of room, so I proposed rebuilding how it decides what to show before adding anything else to it.
                        </p>

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
                        <img src={require('../assets/order-again.png')} alt="Skip Order Tracker redesign" />
                    </section>

                    {/* 1. Original project */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">01 — ORIGINAL PROJECT</div>
                        <div className="section-content">
                            <h2 className="content-title">What started as a new requirement</h2>
                            <p className="emotional-hook">The project began with a single addition to the Order Tracker: delivery verification codes.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>The case for them was already made. In Just Eat markets we had introduced delivery codes and seen a <strong>65% drop in undelivered orders</strong>. At Skip&apos;s volume that put the saving at an estimated <strong>$1M a year</strong> in orders that never reached the customer.</p>
                                    <p>My job was to find them a home in the tracker.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">📦</span>
                                        <h3>Original ask</h3>
                                        <p>Introduce delivery verification codes into the existing Order Tracker.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">📉</span>
                                        <h3>65% drop</h3>
                                        <p>In undelivered orders after introducing delivery codes in Just Eat markets.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">💰</span>
                                        <h3>$1M a year</h3>
                                        <p>Estimated saving from reducing undelivered orders at Skip.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 2. Challenge */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">02 — CHALLENGE</div>
                        <div className="section-content">
                            <h2 className="content-title">There was nowhere to put it</h2>
                            <p className="section-subtitle">The tracker was not an empty screen waiting for a new feature.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>It already carried a courier message and an advertising placement. Both sat as cards on top of the map, and both had been added the same way: find a gap, drop in a card. There were more requirements coming behind them, including grocery substitutions and pooled deliveries.</p>
                                    <p>So the question was not where the code would fit. It was <strong>what happens to the tracker if we keep answering that question the same way.</strong></p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 3. Current state */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">03 — CURRENT STATE</div>
                        <div className="section-content">
                            <h2 className="content-title">What customers already saw</h2>
                            <p className="section-subtitle">Each new feature had arrived as its own card over the map. Two of them were already there before we added anything.</p>
                            <div className="current-tracker-grid">
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Current.png')} alt="Existing Order Tracker with an advertising placement" />
                                    </div>
                                    <p className="current-tracker-caption">An advertising placement sits between the map and the delivery details customers came to read.</p>

                                </div>
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Current-2.png')} alt="Existing Order Tracker with multi-partner pooled delivery information" />
                                    </div>
                                    <p className="current-tracker-caption">Multi-partner pooled delivery adds a second order to track, extending the stack of cards.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider current-tracker-section-divider"></div>

                    {/* 4. State if we implement delivery codes */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">04 — WHAT DELIVERY CODES WOULD DO</div>
                        <div className="section-content">
                            <h2 className="content-title">So we tried it</h2>
                            <p className="section-subtitle">Before proposing anything larger, I mocked up the delivery code the way it was meant to be built: as one more card in the stack.</p>
                            <div className="current-tracker-grid">
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/DC-COLLAPSED.png')} alt="Order Tracker with the delivery code collapsed, stacked under a courier message and an advertising placement" />
                                    </div>
                                    <p className="current-tracker-caption">Collapsed, the code sits under a courier message and a Netflix ad. The map is already barely visible.</p>
                                </div>
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/DC-EXPANED.png')} alt="Order Tracker with the delivery code expanded, pushing the map fully out of view" />
                                    </div>
                                    <p className="current-tracker-caption">Expanded to show the code itself, the stack pushes down far enough that the map is gone.</p>
                                </div>
                            </div>
                            <blockquote className="pull-quote">
                                A feature meant to build confidence at handoff couldn&apos;t come at the cost of the one thing the tracker existed to show.
                            </blockquote>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 5. Order Tracker redesign proposal */}
                    <section className="casestudy-section asymmetric turning-point">
                        <div className="section-label">05 — REDESIGN PROPOSAL</div>
                        <div className="section-content">
                            <h2 className="content-title">I asked to change the scope</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>I could have shipped the code. There was space if I collapsed it by default, and the feature would have worked.</p>
                                    <p>But the mockup had shown me the real cost. Every card we added took a bite out of the map, and four more requirements were queued behind this one. Solving it card by card meant redesigning the tracker again in six months.</p>
                                    <p>So I took the mockups to the product and engineering leads and argued for a different piece of work: <strong>rebuild how the tracker decides what to show, then place the delivery code inside that structure.</strong> The feature would ship later, but it would ship into something that could hold what came next.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 6. Design — competitive analysis + design proposal */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">06 — COMPETITIVE ANALYSIS</div>
                        <div className="section-content">
                            <h2 className="content-title">How everyone else solved it</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>I started by looking at products with the same problem. All of them carry courier contact, order detail and commercial content on top of a live map, and all of them had more to fit than room to fit it.</p>
                                    <p>They had arrived at the same answer. <strong>One bottom sheet holds everything, over a map that stays visible behind it.</strong> Status, ETA, progress, courier contact, order details and ads all sit inside that single container. Nothing floats loose on the map.</p>
                                    <p>That one structural difference explained our problem. A card can only cover the map. A sheet grows and scrolls, so it can hold a fifth thing without costing anything the customer was already looking at.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🔍</span>
                                        <h3>Key insight</h3>
                                        <p>One bottom sheet holding all information, instead of separate components floating over the map.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="competitor-grid">
                                <div className="competitor-card">
                                    <div className="competitor-visual">
                                        <img src={require('../assets/SB.png')} alt="Starbucks order tracking screen" />
                                    </div>
                                    <h3>Starbucks</h3>
                                    <p>A fixed sheet below the map carries status, ETA, progress and order details in one stack. Nothing overlays the map itself.</p>
                                </div>
                                <div className="competitor-card">
                                    <div className="competitor-visual">
                                        <img src={require('../assets/DD.png')} alt="DoorDash order tracking screen" />
                                    </div>
                                    <h3>DoorDash</h3>
                                    <p>A draggable sheet over a full map. Courier contact, order details and a paid add-on all sit inside it. The customer pulls up for more rather than being shown more.</p>
                                </div>
                                <div className="competitor-card">
                                    <div className="competitor-visual">
                                        <img src={require('../assets/UE.png')} alt="Uber Eats order tracking screen showing the delivery PIN" />
                                    </div>
                                    <h3>Uber Eats</h3>
                                    <p>The closest precedent for our problem. The delivery PIN sits inside the sheet as a bright row under the progress bar, so it is impossible to miss at the door and never covers the map.</p>
                                </div>
                            </div>

                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 7. Research and findings */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">07 — RESEARCH &amp; FINDINGS</div>
                        <div className="section-content">
                            <h2 className="content-title">We already had the research</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <img src={require('../assets/JE.png')} alt="Just Eat" className="research-logo" />
                                    <p>Skip sits inside the same group as Just Eat, who had already run studies on information hierarchy in delivery tracking. That work answered the question I would otherwise have spent weeks on: <strong>what customers actually want while they wait</strong>, and how that changes as the order moves.</p>
                                    <p>So I did not run a discovery phase. Repeating research a sister brand had already done would have cost the project time without telling us anything new. I took their findings as the starting point, designed against them, and put the time into testing the result instead.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🤝</span>
                                        <h3>Why no discovery phase</h3>
                                        <p>The research already existed inside the group. Rerunning it would have delayed the work without changing the answer.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">⏱️</span>
                                        <h3>Where the time went</h3>
                                        <p>Into designing against evidence we already trusted, and testing whether it held up in our tracker.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="content-title" style={{ marginTop: '60px' }}>What the two pointed to</h2>
                            <p className="section-subtitle">The audit gave us a structure. The Just Eat research told us how to order what went inside it.</p>
                            <div className="theme-grid">
                                <div className="theme-card">
                                    <span className="theme-number">01</span>
                                    <h3>The map is the constant</h3>
                                    <p>Every product kept the map continuously visible and put everything else in a container over it. Whatever the tracker carried, it couldn&apos;t come at the cost of seeing where the order was.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">02</span>
                                    <h3>Status anchors the sheet</h3>
                                    <p>Order status and ETA sat at the top of the sheet in every case. Customers open the tracker to answer one question, and it should never require scrolling.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">03</span>
                                    <h3>Relevance moves with the delivery</h3>
                                    <p>From the Just Eat work: what customers prioritise shifts as the order progresses. Courier contact matters little during preparation and a great deal on approach.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">04</span>
                                    <h3>Commercial content sits below, not on top</h3>
                                    <p>Where products carried ads or add-ons, they lived at the bottom of the sheet. Reachable by scrolling, never taking space the delivery information needed.</p>
                                </div>
                            </div>

                            <blockquote className="pull-quote" style={{ marginTop: '56px' }}>
                                We had been solving for space. The real problem was deciding what earns the customer&apos;s attention, and when.
                            </blockquote>

                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 8. Design proposal */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">08 — DESIGN PROPOSAL</div>
                        <div className="section-content">
                            <h2 className="content-title">Design proposal</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>I moved the tracker into a single bottom sheet over a map that never gets covered. Status and ETA hold the top. The delivery code rises as the courier approaches. Courier contact appears once there is a courier to contact. Ads and add-ons sit at the bottom.</p>
                                    <p>That solved the original problem structurally. The map stays visible because nothing overlays it, and the next requirement is a new row in the sheet rather than another card competing for the same space.</p>
                                    <p>It starts on the home screen, where an order card carries the delivery state at a glance. Tapping it expands that same card into the full tracker, so opening it feels like the card growing rather than a new screen loading.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🏠</span>
                                        <h3>Continuity</h3>
                                        <p>The card and the sheet share the same structure, so opening the tracker extends what the customer was already reading.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="current-tracker-grid is-three-up">
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Order-tracker-2.png')} alt="Redesigned Order Tracker with the bottom sheet over a persistent map" />
                                    </div>
                                    <p className="current-tracker-caption">Status and ETA anchor the top of the sheet, with the map visible above it throughout.</p>
                                </div>
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Order-tracker-3.png')} alt="Redesigned Order Tracker with the sheet expanded to show delivery detail" />
                                    </div>
                                    <p className="current-tracker-caption">The sheet grows to carry more detail, scrolling rather than covering the map.</p>
                                </div>
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Order-tracker-MPP.png')} alt="Redesigned Order Tracker carrying multi-partner pooled delivery information" />
                                    </div>
                                    <p className="current-tracker-caption">Multi-partner pooled delivery becomes another row in the sheet, not another card over the map.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 7. Usability testing results */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">09 — USABILITY TESTING</div>
                        <div className="section-content">
                            <h2 className="content-title">Testing the redesign</h2>
                            <p className="section-subtitle">The proposal rested on an assumption worth checking: that moving everything into one sheet would make the tracker feel like more information, not more clutter.</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>The structure was sound. A sheet scrolls where cards can only stack. But it created a new risk: everything now lived in one container, so everything competed inside it. Get the order wrong and we would have traded a crowded map for a crowded sheet.</p>
                                    <p>So I tested for attention rather than task completion. <strong>What did people notice first, what did they go looking for, and what did they scroll straight past?</strong></p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🧪</span>
                                        <h3>What we were checking</h3>
                                        <p>Not whether the sheet worked, but whether the order of things inside it matched what customers were looking for.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="content-title" style={{ marginTop: '60px' }}>What each moment was probing</h2>
                            <p className="section-subtitle">Four areas carried the most weight in the new hierarchy, each with a different question behind it.</p>

                            <div className="theme-grid">
                                <div className="theme-card">
                                    <span className="theme-number">01</span>
                                    <h3>Order status</h3>
                                    <p>Could customers open the tracker and take in the state of their order without reading closely? Status anchors the top of the sheet, so if this failed, nothing below it mattered.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">02</span>
                                    <h3>The delivery code</h3>
                                    <p>The hardest balance in the redesign. The code has to be impossible to miss at the door and easy to ignore for the thirty minutes before. I watched whether people found it when asked to hand it over, and whether it pulled at them when they were just checking on the food.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">03</span>
                                    <h3>Courier communication</h3>
                                    <p>Contact appears only once a courier is assigned. The question was whether its absence early on read as missing, or simply as not yet relevant.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">04</span>
                                    <h3>Secondary content</h3>
                                    <p>Ads and nearby restaurants sit at the bottom of the sheet. We were watching for the failure mode the old tracker had: content that reads as an interruption rather than an option.</p>
                                </div>
                            </div>

                            <blockquote className="pull-quote" style={{ marginTop: '56px' }}>
                                Everyone could use the tracker. What I needed to know was whether the sheet held things in the order people reached for them.
                            </blockquote>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 8. Themes from testing */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">10 — THEMES</div>
                        <div className="section-content">
                            <h2 className="content-title">What came out of testing</h2>
                            <p className="section-subtitle">Four themes ran through the sessions. Together they answered the question we started with: the sheet read as clearer, not fuller.</p>

                            <div className="theme-grid">
                                <div className="theme-card">
                                    <span className="theme-number">01</span>
                                    <h3>More confidence in the delivery</h3>
                                    <p>Knowing a code had to be handed over made the last step feel accounted for. Users described the delivery as something being confirmed rather than something they were waiting on.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">02</span>
                                    <h3>Room to add something they&apos;d missed</h3>
                                    <p>Nearby restaurants at the bottom of the sheet read as useful rather than intrusive. Users saw it as a chance to add something they had forgotten while the order was still being prepared.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">03</span>
                                    <h3>Easy to understand at a glance</h3>
                                    <p>Users opened the tracker, took in where things stood, and closed it again without reading closely. Status at the top of the sheet was doing the work we designed it to do.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">04</span>
                                    <h3>Not obstructing the delivery flow</h3>
                                    <p>Everything we added stayed out of the way of what customers came for. The map and the order status held their place from confirmation to handoff.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 9. Final designs */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">11 — FINAL DESIGNS</div>
                        <div className="section-content">
                            <h2 className="content-title">The redesigned Order Tracker</h2>
                            <p className="section-subtitle">The delivery code now has somewhere to live, and so do grocery substitutions and pooled deliveries. The next request after those will be a row in the sheet rather than another redesign.</p>

                            <div className="current-tracker-grid is-three-up">
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Order-tracker-2.png')} alt="Redesigned Order Tracker with the bottom sheet over a persistent map" />
                                    </div>
                                    <p className="current-tracker-caption">Status and ETA stay at the top of the hierarchy, with the map visible behind them at every stage.</p>
                                </div>
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Order-tracker-3.png')} alt="Redesigned Order Tracker with the sheet expanded to show delivery detail" />
                                    </div>
                                    <p className="current-tracker-caption">The sheet grows to carry more detail, scrolling rather than covering the map.</p>
                                </div>
                                <div className="current-tracker-item">
                                    <div className="interaction-visual-box">
                                        <img src={require('../assets/Order-tracker-MPP.png')} alt="Redesigned Order Tracker carrying multi-partner pooled delivery information" />
                                    </div>
                                    <p className="current-tracker-caption">Multi-partner pooled delivery becomes another row in the sheet, not another card over the map.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* 12. Learnings */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">12 — LEARNINGS</div>
                        <div className="section-content">
                            <h2 className="content-title">The work I was given was not the work that needed doing</h2>
                            <p className="section-subtitle">I was handed a feature request. Delivering it exactly as written would have been the easy call, and it would have made the product worse.</p>

                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Nobody asked me to redesign the Order Tracker. The request was small, the business case was strong, and there was a version of the code I could have shipped in a fraction of the time. Arguing for something larger meant delaying a feature worth an estimated $1M a year and asking engineering to take on work that was not in the plan.</p>
                                    <p>What made that argument winnable was that I did not bring an opinion. I built the thing I was asked for, showed the map disappearing behind it, and let the mockup make the case. The conversation stopped being about design preference and became about what the product would look like after four more features arrived.</p>
                                    <p><strong>That is the part I would repeat.</strong> Pushing past a requirement is not the same as ignoring it. I took the request seriously enough to build it, and building it was what exposed the real problem.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🎯</span>
                                        <h3>What changed</h3>
                                        <p>A single feature request became a rebuild of how the tracker decides what to show.</p>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-icon">🧩</span>
                                        <h3>What carried it</h3>
                                        <p>Mockups of the requested solution, not an argument about design principles.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="theme-grid" style={{ marginTop: '56px' }}>
                                <div className="theme-card">
                                    <span className="theme-number">01</span>
                                    <h3>Build the thing you are arguing against</h3>
                                    <p>The strongest case for changing scope was a working mockup of the original request. Nobody could look at the map disappearing and still call it a placement problem.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">02</span>
                                    <h3>Cost the decision honestly</h3>
                                    <p>I was asking to delay a feature with real revenue attached. Naming that openly, rather than talking around it, was what made the trade credible to product and engineering.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">03</span>
                                    <h3>Borrowed evidence still counts</h3>
                                    <p>Skipping discovery because Just Eat had already answered the question saved weeks. Knowing what research already exists is as useful as being able to run it.</p>
                                </div>
                                <div className="theme-card">
                                    <span className="theme-number">04</span>
                                    <h3>Structure is the thing that lasts</h3>
                                    <p>The delivery code was one feature. What the team actually gained was a tracker that can absorb the next four without another redesign.</p>
                                </div>
                            </div>

                            <blockquote className="pull-quote" style={{ marginTop: '56px' }}>
                                The requirement was to add a delivery code. The job was to make sure the tracker could still do what customers opened it for.
                            </blockquote>
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
