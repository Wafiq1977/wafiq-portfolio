"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading, SectionWrap } from "./section-heading";
import { Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name (min 2 characters)."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please add a subject (min 3 characters)."),
  message: z.string().min(10, "Please write a message (min 10 characters)."),
});

type FormValues = z.infer<typeof schema>;

const contactInfo = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: "Location", value: profile.location, href: undefined, icon: MapPin },
  { label: "GitHub", value: `github.com/${profile.githubHandle}`, href: profile.github, icon: Github },
  { label: "Instagram", value: `@${profile.instagramHandle}`, href: profile.instagram, icon: Instagram },
];

export function ContactSection() {
  const { toast } = useToast();
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setStatus("success");
      toast({
        title: "Message sent",
        description: data.message ?? "Thanks for reaching out — I'll get back to you soon.",
      });
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Could not send your message. Please try emailing me directly.",
      });
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrap id="contact">
      <SectionHeading
        index="09"
        eyebrow="Contact"
        title="Have a Project in Mind?"
        description="Let's build something meaningful together."
      />

      <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Info */}
        <div className="flex flex-col gap-4">
          <Reveal direction="up">
            <div className="rounded-2xl hairline card-gradient p-6">
              <p className="text-pretty text-[15px] leading-relaxed text-foreground/85">
                Open to job opportunities, project collaboration, freelance work, or
                discussions about technology and software development.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="no-tap focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:gap-3"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.08}>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl hairline bg-hairline sm:grid-cols-2">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="flex items-start gap-3 bg-background p-4 transition-colors hover:bg-foreground/[0.03]">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-foreground/[0.06] text-foreground">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-fade">
                        {c.label}
                      </div>
                      <div className="mt-0.5 truncate text-[13px] font-medium">
                        {c.value}
                      </div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="no-tap focus-ring"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal direction="up" delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex h-full flex-col gap-4 rounded-2xl hairline card-gradient p-6 sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputCls(!!errors.name)}
                />
              </Field>
              <Field label="Email Address" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputCls(!!errors.email)}
                />
              </Field>
            </div>

            <Field label="Subject" error={errors.subject?.message}>
              <input
                {...register("subject")}
                type="text"
                placeholder="What's this about?"
                className={inputCls(!!errors.subject)}
              />
            </Field>

            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className={cn(inputCls(!!errors.message), "min-h-[120px] resize-y")}
              />
            </Field>

            <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] text-fade">
                Your details are only used to reply to your message.
              </p>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={cn(
                  "no-tap focus-ring group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all",
                  status === "success"
                    ? "bg-foreground/15 text-foreground"
                    : "bg-foreground text-background hover:gap-3",
                  status === "loading" && "cursor-wait opacity-80",
                )}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "loading" ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </motion.span>
                  ) : status === "success" ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Sent
                    </motion.span>
                  ) : status === "error" ? (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <AlertCircle className="h-4 w-4" />
                      Try again
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </SectionWrap>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "no-tap focus-ring w-full rounded-xl border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-fade transition-colors",
    hasError
      ? "border-destructive/50 focus:border-destructive"
      : "border-hairline focus:border-foreground/40",
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fade">
        {label}
      </span>
      {children}
      {error && (
        <span className="flex items-center gap-1.5 text-[12px] text-destructive">
          <AlertCircle className="h-3 w-3" />
          {error}
        </span>
      )}
    </label>
  );
}
