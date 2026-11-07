---
type: finding
status: refuted
observed_at: 2026-08-24T22:15:45-03:00
source_last_updated:
  clinicaltrials_gov: 2026-08-19
  ionis_neurology_reference: 2026-03-05
last_verified: 2026-08-24
confidence: high
sources:
  - https://clinicaltrials.gov/study/NCT06153966
  - https://clinicaltrials.gov/api/int/studies/NCT06153966/history/29
  - https://clinicaltrials.gov/api/int/studies/NCT06153966/history/30
  - https://neurology.ionis.com/our-pipeline
public_site_impact: none
related:
  - F-ION-001
  - C-ION-001
  - C-ION-002
  - Q-ION-001
---

# F-ION-001 — Ionis public sources disagree on ION717 recruitment state

## Finding

The proposed **current** conflict is refuted by a newer registry version. It did
exist between August 5 and August 19, 2026: ClinicalTrials.gov version 29 said
`Recruiting`, while the Ionis neurology page said `Active, not recruiting`.
Version 30 now agrees with the Ionis page on the overall state.

This does not make the evidence consistent as a whole. The current registry's
unchanged detailed description still says sites actively recruit for Regimen 3,
and the Ionis page retains older design figures.

## Source A

ClinicalTrials.gov, for which Ionis Pharmaceuticals, Inc. is the responsible
party:

- version 29, posted August 5, 2026: `Recruiting`, 76 estimated participants;
- version 30, posted August 19, 2026: `Active, not recruiting`, 85 actual
  participants; and
- current detailed description: sites are described as actively recruiting for
  open-label Regimen 3.

## Source B

The Ionis neurology page currently displays `Active, not recruiting`. Its ION717
entry cites ClinicalTrials.gov as accessed March 5, 2026 and still describes
approximately 56 participants and a 70-week open-label extension.

## Conflict

There is no current Source A versus Source B conflict on the overall recruitment
label. The historical conflict was closed by registry version 30. The current
unresolved conflict is instead:

```text
registry structured overall state: Active, not recruiting
  != registry detailed prose: listed sites actively recruiting for Regimen 3
```

The Ionis page also agrees on status while remaining stale on enrollment and
extension duration.

## Possible explanations

These are hypotheses only:

- the corporate page used an older registry snapshot that happened to match the
  later overall closure;
- the registry structured fields were updated before its detailed prose;
- Regimen 3 reached its enrollment target between August 5 and August 17;
- operational availability differs from the public registry labels; or
- one or more local workflows remained open while global enrollment closed.

## What would resolve this

A current primary statement from Ionis explaining whether Regimen 3 accepts any
new referrals or participants, together with reconciled ClinicalTrials.gov
prose, structured status fields and site-level states.

## Interpretation limits

This finding does not establish that either source was deceptive or erroneous.
It records the dates, scopes and changes without treating a historical snapshot
as current.
