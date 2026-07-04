"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SignalPoint = {
  label: string;
  x: number;
  y: number;
};

export function AnimatedSignal({
  eyebrow,
  title,
  description,
  points,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: SignalPoint[];
  className?: string;
}) {
  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-shell)] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.016))] p-5 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-6",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(94,143,255,0.12),transparent_36%),radial-gradient(circle_at_20%_80%,rgba(134,176,255,0.08),transparent_32%)]" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">{eyebrow}</p>
          <h3 className="mt-2 font-display text-2xl tracking-tight text-balance">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[color:var(--muted-foreground)]">{description}</p>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(94,143,255,0.35),transparent)]" />
        <svg viewBox="0 0 560 220" className="h-48 w-full overflow-visible sm:h-56" aria-hidden="true">
          <defs>
            <linearGradient id="signal-stroke" x1="40" y1="30" x2="500" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5e8fff" stopOpacity="0.95" />
              <stop offset="1" stopColor="#86b0ff" stopOpacity="0.75" />
            </linearGradient>
          </defs>
          <motion.path
            d={path}
            fill="none"
            stroke="url(#signal-stroke)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="420 420"
            initial={{ strokeDashoffset: 420, opacity: 0.6 }}
            whileInView={{ strokeDashoffset: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35, margin: "-80px" }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
          />
          {points.map((point, index) => (
            <g key={point.label}>
              <circle cx={point.x} cy={point.y} r="18" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
              <circle cx={point.x} cy={point.y} r="10" fill="rgba(10,16,20,0.96)" stroke="rgba(94,143,255,0.65)" />
              <circle cx={point.x} cy={point.y} r="5" fill={index === points.length - 1 ? "rgba(134,176,255,0.95)" : "rgba(94,143,255,0.95)"} />
              <text
                x={point.x}
                y={point.y + 36}
                textAnchor="middle"
                fill="rgba(241,247,246,0.68)"
                className="text-[11px] font-medium tracking-[0.18em]"
              >
                {point.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </motion.div>
  );
}
