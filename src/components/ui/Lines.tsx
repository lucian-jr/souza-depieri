import type { ReactNode } from "react";

interface LinesProps {
  lines: ReactNode[];
  /**
   * Tailwind class applied to each line. Defaults to forcing a line break from `md` upward,
   * which reproduces the prototype's line breaks on desktop while letting text reflow
   * naturally on small screens.
   */
  lineClassName?: string;
}

/**
 * Renders copy as separate lines that break exactly like the 1920px prototype on large
 * screens and flow as normal text on mobile.
 */
export function Lines({ lines, lineClassName = "md:block" }: LinesProps) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={index} className={lineClassName}>
          {line}
          {index < lines.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
