"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Mail,
  Sparkles,
} from "lucide-react";
import { hero, profile, stats } from "@/data/profile";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32 md:pt-36"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* LEFT */}
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
              {hero.status}
            </span>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-fade"
            >
              {hero.label}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance text-[1.95rem] font-semibold leading-[1.08] tracking-tightest sm:text-5xl md:text-6xl lg:text-[4.1rem]"
            >
              <span className="text-gradient">Building Digital</span>
              <br />
              Experiences Through
              <br />
              <span className="inline-flex items-center gap-3">
                Code &amp; Creativity
                <motion.span
                  aria-hidden
                  initial={{ rotate: 0 }}
                  animate={reduce ? {} : { rotate: [0, 14, -8, 14, 0] }}
                  transition={{ duration: 1.2, delay: 1, repeat: Infinity, repeatDelay: 4 }}
                  className="hidden text-foreground/70 sm:inline-flex"
                >
                  <Sparkles className="h-7 w-7" strokeWidth={1.5} />
                </motion.span>
              </span>
              .
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-1.5 pt-1"
            >
              <span className="text-lg font-medium tracking-tight">
                {hero.name}
              </span>
              <span className="font-mono text-sm text-fade">
                {hero.title}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="max-w-xl text-pretty text-[15px] leading-relaxed text-fade sm:text-base"
            >
              {hero.description}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex flex-wrap items-center gap-2.5 pt-1"
          >
            <a
              href="#projects"
              className="no-tap focus-ring group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:gap-3"
            >
              Explore My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="no-tap focus-ring inline-flex items-center gap-2 rounded-full hairline px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.06]"
            >
              Let&apos;s Connect
            </a>
            <a
              href={profile.cvUrl}
              download
              className="no-tap focus-ring group inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-fade transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-3 pt-2"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
              Follow
            </span>
            <div className="h-px w-8 bg-hairline" />
            <div className="flex items-center gap-2">
              {[
                {
                  href: profile.github,
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: profile.instagram,
                  icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: `mailto:${profile.email}`,
                  icon: Mail,
                  label: "Email",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="no-tap focus-ring grid h-9 w-9 place-items-center rounded-full hairline text-fade transition-all hover:-translate-y-0.5 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — profile (floating) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[300px] sm:max-w-[330px]"
        >
          <div className="relative">
            {/* Soft ambient glow behind */}
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--foreground)_16%,transparent),transparent)] blur-2xl"
            />

            {/* Floating portrait */}
            <div className="float-slow">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem] hairline shadow-[0_34px_70px_-26px_rgba(0,0,0,0.75)]">
                <Image
                  src={profile.photoUrl}
                  alt={`${hero.name} — ${hero.title}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 80vw, 330px"
                  className="object-cover object-top"
                />
                {/* subtle top depth fade */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background/25 to-transparent" />
                {/* thin inner highlight ring */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-foreground/[0.06]" />
              </div>
            </div>

            {/* Floating info chips around the portrait */}
            <FloatingCard
              className="-left-5 top-8 sm:-left-9"
              delay={0.7}
              value={stats[0].value}
              label={stats[0].label}
            />
            <FloatingCard
              className="-right-3 top-1/3 sm:-right-7"
              delay={1.1}
              value={stats[3].value}
              label={stats[3].label}
              compact
            />
            <FloatingCard
              className="-left-2 bottom-12 sm:-left-5"
              delay={1.4}
              value={stats[1].value}
              label={stats[1].label}
            />
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl hairline bg-hairline md:grid-cols-4"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="group flex flex-col gap-1 bg-background p-4 transition-colors hover:bg-foreground/[0.03] sm:p-5"
          >
            <span className="text-2xl font-semibold tracking-tightest sm:text-3xl">
              {s.value}
            </span>
            <span className="text-xs font-medium text-foreground/80 sm:text-sm">
              {s.label}
            </span>
            <span className="hidden text-[11px] text-fade sm:block">{s.sub}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mx-auto mt-12 flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-fade transition-colors hover:text-foreground"
      >
        Scroll
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </motion.a>
    </section>
  );
}

function FloatingCard({
  className,
  value,
  label,
  delay = 0,
  compact,
}: {
  className?: string;
  value: string;
  label: string;
  delay?: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute hidden rounded-2xl glass p-3 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.5)] sm:block ${className ?? ""}`}
    >
      <div className="float-slow">
        <div className={`font-semibold tracking-tightest ${compact ? "text-base" : "text-lg"}`}>
          {value}
        </div>
        <div className="text-[10px] uppercase tracking-[0.15em] text-fade">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
