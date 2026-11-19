import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { company } from "@/data/site";

const quick = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
const svc = [
  { label: "Web Development", href: "/services/web-application-solutions" },
  { label: "Mobile App Development", href: "/services/mobile-application-solutions" },
  { label: "UI/UX Design", href: "/services/ui-ux-design-strategies" },
  { label: "ERP Solutions", href: "/services/custom-erp-solutions" },
  { label: "Cloud Infrastructure", href: "/services/cloud-services-infrastructure" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-9" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            MEIZON is a leading IT solutions provider helping businesses transform through innovative digital products.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-muted">
            {quick.map((l) => (
              <li key={l.label}><Link href={l.href} className="transition hover:text-brand-light">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest">Services</h3>
          <ul className="space-y-2.5 text-sm text-muted">
            {svc.map((l) => (
              <li key={l.label}><Link href={l.href} className="transition hover:text-brand-light">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest">Contact Us</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" /><address className="not-italic">{company.address.join(" ")}</address></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" /><a href={`tel:${company.phoneHref}`} className="hover:text-brand-light">{company.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" /><a href={`mailto:${company.email}`} className="hover:text-brand-light">{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {company.legal}. All rights reserved.
      </div>
    </footer>
  );
}
