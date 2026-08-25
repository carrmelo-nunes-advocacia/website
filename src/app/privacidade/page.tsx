import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como tratamos dados pessoais, nos termos da LGPD (Lei 13.709/2018).",
};

// TODO: redigir o texto com o escritório (base legal, finalidade, retenção, DPO/encarregado,
// direitos do titular). Página obrigatória antes de qualquer formulário de contato.
export default function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Política de Privacidade</h1>
      <p className="mt-4">Em elaboração.</p>
    </main>
  );
}
