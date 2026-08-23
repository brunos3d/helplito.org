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
    status: "check-registry",
    statusNote: {
      en: "Public information about availability has been inconsistent. The registry record has shown a recruiting status, while recent reporting about Lito's case indicated that admissions may be temporarily unavailable, with additional admissions expected later. Check the official record.",
      "pt-br":
        "As informações públicas sobre disponibilidade têm sido inconsistentes. O registro oficial mostrou status de recrutamento, enquanto reportagens recentes sobre o caso do Lito indicaram que as admissões podem estar temporariamente indisponíveis, com novas admissões previstas mais adiante. Consulte o registro oficial.",
    },
    lastVerified: "2026-08-23",
  },
];
