import { z } from "zod";

const pathSchema = z.string().regex(/^\/[a-z0-9-/_]*$/, "Use a leading-slash path");

const list = z.array(z.string().min(1)).default([]);

export const baseContentSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  route: pathSchema,
  eyebrow: z.string().optional(),
  order: z.number().int().optional(),
  accent: z.string().optional(),
  featured: z.boolean().optional(),
});

export const serviceFrontmatterSchema = baseContentSchema.extend({
  kind: z.literal("service"),
  category: z.string().min(1),
  capabilities: list,
  process: list,
  industries: list,
  cta: z.string().min(1),
});

export const industryFrontmatterSchema = baseContentSchema.extend({
  kind: z.literal("industry"),
  focusAreas: list,
  challenges: list,
  outcomes: list,
});

export const caseStudyFrontmatterSchema = baseContentSchema.extend({
  kind: z.literal("case-study"),
  client: z.string().min(1),
  industry: z.string().min(1),
  challenge: z.string().min(1),
  approach: list,
  outcome: z.string().min(1),
});

export const blogFrontmatterSchema = baseContentSchema.extend({
  kind: z.literal("blog"),
  publishedAt: z.coerce.date(),
  category: z.string().min(1),
  tags: list,
});

export type ServiceFrontmatter = z.infer<typeof serviceFrontmatterSchema>;
export type IndustryFrontmatter = z.infer<typeof industryFrontmatterSchema>;
export type CaseStudyFrontmatter = z.infer<typeof caseStudyFrontmatterSchema>;
export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
