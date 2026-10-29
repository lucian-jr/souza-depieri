/**
 * Domain types shared by the UI and the (future) Neon / PostgreSQL data layer.
 * Keep these in sync with the database schema when the mock data is replaced.
 */

/** A local image served from `public/`. */
export interface ImageAsset {
  /** Path under `public/`, e.g. `/refs/images/foo.png`. */
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** Content formats available in the "Inteligência" section. */
export type ArticleKind = "Artigo" | "Vídeo" | "Livro";

/** Row shape for the future `articles` table. */
export interface Article {
  id: string;
  kind: ArticleKind;
  /** Short topic label shown above the title (e.g. "Direito e Negócios"). */
  category: string;
  title: string;
  /** Call-to-action label shown at the bottom of the card. */
  ctaLabel: string;
  /** Destination of the card (internal route or external URL). */
  href: string;
  thumbnail: ImageAsset;
  /** ISO 8601 date, used for ordering. */
  publishedAt: string;
}

/** A card in the "Atuação" (practice areas) slider. */
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  thumbnail: ImageAsset;
}

/** Names of the icons available for the Trajetória accordion. */
export type TrajectoryIconName =
  | "graduation"
  | "advocacy"
  | "governance"
  | "science"
  | "innovation";

/** An accordion row in the "Trajetória" section. */
export interface TrajectoryItem {
  id: string;
  title: string;
  icon: TrajectoryIconName;
  /** Expandable lines. Rows without details render as static (non-expandable) rows. */
  details?: string[];
}

/** A simple labelled link (navigation, social, CTA). */
export interface NavLink {
  label: string;
  href: string;
}
