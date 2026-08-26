import AreaPage from "@/components/AreaPage";

const PlanejamentoSucessorio = () => {
  return (
    <AreaPage
      title="Direito de Família e Sucessões"
      seoTitle="Planejamento Sucessório para Empresários"
      seoDescription="Planejamento sucessório de empresas familiares, holdings patrimoniais e organização patrimonial familiar. Escritório em São Paulo desde 1973."
      canonical="/atuacao/planejamento-sucessorio-empresarios"
      subtitle="Planejamento sucessório focado em não interromper a operação da empresa e proteger o patrimônio familiar-empresarial."
      intro="Quando família e empresa se entrelaçam, o planejamento sucessório ganha uma complexidade única. Nossa atuação integra Direito Societário e Direito Sucessório para garantir que a transição geracional ocorra sem rupturas — preservando tanto o patrimônio quanto a continuidade operacional do negócio."
      services={[
        {
          title: "Planejamento sucessório de empresas familiares",
          description:
            "Estruturação completa do plano de sucessão, contemplando aspectos societários, patrimoniais e familiares de forma integrada.",
        },
        {
          title: "Organização patrimonial familiar",
          description:
            "Holdings familiares, doações com reserva de usufruto e instrumentos de proteção patrimonial adaptados à realidade de cada família.",
        },
        {
          title: "Integração Societário-Sucessório",
          description:
            "Alinhamento entre acordos de sócios, testamentos e estruturas societárias para eliminar conflitos entre herdeiros e a operação empresarial.",
        },
        {
          title: "Prevenção de conflitos familiares",
          description:
            "Mediação e estruturação de governança familiar para preservar relacionamentos e evitar disputas que impactem o negócio.",
        },
      ]}
      benefits={[
        "Atuação do fundador com mais de cinco décadas de experiência em Direito de Família",
        "Visão integrada entre patrimônio pessoal e empresarial",
        "Foco em continuidade operacional durante a transição",
        "Experiência com múltiplos herdeiros e patrimônio concentrado na empresa",
      ]}
      faqs={[
        {
          question: "O que é planejamento sucessório empresarial?",
          answer:
            "É o conjunto de instrumentos jurídicos e societários que organiza a transmissão do patrimônio empresarial e da gestão da empresa para a próxima geração. Combina Direito Societário, Civil e Sucessório para reduzir custos tributários, evitar inventários longos, prevenir conflitos entre herdeiros e preservar a continuidade do negócio.",
        },
        {
          question: "Holding familiar vale a pena?",
          answer:
            "Para famílias com patrimônio relevante — empresarial e/ou imobiliário — a holding costuma trazer ganhos em governança, proteção patrimonial, eficiência tributária e organização sucessória. O modelo deve ser desenhado caso a caso: estrutura societária, regras de governança, acordo de sócios e instrumentos de doação com reserva de usufruto.",
        },
        {
          question: "Quando é o momento certo para começar a planejar a sucessão?",
          answer:
            "Antes de ser necessário. O planejamento sucessório é eficiente justamente quando feito com tempo, em saúde e com diálogo familiar — permitindo testar o modelo, ajustar a governança e preparar os sucessores. Esperar uma crise ou um evento de saúde reduz drasticamente as opções jurídicas disponíveis.",
        },
        {
          question: "Como evitar conflitos entre herdeiros em empresas familiares?",
          answer:
            "Combinando estrutura societária adequada, acordo de sócios, protocolo familiar, regras claras de entrada e saída de herdeiros na gestão e mecanismos de solução de impasse. Mais do que documentos, o processo envolve diálogo estruturado entre as gerações — frequentemente conduzido com apoio do escritório.",
        },
      ]}
    />
  );
};

export default PlanejamentoSucessorio;
