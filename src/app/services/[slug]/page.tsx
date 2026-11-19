import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServiceArt } from "@/components/ui/Illustrations";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.description } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 lg:pt-20">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-heading"><ArrowLeft className="h-4 w-4" /> All services</Link>
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{s.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{s.description}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {s.points.map((p) => (
                <li key={p} className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium"><Check className="h-4 w-4 shrink-0 text-brand-light" />{p}</li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/#quote" size="lg">Get a Free Quote</Button>
              <Button href="/contact" variant="secondary" size="lg">Talk to an expert</Button>
            </div>
          </div>
          <ServiceArt icon={s.icon} className="aspect-[4/3] w-full" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="process-title">
        <h2 id="process-title" className="text-3xl font-bold sm:text-4xl">How we <span className="text-gradient">deliver</span></h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {s.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 80}>
              <li className="glass h-full rounded-2xl p-6">
                <span className="text-sm font-bold text-brand-light">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {s.tags.map((t) => <span key={t} className="rounded-full border border-line bg-card px-4 py-1.5 text-xs font-medium">{t}</span>)}
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
