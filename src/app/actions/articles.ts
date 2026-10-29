"use server";

import { getArticles } from "@/lib/data/articles";
import type { Article } from "@/lib/types";

/**
 * Server Action that returns the latest "Inteligência" articles.
 * Client components can call it directly (e.g. for "load more" or live refresh) and it will
 * transparently start hitting Neon once `getArticles` is migrated.
 */
export async function getArticlesAction(): Promise<Article[]> {
  return getArticles();
}
