import type { Locale } from "@/i18n/routing";

/** A string with one value per supported locale. */
export type Localized = Record<Locale, string>;

export type OrganizationCategory =
  | "research"
  | "clinical-trials"
  | "diagnosis"
  | "patient-support"
  | "advocacy"
  | "surveillance";

export type ResearchOrganization = {
  id: string;
  name: string;
  country?: string;
  city?: string;
  category: OrganizationCategory[];
  description: Localized;
  officialUrl: string;
  relevanceNote?: Localized;
  /** ISO date (YYYY-MM-DD) when a human last checked the entry. */
  lastVerified?: string;
  /**
   * Position on the abstract network map, in percent of width and height.
   * Loosely based on geography, then spread out so nodes and labels stay legible.
   * The map is conceptual; it does not claim precise coordinates.
   */
  mapPosition?: { x: number; y: number };
};

export type TrialStatus =
  | "check-registry"
  | "recruiting"
  | "not-yet-recruiting"
  | "active-not-recruiting"
  | "completed"
  | "unknown";

export type ClinicalTrial = {
  id: string;
  registryId: string;
  registryUrl: string;
  acronym?: string;
  title: Localized;
  sponsor: string;
  phase: string;
  summary: Localized;
  plannedParticipants?: number;
  locations: string[];
  /** Never treated as a permanent fact. Always shown with lastVerified. */
  status: TrialStatus;
  /** Registry-specific context, including conflicts inside official records. */
  statusNote?: Localized;
  /** Sponsor-reported real-world availability, kept separate from registry. */
  sponsorOperationalNote?: Localized;
  /** Site-level referral/screening capacity, kept separate from sponsor state. */
  siteOperationalNote?: Localized;
  /** Publicly reportable status of this path for Lito, with attribution in copy. */
  caseStatus?: Localized;
  /** Product-specific expanded-access state, not a general policy summary. */
  expandedAccessNote?: Localized;
  /** Mechanism-specific regulatory boundary or unresolved regulatory claim. */
  regulatoryNote?: Localized;
  lastVerified: string;
};

export type ResearchArea = {
  id: string;
  title: Localized;
  plain: Localized;
  technical: Localized;
};

export type SourceCategory =
  | "official-updates"
  | "reporting"
  | "public-health"
  | "clinical-trials"
  | "research-institutions"
  | "organizations";

export type Source = {
  id: string;
  category: SourceCategory;
  title: Localized;
  publisher: string;
  url: string;
  note?: Localized;
  accessed?: string;
};

export type TimelineEntry = {
  id: string;
  /** Month-level precision is enough. Avoid day-level private details. */
  date: Localized;
  title: Localized;
  body: Localized;
};
