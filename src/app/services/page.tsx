import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcons } from "@/components/ui/Illustrations";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Mobile apps, web applications, custom ERP, UI/UX design, cloud infrastructure, analytics and consulting from MEIZON.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:pt-24">
        <SectionHeading eyebrow="Services" title="End-to-end" accent="digital services">
          Everything you need to design, build, launch and scale modern software, delivered by one accountable team.
        </SectionHeading>
        <h1 className="sr-only">MEIZON services</h1>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Link href={`/services/${s.slug}`} className="glass group flex h-full flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-accent/40 hover:shadow-2xl hover:shadow-brand/20">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-light to-brand text-white shadow-lg shadow-brand/40"><Icon className="h-7 w-7" /></span>
                  <h2 className="mt-6 text-xl font-bold">{s.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-light">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
