import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Users } from "lucide-react";
import type { ContentDoc } from "@/lib/content";
import type { AuditPage } from "@/lib/audit";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ContactForm } from "./contact-form";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { BentoGrid, BentoTile } from "./bento-grid";
import { AnimatedSignal } from "./animated-signal";
import { Reveal } from "./reveal";
import { HomeHero } from "./home-hero";

const services = [
  {
    title: "Workflow automation",
    description: "Reduce repetitive work with systems that route, enrich, and organize tasks.",
  },
  {
    title: "AI engineering",
    description: "Apply AI where it improves throughput, consistency, and speed to decision.",
  },
  {
    title: "Web platforms",
    description: "Build public and internal systems with a stronger structure and faster delivery.",
  },
  {
    title: "Data foundations",
    description: "Shape warehouses and reporting layers that actually match how teams operate.",
  },
  {
    title: "Vertical solutions",
    description: "Adapt the product to healthcare, logistics, and other operationally complex domains.",
  },
  {
    title: "Legacy modernization",
    description: "Preserve SEO equity while turning old systems into something maintainable.",
  },
];

const workflow = [
  { step: "Discover", copy: "Audit current state, incentives, risks, and the real user journey." },
  { step: "Architect", copy: "Design the system, data flow, and interaction model before building." },
  { step: "Build", copy: "Deliver the product in increments with measurable checkpoints." },
  { step: "Operate", copy: "Tune, support, and extend the system once it is in the wild." },
];

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    body: "Clinical workflow automation, interoperability, and patient-facing tooling with guardrails.",
    bullets: ["Scheduling and intake", "Data handoff", "Provider tooling", "Patient portals"],
    summary:
      "The healthcare page is framed around everyday operational work: intake, coordination, and better handoffs between people and systems.",
  },
  {
    id: "logistics",
    title: "Logistics",
    body: "Relocation and operations teams need clarity, throughput, and fewer handoff mistakes.",
    bullets: ["Lead routing", "Status tracking", "Ops dashboards", "Service scoping"],
    summary:
      "A fit for moving and logistics teams that need better status visibility and less manual follow-up.",
  },
  {
    id: "software",
    title: "B2B Software",
    body: "Product and platform teams need fast iteration without losing structure or quality.",
    bullets: ["MVP planning", "Internal tools", "API integration", "Launch support"],
    summary:
      "For teams that need product thinking, engineering discipline, and room to scale the system later.",
  },
];

const caseStudies = [
  {
    title: "Tippetrichardson",
    description: "Modernized presentation and clarified the path from interest to inquiry.",
    href: "/case-studies/tippetrichardson",
  },
  {
    title: "Khimji Relocations",
    description: "Reframed service communication for a trust-heavy buying process.",
    href: "/case-studies/khimji-relocations",
  },
  {
    title: "Earth Relocation",
    description: "Cleaned up structure and improved the credibility of the offering.",
    href: "/case-studies/earth-relocation",
  },
];

const blogPosts = [
  {
    title: "AI Workflow Automation for Healthcare Teams",
    description: "A practical starting point for a regulated setting.",
    href: "/blog/ai-workflow-automation-for-healthcare",
  },
  {
    title: "How to Modernize a Service Business Website Without Losing Leads",
    description: "A guide for preserving continuity during a redesign.",
    href: "/blog/how-to-modernize-a-service-business-website",
  },
  {
    title: "SEO-Friendly Content Architecture for an AI-First Firm",
    description: "Search structure that supports the new positioning.",
    href: "/blog/seo-friendly-content-architecture",
  },
];

const homeSpotlights = [
  {
    title: "Direction",
    copy: "Positioning, structure, and a path that supports the next decision.",
    accent: "from-[rgba(94,143,255,0.22)] to-transparent",
  },
  {
    title: "Delivery",
    copy: "Web platforms, automation, and internal tools that hold up after launch.",
    accent: "from-[rgba(134,176,255,0.24)] to-transparent",
  },
  {
    title: "Industries",
    copy: "Healthcare, logistics, and B2B software pages with a sharper point of view.",
    accent: "from-[rgba(255,255,255,0.14)] to-transparent",
  },
];

const healthcareModes = [
  {
    id: "workflow",
    label: "Workflow",
    title: "Make the day feel lighter for staff and coordinators.",
    body: "We look for handoffs, bottlenecks, and repeat tasks that can be simplified without removing the human judgment healthcare still needs.",
    points: ["Faster intake and scheduling", "Cleaner task routing", "Less context switching", "Calmer screens under pressure"],
  },
  {
    id: "data",
    label: "Data",
    title: "Normalize the information trail without hiding the source of truth.",
    body: "The goal is not to create more dashboards. It is to make the same record usable across roles, tools, and moments of care.",
    points: ["Better interoperability", "Fewer duplicate entries", "Safer summaries", "Clearer audit paths"],
  },
  {
    id: "experience",
    label: "Experience",
    title: "Give each role the interface it actually needs.",
    body: "Front desk, coordinator, provider, and patient journeys do not need the same screen. Role-aware design makes the system easier to remember later.",
    points: ["Role-specific views", "Simpler patient touchpoints", "Accessible patterns", "Confidence under time pressure"],
  },
  {
    id: "delivery",
    label: "Delivery",
    title: "Ship in smaller steps, then prove the change is useful.",
    body: "The strongest healthcare work starts with one workflow, one handoff, and one release that is useful on its own.",
    points: ["Current-state mapping", "Small release planning", "Guardrailed rollout", "Measurable follow-up"],
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted-foreground)]">{description}</p> : null}
    </div>
  );
}

export function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <HomeHero />

      <section className="mt-8">
        <Reveal>
          <BentoGrid>
            {homeSpotlights.map((spotlight, index) => (
              <BentoTile
                key={spotlight.title}
                className={index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-4" : "md:col-span-3"}
                eyebrow="Perspective"
                title={spotlight.title}
                description={spotlight.copy}
              >
                {index === 0 ? (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {["Systems", "UX", "Automation", "Industries"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[color:var(--muted-foreground)]">
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}
              </BentoTile>
            ))}
          </BentoGrid>
        </Reveal>
      </section>

      <section className="mt-24 grid gap-6 xl:grid-cols-12 xl:items-start">
        <Reveal className="xl:col-span-4">
          <div>
            <SectionHeader
              eyebrow="How we work"
              title="How we work with clients"
              description="Discovery, design, delivery, and launch support are framed around the next useful release."
            />
            <div className="mt-6 rounded-[1.75rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">Typical deliverables</p>
                <Users className="h-5 w-5 text-[color:var(--accent)]" />
              </div>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                Strategy, design, development, QA, and launch support are all part of the way Quell Soft works with clients.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="xl:col-span-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {workflow.map((item, index) => (
              <div key={item.step} className="grid gap-4 rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--card)] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] font-display text-xl">
                    0{index + 1}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">{item.step}</p>
                </div>
                <div>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mt-24">
        <Reveal>
          <SectionHeader
            eyebrow="Industries"
            title="Industries we serve"
            description="The layout gives healthcare the most room, with logistics and B2B software treated as clear secondary paths."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <Card className="overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.016))] shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <div className="h-1.5 bg-[linear-gradient(90deg,rgba(94,143,255,0.9),rgba(134,176,255,0.75))]" />
              <CardHeader className="border-b border-[color:var(--border)]">
                <CardTitle className="text-3xl">{industries[0].title}</CardTitle>
                <CardDescription>{industries[0].body}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {industries[0].summary}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {industries[0].bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[color:var(--accent)]" />
                      {bullet}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/industries/healthcare">Open healthcare</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/industries">View all industries</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {industries.slice(1).map((industry) => (
                <Card key={industry.id} className="border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))] shadow-[var(--shadow-soft)] backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">{industry.title}</CardTitle>
                    <CardDescription>{industry.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {industry.bullets.map((bullet) => (
                      <span key={bullet} className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--muted-foreground)]">
                        {bullet}
                      </span>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-24">
        <Reveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Questions clients usually ask"
            description="Accordion content helps the page answer common questions without crowding the layout."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="mt-8 border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.016))] shadow-[var(--shadow-soft)] backdrop-blur-xl">
            <CardContent className="px-6 py-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="what">
                  <AccordionTrigger>What should we keep from the current site?</AccordionTrigger>
                  <AccordionContent>
                    The real service lines, contact methods, location details, and any factual claims that already exist in the crawl.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="how">
                  <AccordionTrigger>How does the new site differ?</AccordionTrigger>
                  <AccordionContent>
                    It reframes the brand around AI-first engineering, workflow automation, and vertical problem solving instead of generic agency marketing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="blog">
                  <AccordionTrigger>What about the blog?</AccordionTrigger>
                  <AccordionContent>
                    It exists, and it can become SEO-friendly, but it is intentionally lower priority than the core structural rebuild.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="mt-24">
        <Reveal>
          <SectionHeader
            eyebrow="Selected work"
            title="Selected client work"
            description="These examples show the kind of projects Quell Soft wants more of."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <AnimatedSignal
            className="mt-8"
            eyebrow="Proof signal"
            title="A calmer route from brief to build."
            description="The visual rhythm mirrors the work: clarify the direction, structure the handoff, then keep the release path legible."
            points={[
              { label: "Brief", x: 70, y: 118 },
              { label: "Direction", x: 192, y: 92 },
              { label: "Build", x: 322, y: 126 },
              { label: "Launch", x: 452, y: 78 },
            ]}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-4">
            {caseStudies.slice(0, 2).map((study) => (
              <Card key={study.title} className="border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.016))] shadow-[var(--shadow-soft)] backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href={study.href}>Read snapshot</Link>
                  </Button>
                  <Link className="inline-flex items-center gap-1 text-sm text-[color:var(--accent)]" href={study.href}>
                    View
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
            <Card className="border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))] shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl">Reliable proof</CardTitle>
                <CardDescription>
                  The homepage puts client work, industries, and deliverables ahead of blog content so the story stays practical.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Reveal>
      </section>

      <section className="mt-24">
        <Reveal>
          <SectionHeader
            eyebrow="Insights"
            title="Insights and updates"
            description="The blog can grow into topic clusters later, once the core pages are doing their job."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <AnimatedSignal
            className="mt-8"
            eyebrow="Content signal"
            title="Search-friendly structure, not keyword noise."
            description="The blog now has a visual place in the system, with a sequence that suggests research, writing, release, and iteration."
            points={[
              { label: "Research", x: 78, y: 124 },
              { label: "Write", x: 192, y: 84 },
              { label: "Release", x: 314, y: 120 },
              { label: "Iterate", x: 444, y: 88 },
            ]}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-4">
            {blogPosts.map((post, index) => (
              <Card key={post.title} className={index === 0 ? "border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(94,143,255,0.09),rgba(255,255,255,0.015))] shadow-[var(--shadow-soft)] backdrop-blur-xl" : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.016))] shadow-[var(--shadow-soft)] backdrop-blur-xl"}>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={post.href}>Open article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export function ServicesHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="space-y-5">
          <PathBadge>Services</PathBadge>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">A more deliberate service catalog.</h1>
          <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-foreground)]">
            The old site spread the story across many agency-style categories. The new version groups the work by what it actually does for clients.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function IndustriesHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-5">
            <PathBadge>Industries</PathBadge>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">
              Friendly, specific vertical pages that are easy to remember after you leave.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-foreground)]">
              Each industry page now explains the problem in plain English, then shows how Quell Soft can help with systems, workflows, and better handoffs.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Healthcare first", "Operationally rich", "Clear outcomes", "Easy to extend"].map((item) => (
                <span key={item} className="rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1 text-xs text-[color:var(--muted-foreground)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Card className="self-start">
            <CardHeader>
              <CardTitle className="text-2xl">How to read the industry pages</CardTitle>
              <CardDescription>
                Start with the business context, then move into the operational pain points, then the type of work Quell Soft can own.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "What is broken today?",
                "What do users and teams need to do better?",
                "What does success look like after the redesign or build?",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--muted-foreground)]">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Reveal>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="overflow-hidden">
          <CardHeader className="border-b border-[color:var(--border)]">
            <CardTitle className="text-3xl">Healthcare</CardTitle>
            <CardDescription>{industries[0].summary}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
              This vertical gets the most space because it is the clearest example of the kind of work Quell Soft wants to do more of: systems that are easy to use, safe to operate, and meaningful to the people inside them.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {industries[0].bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm">
                  {bullet}
                </div>
              ))}
            </div>
            <Button asChild variant="outline">
              <Link href="/industries/healthcare">Open healthcare page</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {industries.slice(1).map((industry) => (
            <Card key={industry.id}>
              <CardHeader>
                <CardTitle className="text-2xl">{industry.title}</CardTitle>
                <CardDescription>{industry.summary}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {industry.bullets.map((bullet) => (
                  <span key={bullet} className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--muted-foreground)]">
                    {bullet}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeader
            eyebrow="Why this matters"
            title="The industries page should feel like a guide, not a keyword list."
            description="Accenture-style vertical pages work because they organize the story around real business needs, not just services."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-4">
            {[
              "Outcome-led headlines instead of keyword strings.",
              "Capability groupings that feel human and practical.",
              "Trust signals and proof that are easy to scan.",
              "A friendly tone that makes the content easier to remember later.",
            ].map((item) => (
              <Card key={item}>
                <CardContent className="p-6 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export function WorkHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="space-y-5">
          <PathBadge>Work</PathBadge>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">Selected outcomes and product stories.</h1>
          <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-foreground)]">
            The proof section now feels like a product story: a clear problem, a clear intervention, and a direction that is easier to expand.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Card key={study.title}>
            <CardHeader>
              <CardTitle className="text-2xl">{study.title}</CardTitle>
              <CardDescription>{study.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm">
                <Link href={study.href}>Open snapshot</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function BlogHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="space-y-5">
          <PathBadge>Insights</PathBadge>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">Search-friendly articles with a useful point of view.</h1>
          <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-foreground)]">
            The blog is intentionally lower priority than the core site rebuild, but the foundation is now in place for SEO-friendly article clusters.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.title}>
            <CardHeader>
              <CardTitle className="text-2xl">{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm">
                <Link href={post.href}>Read article</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function AboutHubPage({ auditPage }: { auditPage: AuditPage }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <PathBadge>About</PathBadge>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">Born in 2017, now reframed for systems work.</h1>
            <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-foreground)]">
              Quell Soft started as a web and digital marketing agency, and the current site still reflects that history. The modernization keeps the useful parts and changes the framing around them.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Preserved fact</CardTitle>
              <CardDescription>{auditPage.metaDescription}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-[color:var(--muted-foreground)]">
              The crawl shows the original born-in-2017 story, which is useful because it gives us a factual anchor. We keep it without inventing extra growth claims.
            </CardContent>
          </Card>
        </div>
      </Reveal>
    </div>
  );
}

export function WhyChooseHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="space-y-5">
          <PathBadge>Why choose us</PathBadge>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">Because the site should feel like a system, not a brochure.</h1>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          "We preserve existing URLs and SEO equity.",
          "We can speak both product and marketing language without collapsing into either one.",
          "We build a content system that can support new industries later.",
          "We prioritize credibility, accessibility, and operational clarity.",
        ].map((item) => (
          <Card key={item}>
            <CardContent className="p-6 text-base leading-7">{item}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function ContactHubPage({ auditPage }: { auditPage: AuditPage }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <PathBadge>Contact</PathBadge>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">Start with the workflow, not the shopping list.</h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
              {auditPage.metaDescription}
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">What happens next?</Button>
              </DialogTrigger>
              <DialogContent>
                <div className="space-y-4">
                  <h2 className="font-display text-3xl">What happens next</h2>
                  <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
                    We review the brief, map the current state, identify the smallest useful first release, and then move toward a scoped plan.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <ContactForm />
        </div>
      </Reveal>
    </div>
  );
}


function PathBadge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">{children}</span>;
}

function HealthcareIndustryPage({ doc }: { doc: ContentDoc<"industry"> }) {
  const frontmatter = doc.frontmatter as ContentDoc<"industry">["frontmatter"];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-stretch">
          <div className="space-y-6 rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] p-6 sm:p-8 lg:p-10">
            <div className="space-y-5">
              <PathBadge>{frontmatter.eyebrow || "Industry"}</PathBadge>
              <h1 className="max-w-4xl font-display text-5xl leading-[0.94] tracking-tight sm:text-6xl">
                {frontmatter.title} pages that feel calm, clear, and made for real work.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-foreground)]">{frontmatter.summary}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {frontmatter.focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1 text-xs text-[color:var(--muted-foreground)]">
                  {area}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact-us">Talk through a workflow</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/industries">Browse other industries</Link>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(17,24,39,0.92),rgba(10,14,22,0.96))]">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="text-2xl text-white">At a glance</CardTitle>
              <CardDescription className="text-white/70">
                The page is designed to show the work, the pressure points, and the outcomes without making the user read a wall of copy.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-4 sm:p-5">
              <div className="grid gap-3">
                <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">Pain points</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {frontmatter.challenges.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/78">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">What improves</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {frontmatter.outcomes.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/78">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Reveal>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {healthcareModes.map((mode, index) => (
          <Reveal key={mode.id} delay={index * 0.04}>
            <Card className="h-full overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">{mode.label}</CardTitle>
                <CardDescription>{mode.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">{mode.body}</p>
                <div className="flex flex-wrap gap-2">
                  {mode.points.map((point) => (
                    <span key={point} className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--muted-foreground)]">
                      {point}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </section>

      <section className="mt-24 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <Reveal>
          <SectionHeader
            eyebrow="What this page is for"
            title="A vertical landing page should guide the eye, not trap it."
            description="The goal is to make the route feel specific enough to remember and flexible enough to expand later."
          />
            <div className="mt-6 rounded-[1.5rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(94,143,255,0.08),rgba(255,255,255,0.015))] p-6">
            <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
              This layout treats healthcare like an operational story: show the friction, show the change, and then leave room for the source draft if someone wants more detail.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <Card>
            <CardContent className="px-6 py-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="workflow">
                  <AccordionTrigger>What gets attention first?</AccordionTrigger>
                  <AccordionContent>
                    The first pass should simplify intake, scheduling, and coordination so the people closest to the work feel the difference immediately.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="data">
                  <AccordionTrigger>How do we handle data safely?</AccordionTrigger>
                  <AccordionContent>
                    By keeping source-of-truth boundaries visible, minimizing duplicate entry, and designing the UI around role-based access and clarity.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="delivery">
                  <AccordionTrigger>What makes it feel interactive?</AccordionTrigger>
                  <AccordionContent>
                    Tabs, cards, and accordions let the page reveal the story in layers instead of forcing the user to digest everything in one long scroll.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="mt-24 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <Reveal>
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-[color:var(--border)]">
              <CardTitle className="text-2xl">Source notes</CardTitle>
              <CardDescription>
                The original draft is still available, but it is tucked away so the page can stay readable and useful at a glance.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="source">
                  <AccordionTrigger>Open the draft content</AccordionTrigger>
                  <AccordionContent>
                    <div className="prose prose-invert max-w-none prose-headings:font-display prose-h2:text-2xl prose-h3:text-xl prose-a:text-[color:var(--accent)] prose-p:leading-7 prose-li:leading-7">
                      {doc.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))]">
            <CardHeader>
              <CardTitle className="text-2xl">What the page should leave behind</CardTitle>
              <CardDescription>
                If a user remembers only one thing, it should be that the work is practical, human, and built around calmer handoffs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {frontmatter.outcomes.slice(0, 3).map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--accent)]" />
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </div>
  );
}

export function ContentPage({
  title,
  description,
  eyebrow,
  body,
  tags,
  pills,
  sidebarTitle,
  sidebarItems,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  body: ReactNode;
  tags?: string[];
  pills?: string[];
  sidebarTitle?: string;
  sidebarItems?: string[];
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.34fr]">
        <article className="space-y-8">
          <Reveal>
            <div className="space-y-5">
              {eyebrow ? <PathBadge>{eyebrow}</PathBadge> : null}
              <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">{title}</h1>
              <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-foreground)]">{description}</p>
              {tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1 text-xs text-[color:var(--muted-foreground)]">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
          {pills?.length ? (
            <Reveal delay={0.05}>
              <div className="flex flex-wrap gap-2">
                {pills.map((pill) => (
                  <span key={pill} className="rounded-full bg-[color:var(--muted)] px-3 py-1 text-sm text-[color:var(--foreground)]">
                    {pill}
                  </span>
                ))}
              </div>
            </Reveal>
          ) : null}
          <Reveal delay={0.08}>
            <Card>
              <CardContent className="prose prose-invert max-w-none py-8 prose-headings:font-display prose-h2:text-3xl prose-h3:text-2xl prose-a:text-[color:var(--accent)] prose-p:leading-7 prose-li:leading-7">
                {body}
              </CardContent>
            </Card>
          </Reveal>
        </article>
        <aside className="space-y-6">
          <Card className="sticky top-28">
            <CardHeader>
              <CardTitle className="text-xl">{sidebarTitle || "At a glance"}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {(sidebarItems || []).map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--muted-foreground)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export function LegacyPage({
  title,
  description,
  auditPage,
}: {
  title: string;
  description: string;
  auditPage: AuditPage;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-5">
            <PathBadge>Legacy path preserved</PathBadge>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">{title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-foreground)]">{description}</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Source snapshot</CardTitle>
              <CardDescription>Content extracted from the crawl to keep the old route alive while the redesign lands.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {auditPage.headings.slice(0, 6).map((heading) => (
                <div key={heading} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--muted-foreground)]">
                  {heading}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.42fr]">
        <Card>
          <CardContent className="py-8">
            <div className="prose prose-invert max-w-none prose-headings:font-display prose-a:text-[color:var(--accent)] prose-p:leading-7 prose-li:leading-7">
              <p>{description}</p>
              <p>{auditPage.excerpt.slice(0, 800)}</p>
              <p>
                <Link className="inline-flex items-center gap-2 text-[color:var(--accent)]" href="/contact-us">
                  Want to modernize this path further?
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Preserved metadata</CardTitle>
            <CardDescription>Useful for SEO continuity and internal tracking.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[color:var(--muted-foreground)]">
            <p><strong className="text-[color:var(--foreground)]">URL:</strong> {auditPage.pathname}</p>
            <p><strong className="text-[color:var(--foreground)]">Title:</strong> {auditPage.title}</p>
            {auditPage.metaDescription ? <p><strong className="text-[color:var(--foreground)]">Meta:</strong> {auditPage.metaDescription}</p> : null}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function ContentCollectionPage({
  doc,
}: {
  doc: ContentDoc<"service" | "industry" | "case-study" | "blog">;
}) {
  if (doc.kind === "service") {
    const frontmatter = doc.frontmatter as ContentDoc<"service">["frontmatter"];
    return (
      <ContentPage
        eyebrow={frontmatter.eyebrow}
        title={frontmatter.title}
        description={frontmatter.summary}
        body={doc.content}
        tags={[frontmatter.category, ...frontmatter.industries]}
        sidebarTitle="Service summary"
        sidebarItems={[...frontmatter.capabilities, ...frontmatter.process, frontmatter.cta]}
      />
    );
  }

  if (doc.kind === "industry") {
    const frontmatter = doc.frontmatter as ContentDoc<"industry">["frontmatter"];
    if (frontmatter.route === "/industries/healthcare") {
      return <HealthcareIndustryPage doc={doc as ContentDoc<"industry">} />;
    }
    return (
      <ContentPage
        eyebrow={frontmatter.eyebrow}
        title={frontmatter.title}
        description={frontmatter.summary}
        body={doc.content}
        tags={["Industry", ...frontmatter.focusAreas]}
        sidebarTitle="Healthcare fit"
        sidebarItems={[...frontmatter.challenges, ...frontmatter.outcomes]}
      />
    );
  }

  if (doc.kind === "case-study") {
    const frontmatter = doc.frontmatter as ContentDoc<"case-study">["frontmatter"];
    return (
      <ContentPage
        eyebrow={frontmatter.industry}
        title={frontmatter.title}
        description={frontmatter.summary}
        body={doc.content}
        tags={[frontmatter.client, frontmatter.industry]}
        sidebarTitle="Project focus"
        sidebarItems={[frontmatter.challenge, ...frontmatter.approach, frontmatter.outcome]}
      />
    );
  }

  const frontmatter = doc.frontmatter as ContentDoc<"blog">["frontmatter"];
  return (
    <ContentPage
      eyebrow={frontmatter.category}
      title={frontmatter.title}
      description={frontmatter.summary}
      body={doc.content}
      tags={[frontmatter.category, ...frontmatter.tags]}
      sidebarTitle="Article focus"
      sidebarItems={[frontmatter.publishedAt.toISOString().slice(0, 10), ...frontmatter.tags]}
    />
  );
}
