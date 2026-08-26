import { useState } from "react";
import { Link } from "react-router-dom";
import { ARTIGOS, CATEGORIAS, formatDate } from "@/lib/artigos";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

const categories = ["Todos", ...CATEGORIAS] as const;

const Conteudo = () => {
  const [active, setActive] = useState<string>("Todos");
  const articles = active === "Todos" ? ARTIGOS : ARTIGOS.filter((a) => a.category === active);
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
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`text-xs tracking-wide px-3 py-1.5 rounded-sm border transition-colors duration-300 font-body ${
                  active === cat
                    ? "border-primary/30 text-primary bg-primary/10"
                    : "border-primary/10 text-muted-foreground hover:border-primary/20 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles */}
          {articles.length === 0 && (
            <p className="text-muted-foreground text-center py-12">
              Em breve, novos artigos nesta categoria.
            </p>
          )}
          <div className="grid gap-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group relative card-shadow rounded-lg bg-card p-6 md:p-8 transition-all duration-300 hover:card-shadow-hover hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary text-xs tracking-wide uppercase font-semibold">
                    {article.category}
                  </span>
                  <span className="text-muted-foreground text-xs" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-muted-foreground text-xs">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </span>
                </div>
                <h2 className="font-heading text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  <Link
                    to={`/conteudo/${article.slug}`}
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mt-2 leading-relaxed text-pretty">
                  {article.description}
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
