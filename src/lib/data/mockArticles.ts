import type { Article } from "@/lib/types";

const IMG = "/refs/images";

/**
 * Mock rows for the future Neon (PostgreSQL) `articles` table.
 * Copy is transcribed verbatim from `refs/prototype.pdf`.
 *
 * TODO: `href` values are placeholders until article / video / book pages exist.
 */
export const mockArticles: Article[] = [
  {
    id: "art-001",
    kind: "Artigo",
    category: "Direito e Negócios",
    title: "O que muda nas relações societárias...",
    ctaLabel: "Ler artigo",
    href: "#inteligencia",
    thumbnail: {
      src: `${IMG}/5---INTELIGENCIA---Thumb1.png`,
      width: 485,
      height: 274,
      alt: "Pasta de couro preta com caneta prateada sobre um bloco de acrílico roxo",
    },
    publishedAt: "2026-03-12T00:00:00.000Z",
  },
  {
    id: "vid-001",
    kind: "Vídeo",
    category: "Estratégia e Decisão",
    title: "Por que uma decisão juridicamente correta pode...",
    ctaLabel: "Ler artigo",
    href: "#inteligencia",
    thumbnail: {
      src: `${IMG}/5---INTELIGENCIA---Thumb2.png`,
      width: 485,
      height: 274,
      alt: "Pastas cinza ao lado de uma peça de acrílico roxo diante de um edifício corporativo",
    },
    publishedAt: "2026-02-20T00:00:00.000Z",
  },
  {
    id: "liv-001",
    kind: "Livro",
    category: "Perspectivas Globais",
    title: "Inteligência artificial e os novos riscos...",
    ctaLabel: "Ler artigo",
    href: "#inteligencia",
    thumbnail: {
      src: `${IMG}/5---INTELIGENCIA---Thumb3.png`,
      width: 485,
      height: 274,
      alt: "Tablet exibindo ondas de dados roxas sobre uma mesa de mármore escuro",
    },
    publishedAt: "2026-01-15T00:00:00.000Z",
  },
];
