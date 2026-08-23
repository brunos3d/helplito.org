/**
 * Shared shape and formatting for "Can You Help?" submissions.
 * Used by the client form and by the moderated API route.
 */

export const submissionCategories = [
  "researcher",
  "physician",
  "trial",
  "institution",
  "company",
  "advocacy",
  "information",
] as const;

export type SubmissionCategory = (typeof submissionCategories)[number];

export type SubmissionFields = {
  category: SubmissionCategory;
  fullName: string;
  organization: string;
  role: string;
  country: string;
  expertise: string;
  website?: string;
  publication?: string;
  trialId?: string;
  relevance: string;
  contact: string;
};

export const requiredFields: Array<keyof SubmissionFields> = [
  "category",
  "fullName",
  "organization",
  "role",
  "country",
  "expertise",
  "relevance",
  "contact",
];

export const fieldLimits: Partial<Record<keyof SubmissionFields, number>> = {
  fullName: 200,
  organization: 200,
  role: 200,
  country: 120,
  expertise: 300,
  website: 500,
  publication: 1000,
  trialId: 40,
  relevance: 4000,
  contact: 300,
};

export function isValidUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

export function isValidContact(value: string): boolean {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phone = /^\+?[\d\s().-]{7,}$/;
  return email.test(value.trim()) || phone.test(value.trim());
}

export type ValidationErrors = Partial<Record<keyof SubmissionFields, "required" | "url" | "email">>;

export function validateSubmission(fields: Partial<SubmissionFields>): ValidationErrors {
  const errors: ValidationErrors = {};
  for (const key of requiredFields) {
    const v = fields[key];
    if (!v || (typeof v === "string" && v.trim().length === 0)) errors[key] = "required";
  }
  if (fields.website && fields.website.trim() && !isValidUrl(fields.website.trim())) errors.website = "url";
  if (fields.contact && fields.contact.trim() && !isValidContact(fields.contact)) errors.contact = "email";
  if (fields.category && !submissionCategories.includes(fields.category)) errors.category = "required";
  return errors;
}

type Labels = {
  categoryLabel: string;
  categories: Record<SubmissionCategory, string>;
  fields: Record<Exclude<keyof SubmissionFields, "category">, string>;
  subjectPrefix: string;
  notProvided: string;
};

/** Builds a readable plain-text message that the sender reviews before sending. */
export function buildMessage(fields: SubmissionFields, labels: Labels, siteUrl: string) {
  const subject = `${labels.subjectPrefix}: ${labels.categories[fields.category]} (${fields.organization})`;

  const line = (label: string, value?: string) =>
    `${label}: ${value && value.trim() ? value.trim() : labels.notProvided}`;

  const body = [
    `${labels.categoryLabel} ${labels.categories[fields.category]}`,
    "",
    line(labels.fields.fullName, fields.fullName),
    line(labels.fields.organization, fields.organization),
    line(labels.fields.role, fields.role),
    line(labels.fields.country, fields.country),
    line(labels.fields.expertise, fields.expertise),
    line(labels.fields.website, fields.website),
    line(labels.fields.publication, fields.publication),
    line(labels.fields.trialId, fields.trialId),
    "",
    `${labels.fields.relevance}:`,
    fields.relevance.trim(),
    "",
    line(labels.fields.contact, fields.contact),
    "",
    `-- ${siteUrl}`,
  ].join("\n");

  return { subject, body };
}

export function buildMailto(to: string, subject: string, body: string) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
