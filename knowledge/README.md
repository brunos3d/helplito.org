# Knowledge layer

This directory holds reproducible research notes for human review. It is not a
published part of helplito.org and it does not change `src/data/*`.

The layer preserves the distinction between source evidence, findings,
conflicts, questions and facts that may eventually be suitable for the public
site:

```text
primary sources
  -> evidence notes
  -> findings, conflicts and questions
  -> human review
  -> candidate public fact
  -> src/data/*
  -> public website
```

Nothing moves from this directory into the public data layer automatically. A
candidate public fact requires a separate, sourced and human-reviewed change.

The layer may also record completed research activity. Activity records say
what was checked, what artifacts were produced and what remains unresolved.
They are not task queues, outreach plans or evidence for a medical claim.

## Intended records

The directory may grow gradually to include:

- trial records;
- institutional records;
- regulatory pathway notes;
- dated findings and source conflicts;
- open questions; and
- dated activity records that summarize completed work without reproducing
  contact details or message templates.

Each pull request should remain small and cover one subject. New record types
should be added only when an existing type cannot express the evidence clearly.

## Record metadata

Use simple YAML frontmatter:

```yaml
---
type: finding
status: verified
last_verified: 2026-08-24
confidence: high
sources:
  - https://official.example/record
public_site_impact: candidate
---
```

Allowed status values are:

- `verified`: current primary evidence supports the finding;
- `partially-verified`: only part of the finding is supported;
- `unresolved`: available evidence does not settle the question;
- `refuted`: current evidence contradicts the prior hypothesis;
- `stale`: the record has not been checked recently enough for its subject.

Confidence is `high`, `medium` or `low`. It describes the strength and
specificity of the cited evidence, not the importance of a finding. Records may
also use `supersedes` and `related` when those links prevent ambiguity.

`public_site_impact` should be one of:

- `candidate`: may support a later public-site change after review;
- `none`: useful for research context, but not a public-site candidate;
- `review-required`: publication implications are not yet clear.

## Boundaries

Knowledge records must follow the repository contribution and content rules.
In particular, they must not:

- claim that a treatment works;
- claim that any person is eligible, enrolled, accepted or likely to receive a
  treatment;
- publish private medical information;
- copy personal contact details or become a contact directory;
- store outreach recipient lists, message templates or sending instructions;
- call for mass messaging or automate outreach;
- publish user submissions;
- add fundraising, tracking or analytics.

It is acceptable for an activity record to state that outreach-related research
or drafting occurred, or whether a message was sent. The operational material
itself stays outside this repository. A sent-message record must contain only
the date, receiving organization or official channel, purpose and outcome. It
must not reproduce private correspondence or personal contact information.

Official registry pages and institutional contact pages may be linked for
provenance. Prefer links over copied contact details.

See [methodology.md](methodology.md) for the research and verification process.
