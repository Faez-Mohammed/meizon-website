"use client";

import { useState } from "react";
import { ArrowRight, Laptop, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DesktopScreen, DeviceFrame, MobileScreen, TabletScreen } from "@/components/ui/Illustrations";
import { Reveal } from "@/components/ui/Reveal";

const tabs = [
  { id: "computer", label: "Computer", Icon: Laptop, title: "your", accent: "Computer",
    text: "Streamline your business operations with our comprehensive ERP solution. Access real-time data, manage resources efficiently, and make informed decisions from a single, intuitive dashboard right on your computer." },
  { id: "mobile", label: "Mobile", Icon: Smartphone, title: "your", accent: "Mobile",
    text: "Run your business from anywhere. Approve orders, check stock, track field teams and review reports in real time with a fast, secure mobile experience built for the way you work." },
  { id: "tablet", label: "Tablet", Icon: Tablet, title: "your", accent: "Tablet",
    text: "The perfect balance of portability and power. Analyze detailed reports, conduct presentations, and manage inventory with a touch-optimized interface designed for tablet devices." },
] as const;

export function DevicePreview() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("computer");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="relative py-16" aria-labelledby="preview-title">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-light">Preview Platform</p>
          <div role="tablist" aria-label="Choose a device" className="glass mx-auto flex w-fit gap-1 rounded-xl p-1.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition sm:px-6 ${active === t.id ? "bg-brand text-white shadow-lg shadow-brand/40" : "text-muted hover:text-heading"}`}
              >
                <t.Icon className="h-4 w-4" /> {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="mt-14 grid items-center gap-12 lg:grid-cols-2" role="tabpanel">
          <div className="animate-[fadeIn_.5s_ease]">
            <h2 id="preview-title" className="text-4xl font-bold sm:text-5xl">
              ERP on {tab.title} <span className="text-gradient">{tab.accent}</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{tab.text}</p>
            <Button href="/products/meizon-erp" size="lg" className="mt-8">Know more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Button>
          </div>
          <div className="animate-[fadeIn_.5s_ease]">
            {active === "computer" && <DeviceFrame kind="computer"><DesktopScreen className="w-full rounded-[10px]" /></DeviceFrame>}
            {active === "mobile" && <DeviceFrame kind="mobile"><MobileScreen className="w-full rounded-[28px]" /></DeviceFrame>}
            {active === "tablet" && <DeviceFrame kind="tablet"><TabletScreen className="w-full rounded-[12px]" /></DeviceFrame>}
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
