import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// SPA: ao trocar de rota, volta ao topo (senão a nova página abre rolada até onde a anterior estava —
// clicar em "Política de Privacidade" no rodapé parecia não fazer nada).
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // âncoras (#secao) mantêm o comportamento nativo
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop;
