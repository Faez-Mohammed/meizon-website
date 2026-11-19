import { serviceIcons } from "@/components/ui/Illustrations";
import { services } from "@/data/services";

export function ServicesMarquee() {
  const items = [...services, ...services];
  return (
    <section aria-label="Our capabilities" className="overflow-hidden py-10">
      <div className="marquee-mask">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {items.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <span key={i} aria-hidden={i >= services.length} className="glass flex items-center gap-2.5 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold text-heading">
                <Icon className="h-4 w-4 text-brand-light" /> {s.title}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
