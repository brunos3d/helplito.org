---
type: finding
status: partially-verified
observed_at: 2026-08-24T22:15:45-03:00
source_last_updated:
  prism_registry: 2026-06-05
  ion717_registry: 2026-08-19
  ionis_neurology_reference: 2026-03-05
  ionis_pipeline: 2026-06-24
  anvisa_forms: 2026-03-03
  lito_secondary_report: 2026-08-23
last_verified: 2026-08-24
confidence: high
sources:
  - https://clinicaltrials.gov/study/NCT07444580
  - https://clinicaltrials.gov/study/NCT06153966
  - https://neuronext.org/projects/nn112-prism/
  - https://www.broadinstitute.org/news/clinical-trial-prion-disease-drug-candidate-begins-enrolling-participants
  - https://neurology.ionis.com/our-pipeline
  - https://ionis.com/patients-and-advocacy/expanded-access-policy
  - https://euclinicaltrials.eu/ctis-public/view/2023-503355-98-00?lang=en
  - https://www1.folha.uol.com.br/equilibrioesaude/2026/08/tenho-duas-opcoes-velar-o-meu-marido-ou-lutar-por-ele-decidi-lutar-diz-mila-seidl-esposa-de-lito-sousa.shtml
public_site_impact: review-required
---

# Recon round 2

Verification window: 2026-08-24, approximately 22:15 to 22:45 BRT
(UTC-03:00).

## Executive summary

The most consequential lead was superseded during August. ION717 version 29,
posted August 5, was `Recruiting` with 76 estimated participants and nine
recruiting sites. Version 30, posted August 19, is `Active, not recruiting` with
85 actual participants and no site states or central contact. Its detailed
description still says listed sites actively recruit for open-label Regimen 3.
The disagreement is now internal to the current registry, with a separate NYU
page still marked `Open`.

PRiSM remains `Recruiting` overall and at all five listed sites. Broad's own
announcement explicitly resolves the 30-versus-15 enrollment question: 15
symptomatic participants are intended for the treated arm and 15 additional
participants for the observational arm. This does not establish individual
eligibility or immediate site capacity.

Ionis publishes a general expanded-access policy but currently lists only a
zilganersen program. No current ION717 EAP was found. FDA and ANVISA pathways
exist, but neither regulator can be treated as evidence that a manufacturer has
agreed to supply ION717.

A Folha report attributes to the family that Broad requested Lito's medical
records for evaluation. That is case-specific secondary evidence only; it does
not establish eligibility, enrollment, acceptance, treatment allocation or a
slot.

## Material changes

- ION717 changed after the August 5 snapshot to `Active, not recruiting` on
  August 19, with 85 actual participants.
- All ION717 site-level states and the central contact were removed in the
  current version.
- The current ION717 record retains open-label Regimen 3 and stale recruitment
  prose, creating an internal source conflict.
- The current Ionis neurology page now agrees with the overall registry label,
  so the proposed current corporate-page conflict is refuted; its older design
  figures remain stale.
- Broad explicitly states 15 treated plus 15 observational PRiSM participants,
  resolving the registry-total versus treated-cohort scope.
- Ionis's current EAP list contains zilganersen and not ION717.
- A secondary case-specific report says Broad requested Lito's medical records
  for evaluation.

## Confirmed findings

- **F-PRISM-001:** PRiSM's 30 estimated participants comprise a stated plan for
  15 treated and 15 observational participants.
- **F-PRISM-002:** PRiSM is NCT07444580 and NeuroNEXT NN112, with Broad as lead
  sponsor, NINDS as collaborator and funder through NeuroNEXT, and five listed
  recruiting sites.
- **F-ION-002:** ION717's current structured overall state is `Active, not
  recruiting`, with 85 actual participants.
- **F-ION-003:** Regimens 1 and 2 are described as fully enrolled and blinded;
  Regimen 3 is described as open-label and ION717-only.
- **F-ION-004:** Ionis has a corporate expanded-access policy, but no current
  ION717 EAP appears in its published list.
- **F-REG-US-001:** FDA has individual-patient emergency and non-emergency
  expanded-access pathways that depend on manufacturer cooperation.
- **F-REG-BR-001:** ANVISA publishes three assistance programs under RDC
  38/2013 and related forms; sponsor or ORP action is required.

## Partially verified findings

- **F-LITO-001:** Folha reports, based on the family's account, that Broad
  requested medical records for evaluation. No Broad or study-team confirmation
  was found in this round.
- **H-PRION-001:** “European Phase 3 without placebo” is likely a terminology
  confusion with Regimen 3 in a Phase 1/2a study with European sites, but the
  original statement's provenance is missing.

## Source conflicts

- **C-ION-001:** current ClinicalTrials.gov structured status says `Active, not
  recruiting`; its detailed prose says listed sites actively recruit for
  Regimen 3. Source timestamp for both fields: August 19, 2026.
- **C-ION-002:** ClinicalTrials.gov has no current NYU site state; NYU says
  `Open` and exposes no visible update date.
- **C-ION-003:** secondary reports attribute “not accepting new participants”
  to Ionis, but no current primary Ionis statement defining that scope was
  located.

## Refuted hypotheses

- **H-ION-001:** ION717 is currently `Recruiting` overall. That was true in
  version 29 and is refuted by version 30.
- **F-ION-001 as a current claim:** Ionis's neurology page and the current
  registry do not disagree on the overall label. They did disagree between
  August 5 and August 19.
- **H-PRION-002:** ION717 Regimen 3 is itself a Phase III trial. The official
  records classify ION717-CS2 as Phase 1/2a.

## Newly opened questions

- **Q-ION-001:** What operational scope is intended by “not accepting new
  participants” while current registry prose still says Regimen 3 sites recruit?
- **Q-ION-002:** Could Ionis change its current published position and create an
  ION717 EAP, and what primary evidence would show that change?
- **Q-PRISM-003:** Does the reported request for records advance only to
  pre-screening review, or has any formal study screening step begun?

## Questions resolved

- The PRiSM total-enrollment versus treated-cohort question is resolved by
  Broad's explicit 15-treated plus 15-observational statement.
- The current ION717 overall registry state is resolved as `Active, not
  recruiting` for the August 19 version. Regimen and local availability remain
  unresolved.

## Public-site candidates

- Refresh PRiSM's verification date and, if useful to readers, distinguish 30
  total participants from the 15-person treated arm using the Broad source.
- Preserve the warning that overall or site `Recruiting` does not guarantee an
  immediate slot, screening, eligibility or acceptance.
- If ION717 is later represented publicly, use `Active, not recruiting`, carry
  the August 19 source date and disclose the Regimen 3/NYU conflicts.
- Consider a separate public-data model proposal for optional site-level state
  plus verification date.

No public data change is implemented in this round.

## Intelligence-only findings

- The reported Broad request for Lito's records remains secondary and
  case-specific.
- The absence of ION717 from Ionis's EAP list is time-sensitive and should not
  be generalized into permanent impossibility.
- The secondary “not accepting” wording lacks a public primary Ionis definition.
- The public `16/20` score must not be identified as MRC-PDRS without evidence
  that it is the same instrument.

## Next verification targets

- A current primary Ionis statement on Regimen 3 referrals, screening and site
  availability.
- Reconciled ION717 registry prose, structured status and site fields.
- A dated update from NYU or another listed site.
- Official family and/or Broad confirmation of the reported records review and
  its exact stage.
- The original source and identifier behind “European Phase 3 without placebo.”
- Recheck the Ionis EAP list whenever access availability is discussed.
