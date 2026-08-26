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
  - https://www.uol.com.br/splash/noticias/2026/08/25/lito-sousa-farmaceutica-caso.amp.htm
public_site_impact: review-required
related:
  - F-006
  - F-007
  - F-008
  - Q-003
---

# ION717 recruitment state on 2026-08-24

Verified approximately 2026-08-24 15:54 to 16:05 BRT (UTC-03:00).

August 25 clarification: the registry conflict below remains unresolved. Ionis
now publicly says the study is no longer recruiting and ION717 is not currently
available through its expanded-access programs. The family separately reports a
negative case-specific result. Current operational closure must not be rewritten
as permanent impossibility.

## Finding

The current overall ClinicalTrials.gov state is `Active, not recruiting`. This
changed from `Recruiting` in the immediately preceding version. The current
record nevertheless retains a sentence that says listed sites actively recruit
for Regimen 3. NYU still says `Open`. Ionis's later public statement resolves
the current sponsor-operational state while leaving the registry metadata
conflict queryable.

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

Publish the registry and sponsor scopes separately: the registry says `Active,
not recruiting` but retains conflicting prose; Ionis says the study is no
longer recruiting and ION717 is not currently available through its
expanded-access programs. The family-reported case result remains separately
attributed.
