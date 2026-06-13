// All portfolio content — kept verbatim from the source portfolio.
window.PORTFOLIO_DATA = {
  callsign: "SAMSUL JAHITH S",
  className: "AI ENGINEER",
  subclass: "MSc DATA SCIENCE",
  location: "SINGAPORE",
  level: 26,
  tagline: "Building Agentic AI Systems. Turning Data into Intelligence.",
  bio: "AI Engineer and MSc Data Science student (University of Hertfordshire, 2026) with hands-on experience building agentic AI systems, multi-agent pipelines, RAG architectures, and LLM applications. Hackathon builder, research collaborator, and active contributor to the Singapore AI community. AWS AI Practitioner certified.",

  status: ["Open to Opportunities", "Singapore Based", "AWS Certified"],

  dossier: [
    {
      icon: "graduation",
      title: "MSc Data Science",
      meta: "University of Hertfordshire · PSB Academy, Singapore · 2026 – 2027",
    },
    {
      icon: "graduation",
      title: "B.Tech in Information Technology",
      meta: "Panimalar Institute of Technology · CGPA: 7.52/10 · 2019 – 2023",
    },
    {
      icon: "briefcase",
      title: "Data Analyst · Fizon, Trichy (Remote)",
      meta: "2024 – 2025 · Automated web data extraction using BeautifulSoup + Selenium, 10K+ records. Built Power BI dashboards for data-driven decision-making.",
    },
    {
      icon: "code",
      title: "Data Analyst Intern · Fizon Tech (Remote)",
      meta: "2023 – 2024 · Automated web data collection workflows in Python. Delivered cleaned datasets supporting business intelligence.",
    },
  ],

  whoami: [
    "I'm an AI Engineer and MSc Data Science student with hands-on experience building agentic AI systems, multi-agent pipelines, and RAG architectures.",
    "Hackathon builder, research collaborator (JASSS journal co-author), and active contributor to the Singapore AI community. My work spans autonomous agent orchestration, LLM evaluation, and AI governance.",
    "AWS AI Practitioner certified. Currently pursuing my Master's in Data Science at University of Hertfordshire via PSB Academy, Singapore.",
  ],

  // Skills become "ability loadouts". rating = stat value 0-100 for the bar feel.
  skillCategories: [
    {
      label: "AI/ML & Frameworks",
      key: "AIML",
      rating: 95,
      accent: "violet",
      items: ["LLMs", "RAG (Corrective/Hybrid/Agentic)", "Multi-Agent Systems", "NLP", "Transformers", "Prompt Engineering", "LangChain", "LangGraph", "LlamaIndex", "FastAPI", "FAISS", "ChromaDB", "Qdrant", "Pinecone", "Hugging Face", "Docker"],
    },
    {
      label: "Programming & Data",
      key: "DATA",
      rating: 88,
      accent: "cyan",
      items: ["Python", "SQL", "Pandas", "NumPy", "Streamlit", "Bash", "TypeScript", "Next.js", "React", "Tailwind CSS", "Matplotlib", "Plotly", "Power BI"],
    },
    {
      label: "AI Governance",
      key: "GOV",
      rating: 82,
      accent: "magenta",
      items: ["Responsible AI", "Bias Detection & Fairness", "Explainability (SHAP/LIME)", "IMDA AI Governance Framework", "MAS FEAT", "PDPA", "EU AI Act"],
    },
  ],

  // Radar / hex chart core competencies
  radar: [
    { label: "AGENTS", value: 95 },
    { label: "RAG", value: 92 },
    { label: "NLP", value: 85 },
    { label: "DATA", value: 88 },
    { label: "GOVERNANCE", value: 80 },
    { label: "RESEARCH", value: 78 },
  ],

  tools: ["Git", "GitHub Actions", "Jupyter", "VS Code", "Google Colab", "Selenium", "BeautifulSoup"],

  projects: [
    {
      title: "SuperAI NEXT Hackathon — Existential Crisis Robot",
      description:
        "Built a 3-agent web system that detects rogue AI intent from behavioral signals. Agent 1 (Saboteur) covertly picks wrong answers while appearing genuine. Agent 2 generates real-time emotional suspicion readings. Agent 3 adapts strategy in a closed-loop feedback architecture. Integrated local Kokoro-ONNX TTS server connected to an Arduino robot via WebSocket for physical AI embodiment. Stack: Next.js 15 / TypeScript / Tailwind on Vercel, Google Gemini 2.0 Flash REST API.",
      techStack: ["Multi-Agent AI", "Next.js", "TypeScript", "Gemini", "WebSocket", "TTS"],
      year: "Jun 2026",
      github: "https://github.com/nudgytdeveloper/existential-crisis-robot-public",
      badge: "Hackathon",
    },
    {
      title: "BriefMe — AI Sales Meeting Prep Agent",
      description:
        "Shipped in 60 minutes at AI Build Lab Singapore (Build Club × Singtel × SMU AI). Generates full company briefings in 30 seconds using Exa for live web research and Gemini 2.5 Flash for AI synthesis. Integrated Mem0 persistent memory so each client briefing gets smarter over time. Deployed on Netlify.",
      techStack: ["Next.js", "Exa API", "Mem0", "Gemini 2.5", "Netlify"],
      year: "Jun 2026",
      github: "https://github.com/samsuljahith/briefme",
      badge: "Hackathon",
    },
    {
      title: "NeamForge — Agentic Static Site Generator",
      description:
        "Agentic Python pipeline with a build-verify loop and validation logic to ensure output correctness. Implements git-based checkpoints for full reproducibility and auditability of every AI-generated output. Fully local execution for data control and governance compliance.",
      techStack: ["Python", "Agentic AI", "Git", "Local LLM"],
      year: "2026",
      github: "https://github.com/samsuljahith/neamforge-site-generator",
    },
    {
      title: "NeamClaw — Conversational Support Bot",
      description:
        "Conversational AI agent using hybrid RAG (BM25 + vector search) and NLP-based query understanding. Integrates SQLite data retrieval, real-time API endpoints, and human escalation pathways with session isolation for safe, production-ready deployment.",
      techStack: ["RAG", "BM25", "Vector Search", "SQLite", "FastAPI", "NLP"],
      year: "2026",
      github: "https://github.com/samsuljahith/neamclaw-support-bot",
    },
    {
      title: "Ka-Nova Research — JASSS Journal Co-Author",
      description:
        "Contributing LLM Elite Agent Evaluation (Section 4.3) to a Generative Agent-Based Model simulating 50 years of governance with 10,000 Mesa citizen agents and 3 LangChain LLM elite agents. Responsible for output variance analysis (30+ seeds), governance theory alignment scoring, and prompt sensitivity testing across 45,000+ LLM decisions. Third author under supervision of Dr. Md Saifullah (dual PhD, Intelligent Systems).",
      techStack: ["LangChain", "LLM Evaluation", "Agent-Based Modeling", "Research", "Python"],
      year: "2026",
      github: "https://github.com/KaungOrYours/project-ka-nova",
      badge: "Research",
    },
    {
      title: "TESTGPT — Agentic AI Testing Orchestrator",
      description:
        "Multi-agent Python orchestrator for automated test case generation from specifications. Coordinates AI testing workflows across multiple evaluation stages. Applied structured evaluation logic for AI assurance and compliance testing against predefined behavioral requirements.",
      techStack: ["Python", "Multi-Agent", "OpenAI Agent SDK", "QA", "Compliance"],
      year: "2025",
      github: "https://github.com/samsuljahith/TESTGPT_tester",
    },
  ],

  certifications: [
    {
      title: "AWS AI Practitioner",
      provider: "Amazon Web Services",
      progress: 100,
    },
  ],

  community: [
    { title: "LLM Builders Community Singapore", type: "Member", icon: "users" },
    { title: "SuperAI NEXT Hackathon", type: "Marina Bay Sands, Jun 2026", icon: "trophy" },
    { title: "AI Build Lab Singapore", type: "Build Club × Singtel × SMU AI, Jun 2026", icon: "bulb" },
  ],

  contact: [
    { label: "Email", value: "samsuljahith@gmail.com", href: "mailto:samsuljahith@gmail.com", icon: "mail" },
    { label: "Phone", value: "+65 8911 4350", href: "tel:+6589114350", icon: "phone" },
    { label: "LinkedIn", value: "linkedin.com/in/samsul-jahith", href: "https://linkedin.com/in/samsul-jahith", icon: "linkedin" },
    { label: "GitHub", value: "github.com/samsuljahith", href: "https://github.com/samsuljahith", icon: "github" },
    { label: "Portfolio", value: "samsul-jahith-portfolio.onrender.com", href: "https://samsul-jahith-portfolio.onrender.com", icon: "globe" },
  ],

  resumeUrl: "https://samsul-jahith-portfolio.onrender.com",
};
