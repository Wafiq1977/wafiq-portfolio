"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  X,
  ShoppingBag,
  FileText,
  GraduationCap,
  ShieldCheck,
  KeyRound,
  School,
  Gamepad2,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { projects, otherProjects, type Project } from "@/data/projects";
import { profile } from "@/data/profile";
import { SectionHeading, SectionWrap } from "./section-heading";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  FileText,
  GraduationCap,
  ShieldCheck,
  KeyRound,
  School,
  Gamepad2,
  Building2,
};

function ProjectThumb({ project, className }: { project: Project; className?: string }) {
  const Icon = iconMap[project.icon] ?? FileText;
  return (
    <div className={cn("relative overflow-hidden rounded-2xl hairline bg-surface", className)}>
      {/* Illustrative image */}
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.name} — illustrative motif`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
          className="object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_20%_10%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent_60%)]" />
        </>
      )}

      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/25 to-background/30" />

      {/* Overlay: icon + year + category */}
      <div className="relative flex h-full min-h-[180px] flex-col justify-between p-5">
        <div className="flex items-start justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-xl glass text-foreground">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <span className="rounded-full glass px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/80">
            {project.year}
          </span>
        </div>
        <div className="flex items-end justify-between">
          <span className="rounded-full glass px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/80">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-foreground/50">illustrative</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = React.useState<Project | null>(null);

  return (
    <SectionWrap id="projects">
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title="Selected Works."
        description="A collection of digital products, applications, and experiments I've worked on."
      />

      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14" gap={0.07}>
        {projects.map((p) => (
          <StaggerItem key={p.id} direction="up">
            <motion.button
              type="button"
              onClick={() => setSelected(p)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="no-tap focus-ring group flex w-full flex-col overflow-hidden rounded-2xl hairline card-gradient text-left"
            >
              {/* Thumb */}
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
                  <ProjectThumb project={p} className="rounded-none border-0" />
                </div>
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/[0.04]" />
                <div className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-tight tracking-tight">
                    {p.name}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-fade">{p.tagline}</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-foreground/[0.06] px-2 py-0.5 font-mono text-[11px] text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="rounded-md px-1.5 py-0.5 font-mono text-[11px] text-fade">
                      +{p.stack.length - 4}
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-[13px] font-medium text-foreground/80 transition-colors group-hover:text-foreground">
                  View Details
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.button>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Other projects */}
      <Reveal direction="up" delay={0.1}>
        <div className="mt-12 rounded-2xl hairline p-5 sm:p-6 lg:mt-16">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                More Experiments &amp; Projects
              </h3>
              <p className="mt-1 text-[13px] text-fade">
                Additional builds, experiments, and side projects on GitHub.
              </p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="no-tap focus-ring inline-flex items-center gap-1.5 rounded-full hairline px-3.5 py-2 text-[13px] font-medium transition-colors hover:bg-foreground/[0.06]"
            >
              <Github className="h-3.5 w-3.5" />
              {profile.githubHandle}
            </a>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((op) => (
              <a
                key={op.name}
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="no-tap group flex items-center justify-between bg-background px-4 py-3.5 transition-colors hover:bg-foreground/[0.04]"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium tracking-tight">{op.name}</span>
                  <span className="text-[11px] text-fade">{op.note}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-fade transition-all group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </SectionWrap>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Close on Escape + lock body scroll while open.
  React.useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-background/70 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl glass-strong p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="no-tap focus-ring absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full hairline text-fade transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <ProjectThumb project={project} className="mb-6" />

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                {project.category}
              </span>
              <span className="rounded-full hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                {project.year}
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-tightest sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-fade">{project.tagline}</p>

            <p className="mt-5 text-pretty text-[15px] leading-relaxed text-foreground/85">
              {project.description}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl hairline p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                  Role
                </div>
                <div className="mt-1 text-sm font-medium">{project.role}</div>
              </div>
              <div className="rounded-xl hairline p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                  Period
                </div>
                <div className="mt-1 text-sm font-medium">{project.year}</div>
              </div>
            </div>

            <div className="mt-4 rounded-xl hairline p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                Technology Context
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-foreground/[0.06] px-2 py-0.5 font-mono text-[11px] text-foreground/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="no-tap focus-ring inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:gap-3"
              >
                <Github className="h-4 w-4" />
                View on GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={onClose}
                className="no-tap focus-ring inline-flex items-center gap-2 rounded-full hairline px-4 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/[0.06]"
              >
                Close
              </button>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-fade">
              Thumbnail is an illustrative motif representing the project category, not a live screenshot. Repository and demo links are not individually published; browse the GitHub profile for source availability.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
