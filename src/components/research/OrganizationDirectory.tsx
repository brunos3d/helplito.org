"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { OrganizationCategory, ResearchOrganization } from "@/data/types";
import { organizationCategories } from "@/data/organizations";
import { cn } from "@/lib/utils";
import { OrganizationCard } from "./OrganizationCard";

type Props = { organizations: ResearchOrganization[] };

/** Filterable list of organizations. Filtering happens in the browser over static data. */
export function OrganizationDirectory({ organizations }: Props) {
  const t = useTranslations("researchPage");
  const c = useTranslations("categories");
  const [active, setActive] = useState<OrganizationCategory | "all">("all");

  const visible =
    active === "all" ? organizations : organizations.filter((o) => o.category.includes(active));

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label={t("orgsTitle")}>
        {(["all", ...organizationCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "eyebrow border px-3 py-2.5 transition-colors sm:py-1.5",
              active === cat
                ? "border-navy-900 bg-navy-900 text-cream-50"
                : "border-navy-900/20 text-ink-700 hover:border-navy-900/60",
            )}
          >
            {cat === "all" ? t("filterAll") : c(cat)}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((org) => (
          <li key={org.id}>
            <OrganizationCard org={org} />
          </li>
        ))}
      </ul>
    </div>
  );
}
