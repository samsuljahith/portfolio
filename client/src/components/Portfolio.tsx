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
      label: "AI/ML & Frameworks",
      color: "from-primary/20 to-primary/30 text-primary",
      items: ["LLMs", "RAG (Corrective/Hybrid/Agentic)", "Multi-Agent Systems", "NLP", "Transformers", "Prompt Engineering", "LangChain", "LangGraph", "LlamaIndex", "FastAPI", "FAISS", "ChromaDB", "Qdrant", "Pinecone", "Hugging Face", "Docker"],
    },
    {
      label: "Programming & Data",
      color: "from-secondary/20 to-secondary/30 text-secondary",
      items: ["Python", "SQL", "Pandas", "NumPy", "Streamlit", "Bash", "TypeScript", "Next.js", "React", "Tailwind CSS", "Matplotlib", "Plotly", "Power BI"],
    },
    {
      label: "AI Governance",
      color: "from-accent/20 to-accent/30 text-accent",
      items: ["Responsible AI", "Bias Detection & Fairness", "Explainability (SHAP/LIME)", "IMDA AI Governance Framework", "MAS FEAT", "PDPA", "EU AI Act"],
    },
  ];

  const projects = [
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
  ];

  const certifications = [
    {
      title: "AWS AI Practitioner",
      provider: "Amazon Web Services",
      icon: "fas fa-cloud",
      progress: 100,
      color: "from-primary to-secondary",
    },
  ];

  const community = [
    {
      title: "LLM Builders Community Singapore",
      type: "Member",
      icon: "fas fa-users",
    },
    {
      title: "SuperAI NEXT Hackathon",
      type: "Marina Bay Sands, Jun 2026",
      icon: "fas fa-trophy",
    },
    {
      title: "AI Build Lab Singapore",
      type: "Build Club × Singtel × SMU AI, Jun 2026",
      icon: "fas fa-lightbulb",
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
              AI Engineer · MSc Data Science
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Samsul Jahith S
            </h1>
            <div className="text-xl md:text-2xl mb-8 h-16 flex items-center justify-center">
              <span className="text-gray-300 border-r-2 border-primary pr-1">{typingText}</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
              AI Engineer and MSc Data Science student (University of Hertfordshire, 2026) with hands-on experience building agentic AI systems, multi-agent pipelines, RAG architectures, and LLM applications. Hackathon builder, research collaborator, and active contributor to the Singapore AI community. AWS AI Practitioner certified.
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
                          <p className="font-semibold">MSc Data Science</p>
                          <p className="text-gray-400 text-sm">University of Hertfordshire · PSB Academy, Singapore · 2026 – 2027</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-graduation-cap text-secondary mt-1 shrink-0"></i>
                        <div>
                          <p className="font-semibold">B.Tech in Information Technology</p>
                          <p className="text-gray-400 text-sm">Panimalar Institute of Technology · CGPA: 7.52/10 · 2019 – 2023</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-briefcase text-accent mt-1 shrink-0"></i>
                        <div>
                          <p className="font-semibold">Data Analyst · Fizon, Trichy (Remote)</p>
                          <p className="text-gray-400 text-sm">2024 – 2025 · Automated web data extraction using BeautifulSoup + Selenium, 10K+ records. Built Power BI dashboards for data-driven decision-making.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-laptop-code text-primary mt-1 shrink-0"></i>
                        <div>
                          <p className="font-semibold">Data Analyst Intern · Fizon Tech (Remote)</p>
                          <p className="text-gray-400 text-sm">2023 – 2024 · Automated web data collection workflows in Python. Delivered cleaned datasets supporting business intelligence.</p>
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
                      I'm an AI Engineer and MSc Data Science student with hands-on experience building <span className="text-primary font-medium">agentic AI systems</span>, <span className="text-secondary font-medium">multi-agent pipelines</span>, and <span className="text-accent font-medium">RAG architectures</span>.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Hackathon builder, research collaborator (JASSS journal co-author), and active contributor to the Singapore AI community. My work spans autonomous agent orchestration, LLM evaluation, and AI governance.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      AWS AI Practitioner certified. Currently pursuing my Master's in Data Science at University of Hertfordshire via PSB Academy, Singapore.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">Open to Opportunities</span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">Singapore Based</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">AWS Certified</span>
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
                A broad foundation across AI/ML, generative AI, programming, data engineering, and AI governance.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                {["Git", "GitHub Actions", "Jupyter", "VS Code", "Google Colab", "Selenium", "BeautifulSoup"].map(
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
                {projects.length} projects spanning agentic AI, multi-agent systems, RAG architectures, and AI governance research.
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
                        <div className="flex items-center gap-2 shrink-0">
                          {"badge" in project && project.badge && (
                            <span className="px-2 py-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 text-primary text-xs rounded-full font-medium">
                              {project.badge}
                            </span>
                          )}
                          <span className="text-xs code-font text-gray-500">{project.year}</span>
                        </div>
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

      {/* Certifications & Community Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Certifications & <span className="text-accent">Community</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-1 gap-6 mb-12">
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
            <ScrollReveal delay={300}>
              <h3 className="text-2xl font-bold text-center mb-8 text-secondary">Community & Events</h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {community.map((item, index) => (
                <ScrollReveal key={item.title} delay={400 + index * 150}>
                  <Card className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 h-full">
                    <CardContent className="p-0 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                        <i className={`${item.icon} text-white text-xl`}></i>
                      </div>
                      <h4 className="font-bold text-sm leading-snug mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs">{item.type}</p>
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
                    Download my full resume covering agentic AI projects, multi-agent systems, RAG architectures, and AI governance expertise.
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
                    <a
                      href="https://samsul-jahith-portfolio.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-300 hover:text-secondary transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-secondary/50 transition-all">
                        <i className="fas fa-globe text-white"></i>
                      </div>
                      <div>
                        <p className="font-semibold">Portfolio</p>
                        <p className="text-sm">samsul-jahith-portfolio.onrender.com</p>
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
