"use client";

import * as React from "react";
import Image from "next/image";
import { Reveal } from "./reveal";
import {
  techRow1,
  techRow2,
  techRow3,
  brandLogos,
  type TechLogo,
  type CustomLogo,
} from "@/data/tech-logos";
import { OfficeMark } from "./office-mark";
import { cn } from "@/lib/utils";

/* ---------- Generic seamless marquee row ---------- */
function MarqueeRow({
  children,
  reverse,
  speed,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}) {
  const speedClass =
    speed === "slow" ? "marquee-slow" : speed === "fast" ? "marquee-fast" : "";
  return (
    <div
      className={cn(
        "marquee-pause relative w-full overflow-hidden",
        className,
      )}
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background via-background/80 to-transparent sm:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background via-background/80 to-transparent sm:w-48" />
      <div
        className={cn(
          "flex w-max items-center",
          reverse ? "marquee-rev" : "marquee",
          speedClass,
        )}
      >
        {/* duplicate the set once for a seamless loop */}
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------- Tech logo item ---------- */
function TechItem({ logo }: { logo: TechLogo }) {
  const iconClass =
    "h-6 w-6 shrink-0 opacity-85 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 sm:h-7 sm:w-7";
  return (
    <div className="group flex items-center gap-2.5 px-5 sm:px-7">
      {logo.custom ? (
        <OfficeMark kind={logo.custom} className={iconClass} />
      ) : (
        <svg
          viewBox="0 0 24 24"
          className={iconClass}
          style={{ color: `#${logo.hex}`, fill: "currentColor" }}
          aria-hidden
        >
          <path d={logo.path} fill="currentColor" />
        </svg>
      )}
      <span className="whitespace-nowrap text-sm font-medium tracking-tight text-foreground/55 transition-colors duration-300 group-hover:text-foreground sm:text-[15px]">
        {logo.name}
      </span>
    </div>
  );
}

/* ---------- Brand logo item ---------- */
function BrandItem({
  src,
  name,
  note,
}: {
  src: string;
  name: string;
  note: string;
}) {
  return (
    <div className="group flex items-center gap-3 px-7 sm:px-10">
      <div className="grid h-12 w-12 shrink-0 place-items-center sm:h-16 sm:w-16">
        <Image
          src={src}
          alt={`${name} logo`}
          width={64}
          height={64}
          className="h-11 w-11 object-contain opacity-85 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 sm:h-14 sm:w-14"
        />
      </div>
      <div className="flex flex-col">
        <span className="whitespace-nowrap text-sm font-medium tracking-tight text-foreground/65 transition-colors duration-300 group-hover:text-foreground sm:text-[15px]">
          {name}
        </span>
        <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-fade">
          {note}
        </span>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
export function MarqueeSection() {
  return (
    <section id="stack" className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal direction="up">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-fade">
            <span className="h-1 w-1 rounded-full bg-foreground/60" />
            Tech Stack &amp; Collaborators
          </span>
          <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tightest sm:text-3xl md:text-4xl">
            Tools, technologies &amp; brands I build with.
          </h2>
          <p className="max-w-xl text-pretty text-[14px] leading-relaxed text-fade sm:text-[15px]">
            A continuous reel of the languages, frameworks, databases,
            platforms, and productivity tools I use — alongside institutions and
            brands I&apos;ve collaborated with.
          </p>
        </div>
      </Reveal>

      {/* Tech row 1 — left */}
      <Reveal direction="up" delay={0.08}>
        <div className="mt-10 rounded-2xl hairline card-gradient py-5 sm:py-6">
          <MarqueeRow>
            {techRow1.map((t) => (
              <TechItem key={t.name} logo={t} />
            ))}
          </MarqueeRow>
        </div>
      </Reveal>

      {/* Tech row 2 — right */}
      <Reveal direction="up" delay={0.12}>
        <div className="mt-3 rounded-2xl hairline card-gradient py-5 sm:py-6">
          <MarqueeRow reverse>
            {techRow2.map((t) => (
              <TechItem key={t.name} logo={t} />
            ))}
          </MarqueeRow>
        </div>
      </Reveal>

      {/* Tech row 3 — productivity & office (left) */}
      <Reveal direction="up" delay={0.14}>
        <div className="mt-3 rounded-2xl hairline card-gradient py-5 sm:py-6">
          <MarqueeRow>
            {techRow3.map((t) => (
              <TechItem key={t.name} logo={t} />
            ))}
          </MarqueeRow>
        </div>
      </Reveal>

      {/* Brands / institutions */}
      <Reveal direction="up" delay={0.16}>
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-hairline" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
            Institutions &amp; brands collaborated with
          </span>
          <div className="h-px flex-1 bg-hairline" />
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <div className="mt-6 rounded-2xl hairline card-gradient py-6 sm:py-8">
          <MarqueeRow speed="slow">
            {brandLogos.map((b) => (
              <BrandItem key={b.name} src={b.src} name={b.name} note={b.note} />
            ))}
          </MarqueeRow>
        </div>
      </Reveal>
    </section>
  );
}
