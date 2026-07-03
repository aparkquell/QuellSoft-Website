import { getAuditPages } from "./audit";
import { listContentSlugs } from "./content";

export type RouteKind = "home" | "hub" | "content" | "legacy";

export type RouteEntry = {
  pathname: string;
  kind: RouteKind;
  title: string;
  description: string;
  slug?: string;
  collection?: "service" | "industry" | "case-study" | "blog";
};

const hubRoutes: RouteEntry[] = [
  {
    pathname: "/",
    kind: "home",
    title: "Quell Soft",
    description: "AI-first software systems, workflow automation, and vertical solutions.",
  },
  {
    pathname: "/services",
    kind: "hub",
    title: "Services",
    description: "Strategy, engineering, AI systems, and product delivery.",
  },
  {
    pathname: "/industries",
    kind: "hub",
    title: "Industries",
    description: "Industry-specific software and automation for real operations.",
  },
  {
    pathname: "/work",
    kind: "hub",
    title: "Work",
    description: "Selected case studies and product work.",
  },
  {
    pathname: "/case-studies",
    kind: "hub",
    title: "Case Studies",
    description: "Operational outcomes and delivery stories.",
  },
  {
    pathname: "/about-us",
    kind: "hub",
    title: "About Quell Soft",
    description: "Who we are and how we work.",
  },
  {
    pathname: "/why-choose-us",
    kind: "hub",
    title: "Why Choose Us",
    description: "Why clients partner with Quell Soft.",
  },
  {
    pathname: "/contact-us",
    kind: "hub",
    title: "Contact Us",
    description: "Start a project or ask a question.",
  },
  {
    pathname: "/career",
    kind: "hub",
    title: "Career",
    description: "Join the team.",
  },
  {
    pathname: "/privacy-policy",
    kind: "hub",
    title: "Privacy Policy",
    description: "How we handle data and privacy.",
  },
  {
    pathname: "/terms-condition",
    kind: "hub",
    title: "Terms and Conditions",
    description: "Site terms and conditions.",
  },
  {
    pathname: "/quellmove",
    kind: "hub",
    title: "QuellMove",
    description: "Moving-industry CRM product.",
  },
  {
    pathname: "/blog",
    kind: "hub",
    title: "Insights",
    description: "SEO-friendly articles and engineering notes.",
  },
];

function toPathname(route: string) {
  if (route === "/") return "/";
  return route.replace(/\/+$/, "");
}

export async function getRouteEntries() {
  const [auditPages, serviceSlugs, industrySlugs, caseStudySlugs, blogSlugs] = await Promise.all([
    getAuditPages(),
    listContentSlugs("service"),
    listContentSlugs("industry"),
    listContentSlugs("case-study"),
    listContentSlugs("blog"),
  ]);

  const entries = new Map<string, RouteEntry>();
  for (const hub of hubRoutes) entries.set(hub.pathname, hub);

  for (const slug of serviceSlugs) {
    const pathname = `/services/${slug}`;
    entries.set(pathname, {
      pathname,
      kind: "content",
      title: slug.replace(/-/g, " "),
      description: "",
      slug,
      collection: "service",
    });
  }

  for (const slug of industrySlugs) {
    const pathname = `/industries/${slug}`;
    entries.set(pathname, {
      pathname,
      kind: "content",
      title: slug.replace(/-/g, " "),
      description: "",
      slug,
      collection: "industry",
    });
  }

  for (const slug of caseStudySlugs) {
    const pathname = `/case-studies/${slug}`;
    entries.set(pathname, {
      pathname,
      kind: "content",
      title: slug.replace(/-/g, " "),
      description: "",
      slug,
      collection: "case-study",
    });
  }

  for (const slug of blogSlugs) {
    const pathname = `/blog/${slug}`;
    entries.set(pathname, {
      pathname,
      kind: "content",
      title: slug.replace(/-/g, " "),
      description: "",
      slug,
      collection: "blog",
    });
  }

  for (const auditPage of auditPages) {
    const pathname = toPathname(auditPage.pathname);
    if (!entries.has(pathname)) {
      entries.set(pathname, {
        pathname,
        kind: "legacy",
        title: auditPage.title,
        description: auditPage.metaDescription || auditPage.title,
      });
    }
  }

  return [...entries.values()].sort((a, b) => a.pathname.localeCompare(b.pathname));
}
