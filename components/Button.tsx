import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dark";

const base =
  "inline-block rounded-[16px] px-5 py-4 font-poppins text-xl font-bold uppercase leading-tight tracking-wide text-white transition-colors sm:text-2xl lg:text-[29px] lg:leading-none";

const variants: Record<Variant, string> = {
  primary: "bg-primary hover:bg-[#1A1A1A]",
  dark: "bg-[#1A1A1A] hover:bg-primary",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
};

export default function Button({
  variant = "primary",
  className = "",
  href,
  onClick,
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
