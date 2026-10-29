"use client";

import { useRef } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Lines } from "@/components/ui/Lines";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ctaLinks } from "@/lib/data/site";

/** Hero: full-bleed building photo (stripes included), headline, intro copy and CTA. */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[52rem] items-end overflow-hidden bg-text-dark text-white md:h-[69.5vw]"
    >
      <Image
        src="/refs/images/1---HERO---Background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-bottom"
      />

      <div className="px-gutter w-full pt-40 pb-[max(7rem,13.9vw)]">
        <h1 id="hero-title" data-reveal className="type-display max-w-[9.8em]">
          Advocacia para decisões de alta complexidade.
        </h1>

        <div className="type-lead mt-[1.4em]">
          <p data-reveal data-reveal-delay="0.12" className="max-w-[32.5em]">
            <Lines
              lineClassName="lg:block"
              lines={[
                <>
                  A <strong className="font-medium">Souza Depieri Advogados</strong> atua na
                  construção de soluções
                </>,
                "jurídicas para empresas e organizações que precisam tomar",
                "decisões em ambientes complexos, integrando profundidade",
                "técnica, visão estratégica e compreensão do negócio.",
              ]}
            />
          </p>
          <p data-reveal data-reveal-delay="0.2" className="mt-[1.3em] max-w-[32.5em]">
            Direito para negócios que exigem mais do que respostas jurídicas.
          </p>
        </div>

        <div data-reveal data-reveal-delay="0.28" className="mt-[clamp(1.75rem,2.9vw,3.4rem)]">
          <ButtonLink href={ctaLinks.hero} variant="light">
            Conheça nosso escritório
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
