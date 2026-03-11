import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ParticleBackground from "./ParticleBackground";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const { toast } = useToast();

  const fullText = "Building Agentic AI Systems. Turning Data into Intelligence.";

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.txt";
    link.download = "Samsul_Jahith_S_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Resume Downloaded",
      description: "Resume has been downloaded successfully!",
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message! I'll get back to you soon.",
    });
  };

  const skillCategories = [
    {
      label: "AI / ML",
      color: "from-primary/20 to-primary/30 text-primary",
      items: ["Deep Learning", "Neural Networks", "Transformers", "Transfer Learning", "RNN", "Attention Mechanism"],
    },
    {
      label: "Generative AI",
      color: "from-secondary/20 to-secondary/30 text-secondary",
      items: ["LLMs", "Prompt Engineering", "LangChain", "LangGraph", "LlamaIndex", "OpenAI Agent SDK"],
    },
    {
      label: "Data & Retrieval",
      color: "from-accent/20 to-accent/30 text-accent",
      items: ["RAG Pipelines", "Vector Databases", "Pinecone", "FAISS", "Qdrant", "LangSmith"],
    },
    {
      label: "Programming & Tools",
      color: "from-primary/20 to-secondary/20 text-gray-200",
      items: ["Python", "SQL", "FastAPI", "Streamlit", "Hugging Face", "Docker (Basic)"],
    },
  ];

  const projects = [
    {
      title: "NeamForge Static Site Generator",
      description:
        "Built a Forge Agent using the Neam language that reads a JSON site spec and iteratively generates a complete static website through an automated build-verify loop. Containerized with Docker Compose (Ollama + Nginx) for fully reproducible local execution.",
      techStack: ["Neam Agent", "llama3.1", "Docker Compose", "Ollama", "HTML Validation"],
      year: "2026",
      github: "https://github.com/samsuljahith/neamforge-site-generator",
    },
    {
      title: "NeamClaw Support Bot",
      description:
        "Persistent conversational support agent with session management and auto-compaction. Integrates hybrid RAG (BM25 + vector) over knowledge docs, SQLite order lookup, ticket creation, and human escalation. Deployed via CLI and HTTP REST API.",
      techStack: ["Neam Claw Agent", "Hybrid RAG", "BM25", "SQLite", "FastAPI"],
      year: "2026",
      github: "https://github.com/samsuljahith/neamclaw-support-bot",
    },
    {
      title: "Neam-Database",
      description:
        "Lightweight explainable vector database built on FAISS + SQLite + SentenceTransformers. Returns semantic similarity scores with explanations of why documents matched, served via FastAPI.",
      techStack: ["FAISS", "SQLite", "SentenceTransformers", "FastAPI"],
      year: "2026",
      github: "https://github.com/samsuljahith/Neam-Database",
    },
    {
      title: "TESTGPT – Agentic AI Testing Orchestrator",
      description:
        "Orchestrator agent using OpenAI's Agent SDK to coordinate multiple domain-specific test agents (API, UI, DB, NFR). Planning agent parses software specs and generates structured test tasks. Uses Mistral-7B via Groq.",
      techStack: ["OpenAI Agent SDK", "Mistral-7B", "Groq", "GitHub Actions", "pyproject"],
      year: "2025",
      github: "https://github.com/samsuljahith/TESTGPT_tester",
    },
    {
      title: "Smart Research Agent (MCP + Agentic RAG)",
      description:
        "Local AI research assistant using MCP, LlamaIndex, and Qdrant for document-based RAG with live web fallback. MCP server exposes semantic search and web scraping tools. LlamaIndex function agent dynamically selects tools and streams responses.",
      techStack: ["MCP", "LlamaIndex", "Qdrant", "FastAPI", "Serper.dev"],
      year: "2025",
      github: "https://github.com/samsuljahith/Research_agent",
    },
    {
      title: "Trader Future AGI",
      description:
        "Multi-agent AI trading system built with the CrewAI framework. Uses specialized agents to analyze market data, evaluate signals, and execute trading decisions through agent collaboration.",
      techStack: ["CrewAI", "Multi-Agent", "Python", "Market Analysis"],
      year: "2025",
      github: "https://github.com/samsuljahith/Trader-Future-_AGI",
    },
    {
      title: "SQL Learning Agent",
      description:
        "AI-powered SQL learning assistant using RAG (LlamaIndex + FAISS), HuggingFace embeddings (BAAI/bge-small-en-v1.5), and Groq's DeepSeek R1 Distill Llama 70B. Interactive CLI interface for SQL help and explanations.",
      techStack: ["LlamaIndex", "FAISS", "HuggingFace", "Groq", "DeepSeek R1"],
      year: "2025",
      github: "https://github.com/samsuljahith/Sql_agent",
    },
    {
      title: "Hashnode Agent",
      description:
        "Python agent integrating with Hashnode's API via an MCP (Model Context Protocol) server. Enables AI-powered blog management and content operations through the MCP protocol.",
      techStack: ["MCP", "Hashnode API", "Python"],
      year: "2025",
      github: "https://github.com/samsuljahith/Hashnode_agent",
    },
    {
      title: "Chatbot AI Agent",
      description:
        "Conversational chatbot built with LangGraph and Groq's Llama3-8b-8192. Features agentic memory, stateful conversation graphs, and a CLI interface. Also includes a Jupyter notebook version.",
      techStack: ["LangGraph", "Groq", "Llama3", "LangChain"],
      year: "2025",
      github: "https://github.com/samsuljahith/Chatbot-ai-agent",
    },
    {
      title: "Nutrition Suggestion Agent",
      description:
        "Smart agent that recommends food based on nutrition goals. Analyzes nutritional data from food datasets and provides personalised dietary recommendations.",
      techStack: ["Python", "AI Agent", "Nutrition Data", "CSV Analysis"],
      year: "2025",
      github: "https://github.com/samsuljahith/Nutrition_agent",
    },
    {
      title: "Data Cleaning Agent",
      description:
        "Automated Python agent for cleaning and transforming messy CSV datasets. Handles missing values, outliers, type coercion, and generates clean analysis-ready data.",
      techStack: ["Python", "Pandas", "NumPy", "CSV Processing"],
      year: "2025",
      github: "https://github.com/samsuljahith/Data_Cleaning_agent",
    },
    {
      title: "Web Scraping Agent",
      description:
        "Intelligent web scraping agent that autonomously navigates websites, extracts structured data, and handles dynamic content. Supports customizable scraping workflows.",
      techStack: ["Python", "BeautifulSoup", "Selenium", "AI Agent"],
      year: "2025",
      github: "https://github.com/samsuljahith/Scrapping_Agent",
    },
  ];

  const certifications = [
    {
      title: "Generative AI with LLMs",
      provider: "DeepLearning.AI",
      icon: "fas fa-brain",
      progress: 100,
      color: "from-primary to-secondary",
    },
    {
      title: "Introduction to LLMs",
      provider: "LinkedIn Learning",
      icon: "fas fa-graduation-cap",
      progress: 100,
      color: "from-secondary to-accent",
    },
    {
      title: "Event-Driven Agentic Document Workflows",
      provider: "DeepLearning.AI",
      icon: "fas fa-robot",
      progress: 100,
      color: "from-accent to-primary",
    },
  ];

  const colorCycle = [
    "from-primary/20 to-primary/30 text-primary",
    "from-secondary/20 to-secondary/30 text-secondary",
    "from-accent/20 to-accent/30 text-accent",
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[var(--dark-border)] ${
          isNavScrolled ? "bg-[var(--dark-bg)]/95" : "bg-[var(--dark-bg)]/90"
        } backdrop-blur-md`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold code-font text-primary">&lt;SamsulJahith /&gt;</div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "certifications", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="nav-link hover:text-primary capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </Button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {["home", "about", "skills", "projects", "certifications", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block hover:text-primary capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm code-font text-secondary mb-4 tracking-widest uppercase">
              AI Engineer · Data Analyst
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Samsul Jahith S
            </h1>
            <div className="text-xl md:text-2xl mb-8 h-16 flex items-center justify-center">
              <span className="text-gray-300 border-r-2 border-primary pr-1">{typingText}</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
              Specialised in building agentic AI systems, RAG pipelines, and LLM-based applications.
              Passionate about Generative AI, autonomous agents, and transforming data into intelligent decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <i className="fas fa-rocket mr-2"></i>View Projects
              </Button>
              <Button
                variant="outline"
                onClick={handleResumeDownload}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                <i className="fas fa-download mr-2"></i>Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[var(--dark-surface)]/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                About <span className="text-primary">Me</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <ScrollReveal delay={200}>
                <Card className="glass-card rounded-2xl p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-accent">Background</h3>
                    <div className="space-y-5 text-gray-300">
                      <div className="flex items-start gap-3">
                        <i className="fas fa-graduation-cap text-primary mt-1 shrink-0"></i>
                        <div>
                          <p className="font-semibold">Master's in Data Science</p>
                          <p className="text-gray-400 text-sm">University of Hertfordshire · PSB Academy, Singapore · 2026 – Present</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-graduation-cap text-secondary mt-1 shrink-0"></i>
                        <div>
                          <p className="font-semibold">B.Tech in Information Technology</p>
                          <p className="text-gray-400 text-sm">Panimalar Institute of Technology · CGPA: 7.52 · 2019 – 2023</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-briefcase text-accent mt-1 shrink-0"></i>
                        <div>
                          <p className="font-semibold">Data Analyst · Fizon, Trichy (Remote)</p>
                          <p className="text-gray-400 text-sm">2024 – 2025 · Automated ETL pipelines, Power BI dashboards, 10K+ records scraped</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-laptop-code text-primary mt-1 shrink-0"></i>
                        <div>
                          <p className="font-semibold">Data Analyst Intern · Fizon Tech (Remote)</p>
                          <p className="text-gray-400 text-sm">2023 – 2024 · Web data collection, Pandas-based dataset preparation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <Card className="glass-card rounded-2xl p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-accent">Who I Am</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      I'm an AI Engineer-focused Data Analyst with hands-on experience building <span className="text-primary font-medium">agentic AI systems</span>, <span className="text-secondary font-medium">RAG pipelines</span>, and <span className="text-accent font-medium">LLM-based applications</span>.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      My work spans autonomous agent orchestration, open-source AI library contributions, and intelligent data pipelines. I've built systems that are 100% local, privacy-first, and production-ready.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Currently pursuing my Master's in Data Science in Singapore, deepening my expertise in advanced ML and AI systems.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">Open to Opportunities</span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">Singapore Based</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">Remote Friendly</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Skills & <span className="text-secondary">Expertise</span>
              </h2>
              <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                A broad foundation across AI/ML, Generative AI, data engineering, and software tooling.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, catIndex) => (
                <ScrollReveal key={category.label} delay={catIndex * 150}>
                  <Card className="glass-card rounded-2xl p-6 h-full">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-bold mb-4 text-accent code-font">// {category.label}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <span
                            key={item}
                            className={`px-3 py-1.5 bg-gradient-to-r ${category.color} text-sm rounded-full font-medium hover:scale-105 transition-transform cursor-default`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
            {/* Additional tools row */}
            <ScrollReveal delay={600}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["Pandas", "NumPy", "Matplotlib", "Streamlit", "Bash", "Git", "GitHub Actions", "Jupyter", "VS Code", "Google Colab"].map(
                  (tool, i) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-[var(--dark-surface)] border border-[var(--dark-border)] text-gray-300 text-sm rounded-full hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[var(--dark-surface)]/50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                GitHub <span className="text-secondary">Projects</span>
              </h2>
              <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                {projects.length} recent projects spanning agentic AI, RAG systems, multi-agent orchestration, and data engineering.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ScrollReveal key={project.title} delay={(index % 3) * 150}>
                  <Card className="glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shrink-0 mt-1"></div>
                          <h3 className="text-base font-bold leading-snug">{project.title}</h3>
                        </div>
                        <span className="text-xs code-font text-gray-500 shrink-0">{project.year}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-2 py-0.5 bg-gradient-to-r ${colorCycle[techIndex % 3]} text-xs rounded-full`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-secondary p-0 self-start text-sm"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <i className="fab fa-github mr-2"></i>View on GitHub
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="text-accent">Certifications</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <ScrollReveal key={cert.title} delay={index * 150}>
                  <Card className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center shrink-0`}
                        >
                          <i className={`${cert.icon} text-white text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-base leading-snug">{cert.title}</h3>
                          <p className="text-gray-400 text-sm">{cert.provider}</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${cert.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${cert.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        {cert.progress === 100 ? "✓ Completed" : `${cert.progress}% Complete`}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-20 bg-[var(--dark-surface)]/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Card className="glass-card rounded-2xl p-12">
                <CardContent className="p-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get My <span className="text-primary">Resume</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Download my full resume covering agentic AI projects, data engineering experience, and my growing ML expertise.
                  </p>
                  <Button
                    onClick={handleResumeDownload}
                    className="px-12 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-2 animate-glow"
                  >
                    <i className="fas fa-download mr-3"></i>Download Resume
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Get In <span className="text-primary">Touch</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal delay={200}>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-accent">Let's Connect</h3>
                  <p className="text-gray-300 mb-8">
                    I'm always open to discussing new AI projects, collaboration opportunities, or roles in AI engineering and data science. Feel free to reach out!
                  </p>
                  <div className="space-y-4">
                    <a
                      href="mailto:samsuljahith@gmail.com"
                      className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                        <i className="fas fa-envelope text-white"></i>
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm">samsuljahith@gmail.com</p>
                      </div>
                    </a>
                    <a
                      href="tel:+6589114350"
                      className="flex items-center gap-4 text-gray-300 hover:text-secondary transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-secondary/50 transition-all">
                        <i className="fas fa-phone text-white"></i>
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm">+65 8911 4350</p>
                      </div>
                    </a>
                    <a
                      href="https://linkedin.com/in/samsul-jahith"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                        <i className="fab fa-linkedin text-white"></i>
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-sm">linkedin.com/in/samsul-jahith</p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/samsuljahith"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                        <i className="fab fa-github text-white"></i>
                      </div>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-sm">github.com/samsuljahith</p>
                      </div>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <Card className="glass-card rounded-2xl p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-accent">Send a Message</h3>
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input
                          type="text"
                          className="w-full px-4 py-3 bg-[var(--dark-bg)] border border-[var(--dark-border)] rounded-lg focus:border-primary focus:outline-none transition-colors"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          type="email"
                          className="w-full px-4 py-3 bg-[var(--dark-bg)] border border-[var(--dark-border)] rounded-lg focus:border-primary focus:outline-none transition-colors"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <Textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-[var(--dark-bg)] border border-[var(--dark-border)] rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                          placeholder="Your message..."
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--dark-border)]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 mb-2">&copy; 2026 Samsul Jahith S. All rights reserved.</p>
            <p className="text-sm text-gray-500 code-font">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
