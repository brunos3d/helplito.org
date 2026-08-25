import type { Source } from "./types";

const ACCESSED = "2026-08-23";
const ACCESSED_UPDATE = "2026-08-25";

/**
 * Every important medical or research claim on the site should trace back to one of these.
 * Keep entries factual. Medical and scientific claims use primary sources.
 * Clearly labeled reporting may support public statements, family attribution,
 * corrections and timeline context, but not standalone medical claims.
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
    accessed: ACCESSED_UPDATE,
  },

  // Reporting used for attribution and public timeline context
  {
    id: "uol-family-trial-correction-2026-08-24",
    category: "reporting",
    title: {
      en: "Mila Seidl clarifies the reported trial-access status",
      "pt-br": "Mila Seidl esclarece o status de acesso aos estudos",
    },
    publisher: "BOL / UOL",
    url: "https://www.bol.uol.com.br/noticias/2026/08/24/mulher-de-lito-sousa-diz-que-familia-aguarda-1-entrevista-para-elegibilidade-em-estudo-nos-eua.htm",
    note: {
      en: "Secondary reporting used for Mila's correction of the Harvard waiting-list description and the dated Nashville and Mayo leads. It is not evidence of eligibility or acceptance.",
      "pt-br":
        "Reportagem secundária usada para a correção feita por Mila sobre a suposta lista de espera de Harvard e para os relatos datados sobre Nashville e Mayo. Não comprova elegibilidade nem aceitação.",
    },
    accessed: ACCESSED_UPDATE,
  },
  {
    id: "uol-padilha-contact-statement-2026-08-23",
    category: "reporting",
    title: {
      en: "Padilha says contacts with universities are under way",
      "pt-br": "Padilha afirma que há contatos em andamento com universidades",
    },
    publisher: "UOL / Agência Estado",
    url: "https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2026/08/23/ministro-diz-estar-em-contato-com-universidades-para-lito-ser-incluido-em-pesquisa-de-doenca.amp.htm",
    note: {
      en: "Supports attribution of the minister's public statement. It does not document which institutions were contacted or any operational result.",
      "pt-br":
        "Sustenta a atribuição da declaração pública do ministro. Não documenta quais instituições foram contatadas nem qualquer resultado operacional.",
    },
    accessed: ACCESSED_UPDATE,
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
    accessed: ACCESSED_UPDATE,
  },
  {
    id: "nct06153966",
    category: "clinical-trials",
    title: {
      en: "PrProfile / ION717 (NCT06153966)",
      "pt-br": "PrProfile / ION717 (NCT06153966)",
    },
    publisher: "ClinicalTrials.gov",
    url: "https://clinicaltrials.gov/study/NCT06153966",
    note: {
      en: "Official registry record. The current overall status is Active, not recruiting, while detailed text still contains conflicting recruitment language.",
      "pt-br":
        "Registro oficial. O status geral atual é ativo, sem recrutamento, enquanto o texto detalhado ainda contém linguagem conflitante sobre recrutamento.",
    },
    accessed: ACCESSED_UPDATE,
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
    id: "neuronext-prism",
    category: "research-institutions",
    title: { en: "NN112 PRiSM", "pt-br": "NN112 PRiSM" },
    publisher: "NeuroNEXT",
    url: "https://neuronext.org/projects/nn112-prism/",
    note: {
      en: "Official network project page. It identifies the PRiSM network and sites but does not publish real-time interventional-arm capacity.",
      "pt-br":
        "Página oficial do projeto na rede. Identifica a rede e os centros do PRiSM, mas não publica a capacidade em tempo real do braço de intervenção.",
    },
    accessed: ACCESSED_UPDATE,
  },
  {
    id: "ionis-expanded-access-policy",
    category: "research-institutions",
    title: {
      en: "Ionis expanded access policy",
      "pt-br": "Política de acesso expandido da Ionis",
    },
    publisher: "Ionis Pharmaceuticals",
    url: "https://ionis.com/patients-and-advocacy/expanded-access-policy",
    note: {
      en: "Official corporate policy. No ION717 program was listed when checked; a general policy is not evidence of product supply or case approval.",
      "pt-br":
        "Política corporativa oficial. Nenhum programa para o ION717 estava listado na verificação; uma política geral não comprova fornecimento do produto nem aprovação de um caso.",
    },
    accessed: ACCESSED_UPDATE,
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
  "reporting",
  "public-health",
  "clinical-trials",
  "research-institutions",
  "organizations",
] as const;
