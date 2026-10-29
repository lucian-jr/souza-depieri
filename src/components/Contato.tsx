"use client";

import { useRef } from "react";
import Image from "next/image";
import { Lines } from "@/components/ui/Lines";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ctaLinks } from "@/lib/data/site";

/** "Contato": closing call-to-action over the crystal-bars background. */
export function Contato() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="contato"
      ref={sectionRef}
      aria-labelledby="contato-title"
      className="relative isolate overflow-hidden bg-text-dark px-gutter pt-[clamp(4rem,8.75vw,10.5rem)] pb-[clamp(4rem,6.8vw,8.1rem)] text-white"
    >
      <Image
        src="/refs/images/6---CONTATO---Background.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-right"
      />
      {/* Keeps the copy legible when the artwork sits behind it on narrow screens. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-text-dark/55 lg:hidden" />

      <SectionHeader
        label="Contato"
        ctaLabel="Fale com nosso escritório"
        ctaHref={ctaLinks.contato}
        ctaVariant="light"
      />

      <div className="mt-[clamp(2.5rem,5.55vw,6.7rem)]">
        <h2 id="contato-title" data-reveal className="type-h2">
          <Lines
            lines={["Grandes decisões", "começam antes do", "problema jurídico surgir."]}
          />
        </h2>
        <p data-reveal data-reveal-delay="0.1" className="type-lead mt-[1.3em]">
          <Lines
            lines={[
              "Converse com a Souza Depieri Advogados",
              "sobre os desafios da sua organização.",
            ]}
          />
        </p>
      </div>
    </section>
  );
}
