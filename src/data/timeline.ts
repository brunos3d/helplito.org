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
      en: "The first concrete trial answers are limited",
      "pt-br": "As primeiras respostas concretas dos estudos são limitadas",
    },
    body: {
      en: "The family reports that Ionis declined ION717 access for Lito and that the concrete Broad path discussed so far involved observation/control without the experimental intervention. The historical claim that Lito was on a Harvard waiting list was corrected; only a possible preliminary screening or triage path is now supported, not participation or access.",
      "pt-br":
        "A família relata que a Ionis negou o acesso do Lito ao ION717 e que o caminho concreto discutido até agora pelo Broad envolvia observação/controle sem a intervenção experimental. A afirmação histórica de que o Lito estava em uma lista de espera de Harvard foi corrigida; hoje há suporte apenas para um possível processo preliminar de triagem, não para participação ou acesso.",
    },
  },
  {
    id: "institutional-confirmations",
    date: { en: "August 2026", "pt-br": "Agosto de 2026" },
    title: {
      en: "Broad and Ionis state their current positions",
      "pt-br": "Broad e Ionis informam suas posições atuais",
    },
    body: {
      en: "Broad publicly confirms that it is in contact with Lito's team and evaluating options, without promising that it can help. Ionis publicly says the ION717 study is no longer recruiting and ION717 is not currently available through expanded access. PRiSM interventional eligibility remains unresolved; ION717 becomes a monitoring-only path.",
      "pt-br":
        "O Broad confirma publicamente que está em contato com a equipe do Lito e avaliando opções, sem prometer que poderá ajudar. A Ionis declara que o estudo do ION717 não recruta mais e que o medicamento não está disponível atualmente por acesso expandido. A elegibilidade do Lito para o braço de intervenção do PRiSM segue sem definição; o ION717 passa a ser apenas monitorado.",
    },
  },
  {
    id: "government-involvement",
    date: { en: "August 2026", "pt-br": "Agosto de 2026" },
    title: {
      en: "Government and diplomatic outreach becomes concrete",
      "pt-br": "A atuação governamental e diplomática se torna concreta",
    },
    body: {
      en: "After the family initially reported no concrete government result, the Ministry of Health reported a formal request for Lito's consideration in the initial study process. Itamaraty confirmed embassy outreach, with reporting identifying the United States, France and Germany. Outreach is confirmed; eligibility, enrollment and an interventional slot are not.",
      "pt-br":
        "Depois de a família relatar inicialmente que não via resultado concreto do governo, o Ministério da Saúde informou ter formalizado um pedido para que o Lito fosse considerado no processo inicial do estudo. O Itamaraty confirmou a mobilização de embaixadas, com reportagens identificando Estados Unidos, França e Alemanha. O contato está confirmado; elegibilidade, inclusão e vaga no braço de intervenção não estão.",
    },
  },
];
