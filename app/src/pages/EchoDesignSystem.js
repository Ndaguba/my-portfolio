import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './EchoDesignSystem.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function EchoDesignSystem() {
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
                        <h1 className="case-study-title">echo Design System</h1>
                        <p className="case-study-subtitle">A human-centered, token-based foundation built to scale consistency and accessibility across Bobo's product ecosystem.</p>
                    </header>

                    {/* PROJECT OVERVIEW */}
                    <section className="case-study-section">
                        <span className="section-label">Project</span>
                        <h2>A foundation for seamless product experiences</h2>
                        <p>echo is Bobo’s internal design system focused on creating consistent, accessible, and human-centered interfaces through a token-driven foundation. Rather than starting with components, echo establishes a strong foundational layer of design tokens that power visual decisions across all products.</p>

                        <div className="grid-2" style={{ marginTop: '32px' }}>
                            <div className="info-block">
                                <span className="info-label">ROLE</span>
                                <span className="info-value">Lead Product Designer</span>
                            </div>
                            <div className="info-block">
                                <span className="info-label">SCOPE</span>
                                <span className="info-value">Design Tokens, Spacing, Typography, Radius, Documentation</span>
                            </div>
                            <div className="info-block">
                                <span className="info-label">TEAM</span>
                                <span className="info-value">Product Design, Engineering</span>
                            </div>
                            <div className="info-block">
                                <span className="info-label">PLATFORM</span>
                                <span className="info-value">Web & Mobile</span>
                            </div>
                        </div>
                    </section>

                    {/* PROBLEM */}
                    <section className="case-study-section">
                        <span className="section-label">Problem</span>
                        <h2>The friction of hardcoded foundations</h2>
                        <p>As Bobo’s product ecosystem expanded across platforms, we faced a critical architectural bottleneck: our visual foundations were entirely hardcoded. Colors and dark mode definitions were defined manually at the component level rather than being driven by a central system. This created deep inconsistencies across features and made even minor visual updates an exhausting, manual effort.</p>
                        <p>Without a semantic layer, managing dark mode required designers and engineers to "re-translate" values for every new feature, resulting in significant handoff friction and a fragmented user experience.</p>
                    </section>

                    {/* PROCESS */}
                    <section className="case-study-section">
                        <span className="section-label">Process</span>
                        <h2>Moving from values to Intent</h2>

                        <p>I started with a comprehensive audit of existing UI components, but I quickly realized that listing values wouldn't solve the problem. The real challenge was <strong>Synthesizing Intent</strong>. I interviewed engineers to understand their pain points with CSS inheritance and designers to see where they felt the most friction in Figma.</p>

                        <div className="diagram-placeholder" style={{ padding: '80px' }}>[DIAGRAM: The Three-Tier Token Architecture: Global → Semantic → Component]</div>

                        <div className="insight-card">
                            <p><strong>The Breakthrough:</strong> I moved away from "literal" values (like Blue-500) and implemented a <strong>Three-Tier Token Architecture</strong>. By separating raw values from their functional intent (like <em>brand-primary-hover</em>), we created a system that could change themes entirely without touching a single line of component code.</p>
                        </div>
                    </section>

                    {/* FOUNDATIONS */}
                    <section className="case-study-section">
                        <span className="section-label">Foundations</span>
                        <h2>Codifying the Core Experience</h2>
                        <p>A design system is only as strong as its smallest parts. I moved beyond aesthetics to build a resilient logic for every core foundation.</p>

                        <div className="foundation-column">
                            <div className="foundation-header">
                                <h3>01. Color & Theming</h3>
                                <span className="tech-badge">Semantic Tokens</span>
                            </div>
                            <div className="foundation-flex">
                                <div>
                                    <p><strong>The Challenge:</strong> "Hard-coded" hex values made dark mode support a manual, error-prone 3-week process.</p>
                                    <p><strong>The System:</strong> Implemented a functional naming convention that abstracts color from its value. Tokens like `surface-primary` automatically map to different hex codes based on the active theme.</p>
                                    <ul>
                                        <li>100% WCAG 2.1 Contrast Compliance</li>
                                        <li>Dynamic Light/Dark Mode mapping</li>
                                        <li>Sub-brand skinning capability</li>
                                    </ul>
                                </div>
                                <div className="diagram-placeholder" style={{ padding: '60px' }}>[SCREENSHOT: Mapping Palette → Semantic Tokens]</div>
                            </div>
                        </div>

                        <div className="foundation-column">
                            <div className="foundation-header">
                                <h3>02. Typography & Hierarchy</h3>
                                <span className="tech-badge">Geometric Scales</span>
                            </div>
                            <div className="foundation-flex">
                                <div>
                                    <p><strong>The Challenge:</strong> Disconnected typography definitions meant that font styles were hardcoded into components, making global hierarchy updates a manual and inconsistent process.</p>
                                    <p><strong>The System:</strong> Established a 1.125 (Major Second) type scale. Every text element is anchored to a semantic role (Heading, Body, Caption), ensuring absolute consistency across screens.</p>
                                    <ul>
                                        <li>8 Core Semantic Styles</li>
                                        <li>Locked 150% Line-height for readability</li>
                                        <li>Responsive scaling for Web vs Mobile</li>
                                    </ul>
                                </div>
                                <div className="diagram-placeholder" style={{ padding: '60px' }}>[SCREENSHOT: Typography Scale & Line-height Grid]</div>
                            </div>
                        </div>

                        <div className="foundation-column">
                            <div className="foundation-header">
                                <h3>03. Spatial System</h3>
                                <span className="tech-badge">4px Baseline Grid</span>
                            </div>
                            <div className="foundation-flex">
                                <div>
                                    <p><strong>The Challenge:</strong> Hardcoded, arbitrary spacing values led to "pixel-pushing" back-and-forth during dev handoff, inflating QA time significantly.</p>
                                    <p><strong>The System:</strong> A rigid 4px-based spatial scale. By limiting choices to a set of 8 tokens, we eliminated guesswork and aligned design and code to the exact same grid.</p>
                                    <ul>
                                        <li>Linear Scale: 4, 8, 12, 16, 24, 32, 48, 64</li>
                                        <li>Consistent 8px component gutters</li>
                                        <li>Simplified Layout IA for engineers</li>
                                    </ul>
                                </div>
                                <div className="diagram-placeholder" style={{ padding: '60px' }}>[SCREENSHOT: Spatial Tokens in Action]</div>
                            </div>
                        </div>

                        <div className="foundation-column" style={{ borderBottom: 'none' }}>
                            <div className="foundation-header">
                                <h3>04. Object Styles (Radius)</h3>
                                <span className="tech-badge">Visual Affordance</span>
                            </div>
                            <div className="foundation-flex">
                                <div>
                                    <p><strong>The Challenge:</strong> Multiple corner styles created a "patchwork" feel that lacked product identity.</p>
                                    <p><strong>The System:</strong> A mathematical approach to rounding where the radius is proportional to the container size, creating a cohesive "echo" visual signature.</p>
                                    <ul>
                                        <li>4-Tier Rounding Scale (S, M, L, Full)</li>
                                        <li>Semantic mapping per component type</li>
                                        <li>Reinforced depth through elevation tokens</li>
                                    </ul>
                                </div>
                                <div className="diagram-placeholder" style={{ padding: '60px' }}>[SCREENSHOT: Radius & Shadow System]</div>
                            </div>
                        </div>
                    </section>

                    {/* SOLUTION */}
                    <section className="case-study-section">
                        <span className="section-label">Documentation</span>
                        <h2>Shared language for scale</h2>
                        <p>The solution was a tiered architecture where visual decisions are expressed through tokens, ensuring everything from spacing to feedback colors is predictable and thematic.</p>

                        <div className="insight-card">
                            <p><strong>Documentation:</strong> Every foundation includes intent-driven guidance, token tables, and usage examples, making it accessible for both designers and developers.</p>
                        </div>
                    </section>

                    {/* OUTCOME */}
                    <section className="case-study-section">
                        <span className="section-label">Outcome</span>
                        <h2>A Resilient Foundation</h2>
                        <p>The echo Design System transformed how we build at Bobo. By moving from a "component-first" to a "foundation-first" mindset, we didn't just fix visual bugs—we built a scalable language that evolved with our users.</p>

                        <div className="metrics-grid">
                            <div className="metric-card">
                                <p className="metric-value">40%</p>
                                <p className="metric-label">Reduction in visual regression bugs</p>
                            </div>
                            <div className="metric-card">
                                <p className="metric-value">2X</p>
                                <p className="metric-label">Faster design-to-dev handoff</p>
                            </div>
                            <div className="metric-card">
                                <p className="metric-value">100%</p>
                                <p className="metric-label">Dark mode coverage across core app</p>
                            </div>
                        </div>

                        <p><strong>Reflection:</strong> By focusing on the foundational layer first rather than jumping straight to components, we built a resilient system. Every future component is now anchored to a consistent, human-centered baseline.</p>
                    </section>
                </main>

                <Footer />
            </div>
            <ChatPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
        </div>
    );
}
