"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, TrendingUp } from "lucide-react";
import { education, priorEducation } from "@/data/education";
import { SectionHeading, SectionWrap } from "./section-heading";
import { Reveal } from "./reveal";

export function EducationSection() {
  const main = education[0];
  return (
    <SectionWrap id="education" className="max-w-5xl">
      <SectionHeading
        index="05"
        eyebrow="Education"
        title="Education."
        description="Formal academic foundation in computer science and informatics."
      />

      <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Main */}
        <Reveal direction="up">
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl hairline card-gradient p-6 sm:p-7"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-hairline opacity-50" />
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background">
                <GraduationCap className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {main.status}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {main.institution}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                <span className="font-medium text-foreground/90">{main.degree}</span>
                <span className="text-fade">·</span>
                <span className="text-fade">{main.field}</span>
              </div>
              <div className="mt-1.5 flex items-center gap-1.5 text-[13px] text-fade">
                <MapPin className="h-3.5 w-3.5" />
                {main.location}
              </div>
            </div>

            <p className="text-pretty text-[14px] leading-relaxed text-foreground/80">
              {main.description}
            </p>

            <div className="mt-auto grid grid-cols-2 gap-3">
              <div className="rounded-xl hairline p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                  GPA
                </div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-2xl font-semibold tracking-tightest">
                    {main.gpa?.split(" ")[0]}
                  </span>
                  <span className="text-[11px] text-fade">/ 4.00</span>
                </div>
              </div>
              <div className="rounded-xl hairline p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                  Graduation
                </div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <TrendingUp className="h-4 w-4 text-foreground/70" />
                  <span className="text-sm font-semibold">2028</span>
                  <span className="text-[11px] text-fade">Expected</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Prior education */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex h-full flex-col rounded-2xl hairline p-5 sm:p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
              Academic Path
            </div>
            <ul className="mt-5 flex flex-col">
              {priorEducation.map((e, i) => (
                <li
                  key={e.institution}
                  className="flex items-start justify-between gap-3 border-b border-hairline py-3 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 font-mono text-[11px] text-fade">
                      {String(priorEducation.length - i).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-sm font-medium leading-tight">
                        {e.institution}
                      </div>
                      <div className="text-[12px] text-fade">{e.level}</div>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] tabular-nums text-fade">
                    {e.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionWrap>
  );
}
