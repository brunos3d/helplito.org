# Evidence research methodology

The purpose of this method is to make research reproducible without turning a
lead, interpretation or time-sensitive status into a public claim.

The working priorities are accuracy over advocacy, provenance over confidence,
and a clear separation between facts, conflicts and questions.

## Research workflow

Use this sequence for each research question:

```text
question
  -> source discovery
  -> primary-source validation
  -> cross-check
  -> falsification attempt
  -> finding
  -> confidence
  -> open question
```

1. State a narrow question or hypothesis before collecting evidence.
2. Use aggregators and search results only to discover possible sources.
3. Return to the primary source and check its current state.
4. Record the source URL, the approximate verification date and time with time
   zone, and any source-provided update date.
5. Cross-check material facts against another primary or authoritative source
   when one is available.
6. Try to falsify the hypothesis. Search specifically for current records,
   history, scope differences, stale pages and evidence that would contradict
   the proposed finding.
7. Classify the result as confirmed, changed or refuted relative to the prior
   lead. Preserve partially supported claims as partially verified.
8. Record conflicts and unknowns before considering public-site impact.

## Source priority

Prefer sources in this order when they can answer the question:

1. official clinical trial registries;
2. regulators and public health authorities;
3. government research agencies and official research networks;
4. sponsor websites and sponsor documents;
5. hospital and university websites;
6. peer-reviewed literature;
7. official channels of the person or team concerned;
8. press sources for attributed statements or chronology only.

An item lower in the list may describe a different scope and therefore remain
relevant. Source priority does not justify silently discarding a conflict.

## Evidence capture

For every material source, record:

- the exact page or record URL;
- the fact or statement the source supports;
- when it was checked, including an approximate local time and time zone;
- the update date shown by the source, if any;
- whether the source is current, historical, cached or of uncertain freshness;
- any scope qualifier, such as overall trial status versus location status.

Quote only the minimum text needed to disambiguate evidence. Prefer a precise
paraphrase and a link to the primary source.

## Findings and interpretation

A finding must say what the sources establish and what they do not establish.
Use these sections when applicable:

```text
## Finding
## Evidence
## Conflicting evidence
## Interpretation limits
## Open questions
## Potential public-site impact
```

Do not collapse distinct states. In particular:

```text
trial exists
  != trial is recruiting
  != a specific site is recruiting
  != a slot is available now
  != a person is eligible
  != a person is accepted
  != a drug is available through expanded access
```

These distinctions remain explicit even when a source uses a broad label such
as `Recruiting` or `Open`.

## Conflicting and changing evidence

When official sources disagree:

1. describe each source and its scope separately;
2. preserve each source-provided date and the verification time;
3. check whether the difference is explained by overall, regimen-level,
   country-level or site-level status;
4. check record history or archived official material when available;
5. classify the finding as `partially-verified` or `unresolved` unless the
   discrepancy can be resolved directly from the sources.

Never choose one official version silently. If later evidence resolves the
conflict, keep the earlier record and link the new record with `supersedes`.

## Confidence

- `high`: a current primary source directly supports the narrowly written
  finding, with no material unresolved conflict;
- `medium`: reliable evidence supports the finding, but scope, freshness or a
  secondary conflict limits certainty;
- `low`: evidence is indirect, incomplete or difficult to reproduce.

Confidence does not override status. An unresolved question can have high
confidence that the available sources do not answer it.

## Questions and stable identifiers

Use lightweight, stable identifiers such as `F-001` for findings and `Q-001`
for questions. Do not reuse an identifier when a hypothesis is refuted. Record
the refutation and, if needed, open a new question.

Questions should identify what evidence would resolve them. They must not imply
an institutional obligation, treatment availability or individual eligibility
that the sources do not establish.

## Human review and public-site promotion

A knowledge record is not authority to edit the public site. Promotion requires
a separate pull request that:

- cites the applicable primary sources;
- follows the bilingual public-content rules;
- uses the current data types and records a new verification date;
- states the interpretation limits relevant to public readers;
- receives normal maintainer review.

Sensitive, operational or ambiguous research may remain intelligence-only with
`public_site_impact: none`. No record is promoted automatically.
