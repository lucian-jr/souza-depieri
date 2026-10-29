"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface SliderArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  /** Accessible name of the slider being controlled, e.g. "áreas de atuação". */
  controls: string;
  className?: string;
}

const buttonClass =
  "grid size-[clamp(3rem,4.06vw,4.875rem)] place-items-center rounded-full border-[1.5px] border-current transition-all duration-300 enabled:hover:bg-text-dark enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-30";

/** Previous / next circular buttons that drive a `useDragSlider` slider. */
export function SliderArrows({
  onPrev,
  onNext,
  canPrev,
  canNext,
  controls,
  className = "",
}: SliderArrowsProps) {
  return (
    <div className={`flex items-center gap-[clamp(0.5rem,0.73vw,0.875rem)] ${className}`}>
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label={`Anterior — ${controls}`}
        className={buttonClass}
      >
        <ArrowLeft className="size-[42%]" strokeWidth={1.4} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label={`Próximo — ${controls}`}
        className={buttonClass}
      >
        <ArrowRight className="size-[42%]" strokeWidth={1.4} aria-hidden="true" />
      </button>
    </div>
  );
}
