"use client";

import Image from "next/image";
import { ArrowUp, Github, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { profile, nav } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_0.8fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full">
                <Image
                  src="/logo.png"
                  alt="Wafiq logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="font-sans text-base font-semibold tracking-tightest">
                {profile.brand}
              </span>
            </a>
            <p className="max-w-xs text-pretty text-[13px] leading-relaxed text-fade">
              Designed &amp; developed by{" "}
              <span className="font-medium text-foreground/90">{profile.name}</span>{" "}
              — Full Stack Developer &amp; Project Manager based in {profile.location}.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="no-tap focus-ring grid h-9 w-9 place-items-center rounded-full hairline text-fade transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="no-tap focus-ring grid h-9 w-9 place-items-center rounded-full hairline text-fade transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="no-tap focus-ring grid h-9 w-9 place-items-center rounded-full hairline text-fade transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
              Navigate
            </span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="no-tap text-[13px] text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fade">
              Get in touch
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="no-tap focus-ring group inline-flex w-fit items-center gap-1.5 text-sm font-medium transition-all hover:gap-2.5"
            >
              {profile.email}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="no-tap focus-ring group inline-flex w-fit items-center gap-1.5 text-sm text-fade transition-colors hover:text-foreground"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-hairline pt-6 sm:flex-row">
          <p className="font-mono text-[11px] text-fade">
            © 2026 {profile.name}. All Rights Reserved.
          </p>
          <p className="font-mono text-[11px] text-fade">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
