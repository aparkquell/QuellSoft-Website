import type { MetadataRoute } from "next";
import { getRouteEntries } from "@/lib/site-routes";

export const dynamic = "force-static";

export default async function robots(): Promise<MetadataRoute.Robots> {
  await getRouteEntries();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://quell-soft.com/sitemap.xml",
    host: "https://quell-soft.com",
  };
}
