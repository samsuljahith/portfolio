import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { experience, education } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="Journey" title="Experience & education" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              <Briefcase size={16} className="text-primary" /> Experience
            </h3>
            <div className="relative space-y-8 border-l-2 border-black pl-6">
              {experience.map((item, i) => (
                <Reveal key={item.role} delay={i * 0.1}>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 border-2 border-black bg-primary" />
                    <span className="font-mono text-xs font-bold text-primary">
                      {item.period}
                    </span>
                    <h4 className="mt-1 font-bold">{item.role}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.company}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              <GraduationCap size={16} className="text-primary" /> Education
            </h3>
            <div className="relative space-y-8 border-l-2 border-black pl-6">
              {education.map((item, i) => (
                <Reveal key={item.school} delay={i * 0.1}>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 border-2 border-black bg-foreground" />
                    <span className="font-mono text-xs font-bold text-foreground">
                      {item.period}
                    </span>
                    <h4 className="mt-1 font-bold">{item.degree}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.school}
                    </p>
                    {item.detail && (
                      <p className="mt-1 text-sm text-muted-foreground/70">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
