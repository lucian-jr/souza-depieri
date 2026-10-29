import { Atuacao } from "@/components/Atuacao";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InteligenciaArtigos } from "@/components/InteligenciaArtigos";
import { InteligenciaDecisoria } from "@/components/InteligenciaDecisoria";
import { Trajetoria } from "@/components/Trajetoria";
import { getArticles } from "@/lib/data/articles";
import { practiceAreas } from "@/lib/data/practiceAreas";
import { trajectoryItems } from "@/lib/data/trajectory";

export default async function Home() {
  // Server-side fetch: swap `getArticles` for a Neon query without touching the UI.
  const articles = await getArticles();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Atuacao areas={practiceAreas} />
        <InteligenciaDecisoria />
        <Trajetoria items={trajectoryItems} />
        <InteligenciaArtigos articles={articles} />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
