export const profile = {
  name: "Samsul Jahith S",
  role: "Generative AI / AI Engineer",
  location: "Singapore",
  email: "samsuljahith@gmail.com",
  // Opens Gmail's compose window in the browser (works without a desktop mail app)
  mailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=samsuljahith@gmail.com",
  phone: "+65 8911 4350",
  photo: "/profile.png",
  links: {
    portfolio: "https://samsul-jahith-portfolio.onrender.com",
    linkedin: "https://linkedin.com/in/samsul-jahith",
    github: "https://github.com/samsuljahith",
  },
  tagline:
    "Building production-minded LLM applications — RAG pipelines, multi-agent systems, and evaluation & guardrails for reliable, grounded outputs.",
  summary:
    "Generative AI / AI Engineer and MSc Data Science student (University of Hertfordshire, 2026) building production-minded LLM applications — RAG pipelines, multi-agent / agentic systems, multi-provider LLM integrations, and evaluation & guardrails for reliable, grounded outputs. Open-source builder, hackathon builder, and research collaborator in the Singapore AI community.",
  status: [
    "Open to AI/ML roles in Singapore",
    "MSc Data Science @ UoH",
    "AWS AI Practitioner",
  ],
};

export const stats = [
  { value: "37+", label: "GitHub repositories" },
  { value: "300+", label: "Tests on RAGForge" },
  { value: "45K+", label: "LLM decisions evaluated" },
  { value: "3", label: "Hackathons & research" },
];

export type SkillGroup = {
  title: string;
  icon: "sparkles" | "layers" | "shield";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI & LLMs",
    icon: "sparkles",
    skills: [
      "OpenAI / GPT",
      "Anthropic Claude",
      "Google Gemini",
      "Grok",
      "RAG (corrective / hybrid / agentic)",
      "Prompt Engineering",
      "Multi-Agent & Agentic Systems",
      "Function Calling & Tool Use",
      "Structured Outputs",
      "Embeddings",
      "Semantic & Hybrid Search",
      "Reranking",
      "LLM Evaluation",
      "Guardrails & Hallucination Mitigation",
    ],
  },
  {
    title: "Frameworks & Engineering",
    icon: "layers",
    skills: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Hugging Face",
      "FastAPI",
      "Docker",
      "FAISS",
      "ChromaDB",
      "Qdrant",
      "Pinecone",
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Bash",
      "TypeScript / Next.js",
    ],
  },
  {
    title: "Responsible AI & Analytics",
    icon: "shield",
    skills: [
      "AI Safety",
      "Bias Detection & Fairness",
      "Explainability (SHAP / LIME)",
      "Matplotlib",
      "Plotly",
      "Power BI",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  highlights?: string[];
  tags: string[];
  year: string;
  badge?: "Open Source" | "Hackathon" | "Research";
  github?: string;
  site?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "RAGForge — Open-Source RAG & Multi-Agent Platform",
    blurb:
      "Modular open-source RAG toolkit (300+ tests): parsing, structure-aware chunking, hybrid retrieval (dense + BM25 + reranking), grounded generation with citations, and evaluation — usable as a Python library, FastAPI service, and CLI.",
    highlights: [
      "Built an embedding-model migration decision gate (recall@k, precision@k, MRR) that auto-blocks regressions.",
      "Benchmarked on BEIR/SciFact (5,183 docs, 300 queries) — caught a 16-point recall drop and rejected the migration.",
    ],
    tags: ["RAG", "Hybrid Retrieval", "BM25", "FastAPI", "Evaluation", "Python"],
    year: "2026",
    badge: "Open Source",
    github: "https://github.com/samsuljahith/RagForge",
    site: "https://rag-forge-website.vercel.app",
  },
  {
    title: "Didn't Read — Legal-Document Summarizer Extension",
    blurb:
      "Open-source Chromium extension (Manifest V3, vanilla JS) that summarizes Terms / Privacy / Cookie policies via a provider-agnostic LLM router (OpenAI, Claude, Gemini, Grok) plus on-device AI for no-API-key local inference.",
    highlights: [
      "Grounding guardrail fuzzy-matches each model claim to source text and drops unverified output to curb hallucinations.",
      "Explainable 0–100 risk score with clause-level citations; validate → normalize → ground JSON pipeline (19 tests).",
    ],
    tags: ["Browser Extension", "LLM Router", "On-Device AI", "Guardrails", "JavaScript"],
    year: "2026",
    badge: "Open Source",
    github: "https://github.com/samsuljahith/Didn-t-Read",
  },
  {
    title: "Existential Crisis Robot — SuperAI NEXT Hackathon",
    blurb:
      "A 3-agent web system that detects rogue AI intent via closed-loop feedback: a covert saboteur agent, a suspicion-scoring agent, and an adaptive-strategy agent.",
    highlights: [
      "Owned saboteur logic and TTS integration (Kokoro-ONNX) to an Arduino robot over WebSocket.",
      "Next.js 15 / TypeScript on Vercel, Google Gemini 2.0 Flash.",
    ],
    tags: ["Multi-Agent", "Next.js", "Gemini", "WebSocket", "TTS"],
    year: "Jun 2026",
    badge: "Hackathon",
    github: "https://github.com/nudgytdeveloper/existential-crisis-robot-public",
  },
  {
    title: "Ka-Nova Research — JASSS Journal Co-Author",
    blurb:
      "LLM elite-agent evaluation in a Generative Agent-Based Model (10,000 Mesa agents, 3 LangChain LLM agents) simulating 50 years of governance. Third author under Dr. Md Saifullah, targeting JASSS (Aug 2026).",
    highlights: [
      "Output variance analysis (30+ seeds), governance-alignment scoring, and prompt-sensitivity testing.",
      "Evaluated across 45,000+ LLM decisions.",
    ],
    tags: ["LLM Evaluation", "Agent-Based Modeling", "LangChain", "Research", "Mesa"],
    year: "2026",
    badge: "Research",
    github: "https://github.com/KaungOrYours/project-ka-nova",
  },
  {
    title: "NeamClaw — Conversational Support Bot",
    blurb:
      "Conversational support bot using hybrid RAG (BM25 + vector search) and NLP query understanding for context-aware retrieval, with SQLite retrieval, real-time API endpoints, human-escalation pathways, and session isolation to prevent data leakage.",
    tags: ["Hybrid RAG", "BM25", "SQLite", "FastAPI", "NLP"],
    year: "2026",
    github: "https://github.com/samsuljahith/neamclaw-support-bot",
  },
  {
    title: "NeamForge — Agentic Static Site Generator",
    blurb:
      "Agentic Python pipeline (built with the Neam Forge agent) with a build-verify loop and validation ensuring output correctness before publishing. Git-based checkpoints provide reproducibility and auditability; runs fully locally for data control and governance compliance.",
    tags: ["Agentic AI", "Python", "Ollama", "Git Checkpoints", "Local LLM"],
    year: "2026",
    github: "https://github.com/samsuljahith/neamforge-site-generator",
  },
];

export const secondaryProjects: Project[] = [
  {
    title: "BriefMe — AI Meeting Prep Agent",
    blurb:
      "AI-powered company research briefs: snapshot, recent news, talking points, and risk flags for any company in seconds. Built with Next.js 15, Exa live web research, and Gemini.",
    tags: ["Next.js", "Exa API", "Gemini"],
    year: "2026",
    badge: "Hackathon",
    github: "https://github.com/samsuljahith/briefme",
  },
  {
    title: "HawkerHero — AI Marketing Studio",
    blurb:
      "A 6-agent AI pipeline that turns one plain-language sentence into a full marketing kit: multilingual captions, a promo poster, and a vertical promo video. Built for the Agnes AI Hackathon @ SMU.",
    tags: ["Multi-Agent", "TypeScript", "GenAI"],
    year: "2026",
    badge: "Hackathon",
    github: "https://github.com/samsuljahith/HawkerHero",
  },
  {
    title: "Neam Vector Database",
    blurb:
      "A lightweight, explainable vector database with hybrid search — store documents, search by meaning, and understand why results match via transparent scoring.",
    tags: ["Vector DB", "Hybrid Search", "Python"],
    year: "2026",
    github: "https://github.com/samsuljahith/Neam-Database",
  },
  {
    title: "doc-assistant — Corrective RAG",
    blurb:
      "A local-first RAG pipeline that ingests PDFs/text into a persistent vector DB and answers with inline citations. Built on LangGraph's corrective RAG — chunks are graded for relevance before generation to reduce hallucination.",
    tags: ["LangGraph", "Corrective RAG", "Citations"],
    year: "2026",
    github: "https://github.com/samsuljahith/doc-assistant",
  },
  {
    title: "Research Agent — MCP + RAG",
    blurb:
      "A research assistant combining a local Qdrant knowledge base with live web-search fallback over a client–server MCP architecture; the client runs a LangGraph ReAct agent via Groq.",
    tags: ["MCP", "RAG", "LangGraph", "Qdrant"],
    year: "2026",
    github: "https://github.com/samsuljahith/Research_agent",
  },
  {
    title: "Nutrition Agent — RAG Diet Assistant",
    blurb:
      "A conversational nutrition assistant with persistent memory across sessions, using a USDA nutrition dataset, Pinecone for semantic history retrieval, and Groq (LLaMA 3.1) for responses.",
    tags: ["RAG", "Pinecone", "Groq", "Memory"],
    year: "2026",
    github: "https://github.com/samsuljahith/Nutrition_agent",
  },
  {
    title: "Data Cleaning Agent",
    blurb:
      "An interactive CLI agent that diagnoses and cleans messy datasets from natural-language commands, wrapping pandas operations as LangChain tools backed by Groq (DeepSeek R1).",
    tags: ["LangChain", "Tool Use", "Pandas"],
    year: "2026",
    github: "https://github.com/samsuljahith/Data_Cleaning_agent",
  },
  {
    title: "Trader Agent — CrewAI",
    blurb:
      "A conversational crypto trading agent built with CrewAI and LlamaIndex that retrieves context from historical trade data via RAG and answers strategy questions through an interactive CLI.",
    tags: ["CrewAI", "LlamaIndex", "RAG"],
    year: "2026",
    github: "https://github.com/samsuljahith/Trader_agent",
  },
  {
    title: "SQL Command Agent",
    blurb:
      "An AI-powered SQL learning assistant that pairs RAG with an LLM to answer natural-language questions about SQL with contextual, example-rich responses across DDL, DML, DCL and TCL.",
    tags: ["RAG", "SQL", "LLM"],
    year: "2025",
    github: "https://github.com/samsuljahith/Sql_agent",
  },
  {
    title: "TESTGPT — AI Testing Orchestrator",
    blurb:
      "A multi-agent Python orchestrator that generates test cases from specifications and coordinates AI testing workflows with structured evaluation for assurance and compliance.",
    tags: ["Multi-Agent", "QA", "Python"],
    year: "2025",
    github: "https://github.com/samsuljahith/TESTGPT_tester",
  },
  {
    title: "Hashnode Agent — LangGraph + MCP",
    blurb:
      "An interactive CLI agent for managing a Hashnode blog via natural language using a LangGraph ReAct architecture connected to a Hashnode MCP server, with Groq (LLaMA 3.1).",
    tags: ["LangGraph", "MCP", "Groq"],
    year: "2025",
    github: "https://github.com/samsuljahith/Hashnode_agent",
  },
  {
    title: "Scraping Agent — LangChain",
    blurb:
      "A minimal LangChain agent that scrapes a page with BeautifulSoup and returns an LLM-generated summary, backed by Groq (DeepSeek R1).",
    tags: ["LangChain", "BeautifulSoup", "Groq"],
    year: "2025",
    github: "https://github.com/samsuljahith/Scrapping_Agent",
  },
  {
    title: "Medical Insurance Cost Analysis",
    blurb:
      "Data science coursework analysing medical insurance costs — exploratory analysis, feature relationships, and modelling in Python notebooks.",
    tags: ["Data Science", "Pandas", "Jupyter"],
    year: "2026",
    github: "https://github.com/samsuljahith/medical-insurance-analysis",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Analyst Intern → Data Analyst",
    company: "Fizon Tech (Remote)",
    period: "Jun 2023 — Jun 2025",
    bullets: [
      "Automated web data extraction (BeautifulSoup + Selenium) over 10,000+ records, improving data pipeline efficiency.",
      "Data cleaning, transformation, validation, and feature engineering; built interactive Power BI dashboards for data-driven decisions.",
    ],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    school: "University of Hertfordshire (via PSB Academy, Singapore)",
    degree: "MSc Data Science",
    period: "2026 — 2027",
  },
  {
    school: "Panimalar Institute of Technology",
    degree: "B.Tech, Information Technology",
    period: "2019 — 2023",
    detail: "CGPA: 7.52 / 10",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
