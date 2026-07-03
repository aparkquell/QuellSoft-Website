import type { MetadataRoute } from "next";
import { getRouteEntries } from "@/lib/site-routes";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getRouteEntries();
  return routes.map((route) => ({
    url: `https://quell-soft.com${route.pathname === "/" ? "" : route.pathname}`,
    lastModified: new Date(),
  }));
}
