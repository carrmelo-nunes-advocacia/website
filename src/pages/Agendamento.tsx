import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { CheckCircle2, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import SEO from "@/components/SEO";
import MapaEscritorio from "@/components/MapaEscritorio";
import { toast } from "sonner";
import { submitNetlifyForm } from "@/lib/netlify-forms";

const ASSUNTOS = [
  { value: "direito-empresarial", label: "Direito Empresarial e Contratos" },
  { value: "direito-societario", label: "Direito Societário e Conflitos entre Sócios" },
  { value: "assessoria-juridica", label: "Assessoria Jurídica Empresarial" },
  { value: "planejamento-sucessorio", label: "Planejamento Sucessório de Empresários" },
  { value: "investimentos-imobiliarios", label: "Investimentos Imobiliários" },
  { value: "outro", label: "Outro assunto" },
] as const;

const URGENCIAS = [
  { value: "baixa", label: "Baixa — posso aguardar" },
  { value: "media", label: "Média — nas próximas semanas" },
  { value: "alta", label: "Alta — situação urgente" },
] as const;

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  empresa: z.string().trim().max(120).optional(),
  assunto: z.enum(
    [
      "direito-empresarial",
      "direito-societario",
      "assessoria-juridica",
      "planejamento-sucessorio",
      "investimentos-imobiliarios",
      "outro",
    ],
    { required_error: "Selecione um assunto" },
  ),
  outroAssunto: z.string().trim().max(120).optional(),
  urgencia: z.enum(["baixa", "media", "alta"], { required_error: "Selecione a urgência" }),
  preferencia: z.string().trim().max(120).optional(),
  mensagem: z.string().trim().min(10, "Descreva brevemente sua necessidade").max(1500),
  consentimento: z.literal(true, {
    errorMap: () => ({ message: "É necessário concordar com o tratamento de dados" }),
  }),
});

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  assunto: string;
  outroAssunto: string;
  urgencia: string;
  preferencia: string;
  mensagem: string;
  consentimento: boolean;
};

const INITIAL: FormState = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  assunto: "",
  outroAssunto: "",
  urgencia: "",
  preferencia: "",
  mensagem: "",
  consentimento: false,
};

const Agendamento = () => {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const update = (key: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as string;
        if (!fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      toast.error("Verifique os campos destacados.");
      return;
    }

    const assuntoLabel =
      ASSUNTOS.find((a) => a.value === parsed.data.assunto)?.label ?? parsed.data.assunto;
    const urgenciaLabel =
      URGENCIAS.find((u) => u.value === parsed.data.urgencia)?.label ?? parsed.data.urgencia;

    setSending(true);
    try {
      await submitNetlifyForm("agendamento", {
        ...parsed.data,
        assunto: assuntoLabel,
        urgencia: urgenciaLabel,
      });
      setSuccess(true);
      setForm(INITIAL);
    } catch {
      toast.error("Não foi possível enviar. Tente novamente ou ligue para +55 11 3149-5050.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-input border rounded-sm px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors ${
      errors[field] ? "border-destructive" : "border-primary/20 focus:border-primary"
    }`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Agendamento de Consulta — Carmelo Nunes Sociedade de Advogados",
    url: "https://carmelonunes.com.br/agendamento",
    description:
      "Agende uma consulta estratégica com os sócios do Carmelo Nunes Sociedade de Advogados.",
  };

  return (
    <PageLayout>
      <SEO
        title="Agendar Consulta"
        description="Agende uma conversa estratégica com os sócios do Carmelo Nunes Sociedade de Advogados. Formulário direto, resposta em até 72 horas úteis."
        canonical="/agendamento"
        jsonLd={jsonLd}
      />

      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-4">
            Agendamento
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance leading-tight">
            Agende uma conversa estratégica com nossos sócios.
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed text-pretty">
            Conte-nos brevemente o seu cenário. O time direciona o pedido ao sócio responsável pela
            área e retorna em até 72 horas úteis.
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
              Solicitação enviada.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Recebemos o seu pedido de agendamento. O sócio responsável pela área retornará em até
              72 horas úteis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/">Voltar ao início</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulário de agendamento"
                className="space-y-5"
                name="agendamento"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="agendamento" />
                <p className="hidden">
                  <label>
                    Não preencha: <input name="bot-field" />
                  </label>
                </p>
                <p className="text-xs text-muted-foreground">
                  Campos com{" "}
                  <span aria-hidden="true" className="text-primary">
                    *
                  </span>{" "}
                  são obrigatórios.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm text-foreground mb-1.5 font-body"
                    >
                      Nome completo{" "}
                      <span aria-hidden="true" className="text-primary">
                        *
                      </span>
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      value={form.nome}
                      onChange={(e) => update("nome", e.target.value)}
                      aria-invalid={!!errors.nome}
                      aria-describedby={errors.nome ? "nome-err" : undefined}
                      className={inputClass("nome")}
                      placeholder="Seu nome"
                    />
                    {errors.nome && (
                      <p id="nome-err" className="text-xs text-destructive mt-1">
                        {errors.nome}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm text-foreground mb-1.5 font-body"
                    >
                      Empresa <span className="text-muted-foreground/60 text-xs">(opcional)</span>
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      autoComplete="organization"
                      maxLength={120}
                      value={form.empresa}
                      onChange={(e) => update("empresa", e.target.value)}
                      className={inputClass("empresa")}
                      placeholder="Nome da sua empresa"
                    />
                  </div>
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
                      autoComplete="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-err" : undefined}
                      className={inputClass("email")}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p id="email-err" className="text-xs text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm text-foreground mb-1.5 font-body"
                    >
                      Telefone{" "}
                      <span aria-hidden="true" className="text-primary">
                        *
                      </span>
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      value={form.telefone}
                      onChange={(e) => update("telefone", e.target.value)}
                      aria-invalid={!!errors.telefone}
                      aria-describedby={errors.telefone ? "telefone-err" : undefined}
                      className={inputClass("telefone")}
                      placeholder="(11) 99999-0000"
                    />
                    {errors.telefone && (
                      <p id="telefone-err" className="text-xs text-destructive mt-1">
                        {errors.telefone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="assunto"
                      className="block text-sm text-foreground mb-1.5 font-body"
                    >
                      Assunto{" "}
                      <span aria-hidden="true" className="text-primary">
                        *
                      </span>
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={form.assunto}
                      onChange={(e) => update("assunto", e.target.value)}
                      aria-invalid={!!errors.assunto}
                      aria-describedby={errors.assunto ? "assunto-err" : undefined}
                      className={inputClass("assunto")}
                    >
                      <option value="">Selecione uma área…</option>
                      {ASSUNTOS.map((a) => (
                        <option key={a.value} value={a.value}>
                          {a.label}
                        </option>
                      ))}
                    </select>
                    {errors.assunto && (
                      <p id="assunto-err" className="text-xs text-destructive mt-1">
                        {errors.assunto}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="urgencia"
                      className="block text-sm text-foreground mb-1.5 font-body"
                    >
                      Urgência{" "}
                      <span aria-hidden="true" className="text-primary">
                        *
                      </span>
                    </label>
                    <select
                      id="urgencia"
                      name="urgencia"
                      value={form.urgencia}
                      onChange={(e) => update("urgencia", e.target.value)}
                      aria-invalid={!!errors.urgencia}
                      aria-describedby={errors.urgencia ? "urgencia-err" : undefined}
                      className={inputClass("urgencia")}
                    >
                      <option value="">Selecione…</option>
                      {URGENCIAS.map((u) => (
                        <option key={u.value} value={u.value}>
                          {u.label}
                        </option>
                      ))}
                    </select>
                    {errors.urgencia && (
                      <p id="urgencia-err" className="text-xs text-destructive mt-1">
                        {errors.urgencia}
                      </p>
                    )}
                  </div>
                </div>

                {form.assunto === "outro" && (
                  <div>
                    <label
                      htmlFor="outroAssunto"
                      className="block text-sm text-foreground mb-1.5 font-body"
                    >
                      Especifique o assunto
                    </label>
                    <input
                      id="outroAssunto"
                      name="outroAssunto"
                      type="text"
                      maxLength={120}
                      value={form.outroAssunto}
                      onChange={(e) => update("outroAssunto", e.target.value)}
                      className={inputClass("outroAssunto")}
                      placeholder="Tema do atendimento"
                    />
                  </div>
                )}

                <div>
                  <label
                    htmlFor="preferencia"
                    className="block text-sm text-foreground mb-1.5 font-body"
                  >
                    Preferência de horário{" "}
                    <span className="text-muted-foreground/60 text-xs">(opcional)</span>
                  </label>
                  <input
                    id="preferencia"
                    name="preferencia"
                    type="text"
                    maxLength={120}
                    value={form.preferencia}
                    onChange={(e) => update("preferencia", e.target.value)}
                    className={inputClass("preferencia")}
                    placeholder="Ex.: manhãs, após as 17h, terças e quintas"
                  />
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
                    rows={5}
                    maxLength={1500}
                    value={form.mensagem}
                    onChange={(e) => update("mensagem", e.target.value)}
                    aria-invalid={!!errors.mensagem}
                    aria-describedby={errors.mensagem ? "mensagem-err" : undefined}
                    className={`${inputClass("mensagem")} resize-none`}
                    placeholder="Descreva brevemente o cenário, partes envolvidas e objetivo."
                  />
                  {errors.mensagem && (
                    <p id="mensagem-err" className="text-xs text-destructive mt-1">
                      {errors.mensagem}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consentimento"
                    name="consentimento"
                    type="checkbox"
                    checked={form.consentimento}
                    onChange={(e) => update("consentimento", e.target.checked)}
                    aria-invalid={!!errors.consentimento}
                    className="mt-1 h-4 w-4 rounded border-primary/30 text-primary focus-visible:ring-2 focus-visible:ring-primary"
                  />
                  <label
                    htmlFor="consentimento"
                    className="text-xs text-muted-foreground leading-relaxed"
                  >
                    Concordo com o tratamento dos meus dados conforme a LGPD, exclusivamente para
                    finalidade de contato pelo escritório.
                  </label>
                </div>
                {errors.consentimento && (
                  <p className="text-xs text-destructive -mt-3">{errors.consentimento}</p>
                )}

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={sending}
                >
                  {sending ? "Enviando…" : "Enviar agendamento"}
                </Button>
              </form>
            </div>

            <aside className="md:col-span-2 space-y-6">
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
                      CEP 01311-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} strokeWidth={1} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">Tempo de resposta</p>
                    <p className="text-sm text-muted-foreground">Até 72 horas úteis</p>
                  </div>
                </div>
              </div>

              <div className="card-shadow rounded-lg bg-card p-6">
                <p className="text-sm text-foreground/70 leading-relaxed text-pretty">
                  As informações compartilhadas são tratadas com absoluto sigilo profissional,
                  conforme as normas da OAB e a Lei Geral de Proteção de Dados.
                </p>
              </div>
              <MapaEscritorio />
            </aside>
          </div>
        )}
      </Section>
    </PageLayout>
  );
};

export default Agendamento;
