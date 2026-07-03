# Quell Soft Agent Notes

## Ground Rules
- Keep the URL paths discovered in the crawl alive.
- Favor AI-first, systems-oriented language over generic agency marketing.
- Use the audit in `docs/audit/` as the source of truth for preserved content.
- Do not invent stats or client counts.
- Label invented example content with `PLACEHOLDER` comments.
- Default to dark mode and keep the theme toggle persistent.
- Prefer static-export-safe solutions unless the architecture document says otherwise.

## When Adding A New Page
1. Add or update the relevant MDX file under `content/`.
2. Validate frontmatter against `src/lib/content-schema.ts`.
3. Add the route to the registry in `src/lib/site-routes.ts` if it needs to be statically generated.
4. Make sure the page works in the optional catch-all route.
5. Check that the path appears in `sitemap.xml`.

## Content Recipe
- `services`: explain the capability, who it helps, the process, and why it matters.
- `industries`: describe the operational problem, the risk, and the fit.
- `case-studies`: summarize the challenge, approach, and outcome without fabricating metrics.
- `blog`: answer a search-intent question with a practical point of view.

## Keep In Mind
- Preserve route continuity for SEO and bookmarks.
- Use the shared shell and components instead of custom one-off styling.
- If a change affects deployment or static export, document it in `docs/decisions.md`.

