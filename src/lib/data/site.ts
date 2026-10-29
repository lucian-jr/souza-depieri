import type { NavLink } from "@/lib/types";

/** Primary navigation (header + footer). Targets are the in-page section ids. */
export const navLinks: NavLink[] = [
  { label: "O Escritório", href: "#trajetoria" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Inteligência", href: "#inteligencia" },
  { label: "Contato", href: "#contato" },
];

/**
 * Section call-to-action targets.
 * The prototype shows these buttons but does not specify their destinations, so they
 * currently scroll to the most relevant section.
 * TODO: point them to dedicated pages once those exist.
 */
export const ctaLinks = {
  hero: "#trajetoria",
  atuacao: "#atuacao",
  abordagem: "#inteligencia-decisoria",
  trajetoria: "#trajetoria",
  inteligencia: "#inteligencia",
  /** TODO: replace with the firm's real contact channel (mailto:, WhatsApp, contact page…). */
  contato: "#contato",
} as const;

/** TODO: replace with the firm's real social profile URLs. */
export const socialLinks: NavLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];
