import AreaPage from "@/components/AreaPage";

const DireitoEmpresarial = () => {
  return (
    <AreaPage
      title="Direito Empresarial e Contratos"
      seoTitle="Direito Empresarial e Contratos"
      seoDescription="Elaboração, revisão e negociação de contratos empresariais complexos. Gestão preventiva de riscos contratuais. Escritório em São Paulo desde 1973."
      canonical="/atuacao/direito-empresarial-contratos"
      subtitle="Estruturação, revisão e negociação de contratos complexos para proteger e impulsionar seus negócios com segurança jurídica."
      intro="Contratos são a espinha dorsal de qualquer operação empresarial. No Carmelo Nunes, tratamos cada contrato como um instrumento de governança — uma ferramenta estratégica que antecipa riscos, define responsabilidades e protege os interesses do seu negócio. Nossa abordagem vai além da redação técnica: analisamos o contexto comercial, identificamos vulnerabilidades e desenhamos cláusulas que funcionam na prática."
      services={[
        {
          title: "Elaboração e revisão de contratos empresariais",
          description:
            "Contratos de prestação de serviços, fornecimento, distribuição, parceria comercial, NDA, representação comercial, joint venture e cooperação empresarial. Cada documento é elaborado sob medida para o seu negócio.",
        },
        {
          title: "Negociação e estruturação de operações comerciais",
          description:
            "Acompanhamos negociações complexas com visão jurídica estratégica, garantindo que os termos acordados estejam alinhados aos interesses de longo prazo da sua empresa.",
        },
        {
          title: "Gestão preventiva de riscos contratuais",
          description:
            "Análise periódica de contratos vigentes para identificar cláusulas desatualizadas, riscos ocultos e oportunidades de melhoria na sua carteira contratual.",
        },
        {
          title: "Contratos como instrumento de governança",
          description:
            "Utilizamos a estruturação contratual como ferramenta de governança empresarial, definindo processos, responsabilidades e mecanismos de resolução de conflitos.",
        },
      ]}
      benefits={[
        "Experiência em contratos de alta complexidade e múltiplas jurisdições",
        "Visão comercial integrada à análise jurídica",
        "Atuação direta dos sócios na negociação e revisão",
        "Abordagem preventiva que reduz litígios futuros",
      ]}
      faqs={[
        {
          question: "Quando contratar um advogado para revisar contratos empresariais?",
          answer:
            "Idealmente antes de qualquer assinatura relevante — fornecimento, distribuição, parceria, joint venture, NDA ou prestação de serviços B2B. A revisão prévia identifica cláusulas de risco, ambiguidades e omissões que costumam gerar litígio. Para empresas com volume contratual recorrente, recomendamos rotina de revisão periódica da carteira.",
        },
        {
          question: "Quais cláusulas são essenciais em um contrato empresarial?",
          answer:
            "Objeto bem delimitado, prazo, preço e reajuste, obrigações e níveis de serviço, propriedade intelectual, confidencialidade, limitação de responsabilidade, hipóteses de rescisão, multas, foro ou cláusula arbitral e mecanismos de solução de conflitos. As cláusulas variam conforme o tipo de operação e o poder de barganha das partes.",
        },
        {
          question: "Como o escritório atua em negociações contratuais complexas?",
          answer:
            "Acompanhamos a negociação desde a fase de term sheet até a assinatura, com visão jurídica e comercial integrada. Estruturamos a operação, redigimos minutas, conduzimos rodadas de redlines e participamos de reuniões com a contraparte quando necessário, sempre alinhados ao interesse de longo prazo do cliente.",
        },
        {
          question: "O escritório atende empresas de qualquer porte?",
          answer:
            "Atendemos preferencialmente médias empresas, holdings familiares e empresários com operações contratuais recorrentes ou de alta complexidade. A senioridade dos sócios é melhor aproveitada em contratos estratégicos, em vez de demandas pontuais de baixa complexidade.",
        },
      ]}
    />
  );
};

export default DireitoEmpresarial;
