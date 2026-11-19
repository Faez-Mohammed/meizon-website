import { useId } from "react";

/** MEIZON logo: gradient hexagon mark + geometric wordmark. Wordmark follows currentColor. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="3" y1="1" x2="37" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset=".55" stopColor="#3341c4" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <path d="M20 1.5 36.5 11v19L20 39.5 3.5 30V11Z" fill={`url(#${id})`} />
      <path d="M11.5 27.5v-14l8.5 8 8.5-8v14" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="9.2" r="1.8" fill="#fff" />
    </svg>
  );
}

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 text-heading ${className}`} role="img" aria-label="MEIZON">
      <LogoMark className="h-full w-auto" />
      <svg viewBox="0 0 186 28" className="h-[56%] w-auto" fill="none" aria-hidden="true">
        <g transform="translate(0 0)" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="miter">
          <path d="M2 26V2l12 14L26 2v24" />
          <path d="M62 2H40v24h22M40 14h18" />
          <path d="M76 2v24" />
          <path d="M88 2h22L88 26h22" />
          <rect x="124" y="2" width="22" height="24" rx="11" />
          <path d="M160 26V2l22 24V2" />
        </g>
      </svg>
    </span>
  );
}
