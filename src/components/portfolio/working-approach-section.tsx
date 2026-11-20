"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  Compass,
  ClipboardList,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { workingApproach } from "@/data/working-approach";
import { SectionHeading, SectionWrap } from "./section-heading";
import { Reveal } from "./reveal";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  ClipboardList,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  RefreshCw,
};

export function WorkingApproachSection() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(trackRef, { once: true, amount: 0.2 });
  const { steps } = workingApproach;

  return (
    <SectionWrap id="approach">
      <SectionHeading
        index="08"
        eyebrow="Working Approach"
        title={workingApproach.heading}
        description={workingApproach.subheading}
      />

      {/* Horizontal track (desktop) */}
      <div
        ref={trackRef}
        className="relative mt-12 hidden gap-4 overflow-x-auto pb-4 md:flex lg:mt-16"
      >
        {/* progress line */}
        <div className="pointer-events-none absolute left-0 right-0 top-[26px] h-px bg-hairline">
          <motion.div
            className="h-full origin-left bg-foreground"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {steps.map((s, i) => {
          const Icon = iconMap[s.icon] ?? Compass;
          return (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex w-[220px] shrink-0 flex-col gap-4 rounded-2xl hairline card-gradient p-5"
            >
              <div className="flex items-center justify-between">
                <span className="relative grid h-[52px] w-[52px] place-items-center rounded-full bg-background hairline">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                  <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-foreground text-[10px] font-bold text-background">
                    {i + 1}
                  </span>
                </span>
                <span className="font-mono text-[11px] tabular-nums text-fade">
                  {s.no}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-fade">
                  {s.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Vertical (mobile) */}
      <div className="relative mt-10 md:hidden">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline" />
        <div className="flex flex-col gap-5">
          {steps.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Compass;
            return (
              <Reveal key={s.no} direction="up" delay={i * 0.05}>
                <div className="relative pl-7">
                  <span className="absolute left-0 top-1 grid h-[15px] w-[15px] place-items-center rounded-full bg-foreground text-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-background" />
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground/[0.06]">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] tabular-nums text-fade">
                        Step {s.no}
                      </span>
                      <h3 className="text-base font-semibold tracking-tight">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-fade">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrap>
  );
}
