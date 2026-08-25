import type { ClinicalTrial } from "./types";

/**
 * Clinical trials referenced on the site.
 *
 * Recruitment status changes. Nothing here is a permanent fact.
 * Update `lastVerified` whenever a human checks the registry record.
 * The UI always links to the official registry and shows the verification date.
 */
export const trials: ClinicalTrial[] = [
  {
    id: "prism",
    acronym: "PRiSM",
    registryId: "NCT07444580",
    registryUrl: "https://clinicaltrials.gov/study/NCT07444580",
    title: {
      en: "PrP-targeting siRNA Safety & Mechanism Study",
      "pt-br": "Estudo de Segurança e Mecanismo de um siRNA direcionado à PrP",
    },
    sponsor: "Broad Institute of MIT and Harvard",
    phase: "Phase 1",
    summary: {
      en: "First-in-human Phase 1 study evaluating the safety, tolerability, pharmacokinetics and pharmacodynamic effects of a PrP-targeting siRNA in adults with symptomatic prion disease.",
      "pt-br":
        "Estudo de fase 1, o primeiro em humanos, que avalia segurança, tolerabilidade, farmacocinética e efeitos farmacodinâmicos de um siRNA direcionado à PrP em adultos com doença priônica sintomática.",
    },
    plannedParticipants: 30,
    locations: [
      "Massachusetts General Hospital",
      "Mayo Clinic",
      "Columbia University Medical Center",
      "University Hospitals Cleveland Medical Center",
      "Vanderbilt University Medical Center",
    ],
    status: "recruiting",
    statusNote: {
      en: "ClinicalTrials.gov lists the study and all five sites as recruiting. That is registry status, not proof of real-time capacity in either arm.",
      "pt-br":
        "O ClinicalTrials.gov lista o estudo e os cinco centros como recrutando. Esse é o status do registro, não uma prova de capacidade em tempo real em qualquer dos braços.",
    },
    operationalNote: {
      en: "The registry does not publish live capacity by site, arm or dose cohort. It remains unclear whether any PRiSM site can currently evaluate Lito for the interventional arm.",
      "pt-br":
        "O registro não publica a capacidade em tempo real por centro, braço ou coorte de dose. Ainda não está claro se algum centro do PRiSM pode avaliar o Lito agora para o braço de intervenção.",
    },
    caseStatus: {
      en: "The family reports that the current Broad option presented to Lito is on the non-intervention side and would not provide the experimental intervention. This is not a rejection or an eligibility decision. Lito is not confirmed to be on a Harvard waiting list.",
      "pt-br":
        "A família relata que a opção atual apresentada ao Lito pelo Broad está no lado sem intervenção e não daria acesso à intervenção experimental. Isso não é uma rejeição nem uma decisão de elegibilidade. Não há confirmação de que o Lito esteja em uma lista de espera de Harvard.",
    },
    lastVerified: "2026-08-25",
  },
  {
    id: "ion717-prprofile",
    acronym: "PrProfile / ION717",
    registryId: "NCT06153966",
    registryUrl: "https://clinicaltrials.gov/study/NCT06153966",
    title: {
      en: "ION717 Phase 1/2a study in prion disease",
      "pt-br": "Estudo de fase 1/2a do ION717 em doença priônica",
    },
    sponsor: "Ionis Pharmaceuticals, Inc.",
    phase: "Phase 1/2a",
    summary: {
      en: "First-in-human study evaluating an investigational antisense oligonucleotide designed to reduce production of prion protein. No efficacy is established.",
      "pt-br":
        "Estudo pioneiro em humanos que avalia um oligonucleotídeo antisense experimental projetado para reduzir a produção de proteína priônica. Não há eficácia estabelecida.",
    },
    locations: [],
    status: "active-not-recruiting",
    statusNote: {
      en: "The current registry lists Active, not recruiting and no expanded access. Its detailed description still contains conflicting recruitment language, so official metadata and operational availability must be read separately.",
      "pt-br":
        "O registro atual indica ativo, sem recrutamento e sem acesso expandido. A descrição detalhada ainda contém linguagem conflitante sobre recrutamento; por isso, os metadados oficiais e a disponibilidade operacional devem ser lidos separadamente.",
    },
    operationalNote: {
      en: "The family reports that Ionis said the studies were not accepting new participants. This has not been independently confirmed through a dated sponsor statement resolving the conflicting public pages.",
      "pt-br":
        "A família relata que a Ionis informou que os estudos não estavam aceitando novos participantes. Isso não foi confirmado de forma independente por uma declaração datada do patrocinador que resolva as páginas públicas conflitantes.",
    },
    caseStatus: {
      en: "The family reports that Ionis declined access for Lito and said compassionate use was not available to him at this time. This case-specific answer does not mean ION717 is unavailable to everyone worldwide.",
      "pt-br":
        "A família relata que a Ionis negou o acesso para o Lito e informou que o uso compassivo não estava disponível para ele neste momento. Essa resposta específica para o caso não significa que o ION717 esteja indisponível para todas as pessoas no mundo.",
    },
    lastVerified: "2026-08-25",
  },
];
