"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Users,
  GraduationCap,
  BadgeCheck,
  X,
  ZoomIn,
} from "lucide-react";
import { certifications, type CertType } from "@/data/certifications";
import { SectionHeading, SectionWrap } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type Filter = "All" | CertType;

const typeMeta: Record<CertType, { icon: typeof Award; label: string }> = {
  Certification: { icon: BadgeCheck, label: "Certification" },
  Training: { icon: Award, label: "Training" },
  Workshop: { icon: Users, label: "Workshop" },
  Course: { icon: BookOpen, label: "Course" },
};

const filters: Filter[] = ["All", "Certification", "Training", "Workshop", "Course"];

export function CertificationsSection() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [lightbox, setLightbox] = React.useState<string | null>(null);

  const counts = React.useMemo(() => {
    const c: Record<string, number> = { All: certifications.length };
    for (const cert of certifications) c[cert.type] = (c[cert.type] ?? 0) + 1;
    return c;
  }, []);

  const list = React.useMemo(
    () =>
      filter === "All"
        ? certifications
        : certifications.filter((c) => c.type === filter),
    [filter],
  );

  return (
    <SectionWrap id="certifications">
      <SectionHeading
        index="06"
        eyebrow="Certifications & Training"
        title="Learning Never Stops."
        description="A mix of competency certifications, intensive training, workshops, and self-paced courses — each backed by real certificates where available."
      />

      {/* Filter tabs */}
      <Reveal direction="up" delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = filter === f;
            const count = counts[f] ?? 0;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "no-tap focus-ring inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                  active
                    ? "bg-foreground text-background"
                    : "hairline text-fade hover:text-foreground",
                )}
              >
                {f}
                <span
                  className={cn(
                    "font-mono text-[10px] tabular-nums",
                    active ? "text-background/60" : "text-fade",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Grid */}
      <motion.div layout className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((cert, i) => {
            const meta = typeMeta[cert.type];
            const Icon = meta.icon;
            return (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.02 }}
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl hairline card-gradient"
              >
                {/* Certificate image */}
                {cert.image ? (
                  <button
                    type="button"
                    onClick={() => setLightbox(cert.image!)}
                    className="no-tap focus-ring relative block aspect-[1.414/1] w-full overflow-hidden border-b border-hairline"
                    aria-label={`View certificate: ${cert.title}`}
                  >
                    <Image
                      src={cert.image}
                      alt={`Certificate — ${cert.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full glass px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/80">
                      {meta.label}
                    </span>
                    <span className="absolute bottom-3 right-3 grid h-8 w-8 translate-y-1 place-items-center rounded-full glass text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ZoomIn className="h-3.5 w-3.5" />
                    </span>
                  </button>
                ) : (
                  <div className="flex items-start justify-between p-5 pb-0">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground/[0.06] text-foreground">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <span className="rounded-full hairline px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-fade">
                      {meta.label}
                    </span>
                  </div>
                )}

                {/* Body */}
                <div className="flex flex-1 flex-col gap-1 p-5">
                  <h3 className="text-[15px] font-semibold leading-snug tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-fade">
                    {cert.issuer}
                  </p>
                  <div className="mt-auto flex items-center gap-1.5 pt-3 font-mono text-[11px] tabular-nums text-fade">
                    <GraduationCap className="h-3 w-3" />
                    {cert.date ?? "Self-paced"}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setLightbox(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-2xl hairline shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
            >
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="no-tap focus-ring absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full glass text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[1.414/1] w-full bg-background">
                <Image
                  src={lightbox}
                  alt="Certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrap>
  );
}
