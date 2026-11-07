---
type: finding
status: verified
observed_at: 2026-08-24T22:15:45-03:00
source_last_updated:
  clinicaltrials_gov: 2026-06-05
  broad_announcement: 2026-04-22
  neuronext_pages: unknown
last_verified: 2026-08-24
confidence: high
sources:
  - https://clinicaltrials.gov/study/NCT07444580
  - https://neuronext.org/projects/nn112-prism/
  - https://neuronext.org/about-us/clinical-coordinating-center/
  - https://neuronext.org/about-us/dcc/
  - https://www.broadinstitute.org/news/clinical-trial-prion-disease-drug-candidate-begins-enrolling-participants
public_site_impact: review-required
related:
  - F-PRISM-002
  - Q-001
---

# PRiSM network map

Verified again on 2026-08-24 at approximately 22:15 BRT (UTC-03:00).

## Finding

**F-PRISM-002:** PRiSM is sponsored by the Broad Institute and is formally a
NeuroNEXT project with identifier NN112. NINDS is a registry collaborator and,
according to Broad, funds the trial through NeuroNEXT. Broad also explicitly
associates NeuroNEXT's trial sites, MGH Clinical Coordinating Center and
University of Iowa data and statistics center with the trial.

## Evidence map

```text
NINDS / NIH
  | registry collaborator; trial funding through NeuroNEXT per Broad
  v
Broad Institute of MIT and Harvard
  | lead sponsor and responsible party
  v
PRiSM / NCT07444580 / NN112
  |
  +-- NeuroNEXT project and infrastructure
  |     +-- Clinical Coordinating Center: MGH / NCRI
  |     +-- Data Coordinating Center: University of Iowa
  |
  +-- Massachusetts General Hospital study site
  +-- Mayo Clinic study site
  +-- Columbia University Medical Center study site
  +-- University Hospitals Cleveland Medical Center study site
  +-- Vanderbilt University Medical Center study site
```

## Edge classification

| Edge | Classification | Source basis |
| --- | --- | --- |
| Broad Institute -> PRiSM | confirmed | ClinicalTrials.gov lead sponsor and responsible party |
| PRiSM -> NCT07444580 | confirmed | ClinicalTrials.gov identifier |
| PRiSM -> NN112 | confirmed | Registry protocol ID and NeuroNEXT project title |
| Eric Vallabh Minikel -> NN112 protocol PI | confirmed | NeuroNEXT project page |
| NINDS -> PRiSM collaborator | confirmed | ClinicalTrials.gov collaborator field |
| NINDS -> PRiSM funding through NeuroNEXT | confirmed | Broad funding statement, grant `3OT2NS138339-01S2` |
| NeuroNEXT -> PRiSM | confirmed | NeuroNEXT `NN112 PRiSM` project page |
| PRiSM -> MGH/NCRI CCC | confirmed | Broad explicitly says NeuroNEXT infrastructure for the trial includes the MGH CCC; NeuroNEXT identifies the CCC location |
| PRiSM -> University of Iowa DCC | confirmed | Broad explicitly says NeuroNEXT infrastructure for the trial includes the Iowa data and statistics center; NeuroNEXT identifies its DCC there |
| PRiSM -> five clinical sites | confirmed | ClinicalTrials.gov and NeuroNEXT project page |
| Site -> current immediate capacity | unknown | No capacity source located |
| Sponsor/network -> cross-site referral duty | unknown | No policy or commitment located |

## Naming difference

ClinicalTrials.gov uses `University Hospitals Cleveland Medical Center`, while
NeuroNEXT uses `University Hospitals/Case Western Reserve`. The sources appear
to refer to the Cleveland clinical site in the same NN112 project, but this note
preserves the labels rather than asserting a corporate identity edge.

## Interpretation limits

Funding, sponsorship, network support, coordination, data management and
clinical-site participation are different roles. The graph does not establish
control of one institution by another, individual eligibility, immediate
capacity or an obligation to route candidates.

## Open questions

- Which study-specific tasks for NN112 are performed by the CCC and DCC beyond
  the network-wide role descriptions?
- Is there a documented cross-site referral process for NN112?
- Which entity can give an authoritative current answer about arm, cohort and
  site capacity?

## Potential public-site impact

If a public institutional description is added later, describe PRiSM as a
Broad-sponsored NeuroNEXT project rather than reducing the structure to a
generic “Harvard study” label.
