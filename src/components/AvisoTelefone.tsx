import { useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { MessageCircle, Phone, X } from "lucide-react";

// Aviso temporário: linha fixa (11) 3149-5050 fora do ar por falha da operadora.
// Para tirar do ar quando a linha voltar: remova <AvisoTelefone /> de PageLayout.tsx
// e apague este arquivo.

const CHAVE_VISTO = "aviso-telefone-visto";
const WHATSAPP_URL = "https://wa.me/5511920621241";

// Mostra uma vez por visita: depois de fechado, não reabre a cada troca de página.
const jaViu = () => {
  try {
    return sessionStorage.getItem(CHAVE_VISTO) === "1";
  } catch {
    return false;
  }
};

const marcarVisto = () => {
  try {
    sessionStorage.setItem(CHAVE_VISTO, "1");
  } catch {
    // navegador sem armazenamento: o aviso só volta a aparecer na próxima página
  }
};

const AvisoTelefone = () => {
  const [aberto, setAberto] = useState(false);
  const janela = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!jaViu()) setAberto(true);
  }, []);

  const mudar = (open: boolean) => {
    setAberto(open);
    if (!open) marcarVisto();
  };

  return (
    <DialogPrimitive.Root open={aberto} onOpenChange={mudar}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          ref={janela}
          tabIndex={-1}
          // Foca a própria janela ao abrir (leitor de tela lê o aviso), sem destacar o "X".
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            janela.current?.focus();
          }}
          className="fixed left-1/2 top-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-xl border border-primary/40 bg-card p-6 sm:p-8 shadow-2xl focus:outline-none focus-visible:outline-none focus-visible:rounded-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <DialogPrimitive.Close
            className="absolute right-3 top-3 rounded-md p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Fechar aviso"
          >
            <X size={18} strokeWidth={1.5} />
          </DialogPrimitive.Close>

          <DialogPrimitive.Title className="font-heading text-primary text-lg sm:text-xl font-semibold tracking-wide pr-8">
            AVISO AOS CLIENTES E PARCEIROS
          </DialogPrimitive.Title>

          <div className="mt-4 space-y-4 text-sm sm:text-base leading-relaxed text-card-foreground/90">
            <DialogPrimitive.Description>
              Informamos que nossa linha telefônica fixa (11) 3149-5050 está temporariamente
              indisponível em razão de falha técnica na prestação do serviço pela operadora,
              alheia à nossa vontade.
            </DialogPrimitive.Description>

            <p>
              Enquanto a linha não for restabelecida, nosso atendimento continua pelo canal
              auxiliar:
            </p>

            <div className="rounded-lg border border-primary/30 bg-background/60 p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">
                WhatsApp / telefone
              </p>
              <a
                href="tel:+5511920621241"
                className="mt-1 inline-flex items-center gap-2 font-semibold text-foreground text-lg hover:text-primary transition-colors"
              >
                <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                +55 11 92062-1241
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                <MessageCircle size={18} strokeWidth={1.5} aria-hidden="true" />
                Clique aqui para falar conosco pelo WhatsApp
              </a>
            </div>

            <p>
              Nosso número institucional (11) 3149-5050 continua sendo o número oficial do
              escritório e voltará a funcionar assim que o serviço for regularizado.
            </p>

            <p>Pedimos desculpas pelo transtorno e agradecemos a compreensão.</p>
          </div>

          <DialogPrimitive.Close className="mt-6 w-full rounded-md border border-primary/40 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Entendi
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default AvisoTelefone;
