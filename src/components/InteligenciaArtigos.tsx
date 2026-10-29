"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Lines } from "@/components/ui/Lines";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SliderArrows } from "@/components/ui/SliderArrows";
import { useDragSlider } from "@/hooks/useDragSlider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ctaLinks } from "@/lib/data/site";
import type { Article } from "@/lib/types";

interface InteligenciaArtigosProps {
  /** Articles loaded on the server (`getArticles`) — mock today, Neon later. */
  articles: Article[];
}

/** "Inteligência": headline + draggable slider of articles, videos and books. */
export function InteligenciaArtigos({ articles }: InteligenciaArtigosProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const { viewportRef, trackRef, prev, next, canPrev, canNext } =
    useDragSlider<HTMLUListElement>();

  return (
    <section
      id="inteligencia"
      ref={sectionRef}
      aria-labelledby="inteligencia-title"
      className="bg-white px-gutter pt-[clamp(4rem,9.2vw,11rem)] pb-[clamp(4rem,9.8vw,11.7rem)]"
    >
      <SectionHeader
        label="Inteligência"
        ctaLabel="Explore novas perspectivas"
        ctaHref={ctaLinks.inteligencia}
        ctaVariant="dark"
      />

      <div className="mt-[clamp(2.5rem,5.5vw,6.6rem)] flex flex-wrap items-end justify-between gap-x-10 gap-y-8">
        <div>
          <h2 id="inteligencia-title" data-reveal className="type-h2">
            <Lines
              lines={["Pensamento para decisões que", "ainda não têm respostas óbvias."]}
            />
          </h2>
          <p data-reveal data-reveal-delay="0.1" className="type-lead mt-[clamp(1rem,1.25vw,1.5rem)]">
            <Lines
              lines={[
                "Conteúdos estratégicos sobre Direito, negócios, governança, regulação,",
                "inovação e as transformações que estão redesenhando o ambiente empresarial.",
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
            controls="artigos"
          />
        </div>
      </div>

      {/* The viewport is clipped at the content column, so the cards never bleed. */}
      <div ref={viewportRef} className="mt-[clamp(2rem,4.5vw,5.4rem)] overflow-hidden">
        <ul
          ref={trackRef}
          className="relative flex w-max gap-[clamp(1rem,4.2vw,5.05rem)]"
        >
          {articles.map((article, index) => (
            <li
              key={article.id}
              data-reveal
              data-reveal-delay={Math.min(index, 3) * 0.1}
              className="w-[clamp(17rem,25.26vw,30.3rem)] shrink-0"
            >
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative h-full select-none bg-gray transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_40px_-24px_rgba(36,34,35,0.45)]">
      <div className="relative overflow-hidden">
        <Image
          src={article.thumbnail.src}
          alt={article.thumbnail.alt}
          width={article.thumbnail.width}
          height={article.thumbnail.height}
          draggable={false}
          sizes="(min-width: 1920px) 485px, 25.3vw"
          className="pointer-events-none h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span className="type-btn absolute top-0 left-0 flex h-[clamp(2.75rem,3.55vw,4.25rem)] w-[clamp(5.5rem,6.98vw,8.4rem)] items-center bg-text-dark pl-[clamp(1.1rem,1.56vw,1.875rem)] font-bold text-white">
          {article.kind}
        </span>
      </div>

      <div className="px-[clamp(1.25rem,1.56vw,1.875rem)] pt-[clamp(1.5rem,2.2vw,2.6rem)] pb-[clamp(1.25rem,1.65vw,2rem)]">
        <p className="type-btn font-bold">{article.category}</p>
        <h3 className="mt-[clamp(0.75rem,1.4vw,1.7rem)] text-[clamp(1.125rem,1.3vw,1.5625rem)] leading-[1.2] font-normal">
          {article.title}
        </h3>
        <a
          href={article.href}
          className="type-btn mt-[clamp(0.9rem,1.35vw,1.65rem)] inline-flex items-center gap-1.5 font-bold text-primary-dark after:absolute after:inset-0 after:content-['']"
        >
          {article.ctaLabel}
          <ArrowRight
            className="size-[1em] transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
