import type { ReactNode } from "react";

type ButtonVariant = "light" | "dark";

interface ButtonLinkProps {
  href: string;
  variant: ButtonVariant;
  children: ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  // Light purple with dark text — used on dark backgrounds.
  light: "bg-primary-light text-text-dark hover:bg-white",
  // Dark purple with white text — used on light backgrounds and photos.
  dark: "bg-primary-dark text-white hover:bg-text-dark",
};

/** Rectangular call-to-action button used in the section headers and the hero. */
export function ButtonLink({ href, variant, children, className = "" }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`type-btn inline-flex h-[clamp(3.25rem,3.18vw,3.8rem)] items-center justify-center whitespace-nowrap px-[clamp(1.5rem,1.67vw,2rem)] font-bold transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
