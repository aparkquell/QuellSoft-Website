"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { BentoGrid, BentoTile } from "./bento-grid";

const serviceTags = ["Web Application Development", "AI/ML Development Services", "Data Warehouse Services"];

const workflowNodes = [
  { label: "Research & Planning", x: 94, y: 88 },
  { label: "Designing Strategy", x: 232, y: 74 },
  { label: "Clean Coding", x: 370, y: 118 },
  { label: "Launch & Maintenance", x: 516, y: 182 },
];

const deliverables = [
  {
    eyebrow: "01",
    title: "Strategy",
    description: "Start with the current workflow and the decisions that shape it.",
    className: "md:col-span-6 md:row-span-2",
  },
  {
    eyebrow: "02",
    title: "Design",
    description: "Turn the system into screens and flows people can use quickly.",
    className: "md:col-span-3",
  },
  {
    eyebrow: "03",
    title: "Build",
    description: "Deliver in increments and keep the structure maintainable.",
    className: "md:col-span-3",
  },
  {
    eyebrow: "04",
    title: "Launch support",
    description: "Tune, support, and extend the system once it is in the wild.",
    className: "md:col-span-6",
  },
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden pt-2">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_20%,rgba(94,143,255,0.22),transparent_28%),radial-gradient(circle_at_25%_82%,rgba(86,120,255,0.14),transparent_26%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_84%)] bg-[linear-gradient(transparent_0,transparent_31%,rgba(255,255,255,0.03)_32%,transparent_33%)] bg-[length:100%_72px]" />

      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative rounded-[var(--radius-shell)] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.014))] p-6 shadow-[var(--shadow-ambient)] sm:p-8 lg:p-10 xl:pr-16"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-shell)] bg-[radial-gradient(circle_at_80%_25%,rgba(94,143,255,0.12),transparent_32%),radial-gradient(circle_at_18%_88%,rgba(86,120,255,0.1),transparent_28%)]" />
          <div className="relative space-y-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[color:var(--card)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-foreground)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
              AI-first engineering studio
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-[clamp(2.9rem,5.9vw,5rem)] leading-[0.9] tracking-tight text-balance">
                AI-first software systems, workflow automation, and vertical solutions.
              </h1>
              <p className="max-w-2xl text-[0.98rem] leading-8 text-[color:var(--muted-foreground)] sm:text-[1.02rem]">
                Quell Soft shapes the interfaces, flows, and digital infrastructure that help teams in healthcare, logistics, and B2B software move faster with less friction.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact-us">Start a project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/industries">Explore industries</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {serviceTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[color:var(--muted-foreground)] shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative z-20 xl:-ml-12 xl:translate-y-6">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="relative overflow-visible"
          >
            <div className="relative h-[18rem] sm:h-[19rem]">
              <div className="pointer-events-none absolute inset-x-10 bottom-8 top-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(122,207,212,0.18),transparent_64%)] blur-3xl" />
              <motion.svg
                viewBox="0 0 640 320"
                fill="none"
                className="absolute inset-0 h-full w-full overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="workflow-stroke" x1="86" y1="72" x2="520" y2="184" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5e8fff" stopOpacity="0.95" />
                    <stop offset="0.6" stopColor="#5e8fff" stopOpacity="0.45" />
                    <stop offset="1" stopColor="#86b0ff" stopOpacity="0.9" />
                  </linearGradient>
                  <radialGradient id="node-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(520 184) rotate(90) scale(42 42)">
                    <stop stopColor="#5e8fff" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#5e8fff" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <motion.path
                  d="M 94 88 C 132 88, 154 74, 232 74 S 332 116, 370 118 S 452 178, 516 182"
                  stroke="url(#workflow-stroke)"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="260 260"
                  initial={{ strokeDashoffset: 260, opacity: 0.55 }}
                  whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.35, margin: "-80px" }}
                  transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.1 }}
                />
                <motion.path
                  d="M 232 74 C 280 74, 302 92, 332 98"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="120 120"
                  initial={{ strokeDashoffset: 120, opacity: 0.35 }}
                  whileInView={{ strokeDashoffset: 0, opacity: 0.8 }}
                  viewport={{ once: true, amount: 0.35, margin: "-80px" }}
                  transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
                />

                {workflowNodes.map((node, index) => (
                  <g key={node.label}>
                    <circle cx={node.x} cy={node.y} r="24" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
                    <circle cx={node.x} cy={node.y} r="13" fill="rgba(10,16,20,0.92)" stroke="rgba(122,207,212,0.56)" />
                    <circle cx={node.x} cy={node.y} r="6" fill={index === workflowNodes.length - 1 ? "rgba(134,176,255,0.92)" : "rgba(94,143,255,0.92)"} />
                    <text
                      x={node.x}
                      y={node.y + 44}
                      textAnchor="middle"
                      fill="rgba(241,247,246,0.7)"
                      className="text-[12px] font-medium tracking-[0.18em]"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
                <circle cx="516" cy="182" r="34" fill="url(#node-glow)" />
              </motion.svg>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            whileHover={{ y: -3 }}
            className="-mt-12"
          >
            <Card className="relative overflow-hidden rounded-[var(--radius-shell)] border-white/10 bg-[linear-gradient(180deg,rgba(8,14,18,0.96),rgba(12,18,24,0.92))] shadow-[0_28px_90px_rgba(0,0,0,0.46)] backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(94,143,255,0.78),rgba(134,176,255,0.62),transparent)]" />
              <div className="border-b border-white/10 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Product moment</p>
                    <h2 className="mt-2 text-lg text-white">Research-led delivery that stays coherent.</h2>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="max-w-md text-sm leading-6 text-white/70">
                  Research & Planning, Designing Strategy, Clean Coding, and Launch & Maintenance stay linked from first brief to support.
                </p>
                <span className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/70">
                  Web Application Development
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="mt-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Primary deliverables</p>
          <h2 className="mt-3 font-display text-2xl tracking-tight text-balance sm:text-3xl">
            The work is shaped as a system, not a checklist.
          </h2>
        </div>

        <BentoGrid className="mt-6">
          {deliverables.map((item) => (
            <BentoTile key={item.title} eyebrow={item.eyebrow} title={item.title} description={item.description} className={item.className} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
