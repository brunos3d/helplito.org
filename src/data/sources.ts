import type { Source } from "./types";

const ACCESSED = "2026-08-23";

/**
 * Every important medical or research claim on the site should trace back to one of these.
 * Keep entries factual. Link only to official pages.
 */
export const sources: Source[] = [
  // Official updates
  {
    id: "lito-instagram",
    category: "official-updates",
    title: { en: "Lito Sousa on Instagram (@lito)", "pt-br": "Lito Sousa no Instagram (@lito)" },
    publisher: "Instagram",
    url: "https://www.instagram.com/lito/",
    note: {
      en: "Official profile. Updates about Lito's situation are shared here by the family and team.",
      "pt-br": "Perfil oficial. Atualizações sobre a situação do Lito são compartilhadas aqui pela família e pela equipe.",
    },
    accessed: ACCESSED,
  },
  {
    id: "avioes-e-musicas",
    category: "official-updates",
    title: { en: "Aviões e Músicas, official website", "pt-br": "Aviões e Músicas, site oficial" },
    publisher: "Aviões e Músicas",
    url: "https://www.avioesemusicas.com",
    note: {
      en: "Source for Lito's professional background as described by the official channels.",
      "pt-br": "Fonte para a trajetória profissional do Lito conforme descrita pelos canais oficiais.",
    },
    accessed: ACCESSED,
  },
  {
    id: "avioes-e-musicas-youtube",
    category: "official-updates",
    title: { en: "Aviões e Músicas on YouTube", "pt-br": "Aviões e Músicas no YouTube" },
    publisher: "YouTube",
    url: "https://www.youtube.com/@avioesemusicas",
    accessed: ACCESSED,
  },

  // Public health authorities
  {
    id: "cdc-prions",
    category: "public-health",
    title: { en: "About Prion Diseases", "pt-br": "Sobre doenças priônicas (em inglês)" },
    publisher: "US Centers for Disease Control and Prevention (CDC)",
    url: "https://www.cdc.gov/prions/about/index.html",
    note: {
      en: "Overview of prion diseases, transmission and the absence of a proven treatment.",
      "pt-br": "Visão geral das doenças priônicas, transmissão e ausência de tratamento comprovado.",
    },
    accessed: ACCESSED,
  },
  {
    id: "cdc-cjd",
    category: "public-health",
    title: { en: "About Creutzfeldt-Jakob Disease", "pt-br": "Sobre a doença de Creutzfeldt-Jakob (em inglês)" },
    publisher: "US Centers for Disease Control and Prevention (CDC)",
    url: "https://www.cdc.gov/creutzfeldt-jakob/about/index.html",
    note: {
      en: "Symptoms, forms of CJD and diagnostic approach.",
      "pt-br": "Sintomas, formas de DCJ e abordagem diagnóstica.",
    },
    accessed: ACCESSED,
  },
  {
    id: "ninds-cjd",
    category: "public-health",
    title: { en: "Creutzfeldt-Jakob Disease", "pt-br": "Doença de Creutzfeldt-Jakob (em inglês)" },
    publisher: "US National Institute of Neurological Disorders and Stroke (NINDS)",
    url: "https://www.ninds.nih.gov/health-information/disorders/creutzfeldt-jakob-disease",
    note: {
      en: "Clinical description, symptoms, diagnosis and current state of treatment research.",
      "pt-br": "Descrição clínica, sintomas, diagnóstico e estado atual da pesquisa de tratamentos.",
    },
    accessed: ACCESSED,
  },
  {
    id: "who-prion",
    category: "public-health",
    title: { en: "World Health Organization", "pt-br": "Organização Mundial da Saúde" },
    publisher: "WHO",
    url: "https://www.who.int",
    note: {
      en: "International public health reference. Search the site for current guidance on transmissible spongiform encephalopathies.",
      "pt-br": "Referência internacional em saúde pública. Pesquise no site as orientações atuais sobre encefalopatias espongiformes transmissíveis.",
    },
    accessed: ACCESSED,
  },

  // Clinical trials
  {
    id: "nct07444580",
    category: "clinical-trials",
    title: {
      en: "PRiSM: PrP-targeting siRNA Safety & Mechanism Study (NCT07444580)",
      "pt-br": "PRiSM: Estudo de Segurança e Mecanismo de siRNA direcionado à PrP (NCT07444580)",
    },
    publisher: "ClinicalTrials.gov",
    url: "https://clinicaltrials.gov/study/NCT07444580",
    note: {
      en: "Official registry record. Sponsor, phase, planned enrollment, locations and recruitment status come from this record and can change.",
      "pt-br": "Registro oficial. Patrocinador, fase, número previsto de participantes, locais e status de recrutamento vêm deste registro e podem mudar.",
    },
    accessed: ACCESSED,
  },
  {
    id: "clinicaltrials-prion-search",
    category: "clinical-trials",
    title: { en: "ClinicalTrials.gov search: prion disease", "pt-br": "Busca no ClinicalTrials.gov: doença priônica" },
    publisher: "ClinicalTrials.gov",
    url: "https://clinicaltrials.gov/search?cond=Prion%20Diseases",
    note: {
      en: "Live search for registered studies. Use this rather than any static list.",
      "pt-br": "Busca ao vivo por estudos registrados. Prefira esta busca a qualquer lista estática.",
    },
    accessed: ACCESSED,
  },

  // Research institutions
  {
    id: "broad",
    category: "research-institutions",
    title: { en: "Broad Institute of MIT and Harvard", "pt-br": "Broad Institute of MIT and Harvard" },
    publisher: "Broad Institute",
    url: "https://www.broadinstitute.org",
    accessed: ACCESSED,
  },
  {
    id: "ucsf-mac",
    category: "research-institutions",
    title: { en: "UCSF Memory and Aging Center", "pt-br": "UCSF Memory and Aging Center" },
    publisher: "University of California, San Francisco",
    url: "https://memory.ucsf.edu",
    accessed: ACCESSED,
  },
  {
    id: "npdpsc",
    category: "research-institutions",
    title: {
      en: "National Prion Disease Pathology Surveillance Center",
      "pt-br": "National Prion Disease Pathology Surveillance Center",
    },
    publisher: "Case Western Reserve University",
    url: "https://case.edu/medicine/pathology/divisions/national-prion-disease-pathology-surveillance-center",
    accessed: ACCESSED,
  },

  // Patient and research organizations
  {
    id: "cjd-foundation",
    category: "organizations",
    title: { en: "CJD Foundation", "pt-br": "CJD Foundation" },
    publisher: "CJD Foundation",
    url: "https://cjdfoundation.org",
    note: {
      en: "Family support, helpline, and resources for clinicians.",
      "pt-br": "Apoio a famílias, linha de ajuda e recursos para médicos.",
    },
    accessed: ACCESSED,
  },
  {
    id: "prion-alliance",
    category: "organizations",
    title: { en: "Prion Alliance", "pt-br": "Prion Alliance" },
    publisher: "Prion Alliance",
    url: "https://www.prionalliance.org",
    accessed: ACCESSED,
  },
];

export const sourceCategories = [
  "official-updates",
  "public-health",
  "clinical-trials",
  "research-institutions",
  "organizations",
] as const;
