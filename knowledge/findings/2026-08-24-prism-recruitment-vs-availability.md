---
type: finding
status: verified
observed_at: 2026-08-24T22:15:45-03:00
source_last_updated:
  clinicaltrials_gov: 2026-06-05
  neuronext_project: unknown
last_verified: 2026-08-24
confidence: high
sources:
  - https://clinicaltrials.gov/study/NCT07444580
  - https://neuronext.org/projects/nn112-prism/
public_site_impact: candidate
related:
  - F-002
  - F-016
  - Q-001
---

# PRiSM recruitment status versus immediate availability

Verified again on 2026-08-24 at approximately 22:15 BRT (UTC-03:00).

## Finding

ClinicalTrials.gov separately lists PRiSM overall and each of its five sites as
`Recruiting`. Those fields agree in the current snapshot, but global and
site-level recruitment are different claims. Neither guarantees an immediate
slot, screening appointment, open arm or dose at a specific site.

## Evidence

The registry exposes one overall status and one status for each location. It
also exposes a central contact and site contacts, but no real-time capacity
field. NeuroNEXT lists the project and sites but does not publish slot inventory
or a service-level commitment for referral handling.

```text
overall trial status: Recruiting
  != every arm or dose cohort is open
  != a specific site's real-time capacity

site status: Recruiting
  != a slot or screening appointment is immediately available
```

## Conflicting evidence

No primary-source conflict about the registry label was located in this round.
Reports about operational availability may describe a narrower and more current
scope than the registry, but they cannot replace the registry without direct
confirmation from an authorized trial source.

## Interpretation limits

`Recruiting` supports only the registry classification. It does not establish:

- that every arm is open at the same time;
- that a particular dose cohort is open;
- that a site can screen immediately;
- that a person meets the full criteria;
- that a person will be accepted.

## Open questions

- Does each site currently have screening capacity?
- Are Arm 1 and Arm 2 open at the same time? The registry says Arm 1 opens when
  Arm 2 is not open and Arm 2 is prioritized.
- Can the sponsor or network coordinate a referral when one site lacks capacity?

## Potential public-site impact

Keep a visible last-verified date and link to the registry. If the public site
uses `Recruiting`, pair it with a short statement that registry recruitment is
not a guarantee of immediate site availability, eligibility or acceptance.
