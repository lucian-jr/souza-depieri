import Image from "next/image";
import { navLinks, socialLinks } from "@/lib/data/site";

/** Site footer: logo + navigation, then copyright + social links. */
export function Footer() {
  return (
    <footer className="bg-background-offwhite px-gutter pt-[clamp(4rem,9.1vw,11rem)] pb-[clamp(2.5rem,3.9vw,4.7rem)] text-text-dark">
      <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-10">
        <a href="#top" aria-label="Souza Depieri Advogados — voltar ao topo">
          <Image
            src="/refs/images/black-logo.png"
            alt="Souza Depieri Advogados"
            width={163}
            height={84}
            className="h-auto w-[clamp(7rem,8.5vw,10.2rem)]"
          />
        </a>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-[clamp(1.5rem,3.5vw,4.2rem)] gap-y-3 md:mt-[1.1vw]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="type-btn relative font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary-dark after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-[clamp(2.5rem,3.3vw,4rem)] flex flex-wrap items-center justify-between gap-x-10 gap-y-4 text-[clamp(0.9375rem,0.95vw,1.125rem)]">
        <p>© 2026 Souza Depieri Advogados. Todos os direitos reservados.</p>
        <ul className="flex gap-[clamp(1.5rem,2.6vw,3.1rem)]">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-primary-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
