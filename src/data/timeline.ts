import type { TimelineEntry } from "./types";

/**
 * Post-mortem timeline: Lito's illness and the life of the Help Lito initiative, in one list.
 * Only information that the family, the team or the press made public, plus this project's own
 * milestones (taken from the repository history and the domain registration).
 */
export const timeline: TimelineEntry[] = [
  {
    id: "prior-health",
    kind: "lito",
    isoDate: "2026-07",
    date: { en: "July 2026", "pt-br": "Julho de 2026" },
    title: { en: "An earlier diagnosis", "pt-br": "Um diagnóstico anterior" },
    body: {
      en: "Lito is diagnosed with prostate cancer. The family shared this context publicly.",
      "pt-br": "Lito é diagnosticado com câncer de próstata. A família compartilhou esse contexto publicamente.",
    },
  },
  {
    id: "diagnosis",
    kind: "lito",
    isoDate: "2026-08-21",
    date: { en: "21 August 2026", "pt-br": "21 de agosto de 2026" },
    title: { en: "The CJD diagnosis becomes public", "pt-br": "O diagnóstico de DCJ vem a público" },
    body: {
      en: "His wife, Mila Seidl, reveals in a video that tests confirmed Creutzfeldt-Jakob Disease. The team asks for verified scientific information and warns about fraudulent fundraisers using his name.",
      "pt-br":
        "A esposa, Mila Seidl, revela em vídeo que os exames confirmaram a doença de Creutzfeldt-Jakob. A equipe pede informações científicas verificadas e alerta sobre vaquinhas falsas usando o nome dele.",
    },
  },
  {
    id: "site-launch",
    kind: "project",
    isoDate: "2026-08-23",
    date: { en: "23 August 2026", "pt-br": "23 de agosto de 2026" },
    title: { en: "Help Lito goes online", "pt-br": "O Help Lito entra no ar" },
    body: {
      en: "Two days later, helplito.org is registered and published as an independent initiative: one place with verified information about the disease, and a structured way for researchers, physicians and institutions to reach Lito's official team. No fundraising, ever.",
      "pt-br":
        "Dois dias depois, o helplito.org é registrado e publicado como uma iniciativa independente: um lugar com informação verificada sobre a doença e um caminho estruturado para pesquisadores, médicos e instituições chegarem à equipe oficial do Lito. Sem arrecadação, nunca.",
    },
  },
  {
    id: "research-log",
    kind: "project",
    isoDate: "2026-08-24",
    date: { en: "24 August 2026", "pt-br": "24 de agosto de 2026" },
    title: { en: "The research is documented", "pt-br": "A pesquisa é documentada" },
    body: {
      en: "The project publishes what it found: the PRiSM first-in-human study (NCT07444580), the ION717 program, and the expanded access pathway in the US and compassionate use in Brazil. The records stay public in the repository.",
      "pt-br":
        "O projeto publica o que encontrou: o estudo PRiSM, o primeiro em humanos (NCT07444580), o programa do ION717 e as vias de acesso expandido nos EUA e de uso compassivo no Brasil. Os registros continuam públicos no repositório.",
    },
  },
  {
    id: "treatment",
    kind: "lito",
    isoDate: "2026-09-11",
    date: { en: "11 September 2026", "pt-br": "11 de setembro de 2026" },
    title: { en: "Access to an experimental drug", "pt-br": "Acesso a um medicamento experimental" },
    body: {
      en: "Under an exceptional authorization from Anvisa, Brazil's health regulator, the experimental drug ALN-6457 arrives in Brazil and Lito becomes the first person to receive it. Until then it had only been tested in animals.",
      "pt-br":
        "Com autorização excepcional da Anvisa, o medicamento experimental ALN-6457 chega ao Brasil, e Lito se torna a primeira pessoa a recebê-lo. Até então, a substância só havia sido testada em animais.",
    },
  },
  {
    id: "death",
    kind: "lito",
    isoDate: "2026-10-01",
    date: { en: "1 October 2026", "pt-br": "1º de outubro de 2026" },
    title: { en: "Lito dies at 59", "pt-br": "Lito morre aos 59 anos" },
    body: {
      en: "Lito dies in São Paulo from complications of Creutzfeldt-Jakob Disease. His wife announces his death on Instagram. The initiative to help him ends that day.",
      "pt-br":
        "Lito morre em São Paulo, por complicações da doença de Creutzfeldt-Jakob. A esposa anuncia a morte no Instagram. A iniciativa de ajuda ao Lito se encerra nesse dia.",
    },
  },
  {
    id: "memorial",
    kind: "project",
    isoDate: "2026-11",
    date: { en: "November 2026", "pt-br": "Novembro de 2026" },
    title: { en: "The site becomes a memorial", "pt-br": "O site vira um memorial" },
    body: {
      en: "The contact form and the forwarding to his team are removed. What remains is a memorial, an archive of the research as it stood, and a signpost for anyone working on prion disease.",
      "pt-br":
        "O formulário de contato e o encaminhamento para a equipe dele são removidos. Fica um memorial, um arquivo da pesquisa como ela estava e um ponto de partida para quem trabalha com doenças priônicas.",
    },
  },
  {
    id: "domain-expiry",
    kind: "project",
    isoDate: "2027-08-23",
    upcoming: true,
    date: { en: "23 August 2027", "pt-br": "23 de agosto de 2027" },
    title: { en: "The domain expires and the site goes offline", "pt-br": "O domínio expira e o site sai do ar" },
    body: {
      en: "helplito.org was registered for one year. When it expires, this site goes offline. Lito's videos stay on the Aviões e Músicas channel.",
      "pt-br":
        "O helplito.org foi registrado por um ano. Quando o domínio expirar, este site sai do ar. Os vídeos do Lito continuam no canal Aviões e Músicas.",
    },
  },
];
