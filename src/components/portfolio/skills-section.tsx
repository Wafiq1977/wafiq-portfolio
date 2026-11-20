"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Wrench,
  FileSpreadsheet,
  Sparkles,
  Webhook,
  Smartphone,
  Palette,
  DatabaseZap,
  Bug,
  Rocket,
  Bot,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { skillCategories, levelMeta, softSkills, type SkillLevel } from "@/data/skills";
import { skillIconMap } from "@/data/skill-icons";
import { OfficeMark } from "./office-mark";
import { SectionHeading, SectionWrap } from "./section-heading";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { cn } from "@/lib/utils";

const catIconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Database,
  Wrench,
  FileSpreadsheet,
  Sparkles,
};

const lucideIconMap: Record<string, LucideIcon> = {
  Webhook,
  Database,
  Smartphone,
  Palette,
  DatabaseZap,
  Bug,
  Rocket,
  Bot,
  Terminal,
};

/* Render a skill's technology icon (brand SVG / Office mark / lucide). */
function SkillTechIcon({ name }: { name: string }) {
  const ic = skillIconMap[name];
  if (!ic) return null;
  const cls = "h-[15px] w-[15px] shrink-0";
  const color = `#${ic.hex}`;
  if (ic.kind === "si" && ic.path) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill={color} aria-hidden>
        <path d={ic.path} />
      </svg>
    );
  }
  if (ic.kind === "custom" && ic.custom) {
    return <OfficeMark kind={ic.custom} className={cls} />;
  }
  if (ic.kind === "lucide" && ic.lucide) {
    const Icon = lucideIconMap[ic.lucide];
    return Icon ? (
      <Icon className={cls} style={{ color }} strokeWidth={2} aria-hidden />
    ) : null;
  }
  return null;
}

const levelOrder: Record<SkillLevel, number> = {
  experienced: 3,
  proficient: 2,
  exploring: 1,
};

function LevelMeter({ level }: { level: SkillLevel }) {
  const filled = levelOrder[level];
  return (
    <span className="flex items-center gap-1" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            "h-1 w-1 rounded-full",
            i < filled ? "bg-foreground" : "bg-foreground/15",
          )}
        />
      ))}
    </span>
  );
}

const levelStyles: Record<SkillLevel, string> = {
  experienced: "border-foreground/20 bg-foreground/[0.04]",
  proficient: "border-hairline bg-foreground/[0.02]",
  exploring: "border-dashed border-hairline-strong bg-transparent",
};

export function SkillsSection() {
  return (
    <SectionWrap id="skills">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="Technologies I Work With."
        description="An honest breakdown of my stack — grouped by category and rated against three real levels of mastery."
      />

      {/* Legend */}
      <Reveal direction="up" delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl hairline p-4 sm:p-5">
          {(Object.keys(levelMeta) as SkillLevel[]).map((lvl) => (
            <div key={lvl} className="flex items-center gap-2.5">
              <LevelMeter level={lvl} />
              <div className="flex flex-col">
                <span className="text-[13px] font-medium">{levelMeta[lvl].label}</span>
                <span className="text-[11px] text-fade">{levelMeta[lvl].description}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Category cards */}
      <Stagger className="mt-6 grid gap-4 lg:grid-cols-2" gap={0.06}>
        {skillCategories.map((cat) => (
          <StaggerItem key={cat.id} direction="up">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col gap-4 rounded-2xl hairline card-gradient p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground/[0.06] text-foreground">
                    {(() => {
                      const Icon = catIconMap[cat.icon] ?? Code2;
                      return <Icon className="h-5 w-5" strokeWidth={1.7} />;
                    })()}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-fade">{cat.description}</p>
                  </div>
                </div>
                <span className="font-mono text-[11px] tabular-nums text-fade">
                  {cat.skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    title={s.note ? `${levelMeta[s.level].label} — ${s.note}` : levelMeta[s.level].label}
                    className={cn(
                      "group inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[13px] font-medium transition-colors",
                      levelStyles[s.level],
                    )}
                  >
                    <SkillTechIcon name={s.name} />
                    {s.name}
                    <LevelMeter level={s.level} />
                  </span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Soft skills */}
      <Reveal direction="up" delay={0.1}>
        <div className="mt-6 rounded-2xl hairline p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold tracking-tight sm:text-lg">
              Soft Skills
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fade">
              Beyond the tooling
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <span
                key={s.name}
                title={s.desc}
                className="inline-flex items-center gap-2 rounded-lg hairline bg-foreground/[0.02] px-3 py-1.5 text-[13px]"
              >
                <span className="h-1 w-1 rounded-full bg-foreground/50" />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionWrap>
  );
}
