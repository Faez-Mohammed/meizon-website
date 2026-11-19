import { Hero } from "@/components/sections/Hero";
import { DevicePreview } from "@/components/sections/DevicePreview";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { ProductsPreview } from "@/components/sections/ProductsPreview";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { QuoteForm } from "@/components/sections/QuoteForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DevicePreview />
      <ServicesShowcase />
      <ServicesMarquee />
      <ProductsPreview />
      <About />
      <Testimonials />
      <QuoteForm />
    </>
  );
}
