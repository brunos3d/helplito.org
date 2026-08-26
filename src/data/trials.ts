import type { ClinicalTrial } from "./types";

/**
 * Clinical trials referenced on the site.
 *
 * Recruitment status changes. Nothing here is a permanent fact.
 * Update `lastVerified` whenever a human checks the registry record.
 * The UI always links to the official registry and shows the verification date.
 */
export const trials: ClinicalTrial[] = [
  {
    id: "prism",
    acronym: "PRiSM",
    registryId: "NCT07444580",
    registryUrl: "https://clinicaltrials.gov/study/NCT07444580",
    title: {
      en: "PrP-targeting siRNA Safety & Mechanism Study",
      "pt-br": "Estudo de Segurança e Mecanismo de um siRNA direcionado à PrP",
    },
    sponsor: "Broad Institute of MIT and Harvard",
    phase: "Phase 1",
    summary: {
      en: "First-in-human Phase 1 study evaluating the safety, tolerability, pharmacokinetics and pharmacodynamic effects of a PrP-targeting siRNA in adults with symptomatic prion disease.",
      "pt-br":
        "Estudo de fase 1, o primeiro em humanos, que avalia segurança, tolerabilidade, farmacocinética e efeitos farmacodinâmicos de um siRNA direcionado à PrP em adultos com doença priônica sintomática.",
    },
    plannedParticipants: 30,
    locations: [
      "Massachusetts General Hospital",
      "Mayo Clinic",
      "Columbia University Medical Center",
      "University Hospitals Cleveland Medical Center",
      "Vanderbilt University Medical Center",
    ],
    status: "recruiting",
    statusNote: {
      en: "ClinicalTrials.gov lists the study and all five sites as recruiting. That is registry status, not proof of real-time capacity in either arm.",
      "pt-br":
        "O ClinicalTrials.gov lista o estudo e os cinco centros como recrutando. Esse é o status do registro, não uma prova de capacidade em tempo real em qualquer dos braços.",
    },
    sponsorOperationalNote: {
      en: "Broad publicly confirms that it is in contact with Lito's team and helping evaluate available options. Broad says it does not know whether it can help, but will try. This is active evaluation, not acceptance or an interventional slot.",
      "pt-br":
        "O Broad confirma publicamente que está em contato com a equipe do Lito e ajudando a avaliar as opções disponíveis. O instituto afirma que não sabe se poderá ajudar, mas tentará. Isso é avaliação ativa, não aceitação nem vaga no braço de intervenção.",
    },
    siteOperationalNote: {
      en: "The registry does not publish live capacity by site, arm or dose cohort. No PRiSM site is confirmed to be conducting an interventional-arm eligibility review for Lito.",
      "pt-br":
        "O registro não publica capacidade em tempo real por centro, braço ou coorte de dose. Nenhum centro do PRiSM está confirmado como responsável por uma avaliação de elegibilidade do Lito para o braço de intervenção.",
    },
    caseStatus: {
      en: "Lito may be in a preliminary PRiSM-associated screening or triage process, but participation is not confirmed. The family reports that the concrete option discussed so far is observation/control without the experimental intervention. Broad has not confirmed that as the final or only outcome.",
      "pt-br":
        "O Lito pode estar em um processo preliminar de triagem associado ao PRiSM, mas a participação não está confirmada. A família relata que a opção concreta discutida até agora é observação/controle sem a intervenção experimental. O Broad não confirmou que esse seja o desfecho final ou único.",
    },
    expandedAccessNote: {
      en: "The registry reports no expanded access for this study.",
      "pt-br": "O registro informa que não há acesso expandido para este estudo.",
    },
    regulatoryNote: {
      en: "PRiSM has trial-level regulatory authorization. Reporting that screening remains subject to FDA does not establish that FDA personally approves ordinary enrollment for each participant; that precise claim still needs primary-source verification.",
      "pt-br":
        "O PRiSM tem autorização regulatória no nível do estudo. Reportagens dizendo que a triagem permanece sujeita à FDA não comprovam que a agência aprove pessoalmente a entrada comum de cada participante; essa afirmação precisa de fonte primária.",
    },
    lastVerified: "2026-08-25",
  },
  {
    id: "ion717-prprofile",
    acronym: "PrProfile / ION717",
    registryId: "NCT06153966",
    registryUrl: "https://clinicaltrials.gov/study/NCT06153966",
    title: {
      en: "ION717 Phase 1/2a study in prion disease",
      "pt-br": "Estudo de fase 1/2a do ION717 em doença priônica",
    },
    sponsor: "Ionis Pharmaceuticals, Inc.",
    phase: "Phase 1/2a",
    summary: {
      en: "First-in-human study evaluating an investigational antisense oligonucleotide designed to reduce production of prion protein. No efficacy is established.",
      "pt-br":
        "Estudo pioneiro em humanos que avalia um oligonucleotídeo antisense experimental projetado para reduzir a produção de proteína priônica. Não há eficácia estabelecida.",
    },
    locations: [],
    status: "active-not-recruiting",
    statusNote: {
      en: "The current registry lists Active, not recruiting and no expanded access. Its detailed description still contains conflicting recruitment language, so official metadata and operational availability must be read separately.",
      "pt-br":
        "O registro atual indica ativo, sem recrutamento e sem acesso expandido. A descrição detalhada ainda contém linguagem conflitante sobre recrutamento; por isso, os metadados oficiais e a disponibilidade operacional devem ser lidos separadamente.",
    },
    sponsorOperationalNote: {
      en: "Ionis has stated publicly that the ION717 study is no longer recruiting new participants. This operational answer is separate from the registry metadata conflict.",
      "pt-br":
        "A Ionis declarou publicamente que o estudo do ION717 não está mais recrutando novos participantes. Essa resposta operacional é separada do conflito nos metadados do registro.",
    },
    siteOperationalNote: {
      en: "No site is confirmed to be accepting new sponsor-authorized referrals or screening participants for ION717.",
      "pt-br":
        "Nenhum centro está confirmado como aceitando novos encaminhamentos autorizados pelo patrocinador ou fazendo triagem para o ION717.",
    },
    caseStatus: {
      en: "The family reports that Ionis declined access for Lito. No current ION717 access path has been identified. This is closed for active outreach and should be monitored only for a material sponsor, cohort, registry, EAP or site change.",
      "pt-br":
        "A família relata que a Ionis negou o acesso ao Lito. Nenhum caminho atual pelo ION717 foi identificado. A busca ativa está encerrada e deve ser reaberta apenas diante de uma mudança material do patrocinador, coorte, registro, programa de acesso expandido ou centro.",
    },
    expandedAccessNote: {
      en: "Ionis says ION717 is not currently available through its expanded-access programs. Its general policy lists no ION717 EAP; that policy is not evidence that compassionate use is available.",
      "pt-br":
        "A Ionis afirma que o ION717 não está disponível atualmente por seus programas de acesso expandido. Sua política geral não lista um programa para o ION717 e não comprova que o uso compassivo esteja disponível.",
    },
    regulatoryNote: {
      en: "Expanded access would involve a separate regulatory process, but FDA paperwork is not the current primary blocker: Ionis is not making ION717 available through expanded access.",
      "pt-br":
        "O acesso expandido envolveria um processo regulatório separado, mas a documentação perante a FDA não é o bloqueio principal atual: a Ionis não disponibiliza o ION717 por acesso expandido.",
    },
    lastVerified: "2026-08-25",
  },
];
