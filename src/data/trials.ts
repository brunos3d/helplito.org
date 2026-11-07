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
      en: "First-in-human Phase 1 study evaluating the safety, tolerability, pharmacokinetics and pharmacodynamic effects of a single intrathecal dose of a PrP-targeting siRNA in adults with symptomatic prion disease. Broad describes 15 treated participants and 15 observational participants.",
      "pt-br":
        "Estudo de fase 1, o primeiro em humanos, que avalia segurança, tolerabilidade, farmacocinética e efeitos farmacodinâmicos de uma dose intratecal única de um siRNA direcionado à PrP em adultos com doença priônica sintomática. O Broad descreve 15 participantes tratados e 15 em observação.",
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
      en: "On 24 August 2026 the registry listed the study and all five sites as Recruiting (status verified by the record in June 2026). Registry status does not show real-time slots, screening pace or dose-cohort availability. Eligibility includes an MRC-PDRS score of 15 or more.",
      "pt-br":
        "Em 24 de agosto de 2026, o registro indicava o estudo e os cinco centros como recrutando (status verificado pelo registro em junho de 2026). O status do registro não mostra vagas em tempo real, ritmo de triagem nem disponibilidade por coorte de dose. Um dos critérios de elegibilidade é pontuação MRC-PDRS de 15 ou mais.",
    },
    lastVerified: "2026-08-24",
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
      en: "First-in-human study of ION717, an investigational antisense oligonucleotide designed to reduce production of prion protein. The registry reports 85 participants enrolled across three regimens. No efficacy is established.",
      "pt-br":
        "Estudo pioneiro em humanos do ION717, um oligonucleotídeo antisense experimental projetado para reduzir a produção de proteína priônica. O registro informa 85 participantes incluídos em três regimes. Não há eficácia estabelecida.",
    },
    locations: [
      "Massachusetts General Hospital",
      "NYU Langone Health",
      "University Hospitals Cleveland Medical Center",
      "McGill University Health Centre",
      "Royal Melbourne Hospital",
      "Hôpital Universitaire Pitié Salpêtrière",
      "University Medical Center Göttingen",
      "Tel Aviv Sourasky Medical Center",
      "Fondazione IRCCS Istituto Neurologico Carlo Besta",
      "Hospital Clinic de Barcelona",
      "National Center of Neurology and Psychiatry",
      "Mihara Memorial Hospital",
      "Neuromuscular Center Yoshimizu Hospital",
    ],
    status: "active-not-recruiting",
    statusNote: {
      en: "The registry lists Active, not recruiting and no expanded access, while its detailed description still mentions open-label Regimen 3 recruitment. On 25 August 2026, Ionis stated publicly that the study is no longer recruiting new participants and that ION717 is not available through its expanded-access programs.",
      "pt-br":
        "O registro indica ativo, sem recrutamento e sem acesso expandido, embora a descrição detalhada ainda mencione recrutamento no Regime 3, aberto. Em 25 de agosto de 2026, a Ionis declarou publicamente que o estudo não recruta mais novos participantes e que o ION717 não está disponível por seus programas de acesso expandido.",
    },
    lastVerified: "2026-08-25",
  },
];
