import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './OrderTracker.css';
import './MossyInsights.css';
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import SummaryModal from '../components/SummaryModal';
import { useFlags } from '../context/FlagsContext';

const moneyProfile = require('../Mossy/IMG_0523.PNG');
const spendingCashflow = require('../Mossy/IMG_0525.PNG');
const expenseBreakdown = require('../Mossy/IMG_0526.PNG');
const heroMockup = require('../Mossy/Free iPhone 17 Pro mockup in hand (Mockuuups Studio).png');
const competitorBudget = require('../Mossy/competitors/image 87.png');
const competitorCharts = require('../Mossy/competitors/image 88.png');
const competitorBreakdown = require('../Mossy/competitors/image 89.png');
const competitorLimits = require('../Mossy/competitors/image 90.png');

const PAGE_SUMMARY = `**The opportunity.** Create Mossy’s first Insights experience: one place where customers could understand their financial health and spending patterns.

**The challenge.** Organize a health score, money profile, weekly spending, cash flow and expenses without overwhelming people or hiding how conclusions were reached.

**The approach.** I reframed the business request as a customer problem, reviewed competing products, spoke with five people who already used finance apps, and tested the concept with realistic tasks.

**The decision.** Structure the page from summary to detail: Financial Health, Money Profile, weekly spending, cash flow and expense breakdown.

**The outcome.** Mossy shipped an explainable Insights experience that gives people a quick answer first and supporting detail when they need it.`;

const themes = (items) => (
  <div className="theme-grid">
    {items.map(([title, body], index) => (
      <div className="theme-card" key={title}>
        <span className="theme-number">0{index + 1}</span>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    ))}
  </div>
);

const Screenshot = ({ src, alt, caption }) => (
  <div className="current-tracker-item">
    <div className="interaction-visual-box">
      <img src={src} alt={alt} />
    </div>
    <p className="current-tracker-caption">{caption}</p>
  </div>
);

export default function MossyInsights() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [summary, setSummary] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const { flags } = useFlags();

  useEffect(() => window.scrollTo(0, 0), []);

  const handleSummarize = async () => {
    setIsSummaryOpen(true);
    if (summary) return;
    setIsSummaryLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setSummary(PAGE_SUMMARY);
    setIsSummaryLoading(false);
  };

  return (
    <div className="case-study-container order-tracker-page mossy-insights-page">
      <div className={`case-study-content ${isPanelOpen ? 'panel-open' : ''}`}>
        <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />
        <main className="case-study-page">
          <header className="case-study-header">
            <Link to="/" className="back-link"><IoArrowBack /> Back</Link>
            <div className="shipped-badge"><span className="dot"></span> SHIPPED</div>
            <h1 className="hero-statement">Designing Mossy Insights so people could understand their money, not just see it</h1>
            <p className="hero-supporting">I designed Mossy’s first Insights experience: a clear path from overall financial health to the spending details behind it.</p>
            {flags.ai_features_enabled && (
              <div className="hero-actions">
                <button className="hero-pill-button summarize-ai" onClick={handleSummarize}>✦ <span className="summarize-ai-label">Summarize with AI</span></button>
              </div>
            )}
            <div className="project-metadata">
              <div className="meta-col"><span className="meta-label">Product</span><span className="meta-value">Mossy — Personal Finance</span></div>
              <div className="meta-col"><span className="meta-label">Focus</span><span className="meta-value">Insights, Information Architecture, Trust</span></div>
              <div className="meta-col"><span className="meta-label">My role</span><span className="meta-value">Product Designer &amp; Design Engineer</span></div>
              <div className="meta-col"><span className="meta-label">Platform</span><span className="meta-value">iOS &amp; Android</span></div>
            </div>
          </header>

          <section className="hero-visual mossy-hero-visual">
            <img src={heroMockup} alt="Mossy Insights displayed on an iPhone held in hand" />
          </section>

          <section className="casestudy-section asymmetric">
            <div className="section-label">01 — BUSINESS BRIEF</div>
            <div className="section-content">
              <h2 className="content-title">Make connected financial data more valuable</h2>
              <p className="emotional-hook">The business wanted a reason for customers to return to Mossy after connecting their accounts.</p>
              <div className="section-grid">
                <div className="text-content">
                  <p>Mossy already collected useful information from connected accounts, but most of that value lived in balances and transaction lists. The business requirement was to create an Insights feature that made the data feel more useful and encouraged repeat engagement.</p>
                  <p>Before designing screens, I translated that requirement into a customer problem: <strong>“I can see what I spent, but I still cannot tell how I am doing, what changed, or where I should focus.”</strong></p>
                </div>
                <div className="stats-sidebar">
                  <div className="stat-item"><span className="stat-icon">💼</span><h3>Business requirement</h3><p>Increase the ongoing value of connected financial data.</p></div>
                  <div className="stat-item"><span className="stat-icon">👤</span><h3>Customer problem</h3><p>Turn financial activity into an understandable picture of how someone is doing.</p></div>
                </div>
              </div>
            </div>
          </section>

          <div className="section-divider"></div>

          <section className="casestudy-section asymmetric">
            <div className="section-label">02 — DISCOVERY</div>
            <div className="section-content">
              <h2 className="content-title">Understanding what “financial clarity” meant to customers</h2>
              <div className="section-grid">
                <div className="text-content">
                  <p>I held five lightweight conversations with people who already used a banking or budgeting app. I asked them to walk me through how they checked their finances, what made them concerned, and what they did when a number looked unusual.</p>
                  <p>I combined those conversations with a review of the information Mossy could reliably calculate and a competitive analysis of four spending experiences.</p>
                </div>
                <div className="stats-sidebar">
                  <div className="stat-item"><span className="stat-icon">5</span><h3>Customer conversations</h3><p>People who already managed money with a banking or budgeting app.</p></div>
                  <div className="stat-item"><span className="stat-icon">4</span><h3>Competitor flows</h3><p>Spending, category, budget and transaction drill-down experiences.</p></div>
                  <div className="stat-item"><span className="stat-icon">1</span><h3>Data inventory</h3><p>The financial facts Mossy could calculate reliably enough to show customers.</p></div>
                </div>
              </div>
              <h2 className="content-title" style={{ marginTop: '56px' }}>Why these research methods</h2>
              <p className="section-subtitle">Each source answered a different question before I committed to the page structure.</p>
              {themes([
                ['Customer conversations', 'Source: five adults from my extended network who already used mobile banking or budgeting tools. Semi-structured conversations were useful because this was a new feature and I first needed to understand their existing habits, language and concerns.'],
                ['Product and data review', 'Source: Mossy’s connected-account, transaction, merchant, category and subscription data. This established which insights could be calculated consistently instead of designing promises the product could not support.'],
                ['Competitive analysis', 'Source: four existing finance-product spending flows. Comparing real interfaces was the fastest way to evaluate established patterns, identify common usability problems and decide which conventions Mossy should reuse or avoid.'],
                ['Task-based usability testing', 'Source: the five participants using a realistic Mossy concept. Tasks were more useful than asking whether they liked the design because they showed whether people could actually understand the score, comparison and expense breakdown.']
              ])}
              <blockquote className="pull-quote" style={{ marginTop: '24px' }}>People did not open a finance app because they wanted more charts. They opened it because they wanted to know whether anything needed their attention.</blockquote>
            </div>
          </section>

          <div className="section-divider"></div>

          <section className="casestudy-section asymmetric">
            <div className="section-label">03 — COMPETITIVE ANALYSIS</div>
            <div className="section-content">
              <h2 className="content-title">Four ways of explaining spending</h2>
              <p className="section-subtitle">I compared how finance products give meaning to category totals, comparisons and limits.</p>
              <div className="current-tracker-grid mossy-competitor-grid">
                <Screenshot src={competitorBudget} alt="Competitor spending screen organized around category budgets" caption="Budget progress makes overspending visible, but the experience depends on users setting limits before it becomes useful." />
                <Screenshot src={competitorCharts} alt="Competitor category spending screen using a pie chart" caption="The chart gives an overview, but the user must match colours to a separate legend and choose the right chart mode." />
                <Screenshot src={competitorBreakdown} alt="Competitor spending breakdown with total, proportional bar and ranked categories" caption="The strongest hierarchy: one total, a proportional overview, then categories with percentages, amounts and drill-downs." />
                <Screenshot src={competitorLimits} alt="Competitor budgeting screen with spending limit and transaction link" caption="A clear limit and View Transactions action connect the warning to evidence, but the information is split across separate charts." />
              </div>
              <blockquote className="pull-quote">For Mossy, I kept the ranked breakdown and path to evidence, but avoided making budgets or chart interpretation a requirement for understanding the page.</blockquote>
            </div>
          </section>

          <div className="section-divider"></div>

          <section className="casestudy-section asymmetric">
            <div className="section-label">04 — FINDINGS</div>
            <div className="section-content">
              <h2 className="content-title">The research reduced the problem to four needs</h2>
              <p className="section-subtitle">These findings gave each part of the new page a clear job.</p>
              {themes([
                ['Tell me how I am doing', 'Customers wanted a quick summary before deciding whether to look deeper. This became Financial Health.'],
                ['Tell me why', 'A score or profile felt arbitrary without recognizable facts behind it. This became the expandable Money Profile.'],
                ['Compare me with myself', 'People cared more about whether their own spending had changed than how they compared with strangers. This shaped the weekly average.'],
                ['Show me where the money went', 'Customers wanted categories in plain language with exact amounts. This became Expense Breakdown.']
              ])}
            </div>
          </section>

          <div className="section-divider"></div>

          <section className="casestudy-section asymmetric">
            <div className="section-label">05 — 0→1 DESIGN</div>
            <div className="section-content">
              <h2 className="content-title">One question led naturally to the next</h2>
              <p className="section-subtitle">The findings became the order of the page: answer, explain, compare, then break down.</p>
              <div className="section-grid">
                <div className="text-content">
                  <p><strong>1. Answer:</strong> Financial Health gives a quick reading of the user’s current position. <strong>2. Explain:</strong> Money Profile describes the broader pattern and exposes the facts behind it. <strong>3. Compare:</strong> weekly spending and six-month cash flow show short- and long-term movement. <strong>4. Break down:</strong> expenses show where the money went.</p>
                  <p>I used expandable sections for supporting information so the page could remain scannable without making the score or profile feel like unexplained judgments.</p>
                </div>
                <div className="stats-sidebar">
                  <div className="stat-item"><span className="stat-icon">1</span><h3>Answer</h3><p>Financial Health</p></div>
                  <div className="stat-item"><span className="stat-icon">2</span><h3>Explain</h3><p>Money Profile</p></div>
                  <div className="stat-item"><span className="stat-icon">3</span><h3>Compare</h3><p>Weekly spending and cash flow</p></div>
                  <div className="stat-item"><span className="stat-icon">4</span><h3>Break down</h3><p>Expense categories</p></div>
                </div>
              </div>
            </div>
          </section>

          <div className="section-divider"></div>

          <section className="casestudy-section asymmetric">
            <div className="section-label">06 — VALIDATION</div>
            <div className="section-content">
              <h2 className="content-title">Five usability sessions tested whether the story was clear</h2>
              <p className="section-subtitle">I tested comprehension with five people using realistic financial scenarios.</p>
              <div className="section-grid">
                <div className="text-content">
                  <p>Participants were asked to explain their health score, find out why they were classified as “The Rebuilder,” decide whether this week’s spending was unusual, and identify their largest expense category.</p>
                  <p>The first concept showed the right information, but some conclusions still required interpretation. The final design paired every major number with a label, comparison or explanation.</p>
                </div>
                <div className="stats-sidebar">
                  <div className="stat-item"><span className="stat-icon">5</span><h3>Participants</h3><p>Existing users of mobile banking or budgeting products.</p></div>
                  <div className="stat-item"><span className="stat-icon">4</span><h3>Tasks</h3><p>Health, profile, weekly comparison and expense breakdown.</p></div>
                </div>
              </div>
              {themes([
                ['Health needed context', 'Added “Excellent” and a short description beside 88 instead of leaving the number to explain itself.'],
                ['The profile needed evidence', 'Made income, average spending, favourite merchant, category and subscriptions visible when expanded.'],
                ['The chart needed a conclusion', 'Added the average-week reference and “Spending less than usual” summary beneath the chart.'],
                ['The breakdown needed two values', 'Paired percentages with exact amounts so users could understand both proportion and impact.']
              ])}
            </div>
          </section>

          <div className="section-divider"></div>

          <section className="casestudy-section asymmetric">
            <div className="section-label">07 — SHIPPED EXPERIENCE</div>
            <div className="section-content">
              <h2 className="content-title">One page, three levels of understanding</h2>
              <p className="section-subtitle">The shipped experience moves from a summary to personal patterns and then detailed spending.</p>
              <div className="current-tracker-grid is-three-up">
                <Screenshot src={moneyProfile} alt="Expanded Mossy Money Profile showing supporting financial facts" caption="The Money Profile explains the user’s broader financial pattern with facts they can recognize." />
                <Screenshot src={spendingCashflow} alt="Mossy weekly spending and six-month cash-flow cards" caption="Weekly spending provides immediate context while cash flow shows the longer pattern." />
                <Screenshot src={expenseBreakdown} alt="Mossy expense breakdown with ranked spending categories" caption="The expense breakdown combines a total, proportional bar, percentages and exact category amounts." />
              </div>
            </div>
          </section>

          <div className="section-divider"></div>

          <section className="casestudy-section asymmetric">
            <div className="section-label">08 — OUTCOMES</div>
            <div className="section-content">
              <h2 className="content-title">The concept answered the questions it was designed around</h2>
              <p className="section-subtitle">Final-round usability testing showed that the hierarchy and supporting language were working.</p>
              {themes([
                ['5 of 5 understood weekly pace', 'Every participant correctly identified whether the current week was above or below their usual spending.'],
                ['4 of 5 explained Financial Health', 'After expanding the supporting information, four participants could explain what contributed to the score.'],
                ['5 of 5 found the largest expense', 'Every participant identified the highest spending category and its exact dollar amount.'],
                ['One new repeat-use destination', 'Mossy shipped a single place for health, personal patterns, weekly spending, cash flow and expenses on iOS and Android.']
              ])}
              <div className="section-grid" style={{ marginTop: '56px' }}>
                <div className="text-content">
                  <p>The result gave the business a feature that made connected financial data useful beyond the transaction list. For customers, it created a faster way to understand their position and decide where to look deeper.</p>
                </div>
                <div className="stats-sidebar">
                  <div className="stat-item"><span className="stat-icon">✓</span><h3>Shipped</h3><p>Financial Health, Money Profile, weekly spending, cash flow and expense breakdown.</p></div>
                  <div className="stat-item"><span className="stat-icon">→</span><h3>Next measurement</h3><p>Repeat visits, profile expansion and movement from an insight into supporting transactions.</p></div>
                </div>
              </div>
            </div>
          </section>

          <div className="section-divider"></div>

          <section className="casestudy-section asymmetric">
            <div className="section-label">09 — CUSTOMER FEEDBACK</div>
            <div className="section-content">
              <h2 className="content-title">Customers noticed the difference</h2>
              <p className="section-subtitle">Paraphrased feedback themes from the usability sessions.</p>
              <div className="mossy-feedback-grid">
                <blockquote>
                  <p>“This gives me a clearer picture than the analytics in the finance apps I already use.”</p>
                  <cite>Usability participant · Uses mobile banking and a budgeting app</cite>
                </blockquote>
                <blockquote>
                  <p>“I like that it tells me whether I’m doing okay before showing me all the numbers.”</p>
                  <cite>Usability participant · Uses mobile banking weekly</cite>
                </blockquote>
                <blockquote>
                  <p>“The weekly comparison is the useful part. I don’t have to decide what the chart means.”</p>
                  <cite>Usability participant · Tracks spending monthly</cite>
                </blockquote>
              </div>
            </div>
          </section>

          <div className="section-divider"></div>

          <section className="casestudy-section asymmetric">
            <div className="section-label">10 — LEARNINGS</div>
            <div className="section-content">
              <h2 className="content-title">Clarity depended on more than the interface</h2>
              <div className="section-grid">
                <div className="text-content">
                  <p>The same health calculation needed to power both the screen and Mossy’s explanations. Transfers and incomplete information had to be handled before the product could make trustworthy claims about spending.</p>
                  <p>Designing Insights meant working across hierarchy, copy, interaction states and the data behind each number. The result was not simply a set of charts—it was a system for helping people understand their financial position.</p>
                </div>
                <div className="stats-sidebar">
                  <div className="stat-item"><span className="stat-icon">🎯</span><h3>Product lesson</h3><p>A useful insight needs a conclusion, context and supporting evidence.</p></div>
                  <div className="stat-item"><span className="stat-icon">📐</span><h3>Design lesson</h3><p>The order of information matters as much as the information itself.</p></div>
                </div>
              </div>
              <blockquote className="pull-quote" style={{ marginTop: '56px' }}>The project started as an Insights page. The work was deciding how Mossy should explain someone’s money.</blockquote>
            </div>
          </section>
        </main>
      </div>
      <SummaryModal isOpen={isSummaryOpen} onClose={() => setIsSummaryOpen(false)} summary={summary} isLoading={isSummaryLoading} />
      <ChatPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </div>
  );
}
