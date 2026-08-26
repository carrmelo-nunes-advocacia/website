import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, FileText, Building, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import heroBg from "@/assets/escritorio.jpg";
import escritorioImg from "@/assets/quem-somos-1.png";
import socioFrederico from "@/assets/socio-frederico.jpg";
import socioCarlos from "@/assets/socio-carlos.jpg";

const situations = [
  "Conflitos entre sócios",
  "Reorganização societária",
  "Contratos empresariais complexos",
  "Sucessão em empresas familiares",
  "Estruturação de investimentos imobiliários",
];

const areas = [
  {
    title: "Direito Empresarial e Contratos",
    summary:
      "Estruturação, revisão e negociação de contratos complexos para proteger e impulsionar seus negócios.",
    href: "/atuacao/direito-empresarial-contratos",
    icon: FileText,
  },
  {
    title: "Direito Societário e Conflitos entre Sócios",
    summary:
      "Mediação e blindagem jurídica para preservar a continuidade do negócio e a harmonia do patrimônio.",
    href: "/atuacao/direito-societario-conflitos-socios",
    icon: Users,
  },
  {
    title: "Assessoria Jurídica Empresarial Contínua",
    summary: "Suporte jurídico recorrente e estratégico para empresas em crescimento.",
    href: "/atuacao/assessoria-juridica-empresarial",
    icon: Shield,
  },
  {
    title: "Direito de Família e Sucessões",
    summary:
      "Planejamento sucessório focado em não interromper a operação e proteger o patrimônio empresarial.",
    href: "/atuacao/planejamento-sucessorio-empresarios",
    icon: Scale,
  },
  {
    title: "Estruturação Jurídica para Investimentos Imobiliários",
    summary: "Estruturação jurídica para operações imobiliárias, short stay e gestão patrimonial.",
    href: "/atuacao/investimentos-imobiliarios",
    icon: Building,
  },
];

const diferenciais = [
  "Tradição desde 1973 com atuação ininterrupta no Direito Empresarial",
  "Atuação direta e pessoal dos sócios fundadores em cada caso",
  "Visão preventiva que antecipa riscos e evita litígios desnecessários",
  "Experiência consolidada em conflitos societários complexos",
  "Assessoria personalizada e sob medida para cada cliente",
];

const Index = () => {
  return (
    <PageLayout>
      <SEO
        title="Direito Empresarial e Societário em SP desde 1973"
        description="Carmelo Nunes Sociedade de Advogados: Direito Empresarial, Societário, Sucessões e Investimentos Imobiliários. Atendimento direto dos sócios na Av. Paulista, SP."
        canonical="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "@id": "https://carmelonunes.com.br/#legalservice",
            name: "Carmelo Nunes Sociedade de Advogados",
            url: "https://carmelonunes.com.br/",
            logo: "https://carmelonunes.com.br/logo-cn.png",
            image: "https://carmelonunes.com.br/og-default.jpg",
            foundingDate: "1973",
            telephone: "+55-11-3149-5050",
            email: "secretaria@carmelonunes.com.br",
            priceRange: "$$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. Paulista, 509 — 14º andar",
              addressLocality: "São Paulo",
              addressRegion: "SP",
              postalCode: "01310-000",
              addressCountry: "BR",
            },
            geo: { "@type": "GeoCoordinates", latitude: -23.5705, longitude: -46.6452 },
            areaServed: { "@type": "Country", name: "Brasil" },
            knowsAbout: [
              "Direito Empresarial",
              "Direito Societário",
              "Conflitos entre Sócios",
              "Planejamento Sucessório",
              "Holdings Familiares",
              "Investimentos Imobiliários",
              "Contratos Empresariais",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://carmelonunes.com.br/",
            name: "Carmelo Nunes Sociedade de Advogados",
            inLanguage: "pt-BR",
          },
        ]}
      />
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>

        {/* Gold line */}
        <div className="absolute left-8 lg:left-16 top-0 w-px h-32 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 hidden md:block" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-6 flex items-center gap-3"
            >
              <span className="w-6 h-px bg-primary/40" />
              Carmelo Nunes · Tradição desde 1973
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0, 0, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-foreground tracking-tight text-balance leading-[1.15]"
            >
              Direito Empresarial e Societário com tradição desde 1973.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.2, 0, 0, 1] }}
              className="text-foreground/70 mt-6 text-base md:text-lg leading-relaxed max-w-2xl text-pretty"
            >
              Assessoria jurídica estratégica para empresas, relações societárias e patrimônio
              empresarial. Com mais de cinco décadas de tradição, protegemos o patrimônio da sua
              empresa e transformamos a complexidade jurídica em rotas claras de crescimento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 flex items-center gap-2 text-primary text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Atuação técnica e direta dos sócios fundadores.
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {situations.map((s) => (
                <li
                  key={s}
                  className="text-xs text-foreground/80 border border-primary/20 rounded-sm px-3 py-1.5 font-body"
                >
                  {s}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10"
            >
              <Button variant="gold" size="xl" asChild>
                <Link to="/agendamento">Agendar Conversa Estratégica</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Autoridade */}
      <Section className="watermark-nn">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative hidden md:block">
            <img
              src={escritorioImg}
              alt="Escritório Carmelo Nunes"
              className="rounded-lg object-cover w-full aspect-[4/3] opacity-90"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight text-balance leading-tight">
              A exclusividade do atendimento personalizado. A solidez de cinco décadas de tradição.
            </h2>
            <div className="mt-6 space-y-4 text-foreground/70 leading-relaxed text-pretty">
              <p>
                Não somos uma linha de montagem jurídica. No Carmelo Nunes, a estratégia do seu
                negócio é desenhada pelos sócios fundadores — profissionais com décadas de
                experiência e profundo conhecimento das dinâmicas empresariais.
              </p>
              <p>
                Unimos a solidez de 1973 à agilidade das demandas contemporâneas. Cada caso recebe
                atenção integral, com soluções sob medida que antecipam riscos e pavimentam o
                caminho para decisões seguras.
              </p>
              <p>
                Nossa abordagem é preventiva e estratégica: atuamos antes que os problemas se tornem
                litígios, preservando relacionamentos comerciais, patrimônio e a continuidade dos
                negócios.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Sócios */}
      <Section className="bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight text-balance text-center">
            Acesso direto à senioridade. Experiência que dita os rumos do seu negócio.
          </h2>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto text-pretty leading-relaxed">
            No Carmelo Nunes, cada cliente é atendido diretamente pelos sócios — com a dedicação e a
            profundidade que a complexidade do seu negócio exige.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                name: "Frederico Augusto Cavalheiro e Carmelo Nunes",
                role: "Mestre em Direito Comercial pela PUC-SP",
                area: "Direito Empresarial e Societário",
                photo: socioFrederico,
              },
              {
                name: "Carlos Carmelo Nunes",
                role: "Fundador do escritório",
                area: "Direito Civil, Família e Sucessões · Mais de cinco décadas de experiência",
                photo: socioCarlos,
              },
            ].map((socio) => (
              <div
                key={socio.name}
                className="card-shadow rounded-lg bg-card overflow-hidden transition-all duration-300 hover:card-shadow-hover"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={socio.photo}
                    alt={`Retrato de ${socio.name}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {socio.name}
                  </h3>
                  <p className="text-primary text-sm mt-1">{socio.role}</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{socio.area}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/escritorio">Conheça o Escritório</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Áreas de Atuação */}
      <Section>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight text-balance text-center mb-4">
          Áreas de Atuação
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-pretty">
          Atuação focada nas demandas mais relevantes para empresas, sócios e investidores.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {areas.map((area) => (
            <Link
              key={area.href}
              to={area.href}
              className="group card-shadow rounded-lg bg-card p-6 md:p-8 transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
            >
              <area.icon size={24} strokeWidth={1} className="text-primary mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                {area.summary}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-xs mt-4 tracking-wide uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver Área <ArrowRight size={12} strokeWidth={1} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Diferenciais */}
      <Section className="bg-secondary/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight text-balance text-center mb-10">
            Por que o Carmelo Nunes
          </h2>
          <div className="space-y-6">
            {diferenciais.map((d, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-primary font-heading text-lg font-semibold mt-0.5 shrink-0 w-6 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px bg-primary/20 flex-1 mt-3" />
                <p className="text-foreground/80 leading-relaxed flex-[3]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection />
    </PageLayout>
  );
};

export default Index;
