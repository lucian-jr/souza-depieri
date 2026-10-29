import { ButtonLink } from "@/components/ui/ButtonLink";

interface SectionHeaderProps {
  /** Eyebrow label, e.g. "Atuação". Rendered in caps. */
  label: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "light" | "dark";
}

/**
 * Top row shared by every section: `LABEL ———` on the left, CTA button on the right.
 * Colours follow the surrounding section (`currentColor`).
 */
export function SectionHeader({ label, ctaLabel, ctaHref, ctaVariant }: SectionHeaderProps) {
  return (
    <div
      data-reveal
      className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6"
    >
      <div className="flex items-center gap-[clamp(0.75rem,1.04vw,1.25rem)]">
        <p className="type-label">{label}</p>
        <span
          aria-hidden="true"
          className="block h-px w-[clamp(2.5rem,16.46vw,19.75rem)] bg-current"
        />
      </div>
      <ButtonLink href={ctaHref} variant={ctaVariant}>
        {ctaLabel}
      </ButtonLink>
    </div>
  );
}
