import type { TimelineEntry } from "./types";

/**
 * Public timeline. Only information that the family or team has shared publicly.
 * Month-level precision. No private medical details.
 */
export const timeline: TimelineEntry[] = [
  {
    id: "career",
    date: { en: "For decades", "pt-br": "Por décadas" },
    title: {
      en: "A life in aviation",
      "pt-br": "Uma vida na aviação",
    },
    body: {
      en: "Lito works in commercial aviation as a mechanic, later as a private pilot, instructor and Human Factors and Safety specialist. He creates Aviões e Músicas and spends more than fifteen years explaining aviation to the public.",
      "pt-br":
        "Lito trabalha na aviação comercial como mecânico, depois como piloto privado, instrutor e especialista em Fatores Humanos e Segurança. Cria o Aviões e Músicas e passa mais de quinze anos explicando aviação ao público.",
    },
  },
  {
    id: "prior-health",
    date: { en: "Before 2026", "pt-br": "Antes de 2026" },
    title: {
      en: "An earlier diagnosis",
      "pt-br": "Um diagnóstico anterior",
    },
    body: {
      en: "Lito had previously been diagnosed with prostate cancer. This context was shared publicly by the family.",
      "pt-br":
        "Lito já havia sido diagnosticado com câncer de próstata. Esse contexto foi compartilhado publicamente pela família.",
    },
  },
  {
    id: "symptoms",
    date: { en: "2026", "pt-br": "2026" },
    title: {
      en: "Rapid neurological changes",
      "pt-br": "Mudanças neurológicas rápidas",
    },
    body: {
      en: "Neurological symptoms appear and progress quickly, including loss of movement and visual deterioration. Other diagnoses, including encephalitis and autoimmune processes, are investigated first.",
      "pt-br":
        "Sintomas neurológicos surgem e progridem rapidamente, incluindo perda de movimentos e piora visual. Outros diagnósticos, como encefalite e processos autoimunes, são investigados primeiro.",
    },
  },
  {
    id: "diagnosis",
    date: { en: "August 2026", "pt-br": "Agosto de 2026" },
    title: {
      en: "The diagnosis becomes public",
      "pt-br": "O diagnóstico se torna público",
    },
    body: {
      en: "Lito's wife, Mila Seidl, shares publicly that Lito has been diagnosed with Creutzfeldt-Jakob Disease. The family reports that he remained lucid during the early updates, and that they are adapting their home for his care.",
      "pt-br":
        "A esposa do Lito, Mila Seidl, compartilha publicamente que ele foi diagnosticado com a doença de Creutzfeldt-Jakob. A família relata que ele permaneceu lúcido nas primeiras atualizações e que está adaptando a casa para os cuidados.",
    },
  },
  {
    id: "channel",
    date: { en: "August 2026", "pt-br": "Agosto de 2026" },
    title: {
      en: "An official channel for information",
      "pt-br": "Um canal oficial para informações",
    },
    body: {
      en: "The official team publishes ajudalito@avioesemusicas.com for concrete, verifiable information that may help Lito's case, and warns about fraudulent fundraising campaigns using his name.",
      "pt-br":
        "A equipe oficial divulga o e-mail ajudalito@avioesemusicas.com para informações concretas e verificáveis que possam ajudar no caso do Lito, e alerta sobre campanhas fraudulentas de arrecadação usando o nome dele.",
    },
  },
];
