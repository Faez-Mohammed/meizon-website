import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DesktopScreen, DeviceFrame } from "@/components/ui/Illustrations";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 lg:pb-24 lg:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-accent">
            <Sparkles className="h-3.5 w-3.5" /> New: AI Integration
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Boost Your Digital Growth
            <br />
            With <span className="text-gradient">Intelligent</span> IT Solutions
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            We build scalable, secure, and future-proof digital products that empower your business to thrive in the modern era.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Let&apos;s talk <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Button>
            <Button href="/products" variant="secondary" size="lg">Explore products</Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-brand/30 blur-[90px]" />
          <div className="animate-float">
            <DeviceFrame kind="computer">
              <DesktopScreen className="w-full rounded-[10px]" />
            </DeviceFrame>
          </div>
          <div className="glass absolute -bottom-6 -left-2 hidden rounded-2xl px-5 py-3 sm:block">
            <p className="text-2xl font-bold text-heading">98%</p>
            <p className="text-xs text-muted">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
