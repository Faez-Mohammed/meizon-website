"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, navServices } from "@/data/site";

function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);
  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("meizon-theme", next ? "light" : "dark");
    } catch {}
  };
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="rounded-full p-2 text-muted transition hover:bg-card-strong hover:text-heading">
      {light ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-line bg-[var(--nav-bg)] backdrop-blur-xl" : "border-transparent"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="MEIZON home" className="shrink-0">
          <Logo className="h-9" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) =>
            l.dropdown ? (
              <div key={l.label} className="relative" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
                <Link href={l.href} className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-fg/90 transition hover:text-brand-light" aria-haspopup="true" aria-expanded={menu}>
                  {l.label} <ChevronDown className={`h-3.5 w-3.5 transition ${menu ? "rotate-180" : ""}`} />
                </Link>
                <div className={`absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-3 transition duration-200 ${menu ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
                  <div className="grid grid-cols-3 gap-6 rounded-2xl border border-line bg-[var(--bg)] p-6 shadow-2xl shadow-black/40">
                    {navServices.map((g) => (
                      <div key={g.group}>
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-brand-light">{g.group}</p>
                        <ul className="space-y-1">
                          {g.items.map((i) => (
                            <li key={i.label}>
                              <Link href={i.href} className="block rounded-lg px-2 py-1.5 text-sm text-muted transition hover:bg-card-strong hover:text-heading">
                                {i.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.label} href={l.href} className="rounded-full px-4 py-2 text-sm font-semibold text-fg/90 transition hover:text-brand-light">
                {l.label}
              </Link>
            ),
          )}
          <ThemeToggle />
          <Button href="/#quote" className="ml-2">Get a Free Quote</Button>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="rounded-full p-2 text-heading">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line px-6 pb-8 pt-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((l) =>
              l.dropdown ? (
                <div key={l.label}>
                  <button onClick={() => setMobileServices((v) => !v)} className="flex w-full items-center justify-between border-b border-line py-4 text-lg font-semibold text-heading" aria-expanded={mobileServices}>
                    Services <ChevronDown className={`h-5 w-5 transition ${mobileServices ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServices && (
                    <div className="space-y-4 border-b border-line py-4">
                      {navServices.map((g) => (
                        <div key={g.group}>
                          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-brand-light">{g.group}</p>
                          {g.items.map((i) => (
                            <Link key={i.label} href={i.href} className="block py-1.5 text-sm text-muted hover:text-heading">{i.label}</Link>
                          ))}
                        </div>
                      ))}
                      <Link href="/services" className="inline-block text-sm font-semibold text-brand-light">View all services →</Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={l.label} href={l.href} className="border-b border-line py-4 text-lg font-semibold text-heading">{l.label}</Link>
              ),
            )}
          </nav>
          <Button href="/#quote" size="lg" className="mt-6 w-full">Get a Free Quote</Button>
        </div>
      )}
    </header>
  );
}
