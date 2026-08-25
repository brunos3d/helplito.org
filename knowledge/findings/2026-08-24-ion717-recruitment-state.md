---
type: finding
status: unresolved
last_verified: 2026-08-25
confidence: high
sources:
  - https://clinicaltrials.gov/study/NCT06153966
  - https://clinicaltrials.gov/api/int/studies/NCT06153966/history/29
  - https://clinicaltrials.gov/api/int/studies/NCT06153966/history/30
  - https://clinicaltrials.med.nyu.edu/clinicaltrial/2549/phase-12a-study-evaluate/
  - https://euclinicaltrials.eu/ctis-public/view/2023-503355-98-00?lang=en
  - https://neurology.ionis.com/our-pipeline
  - https://www.instagram.com/lito/
public_site_impact: review-required
related:
  - F-006
  - F-007
  - F-008
  - Q-003
---

# ION717 recruitment state on 2026-08-24

Verified approximately 2026-08-24 15:54 to 16:05 BRT (UTC-03:00).

August 25 clarification: the official-source conflict below remains unresolved.
Separately, the family reports that Ionis declined Lito, said the studies were
closed to new participants, and said compassionate use was not available to him
at that time. This is a case-specific answer, not proof of universal closure.

## Finding

The current overall ClinicalTrials.gov state is `Active, not recruiting`. This
changed from `Recruiting` in the immediately preceding version. The current
record nevertheless retains a sentence that says listed sites actively recruit
for Regimen 3. NYU still says `Open`. The operational state is therefore
unresolved beyond the current overall registry classification.

## Evidence

### ClinicalTrials.gov version 29

- submitted August 3 and posted August 5, 2026;
- overall `Recruiting`;
- enrollment 76 estimated;
- nine sites `Recruiting` and four `Active, not recruiting`;
- central contact present;
- detailed description says sites recruit for open-label Regimen 3.

### ClinicalTrials.gov version 30

- submitted August 17 and posted August 19, 2026;
- overall `Active, not recruiting`;
- enrollment 85 actual;
- all site status values removed;
- central contact removed;
- detailed Regimen 3 recruitment sentence unchanged.

### Sponsor and regional registries

Ionis currently labels ION717 `Active, not recruiting` on its neurology pipeline.
CTIS says recruitment ended in France, Germany, Italy and Spain. The country
recruitment end dates shown by CTIS are all in 2024.

## Conflicting evidence

The NYU Langone page says `Recruitment Status: Open`. It provides no visible
last-updated date. The current ClinicalTrials.gov record no longer assigns NYU a
location status.

The current ClinicalTrials.gov detailed description conflicts with its own
overall and location modules. This cannot be resolved by silently preferring the
prose or the structured fields.

## Falsification attempt

The prior hypothesis was that sites still recruited for Regimen 3. It was tested
against current structured registry fields, history, the sponsor pipeline,
CTIS and the NYU local page. Current structured fields, Ionis and CTIS weigh
against the hypothesis. NYU and the unchanged registry prose prevent a complete
resolution.

## Interpretation limits

Overall status, location status, regimen status and immediate capacity are
different claims. An older location state cannot be carried forward after the
registry removes that state.

## Open questions

- Did version 30 close Regimen 3 everywhere after reaching 85 participants?
- Is NYU's `Open` label stale, or does it describe a local workflow not reflected
  in the current registry?
- Will the sponsor correct the unchanged recruitment sentence?

## Potential public-site impact

Do not publish ION717 as currently recruiting. If the study is added to public
data, use `Active, not recruiting`, date the registry verification, state that
official pages still conflict, and separately attribute the case-specific
answer to the family.
