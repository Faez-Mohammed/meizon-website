import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductArt } from "@/components/ui/Illustrations";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { products } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.description } : {};
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 lg:pt-20">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-heading"><ArrowLeft className="h-4 w-4" /> All products</Link>
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{p.name}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{p.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">Request a demo</Button>
              <Button href="/#quote" variant="secondary" size="lg">Get a Free Quote</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-brand/30 blur-[90px]" />
            <div className="mx-auto max-w-[620px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-brand/30">
              <ProductArt kind={p.kind} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="feat-title">
        <h2 id="feat-title" className="text-3xl font-bold sm:text-4xl">Key <span className="text-gradient">features</span></h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.features.map((f, i) => (
            <Reveal key={f} delay={i * 80}>
              <div className="glass h-full rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand-light"><Zap className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg font-bold">{f}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-center gap-3 text-fg"><Check className="h-5 w-5 shrink-0 text-brand-light" />{h}</li>
          ))}
        </ul>
      </section>
      <QuoteForm />
    </>
  );
}
