"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Please enter your company name."),
  message: z.string().min(20, "Please add a little more detail."),
  honeypot: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    if (values.honeypot) return;
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      reset();
      setStatus("success");
      return;
    }
    setStatus("error");
  }

  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
          <input className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input className={inputClass} {...register("name")} />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input className={inputClass} type="email" {...register("email")} />
            </Field>
          </div>
          <Field label="Company" error={errors.company?.message}>
            <input className={inputClass} {...register("company")} />
          </Field>
          <Field label="Project brief" error={errors.message?.message}>
            <textarea className={cn(inputClass, "min-h-36")} {...register("message")} />
          </Field>
          {status === "error" ? (
            <p className="text-sm text-amber-400">
              {/* PLACEHOLDER: client to confirm */}
              Configure `NEXT_PUBLIC_CONTACT_ENDPOINT` in `.env.local` to enable submission, or wire this form to your preferred form service.
            </p>
          ) : null}
          {status === "success" ? <p className="text-sm text-emerald-400">Thanks. Your message has been sent.</p> : null}
          <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
            {status === "sending" ? "Sending..." : "Send inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium">{label}</span>
      {children}
      {error ? <span className="text-xs text-amber-400">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[color:var(--muted-foreground)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--ring)]";
