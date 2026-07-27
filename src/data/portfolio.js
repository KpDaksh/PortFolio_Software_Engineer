// ============================================================
// PORTFOLIO DATA — single source of truth.
// One unified Software Engineer profile (full-stack + AI).
// ============================================================

export const profile = {
  name: "Kapil",
  firstName: "Kapil",
  title: "Software Engineer",
  tagline:
    "I build scalable full-stack web applications and bring intelligent, AI-powered features to life — from real-time systems to LLM-driven products.",
  summary:
    "Software Engineer with 2.7+ years of experience building production web applications across the MERN stack, along with intelligent features powered by LLMs and modern AI tooling. I architect real-time systems with Kafka, Redpanda, and Socket.io, publish secure payment SDKs on npm, build visual workflow designers, and develop AI-assisted features using RAG, LangChain, and LangGraph. Currently completing an M.Tech thesis on Multimodal Sentiment Analysis using Deep Learning at Vaish College of Engineering.",
  location: "Gurugram, Haryana, India",
  email: "Kpdaksh2000@gmail.com",
  phone: "+91 8607266983",
  availability: "Open to Software Engineering opportunities",
  socials: {
    linkedin: "https://linkedin.com/in/mrdaksh786",
    github: "https://github.com/kapil-daksh", // TODO: replace with your actual GitHub URL
    portfolio: "",
  },
  resumeUrl: "/resume.pdf", // drop your PDF into /public
};

export const stats = [
  { value: "2.7+", label: "Years of Experience" },
  { value: "2+", label: "SDKs on npm" },
  { value: "95%", label: "Invalid Requests Cut" },
  { value: "1", label: "M.Tech Thesis (DL)" },
];

// ---------- Skills ----------
export const skillGroups = [
  {
    title: "Frontend",
    accent: "cyan",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "React Native",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Redux & Redux Thunk",
    ],
  },
  {
    title: "Backend",
    accent: "emerald",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "RESTful API Design",
      "Prisma ORM",
      "JWT & Signature Auth",
      "WebSockets",
    ],
  },
  {
    title: "Databases & Messaging",
    accent: "amber",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Kafka",
      "Redpanda",
      "Socket.io",
      "Azure Blob Storage",
    ],
  },
  {
    title: "AI & Machine Learning",
    accent: "violet",
    skills: [
      "LLM Integration (OpenAI, Claude, Gemini)",
      "Prompt Engineering",
      "RAG Pipelines",
      "LangChain & LangGraph",
      "AI Agents",
      "Vector Search (Qdrant)",
      "Deep Learning Foundations",
    ],
  },
  {
    title: "Tools & Practices",
    accent: "rose",
    skills: [
      "Docker",
      "Git & GitHub",
      "CI/CD",
      "npm Package Publishing",
      "Agile & Code Reviews",
      "Performance Optimization",
    ],
  },
];

// ---------- Experience (shared across both resumes) ----------
export const experience = [
  {
    company: "Easyrewardz Software Services",
    role: "Software Engineer",
    period: "Feb 2025 – Present",
    location: "Gurugram, Haryana, India",
    current: true,
    highlights: [
      "Architected and delivered a Web Push & Pop Notification system end-to-end — scalable Node.js modules, webhook handlers, and Socket.io for real-time bi-directional communication.",
      "Secured RESTful APIs with signature-based authentication and validation, reducing invalid API requests by 95%; integrated MySQL and MongoDB for persistent storage.",
      "Configured Kafka & Redpanda for high-throughput, fault-tolerant message queuing across notification pipelines.",
      "Published StorePay SDKs (Vanilla JS & React) on npm with an end-to-end encrypted, PCI-compliant payment flow inside an embedded iFrame.",
      "Led full-stack development of ZenceBotBuilder, a visual bot-flow designer with Express APIs, Prisma ORM on PostgreSQL, Redis caching, and Azure Blob Storage.",
      "Built CLIX Journey Designer, a node-based workflow builder using @xyflow/react with dynamic JSON-driven nodes, validation, and connection logic.",
    ],
    tags: ["React", "Node.js", "Kafka", "Redpanda", "Socket.io", "Prisma", "npm SDKs"],
  },
  {
    company: "Tata Consultancy Services",
    role: "Graduate Trainee → Programmer",
    period: "Nov 2023 – Feb 2025",
    location: "Trivandrum, Kerala → Gurugram, Haryana, India",
    current: false,
    highlights: [
      "Completed structured training across coding, networking, and systems fundamentals before transitioning into a Programmer role delivering client-facing features.",
      "Delivered solutions across diverse client projects by translating business requirements into reliable, scalable code and collaborating with engineering, QA, and project stakeholders.",
      "Replaced manual testing of VCR conference room systems with an automated, AI-assisted scripting process — significantly reducing testing time and operational burden while improving service reliability.",
      "Leveraged AI-assisted tools and intelligent automation to boost productivity, maintain higher code quality, and accelerate delivery cycles.",
    ],
    tags: ["AI-Assisted Automation", "Client Delivery", "Testing Automation"],
  },
];

// ---------- Achievements ----------
export const achievements = [
  {
    title: "Group Representative — TCS Graduate Trainee Program",
    organization: "Tata Consultancy Services, Trivandrum",
    period: "Nov 2023 – Feb 2024",
    description:
      "Selected as one of two Group Representatives for a training batch of 70 trainees; served as the primary point of contact for technical and non-technical queries, guiding peers through onboarding, training modules, and assessments.",
  },
];

// ---------- Projects ----------
export const projects = [
  {
    title: "ZenceBotBuilder — Bot Flow Designer",
    status: "Production",
    category: "Web Apps",
    description:
      "Full-stack visual bot-flow designer scaffolded from scratch. JSON schemas represent live bot flows, an interactive designer UI, and a backend built with Express, Prisma ORM on PostgreSQL, Redis caching, RBAC, and Azure Blob Storage.",
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Azure Blob"],
    featured: true,
    links: { github: "", live: "" },
  },
  {
    title: "StorePay SDK — Secure Payment SDKs",
    status: "Shipped to npm",
    category: "Web Apps",
    description:
      "Secure payment SDKs for Vanilla JavaScript and React, published on npm and adopted across e-commerce integrations. End-to-end encrypted checkout flow inside an embedded iFrame with real-time transaction status updates and PCI-compliant gateway communication.",
    stack: ["React", "Vanilla JS", "npm", "Encryption", "iFrame"],
    featured: true,
    links: { github: "", live: "" },
  },
  {
    title: "Web Push & Pop Notification System",
    status: "Production",
    category: "Web Apps",
    description:
      "High-throughput notification platform with signature-secured REST APIs, Kafka/Redpanda message queues, webhook-driven engagement tracking, and Socket.io real-time delivery.",
    stack: ["Node.js", "Kafka", "Redpanda", "Socket.io", "MySQL", "MongoDB"],
    featured: true,
    links: { github: "", live: "" },
  },
  {
    title: "Second Brain — Personal AI Assistant",
    status: "In Progress",
    category: "AI & ML",
    description:
      "A full-stack personal AI assistant with hybrid retrieval (Qdrant dense vectors + BM25 sparse search), a LangGraph tool-using agent, MongoDB-backed checkpointing for persistent conversation threads, and a FastAPI backend streaming responses to a Next.js chat interface.",
    stack: ["Next.js", "FastAPI", "LangGraph", "LangChain", "RAG", "Qdrant", "MongoDB"],
    featured: true,
    links: { github: "", live: "" },
  },
  {
    title: "Multi-Agent Research Assistant",
    status: "In Progress",
    category: "AI & ML",
    description:
      "A checkpointed multi-agent research pipeline (Planner, Researcher, Writer, Critic) orchestrated with LangGraph. Uses MongoDB checkpointing to resume long-running tasks, Qdrant for past research notes, and live web search to produce structured reports.",
    stack: ["LangGraph", "LangChain", "Qdrant", "MongoDB"],
    featured: false,
    links: { github: "", live: "" },
  },
  {
    title: "M.Tech Thesis — Multimodal Sentiment Analysis",
    status: "Research",
    category: "AI & ML",
    description:
      "Designing and evaluating a fusion network for multimodal sentiment classification, benchmarked on the CMU-MOSI and CMU-MOSEI datasets.",
    stack: ["Deep Learning", "Multimodal Fusion", "Python"],
    featured: false,
    links: { github: "", live: "" },
  },
  {
    title: "Atlantis — Data Visualization Platform",
    status: "Production",
    category: "Web Apps",
    description:
      "A frontend data visualization platform for representing large, complex datasets in rich visual form, using Redux and Redux Thunk for state and async data flow management.",
    stack: ["React", "TypeScript", "Redux", "Redux Thunk"],
    featured: false,
    links: { github: "", live: "" },
  },
  {
    title: "Burger King Chatbot Module",
    status: "Production",
    category: "Web Apps",
    description:
      "Owned end-to-end development of a complete React Native chatbot module for a Burger King mobile experience, from UI implementation through integration within the existing app architecture.",
    stack: ["React Native"],
    featured: false,
    links: { github: "", live: "" },
  },
];

// ---------- Education ----------
export const education = [
  {
    degree: "Master of Technology (M.Tech) — Computer Science",
    school: "Vaish College of Engineering, Rohtak (MDU Rohtak)",
    period: "Aug 2024 – Jul 2026",
    note: "Thesis: Multimodal Sentiment Analysis using Deep Learning (SLMFN)",
  },
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Chandigarh University",
    period: "Aug 2022 – Aug 2024",
    note: "",
  },
  {
    degree: "Bachelor in Computer Applications (BCA)",
    school: "Vaish College of Education, Rohtak",
    period: "Aug 2019 – Aug 2022",
    note: "",
  },
];

// ---------- What I do (services / focus areas) ----------
export const focusAreas = [
  {
    icon: "Layers",
    title: "Full-Stack Development",
    description:
      "End-to-end MERN applications with clean API contracts, robust validation, and scalable architecture — from requirements to deployment.",
  },
  {
    icon: "Zap",
    title: "Real-Time Systems",
    description:
      "Event-driven architectures with Kafka, Redpanda, and Socket.io — high-throughput messaging, webhooks, and live bi-directional experiences.",
  },
  {
    icon: "Workflow",
    title: "Visual Builders & SDKs",
    description:
      "Complex node-based workflow designers and published npm SDKs — payment flows, journey builders, and bot designers used in production.",
  },
  {
    icon: "BrainCircuit",
    title: "AI-Powered Features",
    description:
      "LLM integration, RAG pipelines, and tool-using agents with LangChain & LangGraph — turning AI capabilities into practical product features.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
