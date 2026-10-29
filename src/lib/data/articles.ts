import type { Article } from "@/lib/types";
import { mockArticles } from "@/lib/data/mockArticles";

/**
 * Data-access layer for the "Inteligência" articles.
 *
 * Today it serves `mockArticles`. To migrate to Neon (PostgreSQL), only this function needs
 * to change — every consumer (Server Component, Server Action, API route) already calls it:
 *
 * ```ts
 * import { neon } from "@neondatabase/serverless";
 *
 * export async function getArticles(): Promise<Article[]> {
 *   const sql = neon(process.env.DATABASE_URL!);
 *   const rows = await sql`
 *     SELECT id, kind, category, title, cta_label AS "ctaLabel", href,
 *            thumbnail, published_at AS "publishedAt"
 *     FROM articles
 *     ORDER BY published_at DESC`;
 *   return rows as Article[];
 * }
 * ```
 */
export async function getArticles(): Promise<Article[]> {
  return [...mockArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
