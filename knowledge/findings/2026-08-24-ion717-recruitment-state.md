---
type: finding
status: unresolved
observed_at: 2026-08-24T22:15:45-03:00
source_last_updated:
  clinicaltrials_gov: 2026-08-19
  ctis: 2026-04-18
  ionis_neurology_reference: 2026-03-05
  nyu_langone: unknown
last_verified: 2026-08-24
confidence: high
sources:
  - https://clinicaltrials.gov/study/NCT06153966
  - https://clinicaltrials.gov/api/int/studies/NCT06153966/history/29
  - https://clinicaltrials.gov/api/int/studies/NCT06153966/history/30
  - https://clinicaltrials.med.nyu.edu/clinicaltrial/2549/phase-12a-study-evaluate/
  - https://euclinicaltrials.eu/ctis-public/view/2023-503355-98-00?lang=en
  - https://neurology.ionis.com/our-pipeline
public_site_impact: review-required
related:
  - F-ION-002
  - F-ION-003
  - C-ION-001
  - C-ION-002
  - Q-ION-001
---

# ION717 recruitment state

Verified again on 2026-08-24 at approximately 22:15 BRT (UTC-03:00).

## Finding

**F-ION-002:** the current structured ClinicalTrials.gov overall state is
`Active, not recruiting`. This changed from `Recruiting` in the immediately
preceding version. The current record nevertheless retains a sentence saying
listed sites actively recruit for Regimen 3, while NYU still says `Open`.
Operational availability is therefore unresolved beyond the current overall
registry classification.

## Overall trial state

- Responsible party and sponsor: Ionis Pharmaceuticals, Inc.
- Status verified: August 2026.
- Last update posted: August 19, 2026.
- Overall state: `Active, not recruiting`.
- Enrollment: 85 actual.
- Primary completion: February 2027, estimated.
- Regimens 1 and 2: fully enrolled, according to the detailed description.
- Regimen 3: open-label, according to the detailed description and arm module.
- Current central study contact: absent.

The overall randomized, parallel and double-masked design describes the study
as a whole. Regimen 3 is separately described as ION717-only and open-label.

## Site-level states

Version 30 retains 13 named locations but publishes no current site-level state
for any of them. The following version 29 snapshot is historical evidence from
August 5, 2026, not a current site list:

| Version 29 state | Sites |
| --- | --- |
| `Recruiting` | NYU Langone Health; Royal Melbourne Hospital; Hôpital Universitaire Pitié Salpêtrière; University Medical Center Göttingen; Tel Aviv Sourasky Medical Center; Fondazione I.R.C.C.S. Istituto Neurologico Carlo Besta; National Center of Neurology and Psychiatry; Neuromuscular Center Yoshimizu Hospital; Hospital Clinic de Barcelona |
| `Active, not recruiting` | Massachusetts General Hospital; University Hospitals Cleveland Medical Center; McGill University Health Centre; Mihara Memorial Hospital |

## Evidence

### ClinicalTrials.gov version 29

- submitted August 3 and posted August 5, 2026;
- overall `Recruiting`;
- enrollment 76 estimated;
- nine sites `Recruiting` and four `Active, not recruiting`;
- central contact present; and
- detailed description says sites recruit for open-label Regimen 3.

### ClinicalTrials.gov version 30

- submitted August 17 and posted August 19, 2026;
- overall `Active, not recruiting`;
- enrollment 85 actual;
- all site status values removed;
- central contact removed; and
- detailed Regimen 3 recruitment sentence unchanged.

### Sponsor, regional and local sources

Ionis currently labels ION717 `Active, not recruiting` on its neurology page,
whose ION717 references say they were accessed March 5, 2026. CTIS reports 2024
recruitment end dates in France, Germany, Italy and Spain. NYU Langone currently
labels its local page `Open` but displays no last-updated date.

### C-ION-001: current registry fields conflict

The current ClinicalTrials.gov detailed description conflicts with its own
overall and location modules. This cannot be resolved by silently preferring
the prose or the structured fields.

### C-ION-002: NYU conflicts with the current overall record

NYU says `Open`, while the current ClinicalTrials.gov record says `Active, not
recruiting` overall and no longer gives NYU a site state. NYU's page may be
current, locally scoped or stale; the page does not expose enough provenance to
choose among those explanations.

## Changes since previous snapshot

Compared with version 29, posted August 5, version 30:

- changed the overall state from `Recruiting` to `Active, not recruiting`;
- changed enrollment from 76 estimated to 85 actual;
- removed all 13 site-level states;
- removed the central contact;
- retained the text saying listed sites actively recruit for Regimen 3; and
- retained Regimen 3 as open-label and the 142-week open-label extension.

## Interpretation limits

Overall status, location status, regimen status, referral intake, screening and
immediate capacity are different claims. An older location state cannot be
carried forward after the registry removes that state.

## Open questions

- Did version 30 close Regimen 3 everywhere after reaching 85 participants?
- Is NYU's `Open` label stale, or does it describe a local workflow not reflected
  in the current registry?
- Does “not accepting new participants” mean no new referrals, no new consents,
  no new screening or a narrower regional limitation?
- Will the sponsor reconcile the unchanged recruitment sentence?

## Potential data-model impact

The public `ClinicalTrial` model currently has one overall status and a list of
location names. A future proposal could add optional per-site status and
site-status verification date, but it must also represent an explicitly absent
site value. No change to `src/data/trials.ts` is made in this round.

Do not publish ION717 as currently recruiting. If it is later added to public
data, use the current overall state with its verification date and disclose the
remaining official-source conflicts.
