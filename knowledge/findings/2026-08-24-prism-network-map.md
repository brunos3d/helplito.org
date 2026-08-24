---
type: finding
status: verified
last_verified: 2026-08-24
confidence: high
sources:
  - https://clinicaltrials.gov/study/NCT07444580
  - https://neuronext.org/projects/nn112-prism/
  - https://neuronext.org/about-us/clinical-coordinating-center/
  - https://neuronext.org/industry/
  - https://www.broadinstitute.org/news/clinical-trial-prion-disease-drug-candidate-begins-enrolling-participants
public_site_impact: review-required
related:
  - F-003
  - F-004
  - Q-001
---

# PRiSM network map

Verified approximately 2026-08-24 15:54 to 16:05 BRT (UTC-03:00).

## Finding

PRiSM is sponsored by the Broad Institute and is also a NeuroNEXT project with
identifier NN112. NINDS is a registry collaborator and, according to Broad,
funds the trial through NeuroNEXT. The network has coordinating centers and five
listed clinical sites.

## Evidence map

```text
NINDS / NIH
  | collaborator in registry; funder through NeuroNEXT per Broad
  v
Broad Institute of MIT and Harvard
  | lead sponsor and responsible party
  v
PRiSM / NCT07444580 / NN112
  | listed NeuroNEXT project
  +-- NeuroNEXT Clinical Coordinating Center
  |     +-- Massachusetts General Hospital / NCRI
  +-- NeuroNEXT Data Coordinating Center
  |     +-- University of Iowa
  +-- Massachusetts General Hospital study site
  +-- Mayo Clinic study site
  +-- Columbia University Medical Center study site
  +-- University Hospitals Cleveland Medical Center study site
  +-- Vanderbilt University Medical Center study site
```

## Edge classification

| Edge | Classification | Source basis |
| --- | --- | --- |
| Broad Institute -> PRiSM | confirmed | ClinicalTrials.gov lead sponsor |
| PRiSM -> NN112 | confirmed | Registry protocol ID and NeuroNEXT project title |
| NINDS -> PRiSM | confirmed | Registry collaborator and Broad funding statement |
| NeuroNEXT -> PRiSM | confirmed | NeuroNEXT project page |
| NeuroNEXT -> MGH/NCRI CCC | confirmed | NeuroNEXT CCC page |
| NeuroNEXT -> University of Iowa DCC | confirmed | NeuroNEXT network page |
| PRiSM -> five study sites | confirmed | Registry and NeuroNEXT project page |
| Site -> current immediate capacity | unknown | No capacity source located |
| Sponsor/network -> cross-site referral duty | unknown | No policy or commitment located |

## Conflicting evidence

No material conflict was found in the named institutional relationships. The
registry uses `University Hospitals Cleveland Medical Center`, while NeuroNEXT
uses `University Hospitals/Case Western Reserve`. The sources appear to describe
the same Cleveland clinical site but use different institutional labels.

## Interpretation limits

Funding, network membership, coordination and clinical-site participation are
different roles. The graph does not establish control of one institution by
another, and it does not establish an obligation to route candidates.

## Open questions

- Which study-specific tasks for NN112 are performed by the CCC and DCC beyond
  the network-wide role descriptions?
- Is there a documented cross-site referral process for NN112?
- Which entity can give an authoritative current answer about cohort and site
  capacity?

## Potential public-site impact

If a public institutional description is added later, describe PRiSM as a
Broad-sponsored NeuroNEXT project rather than reducing the structure to a
generic "Harvard study" label.
