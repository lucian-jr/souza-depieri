import type { TrajectoryItem } from "@/lib/types";

/**
 * Accordion rows of the "Trajetória" section (Matheus de Souza Depieri).
 * Only the first row is expanded in the prototype, so only it has `details`; add
 * `details` to the other rows once the copy is provided and they become expandable.
 */
export const trajectoryItems: TrajectoryItem[] = [
  {
    id: "formacao",
    title: "Formação Acadêmica\ne Construção Intelectual",
    icon: "graduation",
    details: [
      "University of Cambridge",
      "Universidade de Brasília",
      "The George Washington University",
      "Universidade de Humboldt",
      "Ohio State University",
      "Centro de Estudos Constitucionais Comparados da UnB",
      "Casainfra",
      "Portolans Institute",
    ],
  },
  {
    id: "advocacia",
    title: "Advocacia Empresarial\ne Soluções Estratégicas",
    icon: "advocacy",
  },
  {
    id: "governanca",
    title: "Governança, Regulação\ne Relações Institucionais",
    icon: "governance",
  },
  {
    id: "producao-cientifica",
    title: "Produção Científica\ne Pensamento Internacional",
    icon: "science",
  },
  {
    id: "inovacao",
    title: "Inovação, Tecnologia\ne Futuro dos Negócios",
    icon: "innovation",
  },
];
