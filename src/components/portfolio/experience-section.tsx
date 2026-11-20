"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Users2,
  Code2,
  GraduationCap,
  Crown,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { experiences } from "@/data/experiences";
import { SectionHeading, SectionWrap } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const roleIconMap: Record<string, LucideIcon> = {
  Users2,
  Code2,
  GraduationCap,
  Briefcase,
  Crown,
  Megaphone,
};

export function ExperienceSection() {
  return (
    <SectionWrap id="experience" className="max-w-5xl">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've worked."
        description="A timeline of roles across agency work, freelance delivery, teaching, and internship."
      />

      <div className="relative mt-12 lg:mt-16">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-hairline-strong to-transparent sm:left-[9px]" />

        <div className="flex flex-col gap-10 sm:gap-12">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} direction="up" delay={i * 0.04}>
              <div className="relative pl-8 sm:pl-12">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 grid place-items-center">
                  <span
                    className={cn(
                      "grid h-[15px] w-[15px] place-items-center rounded-full",
                      exp.current
                        ? "bg-foreground"
                        : "hairline bg-background",
                    )}
                  >
                    {exp.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-background" />
                    )}
                  </span>
                  {exp.current && (
                    <span className="absolute h-7 w-7 animate-ping rounded-full bg-foreground/10" />
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="rounded-full hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 hidden grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground/[0.06] text-foreground sm:grid">
                      {(() => {
                        const Icon = roleIconMap[exp.icon] ?? Briefcase;
                        return <Icon className="h-5 w-5" strokeWidth={1.7} />;
                      })()}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {exp.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                        <span className="font-medium text-foreground/90">
                          {exp.company}
                        </span>
                        <span className="text-fade">·</span>
                        <span className="text-fade">{exp.type}</span>
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-[13px] text-fade">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="max-w-2xl text-pretty text-[14px] leading-relaxed text-foreground/80">
                    {exp.description}
                  </p>

                  <ul className="mt-1 grid gap-2 sm:grid-cols-2">
                    {exp.responsibilities.map((r, ri) => (
                      <li
                        key={ri}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/75"
                      >
                        <Briefcase className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fade" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-2 flex flex-wrap gap-1.5"
                  >
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-foreground/[0.06] px-2 py-0.5 font-mono text-[11px] text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
}
