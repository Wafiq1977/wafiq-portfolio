"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: React.ElementType;
}

const offset = 28;

function getVariants(direction: Direction): Variants {
  switch (direction) {
    case "up":
      return {
        hidden: { opacity: 0, y: offset },
        visible: { opacity: 1, y: 0 },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -offset },
        visible: { opacity: 1, y: 0 },
      };
    case "left":
      return {
        hidden: { opacity: 0, x: -offset },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: offset },
        visible: { opacity: 1, x: 0 },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1 },
      };
    case "fade":
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.25,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;
  const variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : getVariants(direction);

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={variants}
      transition={{
        duration: reduce ? 0.3 : duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Comp>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
  once?: boolean;
}

export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
  once = true,
}: StaggerProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: { opacity: reduce ? 0 : 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: reduce ? 0 : gap, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduce = useReducedMotion();
  const variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : getVariants(direction);
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration: reduce ? 0.3 : 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
