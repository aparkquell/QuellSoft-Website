import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("grid gap-4 md:auto-rows-[minmax(11rem,auto)] md:grid-cols-12", className)}>{children}</div>;
}

export function BentoTile({
  className,
  eyebrow,
  title,
  description,
  children,
}: {
  className?: string;
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.014))] p-5 text-[color:var(--foreground)] shadow-[var(--shadow-soft)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-6",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(94,143,255,0.12),transparent_35%),radial-gradient(circle_at_10%_100%,rgba(86,120,255,0.1),transparent_30%)] opacity-90" />
      <div className="relative flex h-full flex-col">
        {eyebrow ? <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--accent)]">{eyebrow}</p> : null}
        <h3 className="mt-4 font-display text-2xl tracking-tight text-balance">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-[color:var(--muted-foreground)]">{description}</p>
        {children ? <div className="mt-auto pt-5">{children}</div> : null}
      </div>
    </article>
  );
}
