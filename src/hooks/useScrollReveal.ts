"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Fade-up entrance animation (y: 30 → 0, opacity: 0 → 1) for every `[data-reveal]` element
 * inside `scope`, triggered once as the element enters the viewport.
 *
 * - Add `data-reveal` to any title / paragraph / card to animate it.
 * - Add `data-reveal-delay="0.15"` (seconds) to stagger siblings.
 * - Honours `prefers-reduced-motion`.
 * - Uses `useGSAP`, so every tween / ScrollTrigger is reverted on unmount (Strict Mode safe).
 */
export function useScrollReveal(
  scope: RefObject<HTMLElement | null>,
  selector = "[data-reveal]",
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(selector, root).forEach((el) => {
          gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: Number(el.dataset.revealDelay ?? 0),
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope },
  );
}
