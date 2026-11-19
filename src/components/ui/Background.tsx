/** Fixed glowing ring + soft blobs, the signature backdrop of the page. Pure CSS/SVG. */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-[18%] top-[6%] h-[820px] w-[820px] animate-spin-slow rounded-full opacity-60 blur-[2px] dark-ring" />
      <div className="absolute -left-[4%] top-[34%] h-[420px] w-[420px] rounded-full bg-fuchsia-600/15 blur-[110px]" />
      <div className="absolute right-[-10%] top-[-8%] h-[520px] w-[520px] rounded-full bg-brand/25 blur-[140px]" />
      <div className="absolute bottom-[-12%] right-[10%] h-[460px] w-[460px] rounded-full bg-brand-accent/15 blur-[140px]" />
      <style>{`
        .dark-ring{background:conic-gradient(from 90deg,rgba(51,65,196,0) 0deg,rgba(51,65,196,.75) 120deg,rgba(129,140,248,.5) 210deg,rgba(168,85,247,.35) 270deg,rgba(51,65,196,0) 330deg);
          -webkit-mask:radial-gradient(circle,transparent 52%,#000 53%,#000 68%,transparent 70%);mask:radial-gradient(circle,transparent 52%,#000 53%,#000 68%,transparent 70%);filter:blur(14px)}
        html.light .dark-ring{opacity:.25}
      `}</style>
    </div>
  );
}
