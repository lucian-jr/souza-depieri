"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  ChartNoAxesColumn,
  GraduationCap,
  Landmark,
  Lightbulb,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { Lines } from "@/components/ui/Lines";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { gsap, useGSAP } from "@/lib/gsap";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ctaLinks } from "@/lib/data/site";
import type { TrajectoryIconName, TrajectoryItem } from "@/lib/types";

const icons: Record<TrajectoryIconName, LucideIcon> = {
  graduation: GraduationCap,
  advocacy: ChartNoAxesColumn,
  governance: Landmark,
  science: FileText,
  innovation: Lightbulb,
};

interface TrajetoriaProps {
  items: TrajectoryItem[];
}

/**
 * "Trajetória": profile of Matheus de Souza Depieri with a layered parallax.
 *
 * Depth is created with two layers moved by a scrubbed ScrollTrigger:
 *  - background (concrete wall) drifts slowly → `yPercent: -6 → 6`
 *  - foreground (the founder, transparent PNG) moves faster, in the opposite sense
 *    → `yPercent: 14 → -14`
 * At the mid-point of the scroll both layers sit exactly where the prototype places them.
 */
export function Trajetoria({ items }: TrajetoriaProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  useScrollReveal(sectionRef);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const scrollTrigger = () => ({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        });

        gsap.fromTo(
          backgroundRef.current,
          { yPercent: -6 },
          { yPercent: 6, ease: "none", scrollTrigger: scrollTrigger() },
        );

        gsap.fromTo(
          foregroundRef.current,
          { yPercent: 14 },
          { yPercent: -14, ease: "none", scrollTrigger: scrollTrigger() },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="trajetoria"
      ref={sectionRef}
      aria-labelledby="trajetoria-title"
      className="relative isolate overflow-hidden bg-[#5f5f68] pt-[clamp(4rem,10.7vw,12.8rem)] pb-[clamp(4rem,7.8vw,9.4rem)] text-white"
    >
      {/* Parallax layer 1 — background. Oversized so it can drift without exposing gaps. */}
      <div
        ref={backgroundRef}
        aria-hidden="true"
        className="absolute inset-x-0 -top-1/4 -z-20 h-[150%] will-change-transform"
      >
        <Image
          src="/refs/images/4---TRAJETORIA---Background-parallax.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Parallax layer 2 — foreground figure, anchored to the bottom of the section. */}
      <div
        ref={foregroundRef}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6vw] left-[8vw] -z-10 w-[140vw] will-change-transform lg:bottom-[-16.1vw] lg:left-[-5.5vw] lg:w-[106.7vw]"
      >
        <Image
          src="/refs/images/4---TRAJETORIA---Background-men-parallax.png"
          alt=""
          width={2048}
          height={2048}
          sizes="(min-width: 1024px) 107vw, 140vw"
          unoptimized
          className="h-auto w-full max-w-none"
        />
      </div>

      <div className="px-gutter">
        <SectionHeader
          label="Trajetória"
          ctaLabel="Conheça essa trajetória"
          ctaHref={ctaLinks.trajetoria}
          ctaVariant="dark"
        />

        <h2
          id="trajetoria-title"
          data-reveal
          className="type-h2 mt-[clamp(2.5rem,5.6vw,6.7rem)]"
        >
          <Lines
            lines={[
              "Uma trajetória para compreender a",
              "complexidade por diferentes perspectivas.",
            ]}
          />
        </h2>

        <div className="mt-[clamp(2rem,3.5vw,4.2rem)] grid gap-x-10 gap-y-10 lg:grid-cols-[45.45%_1fr]">
          {/* Name plate — on mobile it becomes the "stage" above the figure, shown last. */}
          <div className="order-2 min-h-[112vw] lg:order-1 lg:min-h-0">
            <div data-reveal className="lg:mt-[3.6vw]">
              <p className="text-[clamp(1.375rem,1.4vw,1.6875rem)] leading-[1.02] font-normal">
                <Lines lines={["Matheus", "de Souza", "Depieri"]} lineClassName="block" />
              </p>
              <p className="mt-[clamp(0.75rem,1.1vw,1.3rem)] text-[clamp(0.6875rem,0.63vw,0.75rem)] leading-[1.25] tracking-[0.08em] uppercase">
                <Lines lines={["Fundador", "Advogado", "Empresário"]} lineClassName="block" />
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="type-lead max-w-[35em] space-y-[1.2em]">
              <p data-reveal>
                <Lines
                  lineClassName="lg:block"
                  lines={[
                    <>
                      A atuação de{" "}
                      <strong className="font-bold">Matheus de Souza Depieri</strong> combina
                    </>,
                    "formação acadêmica, experiência em advocacia",
                    "empresarial, ambientes regulatórios, produção científica,",
                    "inovação e construção de conhecimento.",
                  ]}
                />
              </p>
              <p data-reveal>
                <Lines
                  lineClassName="lg:block"
                  lines={[
                    "Uma trajetória que desenvolveu a capacidade de conectar",
                    "disciplinas que tradicionalmente são analisadas de forma isolada.",
                  ]}
                />
              </p>
            </div>

            <TrajectoryAccordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Accordion list. Rows with `details` expand on click; the first row starts open. */
function TrajectoryAccordion({ items }: { items: TrajectoryItem[] }) {
  const [openId, setOpenId] = useState<string | null>(
    items.find((item) => item.details?.length)?.id ?? null,
  );

  return (
    <ul
      data-reveal
      className="mt-[clamp(1.75rem,3.1vw,3.7rem)] flex max-w-[800px] flex-col gap-[clamp(0.4rem,0.52vw,0.625rem)] text-text-dark"
    >
      {items.map((item) => {
        const Icon = icons[item.icon];
        const expandable = Boolean(item.details?.length);
        const isOpen = openId === item.id;
        const panelId = `trajectory-panel-${item.id}`;

        const header = (
          <>
            <Icon
              className="size-[clamp(1.5rem,1.7vw,2rem)] shrink-0 text-primary-dark"
              strokeWidth={1.3}
              aria-hidden="true"
            />
            <span className="text-[clamp(0.9375rem,1vw,1.1875rem)] leading-[1.3] font-bold whitespace-pre-line">
              {item.title}
            </span>
          </>
        );

        const headerClass =
          "flex min-h-[clamp(3.75rem,4.06vw,4.875rem)] w-full items-center gap-[clamp(1.25rem,2.6vw,3.1rem)] bg-gray px-[clamp(1.25rem,1.8vw,2.2rem)] py-3 text-left";

        return (
          <li key={item.id} className="bg-white">
            {expandable ? (
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={`${headerClass} cursor-pointer transition-colors duration-300 hover:bg-[#d9dbd4]`}
              >
                {header}
              </button>
            ) : (
              <div className={headerClass}>{header}</div>
            )}

            {expandable && (
              <div
                id={panelId}
                role="region"
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="pt-[clamp(0.6rem,0.7vw,0.85rem)] pr-6 pb-[clamp(1rem,1.5vw,1.8rem)] pl-[clamp(3.5rem,5.7vw,6.9rem)] text-[clamp(0.9375rem,1.04vw,1.25rem)] leading-[1.32]">
                    {item.details?.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
