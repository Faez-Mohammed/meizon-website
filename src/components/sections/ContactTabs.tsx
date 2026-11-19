"use client";

import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { careers, company } from "@/data/site";

export function ContactTabs({ initial }: { initial: "contact" | "career" }) {
  const [tab, setTab] = useState(initial);
  const [applied, setApplied] = useState<string | null>(null);
  useEffect(() => setTab(initial), [initial]);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:pt-24">
      <h1 className="text-center text-4xl font-extrabold sm:text-5xl">Get in <span className="text-gradient">touch</span></h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted">Questions, projects or opportunities, we would love to hear from you.</p>
      <div role="tablist" aria-label="Contact or careers" className="glass mx-auto mt-10 flex w-fit gap-1 rounded-xl p-1.5">
        {(["contact", "career"] as const).map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`rounded-lg px-6 py-2 text-sm font-semibold capitalize transition ${tab === t ? "bg-brand text-white shadow-lg shadow-brand/40" : "text-muted hover:text-heading"}`}>
            {t === "contact" ? "Contact Us" : "Careers"}
          </button>
        ))}
      </div>

      {tab === "contact" ? (
        <div role="tabpanel" className="mt-12">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { Icon: MapPin, title: "Visit us", lines: company.address },
              { Icon: Phone, title: "Call us", lines: [company.phone], href: `tel:${company.phoneHref}` },
              { Icon: Mail, title: "Email us", lines: [company.email], href: `mailto:${company.email}` },
            ].map(({ Icon, title, lines, href }) => (
              <div key={title} className="glass rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand-light"><Icon className="h-5 w-5" /></span>
                <h2 className="mt-4 text-lg font-bold">{title}</h2>
                {href ? <a href={href} className="mt-1 block text-sm text-muted hover:text-brand-light">{lines[0]}</a> : lines.map((l) => <p key={l} className="text-sm text-muted">{l}</p>)}
              </div>
            ))}
          </div>
          <QuoteForm id="contact-form" title="Send us a message" intro="Tell us a little about what you need and we will reply within 24 hours." />
        </div>
      ) : (
        <div role="tabpanel" className="mt-12 grid gap-5 md:grid-cols-2">
          {careers.map((c) => (
            <div key={c.title} className="glass flex flex-col rounded-2xl p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand-light"><Briefcase className="h-5 w-5" /></span>
              <h2 className="mt-4 text-xl font-bold">{c.title}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-light">{c.type}</p>
              <p className="mt-3 flex-1 text-sm text-muted">{c.desc}</p>
              {applied === c.title ? (
                <p role="status" className="mt-5 text-sm font-semibold text-emerald-400">Thanks! Send your CV to sales@meizontechnologies.com and we will be in touch.</p>
              ) : (
                <Button className="mt-5 self-start" onClick={() => setApplied(c.title)}>Apply now</Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
