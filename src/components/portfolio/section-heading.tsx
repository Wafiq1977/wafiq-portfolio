import * as React from "react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  index?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  index,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal direction="up">
          <div className="flex items-center gap-3">
            {index && (
              <span className="font-mono text-[11px] tabular-nums text-fade">
                {index}
              </span>
            )}
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-fade">
              <span className="h-1 w-1 rounded-full bg-foreground/60" />
              {eyebrow}
            </span>
          </div>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.08] tracking-tightest sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.1}>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-fade sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function SectionWrap({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 md:py-32",
        className,
      )}
    >
      {children}
    </section>
  );
}
