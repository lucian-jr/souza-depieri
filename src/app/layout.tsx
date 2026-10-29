import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

/**
 * Gotham, self-hosted from `public/refs/font/Gotham/`.
 * Weight map: Thin 100 · XLight 200 · Light 300 · Book 400 · Medium 500 · Bold 700 · Black 900.
 * The CSS variable is consumed by `fontFamily.sans` in `tailwind.config.ts`.
 */
const gotham = localFont({
  src: [
    { path: "../../public/refs/font/Gotham/Gotham-Thin.otf", weight: "100", style: "normal" },
    { path: "../../public/refs/font/Gotham/Gotham-XLight.otf", weight: "200", style: "normal" },
    { path: "../../public/refs/font/Gotham/Gotham-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/refs/font/Gotham/Gotham-Book.otf", weight: "400", style: "normal" },
    { path: "../../public/refs/font/Gotham/Gotham-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/refs/font/Gotham/Gotham-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/refs/font/Gotham/Gotham-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-gotham",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Souza Depieri Advogados | Advocacia para decisões de alta complexidade",
  description:
    "A Souza Depieri Advogados atua na construção de soluções jurídicas para empresas e organizações que precisam tomar decisões em ambientes complexos, integrando profundidade técnica, visão estratégica e compreensão do negócio.",
  openGraph: {
    title: "Souza Depieri Advogados",
    description: "Advocacia para decisões de alta complexidade.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#242223",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={gotham.variable} suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
