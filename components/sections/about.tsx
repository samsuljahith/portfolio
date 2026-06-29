import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { profile, stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="About" title="AI engineer, grounded in reliability" />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.status.map((s) => (
                <span
                  key={s}
                  className="rounded-none border-2 border-black bg-card px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="brut p-5">
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
