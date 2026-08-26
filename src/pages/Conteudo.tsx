import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

const articles = [
  {
    category: "Conflitos entre Sócios",
    title: "Como prevenir conflitos societários antes que comprometam o negócio",
    excerpt:
      "Estratégias práticas de governança e acordos de sócios que evitam disputas e protegem a continuidade empresarial.",
    date: "12 Mar 2025",
    slug: "#",
  },
  {
    category: "Contratos Empresariais",
    title: "Os erros mais comuns em contratos de parceria comercial",
    excerpt:
      "Análise das cláusulas frequentemente negligenciadas que podem gerar prejuízos significativos.",
    date: "28 Fev 2025",
    slug: "#",
  },
  {
    category: "Planejamento Sucessório",
    title: "Sucessão em empresas familiares: quando começar a planejar",
    excerpt:
      "O momento ideal para estruturar a transição geracional e os instrumentos jurídicos mais adequados.",
    date: "15 Fev 2025",
    slug: "#",
  },
  {
    category: "Governança Empresarial",
    title: "Governança para PMEs: por que sua empresa precisa de um acordo de sócios",
    excerpt:
      "Como um acordo de sócios bem estruturado pode proteger sua empresa e facilitar decisões estratégicas.",
    date: "01 Fev 2025",
    slug: "#",
  },
  {
    category: "Investimentos Imobiliários",
    title: "Short stay e condomínios: os riscos jurídicos que investidores ignoram",
    excerpt:
      "Análise dos principais desafios regulatórios e condominiais nas operações de locação por temporada.",
    date: "18 Jan 2025",
    slug: "#",
  },
  {
    category: "Contratos Empresariais",
    title: "Cláusulas essenciais em contratos de joint venture",
    excerpt:
      "Os pontos críticos que todo empresário deve negociar antes de formalizar uma joint venture.",
    date: "05 Jan 2025",
    slug: "#",
  },
];

const categories = [
  "Todos",
  "Conflitos entre Sócios",
  "Contratos Empresariais",
  "Planejamento Sucessório",
  "Governança Empresarial",
  "Investimentos Imobiliários",
];

const Conteudo = () => {
  return (
    <PageLayout>
      <SEO
        title="Conteúdo"
        description="Artigos e análises jurídicas sobre Direito Empresarial, Societário, Conflitos entre Sócios, Sucessões e Investimentos Imobiliários."
        canonical="/conteudo"
      />
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-4">
            Conteúdo
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance leading-tight">
            Artigos e análises jurídicas para decisões empresariais.
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed text-pretty">
            Publicações com foco em estratégia, prevenção e governança para empresários e
            investidores.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-xs tracking-wide px-3 py-1.5 rounded-sm border transition-colors duration-300 font-body ${
                  i === 0
                    ? "border-primary/30 text-primary bg-primary/10"
                    : "border-primary/10 text-muted-foreground hover:border-primary/20 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="grid gap-6">
            {articles.map((article, i) => (
              <article
                key={i}
                className="group card-shadow rounded-lg bg-card p-6 md:p-8 transition-all duration-300 hover:card-shadow-hover hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary text-xs tracking-wide uppercase font-semibold">
                    {article.category}
                  </span>
                  <span className="text-muted-foreground text-xs" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-muted-foreground text-xs">{article.date}</span>
                </div>
                <h2 className="font-heading text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mt-2 leading-relaxed text-pretty">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-xs mt-4 tracking-wide uppercase font-semibold">
                  Ler Artigo <ArrowRight size={12} strokeWidth={1} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Tem dúvidas sobre a situação jurídica da sua empresa?"
        buttonText="Consultar Especialista"
      />
    </PageLayout>
  );
};

export default Conteudo;
