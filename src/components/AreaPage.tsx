import { ReactNode } from "react";
import PageLayout from "./PageLayout";
import Section from "./Section";
import CTASection from "./CTASection";
import SEO from "./SEO";
import Breadcrumbs, { breadcrumbJsonLd, Crumb } from "./Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface AreaPageProps {
  title: string;
  subtitle: string;
  intro: string;
  services: ServiceItem[];
  benefits?: string[];
  children?: ReactNode;
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
  faqs?: FaqItem[];
}

const BASE_URL = "https://carmelonunes.com.br";

const AreaPage = ({
  title,
  subtitle,
  intro,
  services,
  benefits,
  children,
  seoTitle,
  seoDescription,
  canonical,
  faqs,
}: AreaPageProps) => {
  const crumbs: Crumb[] = [
    { label: "Início", href: "/" },
    { label: "Áreas de Atuação", href: "/atuacao" },
    { label: title, href: canonical },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${title} — Carmelo Nunes Sociedade de Advogados`,
    description: seoDescription || subtitle,
    url: canonical ? `${BASE_URL}${canonical}` : BASE_URL,
    areaServed: { "@type": "Country", name: "Brasil" },
    provider: {
      "@type": "LegalService",
      name: "Carmelo Nunes Sociedade de Advogados",
      url: BASE_URL,
    },
    serviceType: title,
  };

  const faqJsonLd =
    faqs && faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const schemas: Record<string, unknown>[] = [serviceJsonLd, breadcrumbJsonLd(crumbs)];
  if (faqJsonLd) schemas.push(faqJsonLd);

  return (
    <PageLayout>
      <SEO
        title={seoTitle || title}
        description={seoDescription || subtitle}
        canonical={canonical}
        jsonLd={schemas}
      />
      {/* Hero */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Breadcrumbs items={crumbs} className="mb-6" />
          <p className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-4">
            Área de Atuação
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance leading-tight">
            {title}
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed text-pretty">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-foreground/80 text-lg leading-relaxed text-pretty">{intro}</p>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-10">
            Como atuamos
          </h2>
          <div className="grid gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="card-shadow rounded-lg bg-card p-6 md:p-8 transition-all duration-300 hover:card-shadow-hover"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-8">
              Diferenciais nesta área
            </h2>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground/80 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {children}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <Section className="bg-secondary/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-8">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/15">
                  <AccordionTrigger className="text-left font-heading text-base text-foreground hover:text-primary hover:no-underline">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-pretty">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>
      )}

      <CTASection
        title="Fale com nossos especialistas sobre sua necessidade."
        buttonText="Agendar Conversa Estratégica"
      />
    </PageLayout>
  );
};

export default AreaPage;
