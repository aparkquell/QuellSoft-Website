import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AboutHubPage,
  BlogHubPage,
  ContactHubPage,
  ContentCollectionPage,
  IndustriesHubPage,
  LegacyPage,
  ServicesHubPage,
  WhyChooseHubPage,
  WorkHubPage,
} from "@/components/pages";
import { getAuditPageByPathname } from "@/lib/audit";
import { getContentDoc } from "@/lib/content";
import { getRouteEntries } from "@/lib/site-routes";

function slugToPathname(slug?: string[]) {
  if (!slug || slug.length === 0) return "/";
  return `/${slug.join("/")}`;
}

export async function generateStaticParams() {
  const entries = await getRouteEntries();
  return entries
    .filter((entry) => entry.pathname !== "/")
    .map((entry) => ({
      slug: entry.pathname.replace(/^\/+/, "").split("/").filter(Boolean),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pathname = slugToPathname(slug);
  const entries = await getRouteEntries();
  const entry = entries.find((item) => item.pathname === pathname);
  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pathname = slugToPathname(slug);
  const entries = await getRouteEntries();
  const entry = entries.find((item) => item.pathname === pathname);

  if (!entry) {
    notFound();
  }

  if (entry.kind === "content" && entry.collection && entry.slug) {
    const doc = await getContentDoc(entry.collection, entry.slug);
    return <ContentCollectionPage doc={doc} />;
  }

  if (entry.kind === "hub") {
    const audit = await getAuditPageByPathname(pathname);
    switch (pathname) {
      case "/services":
        return <ServicesHubPage />;
      case "/industries":
        return <IndustriesHubPage />;
      case "/work":
      case "/case-studies":
        return <WorkHubPage />;
      case "/blog":
        return <BlogHubPage />;
      case "/about-us":
        return <AboutHubPage auditPage={audit || { url: pathname, pathname, title: entry.title, metaDescription: entry.description, headings: [], excerpt: entry.description }} />;
      case "/why-choose-us":
        return <WhyChooseHubPage />;
      case "/contact-us":
        return <ContactHubPage auditPage={audit || { url: pathname, pathname, title: entry.title, metaDescription: entry.description, headings: [], excerpt: entry.description }} />;
      default:
        return (
          <LegacyPage
            title={entry.title}
            description={entry.description}
            auditPage={audit || { url: pathname, pathname, title: entry.title, metaDescription: entry.description, headings: [], excerpt: entry.description }}
          />
        );
    }
  }

  const auditPage = await getAuditPageByPathname(pathname);
  if (!auditPage) {
    notFound();
  }

  return <LegacyPage title={auditPage.title} description={auditPage.metaDescription || entry.description} auditPage={auditPage} />;
}

