import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, Shield, Scale, Building } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

const areas = [
  {
    title: "Direito Empresarial e Contratos",
    summary:
      "Assessoria em elaboração, revisão e negociação de contratos complexos. Estruturação de operações comerciais e gestão preventiva de riscos contratuais.",
    href: "/atuacao/direito-empresarial-contratos",
    icon: FileText,
  },
  {
    title: "Direito Societário e Conflitos entre Sócios",
    summary:
      "Estruturação societária, governança, acordos de sócios e resolução de conflitos. Mediação, negociação e disputas judiciais ou arbitrais.",
    href: "/atuacao/direito-societario-conflitos-socios",
    icon: Users,
  },
  {
    title: "Assessoria Jurídica Empresarial Contínua",
    summary:
      "Suporte jurídico recorrente e estratégico. Revisão contratual, orientação em decisões e prevenção de conflitos para empresas em crescimento.",
    href: "/atuacao/assessoria-juridica-empresarial",
    icon: Shield,
  },
  {
    title: "Direito de Família e Sucessões",
    summary:
      "Planejamento sucessório de empresas familiares. Organização patrimonial e prevenção de conflitos envolvendo patrimônio empresarial.",
    href: "/atuacao/planejamento-sucessorio-empresarios",
    icon: Scale,
  },
  {
    title: "Estruturação Jurídica para Investimentos Imobiliários",
    summary:
      "Assessoria para investidores em operações de short stay, planejamento patrimonial imobiliário e gestão condominial.",
    href: "/atuacao/investimentos-imobiliarios",
    icon: Building,
  },
];

const Atuacao = () => {
  return (
    <PageLayout>
      <SEO
        title="Áreas de Atuação · Direito Empresarial e Societário"
        description="Direito Empresarial, Societário, Assessoria Jurídica Contínua, Sucessões e Investimentos Imobiliários. Advocacia estratégica em São Paulo desde 1973."
        canonical="/atuacao"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: areas.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: a.title,
            url: `https://carmelonunes.com.br${a.href}`,
          })),
        }}
      />
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-4">
            Áreas de Atuação
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance leading-tight">
            Advocacia empresarial com profundidade e precisão.
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed text-pretty">
            Atuamos nas áreas mais relevantes para empresas, sócios e investidores, sempre com foco
            em prevenção, estratégia e proteção patrimonial.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto grid gap-6">
          {areas.map((area) => (
            <Link
              key={area.href}
              to={area.href}
              className="group card-shadow rounded-lg bg-card p-6 md:p-8 flex items-start gap-6 transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
            >
              <area.icon size={28} strokeWidth={1} className="text-primary shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {area.title}
                </h2>
                <p className="text-muted-foreground mt-2 leading-relaxed text-pretty">
                  {area.summary}
                </p>
              </div>
              <ArrowRight
                size={20}
                strokeWidth={1}
                className="text-primary/40 group-hover:text-primary shrink-0 mt-1 transition-colors duration-300"
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </PageLayout>
  );
};

export default Atuacao;
