import { getArticles } from "@/lib/data/articles";

/** `GET /api/articles` — JSON list of "Inteligência" articles (mock today, Neon later). */
export async function GET() {
  const articles = await getArticles();
  return Response.json({ articles });
}
