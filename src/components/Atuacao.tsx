"use client";

import { useRef } from "react";
import Image from "next/image";
import { Lines } from "@/components/ui/Lines";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SliderArrows } from "@/components/ui/SliderArrows";
import { useDragSlider } from "@/hooks/useDragSlider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ctaLinks } from "@/lib/data/site";
import type { PracticeArea } from "@/lib/types";

interface AtuacaoProps {
  areas: PracticeArea[];
}

/**
 * "Atuação": headline + draggable slider of practice-area cards.
 * The slider bleeds off the right edge of the viewport, exactly like the prototype.
 */
export function Atuacao({ areas }: AtuacaoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const { viewportRef, trackRef, prev, next, canPrev, canNext } =
    useDragSlider<HTMLUListElement>();

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      aria-labelledby="atuacao-title"
      className="overflow-hidden bg-background-offwhite pt-[clamp(4rem,8.65vw,10.4rem)] pb-[clamp(4rem,9.5vw,11.4rem)]"
    >
      <div className="px-gutter">
        <SectionHeader
          label="Atuação"
          ctaLabel="Conheça nossa atuação"
          ctaHref={ctaLinks.atuacao}
          ctaVariant="dark"
        />

        <div className="mt-[clamp(2.5rem,5.5vw,6.6rem)] flex flex-wrap items-end justify-between gap-x-10 gap-y-8">
          <div>
            <h2 id="atuacao-title" data-reveal className="type-h2">
              <Lines
                lines={[
                  "O Direito é o ponto de partida. Mas é o seu",
                  "negócio que define até onde precisamos ir.",
                ]}
              />
            </h2>
            <p data-reveal data-reveal-delay="0.1" className="type-lead mt-[clamp(1rem,1.25vw,1.5rem)]">
              <Lines
                lines={[
                  "Nossa atuação parte de uma sólida base jurídica e se amplia a partir da",
                  "compreensão dos diferentes fatores que impactam uma decisão empresarial.",
                ]}
              />
            </p>
          </div>

          <div data-reveal data-reveal-delay="0.2">
            <SliderArrows
              onPrev={prev}
              onNext={next}
              canPrev={canPrev}
              canNext={canNext}
              controls="áreas de atuação"
            />
          </div>
        </div>
      </div>

      <div ref={viewportRef} className="mt-[clamp(2.5rem,6.45vw,7.75rem)] overflow-hidden">
        <ul
          ref={trackRef}
          className="pl-gutter pr-gutter relative flex w-max gap-[clamp(1rem,3.96vw,4.75rem)]"
        >
          {areas.map((area, index) => (
            <li
              key={area.id}
              data-reveal
              data-reveal-delay={Math.min(index, 3) * 0.1}
              className="w-[clamp(15rem,17.4vw,20.9rem)] shrink-0"
            >
              <PracticeCard area={area} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PracticeCard({ area }: { area: PracticeArea }) {
  return (
    <article className="group relative flex h-full select-none flex-col bg-gray transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_40px_-24px_rgba(36,34,35,0.45)]">
      <div className="relative overflow-hidden">
        <Image
          src={area.thumbnail.src}
          alt={area.thumbnail.alt}
          width={area.thumbnail.width}
          height={area.thumbnail.height}
          draggable={false}
          sizes="(min-width: 1920px) 334px, 17.4vw"
          className="pointer-events-none h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {/* Accent bar that grows on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary-light transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </div>

      <div className="flex-1 px-[clamp(1.25rem,1.56vw,1.875rem)] pt-[clamp(1.5rem,1.93vw,2.3rem)] pb-[clamp(1.5rem,1.82vw,2.2rem)]">
        <h3 className="type-card-title transition-colors duration-300 group-hover:text-primary-dark">
          {area.title}
        </h3>
        <p className="type-card-body mt-[clamp(0.75rem,1.35vw,1.6rem)]">{area.description}</p>
      </div>
    </article>
  );
}
