import type { PracticeArea } from "@/lib/types";

const IMG = "/refs/images";

/**
 * Practice areas shown in the "Atuação" slider.
 * Copy is transcribed verbatim from `refs/prototype.pdf`.
 */
export const practiceAreas: PracticeArea[] = [
  {
    id: "advocacia-empresarial",
    title: "Advocacia Empresarial",
    description:
      "Direito societário, contratos complexos, estruturação societária, negociações empresariais, consultoria preventiva e gestão de riscos.",
    thumbnail: {
      src: `${IMG}/2---ATUACAO---Thumb1.png`,
      width: 333,
      height: 254,
      alt: "Fachada de vidro escuro com um painel translúcido roxo refletindo o céu ao entardecer",
    },
  },
  {
    id: "contencioso-estrategico",
    title: "Contencioso Estratégico",
    description:
      "Litígios comerciais, processos judiciais e administrativos complexos, Direito Administrativo e contratos públicos.",
    thumbnail: {
      src: `${IMG}/2---ATUACAO---Thumb2.png`,
      width: 333,
      height: 254,
      alt: "Parede de pedra escura com puxador de bronze e painel translúcido roxo",
    },
  },
  {
    id: "governanca-compliance",
    title: "Governança e Compliance",
    description:
      "Governança corporativa, articulação institucional, gestão de stakeholders, análises de conformidade regulatória, due dilligence.",
    thumbnail: {
      src: `${IMG}/2---ATUACAO---Thumb3.png`,
      width: 333,
      height: 254,
      alt: "Escada de concreto e granito com passarela de vidro roxo",
    },
  },
  {
    id: "regulacao-direito-publico",
    title: "Regulação e Direito Público",
    description:
      "Direito Administrativo, regulação, contratos públicos, relações entre empresas e Estado, agências reguladoras e regulação do setor aquaviário.",
    thumbnail: {
      src: `${IMG}/2---ATUACAO---Thumb4.png`,
      width: 333,
      height: 254,
      alt: "Saguão de concreto com claraboia circular e painel curvo de vidro roxo",
    },
  },
  {
    id: "inovacao-tecnologia",
    title: "Inovação, Tecnologia e Futuro dos Negócios",
    // TODO: confirm copy. The prototype crops this card at the viewport edge, so only the
    // first words of each line are legible ("Inteligênci…", "transforma…", "Legal Tech…",
    // "regulatória…", "nova tecno…", "empresas e…"). The sentence below reconstructs it.
    description:
      "Inteligência artificial, transformação digital, Legal Tech, inovação regulatória e o impacto das novas tecnologias nas empresas e nos mercados.",
    thumbnail: {
      src: `${IMG}/2---ATUACAO---Thumb5.png`,
      width: 333,
      height: 254,
      alt: "Edifício de concreto com painéis de vidro e vegetação ao fundo",
    },
  },
  {
    id: "conselhos-alta-gestao",
    // TODO: confirm copy. The 6th card is completely outside the prototype's visible area
    // (only its image, `Thumb6`, was supplied), so title and description are placeholders.
    title: "Conselhos e Alta Gestão",
    description:
      "Assessoria estratégica a conselhos, diretorias e lideranças em decisões de alta complexidade.",
    thumbnail: {
      src: `${IMG}/2---ATUACAO---Thumb6.png`,
      width: 333,
      height: 254,
      alt: "Vista superior de uma mesa de reunião de mármore com cadeiras e painel roxo ao centro",
    },
  },
];
