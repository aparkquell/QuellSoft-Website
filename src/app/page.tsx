import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: "AI-first engineering studio",
  description: "Software systems, workflow automation, and vertical solutions built for the job.",
};

export default function Page() {
  return <HomePage />;
}

