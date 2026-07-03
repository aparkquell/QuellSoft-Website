# Quell Soft Website

Modernized Next.js site for Quell Soft.

## Local Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Content

- Service pages live in `content/services/`
- Industry pages live in `content/industries/`
- Case studies live in `content/case-studies/`
- Blog posts live in `content/blog/`

Each collection uses typed MDX frontmatter. See `docs/content-schema.md` for the schema and examples.

## Adding A New Page

1. Add the MDX file to the correct folder.
2. Validate the frontmatter fields against `src/lib/content-schema.ts`.
3. If the page needs a static route, update `src/lib/site-routes.ts`.
4. Check that the page renders through the catch-all route.

## Deployment

- The site is configured for static export with `output: 'export'`.
- GitHub Pages is the deployment target.
- `robots.txt` and `sitemap.xml` are generated at build time.

