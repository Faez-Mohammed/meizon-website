import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, accent, children, center = false }: { eyebrow?: string; title: string; accent?: string; children?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-light">{eyebrow}</p>}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {children && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{children}</p>}
    </div>
  );
}
