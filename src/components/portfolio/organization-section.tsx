"use client";

import { motion } from "framer-motion";
import { Users2, Calendar } from "lucide-react";
import { organization } from "@/data/organization";
import { SectionHeading, SectionWrap } from "./section-heading";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function OrganizationSection() {
  const { items, softSkills } = organization;
  return (
    <SectionWrap id="organization" className="max-w-5xl">
      <SectionHeading
        index="07"
        eyebrow="Leadership & Organization"
        title={organization.heading}
        description="Experience beyond shipping code — coordination, mentorship, and teamwork."
      />

      <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Org cards */}
        <div className="flex flex-col gap-4">
          {items.map((o, i) => (
            <Reveal key={o.id} direction="up" delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-2xl hairline card-gradient p-6"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-hairline opacity-50" />
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background">
                    <Users2 className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                    <Calendar className="h-3 w-3" />
                    {o.period}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{o.role}</h3>
                <div className="mt-1 text-sm text-fade">{o.org}</div>
                <p className="mt-3 text-pretty text-[14px] leading-relaxed text-foreground/80">
                  {o.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Soft skills */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex h-full flex-col rounded-2xl hairline p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
              Soft Skills
            </div>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">
              What I bring to a team
            </h3>
            <Stagger className="mt-5 grid gap-3 sm:grid-cols-2" gap={0.06}>
              {softSkills.map((s) => (
                <StaggerItem key={s.name} direction="up">
                  <div className="group rounded-xl hairline bg-foreground/[0.02] p-4 transition-colors hover:bg-foreground/[0.05]">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 transition-transform group-hover:scale-125" />
                      <span className="text-sm font-medium tracking-tight">
                        {s.name}
                      </span>
                    </div>
                    <p className="mt-1.5 pl-3.5 text-[12px] leading-relaxed text-fade">
                      {s.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </SectionWrap>
  );
}
