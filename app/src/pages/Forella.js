import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import {
  HiOutlineCheckCircle, HiOutlineChatBubbleLeftRight,
  HiOutlineMicrophone, HiOutlineSquares2X2,
  HiOutlineBell, HiOutlineUserGroup, HiOutlineMapPin, HiOutlineCamera,
  HiOutlineCreditCard, HiOutlineDevicePhoneMobile,
  HiOutlineCircleStack, HiOutlineCpuChip, HiOutlineBolt,
  HiOutlineServerStack, HiOutlineCommandLine,
  HiOutlineSparkles,
  HiOutlineClipboard, HiOutlineClipboardDocumentCheck
} from "react-icons/hi2";
import './Forella.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import SummaryModal from '../components/SummaryModal';
import { useAudio } from '../context/AudioContext';
import { apiFetch } from '../lib/api';
import competitorGoogle from '../assets/email/google.png';
import competitorOutlook from '../assets/email/outlook.png';
import competitorNotion from '../assets/email/notion.png';
import competitorTodoist from '../assets/email/to-do.png';
import finalLanding from '../assets/email/final/landing.png';
import finalLogin from '../assets/email/final/login.png';
import finalConnected from '../assets/email/final/connected-accounts.png';
import finalCalendar from '../assets/email/final/Calendar.png';
import finalEvents from '../assets/email/final/events.png';
import finalSpeaking from '../assets/email/final/Speaking.png';

// A mini "code editor" window: traffic-light dots, a filename, a copy button,
// and a syntax-styled body. `code` is the raw text shown and copied.
function CodeBlock({ filename, language = 'ts', code }) {
    const [copied, setCopied] = useState(false);
    const onCopy = () => {
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(code).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1600);
            }).catch(() => {});
        }
    };
    return (
        <div className="code-editor">
            <div className="code-editor-bar">
                <span className="code-editor-dots" aria-hidden="true">
                    <i style={{ background: '#ff5f57' }} />
                    <i style={{ background: '#febc2e' }} />
                    <i style={{ background: '#28c840' }} />
                </span>
                {filename && <span className="code-editor-file">{filename}</span>}
                <button
                    type="button"
                    className="code-editor-copy"
                    onClick={onCopy}
                    aria-label={copied ? 'Copied' : 'Copy code'}
                >
                    {copied
                        ? <><HiOutlineClipboardDocumentCheck /> Copied</>
                        : <><HiOutlineClipboard /> Copy</>}
                </button>
            </div>
            <pre className={`code-editor-body language-${language}`}><code>{code}</code></pre>
        </div>
    );
}

// Live preview (left) + code editor (right). `children` is the rendered demo.
function PreviewBlock({ children, ...codeProps }) {
    return (
        <div className="preview-block">
            <div className="preview-pane">{children}</div>
            <CodeBlock {...codeProps} />
        </div>
    );
}

// --- Small live demos of the design-system components ---------------------
function DemoButton() {
    return (
        <div className="ds-demo-stack">
            <button className="ds-btn ds-btn--primary" type="button">Add to calendar</button>
            <button className="ds-btn ds-btn--secondary" type="button">Cancel</button>
            <button className="ds-btn ds-btn--danger" type="button">Delete event</button>
        </div>
    );
}

function DemoInput() {
    const [val, setVal] = useState('');
    const [show, setShow] = useState(false);
    return (
        <div className="ds-demo-stack ds-demo-input">
            <label className="ds-field-label">Email</label>
            <div className="ds-field">
                <input value={val} onChange={(e) => setVal(e.target.value)} placeholder="you@example.com" />
            </div>
            <label className="ds-field-label">Password</label>
            <div className="ds-field">
                <input type={show ? 'text' : 'password'} defaultValue="supersecret" />
                <button type="button" className="ds-field-eye" onClick={() => setShow((s) => !s)} aria-label={show ? 'Hide password' : 'Show password'}>
                    {show ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" aria-hidden="true">
                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" strokeWidth="2" />
                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1 -1.67 2.68" strokeWidth="2" />
                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39 -1.61" strokeWidth="2" />
                            <path d="m2 2 20 20" strokeWidth="2" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" aria-hidden="true">
                            <path d="M2 12s3 -7 10 -7 10 7 10 7 -3 7 -10 7 -10 -7 -10 -7Z" strokeWidth="2" />
                            <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0" strokeWidth="2" />
                        </svg>
                    )}
                </button>
            </div>
            <span className="ds-field-hint">At least 8 characters</span>
        </div>
    );
}

function DemoToast() {
    return (
        <div className="ds-demo-stack ds-demo-toasts">
            <span className="ds-toast"><span style={{ color: '#22c55e' }}>✓</span> Event added to calendar</span>
            <span className="ds-toast"><span style={{ color: '#f97316' }}>⚠</span> You're offline</span>
            <span className="ds-toast">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" className="ds-toast-icon" aria-hidden="true">
                    <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0 -20 0" strokeWidth="2" />
                    <path d="m4.9 4.9 14.2 14.2" strokeWidth="2" />
                </svg>
                Could not reach the server
            </span>
        </div>
    );
}

function DemoModal() {
    const [open, setOpen] = useState(false);
    return (
        <div className="ds-demo-stack">
            <button type="button" className="ds-btn ds-btn--primary" onClick={() => setOpen(true)}>Open bottom sheet</button>
            <div className={`ds-sheet-stage ${open ? 'is-open' : ''}`}>
                <div className="ds-sheet-scrim" onClick={() => setOpen(false)} />
                <div className="ds-sheet">
                    <span className="ds-sheet-grabber" />
                    <div className="ds-sheet-head">
                        <strong>Confirm booking</strong>
                        <button type="button" onClick={() => setOpen(false)} aria-label="Close">&times;</button>
                    </div>
                    <p className="ds-sheet-body">Slides up from the bottom, scrim taps to dismiss.</p>
                    <div className="ds-sheet-actions">
                        <button type="button" className="ds-btn ds-btn--secondary" onClick={() => setOpen(false)}>Cancel</button>
                        <button type="button" className="ds-btn ds-btn--primary" onClick={() => setOpen(false)}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Forella() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [summary, setSummary] = useState('');
    const [isSummaryLoading, setIsSummaryLoading] = useState(false);
    const [isAudioLoading, setIsAudioLoading] = useState(false);
    const { playAudio } = useAudio();

    // TestFlight access request modal
    const [tfOpen, setTfOpen] = useState(false);
    const [tfFirstName, setTfFirstName] = useState('');
    const [tfEmail, setTfEmail] = useState('');
    const [tfStatus, setTfStatus] = useState('idle'); // idle | sending | done | error
    const [tfError, setTfError] = useState('');

    const closeTf = () => {
        if (tfStatus === 'sending') return;
        setTfOpen(false);
    };

    const submitTf = async (e) => {
        e.preventDefault();
        if (tfStatus === 'sending') return;
        setTfStatus('sending');
        setTfError('');
        try {
            const res = await apiFetch('/api/testflight-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName: tfFirstName, email: tfEmail }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || 'Could not submit your request.');
            setTfStatus('done');
        } catch (err) {
            setTfError(err.message || 'Something went wrong. Please try again.');
            setTfStatus('error');
        }
    };

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
        setIsAudioLoading(true);
        try {
            const response = await apiFetch('/api/audio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageId: 'forella' })
            });
            const data = await response.json();
            if (data.audioUrl) {
                playAudio(data.audioUrl, 'Forella AI');
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
                            Forella is an AI-powered calendar that helps people plan, organize, and optimize their time through intelligent scheduling, voice interaction, and daily briefings.
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
                                <span className="meta-value">Forella AI</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">My role</span>
                                <span className="meta-value">Product Designer &amp; Software Engineer</span>
                             </div>
                             <div className="meta-col">
                                <span className="meta-label">Tools</span>
                                <span className="meta-value">Figma, Cursor, Claude Code</span>
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

                    {/* Overview */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">OVERVIEW</div>
                        <div className="section-content">
                            <h2 className="content-title">Project Overview</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Forella is an AI-powered calendar platform designed to help users plan, organize, and optimize their schedules through intelligent scheduling, voice interactions, daily briefings, and calendar automation.</p>
                                    <p>The product combines traditional calendar management with AI-powered planning to reduce decision fatigue and help users focus on execution rather than scheduling.</p>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🧠</span>
                                        <p>An intelligent assistant, not a passive scheduling tool.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Problem */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">PROBLEM</div>
                        <div className="section-content">
                            <h2 className="content-title">Storing time vs. managing it</h2>
                            <p className="emotional-hook">"Modern calendars are great at storing events, but ineffective at helping people manage their time."</p>
                            <div className="section-grid">
                                <div className="text-content">
                                    <p>Most existing solutions require significant manual effort and provide limited proactive assistance. Users consistently struggle to:</p>
                                    <ul className="forella-list">
                                        <li>Prioritize tasks</li>
                                        <li>Plan their day</li>
                                        <li>Manage conflicting schedules</li>
                                        <li>Stay organized across multiple calendars</li>
                                    </ul>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🎯</span>
                                        <h3>Goal</h3>
                                        <p>Design and build a calendar platform that acts as an intelligent assistant rather than a passive scheduling tool.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Research */}
                    <section className="casestudy-section asymmetric">
                        <div className="section-label">RESEARCH</div>
                        <div className="section-content">
                            <h2 className="content-title">Competitive Analysis &amp; User Flows</h2>
                            <div className="section-grid">
                                <div className="text-content">
                                    <div style={{ marginBottom: '40px' }}>
                                        <h3>Competitive Analysis</h3>
                                        <p>I evaluated several productivity and scheduling platforms, including Google Calendar, Microsoft Outlook, Notion, and Todoist. The analysis revealed that most products focused heavily on scheduling automation but lacked a unified experience across planning, communication, and execution.</p>
                                    </div>
                                    <div>
                                        <h3>User Flows</h3>
                                        <p>I mapped key workflows to identify friction points before moving into design. These covered account creation, calendar onboarding, event management, AI scheduling, meeting invitations, and daily planning, which defined the core experience and information architecture.</p>
                                    </div>
                                </div>
                                <div className="stats-sidebar">
                                    <div className="stat-item">
                                        <span className="stat-icon">🔍</span>
                                        <h3>Insight</h3>
                                        <p>Competitors automate scheduling but fragment the experience. Planning, communication, and execution all live in separate tools.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="competitor-grid">
                                <figure className="competitor-shot">
                                    <img src={competitorGoogle} alt="Google Calendar" loading="lazy" />
                                    <figcaption>Google Calendar</figcaption>
                                </figure>
                                <figure className="competitor-shot">
                                    <img src={competitorOutlook} alt="Microsoft Outlook" loading="lazy" />
                                    <figcaption>Microsoft Outlook</figcaption>
                                </figure>
                                <figure className="competitor-shot">
                                    <img src={competitorNotion} alt="Notion" loading="lazy" />
                                    <figcaption>Notion</figcaption>
                                </figure>
                                <figure className="competitor-shot">
                                    <img src={competitorTodoist} alt="Todoist" loading="lazy" />
                                    <figcaption>Todoist</figcaption>
                                </figure>
                            </div>

                            <h3 className="forella-subhead">Key learnings</h3>
                            <div className="competitor-learnings">
                                <div className="competitor-learning">
                                    <strong>Google Calendar</strong>
                                    <p>Best-in-class at storing events, but passive. It shows you a blank day and leaves the planning entirely to you.</p>
                                </div>
                                <div className="competitor-learning">
                                    <strong>Microsoft Outlook</strong>
                                    <p>Strong at dense work scheduling, but heavy and email-bound. Personal life planning feels like an afterthought.</p>
                                </div>
                                <div className="competitor-learning">
                                    <strong>Notion</strong>
                                    <p>Endlessly flexible, but you have to build your own system. Powerful for planners, overwhelming for everyone else.</p>
                                </div>
                                <div className="competitor-learning">
                                    <strong>Todoist</strong>
                                    <p>Great task capture, but tasks and time live apart. You still have to decide when each thing actually happens.</p>
                                </div>
                            </div>

                            <div className="quote-callout">
                                <p>Across all four, the same gap showed up: they manage data, not decisions. None of them answer the real question, "what should I do with my day?" That gap became Forella's reason to exist.</p>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Final Solution */}
                    <section className="casestudy-section">
                        <div className="section-label">SOLUTION</div>
                        <div className="impact-header">
                            <h2 className="section-title">The Final Solution</h2>
                            <h3 className="impact-headline">One unified planning experience</h3>
                        </div>
                        <div className="forella-feature-grid">
                            <div className="feature-item">
                                <h3><HiOutlineSquares2X2 className="feature-hi-icon" />Calendar Canvas</h3>
                                <p>A visual workspace that combines calendars, tasks, and AI recommendations into a single planning experience.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineChatBubbleLeftRight className="feature-hi-icon" />AI Chat Assistant</h3>
                                <p>Schedule events, modify plans, and interact with the calendar using natural language.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineMicrophone className="feature-hi-icon" />AI Voice Agent</h3>
                                <p>Voice-powered scheduling and calendar management through conversational interactions.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineUserGroup className="feature-hi-icon" />Internal Meeting System</h3>
                                <p>Create meetings, invite participants, and manage availability directly within Forella.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineSparkles className="feature-hi-icon" />Daily Briefings</h3>
                                <p>Automatically generated summaries of the day, priorities, and upcoming commitments.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineBell className="feature-hi-icon" />Push Notifications</h3>
                                <p>Real-time reminders, schedule updates, and intelligent recommendations.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineMapPin className="feature-hi-icon" />Transit &amp; Directions</h3>
                                <p>Routes and travel time surfaced inline, so plans account for how you actually get there.</p>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Final Designs */}
                    <section className="casestudy-section">
                        <div className="section-label section-label--final-designs">FINAL DESIGNS</div>
                        <div className="impact-header">
                            <h2 className="section-title">Final Designs</h2>
                            <h3 className="impact-headline">The shipped iOS interface, from onboarding and account setup to the calendar, events, and Regina's voice agent.</h3>
                        </div>

                        <div className="final-designs-grid">
                            <figure className="final-shot">
                                <img src={finalLanding} alt="Onboarding: Meet Regina" loading="lazy" />
                                <figcaption>Onboarding</figcaption>
                            </figure>
                            <figure className="final-shot">
                                <img src={finalLogin} alt="Login" loading="lazy" />
                                <figcaption>Login</figcaption>
                            </figure>
                            <figure className="final-shot">
                                <img src={finalConnected} alt="Connected accounts" loading="lazy" />
                                <figcaption>Connected accounts</figcaption>
                            </figure>
                            <figure className="final-shot">
                                <img src={finalCalendar} alt="Calendar canvas" loading="lazy" />
                                <figcaption>Calendar canvas</figcaption>
                            </figure>
                            <figure className="final-shot">
                                <img src={finalEvents} alt="Events" loading="lazy" />
                                <figcaption>Events</figcaption>
                            </figure>
                            <figure className="final-shot">
                                <img src={finalSpeaking} alt="Regina voice agent" loading="lazy" />
                                <figcaption>Voice agent</figcaption>
                            </figure>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Design System */}
                    <section className="casestudy-section">
                        <div className="section-label">DESIGN SYSTEM</div>
                        <div className="impact-header">
                            <h2 className="section-title">Design System</h2>
                            <h3 className="impact-headline">A two-tier token system: primitive platform tokens under semantic, role-based tokens. Components consume meaning, never hex literals, so dark mode comes for free.</h3>
                        </div>

                        <h3 className="forella-subhead">Radius &amp; spacing (4px steps)</h3>
                        <CodeBlock filename="tokens/dimensions.ts" language="ts" code={`// One 4px rhythm, shared by corners and gaps.
// Same t-shirt sizes so layouts stay consistent.
export const radius = {
  'rounded-xxs': 2,   // hairline chips
  'rounded-xs':  6,
  'rounded-s':   10,
  'rounded-m':   14,  // default card radius
  'rounded-l':   18,
  'rounded-xl':  22,
  'rounded-xxl': 26,  // sheets & modals
};

export const spacing = {
  'spacing-xxs': 2,
  'spacing-xs':  6,
  'spacing-s':   10,
  'spacing-m':   14,
  'spacing-l':   18,
  'spacing-xl':  22,
  'spacing-xxl': 26,
};`} />

                        <h3 className="forella-subhead">Typography</h3>
                        <PreviewBlock filename="tokens/typography.ts" language="ts" code={`// Size names map to roles, not pixels.
export const fontSize = {
  small:   12,  // captions, meta
  medium:  14,  // secondary text
  regular: 16,  // body default
  large:   24,  // section titles
  xlarge:  32,  // hero numbers
};

export const fontWeight = {
  regular: '400', medium: '500', bold: '700',
};`}>
                            <div className="ds-type-specimen">
                                <div style={{ fontSize: 32, fontWeight: 700 }}>Aa<span>xlarge · 32</span></div>
                                <div style={{ fontSize: 24, fontWeight: 600 }}>Aa<span>large · 24</span></div>
                                <div style={{ fontSize: 16, fontWeight: 400 }}>Aa<span>regular · 16</span></div>
                                <div style={{ fontSize: 14, fontWeight: 400 }}>Aa<span>medium · 14</span></div>
                                <div style={{ fontSize: 12, fontWeight: 400 }}>Aa<span>small · 12</span></div>
                            </div>
                        </PreviewBlock>

                        <h3 className="forella-subhead">Color tokens</h3>
                        <PreviewBlock filename="constants/colors.js" language="js" code={`// Semantic tokens, resolved per scheme.
export const light = {
  background:       '#FFFFFF',
  backgroundPanel:  '#F8FAFC',
  textPrimary:      '#101114',
  textSubtle:       '#6B7280',
  divider:          '#E5E7EB',
  statusTagSuccess: '#16A34A',
  statusTagWarning: '#D97706',
  featureGateBg:    '#F5F3FF',
};`}>
                            <div className="ds-swatch-grid">
                                <div className="ds-swatch"><i style={{ background: '#F8FAFC', borderColor: '#E5E7EB' }} /><span>backgroundPanel</span></div>
                                <div className="ds-swatch"><i style={{ background: '#101114' }} /><span>textPrimary</span></div>
                                <div className="ds-swatch"><i style={{ background: '#6B7280' }} /><span>textSubtle</span></div>
                                <div className="ds-swatch"><i style={{ background: '#E5E7EB' }} /><span>divider</span></div>
                                <div className="ds-swatch"><i style={{ background: '#16A34A' }} /><span>statusTagSuccess</span></div>
                                <div className="ds-swatch"><i style={{ background: '#D97706' }} /><span>statusTagWarning</span></div>
                                <div className="ds-swatch"><i style={{ background: '#F5F3FF', borderColor: '#E5E7EB' }} /><span>featureGateBg</span></div>
                            </div>
                        </PreviewBlock>

                        <h3 className="forella-subhead">Button</h3>
                        <p className="section-subtitle">Primary, secondary, and destructive variants. Filled primary for the main action, outline secondary, red for destructive.</p>
                        <PreviewBlock filename="components/Button.js" language="jsx" code={`<Button variant="primary" onPress={save}>
  Add to calendar
</Button>

<Button variant="secondary" onPress={cancel}>
  Cancel
</Button>

<Button variant="danger" onPress={remove}>
  Delete event
</Button>`}>
                            <DemoButton />
                        </PreviewBlock>

                        <h3 className="forella-subhead">TextField</h3>
                        <p className="section-subtitle">The canonical labeled input: leading icon, password reveal, and hint. Styles are generated from the theme, so it re-themes instantly and never hardcodes hex.</p>
                        <PreviewBlock filename="components/TextField.js" language="jsx" code={`<TextField
  label="Email"
  value={email}
  onChangeText={setEmail}
  placeholder="you@example.com"
  colors={colors}
/>

<TextField
  label="Password"
  type="password"   // reveal toggle
  hint="At least 8 characters"
  colors={colors}
/>`}>
                            <DemoInput />
                        </PreviewBlock>

                        <h3 className="forella-subhead">Toast</h3>
                        <p className="section-subtitle">Brief, auto-dismissing, non-interactive feedback that slides in from the top. The dark pill stays constant; only the status icon changes color by type.</p>
                        <PreviewBlock filename="components/Toast.js" language="jsx" code={`<Toast
  visible={toast.visible}
  message={toast.message}
  type={toast.type}   // success | warning | error
  onHide={hideToast}
/>

// pointerEvents: 'none' so it never
// blocks taps on content beneath it.`}>
                            <DemoToast />
                        </PreviewBlock>

                        <h3 className="forella-subhead">Modal &amp; Bottom Sheet</h3>
                        <p className="section-subtitle">A focused, dismissible overlay for a decision. It gates render so it animates out before unmounting, instead of vanishing.</p>
                        <PreviewBlock filename="components/WeatherModal.js" language="jsx" code={`<Modal transparent visible={visible}
       animationType="none" onRequestClose={onClose}>
  <Pressable style={styles.scrim} onPress={onClose} />
  <Animated.View style={[styles.sheet,
    { transform: [{ translateY: slideAnim }] }]}>
    {/* grabber · header · body · actions */}
  </Animated.View>
</Modal>

// Open: spring (tension 65, friction 11).
// Close: timing 250ms, then unmount.`}>
                            <DemoModal />
                        </PreviewBlock>
                    </section>

                    <div className="section-divider"></div>

                    {/* Software Architecture */}
                    <section className="casestudy-section">
                        <div className="section-label">ARCHITECTURE</div>
                        <div className="impact-header">
                            <h2 className="section-title">System Architecture</h2>
                            <h3 className="impact-headline">An AI-native iOS app built on Expo and React Native, backed by a real-time, offline-capable, subscription-gated data layer.</h3>
                        </div>
                        <p className="section-subtitle">Built with Expo and React Native (TypeScript-first), with native iOS depth like Live Activities and Vision Camera. The centerpiece is Regina, a streaming AI agent that books events, drafts emails, and plans transit through interactive cards.</p>

                        <div className="arch-diagram" aria-label="System architecture diagram">
                            <div className="arch-layer arch-client">
                                <span className="arch-layer-label">Forella Client · Expo / React Native</span>
                                <div className="arch-blocks">
                                    <div className="arch-block">
                                        <HiOutlineDevicePhoneMobile className="arch-icon" />
                                        <strong>Presentation</strong>
                                        <span>expo-router · screens · components</span>
                                    </div>
                                    <div className="arch-block">
                                        <HiOutlineCircleStack className="arch-icon" />
                                        <strong>State</strong>
                                        <span>TanStack Query · Context · AsyncStorage</span>
                                    </div>
                                    <div className="arch-block">
                                        <HiOutlineCpuChip className="arch-icon" />
                                        <strong>Native</strong>
                                        <span>Live Activities · Camera · Voice · Push</span>
                                    </div>
                                </div>
                            </div>

                            <div className="arch-arrow" aria-hidden="true" />

                            <div className="arch-layer arch-service">
                                <span className="arch-layer-label">Service Layer · lib/ · services/</span>
                                <span className="arch-service-desc">APIClient · aiService · offline queue · sync</span>
                            </div>

                            <div className="arch-arrow" aria-hidden="true" />

                            <div className="arch-backends">
                                <div className="arch-block arch-backend">
                                    <HiOutlineServerStack className="arch-icon" />
                                    <strong>Supabase</strong>
                                    <span>Auth · Postgres + RLS · Realtime · Storage</span>
                                </div>
                                <div className="arch-block arch-backend">
                                    <HiOutlineCpuChip className="arch-icon" />
                                    <strong>Platform API</strong>
                                    <span>Regina agent · tools · privileged writes</span>
                                </div>
                            </div>
                        </div>

                        <h3 className="forella-subhead">On the client</h3>
                        <div className="forella-feature-grid">
                            <div className="feature-item">
                                <h3><HiOutlineDevicePhoneMobile className="feature-hi-icon" />Presentation</h3>
                                <p>expo-router file-based routes with a single composition root that wraps the tree in providers and wires deep links. An ErrorBoundary degrades gracefully instead of white-screening.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineCircleStack className="feature-hi-icon" />State (3 stores, 3 jobs)</h3>
                                <p>TanStack Query for server cache, React Context for cross-cutting UI state, and AsyncStorage for durable offline state. Not one global store; each kind of state lives where it belongs.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineCpuChip className="feature-hi-icon" />Native depth</h3>
                                <p>Live Activities drive Dynamic Island and CarPlay countdowns, Vision Camera feeds images to the AI, and Voice powers the recorder. The app keeps the user informed even when it's not in the foreground.</p>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Regina AI */}
                    <section className="casestudy-section">
                        <div className="section-label">AI: REGINA</div>
                        <div className="impact-header">
                            <h2 className="section-title">Regina, the AI Agent</h2>
                            <h3 className="impact-headline">The interesting part isn't that it chats. It's that the AI renders real, interactive UI inside the conversation.</h3>
                        </div>

                        <div className="section-grid">
                            <div className="text-content">
                                <div style={{ marginBottom: '40px' }}>
                                    <h3>The AI returns components, not just text</h3>
                                    <p>Tools run on the backend, then return structured data that hydrates real, interactive native cards: an EmailDraftCard you can edit and send, a CalendarSelectionModal, a transit route. The AI operates the app rather than describing it, which was the core interaction-design bet.</p>
                                </div>
                                <div>
                                    <h3>Context that lets it act</h3>
                                    <p>Each request carries who (auth), when (timezone), where (location plus saved home/work/school), and what they're looking at (images). That context is what turns a chatbot into an assistant that can actually do things.</p>
                                </div>
                                <div>
                                    <h3>Built for text and voice</h3>
                                    <p>Regina is built with OpenAI, using the gpt-4o-mini model for chat, reasoning, and tool calling, and integrated with ElevenLabs for the voice agent experience.</p>
                                </div>
                            </div>
                            <div className="stats-sidebar">
                                <div className="stat-item">
                                    <span className="stat-icon">🛡️</span>
                                    <h3>Designed for failure</h3>
                                    <p>A streamed answer that stalls falls back to a non-streaming response; a missing tool result still renders a minimal card instead of an error. The interface stays trustworthy even when the model or network doesn't cooperate.</p>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-icon">🃏</span>
                                    <h3>Interactive cards</h3>
                                    <p>EmailDraftCard, CalendarSelectionModal, and transit components render inline, so users act on the AI's output without leaving the chat.</p>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-icon">⚡</span>
                                    <h3>Powered by</h3>
                                    <p>Regina runs on the OpenAI APIs for reasoning and tool calling, with voice powered by ElevenLabs.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Technology Stack */}
                    <section className="casestudy-section">
                        <div className="section-label">TECH STACK</div>
                        <div className="impact-header">
                            <h2 className="section-title">Choosing the Technology Stack</h2>
                            <h3 className="impact-headline">One TypeScript codebase, native iOS depth, and the right transport for every job.</h3>
                        </div>
                        <div className="forella-feature-grid">
                            <div className="feature-item">
                                <h3><HiOutlineDevicePhoneMobile className="feature-hi-icon" />Client: Expo + React Native</h3>
                                <p>Expo SDK 54, React Native 0.81, React 19, TypeScript-first, with expo-router for deep-linkable file-based routing. One codebase, native iOS depth without ejecting.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineCircleStack className="feature-hi-icon" />State</h3>
                                <p>TanStack Query for server cache, React Context for cross-cutting state, and AsyncStorage for durable offline state.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineServerStack className="feature-hi-icon" />Backend: Supabase</h3>
                                <p>Auth (PKCE), Postgres with Row-Level Security, Realtime, and Storage, paired with a dedicated platform API for trust-sensitive logic.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineBolt className="feature-hi-icon" />Realtime</h3>
                                <p>Socket.IO for bidirectional DB change fan-out, and SSE for token-by-token AI streaming. The right transport per job.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineCpuChip className="feature-hi-icon" />AI: Regina</h3>
                                <p>A server-orchestrated streaming agent on the OpenAI APIs with server-side tool calling, plus ElevenLabs for voice. The client renders results as interactive native cards.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineCreditCard className="feature-hi-icon" />Payments</h3>
                                <p>Stripe with Apple Pay for subscription gating, backed by a whitelist and cached-entitlement fallback.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineCamera className="feature-hi-icon" />Native</h3>
                                <p>Live Activities (Dynamic Island / CarPlay), Vision Camera, Voice, background fetch, push, and Mapbox.</p>
                            </div>
                            <div className="feature-item">
                                <h3><HiOutlineCommandLine className="feature-hi-icon" />Build &amp; Ops</h3>
                                <p>EAS builds, feature flags, and a remote service-status kill switch to operate and de-risk without an App Store release.</p>
                            </div>
                        </div>
                    </section>

                    <div className="section-divider"></div>

                    {/* Results (with what shipped) */}
                    <section className="casestudy-section">
                        <div className="section-label">RESULTS</div>
                        <div className="impact-header">
                            <h2 className="section-title">Results</h2>
                            <h3 className="impact-headline">An AI-native calendar, shipped to beta.</h3>
                        </div>
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-value">75+</span>
                                <p>Beta users on the platform.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">500+</span>
                                <p>Calendar events ingested.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-value">800+</span>
                                <p>Voice agent sessions with Regina.</p>
                            </div>
                        </div>

                        <h3 className="forella-subhead">What shipped</h3>
                        <div className="forella-checklist">
                            <span><HiOutlineCheckCircle className="forella-check-icon" />iOS App (Expo / React Native)</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Regina AI Chat Agent</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />AI Voice Agent</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Interactive AI Cards</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Calendar &amp; Event Editor</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Daily Briefings</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Push &amp; Live Activities</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Internal Meeting Invitations</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Transit &amp; Directions</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Vision Camera (image input)</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Stripe + Apple Pay</span>
                            <span><HiOutlineCheckCircle className="forella-check-icon" />Offline-First Sync</span>
                        </div>

                        <div className="forella-cta-row">
                            <a
                                className="forella-cta forella-cta--primary"
                                href="https://platform.forella.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="16" width="16" aria-hidden="true">
                                    <path fill="currentColor" fillRule="evenodd" d="M5.67692 1.40293c-2.3414 0.55128 -4.13069 2.5335 -4.39433 4.97311h2.6868c0.18244 -1.76988 0.76821 -3.47071 1.70753 -4.97311Zm2.64624 0.00001c0.93932 1.5024 1.52508 3.20323 1.70754 4.9731h2.6868c-0.2637 -2.4396 -2.053 -4.42181 -4.39434 -4.9731Zm0.45009 4.9731c-0.19574 -1.69252 -0.80515 -3.31037 -1.77321 -4.71061 -0.96807 1.40024 -1.57747 3.01809 -1.77322 4.71061h3.54643Zm-3.54642 1.25h3.54641c-0.19575 1.69248 -0.80515 3.31026 -1.7732 4.71056 -0.96806 -1.4003 -1.57745 -3.01808 -1.77321 -4.71056Zm-1.25743 0H1.2826c0.26367 2.43956 2.05295 4.42176 4.39432 4.97306 -0.93931 -1.5024 -1.52507 -3.20322 -1.70752 -4.97306Zm4.35376 4.97306c0.9393 -1.5024 1.52506 -3.20322 1.70754 -4.97306h2.6867c-0.2636 2.43956 -2.0529 4.42176 -4.39424 4.97306ZM7.00002 14.002c3.86658 0 7.00098 -3.1344 7.00098 -7.00096V7.001c0 -3.86654 -3.1344 -7.0009914985 -7.00096 -7.001l-0.00002 0C3.13348 0 -0.000976562 3.13445 -0.000976562 7.001c0 3.8665 3.134456562 7.001 7.000996562 7.001Z" clipRule="evenodd" strokeWidth="1" />
                                </svg>
                                Try on Web
                            </a>
                            <button
                                type="button"
                                className="forella-cta"
                                onClick={() => { setTfStatus('idle'); setTfOpen(true); }}
                            >
                                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.72321 0.46967c0.29289 -0.292893 0.76777 -0.292893 1.06066 0 0.29293 0.292893 0.29293 0.76777 0 1.06066L8.55051 2.76369c-0.2929 0.2929 -0.76777 0.2929 -1.06066 0 -0.2929 -0.29289 -0.2929 -0.76776 0 -1.06066L8.72321 0.46967ZM8.4842 4.11329c0.97962 -0.30788 2.3374 -0.41664 3.4047 0.66299 0.3346 0.33845 0.581 0.72506 0.7539 1.13836 0.0678 0.16208 0.0455 0.34787 -0.0586 0.48937 -0.1042 0.14151 -0.275 0.21795 -0.4499 0.20137 -0.0739 -0.007 -0.1521 -0.01068 -0.2347 -0.01068 -0.5178 0 -0.8512 0.14227 -1.0548 0.34305 -0.2026 0.19974 -0.345 0.5246 -0.345 1.02998 0 0.50538 0.1424 0.83024 0.345 1.02999 0.2036 0.20077 0.537 0.34304 1.0548 0.34304 0.0723 0 0.1412 -0.00281 0.2068 -0.0082 0.1651 -0.01358 0.3263 0.05558 0.4303 0.18465 0.104 0.12907 0.1372 0.30128 0.0888 0.45979 -0.3193 1.045 -0.8119 1.9819 -1.2777 2.5244 -0.7954 0.9263 -2.24412 1.4049 -3.62384 0.5624 -0.33748 -0.2061 -0.8098 -0.206 -1.14727 0 -1.37972 0.8425 -2.82845 0.3639 -3.62383 -0.5624 -0.59684 -0.6951 -1.25133 -2.0561 -1.51411 -3.48986 -0.26169 -1.42781 -0.16094 -3.08822 0.97298 -4.23526 1.06728 -1.07963 2.4251 -0.97087 3.40472 -0.66299 0.2527 0.07942 0.4903 0.18613 0.71146 0.31582 0.3615 0.21198 0.88333 0.21198 1.24483 0 0.22116 -0.12969 0.45876 -0.2364 0.71146 -0.31582Z" fill="currentColor" strokeWidth="1" />
                                </svg>
                                Request TestFlight access
                            </button>
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

            {tfOpen && (
                <div className="tf-overlay" onClick={closeTf}>
                    <div className="tf-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="tf-close"
                            onClick={closeTf}
                            aria-label="Close"
                            disabled={tfStatus === 'sending'}
                        >&times;</button>

                        {tfStatus === 'done' ? (
                            <div className="tf-done">
                                <span className="tf-done-icon">✅</span>
                                <h3>You're on the list</h3>
                                <p>Thanks{tfFirstName ? `, ${tfFirstName}` : ''}. I'll send a TestFlight invite to {tfEmail} soon.</p>
                                <button type="button" className="forella-cta forella-cta--primary tf-submit" onClick={closeTf}>Done</button>
                            </div>
                        ) : (
                            <form className="tf-form" onSubmit={submitTf}>
                                <h3 className="tf-title">Request TestFlight access</h3>
                                <p className="tf-sub">Drop your name and email and I'll send you an invite to the Forella iOS beta.</p>
                                {tfError && <div className="tf-error">{tfError}</div>}
                                <label className="tf-label">
                                    First name
                                    <input
                                        type="text"
                                        value={tfFirstName}
                                        onChange={(e) => setTfFirstName(e.target.value)}
                                        placeholder="Emeka"
                                        required
                                        maxLength={60}
                                    />
                                </label>
                                <label className="tf-label">
                                    Email
                                    <input
                                        type="email"
                                        value={tfEmail}
                                        onChange={(e) => setTfEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        required
                                    />
                                </label>
                                <button
                                    type="submit"
                                    className="forella-cta forella-cta--primary tf-submit"
                                    disabled={tfStatus === 'sending'}
                                >
                                    {tfStatus === 'sending' ? 'Sending…' : 'Request access'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
