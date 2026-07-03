import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";
import {
  blogFrontmatterSchema,
  caseStudyFrontmatterSchema,
  industryFrontmatterSchema,
  serviceFrontmatterSchema,
  type BlogFrontmatter,
  type CaseStudyFrontmatter,
  type IndustryFrontmatter,
  type ServiceFrontmatter,
} from "./content-schema";

export type ContentKind = "service" | "industry" | "case-study" | "blog";

export type ContentDoc<T extends ContentKind> = {
  kind: T;
  frontmatter: T extends "service"
    ? ServiceFrontmatter
    : T extends "industry"
      ? IndustryFrontmatter
      : T extends "case-study"
        ? CaseStudyFrontmatter
        : BlogFrontmatter;
  content: ReactNode;
  body: string;
  sourcePath: string;
};

const contentRoots: Record<Exclude<ContentKind, never>, string> = {
  service: path.join(process.cwd(), "content", "services"),
  industry: path.join(process.cwd(), "content", "industries"),
  "case-study": path.join(process.cwd(), "content", "case-studies"),
  blog: path.join(process.cwd(), "content", "blog"),
};

function schemaFor(kind: ContentKind) {
  switch (kind) {
    case "service":
      return serviceFrontmatterSchema;
    case "industry":
      return industryFrontmatterSchema;
    case "case-study":
      return caseStudyFrontmatterSchema;
    case "blog":
      return blogFrontmatterSchema;
  }
}

export async function listContentSlugs(kind: ContentKind) {
  const dir = contentRoots[kind];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry) => entry.name.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getContentDoc(kind: ContentKind, slug: string) {
  const sourcePath = path.join(contentRoots[kind], `${slug}.mdx`);
  const source = await fs.readFile(sourcePath, "utf8");
  const { content, data } = matter(source);
  const schema = schemaFor(kind);
  const parsed = schema.parse(data);
  const { content: rendered } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    kind,
    frontmatter: parsed,
    content: rendered,
    body: content,
    sourcePath,
  } as ContentDoc<typeof kind>;
}

export async function getContentByRoute(route: string) {
  const normalized = route.replace(/^\/+/, "").replace(/\/+$/, "");
  for (const kind of ["service", "industry", "case-study", "blog"] as const) {
    const slug = normalized.startsWith(`${kind === "case-study" ? "case-studies" : kind}s/`)
      ? normalized.slice((kind === "case-study" ? "case-studies" : kind).length + 1)
      : normalized;
    try {
      return await getContentDoc(kind, slug);
    } catch {
      // Continue to the next collection.
    }
  }
  return null;
}
