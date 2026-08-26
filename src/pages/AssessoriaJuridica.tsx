import AreaPage from "@/components/AreaPage";
import Section from "@/components/Section";

const AssessoriaJuridica = () => {
  return (
    <AreaPage
      title="Assessoria Empresarial Contínua"
      seoTitle="Assessoria Jurídica Empresarial Contínua"
      seoDescription="Assessoria jurídica recorrente e estratégica para empresas. Suporte permanente em contratos, governança e gestão de riscos. Escritório em São Paulo desde 1973."
      canonical="/atuacao/assessoria-juridica-empresarial"
      subtitle="Empresas enfrentam diariamente decisões que possuem impacto jurídico relevante: celebração de contratos, organização das relações entre sócios, estruturação de operações comerciais, gestão de conflitos e definição de estratégias empresariais."
      intro="A assessoria jurídica empresarial contínua permite que essas decisões sejam tomadas com acompanhamento jurídico permanente, oferecendo maior segurança na condução das atividades empresariais e reduzindo riscos decorrentes da ausência de análise jurídica prévia. A Carmelo Nunes Sociedade de Advogados presta assessoria jurídica recorrente a empresas que necessitam de suporte estratégico em suas operações, atuando de forma preventiva na organização das relações empresariais e na identificação antecipada de potenciais riscos jurídicos."
      services={[
        {
          title: "Suporte jurídico estratégico para a empresa",
          description:
            "Acompanhamento permanente das questões jurídicas do dia a dia empresarial, incluindo análise e revisão de contratos, orientação em decisões estratégicas, organização das relações entre sócios, estruturação de parcerias comerciais e prevenção e gestão de conflitos empresariais.",
        },
        {
          title: "Atuação preventiva e gestão de riscos jurídicos",
          description:
            "Identificação de potenciais riscos jurídicos antes que se transformem em conflitos ou litígios. Redução de disputas judiciais, organização das relações contratuais, estruturação jurídica de operações relevantes e proteção do patrimônio empresarial.",
        },
        {
          title: "Organização das relações empresariais",
          description:
            "Estruturação adequada de contratos estratégicos, relações entre sócios e administradores, regras de governança empresarial e parcerias comerciais e operacionais — fortalecendo a estabilidade das operações.",
        },
        {
          title: "Apoio jurídico nas decisões empresariais",
          description:
            "Análise prévia sob perspectiva jurídica de decisões rápidas que envolvem riscos relevantes, contribuindo para maior segurança na condução dos negócios.",
        },
      ]}
      benefits={[
        "Ideal para pequenas e médias empresas em crescimento",
        "Empresas familiares e sociedades com mais de um sócio",
        "Empresas com operações contratuais recorrentes",
        "Empresários que buscam orientação jurídica estratégica",
        "Atuação conduzida diretamente pelos sócios do escritório",
      ]}
      faqs={[
        {
          question: "O que está incluído em um contrato de assessoria jurídica empresarial?",
          answer:
            "Tipicamente: análise e revisão de contratos do dia a dia, pareceres consultivos, orientação em decisões societárias e comerciais, acompanhamento de governança, suporte em negociações e prevenção de conflitos. O escopo é definido sob medida com cada cliente, com volume estimado de demandas e SLAs de resposta.",
        },
        {
          question: "Qual o porte ideal de empresa para contratar assessoria contínua?",
          answer:
            "Pequenas e médias empresas em crescimento, holdings familiares e sociedades com mais de um sócio costumam ser as que mais se beneficiam — pelo volume de decisões com impacto jurídico e pela ausência de departamento jurídico interno. Também atendemos empresas com jurídico interno que buscam segunda opinião sênior em temas estratégicos.",
        },
        {
          question: "Como é a cobrança da assessoria jurídica recorrente?",
          answer:
            "Trabalhamos com fee mensal calculado a partir do escopo acordado e do volume estimado de demandas. Demandas extraordinárias — como litígios, M&A ou reorganizações societárias — são tratadas em projetos apartados, com proposta específica.",
        },
        {
          question: "Em quanto tempo recebo retorno em uma demanda urgente?",
          answer:
            "O contrato define SLAs por tipo de demanda. De forma geral, demandas urgentes recebem retorno em até 24 horas úteis e análises de contratos padrão em até 3 dias úteis. Casos críticos contam com canal direto com o sócio responsável.",
        },
      ]}
    >
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-6">
            Converse com o Escritório
          </h2>
          <p className="text-foreground/80 leading-relaxed text-pretty">
            Caso deseje compreender como a assessoria jurídica contínua pode contribuir para a
            organização jurídica da sua empresa, entre em contato com o escritório. A análise
            inicial permite identificar as principais necessidades jurídicas do negócio e avaliar a
            melhor forma de acompanhamento jurídico.
          </p>
        </div>
      </Section>
    </AreaPage>
  );
};

export default AssessoriaJuridica;
