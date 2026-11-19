import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site";

const tints = ["from-sky-400 to-brand", "from-violet-400 to-brand", "from-fuchsia-400 to-brand-accent", "from-emerald-400 to-brand-light", "from-amber-400 to-brand", "from-rose-400 to-brand-accent"];

function Avatar({ name, i }: { name: string; i: number }) {
  const initials = name.split(" ").map((w) => w[0]).join("");
  return (
    <span aria-hidden="true" className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tints[i % tints.length]} text-sm font-bold text-white`}>
      {initials}
    </span>
  );
}

export function Testimonials() {
  const rows = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden bg-card py-24" aria-labelledby="testi-title">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Testimonials" title="Trusted by" accent="Industry Leaders" center />
        <h2 id="testi-title" className="sr-only">Customer testimonials</h2>
      </div>
      <div className="marquee-mask mt-14">
        <div className="flex w-max animate-marquee-slow gap-6 hover:[animation-play-state:paused]">
          {rows.map((t, i) => (
            <figure key={i} aria-hidden={i >= testimonials.length} className="glass flex w-[340px] shrink-0 flex-col rounded-3xl p-7 sm:w-[400px]">
              <Quote className="h-8 w-8 text-brand-accent/70" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-fg">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <Avatar name={t.name} i={i % testimonials.length} />
                <span>
                  <span className="block font-semibold text-heading">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}, {t.company}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
