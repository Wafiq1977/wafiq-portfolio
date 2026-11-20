"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export function BackgroundFX() {
  const reduce = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, i) => ({
        id: i,
        left: `${(i * 13 + 7) % 100}%`,
        top: `${(i * 27 + 12) % 90}%`,
        size: 2 + (i % 3),
        delay: i * 1.3,
        dur: 9 + (i % 4) * 3,
      })),
    [],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Subtle grid with radial fade */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-[0.5]" />

      {/* Ambient top glow */}
      <div className="absolute inset-x-0 top-[-20%] h-[60vh] ambient-glow blur-2xl" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,transparent_55%,color-mix(in_oklab,var(--background)_85%,black)_100%)]" />

      {/* Floating particles */}
      {!reduce &&
        particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-foreground/[0.06]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -22, 0], x: [0, 8, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Noise overlay */}
      <div className="noise absolute inset-0" />
    </div>
  );
}
