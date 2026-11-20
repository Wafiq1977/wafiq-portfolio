"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("home");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
              scrolled
                ? "glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]"
                : "border border-transparent",
            )}
          >
            <a
              href="#home"
              className="no-tap group flex items-center gap-2"
              aria-label="Home"
            >
              <Image
                src="/logo.png"
                alt="Wafiq logo"
                width={36}
                height={36}
                priority
                className="h-9 w-9 object-contain"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = active === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "no-tap relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-fade hover:text-foreground",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-foreground/[0.07]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle className="hidden sm:grid" />
              <a
                href="#contact"
                className="no-tap focus-ring group hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-all hover:gap-2.5 sm:inline-flex"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Mobile toggle */}
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="no-tap focus-ring grid h-9 w-9 place-items-center rounded-full hairline text-foreground lg:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="x"
                      initial={{ opacity: 0, rotate: -40 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 40 }}
                    >
                      <X className="h-4 w-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0, rotate: 40 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -40 }}
                    >
                      <Menu className="h-4 w-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute inset-x-0 top-0 mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-10 pt-24"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {nav.map((item, i) => {
                const id = item.href.replace("#", "");
                const isActive = active === id;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    className={cn(
                      "flex items-center justify-between border-b border-hairline py-4 text-2xl font-semibold tracking-tightest transition-colors",
                      isActive ? "text-foreground" : "text-fade",
                    )}
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </motion.a>
                );
              })}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="no-tap focus-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
