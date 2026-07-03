import fs from "node:fs/promises";
import path from "node:path";

export type AuditPage = {
  url: string;
  pathname: string;
  title: string;
  metaDescription: string;
  headings: string[];
  excerpt: string;
};

let cachedAuditPages: AuditPage[] | null = null;

function normalizePathname(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

function stripMarkdownFence(text: string) {
  return text.replace(/^```text\s*/m, "").replace(/```$/m, "").trim();
}

export async function getAuditPages() {
  if (cachedAuditPages) return cachedAuditPages;

  const auditPath = path.join(process.cwd(), "docs", "audit", "current-site-content.md");
  let raw: string;
  try {
    raw = await fs.readFile(auditPath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      cachedAuditPages = [];
      return cachedAuditPages;
    }
    throw error;
  }
  const headings = [...raw.matchAll(/^### (https:\/\/quell-soft\.com\/[^\n]+)$/gm)];
  const pages: AuditPage[] = [];

  for (let i = 0; i < headings.length; i += 1) {
    const url = headings[i][1];
    const nextStart = raw.indexOf(`### ${headings[i][1]}`) + `### ${headings[i][1]}`.length;
    const nextHeading = headings[i + 1]?.[0];
    const endIndex = nextHeading ? raw.indexOf(nextHeading, nextStart) : raw.length;
    const block = raw.slice(nextStart, endIndex);
    const title = (block.match(/^- Title: (.*)$/m)?.[1] || url).trim();
    const metaDescription = (block.match(/^- Meta description: (.*)$/m)?.[1] || "").trim();
    const blockExcerpt = stripMarkdownFence(block.match(/```text\n([\s\S]*?)```/)?.[1] || "");
    const headingLines = [...block.matchAll(/^\s+- ([A-Z0-9]+): (.*)$/gm)].map((match) => match[2].trim());
    const pathname = normalizePathname(new URL(url).pathname);
    pages.push({
      url,
      pathname,
      title,
      metaDescription,
      headings: headingLines,
      excerpt: blockExcerpt.slice(0, 1200),
    });
  }

  cachedAuditPages = pages;
  return pages;
}

export async function getAuditPageByPathname(pathname: string) {
  const normalized = normalizePathname(pathname);
  const pages = await getAuditPages();
  return pages.find((page) => page.pathname === normalized) || null;
}
