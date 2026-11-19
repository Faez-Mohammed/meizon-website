import type { ReactNode } from "react";
import { Smartphone, Globe, Boxes, Palette, Cloud, BarChart3, Compass, Utensils } from "lucide-react";
import type { ServiceIcon } from "@/data/services";
import type { Product } from "@/data/products";

export const serviceIcons: Record<ServiceIcon, typeof Globe> = {
  smartphone: Smartphone,
  globe: Globe,
  boxes: Boxes,
  palette: Palette,
  cloud: Cloud,
  chart: BarChart3,
  compass: Compass,
  utensils: Utensils,
};

/* ---------- shared bits ---------- */
const ink = "#0f172a";
const soft = "#e8ecf6";
const brand = "#3341c4";

function Bars({ x, y, w, h, vals, color = brand }: { x: number; y: number; w: number; h: number; vals: number[]; color?: string }) {
  const bw = w / vals.length;
  return (
    <g>
      {vals.map((v, i) => (
        <rect key={i} x={x + i * bw + 3} y={y + h - v * h} width={bw - 6} height={v * h} rx={3} fill={color} opacity={0.35 + v * 0.65} />
      ))}
    </g>
  );
}

function Area({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const pts = [0.7, 0.5, 0.6, 0.3, 0.45, 0.2, 0.35, 0.1].map((v, i, a) => [x + (i * w) / (a.length - 1), y + v * h]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join(" ");
  return (
    <g>
      <path d={`${line} L${x + w} ${y + h} L${x} ${y + h}Z`} fill="url(#areaFill)" />
      <path d={line} stroke={brand} strokeWidth={2.5} fill="none" strokeLinejoin="round" />
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#4494f5" stopOpacity=".5" />
        <stop offset="1" stopColor="#4494f5" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="heat" x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="#34d399" />
        <stop offset=".5" stopColor="#fbbf24" />
        <stop offset="1" stopColor="#f87171" />
      </linearGradient>
    </defs>
  );
}

function Kpi({ x, y, label, value }: { x: number; y: number; label: string; value: string }) {
  return (
    <g>
      <rect x={x} y={y} width={118} height={52} rx={10} fill="#fff" stroke={soft} />
      <text x={x + 12} y={y + 21} fontSize="9" fill="#64748b">{label}</text>
      <text x={x + 12} y={y + 41} fontSize="17" fontWeight="700" fill={ink}>{value}</text>
    </g>
  );
}

/* ---------- Desktop ERP dashboard (light UI inside dark frame) ---------- */
export function DesktopScreen({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 390" className={className} role="img" aria-label="MEIZON ERP dashboard on a computer">
      <Defs />
      <rect width="620" height="390" rx="14" fill="#f6f8fd" />
      <rect width="620" height="30" rx="14" fill="#fff" />
      <rect y="16" width="620" height="14" fill="#fff" />
      {[16, 30, 44].map((c, i) => <circle key={i} cx={c} cy={15} r={4} fill={["#f87171", "#fbbf24", "#34d399"][i]} />)}
      <rect x="0" y="30" width="62" height="360" fill="#fff" />
      {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={18} y={50 + i * 40} width={26} height={26} rx={7} fill={i === 0 ? brand : soft} />)}
      <text x="82" y="58" fontSize="17" fontWeight="700" fill={ink}>Dashboard</text>
      <text x="82" y="72" fontSize="8.5" fill="#94a3b8">Overview · This quarter</text>
      <Kpi x={82} y={86} label="Revenue" value="$84.2K" />
      <Kpi x={210} y={86} label="Orders" value="7,052" />
      <Kpi x={338} y={86} label="Stock value" value="$29.6M" />
      <Kpi x={466} y={86} label="Active staff" value="134" />
      <rect x="82" y="152" width="270" height="214" rx="12" fill="#fff" stroke={soft} />
      <text x="96" y="174" fontSize="10" fontWeight="600" fill={ink}>Sales trend</text>
      <Area x={98} y={190} w={238} h={150} />
      <rect x="364" y="152" width="120" height="214" rx="12" fill="#fff" stroke={soft} />
      <text x="378" y="174" fontSize="10" fontWeight="600" fill={ink}>By branch</text>
      <Bars x={376} y={190} w={96} h={150} vals={[0.9, 0.55, 0.7, 0.35, 0.6]} />
      <rect x="496" y="152" width="108" height="214" rx="12" fill="#fff" stroke={soft} />
      <text x="508" y="174" fontSize="10" fontWeight="600" fill={ink}>Target</text>
      <circle cx="550" cy="248" r="34" fill="none" stroke={soft} strokeWidth="11" />
      <circle cx="550" cy="248" r="34" fill="none" stroke={brand} strokeWidth="11" strokeDasharray="160 214" strokeLinecap="round" transform="rotate(-90 550 248)" />
      <text x="550" y="253" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>75%</text>
      <rect x="512" y="308" width="76" height="8" rx="4" fill="url(#heat)" />
      <rect x="512" y="324" width="52" height="8" rx="4" fill={soft} />
    </svg>
  );
}

/* ---------- Mobile ---------- */
export function MobileScreen({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 420" className={className} role="img" aria-label="MEIZON mobile app">
      <Defs />
      <rect width="220" height="420" rx="30" fill="#f6f8fd" />
      <rect x="82" y="10" width="56" height="14" rx="7" fill={ink} />
      <text x="20" y="58" fontSize="16" fontWeight="700" fill={ink}>Good morning</text>
      <text x="20" y="74" fontSize="9" fill="#94a3b8">Here is your day at a glance</text>
      <rect x="20" y="90" width="180" height="92" rx="16" fill={brand} />
      <text x="34" y="116" fontSize="9" fill="#c7d2fe">Today&apos;s sales</text>
      <text x="34" y="144" fontSize="26" fontWeight="700" fill="#fff">$12,480</text>
      <Bars x={116} y={104} w={72} h={58} vals={[0.4, 0.7, 0.5, 0.9, 0.6]} color="#fff" />
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x={20 + i * 94} y={196} width={86} height={64} rx={14} fill="#fff" stroke={soft} />
          <text x={32 + i * 94} y={220} fontSize="8.5" fill="#64748b">{i ? "Pending" : "Orders"}</text>
          <text x={32 + i * 94} y={246} fontSize="18" fontWeight="700" fill={ink}>{i ? "18" : "246"}</text>
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="20" y={274 + i * 44} width="180" height="36" rx="12" fill="#fff" stroke={soft} />
          <circle cx="40" cy={292 + i * 44} r="10" fill={soft} />
          <rect x="58" y={284 + i * 44} width={80 - i * 12} height="7" rx="3.5" fill="#cbd5e1" />
          <rect x="58" y={296 + i * 44} width="50" height="6" rx="3" fill={soft} />
        </g>
      ))}
    </svg>
  );
}

/* ---------- Tablet ---------- */
export function TabletScreen({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 360" className={className} role="img" aria-label="MEIZON ERP on a tablet">
      <Defs />
      <rect width="520" height="360" rx="18" fill="#f6f8fd" />
      <text x="24" y="38" fontSize="14" fontWeight="700" fill={ink}>Sales Order</text>
      <rect x="24" y="52" width="230" height="124" rx="12" fill="#fff" stroke={soft} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={38} y={68 + i * 36} width={86} height={9} rx={4} fill="#cbd5e1" />
          <rect x={38} y={82 + i * 36} width={198} height={18} rx={6} fill={soft} />
        </g>
      ))}
      <rect x="268" y="52" width="228" height="124" rx="12" fill="#fff" stroke={soft} />
      <text x="282" y="74" fontSize="10" fontWeight="600" fill={ink}>Quick stats</text>
      <Area x={284} y={86} w={196} h={78} />
      <rect x="24" y="190" width="330" height="150" rx="12" fill="#fff" stroke={soft} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x={38} y={206 + i * 26} width={i === 0 ? 292 : 292} height={i === 0 ? 14 : 18} rx={5} fill={i === 0 ? brand : i % 2 ? "#f1f4fb" : "#fff"} opacity={i === 0 ? 0.9 : 1} />
          <rect x={46} y={211 + i * 26 + (i === 0 ? 0 : 2)} width={70} height={6} rx={3} fill={i === 0 ? "#fff" : "#cbd5e1"} />
        </g>
      ))}
      <rect x="368" y="190" width="128" height="150" rx="12" fill="#fff" stroke={soft} />
      <text x="382" y="212" fontSize="10" fontWeight="600" fill={ink}>Summary</text>
      {[0, 1, 2].map((i) => <rect key={i} x={382} y={226 + i * 20} width={100} height={8} rx={4} fill={soft} />)}
      <rect x="382" y="296" width="100" height="30" rx="15" fill={brand} />
      <text x="432" y="315" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">Save order</text>
    </svg>
  );
}

/* ---------- Device frames ---------- */
export function DeviceFrame({ kind, children }: { kind: "computer" | "mobile" | "tablet"; children: ReactNode }) {
  const shell = "relative rounded-[28px] border border-white/15 bg-[#0d1224] shadow-2xl shadow-brand/30 ring-1 ring-black/40";
  if (kind === "mobile")
    return <div className={`${shell} mx-auto w-[210px] p-2.5 sm:w-[240px] rounded-[38px]`}>{children}</div>;
  if (kind === "tablet") return <div className={`${shell} mx-auto w-full max-w-[520px] p-3`}>{children}</div>;
  return (
    <div className="mx-auto w-full max-w-[640px]">
      <div className={`${shell} p-2.5 rounded-[18px]`}>{children}</div>
      <div className="mx-auto h-3 w-[86%] rounded-b-2xl bg-gradient-to-b from-[#1b2240] to-[#0d1224]" />
      <div className="mx-auto h-1.5 w-[30%] rounded-b-xl bg-[#0d1224]" />
    </div>
  );
}

/* ---------- Product art ---------- */
function CrmScreen({ className = "" }: { className?: string }) {
  const cols = ["New", "Contacted", "Proposal", "Won"];
  return (
    <svg viewBox="0 0 620 390" className={className} role="img" aria-label="MEIZON CRM pipeline board">
      <rect width="620" height="390" rx="14" fill="#f6f8fd" />
      <text x="24" y="38" fontSize="16" fontWeight="700" fill={ink}>Sales Pipeline</text>
      <rect x="500" y="20" width="96" height="26" rx="13" fill={brand} />
      <text x="548" y="37" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">+ New lead</text>
      {cols.map((c, i) => (
        <g key={c}>
          <rect x={24 + i * 148} y={62} width={140} height={308} rx={12} fill="#eef1fa" />
          <text x={36 + i * 148} y={84} fontSize="10" fontWeight="700" fill={ink}>{c}</text>
          {Array.from({ length: 4 - (i > 2 ? 2 : 0) - (i === 1 ? 1 : 0) }).map((_, j) => (
            <g key={j}>
              <rect x={34 + i * 148} y={98 + j * 66} width={120} height={56} rx={10} fill="#fff" stroke={soft} />
              <rect x={44 + i * 148} y={110 + j * 66} width={70 - j * 8} height={7} rx={3.5} fill="#cbd5e1" />
              <rect x={44 + i * 148} y={124 + j * 66} width={44} height={6} rx={3} fill={soft} />
              <circle cx={136 + i * 148} cy={135 + j * 66} r={8} fill={["#4494f5", "#818cf8", "#34d399", "#fbbf24"][(i + j) % 4]} />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function PosScreen({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 390" className={className} role="img" aria-label="MEIZON POS checkout">
      <rect width="620" height="390" rx="14" fill="#f6f8fd" />
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <rect x={24 + (i % 4) * 98} y={24 + Math.floor(i / 4) * 118} width={90} height={110} rx={12} fill="#fff" stroke={soft} />
          <rect x={34 + (i % 4) * 98} y={34 + Math.floor(i / 4) * 118} width={70} height={52} rx={8} fill={["#c7d2fe", "#bae6fd", "#bbf7d0", "#fde68a"][i % 4]} />
          <rect x={34 + (i % 4) * 98} y={96 + Math.floor(i / 4) * 118} width={56} height={7} rx={3.5} fill="#cbd5e1" />
          <text x={34 + (i % 4) * 98} y={122 + Math.floor(i / 4) * 118} fontSize="11" fontWeight="700" fill={ink}>${(i + 2) * 3}.00</text>
        </g>
      ))}
      <rect x="428" y="24" width="168" height="342" rx="14" fill="#fff" stroke={soft} />
      <text x="442" y="48" fontSize="11" fontWeight="700" fill={ink}>Current order</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={442} y={62 + i * 34} width={80} height={7} rx={3.5} fill="#cbd5e1" />
          <rect x={442} y={75 + i * 34} width={40} height={6} rx={3} fill={soft} />
          <text x={582} y={74 + i * 34} textAnchor="end" fontSize="10" fontWeight="600" fill={ink}>${(i + 2) * 6}</text>
        </g>
      ))}
      <line x1="442" y1="214" x2="582" y2="214" stroke={soft} />
      <text x="442" y="238" fontSize="10" fill="#64748b">Total</text>
      <text x="582" y="240" textAnchor="end" fontSize="18" fontWeight="700" fill={ink}>$84.00</text>
      <rect x="442" y="262" width="140" height="34" rx="17" fill={brand} />
      <text x="512" y="283" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">Charge</text>
      <rect x="442" y="306" width="66" height="30" rx="15" fill={soft} />
      <rect x="516" y="306" width="66" height="30" rx="15" fill={soft} />
    </svg>
  );
}

function CommerceScreen({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 390" className={className} role="img" aria-label="MEIZON Commerce storefront">
      <rect width="620" height="390" rx="14" fill="#f6f8fd" />
      <rect width="620" height="44" rx="14" fill="#fff" />
      <rect x="24" y="16" width="60" height="10" rx="5" fill={brand} />
      <rect x="480" y="14" width="116" height="16" rx="8" fill={soft} />
      <rect x="24" y="60" width="572" height="120" rx="16" fill={brand} />
      <text x="48" y="104" fontSize="22" fontWeight="700" fill="#fff">New season, new look</text>
      <rect x="48" y="122" width="88" height="26" rx="13" fill="#fff" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={24 + i * 144} y={200} width={134} height={170} rx={12} fill="#fff" stroke={soft} />
          <rect x={34 + i * 144} y={210} width={114} height={92} rx={8} fill={["#c7d2fe", "#bae6fd", "#fbcfe8", "#bbf7d0"][i]} />
          <rect x={34 + i * 144} y={314} width={70} height={7} rx={3.5} fill="#cbd5e1" />
          <text x={34 + i * 144} y={346} fontSize="12" fontWeight="700" fill={ink}>${(i + 3) * 11}</text>
        </g>
      ))}
    </svg>
  );
}

function DevScreen({ className = "" }: { className?: string }) {
  const lines = [
    ["#818cf8", "GET", "/v1/orders?status=open"],
    ["#34d399", "200", "OK · 42 ms"],
    ["#e2e8f0", "{", ""],
    ["#e2e8f0", "  \"id\":", "\"ord_8f21\","],
    ["#e2e8f0", "  \"total\":", "84.00,"],
    ["#e2e8f0", "  \"status\":", "\"open\""],
    ["#e2e8f0", "}", ""],
  ];
  return (
    <svg viewBox="0 0 620 390" className={className} role="img" aria-label="MEIZON developer API console">
      <rect width="620" height="390" rx="14" fill="#0b1120" />
      {[16, 30, 44].map((c, i) => <circle key={i} cx={c} cy={16} r={4} fill={["#f87171", "#fbbf24", "#34d399"][i]} />)}
      {lines.map((l, i) => (
        <text key={i} x={28} y={72 + i * 30} fontSize="14" fontFamily="monospace" fill={l[0]}>
          {l[1]} <tspan fill="#94a3b8">{l[2]}</tspan>
        </text>
      ))}
      <rect x="28" y="300" width="260" height="44" rx="10" fill="#1e2747" />
      <text x="44" y="327" fontSize="13" fontFamily="monospace" fill="#60a5fa">npm i @meizon/sdk</text>
    </svg>
  );
}

export function ProductArt({ kind, className = "" }: { kind: Product["kind"]; className?: string }) {
  switch (kind) {
    case "crm": return <CrmScreen className={className} />;
    case "pos": return <PosScreen className={className} />;
    case "commerce": return <CommerceScreen className={className} />;
    case "dev": return <DevScreen className={className} />;
    case "mobile": return <div className="flex items-end justify-center gap-4"><MobileScreen className={`${className} max-w-[130px]`} /><MobileScreen className={`${className} max-w-[110px] translate-y-6 opacity-90`} /></div>;
    default: return <DesktopScreen className={className} />;
  }
}

/* ---------- Service art: glass tile with orbit ---------- */
export function ServiceArt({ icon, className = "" }: { icon: ServiceIcon; className?: string }) {
  const Icon = serviceIcons[icon];
  return (
    <div className={`relative isolate flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b2370] via-[#3341c4] to-[#7c6df2] ${className}`}>
      <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="absolute -bottom-12 -left-8 h-56 w-56 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 400" aria-hidden="true">
        <g fill="none" stroke="#fff" strokeOpacity=".35">
          <circle cx="200" cy="200" r="70" />
          <circle cx="200" cy="200" r="120" />
          <circle cx="200" cy="200" r="170" />
          <circle cx="200" cy="200" r="220" />
        </g>
        <circle cx="320" cy="130" r="6" fill="#fff" />
        <circle cx="86" cy="262" r="5" fill="#fff" />
        <circle cx="250" cy="352" r="4" fill="#fff" />
      </svg>
      <div className="relative animate-float rounded-[28px] border border-white/30 bg-white/15 p-8 shadow-2xl backdrop-blur-md">
        <Icon className="h-20 w-20 text-white" strokeWidth={1.4} aria-hidden="true" />
      </div>
    </div>
  );
}
