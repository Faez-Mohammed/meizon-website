"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type Errors = Partial<Record<"first" | "last" | "email" | "message", string>>;

const steps = [
  { n: 1, title: "Tell us about your needs", text: "Briefly describe your project requirements and goals." },
  { n: 2, title: "We check feasibility", text: "Our experts analyze the requirements and technical scope." },
];

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (!String(d.get("first") ?? "").trim()) e.first = "First name is required";
  if (!String(d.get("last") ?? "").trim()) e.last = "Last name is required";
  const email = String(d.get("email") ?? "").trim();
  if (!email) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Enter a valid email address";
  const msg = String(d.get("message") ?? "").trim();
  if (!msg) e.message = "Please tell us about your project";
  else if (msg.length < 10) e.message = "Please add a little more detail (10+ characters)";
  return e;
}

export function QuoteForm({ id = "quote", title = "Get a Free Quote", intro = "Ready to start your project? Fill out the form and our team will get back to you within 24 hours." }: { id?: string; title?: string; intro?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const errs = validate(new FormData(form));
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    // Frontend-only: simulate a request, no network call is made.
    setTimeout(() => {
      setSending(false);
      setDone(true);
      form.reset();
    }, 900);
  };

  const field = (name: keyof Errors, label: string, ph: string, type = "text") => (
    <div>
      <label htmlFor={`${id}-${name}`} className="mb-2 block text-sm font-semibold text-heading">{label}</label>
      <input
        id={`${id}-${name}`} name={name} type={type} placeholder={ph}
        aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${id}-${name}-err` : undefined}
        className={`w-full rounded-lg border bg-field px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/60 focus:border-brand-light focus:ring-2 focus:ring-brand-light/30 ${errors[name] ? "border-red-400" : "border-line"}`}
      />
      {errors[name] && <p id={`${id}-${name}-err`} className="mt-1.5 text-xs text-red-400">{errors[name]}</p>}
    </div>
  );

  return (
    <section id={id} className="py-24" aria-labelledby={`${id}-title`}>
      <Reveal className="mx-auto max-w-6xl px-6">
        <div className="glass grid overflow-hidden rounded-[28px] lg:grid-cols-[1fr_1.1fr]">
          <div className="relative bg-gradient-to-br from-brand/40 via-brand/10 to-transparent p-8 sm:p-12">
            <h2 id={`${id}-title`} className="text-4xl font-bold">{title}</h2>
            <p className="mt-4 text-muted">{intro}</p>
            <ol className="mt-10 space-y-7">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">{s.n}</span>
                  <span>
                    <span className="block font-semibold text-heading">{s.title}</span>
                    <span className="mt-1 block text-sm text-muted">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="p-8 sm:p-12">
            {done ? (
              <div role="status" className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-16 w-16 text-emerald-400" />
                <h3 className="mt-5 text-2xl font-bold">Request sent!</h3>
                <p className="mt-2 max-w-xs text-muted">Thank you. A MEIZON specialist will get back to you within 24 hours.</p>
                <Button variant="secondary" className="mt-6" onClick={() => setDone(false)}>Send another request</Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {field("first", "First Name", "John")}
                  {field("last", "Last Name", "Doe")}
                </div>
                {field("email", "Email Address", "john@example.com", "email")}
                <div>
                  <label htmlFor={`${id}-message`} className="mb-2 block text-sm font-semibold text-heading">Message</label>
                  <textarea
                    id={`${id}-message`} name="message" rows={5} placeholder="Tell us about your project..."
                    aria-invalid={!!errors.message} aria-describedby={errors.message ? `${id}-message-err` : undefined}
                    className={`w-full resize-y rounded-lg border bg-field px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/60 focus:border-brand-light focus:ring-2 focus:ring-brand-light/30 ${errors.message ? "border-red-400" : "border-line"}`}
                  />
                  {errors.message && <p id={`${id}-message-err`} className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" disabled={sending} className="w-full">
                  {sending ? "Sending..." : <>Send Request <Send className="h-4 w-4" /></>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
