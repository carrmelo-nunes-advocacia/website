import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { formatDate, getArtigo } from "@/lib/artigos";

const BASE_URL = "https://carmelonunes.com.br";

const Artigo = () => {
  const { slug = "" } = useParams();
  const artigo = getArtigo(slug);
  if (!artigo) return <NotFound />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: artigo.title,
    description: artigo.description,
    datePublished: artigo.date,
    dateModified: artigo.updated ?? artigo.date,
    inLanguage: "pt-BR",
    articleSection: artigo.category,
    mainEntityOfPage: `${BASE_URL}/conteudo/${artigo.slug}`,
    author: { "@type": "Person", name: artigo.author },
    publisher: {
      "@type": "LegalService",
      name: "Carmelo Nunes Sociedade de Advogados",
      url: BASE_URL,
    },
  };

  return (
    <PageLayout>
      <SEO
        title={artigo.title}
        description={artigo.description}
        canonical={`/conteudo/${artigo.slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link
            to="/conteudo"
            className="inline-flex items-center gap-1 text-primary text-xs tracking-wide uppercase font-semibold mb-6 hover:opacity-80"
          >
            <ArrowLeft size={12} strokeWidth={1} /> Conteúdo
          </Link>
          <p className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-4">
            {artigo.category}
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance leading-tight">
            {artigo.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-sm font-body">
            {artigo.author}
            {artigo.authorOab ? ` · ${artigo.authorOab}` : ""} ·{" "}
            <time dateTime={artigo.date}>{formatDate(artigo.date)}</time>
          </p>
        </div>
      </section>

      <Section>
        <article
          className="prose prose-invert prose-lg max-w-3xl mx-auto prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: artigo.html }}
        />
      </Section>

      <CTASection />
    </PageLayout>
  );
};

export default Artigo;
