"use client";

import { useId, useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  buildMailto,
  buildMessage,
  fieldLimits,
  submissionCategories,
  validateSubmission,
  type SubmissionCategory,
  type SubmissionFields,
  type ValidationErrors,
} from "@/lib/submission";

type Step = "fill" | "review" | "done" | "error";

const emptyFields: SubmissionFields = {
  category: "researcher",
  fullName: "",
  organization: "",
  role: "",
  country: "",
  expertise: "",
  website: "",
  publication: "",
  trialId: "",
  relevance: "",
  contact: "",
};

/**
 * Structured "Can You Help?" form.
 *
 * Default mode builds a mailto link the sender reviews in their own email client.
 * Moderated mode posts to /api/submissions. Nothing is published, ever.
 */
export function HelpForm() {
  const t = useTranslations("form");
  const locale = useLocale();
  const id = useId();
  const mode = siteConfig.submissionMode;

  const [fields, setFields] = useState<SubmissionFields>(emptyFields);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ValidationErrors & { consent?: "consent" }>({});
  const [step, setStep] = useState<Step>("fill");
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const labels = {
    categoryLabel: t("categoryLabel"),
    categories: Object.fromEntries(
      submissionCategories.map((c) => [c, t(`categories.${c}`)]),
    ) as Record<SubmissionCategory, string>,
    fields: {
      fullName: t("fields.fullName"),
      organization: t("fields.organization"),
      role: t("fields.role"),
      country: t("fields.country"),
      expertise: t("fields.expertise"),
      website: t("fields.website"),
      publication: t("fields.publication"),
      trialId: t("fields.trialId"),
      relevance: t("fields.relevance"),
      contact: t("fields.contact"),
    },
    subjectPrefix: t("subjectPrefix"),
    notProvided: "-",
  };

  const message = buildMessage(fields, labels, siteConfig.url);

  function update<K extends keyof SubmissionFields>(key: K, value: SubmissionFields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleReview(e: FormEvent) {
    e.preventDefault();
    const next: ValidationErrors & { consent?: "consent" } = validateSubmission(fields);
    if (!consent) next.consent = "consent";
    setErrors(next);
    if (Object.keys(next).some((k) => next[k as keyof typeof next])) {
      // aria-invalid is applied on the next render, so query after it commits.
      requestAnimationFrame(() => {
        document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      });
      return;
    }
    setStep("review");
    requestAnimationFrame(() =>
      document.getElementById("help-form")?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  }

  async function handleSend() {
    if (honeypot) {
      setStep("done");
      return;
    }
    if (mode === "moderated") {
      setSending(true);
      try {
        const res = await fetch("/api/submissions", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ...fields, locale }),
        });
        setStep(res.ok ? "done" : "error");
      } catch {
        setStep("error");
      } finally {
        setSending(false);
      }
      return;
    }
    window.location.assign(buildMailto(siteConfig.officialEmail, message.subject, message.body));
    setStep("done");
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(`${message.subject}\n\n${message.body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  if (step === "done") {
    return (
      <div className="border border-sky-700/40 bg-sky-200/40 p-6 sm:p-8">
        <h2 className="display text-3xl text-navy-900">{t("successTitle")}</h2>
        <p className="mt-4 text-ink-700">
          {mode === "moderated"
            ? t("successModerated")
            : t("successMailto", { email: siteConfig.officialEmail })}
        </p>
        {mode !== "moderated" && (
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="navy" type="button" onClick={copyMessage}>
              {copied ? t("copyMessage") + " ✓" : t("copyMessage")}
            </Button>
            <a
              href={buildMailto(siteConfig.officialEmail, message.subject, message.body)}
              className="inline-flex items-center border border-navy-900 px-4 py-2.5 text-sm font-medium text-navy-900 hover:bg-navy-900 hover:text-cream-50"
            >
              {t("send")}
            </a>
          </div>
        )}
      </div>
    );
  }

  if (step === "error") {
    return (
      <div className="border border-amber-600/60 bg-amber-100 p-6 sm:p-8">
        <h2 className="display text-3xl text-navy-900">{t("errorTitle")}</h2>
        <p className="mt-4 text-ink-700">{t("errorBody", { email: siteConfig.officialEmail })}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={buildMailto(siteConfig.officialEmail, message.subject, message.body)}
            className="inline-flex items-center border border-navy-900 bg-navy-900 px-4 py-2.5 text-sm font-medium text-cream-50 hover:bg-navy-800"
          >
            {t("send")}
          </a>
          <Button variant="outline-dark" type="button" onClick={() => setStep("fill")}>
            {t("edit")}
          </Button>
        </div>
      </div>
    );
  }

  if (step === "review") {
    return (
      <div className="border border-navy-900/20 bg-cream-50 p-6 sm:p-8">
        <h2 className="display text-3xl text-navy-900">{t("previewTitle")}</h2>
        <p className="mt-2 text-sm text-ink-500">{t("previewNote")}</p>
        <dl className="mt-6 grid gap-1 font-mono text-xs text-ink-500 sm:grid-cols-[auto_1fr] sm:gap-x-4">
          <dt>{t("to")}</dt>
          <dd className="text-ink-900">{siteConfig.officialEmail}</dd>
          <dt>{t("subject")}</dt>
          <dd className="text-ink-900">{message.subject}</dd>
        </dl>
        <pre className="mt-6 overflow-x-auto border border-navy-900/15 bg-cream-100 p-5 font-sans text-sm leading-relaxed whitespace-pre-wrap text-ink-900">
          {message.body}
        </pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button type="button" onClick={handleSend} disabled={sending} size="lg">
            {sending ? t("sending") : mode === "moderated" ? t("sendModerated") : t("send")}
          </Button>
          <Button variant="outline-dark" type="button" onClick={() => setStep("fill")} size="lg">
            {t("edit")}
          </Button>
          <Button variant="text" type="button" onClick={copyMessage} className="text-navy-900">
            {copied ? t("copyMessage") + " ✓" : t("copyMessage")}
          </Button>
        </div>
      </div>
    );
  }

  const inputCls = (key: keyof SubmissionFields) =>
    cn(
      "mt-1.5 w-full border bg-cream-50 px-3.5 py-2.5 text-base text-ink-900 placeholder:text-ink-300 focus:border-navy-900 focus:outline-none",
      errors[key] ? "border-amber-600" : "border-navy-900/30",
    );

  // Render helper, not a component: keeps inputs mounted (and focused) across re-renders.
  const renderField = ({
    name,
    optional,
    placeholder,
    textarea,
    type = "text",
  }: {
    name: Exclude<keyof SubmissionFields, "category">;
    optional?: boolean;
    placeholder?: string;
    textarea?: boolean;
    type?: string;
  }) => {
    const fid = `${id}-${name}`;
    const err = errors[name];
    const common = {
      id: fid,
      name,
      value: fields[name] ?? "",
      maxLength: fieldLimits[name],
      required: !optional,
      "aria-invalid": err ? true : undefined,
      "aria-describedby": err ? `${fid}-error` : undefined,
      placeholder,
      className: inputCls(name),
    };
    return (
      <div>
        <label htmlFor={fid} className="flex items-baseline justify-between gap-3 text-sm font-medium text-ink-900">
          <span>{t(`fields.${name}`)}</span>
          {optional && <span className="eyebrow text-ink-500">{t("fields.optional")}</span>}
        </label>
        {textarea ? (
          <textarea
            {...common}
            rows={6}
            onChange={(e) => update(name, e.target.value)}
          />
        ) : (
          <input
            {...common}
            type={type}
            autoComplete={name === "fullName" ? "name" : name === "organization" ? "organization" : name === "country" ? "country-name" : name === "website" ? "url" : "off"}
            onChange={(e) => update(name, e.target.value)}
          />
        )}
        {err && (
          <p id={`${fid}-error`} className="mt-1.5 text-sm text-amber-700">
            {t(`validation.${err}`)}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleReview} noValidate className="space-y-10">
      <fieldset>
        <legend className="text-sm font-medium text-ink-900">{t("categoryLabel")}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {submissionCategories.map((c) => {
            const cid = `${id}-cat-${c}`;
            const active = fields.category === c;
            return (
              <label
                key={c}
                htmlFor={cid}
                className={cn(
                  "flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors",
                  active
                    ? "border-navy-900 bg-navy-900 text-cream-50"
                    : "border-navy-900/30 bg-cream-50 text-ink-900 hover:border-navy-900",
                )}
              >
                <input
                  type="radio"
                  id={cid}
                  name="category"
                  value={c}
                  checked={active}
                  onChange={() => update("category", c)}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={cn(
                    "h-2.5 w-2.5 shrink-0 border",
                    active ? "border-amber-400 bg-amber-400" : "border-navy-900/50",
                  )}
                />
                {t(`categories.${c}`)}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        {renderField({ name: "fullName" })}
        {renderField({ name: "organization" })}
        {renderField({ name: "role" })}
        {renderField({ name: "country" })}
        <div className="sm:col-span-2">
          {renderField({ name: "expertise", placeholder: t("placeholders.expertise") })}
        </div>
        {renderField({ name: "website", optional: true, type: "url", placeholder: "https://" })}
        {renderField({ name: "trialId", optional: true, placeholder: t("placeholders.trialId") })}
        <div className="sm:col-span-2">
          {renderField({ name: "publication", optional: true })}
        </div>
        <div className="sm:col-span-2">
          {renderField({ name: "relevance", textarea: true, placeholder: t("placeholders.relevance") })}
        </div>
        <div className="sm:col-span-2">
          {renderField({ name: "contact", placeholder: t("placeholders.contact") })}
        </div>
      </div>

      {/* Honeypot. Hidden from people, visible to bots. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor={`${id}-website2`}>{t("honeypot")}</label>
        <input
          id={`${id}-website2`}
          name="website2"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div>
        <label className="flex cursor-pointer gap-3 text-sm text-ink-700">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              if (errors.consent) setErrors((er) => ({ ...er, consent: undefined }));
            }}
            aria-invalid={errors.consent ? true : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-amber-500"
          />
          <span>{t("consent")}</span>
        </label>
        {errors.consent && <p className="mt-1.5 text-sm text-amber-700">{t("validation.consent")}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg">
          {t("review")}
        </Button>
        <p className="text-xs text-ink-500">
          {t("to")}: <span className="font-mono">{siteConfig.officialEmail}</span>
        </p>
      </div>
    </form>
  );
}
