"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { navLinks } from "@/lib/data/site";

/**
 * Fixed top bar. Transparent over the hero, turns into a compact, blurred dark bar after
 * the user scrolls. On small screens the links move into a full-screen menu.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) lenis?.stop();
    else lenis?.start();
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [menuOpen, lenis]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-[background-color,padding,backdrop-filter] duration-500 ${
        solid
          ? "bg-text-dark/90 py-4 backdrop-blur-md"
          : "bg-transparent py-6 md:pt-[clamp(1.5rem,3.6vw,4.3rem)]"
      }`}
    >
      <div className="px-gutter flex items-start justify-between">
        <a href="#top" aria-label="Souza Depieri Advogados — início" className="shrink-0">
          <Image
            src="/refs/images/white-logo.png"
            alt="Souza Depieri Advogados"
            width={163}
            height={84}
            priority
            className={`h-auto transition-[width] duration-500 ${
              solid ? "w-28" : "w-28 md:w-[clamp(7rem,8.5vw,10.2rem)]"
            }`}
          />
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul
            className={`flex gap-[clamp(1.5rem,3.5vw,4.2rem)] transition-[margin] duration-500 ${
              solid ? "mt-3" : "mt-[1.1vw]"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="type-btn relative font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary-light after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="grid size-11 place-items-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <nav
        id="mobile-menu"
        aria-label="Principal (mobile)"
        className={`fixed inset-x-0 top-[calc(var(--header-h)-0.75rem)] bottom-0 bg-text-dark px-gutter transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-8 pt-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
