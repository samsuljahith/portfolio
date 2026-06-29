import { Mail, Phone, Linkedin, Github, Globe } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/lib/data";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: profile.mailHref,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/samsul-jahith",
    href: profile.links.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@samsuljahith",
    href: profile.links.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Open to AI/ML engineering roles in Singapore, collaborations, and research. Drop a message or reach me directly."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-3">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="brut brut-hover flex items-center gap-4 p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border-2 border-black bg-primary text-primary-foreground">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="text-sm font-bold text-foreground">
                        {c.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <footer className="flex flex-col items-center justify-between gap-4 border-t-2 border-black pt-8 text-sm text-muted-foreground sm:flex-row">
            <span className="font-mono text-xs font-bold uppercase tracking-wide">
              © {new Date().getFullYear()} {profile.name}
            </span>
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide">
              <Globe size={13} /> Built with Next.js, Tailwind & Framer Motion
            </span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
