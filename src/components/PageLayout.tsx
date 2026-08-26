import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="flex-1 pt-16 md:pt-20 focus:outline-none"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
