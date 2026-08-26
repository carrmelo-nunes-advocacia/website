import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <SEO
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
      />
      <section className="min-h-[70vh] flex items-center justify-center watermark-nn">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center py-20">
          <p className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-4">
            Erro 404
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground tracking-tight text-balance leading-tight">
            Página não encontrada.
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed text-pretty">
            A página que você procura não existe, foi movida ou está temporariamente indisponível.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/">Voltar à Página Inicial</Link>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/contato">Falar com o Escritório</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
