import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ProductArt } from "@/components/ui/Illustrations";
import type { Product } from "@/data/products";

export function ProductCard({ p, count = 3 }: { p: Product; count?: number }) {
  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:border-brand-accent/40 hover:shadow-2xl hover:shadow-brand/20">
      <div className="relative bg-gradient-to-br from-brand/30 via-brand/10 to-transparent p-6 pb-0">
        <div className="mx-auto max-w-[360px] overflow-hidden rounded-t-xl border border-b-0 border-white/10 shadow-xl transition duration-500 group-hover:scale-[1.03]">
          <ProductArt kind={p.kind} className="w-full" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-bold">{p.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
        <p className="mb-3 mt-6 text-[11px] font-bold uppercase tracking-widest text-brand-light">Key features</p>
        <ul className="space-y-2">
          {p.features.slice(0, count).map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-fg"><Check className="h-4 w-4 text-brand-light" />{f}</li>
          ))}
        </ul>
        <Link href={`/products/${p.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-light transition hover:text-heading">
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
