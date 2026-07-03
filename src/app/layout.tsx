import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ThemeProvider } from "@/components/theme-provider";
import "@fontsource/fraunces/latin.css";
import "@fontsource/manrope/latin.css";
import "@fontsource/jetbrains-mono/latin.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Quell Soft",
    template: "%s | Quell Soft",
  },
  description: "AI-first software systems, workflow automation, and vertical solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-background font-body text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="quellsoft-theme">
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
