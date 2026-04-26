const dataContext = {
  profile: {
    name: "Emeka Ndaguba",
    title: "Senior Product Designer & Design Engineer",
    location: "Winnipeg, Canada",
    summary: "A Senior Product Designer and Design Engineer specializing in building digital products at the intersection of design, engineering, and product strategy. Bridges the gap between design and code by thinking deeply about system behavior and implementation quality. Often works directly in the code using tools like Cursor, Claude Code, and React to ensure final product matches the vision. Expert in building scalable design systems and AI-native workflows.",
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
      description: "Owned design across Partnerships portfolio and post-order experience. Led UX for strategic partner integrations (WestJet partnership). Redesigned the Order Tracker with a scalable bottom-sheet architecture that unlocked features like PIN verification and multi-partner logistics. Regularly contributed to the PIE design system."
    },
    {
      company: "InTuitionPay",
      role: "Founding Product Designer & Frontend Developer",
      period: "Feb 2021 - Aug 2023",
      description: "First in-house designer leading product design and frontend engineering. Built and launched Cookies, the company's first design system. Led design and engineering workflows from concept to launch. Played a key role in growth leading to 2024 appearance on Dragons' Den."
    }
  ],
  projects: [
    {
      id: "poppy-ai",
      title: "Poppy AI",
      tagline: "Conversational Pediatric Assistant",
      problem: "Traditional infant tracking is cold and high-friction, especially during the '3 AM Exhaustion Window'.",
      solution: "A 24/7 pediatric assistant that turns natural language into clinical data using an empathetic 'Nurse Partner' tone.",
      decisions: [
        "Designing Thinking States: Surfaces AI reasoning to maintain trust during latency.",
        "Guided Correction: Prefers asking for clarification over making silent assumptions.",
        "Tone as a Safety Feature: Uses empathetic language to reduce parental anxiety."
      ],
      impact: [
        "68% of logs completed via AI vs traditional forms.",
        "42% reduction in abandoned sessions.",
        "37% faster log completion time."
      ]
    },
    {
      id: "skip-westjet",
      title: "Skip x WestJet Partnership",
      tagline: "Canada's largest food delivery partnership",
      problem: "Designing trust across brands when asking for explicit data-sharing permissions.",
      solution: "A trust-first experience prioritizing user confidence over promotional mechanics.",
      decisions: [
        "Rewards-First Architecture: Moved discovery from Settings to Rewards based on user mental models.",
        "Value Before Permission: Surfaced benefits before the linking flow.",
        "Consent as Value Exchange: Framed permissions around benefits enabled."
      ],
      impact: [
        "72% account-link completion rate.",
        "41% drop-off reduction during permission requests.",
        "58% return rate to management surface."
      ]
    },
    {
      id: "echo-design-system",
      title: "Echo Design System",
      tagline: "Tokenized Product Language",
      problem: "UI inconsistency and a 'Translation Gap' between designers and engineers leading to 60% CSS work spent on overrides.",
      solution: "A tokenized, human-centered design language built for scalability.",
      decisions: [
        "Immutable Tokens: Semantic token architecture mapping abstract values to functional uses.",
        "Governance by Design: Tiered contribution flow to keep the system alive but governed.",
        "System Taxonomy: 1:1 tokenized bridge between design tools and code."
      ],
      impact: [
        "2X increase in design-to-engineering handoff speed.",
        "40% reduction in visual regression bugs.",
        "100% dark mode coverage with zero manual overrides."
      ]
    },
    {
      id: "development-pathways",
      title: "Development Pathways",
      tagline: "Digitizing CDC Clinical Milestones",
      problem: "CDC frameworks are clinically accurate but emotionally intimidating (Pass/Fail checklists).",
      solution: "Reassurance-first tracking that transforms clinical guidance into parent-friendly checklists.",
      decisions: [
        "Avoiding Pass/Fail: Focused on progress and reassurance rather than judgment.",
        "Age-Based Surfacing: Reduced cognitive load by only showing age-relevant milestones.",
        "Language Translation: Converted raw CDC terms into observable everyday behaviors."
      ],
      impact: [
        "74% adoption in first 14 days.",
        "82% task completion rate.",
        "67% reported feeling more confident."
      ]
    },
    {
      id: "order-tracker-redesign",
      title: "Order Tracker Redesign",
      tagline: "Flexible Logistics Platform",
      problem: "Skip's tracking page was a static status page that couldn't support evolving logistics and monetization needs.",
      solution: "A new bottom-sheet architecture that transformed the page into an extensible platform.",
      decisions: [
        "Bottom-Sheet Architecture: Created a flexible interaction model for diverse content.",
        "Platform Thinking: Designed for multi-partner delivery and PIN verification.",
        "Monetization surfaces: Created space for post-purchase upsell during transit."
      ],
      impact: [
        "Extensible: Repositioned tracking as a platform surface.",
        "Flexible: Supports evolving logistics requirements.",
        "Strategic: Unlocked new monetization opportunities."
      ]
    },
    {
      id: "forella",
      title: "Forella AI",
      tagline: "Proactive AI Personal Assistant",
      problem: "Traditional calendars are passive tools that create planning fatigue and require manual entry.",
      solution: "Proactive assistant managing life through natural conversation and voice.",
      decisions: [
        "Cognitive Load Reduction: Shifted focus from schedule management to life coordination.",
        "Natural Language Parsing: Parses complex intentions into structured calendar events.",
        "Trust Through Visibility: Explains 'Why' for every AI recommendation."
      ],
      impact: [
        "Reduced manual entry by 40%.",
        "Shifted user behavior to proactive coordination.",
        "Established trust through transparent reasoning."
      ]
    }
  ],
  skills: {
    design: ["UX Strategy", "Conversational UX", "Design Systems", "Interaction Design", "User Research", "Information Architecture"],
    engineering: ["React", "JavaScript", "Design Tokens", "Frontend Development", "AI Prompting", "System Architecture"],
    tools: ["Cursor", "Claude Code", "Figma", "OpenAI API", "React Native"]
  },
  process: {
    discovery: "I start by identifying the emotional friction point—like the 3 AM exhaustion window for parents—rather than just the technical requirement.",
    strategy: "I design trust as a core product surface. I believe clarity and control matter more than pure automation.",
    execution: "I bridge the gap between design and code. I don't just stop at mockups; I work in the code to ensure implementation matches the vision.",
    validation: "I test mental models and expectations. If a user expects to find a feature in 'Rewards', that's where it belongs, regardless of the system logic."
  }
};

module.exports = dataContext;
