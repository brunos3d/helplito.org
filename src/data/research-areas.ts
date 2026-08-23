import type { ResearchArea } from "./types";

/**
 * Research directions highlighted on the site.
 * `plain` is for general visitors. `technical` is revealed on demand for professionals.
 */
export const researchAreas: ResearchArea[] = [
  {
    id: "prp-lowering",
    title: {
      en: "Lowering the normal prion protein",
      "pt-br": "Reduzir a proteína priônica normal",
    },
    plain: {
      en: "The disease process depends on the body's own prion protein (PrP). Several strategies ask a simple question: if there is less normal PrP available, can the disease slow down?",
      "pt-br":
        "O processo da doença depende da própria proteína priônica do organismo (PrP). Várias estratégias fazem uma pergunta simples: se houver menos PrP normal disponível, a doença pode desacelerar?",
    },
    technical: {
      en: "PrP is encoded by PRNP. Genetic evidence in animals shows that reducing PrP expression extends survival after prion infection, and heterozygous loss-of-function variants in humans appear tolerated. PrP-lowering is being pursued with RNA-targeting modalities delivered to the CNS.",
      "pt-br":
        "A PrP é codificada pelo gene PRNP. Evidências genéticas em animais mostram que reduzir a expressão de PrP prolonga a sobrevida após infecção priônica, e variantes heterozigotas de perda de função em humanos parecem ser toleradas. A redução de PrP vem sendo investigada com modalidades direcionadas a RNA, entregues ao sistema nervoso central.",
    },
  },
  {
    id: "sirna",
    title: {
      en: "siRNA",
      "pt-br": "siRNA",
    },
    plain: {
      en: "Small interfering RNA is a type of molecule that tells cells to make less of a specific protein. A PrP-targeting siRNA is now in a first-in-human safety study.",
      "pt-br":
        "O RNA de interferência pequeno é um tipo de molécula que instrui as células a produzir menos de uma proteína específica. Um siRNA direcionado à PrP está agora em um primeiro estudo de segurança em humanos.",
    },
    technical: {
      en: "Chemically modified, divalent siRNA designs have been developed for durable PrP knockdown in the CNS after intrathecal administration. The PRiSM study (NCT07444580) evaluates safety, tolerability, PK and PD in symptomatic adults.",
      "pt-br":
        "Designs de siRNA divalente, quimicamente modificado, foram desenvolvidos para redução duradoura de PrP no SNC após administração intratecal. O estudo PRiSM (NCT07444580) avalia segurança, tolerabilidade, PK e PD em adultos sintomáticos.",
    },
  },
  {
    id: "aso",
    title: {
      en: "Antisense oligonucleotides",
      "pt-br": "Oligonucleotídeos antisense",
    },
    plain: {
      en: "Antisense oligonucleotides (ASOs) are another way to reduce production of a protein. They have been studied for prion disease in laboratory models and in early clinical work.",
      "pt-br":
        "Oligonucleotídeos antisense (ASOs) são outra forma de reduzir a produção de uma proteína. Já foram estudados para doença priônica em modelos de laboratório e em trabalhos clínicos iniciais.",
    },
    technical: {
      en: "PRNP-targeting ASOs extend survival in prion-infected mice, including when dosed after symptom onset. Human evaluation has been limited. Consult current literature and registries for the state of clinical development.",
      "pt-br":
        "ASOs direcionados a PRNP prolongam a sobrevida em camundongos infectados por príons, inclusive quando administrados após o início dos sintomas. A avaliação em humanos tem sido limitada. Consulte a literatura atual e os registros para o estado do desenvolvimento clínico.",
    },
  },
  {
    id: "biomarkers",
    title: {
      en: "Biomarkers and diagnosis",
      "pt-br": "Biomarcadores e diagnóstico",
    },
    plain: {
      en: "Tests that detect the disease earlier and track how it changes over time. Better markers help doctors diagnose sooner and help trials measure whether a treatment is doing anything.",
      "pt-br":
        "Exames que detectam a doença mais cedo e acompanham sua evolução. Marcadores melhores ajudam os médicos a diagnosticar antes e ajudam os estudos a medir se um tratamento está fazendo efeito.",
    },
    technical: {
      en: "RT-QuIC on CSF and other samples, total tau, neurofilament light chain, 14-3-3 and MRI (DWI/FLAIR patterns) support diagnosis. CSF PrP concentration is used as a target-engagement marker for PrP-lowering approaches.",
      "pt-br":
        "RT-QuIC em líquor e outras amostras, tau total, cadeia leve de neurofilamento, 14-3-3 e RM (padrões em DWI/FLAIR) apoiam o diagnóstico. A concentração de PrP no líquor é usada como marcador de engajamento de alvo para abordagens de redução de PrP.",
    },
  },
  {
    id: "progression",
    title: {
      en: "Monitoring progression",
      "pt-br": "Monitorar a progressão",
    },
    plain: {
      en: "Because CJD moves fast, research teams work on ways to measure decline precisely. This matters for patients, for families planning care, and for evaluating any experimental intervention.",
      "pt-br":
        "Como a DCJ avança rápido, equipes de pesquisa trabalham em formas de medir o declínio com precisão. Isso importa para pacientes, para famílias que planejam cuidados e para avaliar qualquer intervenção experimental.",
    },
    technical: {
      en: "Clinical scales, serial fluid biomarkers and imaging are used to quantify progression. Natural history data in sporadic CJD is essential context for interpreting single-arm or small early-phase studies.",
      "pt-br":
        "Escalas clínicas, biomarcadores seriados em fluidos e imagem são usados para quantificar a progressão. Dados de história natural em DCJ esporádica são contexto essencial para interpretar estudos de braço único ou de fase inicial com poucos participantes.",
    },
  },
];
