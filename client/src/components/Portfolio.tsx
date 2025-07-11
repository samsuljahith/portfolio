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

  const fullText = "Turning Data into Decisions. Building the Future with AI.";

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
    }, 100);

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
    const link = document.createElement('a');
    link.href = '/resume.txt';
    link.download = 'Samsul_Jahith_S_Resume.txt';
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

  const projects = [
    {
      title: "UNO Trade Dashboard",
      description: "Web scraped 30K+ rows of trade data using BeautifulSoup + Selenium and built interactive dashboards in Power BI for comprehensive trade analysis.",
      techStack: ["BeautifulSoup", "Selenium", "Power BI"],
      color: "from-primary to-secondary",
    },
    {
      title: "Sales Data Dashboard",
      description: "Used Pandas and Power BI to analyze sales trends and KPIs, providing actionable insights for business decision-making.",
      techStack: ["Pandas", "Power BI", "Data Analysis"],
      color: "from-secondary to-accent",
    },
    {
      title: "Math Tutor Agent",
      description: "Personalized AI tutor using LangGraph with agentic memory and symbolic math reasoning capabilities.",
      techStack: ["LangGraph", "AI Agents", "Python"],
      color: "from-accent to-primary",
    },
    {
      title: "RAG-Based QA System",
      description: "Built educational search assistant with Pinecone + HuggingFace embeddings for intelligent document retrieval and question answering.",
      techStack: ["RAG", "Pinecone", "HuggingFace"],
      color: "from-primary to-accent",
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
      title: "Google Data Analytics",
      provider: "Coursera",
      icon: "fas fa-chart-line",
      progress: 100,
      color: "from-secondary to-accent",
    },
    {
      title: "Power BI for Beginners",
      provider: "Great Learning",
      icon: "fas fa-chart-bar",
      progress: 100,
      color: "from-accent to-primary",
    },
    {
      title: "Building Systems with LangGraph",
      provider: "In Progress",
      icon: "fas fa-link",
      progress: 75,
      color: "from-primary to-secondary",
    },
  ];

  const skills = [
    { name: "LangGraph", icon: "fas fa-robot", color: "text-primary" },
    { name: "Neural Networks", icon: "fas fa-brain", color: "text-secondary" },
    { name: "RAG Systems", icon: "fas fa-search", color: "text-accent" },
    { name: "Vector DBs", icon: "fas fa-database", color: "text-primary" },
    { name: "Transformers", icon: "fas fa-cog", color: "text-secondary" },
    { name: "Python", icon: "fab fa-python", color: "text-accent" },
    { name: "Hugging Face", icon: "fas fa-robot", color: "text-primary" },
    { name: "OpenAI API", icon: "fas fa-brain", color: "text-secondary" },
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[var(--dark-border)] ${
        isNavScrolled ? "bg-[var(--dark-bg)]/95" : "bg-[var(--dark-bg)]/90"
      } backdrop-blur-md`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold code-font text-primary">
              &lt;SamsulJahith /&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "certifications", "contact"].map((section) => (
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
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {["home", "about", "projects", "certifications", "contact"].map((section) => (
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Samsul Jahith S
            </h1>
            <div className="text-xl md:text-2xl mb-4 h-16 flex items-center justify-center">
              <span className="text-gray-300 border-r-2 border-primary pr-1">
                {typingText}
              </span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 mb-8 code-font">
              Data Analyst | Aspiring AI Engineer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={handleResumeDownload}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-[var(--dark-surface)]/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                About <span className="text-primary">Me</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal delay={200}>
                <Card className="glass-card rounded-2xl p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-accent">Background</h3>
                    <div className="space-y-4 text-gray-300">
                      <div className="flex items-start gap-3">
                        <i className="fas fa-graduation-cap text-primary mt-1"></i>
                        <div>
                          <p className="font-semibold">B.Tech in Information Technology</p>
                          <p className="text-gray-400">Panimalar Institute of Technology (CGPA: 7.52)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-briefcase text-secondary mt-1"></i>
                        <div>
                          <p className="font-semibold">1 Year Experience as Data Analyst</p>
                          <p className="text-gray-400">TATTI, Chennai</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-laptop-code text-accent mt-1"></i>
                        <div>
                          <p className="font-semibold">10 Months Internship</p>
                          <p className="text-gray-400">Fizon Tech</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <Card className="glass-card rounded-2xl p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-accent">Skills & Expertise</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {skills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-3 text-center hover:scale-105 transition-transform"
                        >
                          <i className={`${skill.icon} text-2xl ${skill.color} mb-2`}></i>
                          <p className="text-sm font-semibold">{skill.name}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                      <p className="text-center text-gray-300">
                        <span className="text-primary font-semibold">Aspiring AI Engineer</span><br />
                        Building intelligent agentic systems with LangGraph and Vector Databases
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Featured <span className="text-secondary">Projects</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.title} delay={index * 200}>
                  <Card className="glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 h-full">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 bg-gradient-to-r ${
                              techIndex % 3 === 0
                                ? "from-primary/20 to-primary/30 text-primary"
                                : techIndex % 3 === 1
                                ? "from-secondary/20 to-secondary/30 text-secondary"
                                : "from-accent/20 to-accent/30 text-accent"
                            } text-sm rounded-full`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" className="text-primary hover:text-secondary p-0">
                        <i className="fas fa-external-link-alt mr-2"></i>View Project
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
      <section id="certifications" className="py-20 bg-[var(--dark-surface)]/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="text-accent">Certifications</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <ScrollReveal key={cert.title} delay={index * 150}>
                  <Card className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center`}>
                          <i className={`${cert.icon} text-white text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{cert.title}</h3>
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
                        {cert.progress === 100 ? "Completed" : `${cert.progress}% Complete`}
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Card className="glass-card rounded-2xl p-12">
                <CardContent className="p-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Get My <span className="text-primary">Resume</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Download my comprehensive resume to learn more about my experience, skills, and achievements in data analysis and AI development.
                  </p>
                  <Button
                    onClick={handleResumeDownload}
                    className="px-12 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-2 animate-glow"
                  >
                    <i className="fas fa-download mr-3"></i>
                    Download Resume PDF
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[var(--dark-surface)]/50">
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
                    I'm always interested in discussing new opportunities, innovative projects, and collaborations in data science and AI. Feel free to reach out!
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
                      href="tel:+917806888524"
                      className="flex items-center gap-4 text-gray-300 hover:text-secondary transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-secondary/50 transition-all">
                        <i className="fas fa-phone text-white"></i>
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm">+91 7806888524</p>
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
            <p className="text-gray-400 mb-4">
              &copy; 2024 Samsul Jahith S. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 code-font">
              Built with ❤️ using React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
