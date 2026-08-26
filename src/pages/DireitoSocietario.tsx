import AreaPage from "@/components/AreaPage";

const DireitoSocietario = () => {
  return (
    <AreaPage
      title="Direito Societário e Conflitos entre Sócios"
      seoTitle="Direito Societário e Conflitos entre Sócios"
      seoDescription="Mediação, acordos de sócios, governança corporativa e resolução de conflitos societários. Escritório em São Paulo desde 1973."
      canonical="/atuacao/direito-societario-conflitos-socios"
      subtitle="Mediação, blindagem jurídica e resolução de conflitos para preservar a continuidade do negócio e a harmonia do patrimônio."
      intro="Conflitos societários podem paralisar empresas e destruir patrimônio construído ao longo de décadas. Nossa atuação combina técnica jurídica rigorosa com sensibilidade negocial, buscando sempre soluções que preservem a continuidade da empresa e os relacionamentos comerciais."
      services={[
        {
          title: "Estruturação societária e reorganizações",
          description:
            "Definição de modelos societários, participações, grupos empresariais e reorganizações que atendam aos objetivos estratégicos de cada negócio.",
        },
        {
          title: "Acordos de sócios e governança",
          description:
            "Elaboração de acordos de sócios que previnem conflitos, regulam tomada de decisão e estabelecem mecanismos claros de saída e entrada de participantes.",
        },
        {
          title: "Resolução de conflitos societários",
          description:
            "Mediação, negociação e condução de disputas judiciais ou arbitrais. Exclusão de sócio, dissolução parcial e apuração de haveres.",
        },
        {
          title: "Prevenção de conflitos",
          description:
            "Diagnóstico preventivo da estrutura societária para identificar e eliminar vulnerabilidades antes que se transformem em litígios.",
        },
      ]}
      benefits={[
        "Experiência consolidada em disputas societárias complexas",
        "Forte ênfase em preservação da continuidade empresarial",
        "Mediação e negociação como primeira linha de atuação",
        "Atuação em arbitragem e foros especializados",
      ]}
      faqs={[
        {
          question: "O que fazer em caso de conflito entre sócios?",
          answer:
            "O primeiro passo é mapear juridicamente a situação societária — contrato social, acordo de sócios, histórico de deliberações e fluxo financeiro. A partir desse diagnóstico, avaliamos caminhos de mediação, renegociação do acordo, exclusão de sócio, dissolução parcial ou apuração de haveres. Sempre que possível, priorizamos soluções negociadas para preservar a continuidade do negócio.",
        },
        {
          question: "O que é um acordo de sócios e por que minha empresa precisa de um?",
          answer:
            "É o instrumento que regula direitos e deveres dos sócios além do contrato social: tomada de decisão, política de distribuição de lucros, regras de saída e entrada, direito de preferência, tag along, drag along, não concorrência e mecanismos de resolução de impasse. Empresas sem acordo de sócios ficam expostas a impasses que podem paralisar a operação.",
        },
        {
          question: "Como funciona a apuração de haveres na saída de um sócio?",
          answer:
            "É o procedimento que define o valor a ser pago ao sócio que se retira. Pode seguir critérios definidos no contrato social ou no acordo de sócios e, na ausência destes, regras legais. Envolve avaliação patrimonial, análise de fluxo de caixa, intangíveis e passivos. Atuamos tanto na negociação extrajudicial quanto em ações judiciais ou arbitrais.",
        },
        {
          question: "Litígio judicial ou arbitragem para conflitos societários?",
          answer:
            "A arbitragem costuma ser preferível em conflitos societários complexos por garantir confidencialidade, especialização do julgador e celeridade. A escolha depende da existência de cláusula arbitral, do valor da disputa e do perfil das partes. Avaliamos o caminho mais eficiente caso a caso.",
        },
      ]}
    />
  );
};

export default DireitoSocietario;
