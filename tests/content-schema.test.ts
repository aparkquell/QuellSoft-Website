import { describe, expect, it } from "vitest";
import { blogFrontmatterSchema, serviceFrontmatterSchema } from "@/lib/content-schema";

describe("content schemas", () => {
  it("accepts service frontmatter", () => {
    const parsed = serviceFrontmatterSchema.parse({
      kind: "service",
      title: "Web Design and Development",
      summary: "Editorial, conversion-aware web experiences.",
      route: "/services/web-design-and-development",
      category: "Experience Engineering",
      eyebrow: "Core service",
      capabilities: ["Design systems"],
      process: ["Discover"],
      industries: ["Healthcare"],
      cta: "Rebuild the site",
    });
    expect(parsed.title).toBe("Web Design and Development");
  });

  it("coerces blog dates", () => {
    const parsed = blogFrontmatterSchema.parse({
      kind: "blog",
      title: "SEO-Friendly Content Architecture for an AI-First Firm",
      summary: "Search structure that supports the new positioning.",
      route: "/blog/seo-friendly-content-architecture",
      publishedAt: "2026-07-03",
      category: "SEO",
      tags: ["seo"],
    });
    expect(parsed.publishedAt).toBeInstanceOf(Date);
  });
});

