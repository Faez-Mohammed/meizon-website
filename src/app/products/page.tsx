import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/sections/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Products",
  description: "The MEIZON product suite: ERP, CRM, POS, mobile apps, commerce and developer tools.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:pt-24">
        <SectionHeading eyebrow="Product Suite" title="Everything You Need to" accent="Scale" center>
          From powerful ERP systems to seamless mobile experiences, our ecosystem of tools is built to drive efficiency and growth for your business.
        </SectionHeading>
        <h1 className="sr-only">MEIZON products</h1>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}><ProductCard p={p} count={4} /></Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <Reveal>
          <div className="glass rounded-[28px] bg-gradient-to-br from-brand/30 to-transparent p-10 text-center sm:p-14">
            <h2 className="text-3xl font-bold sm:text-4xl">Need a Custom Solution?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">We understand that every business is unique. Contact our team to discuss tailored solutions that fit your specific needs.</p>
            <Button href="/contact" size="lg" className="mt-8">Contact Sales</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
