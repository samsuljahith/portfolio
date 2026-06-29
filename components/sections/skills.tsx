import { Layers, Shield, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { skillGroups, type SkillGroup } from "@/lib/data";

const icons = {
  sparkles: Sparkles,
  layers: Layers,
  shield: Shield,
};

function SkillCard({ group, delay }: { group: SkillGroup; delay: number }) {
  const Icon = icons[group.icon];
  return (
    <Reveal delay={delay} className="h-full">
      <div className="brut brut-hover flex h-full flex-col p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border-2 border-black bg-primary text-primary-foreground">
            <Icon size={20} />
          </span>
          <h3 className="font-bold uppercase tracking-tight">{group.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-none border-2 border-black bg-secondary px-2.5 py-1 font-mono text-[11px] font-bold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & techniques"
          subtitle="A focused toolkit spanning generative AI, the engineering frameworks that ship it, and the responsible-AI practices that keep it trustworthy."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
