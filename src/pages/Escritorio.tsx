import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import escritorioImg1 from "@/assets/quem-somos-1.png";
import escritorioImg2 from "@/assets/quem-somos-2.png";
import escritorioHero from "@/assets/escritorio.jpg";
import socioFrederico from "@/assets/socio-frederico.jpg";
import socioCarlos from "@/assets/socio-carlos.jpg";

const Escritorio = () => {
  return (
    <PageLayout>
      <SEO
        title="Escritório de Advocacia Empresarial em SP desde 1973"
        description="Conheça a história, os sócios e os princípios da Carmelo Nunes Sociedade de Advogados. Tradição em Direito Empresarial e Societário desde 1973, na Av. Paulista."
        canonical="/escritorio"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: "https://carmelonunes.com.br/escritorio",
            name: "O Escritório — Carmelo Nunes Sociedade de Advogados",
          },
          {
            "@context": "https://schema.org",
            "@type": "Attorney",
            name: "Frederico Augusto Cavalheiro e Carmelo Nunes",
            jobTitle: "Sócio · Mestre em Direito Comercial pela PUC-SP",
            worksFor: { "@type": "LegalService", name: "Carmelo Nunes Sociedade de Advogados" },
            knowsAbout: ["Direito Empresarial", "Direito Societário", "Governança Corporativa"],
          },
          {
            "@context": "https://schema.org",
            "@type": "Attorney",
            name: "Carlos Carmelo Nunes",
            jobTitle: "Sócio fundador",
            worksFor: { "@type": "LegalService", name: "Carmelo Nunes Sociedade de Advogados" },
            knowsAbout: ["Direito Civil", "Direito de Família", "Sucessões"],
          },
        ]}
      />
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={escritorioHero}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
          <p className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-4">
            O Escritório
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance leading-tight">
            Desde 1973, a advocacia que entende o seu negócio.
          </h1>
        </div>
      </section>

      {/* História */}
      <Section>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-foreground/80 leading-relaxed text-pretty">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-6">
              Uma trajetória construída sobre confiança
            </h2>
            <p>
              Fundado em 1973 por Carlos Carmelo Nunes na Av. Brigadeiro Luís Antônio, o escritório
              nasceu com uma vocação clara: oferecer assessoria jurídica de excelência para empresas
              e famílias empresárias, com a proximidade e dedicação de um atendimento personalizado.
            </p>
            <p>
              Ao longo de cinco décadas, consolidamos nossa atuação na Av. Paulista, coração
              financeiro de São Paulo, ampliando as áreas de prática sem jamais abrir mão do
              atendimento personalizado e da atuação direta dos sócios.
            </p>
            <p>
              Nossos pilares sempre foram — e continuam sendo — profissionalismo, confiança e
              competência técnica. São valores que nos permitiram construir relacionamentos
              duradouros e assessorar gerações de empresários.
            </p>
          </div>
          <div>
            <img
              src={escritorioImg1}
              alt="Escritório Carmelo Nunes - ambiente corporativo"
              className="rounded-lg object-cover w-full shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Posicionamento */}
      <Section className="bg-secondary/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={escritorioImg2}
              alt="Escritório Carmelo Nunes - equipe e estrutura"
              className="rounded-lg object-cover w-full shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-6">
              Atendimento direto dos sócios
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-pretty">
              <p>
                Diferente de grandes bancas, onde os clientes frequentemente são atendidos por
                advogados juniores, no Carmelo Nunes cada caso é conduzido pessoalmente pelos sócios
                fundadores. Isso garante que a experiência acumulada ao longo de décadas esteja
                presente em cada decisão estratégica.
              </p>
              <p>
                Nossa estrutura enxuta é uma escolha deliberada: priorizamos profundidade ao invés
                de volume, relacionamento ao invés de escala. Essa abordagem nos permite compreender
                a fundo as particularidades de cada negócio e oferecer soluções verdadeiramente sob
                medida.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Valores */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-8">
            Nossos princípios
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Profissionalismo",
                desc: "Rigor técnico em cada parecer, contrato e estratégia.",
              },
              {
                title: "Confiança",
                desc: "Relações construídas com transparência e ética ao longo de décadas.",
              },
              {
                title: "Competência",
                desc: "Atualização constante e domínio profundo das áreas de atuação.",
              },
              { title: "Proximidade", desc: "Atendimento direto dos sócios, sem intermediários." },
            ].map((v) => (
              <div key={v.title} className="card-shadow rounded-lg bg-card p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sócios */}
      <Section className="bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight text-center mb-12">
            Sócios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-shadow rounded-lg bg-card overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={socioFrederico}
                  alt="Retrato de Frederico Augusto Cavalheiro e Carmelo Nunes"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Frederico Augusto Cavalheiro e Carmelo Nunes
                </h3>
                <p className="text-primary text-sm mt-1">Mestre em Direito Comercial pela PUC-SP</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed text-pretty">
                  Especialista em Direito Empresarial e Societário, com sólida formação acadêmica e
                  vasta experiência na assessoria a empresas em operações complexas, governança
                  corporativa e resolução de conflitos societários.
                </p>
              </div>
            </div>
            <div className="card-shadow rounded-lg bg-card overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={socioCarlos}
                  alt="Retrato de Carlos Carmelo Nunes"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Carlos Carmelo Nunes
                </h3>
                <p className="text-primary text-sm mt-1">Fundador do escritório</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed text-pretty">
                  Com mais de cinco décadas de experiência, é referência em Direito Civil, Família e
                  Sucessões. Sua atuação se destaca na proteção do patrimônio empresarial e no
                  planejamento sucessório de famílias empresárias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Conheça nosso escritório e converse com os sócios."
        buttonText="Entrar em Contato"
      />
    </PageLayout>
  );
};

export default Escritorio;
