import type { Dictionary } from "./pt";

export const en: Dictionary = {
  meta: {
    titleDefault: "tamagolabs | Software Engineering, APIs, Mobile & SaaS",
    titleTemplate: "%s | tamagolabs",
    description:
      "Software engineering studio specializing in high-scalability APIs, React Native mobile apps, ultra-fast landing pages, and end-to-end SaaS platforms. Led by senior software engineer Bruno Fukumori.",
    keywords: [
      "software engineering",
      "solo senior full stack developer",
      "react native development",
      "expo mobile apps",
      "api development",
      "saas development",
      "high converting landing pages",
      "senior engineer",
      "next.js 16",
      "bun runtime",
      "tamagolabs",
    ],
    ogTitle: "tamagolabs | High-Performance Software Engineering",
    ogDescription:
      "Software engineering studio specializing in high-scalability APIs, React Native mobile apps, ultra-fast landing pages, and end-to-end SaaS platforms. Led by senior software engineer Bruno Fukumori.",
    ogImageAlt: "tamagolabs - Software Development Studio",
    twitterTitle: "tamagolabs | Software Engineering",
  },
  nav: {
    brandAria: "tamagolabs - Go to homepage",
    navigationAria: "Main navigation",
    menuOpenAria: "Open menu",
    menuCloseAria: "Close menu",
    available: "Available",
    availableMobile: "Available for new projects",
    startProject: "Start a Project",
    startProjectMobile: "Start Project with Senior Engineer",
    links: [
      { name: "Services", href: "#servicos" },
      { name: "Projects & Apps", href: "#projetos" },
      { name: "Why Us", href: "#diferencial" },
      { name: "Stack", href: "#stack" },
      { name: "Founder", href: "#fundador" },
      { name: "Contact", href: "#contato" },
    ],
  },
  hero: {
    badge: "SOFTWARE STUDIO • SENIOR FULL STACK ENGINEERING",
    titlePrefix: "High-performance",
    titleHighlight: "software engineering",
    titleSuffix: "without bureaucracy.",
    description: {
      p1: "Accelerated, refined engineering for",
      api: "scalable APIs",
      mobile: "React Native mobile apps",
      landing: "perfect-score Web Vitals landing pages",
      saas: "complete SaaS products",
      p2: "You talk and negotiate directly with the engineer writing the code.",
    },
    ctaPrimary: "Discuss a Project",
    ctaSecondary: "Explore Projects & Apps",
    ctaPortfolio: "Personal Portfolio",
    pillars: [
      {
        title: "100% Web Vitals",
        desc: "Ultra-fast pages < 1.0s",
      },
      {
        title: "React Native & Expo",
        desc: "iOS & Android in a unified codebase",
      },
      {
        title: "APIs & Microservices",
        desc: "Sub-millisecond latency with Bun & Node",
      },
      {
        title: "Senior Engineer",
        desc: "1-on-1 communication & agile delivery",
      },
    ],
  },
  services: {
    badge: "WHAT WE DO",
    title: "Specialties crafted with technical mastery",
    subtitle:
      "Surgical focus on four key domains where an experienced solo developer outperforms entire teams in agility, cost, and delivery quality.",
    includedLabel: "What's included:",
    quoteLabel: "Quote",
    items: [
      {
        id: "apis",
        title: "High-Performance APIs & Backend",
        subtitle: "Robust, secure architectures with sub-millisecond latency",
        description:
          "Development of microservices, RESTful and GraphQL APIs engineered for heavy workloads, featuring intelligent caching, enterprise-grade security, and interactive Swagger/OpenAPI documentation.",
        badge: "Scalability & Resilience",
        deliverables: [
          "Scalable cloud microservices and serverless architectures (AWS / GCP)",
          "Strongly-typed RESTful and GraphQL APIs",
          "Asynchronous event processing with queues (RabbitMQ & Kafka)",
          "Optimized relational & in-memory data modeling (PostgreSQL / Redis)",
          "Container orchestration with Docker and Kubernetes",
          "Rigorous JWT, OAuth2, and RBAC authentication",
        ],
        techs: [
          "NestJS",
          "Elysia",
          "GraphQL",
          "RabbitMQ",
          "Kafka",
          "AWS",
          "GCP",
          "Kubernetes",
          "PostgreSQL",
          "Redis",
        ],
        icon: "api" as const,
      },
      {
        id: "mobile",
        title: "Mobile Apps with React Native & Expo",
        subtitle: "100% native feel for iOS and Android in a single codebase",
        description:
          "Fluid mobile applications with offline-first support, 60/120fps hardware-accelerated animations, native device integrations, and end-to-end publishing on the Apple App Store and Google Play Store.",
        badge: "iOS & Android",
        deliverables: [
          "Agile file-based routing with Expo Router",
          "Butter-smooth animations with Reanimated & Gestures",
          "Push notifications, geolocation, and biometric authentication",
          "Automated EAS Build pipelines and store submissions",
        ],
        techs: ["React Native", "Expo", "TypeScript", "Zustand", "EAS Build"],
        icon: "mobile" as const,
        highlight: true,
      },
      {
        id: "saas",
        title: "End-to-End SaaS Products",
        subtitle:
          "From database and billing to a polished user interface ready to scale",
        description:
          "Rapid delivery of MVPs and full-scale SaaS platforms: multi-tenant architecture, automated subscription billing with Stripe, interactive analytical dashboards, webhooks, and modern administration consoles.",
        badge: "Time to Market",
        deliverables: [
          "Recurring payment processing and seamless checkouts",
          "Interactive data visualization dashboards and analytics",
          "Scalable multi-tenant infrastructure",
          "Comprehensive administrative management console",
        ],
        techs: [
          "Next.js",
          "React",
          "Vite",
          "PostgreSQL",
          "Stripe",
          "Tailwind CSS",
        ],
        icon: "saas" as const,
        highlight: true,
      },
      {
        id: "landing",
        title: "Conversion Landing Pages & Websites",
        subtitle:
          "Minimalist design, 100% Google Web Vitals, and sales-focused",
        description:
          "Instant loading pages (< 1.2s), technical SEO tuned for top Google rankings, visually captivating copy, and lead generation forms integrated directly into your sales pipeline.",
        badge: "100% Web Vitals & SEO",
        deliverables: [
          "Perfect 100/100 Lighthouse performance score",
          "Structured OpenGraph and Schema.org metadata",
          "High-converting micro-interactions that engage visitors",
          "Static pre-rendering with global CDN edge caching",
        ],
        techs: ["Next.js", "Tailwind CSS", "Motion", "Vercel / Cloudflare"],
        icon: "landing" as const,
      },
    ],
  },
  projects: {
    badge: "PRODUCTS & SUCCESS STORIES",
    title: "Real-world software in production",
    subtitle:
      "Explore solutions crafted by tamagolabs. Focused on clean code, ultra-performant local-first architectures, and applied artificial intelligence.",
    founderPortfolioLink: "Engineer's Personal Portfolio",
    flagship: {
      id: "gymup",
      title: "GymUp",
      badge: "OFFICIAL PRODUCT • IN PRODUCTION",
      categoryLabel: "Mobile App • React Native & AI",
      tagline:
        "Gamified fitness mobile application powered by generative AI (Google Gemini)",
      description:
        "A comprehensive, high-performance mobile app architected local-first with SQLite and React Native via Expo. Features intelligent custom workout generation using Google Gemini 3.7 Flash, an algorithmic Smart Overload progressive overload engine, full gamification with XP and achievement badges, PDF progress reports, and in-app subscriptions powered by RevenueCat.",
      iconUrl: "/images/gymup-icon.png",
      metrics: [
        { label: "Performance", value: "60 FPS Native" },
        { label: "Architecture", value: "Local-First (SQLite)" },
        { label: "Intelligence", value: "Google Gemini 3.7" },
        { label: "Monetization", value: "RevenueCat IAP" },
      ],
      highlightsTitle: "Engineering Highlights & Features",
      highlights: [
        "Intelligent workout generation and muscle split design powered by Google Gemini 3.7 Flash",
        "100% offline-first architecture with secure Expo SQLite persistence and memory caching",
        "Gamification system: Level progression, discipline streaks, and unlockable achievements",
        "Smart Overload: Progression algorithm analyzing previous workouts for safe weight increases",
        "PDF Reports: Visual export of training analytics for nutritionists and personal trainers",
        "Freemium Monetization: In-app subscriptions integrated with RevenueCat for App Store and Google Play",
      ],
      technologies: [
        "React Native",
        "Expo 57",
        "React 19",
        "TypeScript",
        "Google Gemini AI",
        "Expo SQLite",
        "RevenueCat",
        "Biome",
        "Firebase",
      ],
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.tamagolabs.gymup",
      playStoreLabel: "View on Google Play Store",
      customAppCta: "Request a Custom App",
      proprietarySoftware: "Proprietary Software",
      architectureLabel: "Architecture: Local-First",
      offlineReadyLabel: "100% Offline Ready",
    },
    customBanner: {
      badge: "TAILORED DEVELOPMENT FOR YOUR BUSINESS",
      title: "Need a Mobile App, SaaS, API, or Landing Page?",
      description:
        "GymUp showcases the code quality, speed, and craftsmanship of tamagolabs. To review the complete portfolio of software systems built by Bruno Fukumori over the past 10+ years, visit his individual portfolio.",
      quoteBtn: "Request a Quote",
      portfolioBtn: "View Dev Portfolio",
    },
  },
  soloAdvantage: {
    badge: "THE SOLO FOUNDER ADVANTAGE",
    title: "Why Hire a Senior Solo Engineer Over an Agency?",
    subtitle:
      "Cut through traditional agency bureaucracy. Collaborate directly with an engineer who possesses a holistic product vision and the technical rigor to deliver.",
    agencyLabel: "Traditional Agencies:",
    tamagoLabel: "With tamagolabs:",
    learnMore: "Learn more",
    items: [
      {
        id: "communication",
        title: "100% Direct Communication",
        agencyWay:
          "Endless meetings with account managers who relay messages to POs, who then pass them to junior devs.",
        tamagoWay:
          "You talk directly with the engineer who architects and writes every line of code. Zero noise and zero miscommunication.",
        impact: "Decisions made in minutes, not weeks.",
      },
      {
        id: "speed",
        title: "Startup-Level Execution Velocity",
        agencyWay:
          "Bureaucratic red tape, sluggish approvals, and months just to get an MVP deployed.",
        tamagoWay:
          "Continuous delivery in rapid sprints. From initial commit to production in record time with Bun, Next.js, and Expo.",
        impact: "Up to 60% faster time to first launch.",
      },
      {
        id: "quality",
        title: "Senior Architecture & Craftsmanship",
        agencyWay:
          "Projects handed off to inexperienced interns or revolving outsource contractors.",
        tamagoWay:
          "Consistent senior quality from start to finish. Clean, strongly-typed, modular code ready for team expansion.",
        impact: "Zero hidden technical debt.",
      },
      {
        id: "cost",
        title: "Real Cost Efficiency",
        agencyWay:
          "You pay for fancy agency offices, executives, sales commissions, and management overhead.",
        tamagoWay:
          "You invest purely in high-output, top-tier software engineering hours.",
        impact: "Significantly higher return on investment (ROI).",
      },
    ],
  },
  techStack: {
    badge: "TECHNOLOGIES & TOOLING",
    title: "Full Stack, Cloud & Modern Engineering Ecosystem",
    subtitle:
      "Curated technologies chosen for rapid development velocity, peak runtime performance, and effortless long-term maintainability.",
    terminalCommand: "bun run --filter @tamagolabs/studio build:production",
    terminalPills: ["100% Type-Safe", "Zero-runtime bloat", "Edge Ready"],
  },
  founder: {
    badge: "WHO BUILDS YOUR PROJECT",
    roleBadge: "SOFTWARE ENGINEER",
    name: "Bruno Fukumori",
    role: "Senior Full Stack Software Engineer & Founder",
    bio: "Over a decade of experience translating complex requirements into lightweight, scalable architectures and refined user experiences. Direct engineering from databases and APIs to store-ready mobile apps.",
    statement:
      "At tamagolabs, you don't deal with account intermediaries or rotating agency staff. I personally guide the technical strategy and execute end-to-end with radical transparency.",
    ctaPortfolio: "Full Personal Portfolio",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    brandCard: {
      badge: "THE BRAND CONCEPT",
      title: 'Why "tamagolabs"?',
      description1: "In Japanese,",
      tamagoWord: "Tamago (卵)",
      description2: "means egg. To us, it represents the",
      incubationHighlight: "incubation of digital products",
      description3:
        ": we take your embryonic idea, structure every architectural layer with precision and care, until it hatches and emerges into the market as robust, scalable, high-converting software.",
      pills: ["Ideation & Incubation", "Solid Engineering", "Hatching & Scale"],
      altMascot: "tamagolabs mascot - Kitten inside high-tech egg",
    },
  },
  faq: {
    badge: "FREQUENTLY ASKED QUESTIONS",
    title: "Everything you need to know before we begin",
    subtitle:
      "Total transparency from day one. If your question isn't answered here, feel free to reach out via WhatsApp.",
    items: [
      {
        question: "Who owns the source code and intellectual property?",
        answer:
          "100% yours. Upon completion of each project milestone, all GitHub/GitLab repositories, documentation, and cloud infrastructure are fully transferred to your ownership. Zero agency lock-in.",
      },
      {
        question: "What is the typical timeframe to launch a project?",
        answer:
          "High-converting landing pages are typically delivered and launched within 5 to 10 business days. SaaS MVPs or React Native mobile apps generally take 3 to 6 weeks, depending on the complexity of integrations.",
      },
      {
        question: "How do contracts and billing work?",
        answer:
          "We offer fixed-scope engagements (with clearly defined milestones, down payment, and installment schedule) or dedicated sprint/monthly retainers for continuous development. Formal contract and invoices included.",
      },
      {
        question: "Do you handle publishing apps to Apple and Google?",
        answer:
          "Yes! We manage the entire build pipeline via Expo EAS, certificate generation, App Store Optimization (ASO) setup, and store submissions to both Apple App Store and Google Play Store.",
      },
      {
        question: "What does post-launch support look like?",
        answer:
          "All projects include a 30-day warranty for bug fixes at no additional cost. We also provide optional monthly maintenance and feature evolution plans for continuous platform growth.",
      },
    ],
  },
  contact: {
    badge: "LET'S TALK",
    title: "Ready to turn your idea into real software?",
    subtitle:
      "Fill out the form below to receive a technical breakdown and estimate, or reach out directly through your preferred channel today.",
    quickChannels: {
      title: "Quick Contact Channels",
      description:
        "Prefer an informal conversation without filling out forms? Feel free to pick whichever channel suits you best.",
      whatsappBtn: "Chat on WhatsApp",
      copyEmail: "Copy",
      copiedEmail: "Copied!",
      calendarBtn: "Schedule 20-min Call",
      responseTimeLabel: "Response time:",
      responseTimeValue: "< 2 hours",
      locationLabel: "Location:",
      locationValue: "São Paulo, Brazil • Global Delivery",
      contractModelLabel: "Engagement Model:",
      contractModelValue: "Fixed Scope or Retainer",
    },
    form: {
      nameLabel: "YOUR NAME / COMPANY *",
      namePlaceholder: "e.g., John Doe or Acme Corp",
      emailLabel: "YOUR BUSINESS EMAIL *",
      emailPlaceholder: "john@company.com",
      projectTypeLabel: "PROJECT TYPE",
      budgetLabel: "ESTIMATED BUDGET",
      messageLabel: "PROJECT DETAILS & DESIRED TIMELINE *",
      messagePlaceholder:
        "Briefly describe what you're looking to build, key features required, and your target deadline...",
      projectTypes: [
        "Mobile App (React Native)",
        "Complete SaaS Product",
        "Scalable APIs & Backend",
        "High-Converting Landing Page",
        "Full Stack Consulting",
      ],
      budgetRanges: [
        "$1,000 – $3,000 USD",
        "$3,000 – $6,000 USD",
        "$6,000 – $10,000+ USD",
        "Still evaluating / In planning",
      ],
      loadingBtn: "Sending message...",
      submitEmailBtn: "Send via Email",
      submitWhatsappBtn: "Send via WhatsApp",
      submitWhatsappTitle: "Send completed briefing directly to WhatsApp",
      securityFootnote:
        "Secure and direct delivery to the founder's inbox. Zero spam.",
      feedbackSuccess:
        "Message sent successfully! I will get back to you within 24 hours.",
      feedbackErrorDefault:
        "Error sending message. Please reach out via WhatsApp.",
      directWhatsappPrefix:
        "Hello Bruno! I came from the tamagolabs website and would like to talk about a software project.",
      directWhatsappWithName:
        "Hello Bruno! My name is {name}. I came from the tamagolabs website and would like to talk about a {projectType} project.",
      formWhatsappGreeting:
        "Hello Bruno! I came from the tamagolabs website and would like an estimate:",
    },
  },
  footer: {
    tagline:
      "High-performance software for those who can't afford to waste time",
    description:
      "Software engineering studio specialized in high-scalability APIs, React Native mobile apps, landing pages, and complete SaaS platforms.",
    developerCredit: "Engineered by Senior Solo Full Stack Dev",
    navHeader: "Navigation",
    linksHeader: "Links & Connect",
    portfolio: "Personal Portfolio",
    github: "Official GitHub",
    linkedin: "LinkedIn",
    rightsReserved: "All rights reserved.",
    builtWith: "Built with Next.js, Bun, Tailwind CSS & Motion",
  },
  jsonLd: {
    serviceDescription:
      "Tailored development of high-performance APIs, React Native mobile applications, 100/100 Google Web Vitals landing pages, and complete SaaS platforms.",
    serviceTypes: [
      "Software Development",
      "API Engineering",
      "React Native Mobile App Development",
      "SaaS Development",
      "High-Conversion Landing Pages",
    ],
  },
};
