const dataContext = {
  profile: {
    name: "Emeka Ndaguba",
    title: "Senior Product Designer & Design Engineer",
    location: "Winnipeg, Canada",
    summary: "A Senior Product Designer and Design Engineer specializing in building digital products at the intersection of design, engineering, and product strategy. Bridges the gap between design and code by thinking deeply about system behavior and implementation quality. Often works directly in the code using tools like Cursor, Claude Code, and React to ensure the final product matches the vision. Expert in building scalable design systems and AI-native workflows.",
    philosophy: "I believe the best products come from the space where design precision meets engineering execution. I care about building reliable, human-centered interfaces that make complex systems feel clear and trustworthy. I focus on reducing cognitive load and designing trust as a first-class feature.",
  },
  experience: [
    {
      company: "Bobo Health",
      role: "Senior Product Designer / Design Engineer",
      period: "Aug 2025 - Present",
      description: "First in-house designer owning product design, brand, and UX. Leads design across mobile, web, and core product. Built and launched Echo, the company's first design system. Responsible for shaping product from strategy to shipped experience including Poppy AI, Development Pathways, and Doctor's Reports."
    },
    {
      company: "SkipTheDishes",
      role: "Product Designer",
      period: "Mar 2023 - Aug 2025",
      description: "Owned design across the Partnerships portfolio and post-order experience. Led the design for the Skip x WestJet partnership, creating a framework that was later adopted across Just Eat Takeaway markets globally. Redesigned the Order Tracker with a scalable bottom-sheet architecture that unlocked features like PIN verification and multi-partner logistics. Regularly contributed to the PIE design system."
    },
    {
      company: "InTuitionPay",
      role: "Founding Product Designer & Frontend Developer",
      period: "Feb 2021 - Aug 2023",
      description: "First in-house designer leading product design and frontend engineering. Built and launched Cookies, the company's first design system. Led design and engineering workflows from concept to launch. Played a key role in growth leading to a 2024 appearance on Dragons' Den."
    }
  ],
  projects: [
    {
      id: "skip-westjet",
      title: "Skip x WestJet Partnership",
      company: "SkipTheDishes",
      tagline: "Canada's largest food delivery partnership — a trust-first loyalty integration that became a global standard.",
      role: "Senior Product Designer — led UX for discovery, account linking, and rewards earn-and-redeem.",
      timeline: "6 weeks",
      status: "Shipped",
      problem: "WestJet and Skip formed a strategic partnership to let users earn WestJet Dollars on Skip orders. The challenge was account linking, permission anxiety, and real-time reward tracking across two separate secure brand environments.",
      solution: "A four-surface, trust-first experience: partnerships positioned in the Rewards tab (where users look for value), a value-first landing page, a transparent permission-request flow, and persistent management controls. The key insight was framing account linking as a value exchange rather than a security risk.",
      decisions: [
        "Rewards-First Architecture: moved discovery and management to the Rewards tab instead of Settings, based on user testing.",
        "Value Before Permission: surfaced benefits before the linking flow so consent felt intentional.",
        "Consent as Value Exchange: framed permissions around earning travel rewards rather than data-sharing jargon.",
        "Persistent Management Surface: let users view status and control permissions after setup for long-term trust.",
        "Mental Models Over System Logic: designed for natural user expectations, not the underlying technical architecture."
      ],
      impact: [
        "72% account-link completion rate driven by value-first onboarding.",
        "500K+ accounts connected.",
        "58% return rate to the partnership management surface within 30 days.",
        "Adopted as the standard partnership framework across Just Eat Takeaway markets globally."
      ],
      skills: ["Product Design", "UX Strategy", "Interaction Design", "User Research"]
    },
    {
      id: "development-pathways",
      title: "Development Pathways",
      company: "Bobo Health",
      tagline: "Digitizing CDC clinical milestones into a reassurance-first tracking platform.",
      role: "Senior Product Designer — led UX from the ground up: product UX strategy, IA, interaction design, and clinical alignment.",
      timeline: "3 weeks",
      status: "Shipped",
      problem: "Developmental frameworks are clinically accurate but emotionally intimidating. Presented as rigid pass/fail checklists, they leave parents feeling judged. 72% of parents report 'milestone anxiety' with traditional checklists, and only 1 in 5 find raw CDC milestone data easy to navigate without professional translation.",
      solution: "Turn the CDC's clinical credibility into a supportive daily companion — translating clinical guidance into parent-friendly language and designing for reassurance through a progression model rather than success/failure evaluation, scaling cleanly across age ranges and milestone groups.",
      decisions: [
        "Avoiding Pass/Fail: designed for progress and reassurance instead of rigid completion scoring.",
        "Age-Based Surfacing: showed only age-relevant milestones to reduce cognitive load.",
        "Clinical Language Translation: converted raw CDC terms into observable everyday behaviors while keeping 100% medical accuracy.",
        "Developmental Grouping: categorized milestones into 4 core domains with a custom icon system.",
        "Information Architecture: structured the milestone database into age-specific buckets to keep it focused, not overwhelming."
      ],
      impact: [
        "+35% lift in free-to-paid upgrades (users converted from free to paid to use the feature).",
        "74% of active parents completed at least one milestone check within their first 14 days.",
        "82% task completion rate during usability testing.",
        "67% of parents reported feeling 'more confident' than interpreting raw CDC checklists alone."
      ],
      skills: ["Product Design", "Information Architecture", "UX Strategy", "Interaction Design"]
    },
    {
      id: "poppy-ai",
      title: "Poppy AI",
      company: "Bobo Health",
      tagline: "A 24/7 conversational pediatric assistant that turns messy natural language into clinical data.",
      role: "Lead Product Designer — product design, conversational UX, user research, and AI prompting.",
      timeline: "3 weeks",
      status: "Shipped",
      problem: "Parents abandon vital infant tracking during critical development windows because traditional logbooks are cold and high-friction — especially during the '3 AM exhaustion window'. Form-based apps suffer ~60% drop-off, and 78% of parents value personalized, child-specific insight over generic advice.",
      solution: "A conversational pediatric assistant that transforms natural-language inputs into structured health logs and doctor-verified guidance, using an empathetic 'Nurse Partner' tone and a transparent reasoning engine that surfaces intent and clinical sources.",
      decisions: [
        "Designing Thinking States: surface visible reasoning during latency to maintain trust in sensitive medical moments.",
        "Guided Clarification Over Automation: avoid silently logging vague inputs; ask to protect accuracy and trust.",
        "Tone as a Safety Feature: an empathetic tone balances clinical authority with reassurance — cold language increased anxiety.",
        "Transparent Interaction Model: a conversational state machine surfaces 'thinking cycles' and tool-call states during database queries.",
        "Proactive Context Gathering: low-friction prompts capture precise data during high-stress moments."
      ],
      impact: [
        "68% of logs completed via Poppy AI instead of traditional forms.",
        "42% reduction in abandoned sessions.",
        "37% faster log completion time."
      ],
      skills: ["Product Design", "Conversational UX", "User Research", "AI Prompting"]
    },
    {
      id: "order-tracker",
      title: "Order Tracker Redesign",
      company: "SkipTheDishes",
      tagline: "Turning a static status page into an extensible logistics platform via a bottom-sheet architecture.",
      role: "Senior Product Designer / UX lead — product UX strategy, bottom-sheet architecture, and monetization design.",
      timeline: "5 weeks",
      status: "In progress / not shipped",
      problem: "Order tracking was one of Skip's most-visited surfaces but too limited for evolving needs — it couldn't support PIN-based handoff, multi-partner delivery logistics, or monetization without becoming cluttered.",
      solution: "A new bottom-sheet architecture that scales gracefully as new business needs emerge — flexibility for logistics complexity while keeping a calm, simple experience, and room for post-purchase monetization.",
      decisions: [
        "Bottom-Sheet Architecture: a new interaction model that scales as requirements grow.",
        "Turning Page into Platform: repositioned tracking from a static status page to a flexible foundation.",
        "Operational Simplicity: designed for PIN codes and pooled delivery while keeping the UX simple.",
        "Creating Room for Growth: built space for merchandising and upsell during transit without overwhelming users."
      ],
      impact: [
        "Repositioned order tracking into a more extensible platform surface inside Skip.",
        "Created a bottom-sheet architecture supporting evolving logistics requirements.",
        "Unlocked room for post-purchase upsell and additional monetization surfaces."
      ],
      skills: ["Mobile Product Design", "Logistics UX", "Platform Thinking", "Monetization Design"]
    },
    {
      id: "echo-design-system",
      title: "Echo Design System",
      company: "Bobo Health",
      tagline: "A tokenized, human-centered design language bridging design precision and engineering execution.",
      role: "Design system architecture and documentation; interdisciplinary audits with engineers.",
      timeline: "Ongoing",
      status: "Shipped",
      problem: "As Bobo Health grew, UI inconsistency became a bottleneck. Designers worked in pixels, engineers in flexible units — a 'translation gap' that caused visual bugs and re-guessed decisions at handoff, with ~60% of CSS work spent on overrides.",
      solution: "A unified design language anchored on semantic tokens that create a 1:1 bridge between design tools and code (mapping abstract values like Pink-500 to functional uses like CTA-Background), built on immutable token architecture and a tiered contribution governance model.",
      decisions: [
        "Immutable Tokens: semantic token architecture mapping abstract values to functional uses.",
        "Governance by Design: a tiered contribution flow to keep the system alive but governed.",
        "1:1 Tokenized Bridge between design tools and code.",
        "WCAG 2.1 accessibility checks baked into color-engine tokens.",
        "Contribution model to prevent a 'collection of orphans'."
      ],
      impact: [
        "2X increase in design-to-engineering handoff speed for new features.",
        "40% reduction in cross-platform visual regression bugs.",
        "100% unified dark-mode coverage with zero manual overrides."
      ],
      skills: ["Design Tokens", "Information Architecture", "System Architecture", "Documentation"]
    },
    {
      id: "forella",
      title: "Forella AI",
      company: "Forella (personal venture)",
      tagline: "A proactive AI personal assistant that manages daily life through natural conversation and voice — designed and built end to end.",
      role: "End-to-end: product design plus shipping the React frontend and LLM backend.",
      timeline: "4 weeks",
      status: "In beta (~150 users)",
      problem: "Traditional calendar apps are built around manual interaction — users create events, set reminders, and organize priorities themselves. The core insight: 'Users don't want a better calendar; they want fewer things to remember.'",
      solution: "An AI-native assistant that shifts from reactive schedule management to proactive life coordination, built on three pillars: natural-language interaction, a trust-first architecture with transparent reasoning, and voice-first execution for high-mobility moments.",
      decisions: [
        "Natural Language Interactions: conversational and voice parsing of complex intentions into structured events.",
        "Trust-First Architecture: a transparent reasoning engine with approval loops.",
        "Cognitive Load Reduction: ~40% reduction in manual entry to build habit formation.",
        "Proactive vs. Intrusive Boundaries: defining when to surface suggestions vs. stay silent.",
        "Multi-modal Feedback: clear auditory cues for voice interactions."
      ],
      impact: [
        "Now in beta with ~150 users.",
        "Shifted user behavior from reactive schedule management to proactive coordination.",
        "Established long-term trust through transparent AI reasoning and visible control loops.",
        "Reduced the cognitive load of daily planning by replacing manual forms with natural language."
      ],
      skills: ["Conversational UX", "Voice AI", "Interaction Design", "Product Strategy", "React", "LLM Backend"]
    },
    {
      id: "ophir-labs",
      title: "Ophir Labs",
      company: "Ophir Labs",
      tagline: "An AI agent for compliance that automates policy review, Q&A, and evidence flows.",
      role: "Lead design and frontend across the knowledge base, Q&A, and evidence flows.",
      timeline: "In progress",
      status: "Not shipped — in an organizational pilot",
      problem: "Compliance review is slow and manual. Teams must read policies and firm standards, then answer and flag questions against them by hand — a high-effort, error-prone process.",
      solution: "An AI agent that ingests policies and firm standards, then answers and flags questions against them — surfacing a searchable knowledge base, a Q&A interface, and evidence flows that show its reasoning.",
      decisions: [
        "Knowledge Base First: structured ingestion of policies and firm standards as the agent's grounding.",
        "Q&A Interface: natural-language questions answered against the ingested standards.",
        "Evidence Flows: surface the supporting evidence behind every answer and flag for trust and auditability."
      ],
      impact: [
        "Currently running in 1 organizational pilot.",
        "Automates compliance review that was previously fully manual."
      ],
      skills: ["Product Design", "Frontend Development", "AI Agents", "Interaction Design"]
    }
  ],
  skills: {
    design: ["UX Strategy", "Conversational UX", "Design Systems", "Interaction Design", "User Research", "Information Architecture"],
    engineering: ["React", "JavaScript", "Design Tokens", "Frontend Development", "AI Prompting", "System Architecture"],
    tools: ["Cursor", "Claude Code", "Figma", "OpenAI API", "React Native"]
  },
  process: {
    discovery: "I start by identifying the emotional friction point — like the 3 AM exhaustion window for parents — rather than just the technical requirement.",
    strategy: "I design trust as a core product surface. I believe clarity and control matter more than pure automation.",
    execution: "I bridge the gap between design and code. I don't just stop at mockups; I work in the code to ensure implementation matches the vision.",
    validation: "I test mental models and expectations. If a user expects to find a feature in 'Rewards', that's where it belongs, regardless of the system logic."
  },
  // Common questions visitors, recruiters, and collaborators ask — answered in Emeka's voice.
  faq: [
    {
      q: "What kind of designer are you?",
      a: "I'm a Senior Product Designer and Design Engineer — I live at the seam between design and code. I do end-to-end product design (research, IA, interaction, systems) and I also write the frontend (React) so the shipped product matches the intended vision."
    },
    {
      q: "How do you ship products?",
      a: "I start from the emotional friction point, design trust and clarity as first-class features, then work directly in the code with tools like Cursor and Claude Code to close the design-to-engineering gap. I validate against mental models rather than internal system logic."
    },
    {
      q: "What's your availability?",
      a: "I'm currently leading design at Bobo Health. I'm open to talking about interesting product and design-engineering opportunities — the best way to start is to book a chat or reach out directly."
    },
    {
      q: "What are you working on now?",
      a: "At Bobo Health I lead design across mobile, web, and core product — including Poppy AI, Development Pathways, Doctor's Reports, and the Echo design system. On the side I build Forella, a proactive AI assistant (in beta), and I work on Ophir Labs, an AI compliance agent."
    },
    {
      q: "What tools do you use?",
      a: "Figma for design, Cursor and Claude Code for building, React / React Native for frontend, and the OpenAI API for AI features. I'm comfortable owning a feature from a blank canvas to a shipped, tokenized, accessible interface."
    },
    {
      q: "What's your design philosophy?",
      a: "The best products come from where design precision meets engineering execution. I reduce cognitive load and treat trust as something you design — not assume. Clarity and control beat pure automation."
    },
    {
      q: "Tell me about your most impactful project.",
      a: "Skip x WestJet — Canada's largest food-delivery loyalty partnership. I led UX for account linking and rewards, hit a 72% link-completion rate, connected 500K+ accounts, and the framework was adopted across Just Eat Takeaway markets globally."
    },
    {
      q: "Do you only design, or do you code too?",
      a: "Both. I'm a design engineer — I ship the React frontend for things I design. For Forella I built both the interface and the LLM backend end to end."
    },
    {
      q: "How can I contact you or see more?",
      a: "You can book a chat, grab my resume, or find me on LinkedIn and GitHub — the buttons for all of those are right here in the chat. You can also scroll the page to see my featured work."
    }
  ],
  links: {
    resume: "https://drive.google.com/file/d/1t96-lAIvs9h8_11M5JLWqenU8XNJ6fOS/view?usp=sharing",
    booking: "https://cal.com/",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/"
  }
};

module.exports = dataContext;
