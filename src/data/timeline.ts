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
  {
    id: "trial-access-update",
    date: { en: "August 2026", "pt-br": "Agosto de 2026" },
    title: {
      en: "Trial access becomes more specific",
      "pt-br": "O acesso aos estudos fica mais definido",
    },
    body: {
      en: "The family reports that Ionis declined ION717 access for Lito and that compassionate use was not available to him at that time. PRiSM remains under investigation: the current Broad path reported by the family is non-interventional, and no interventional-arm evaluation is confirmed. Lito is not confirmed to be on a Harvard waiting list.",
      "pt-br":
        "A família relata que a Ionis negou o acesso do Lito ao ION717 e que o uso compassivo não estava disponível para ele naquele momento. O PRiSM continua em investigação: o caminho atual pelo Broad relatado pela família é sem intervenção, e não há avaliação confirmada para o braço de intervenção. Não há confirmação de que o Lito esteja em uma lista de espera de Harvard.",
    },
  },
  {
    id: "government-involvement",
    date: { en: "August 2026", "pt-br": "Agosto de 2026" },
    title: {
      en: "Government involvement remains unverified in practice",
      "pt-br": "A atuação do governo segue sem verificação prática",
    },
    body: {
      en: "Health Minister Alexandre Padilha publicly said outreach was under way. The family reports that no concrete operational assistance or access resulting from the Ministry of Health or Itamaraty had been confirmed to it. Which institutions were contacted and what resulted remains unresolved.",
      "pt-br":
        "O ministro da Saúde, Alexandre Padilha, declarou publicamente que havia contatos em andamento. A família relata que nenhuma ajuda operacional concreta ou acesso resultante do Ministério da Saúde ou do Itamaraty havia sido confirmado a ela. Ainda não se sabe quais instituições foram contatadas e qual foi o resultado.",
    },
  },
];
