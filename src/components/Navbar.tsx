import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoCN from "@/assets/logo-cn.png";

const navItems = [
  { label: "Escritório", href: "/escritorio" },
  { label: "Atuação", href: "/atuacao" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Contato", href: "/contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container mx-auto flex items-center h-16 md:h-20 px-4 lg:px-8">
        {/* Logo centered between left margin and nav items */}
        <div className="hidden md:flex items-center flex-1">
          <div className="flex-1 flex justify-center">
            <Link to="/" className="flex items-center gap-3 -translate-x-5" aria-label="Página inicial">
              <img
                src={logoCN}
                alt="Carmelo Nunes Sociedade de Advogados"
                className="h-10 sm:h-12 w-auto [filter:brightness(0)_saturate(100%)_invert(74%)_sepia(22%)_saturate(746%)_hue-rotate(7deg)_brightness(93%)_contrast(84%)]"
              />
            </Link>
          </div>
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname.startsWith(item.href)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="gold" size="sm" asChild>
              <Link to="/agendamento">Agendar Conversa</Link>
            </Button>
          </div>
        </div>

        {/* Mobile logo */}
        <Link to="/" className="flex md:hidden items-center gap-3" aria-label="Página inicial">
          <img
            src={logoCN}
            alt="Carmelo Nunes Sociedade de Advogados"
            className="h-10 sm:h-12 w-auto [filter:brightness(0)_saturate(100%)_invert(74%)_sepia(22%)_saturate(746%)_hue-rotate(7deg)_brightness(93%)_contrast(84%)]"
          />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto text-foreground/70 hover:text-foreground p-2"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-sm tracking-wide py-2 transition-colors ${
                    location.pathname.startsWith(item.href) ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="gold" size="default" className="mt-2" asChild>
                <Link to="/agendamento" onClick={() => setIsOpen(false)}>
                  Agendar Conversa
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
