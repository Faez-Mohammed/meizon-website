import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light disabled:opacity-60 disabled:pointer-events-none";
const variants = {
  primary: "bg-brand text-white shadow-lg shadow-brand/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-brand/50",
  secondary: "border border-line bg-card text-heading hover:-translate-y-0.5 hover:bg-card-strong",
  ghost: "text-brand-light hover:text-heading",
};
const sizes = { md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };

export function Button({ href, children, variant = "primary", size = "md", className = "", type = "button", onClick, disabled }: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
