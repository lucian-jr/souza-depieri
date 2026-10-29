"use client";

import { useRef, useState } from "react";
import { gsap, Draggable, useGSAP } from "@/lib/gsap";

interface SliderControls {
  prev: () => void;
  next: () => void;
}

interface SliderState {
  canPrev: boolean;
  canNext: boolean;
}

/**
 * Horizontal draggable / clickable slider built on GSAP Draggable.
 *
 * Markup contract:
 * ```tsx
 * <div ref={viewportRef} className="overflow-hidden">   // clips the track
 *   <div ref={trackRef} className="relative flex w-max"> // moves horizontally
 *     <article />…                                       // direct children = slides
 *   </div>
 * </div>
 * ```
 *
 * - Drag (mouse / touch) with edge resistance, then snaps to the closest slide.
 * - `prev` / `next` animate smoothly to the previous / next slide.
 * - `canPrev` / `canNext` drive the disabled state of the arrow buttons.
 * - Recomputes bounds when the viewport or the track change size.
 * - Cleaned up by `useGSAP` (Strict Mode safe).
 */
export function useDragSlider<TTrack extends HTMLElement = HTMLDivElement>() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<TTrack>(null);
  const controls = useRef<SliderControls>({ prev: () => {}, next: () => {} });
  const [state, setState] = useState<SliderState>({ canPrev: false, canNext: false });

  useGSAP(
    () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      /** Smallest (most negative) x the track may reach. 0 when everything fits. */
      const getMinX = () => Math.min(0, viewport.clientWidth - track.offsetWidth);
      const clampX = (x: number) => gsap.utils.clamp(getMinX(), 0, x);
      const currentX = () => Number(gsap.getProperty(track, "x"));

      /** x positions (descending, ≤ 0) that align each slide with the track's left padding. */
      const getSnapPoints = () => {
        const padLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        const points = Array.from(track.children).map((child) =>
          clampX(-((child as HTMLElement).offsetLeft - padLeft)),
        );
        points.push(getMinX());
        return Array.from(new Set(points.map(Math.round))).sort((a, b) => b - a);
      };

      const syncState = () => {
        const x = currentX();
        const next: SliderState = { canPrev: x < -2, canNext: x > getMinX() + 2 };
        setState((prev) =>
          prev.canPrev === next.canPrev && prev.canNext === next.canNext ? prev : next,
        );
      };

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /** True while a drag gesture (and the click that trails it) is in progress. */
      let isDragging = false;

      const [draggable] = Draggable.create(track, {
        type: "x",
        bounds: { minX: getMinX(), maxX: 0 },
        edgeResistance: 0.85,
        cursor: "grab",
        activeCursor: "grabbing",
        minimumMovement: 6,
        zIndexBoost: false,
        onDrag: syncState,
        onDragStart: () => {
          isDragging = true;
        },
        onDragEnd: function (this: Draggable) {
          // Bias the snap by the last movement so a quick flick advances a slide.
          const projected = clampX(this.x + this.deltaX * 10);
          const snapped = gsap.utils.snap(getSnapPoints(), projected);
          goTo(snapped);
        },
        onRelease: () => {
          // Swallow the click that follows a drag so links inside slides don't fire.
          window.setTimeout(() => {
            isDragging = false;
          }, 0);
        },
      });

      const blockClickAfterDrag = (event: MouseEvent) => {
        if (isDragging) {
          event.preventDefault();
          event.stopPropagation();
        }
      };
      track.addEventListener("click", blockClickAfterDrag, true);

      function goTo(x: number) {
        gsap.to(track, {
          x: clampX(x),
          duration: reduceMotion ? 0 : 0.7,
          ease: "power3.out",
          overwrite: true,
          onUpdate: syncState,
          onComplete: () => {
            draggable.update();
            syncState();
          },
        });
      }

      controls.current = {
        next: () => {
          const x = currentX();
          const target = getSnapPoints().find((point) => point < x - 2);
          goTo(target ?? getMinX());
        },
        prev: () => {
          const x = currentX();
          const target = getSnapPoints()
            .filter((point) => point > x + 2)
            .pop();
          goTo(target ?? 0);
        },
      };

      /** Recompute bounds / enabled state whenever layout changes. */
      const refresh = () => {
        const minX = getMinX();
        draggable.applyBounds({ minX, maxX: 0 });
        if (currentX() < minX) {
          gsap.set(track, { x: minX });
          draggable.update();
        }
        if (minX >= -2) {
          draggable.disable();
        } else if (!draggable.enabled()) {
          draggable.enable();
        }
        syncState();
      };

      refresh();
      const observer = new ResizeObserver(refresh);
      observer.observe(viewport);
      observer.observe(track);

      return () => {
        observer.disconnect();
        track.removeEventListener("click", blockClickAfterDrag, true);
        draggable.kill();
        gsap.killTweensOf(track);
        gsap.set(track, { clearProps: "transform" });
      };
    },
    { scope: viewportRef },
  );

  return {
    viewportRef,
    trackRef,
    prev: () => controls.current.prev(),
    next: () => controls.current.next(),
    canPrev: state.canPrev,
    canNext: state.canNext,
  };
}
