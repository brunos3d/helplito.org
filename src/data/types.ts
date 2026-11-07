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
  statusNote?: Localized;
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
  | "biography"
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
  /** "lito": his life and illness. "project": the Help Lito initiative and this website. */
  kind: "lito" | "project";
  /** ISO date for the <time> element. Month precision (YYYY-MM) when the day is not public. */
  isoDate: string;
  /** Human date. Day-level only for dates the family or the press announced. */
  date: Localized;
  title: Localized;
  body: Localized;
  /** True for events that have not happened yet, such as the domain expiring. */
  upcoming?: boolean;
};
