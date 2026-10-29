"use client";

import { useRef } from "react";
import Image from "next/image";
import { Lines } from "@/components/ui/Lines";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { gsap, useGSAP } from "@/lib/gsap";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ctaLinks } from "@/lib/data/site";

/**
 * "Inteligência Decisória": intro copy, the converging-lines infographic and the
 * closing statement box. The infographic is revealed left → right as it enters the viewport.
 */
export function InteligenciaDecisoria() {
  const sectionRef = useRef<HTMLElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  useGSAP(
    () => {
      const graph = graphRef.current;
      if (!graph) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          graph,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.8,
            ease: "power2.inOut",
            scrollTrigger: { trigger: graph, start: "top 80%", once: true },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="inteligencia-decisoria"
      ref={sectionRef}
      aria-labelledby="decisoria-title"
      className="bg-charcoal pt-[clamp(4rem,8.8vw,10.6rem)] pb-[clamp(4rem,8.8vw,10.6rem)] text-white"
    >
      <div className="px-gutter">
        <SectionHeader
          label="Inteligência Decisória"
          ctaLabel="Conheça nossa abordagem"
          ctaHref={ctaLinks.abordagem}
          ctaVariant="light"
        />

        <div className="mt-[clamp(2.5rem,5.5vw,6.6rem)] grid gap-x-10 gap-y-8 lg:grid-cols-[46.85%_1fr]">
          <h2 id="decisoria-title" data-reveal className="type-h2">
            <Lines
              lines={["E se o problema jurídico", "for apenas uma parte", "do problema?"]}
            />
          </h2>

          <div className="type-lead max-w-[32em] space-y-[1.2em]">
            <p data-reveal data-reveal-delay="0.1">
              <Lines
                lineClassName="lg:block"
                lines={[
                  "Empresas não enfrentam questão jurídicas de forma",
                  "isolada. Direito, estratégia, governança, tecnologia,",
                  "reputação, regulação e relações institucionais",
                  "frequentemente fazem parte de um mesmo sistema.",
                ]}
              />
            </p>
            <p data-reveal data-reveal-delay="0.2">
              <Lines
                lineClassName="lg:block"
                lines={[
                  "Olhar apenas uma dessas dimensões pode produzir uma",
                  "resposta juridicamente correta e ainda assim incompleta",
                  "para o negócio avançar. Por isso, nossa atuação começa",
                  "no Direito, mas busca compreender tudo aquilo que",
                  "influencia o crescimento de uma organização.",
                ]}
              />
            </p>
          </div>
        </div>

        {/* Infographic: seven dimensions converging into "Inteligência Decisória". */}
        <div
          ref={graphRef}
          className="mx-auto mt-[clamp(2.5rem,6.8vw,8.2rem)] w-full max-w-[1302px]"
        >
          <Image
            src="/refs/images/3---INTELIGENCIA---Grafico.png"
            alt="Infográfico: Direito, Estratégia, Governança, Tecnologia, Reputação, Regulação e Relações Institucionais convergem em Inteligência Decisória"
            width={2000}
            height={405}
            sizes="(min-width: 1920px) 1302px, 68vw"
            className="h-auto w-full"
          />
        </div>

        <div
          data-reveal
          className="mx-auto mt-[clamp(1.75rem,4.8vw,5.75rem)] flex w-full max-w-[847px] flex-col items-center gap-6 border border-[#c1c1c0] px-6 py-8 text-center md:flex-row md:gap-0 md:p-0 md:text-left"
        >
          <p className="text-[clamp(1.0625rem,1.2vw,1.4375rem)] leading-[1.35] font-bold uppercase md:w-[34.8%] md:text-center">
            <Lines lines={["Inteligência", "Decisória"]} lineClassName="block" />
          </p>
          <span
            aria-hidden="true"
            className="hidden h-[clamp(3rem,4.2vw,5.1rem)] w-0.5 bg-white md:block"
          />
          <p className="text-[clamp(1rem,1.15vw,1.375rem)] leading-[1.25] md:flex-1 md:px-[clamp(1.5rem,2.4vw,2.9rem)] md:py-[clamp(1.5rem,1.93vw,2.3rem)]">
            <Lines
              lineClassName="lg:block"
              lines={[
                "Transformar complexidade em clareza",
                "para que organizações decidam melhor.",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
