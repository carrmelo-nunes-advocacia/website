import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "./Section";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

const CTASection = ({
  title = "Converse com os sócios para avaliar a estrutura jurídica da sua empresa.",
  subtitle,
  buttonText = "Agendar Conversa",
  buttonHref = "/agendamento",
}: CTASectionProps) => {
  return (
    <Section className="watermark-nn">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight text-balance leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground mt-4 text-pretty leading-relaxed">{subtitle}</p>
        )}
        <Button variant="gold" size="lg" className="mt-8" asChild>
          <Link to={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </Section>
  );
};

export default CTASection;
