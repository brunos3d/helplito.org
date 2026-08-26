import type { ResearchOrganization } from "./types";

const VERIFIED = "2026-08-23";

/**
 * Organizations and institutions involved in prion disease research,
 * diagnosis, patient support or clinical investigation.
 *
 * Listing here does not imply endorsement, partnership or contact.
 * Every entry links to an official website and carries a lastVerified date.
 */
export const organizations: ResearchOrganization[] = [
  {
    id: "broad-institute",
    name: "Broad Institute of MIT and Harvard",
    country: "United States",
    city: "Cambridge, MA",
    category: ["research", "clinical-trials"],
    officialUrl: "https://www.broadinstitute.org",
    description: {
      en: "Biomedical research institute and sponsor of PRiSM. Broad publicly confirms that it is in contact with Lito's team and evaluating options, without confirming eligibility, enrollment or treatment.",
      "pt-br":
        "Instituto de pesquisa biomédica e patrocinador do PRiSM. O Broad confirma publicamente que está em contato com a equipe do Lito e avaliando opções, sem confirmar elegibilidade, inclusão ou tratamento.",
    },
    lastVerified: "2026-08-25",
    mapPosition: { x: 63, y: 8 },
  },
  {
    id: "mgh",
    name: "Massachusetts General Hospital",
    country: "United States",
    city: "Boston, MA",
    category: ["clinical-trials", "diagnosis"],
    officialUrl: "https://www.massgeneral.org",
    description: {
      en: "Academic medical center listed as a study location in the PRiSM registry record.",
      "pt-br":
        "Centro médico acadêmico listado como local de estudo no registro do PRiSM.",
    },
    lastVerified: VERIFIED,
    mapPosition: { x: 69, y: 18 },
  },
  {
    id: "mayo-clinic",
    name: "Mayo Clinic",
    country: "United States",
    city: "Rochester, MN",
    category: ["clinical-trials", "diagnosis"],
    officialUrl: "https://www.mayoclinic.org",
    description: {
      en: "Academic medical center with prion disease diagnostic expertise. Listed as a PRiSM study location.",
      "pt-br":
        "Centro médico acadêmico com experiência diagnóstica em doenças priônicas. Listado como local de estudo do PRiSM.",
    },
    lastVerified: VERIFIED,
    mapPosition: { x: 27, y: 14 },
  },
  {
    id: "columbia",
    name: "Columbia University Irving Medical Center",
    country: "United States",
    city: "New York, NY",
    category: ["clinical-trials", "research"],
    officialUrl: "https://www.cuimc.columbia.edu",
    description: {
      en: "Academic medical center listed as a PRiSM study location.",
      "pt-br": "Centro médico acadêmico listado como local de estudo do PRiSM.",
    },
    lastVerified: VERIFIED,
    mapPosition: { x: 57, y: 19 },
  },
  {
    id: "uh-cleveland",
    name: "University Hospitals Cleveland Medical Center",
    country: "United States",
    city: "Cleveland, OH",
    category: ["clinical-trials", "diagnosis"],
    officialUrl: "https://www.uhhospitals.org",
    description: {
      en: "Academic medical center listed as a PRiSM study location, in the same city as the US national prion surveillance center.",
      "pt-br":
        "Centro médico acadêmico listado como local de estudo do PRiSM, na mesma cidade do centro nacional de vigilância de doenças priônicas dos EUA.",
    },
    lastVerified: VERIFIED,
    mapPosition: { x: 42, y: 22 },
  },
  {
    id: "vumc",
    name: "Vanderbilt University Medical Center",
    country: "United States",
    city: "Nashville, TN",
    category: ["clinical-trials"],
    officialUrl: "https://www.vumc.org",
    description: {
      en: "Academic medical center listed as a PRiSM study location.",
      "pt-br": "Centro médico acadêmico listado como local de estudo do PRiSM.",
    },
    lastVerified: VERIFIED,
    mapPosition: { x: 34, y: 34 },
  },
  {
    id: "ucsf-mac",
    name: "UCSF Memory and Aging Center",
    country: "United States",
    city: "San Francisco, CA",
    category: ["research", "diagnosis"],
    officialUrl: "https://memory.ucsf.edu",
    description: {
      en: "Clinical and research center for neurodegenerative disease, including a dedicated rapidly progressive dementia and prion disease program.",
      "pt-br":
        "Centro clínico e de pesquisa em doenças neurodegenerativas, com um programa dedicado a demências rapidamente progressivas e doenças priônicas.",
    },
    lastVerified: VERIFIED,
    mapPosition: { x: 8, y: 30 },
  },
  {
    id: "npdpsc",
    name: "National Prion Disease Pathology Surveillance Center",
    country: "United States",
    city: "Cleveland, OH",
    category: ["diagnosis", "surveillance"],
    officialUrl:
      "https://case.edu/medicine/pathology/divisions/national-prion-disease-pathology-surveillance-center",
    description: {
      en: "US reference center for prion disease diagnostics and surveillance, based at Case Western Reserve University.",
      "pt-br":
        "Centro de referência dos EUA para diagnóstico e vigilância de doenças priônicas, sediado na Case Western Reserve University.",
    },
    lastVerified: VERIFIED,
    mapPosition: { x: 46, y: 10 },
  },
  {
    id: "cjd-foundation",
    name: "CJD Foundation",
    country: "United States",
    category: ["patient-support", "advocacy"],
    officialUrl: "https://cjdfoundation.org",
    description: {
      en: "Nonprofit supporting families affected by prion disease and funding research. Provides resources for patients, caregivers and clinicians.",
      "pt-br":
        "Organização sem fins lucrativos que apoia famílias afetadas por doenças priônicas e financia pesquisa. Oferece recursos para pacientes, cuidadores e médicos.",
    },
    lastVerified: VERIFIED,
    mapPosition: { x: 52, y: 31 },
  },
  {
    id: "prion-alliance",
    name: "Prion Alliance",
    country: "United States",
    category: ["research", "advocacy"],
    officialUrl: "https://www.prionalliance.org",
    description: {
      en: "Nonprofit that funds and advocates for research toward treatments for human prion disease.",
      "pt-br":
        "Organização sem fins lucrativos que financia e defende pesquisas voltadas a tratamentos para doenças priônicas humanas.",
    },
    lastVerified: VERIFIED,
    mapPosition: { x: 74, y: 6 },
  },
];

export const organizationCategories = [
  "research",
  "clinical-trials",
  "diagnosis",
  "patient-support",
  "advocacy",
  "surveillance",
] as const;
