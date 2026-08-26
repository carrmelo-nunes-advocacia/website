import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-primary/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-heading text-primary text-lg font-semibold tracking-wide">
              Carmelo Nunes Sociedade de Advogados
            </p>
            <p className="text-muted-foreground text-sm mt-2">Tradição desde 1973.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-foreground text-sm font-semibold mb-4 tracking-wide">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Escritório", href: "/escritorio" },
                { label: "Áreas de Atuação", href: "/atuacao" },
                { label: "Conteúdo", href: "/conteudo" },
                { label: "Contato", href: "/contato" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-foreground text-sm font-semibold mb-4 tracking-wide">
              Contato
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="tel:+551131495050"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={14} strokeWidth={1} />
                +55 11 3149-5050
              </a>
              <p>Av. Paulista, 509 — 14º andar</p>
              <p>Bela Vista — São Paulo — SP</p>
              <p>CEP 01311-000</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Carmelo Nunes Sociedade de Advogados. Todos os direitos
            reservados.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-3">
            <span>OAB/SP nº ____ • Advocacia responsável</span>
            <span aria-hidden="true">·</span>
            <Link to="/privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
