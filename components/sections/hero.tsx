"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 7% / 0.07) 2px, transparent 2px), linear-gradient(90deg, hsl(0 0% 7% / 0.07) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-none border-2 border-black bg-card px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-foreground shadow-[3px_3px_0_0_#000]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-none bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-none bg-emerald-500" />
            </span>
            Open to AI/ML roles
            <span className="text-muted-foreground">·</span>
            <MapPin size={13} /> {profile.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="bg-primary px-2 text-primary-foreground">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-base font-bold text-primary sm:text-lg"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="gradient"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects <ArrowDown size={16} />
            </Button>
            <Button variant="outline" asChild>
              <a
                href={profile.mailHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={16} /> Get in touch
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center border-2 border-black bg-card text-foreground shadow-[3px_3px_0_0_#000] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:bg-primary hover:text-primary-foreground hover:shadow-[5px_5px_0_0_#000]"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center border-2 border-black bg-card text-foreground shadow-[3px_3px_0_0_#000] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:bg-primary hover:text-primary-foreground hover:shadow-[5px_5px_0_0_#000]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.mailHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center border-2 border-black bg-card text-foreground shadow-[3px_3px_0_0_#000] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:bg-primary hover:text-primary-foreground hover:shadow-[5px_5px_0_0_#000]"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-3 -z-10 border-2 border-black bg-primary" />
          <div className="brut overflow-hidden p-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top grayscale"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <ArrowDown size={18} className="animate-bounce text-foreground" />
      </motion.div>
    </section>
  );
}
