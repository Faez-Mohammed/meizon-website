import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductsPreview() {
  return (
    <section className="py-24" aria-labelledby="products-title">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-light">Our Products</p>
              <h2 id="products-title" className="max-w-xl text-4xl font-bold sm:text-5xl">Innovative Tools for <span className="text-gradient">Modern Business</span></h2>
              <p className="mt-4 max-w-xl text-lg text-muted">Discover our suite of powerful applications designed to transform how you operate, sell, and grow.</p>
            </div>
            <Button href="/products" variant="secondary" size="lg" className="self-start md:self-auto">View All Products <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}><ProductCard p={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
