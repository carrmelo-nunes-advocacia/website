import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { submitNetlifyForm } from "@/lib/netlify-forms";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import SEO from "@/components/SEO";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      toast.error("Preencha nome, e-mail e mensagem.");
      return;
    }
    setSending(true);
    try {
      await submitNetlifyForm("contato", form);
      setSuccess(true);
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch {
      toast.error("Não foi possível enviar. Tente novamente ou ligue para +55 11 3149-5050.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      <SEO
        title="Contato"
        description="Fale com o Carmelo Nunes Sociedade de Advogados. Av. Paulista, 509 — 14º andar, São Paulo. Telefone +55 11 3149-5050. Resposta em até 24 horas úteis."
        canonical="/contato"
      />
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-4">
            Contato
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance leading-tight">
            Inicie uma consulta estratégica com nossos sócios.
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed text-pretty">
            Preencha o formulário ou entre em contato diretamente. Retornamos em até 24 horas úteis.
          </p>
        </div>
      </section>

      <Section>
        {success ? (
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 size={32} strokeWidth={1} className="text-primary" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Mensagem enviada.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Recebemos o seu contato. Retornamos em até 24 horas úteis.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/">Voltar ao início</Link>
            </Button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
                aria-label="Formulário de contato"
                name="contato"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contato" />
                <p className="hidden">
                  <label>
                    Não preencha: <input name="bot-field" />
                  </label>
                </p>
                <p className="text-xs text-muted-foreground">
                  Campos marcados com <span aria-hidden="true">*</span> são obrigatórios.
                </p>
                <div>
                  <label htmlFor="nome" className="block text-sm text-foreground mb-1.5 font-body">
                    Nome completo{" "}
                    <span aria-hidden="true" className="text-primary">
                      *
                    </span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="name"
                    maxLength={100}
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full bg-input border border-primary/20 rounded-sm px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-foreground mb-1.5 font-body"
                    >
                      E-mail{" "}
                      <span aria-hidden="true" className="text-primary">
                        *
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      autoComplete="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-input border border-primary/20 rounded-sm px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm text-foreground mb-1.5 font-body"
                    >
                      Telefone
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      aria-describedby="telefone-help"
                      className="w-full bg-input border border-primary/20 rounded-sm px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                      placeholder="(11) 99999-0000"
                    />
                    <span id="telefone-help" className="sr-only">
                      Opcional. Inclua DDD.
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm text-foreground mb-1.5 font-body"
                  >
                    Como podemos ajudar?{" "}
                    <span aria-hidden="true" className="text-primary">
                      *
                    </span>
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    aria-required="true"
                    maxLength={1000}
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full bg-input border border-primary/20 rounded-sm px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors resize-none"
                    placeholder="Descreva brevemente sua necessidade jurídica"
                  />
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={sending}
                >
                  {sending ? "Enviando…" : "Enviar mensagem"}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="card-shadow rounded-lg bg-card p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <Phone size={18} strokeWidth={1} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">Telefone</p>
                    <a
                      href="tel:+551131495050"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +55 11 3149-5050
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">Localização</p>
                    <p className="text-sm text-muted-foreground">
                      Av. Paulista, 509 — 14º andar
                      <br />
                      Bela Vista — São Paulo — SP
                      <br />
                      CEP 01310-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} strokeWidth={1} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">Tempo de resposta</p>
                    <p className="text-sm text-muted-foreground">Até 24 horas úteis</p>
                  </div>
                </div>
              </div>

              <div className="card-shadow rounded-lg bg-card p-6">
                <p className="text-sm text-foreground/70 leading-relaxed text-pretty">
                  Todas as informações compartilhadas são tratadas com absoluto sigilo profissional,
                  conforme as normas da OAB e a Lei Geral de Proteção de Dados.
                </p>
              </div>
            </div>
          </div>
        )}
      </Section>
    </PageLayout>
  );
};

export default Contato;
