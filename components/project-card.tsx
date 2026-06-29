import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data";

const badgeVariant: Record<
  NonNullable<Project["badge"]>,
  "default" | "accent" | "outline"
> = {
  "Open Source": "default",
  Hackathon: "accent",
  Research: "outline",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="brut brut-hover group flex h-full flex-col p-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.badge && (
            <Badge variant={badgeVariant[project.badge]}>{project.badge}</Badge>
          )}
        </div>
        <span className="font-mono text-xs font-bold text-muted-foreground">
          {project.year}
        </span>
      </div>

      <h3 className="text-lg font-bold leading-snug text-foreground">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {project.blurb}
      </p>

      {project.highlights && (
        <ul className="mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-none border-2 border-black bg-secondary px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t-2 border-black pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-primary"
          >
            <Github size={15} /> Code
          </a>
        )}
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-primary"
          >
            <ExternalLink size={15} /> Live
          </a>
        )}
        <ArrowUpRight
          size={18}
          className="ml-auto text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
        />
      </div>
    </article>
  );
}

export function CompactProjectCard({ project }: { project: Project }) {
  const Wrapper = project.github ? "a" : "div";
  return (
    <Wrapper
      {...(project.github
        ? {
            href: project.github,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="brut brut-hover group flex h-full flex-col p-5"
    >
      <div className="mb-2 flex items-center justify-between">
        <Github size={16} className="text-foreground" />
        <ArrowUpRight
          size={16}
          className="text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
        />
      </div>
      <h4 className="text-sm font-bold text-foreground">{project.title}</h4>
      <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
        {project.blurb}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-none border-2 border-black bg-secondary px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
