"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPoints, stats } from "@/data/site";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1400, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[40px] bg-brand/30 blur-3xl" />
            <div className="glass relative flex aspect-square items-center justify-center overflow-hidden rounded-[36px]">
              <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 400 400" aria-hidden="true">
                <g fill="none" stroke="currentColor" className="text-brand-accent" strokeOpacity=".35">
                  <circle cx="200" cy="200" r="80" /><circle cx="200" cy="200" r="130" /><circle cx="200" cy="200" r="180" />
                </g>
                <circle cx="330" cy="120" r="6" className="fill-brand-light" /><circle cx="70" cy="290" r="5" className="fill-brand-accent" />
              </svg>
              <LogoMark className="relative h-44 w-44 drop-shadow-[0_0_40px_rgba(96,165,250,.6)]" />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-brand px-6 py-4 text-white shadow-2xl shadow-brand/50 sm:-right-8">
              <p className="text-2xl font-extrabold">98%</p>
              <p className="text-xs text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-light">About MEIZON</p>
          <h2 id="about-title" className="text-4xl font-bold sm:text-5xl">Transforming Ideas into <span className="text-gradient">Digital Reality</span></h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Founded with a vision to empower businesses through technology, MEIZON has grown into a leading provider of comprehensive IT solutions. We combine technical expertise with creative innovation to deliver products that drive success.
          </p>
          <ul className="mt-7 space-y-3.5">
            {aboutPoints.map((p) => (
              <li key={p} className="flex items-center gap-3 text-fg"><CheckCircle2 className="h-5 w-5 shrink-0 text-brand-light" />{p}</li>
            ))}
          </ul>
          <Button href="/contact" size="lg" className="mt-9">Learn More About Us <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Button>
        </Reveal>
      </div>
      <Reveal className="mx-auto mt-20 max-w-7xl px-6">
        <dl className="glass grid grid-cols-2 gap-y-8 rounded-3xl px-6 py-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="order-1 text-4xl font-extrabold text-gradient sm:text-5xl"><Counter to={s.value} suffix={s.suffix} /></dd>
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
