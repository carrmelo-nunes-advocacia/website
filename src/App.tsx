import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import ScrollToTop from "@/components/ScrollToTop";

const Escritorio = lazy(() => import("./pages/Escritorio"));
const Atuacao = lazy(() => import("./pages/Atuacao"));
const DireitoEmpresarial = lazy(() => import("./pages/DireitoEmpresarial"));
const DireitoSocietario = lazy(() => import("./pages/DireitoSocietario"));
const AssessoriaJuridica = lazy(() => import("./pages/AssessoriaJuridica"));
const PlanejamentoSucessorio = lazy(() => import("./pages/PlanejamentoSucessorio"));
const InvestimentosImobiliarios = lazy(() => import("./pages/InvestimentosImobiliarios"));
const Conteudo = lazy(() => import("./pages/Conteudo"));
const Artigo = lazy(() => import("./pages/Artigo"));
const Contato = lazy(() => import("./pages/Contato"));
const Agendamento = lazy(() => import("./pages/Agendamento"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <img
      src="/logo-cn.png"
      alt="Carmelo Nunes"
      className="h-12 animate-pulse [filter:brightness(0)_saturate(100%)_invert(74%)_sepia(22%)_saturate(746%)_hue-rotate(7deg)_brightness(93%)_contrast(84%)]"
    />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/escritorio" element={<Escritorio />} />
              <Route path="/atuacao" element={<Atuacao />} />
              <Route
                path="/atuacao/direito-empresarial-contratos"
                element={<DireitoEmpresarial />}
              />
              <Route
                path="/atuacao/direito-societario-conflitos-socios"
                element={<DireitoSocietario />}
              />
              <Route
                path="/atuacao/assessoria-juridica-empresarial"
                element={<AssessoriaJuridica />}
              />
              <Route
                path="/atuacao/planejamento-sucessorio-empresarios"
                element={<PlanejamentoSucessorio />}
              />
              <Route
                path="/atuacao/investimentos-imobiliarios"
                element={<InvestimentosImobiliarios />}
              />
              <Route path="/conteudo" element={<Conteudo />} />
              <Route path="/conteudo/:slug" element={<Artigo />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/agendamento" element={<Agendamento />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
