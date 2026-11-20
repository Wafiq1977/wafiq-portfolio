"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const RING_R = 46;
const RING_C = 2 * Math.PI * RING_R;
const DURATION = 2.2; // total visible time (s) — standard splash length

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const already = sessionStorage.getItem("splashShown");
    sessionStorage.setItem("splashShown", "1");
    const t = setTimeout(
      () => setShow(false),
      already ? 60 : reduce ? 700 : DURATION * 1000,
    );
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#080808]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient background */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,#ffffff_10%,transparent),transparent)] blur-3xl" />

          {/* Centered brand block */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo + ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid h-[180px] w-[180px] place-items-center sm:h-[210px] sm:w-[210px]"
            >
              {/* defined disc backdrop for logo contrast */}
              <div className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,#ffffff_8%,#0e0e0e),#0a0a0a)] ring-1 ring-foreground/[0.08]" />

              {/* drawing ring */}
              <svg
                className="absolute inset-0 h-full w-full -rotate-90 text-foreground"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="50"
                  cy="50"
                  r={RING_R}
                  stroke="currentColor"
                  strokeOpacity="0.14"
                  strokeWidth="1.2"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r={RING_R}
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  initial={{ strokeDashoffset: RING_C }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    duration: reduce ? 0.4 : 1.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15,
                  }}
                />
              </svg>

              {/* the logo — white emblem, subtle glow halo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="relative"
                style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.45))" }}
              >
                <Image
                  src="/logo.png"
                  alt="Wafiq logo"
                  width={150}
                  height={150}
                  priority
                  className="h-[96px] w-[96px] object-contain sm:h-[116px] sm:w-[116px]"
                />
              </motion.div>
            </motion.div>

            {/* Brand text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-2.5"
            >
              <span className="font-sans text-xl font-semibold tracking-[0.36em] text-foreground sm:text-2xl">
                WAFIQ.
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 sm:text-[11px]">
                Full Stack Developer &amp; Project Manager
              </span>
            </motion.div>

            {/* Clear progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="relative h-[3px] w-48 overflow-hidden rounded-full bg-foreground/12 sm:w-56"
              aria-hidden
            >
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-foreground"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: reduce ? 0.4 : 1.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.25,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
