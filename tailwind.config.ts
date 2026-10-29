import type { Config } from "tailwindcss";

/**
 * Souza Depieri — design system tokens.
 *
 * This file is loaded by Tailwind CSS v4 through the `@config` directive in
 * `src/app/globals.css`, so the classic `tailwind.config.ts` workflow keeps working.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /** Light purple — primary accent (buttons on dark backgrounds, stripes). */
        "primary-light": "#b084b3",
        /** Dark purple — primary accent (buttons on light backgrounds, links, icons). */
        "primary-dark": "#744c78",
        /** Main page background. */
        "background-offwhite": "#f4f6f0",
        white: "#ffffff",
        /** Neutral card / accordion background. */
        gray: "#e3e5df",
        /** Main text color (also used for dark chips / sections). */
        "text-dark": "#242223",
        /**
         * Extra token sampled from the prototype: the slightly lighter charcoal used by the
         * "Inteligência Decisória" section (the Contato section uses `text-dark`).
         */
        charcoal: "#2c2c2a",
      },
      fontFamily: {
        // `--font-gotham` is injected by next/font/local in `src/app/layout.tsx`.
        sans: ["var(--font-gotham)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        /** Width of the content column in the 1920px prototype. */
        content: "1620px",
      },
    },
  },
  plugins: [],
};

export default config;
