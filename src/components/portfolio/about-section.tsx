"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Users2, Infinity as Inf, Target } from "lucide-react";
import { about, languages, careerGoal, profile } from "@/data/profile";
import { SectionHeading, SectionWrap } from "./section-heading";
import { Reveal, Stagger, StaggerItem } from "./reveal";

const icons = [Code2, Layers, Users2, Inf];

export function AboutSection() {
  return (
    <SectionWrap id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title={about.heading}
        description={about.subheading}
      />

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        {/* Narrative */}
        <div className="flex flex-col gap-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} direction="up" delay={i * 0.06}>
              <p className="text-pretty text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal direction="up" delay={0.25}>
            <div className="mt-2 flex items-start gap-3.5 rounded-2xl hairline bg-foreground/[0.02] p-5">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-foreground/[0.06] text-foreground">
                <Target className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
                  5-Year Goal
                </div>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90">
                  {careerGoal}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Side meta */}
        <div className="flex flex-col gap-4">
          <Reveal direction="up" delay={0.1}>
            <div className="rounded-2xl hairline p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
                Languages
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between border-b border-hairline pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-medium">{l.name}</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-fade">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.18}>
            <div className="rounded-2xl hairline p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
                Quick Facts
              </div>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                <Fact label="Location" value={profile.location} />
                <Fact label="Focus" value="End-to-end web apps" />
                <Fact label="Education" value="Informatics Engineering, UNESA" />
                <Fact label="Open to" value="Full-time · Freelance · Collab" />
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Highlight cards */}
      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {about.highlights.map((h, i) => {
          const Icon = icons[i] ?? Code2;
          return (
            <StaggerItem key={h.no}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl hairline card-gradient p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground/[0.06] text-foreground">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-xs text-fade">{h.no}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold tracking-tight">
                    {h.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-fade">
                    {h.desc}
                  </p>
                </div>
                <div className="mt-auto h-px w-full origin-left scale-x-0 bg-foreground/20 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionWrap>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-hairline pb-3 last:border-0 last:pb-0">
      <span className="text-fade">{label}</span>
      <span className="text-right font-medium text-foreground/90">{value}</span>
    </li>
  );
}
