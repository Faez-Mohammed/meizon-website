"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServiceArt, serviceIcons } from "@/components/ui/Illustrations";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function ServicesShowcase() {
  const [idx, setIdx] = useState(5);
  const rail = useRef<HTMLDivElement>(null);
  const s = services[idx];

  const scroll = (dir: number) => rail.current?.scrollBy({ left: dir * 260, behavior: "smooth" });

  return (
    <section id="services" className="relative py-20" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-light">Services</p>
              <h2 id="services-title" className="text-4xl font-bold sm:text-5xl">
                We strive to achieve <span className="text-gradient">excellence</span>
              </h2>
              <p className="mt-4 text-lg text-muted">Discover our extensive range of services and solutions designed to propel your business forward.</p>
            </div>
            <Button href="/services" variant="secondary" size="lg" className="self-start md:self-auto">Explore Services <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex items-center gap-3">
            <div ref={rail} role="tablist" aria-label="Services" className="no-scrollbar flex flex-1 gap-3 overflow-x-auto py-1">
              {services.map((sv, i) => {
                const Icon = serviceIcons[sv.icon];
                return (
                  <button
                    key={sv.slug}
                    role="tab"
                    aria-selected={i === idx}
                    onClick={() => setIdx(i)}
                    className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition ${i === idx ? "border-brand bg-brand text-white shadow-lg shadow-brand/40" : "border-line bg-card text-muted hover:border-brand-accent/50 hover:text-heading"}`}
                  >
                    <Icon className="h-4 w-4" /> {sv.title}
                  </button>
                );
              })}
            </div>
            <div className="hidden gap-2 sm:flex">
              <button onClick={() => scroll(-1)} aria-label="Scroll left" className="glass rounded-full p-2.5 transition hover:bg-card-strong"><ChevronLeft className="h-4 w-4" /></button>
              <button onClick={() => scroll(1)} aria-label="Scroll right" className="glass rounded-full p-2.5 transition hover:bg-card-strong"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </Reveal>

        <div key={s.slug} role="tabpanel" className="glass mt-6 grid gap-8 rounded-[28px] p-6 sm:p-10 lg:grid-cols-2 lg:gap-12" style={{ animation: "svcIn .45s ease" }}>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold sm:text-4xl">{s.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">{s.description}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {s.tags.map((t) => (
                <span key={t} className="rounded-lg border border-line bg-card px-3.5 py-1.5 text-xs font-medium text-fg">{t}</span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="secondary" size="lg" className="!bg-emerald-300 !text-emerald-950 !border-transparent hover:!bg-emerald-200">
                Let&apos;s Chat <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <ServiceArt icon={s.icon} className="h-full min-h-[320px] w-full" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
              <p className="text-sm leading-relaxed text-white/90">&ldquo;{s.quote}&rdquo;</p>
              <Link href={`/services/${s.slug}`} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:underline">Learn more <ArrowRight className="h-3 w-3" /></Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes svcIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
