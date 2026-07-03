import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Insights" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(178,123,82,0.08),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(71,85,105,0.06),_transparent_20%),linear-gradient(180deg,var(--background),var(--background))] text-[color:var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--background)]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/quellsoft-logo.svg"
              alt="Quell Soft"
              width={180}
              height={48}
              className="h-10 w-auto max-w-[180px] object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Button key={link.href} asChild variant="ghost" size="sm">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/contact-us">Start a project</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col justify-between">
                <div className="space-y-6 pt-8">
                  <div>
                    <p className="font-display text-2xl">Menu</p>
                    <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                      Modernize with intent. Build for operations.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Button key={link.href} asChild variant="ghost" className="justify-start px-0 text-left text-base">
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    ))}
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact-us">Start a project</Link>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[color:var(--border)] bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.015))]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
          <div className="space-y-4">
            <Image src="/quellsoft-logo.svg" alt="Quell Soft" width={180} height={48} className="h-10 w-auto" />
            <p className="max-w-md text-sm leading-7 text-[color:var(--muted-foreground)]">
              AI-first software systems, workflow automation, and vertical solutions built for teams that need
              more than a marketing site.
            </p>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link className="transition-colors hover:text-[color:var(--accent)]" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--muted-foreground)]">
              <li>Basking Ridge, NJ</li>
              <li><a className="transition-colors hover:text-[color:var(--accent)]" href="mailto:info@quell-soft.com">info@quell-soft.com</a></li>
              <li><a className="transition-colors hover:text-[color:var(--accent)]" href="tel:+19738851452">+1 (973) 885-1452</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
