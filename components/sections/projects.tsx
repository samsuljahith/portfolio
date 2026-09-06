import { Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ProjectCard, CompactProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { featuredProjects, secondaryProjects, profile } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Open-source AI toolkits, agentic systems, hackathon builds, and research — focused on retrieval, multi-agent orchestration, and grounded, evaluated outputs."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold uppercase tracking-tight">
              <Github size={18} className="text-primary" /> More on GitHub
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryProjects.slice(0, 4).map((project, i) => (
              <Reveal
                key={project.title}
                delay={(i % 3) * 0.06}
                className="h-full"
              >
                <CompactProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center">
            <Button variant="outline" asChild>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} /> View all repositories
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
