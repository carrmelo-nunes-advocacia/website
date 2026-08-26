import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import SEO from "@/components/SEO";

// Texto-fonte: docs/POLITICA-DE-PRIVACIDADE.md (editar lá e refletir aqui).
const Privacidade = () => (
  <PageLayout>
    <SEO
      title="Política de Privacidade"
      description="Como o Carmelo Nunes Sociedade de Advogados coleta, usa, compartilha e protege dados pessoais de clientes e interessados, em conformidade com a LGPD e o sigilo profissional."
      canonical="/privacidade"
    />
    <section className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <p className="text-primary tracking-[0.2em] uppercase text-xs font-body font-semibold mb-4">
          Privacidade e Proteção de Dados
        </p>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
          Política de Privacidade
        </h1>
        <p className="text-muted-foreground mt-4 text-sm font-body tracking-wide">
          Carmelo Nunes Sociedade de Advogados · Vigência: agosto de 2026
        </p>
      </div>
    </section>
    <Section>
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Carmelo Nunes Sociedade de Advogados · Vigência: agosto de 2026
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A Carmelo Nunes Sociedade de Advogados ("Carmelo Nunes" ou "Escritório"), inscrita no CNPJ
          sob o nº [__.___.___/____-__] e registrada na OAB/SP sob o nº [_____], com sede na Av.
          Paulista, 509 — 14º andar, São Paulo/SP, CEP 01310-000, valoriza a privacidade dos
          clientes, potenciais clientes e demais pessoas que se relacionam com o Escritório, e se
          compromete a proteger as informações pessoais coletadas durante o uso de nosso site e a
          prestação de nossos serviços jurídicos, em conformidade com a Lei Geral de Proteção de
          Dados (LGPD) e com o dever de sigilo profissional que rege a advocacia.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos
          seus dados pessoais. Ao acessar ou utilizar nosso site, nossos canais de contato ou nossos
          serviços, você concorda com os termos descritos nesta política.
        </p>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">01</span>
            Introdução
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A Carmelo Nunes atua na advocacia empresarial, com foco em Direito Empresarial e
            Contratos, Direito Societário e conflitos entre sócios, assessoria jurídica empresarial
            contínua, planejamento sucessório de empresários e investimentos imobiliários. Para
            prestar esses serviços, tratamos dados pessoais de clientes e de seus representantes, de
            pessoas que nos contatam em busca de orientação e de terceiros envolvidos nos assuntos
            que patrocinamos.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Esta política aplica-se a todas as informações pessoais tratadas pela Carmelo Nunes no
            âmbito de suas atividades, seja por meio do site, dos formulários de contato e
            agendamento, de canais de comunicação como e-mail, telefone e WhatsApp, ou do
            relacionamento direto com clientes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A relação entre advogado e cliente é protegida por sigilo profissional. Nada nesta
            política reduz esse dever: as informações confiadas ao Escritório no exercício da
            advocacia recebem, além das garantias da LGPD, a proteção do Estatuto da Advocacia e do
            Código de Ética e Disciplina da OAB.
          </p>
        </section>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">02</span>
            Documentos de referência
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Lei Federal 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).</li>
            <li>
              Lei Federal 8.906/1994 — Estatuto da Advocacia e da OAB, em especial o dever de sigilo
              profissional.
            </li>
            <li>Código de Ética e Disciplina da OAB.</li>
            <li>
              Lei Federal 12.965/2014 — Marco Civil da Internet, quanto aos registros de acesso ao
              site.
            </li>
          </ul>
        </section>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">03</span>
            Termos e definições
          </h2>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Cliente:</strong> pessoa física ou
            jurídica que contrata os serviços jurídicos da Carmelo Nunes, bem como seus sócios,
            administradores e representantes cujos dados sejam tratados na prestação do serviço.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Interessado:</strong> pessoa que entra
            em contato com o Escritório — por formulário, e-mail, telefone ou WhatsApp — em busca de
            informações ou de uma primeira conversa, ainda sem contrato firmado.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Confidencialidade:</strong> propriedade
            da informação não estar disponível ou não ser divulgada para indivíduos, entidades ou
            processos não autorizados.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Sigilo profissional:</strong> dever
            legal e ético do advogado de guardar segredo sobre os fatos de que tome conhecimento no
            exercício da profissão, inclusive quanto à própria existência da relação com o cliente.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Integridade:</strong> propriedade de
            acuracidade e completeza da informação.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Disponibilidade:</strong> propriedade
            da informação ser acessível e utilizável sob demanda de uma entidade autorizada.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">LGPD:</strong> Lei Federal 13.709/2018,
            conhecida como Lei Geral de Proteção de Dados.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Controlador:</strong> pessoa a quem
            competem as decisões referentes ao tratamento de dados pessoais. Na prestação de
            serviços jurídicos, a Carmelo Nunes atua como controladora dos dados de clientes e
            interessados.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Encarregado (DPO):</strong> pessoa
            indicada pelo controlador para atuar como canal de comunicação entre o controlador, os
            titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Tratamento de dados pessoais:</strong>{" "}
            qualquer operação realizada com dados pessoais, incluindo, mas não se limitando a:
            coleta, transmissão, armazenamento, processamento, retenção e descarte.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">
              Incidente de segurança da informação:
            </strong>{" "}
            evento único ou série de eventos de segurança da informação indesejados ou inesperados
            com probabilidade significativa de comprometer as operações do Escritório ou ameaçar a
            segurança da informação.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Privacidade de dados:</strong> garantia
            dos direitos fundamentais dos titulares de dados pessoais conforme estabelecido na
            legislação aplicável.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">Segurança da informação:</strong>{" "}
            preservação da confidencialidade, integridade e disponibilidade de dados e informações.
          </p>
        </section>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">04</span>
            Informações coletadas
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Coletamos informações pessoais de diferentes titulares e de diversas maneiras,
            incluindo, mas não se limitando a:
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">
              De interessados (formulários de contato e agendamento, e-mail, telefone e WhatsApp):
            </strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Informações de identificação e contato: nome, empresa, endereço de e-mail e número de
              telefone.
            </li>
            <li>
              Informações sobre a demanda: assunto de interesse, grau de urgência, preferência de
              horário para atendimento e a mensagem escrita pelo próprio interessado.
            </li>
            <li>Registro do consentimento manifestado no formulário de agendamento.</li>
          </ul>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">De clientes:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Informações de cadastro e contrato: nome ou razão social, CPF/CNPJ, endereço, e-mail,
              telefone, dados de representantes legais e demais informações necessárias à
              contratação e à emissão de documentos fiscais.
            </li>
            <li>
              Informações relativas ao caso: fatos, documentos, contratos, dados societários,
              patrimoniais e financeiros e demais informações necessárias à prestação do serviço
              jurídico contratado, inclusive dados de terceiros envolvidos no assunto.
            </li>
            <li>
              Informações financeiras: dados necessários à cobrança de honorários e ao reembolso de
              despesas.
            </li>
          </ul>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-heading">De todos os usuários do site:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Informações de uso: endereço IP, data e hora de acesso, páginas visitadas, tipo de
              navegador e dispositivo, registrados pelo provedor de hospedagem do site para fins de
              segurança e funcionamento.
            </li>
            <li>
              Informações de contato adicionais fornecidas voluntariamente para atendimento
              personalizado.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            O site não utiliza cookies de rastreamento publicitário nem ferramentas de perfilamento
            de visitantes.
          </p>
        </section>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">05</span>
            Uso das informações e hipóteses legais conforme a LGPD
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Na condição de controladora dos dados pessoais, utilizamos suas informações para os
            seguintes fins:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Atender à sua solicitação: responder ao contato, avaliar a possibilidade de
              atendimento, agendar a conversa inicial e verificar a inexistência de conflito de
              interesses.
            </li>
            <li>
              Prestar os serviços jurídicos contratados: elaborar pareceres e contratos, representar
              o cliente em negociações, procedimentos administrativos e processos judiciais ou
              arbitrais, e cumprir as obrigações do contrato de honorários.
            </li>
            <li>
              Comunicação: enviar comunicações relacionadas ao seu atendimento ou ao seu caso — como
              confirmações de agendamento, andamentos e solicitações de documentos. Mediante seu
              consentimento, também podemos enviar conteúdos informativos produzidos pelo
              Escritório.
            </li>
            <li>
              Cumprir obrigações legais e regulatórias: emitir documentos fiscais, atender às normas
              da OAB e guardar documentos pelos prazos exigidos em lei.
            </li>
            <li>
              Segurança: manter o funcionamento seguro do site e prevenir fraudes e acessos
              indevidos.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Tratamos seus dados pessoais com base em uma ou mais das seguintes hipóteses legais
            previstas na LGPD:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Execução de contrato ou de procedimentos preliminares relacionados a contrato do qual
              o titular seja parte;
            </li>
            <li>Cumprimento de obrigação legal ou regulatória;</li>
            <li>Exercício regular de direitos em processo judicial, administrativo ou arbitral;</li>
            <li>Legítimo interesse do controlador;</li>
            <li>
              Consentimento do titular, quando aplicável (por exemplo, para o envio de conteúdos
              informativos).
            </li>
          </ul>
        </section>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">06</span>
            Compartilhamento de informações
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes
            circunstâncias:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Órgãos públicos e tribunais: dados de clientes e de terceiros são apresentados a
              órgãos do Poder Judiciário, câmaras arbitrais, cartórios, juntas comerciais e demais
              autoridades quando necessário à defesa dos interesses do cliente e ao exercício
              regular de direitos.
            </li>
            <li>
              Advogados correspondentes e peritos: profissionais contratados para atuar em
              determinado caso, sempre vinculados ao mesmo dever de sigilo e ao cumprimento da LGPD.
            </li>
            <li>
              Prestadores de serviço: hospedagem do site e recebimento de formulários, serviços de
              e-mail, telefonia e mensagens (como o WhatsApp), sistemas de gestão jurídica e
              contabilidade, condicionados ao cumprimento da LGPD e de boas práticas de segurança da
              informação.
            </li>
            <li>
              Cumprimento de requisitos legais: podemos divulgar informações para cumprir obrigações
              legais ou regulatórias, ou atender a solicitações de autoridades competentes,
              respeitados os limites do sigilo profissional.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Em nenhuma hipótese comercializamos dados pessoais.
          </p>
        </section>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">07</span>
            Transferência internacional de dados
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Determinados serviços utilizados pela Carmelo Nunes, tais como hospedagem do site,
            provedor de e-mail e ferramentas de comunicação, podem armazenar ou processar dados em
            servidores localizados fora do Brasil, inclusive nos Estados Unidos da América.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nesses casos, adotamos medidas para assegurar que a transferência internacional ocorra
            em conformidade com a LGPD, contratando fornecedores que ofereçam garantias adequadas de
            proteção e privacidade dos dados pessoais.
          </p>
        </section>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">08</span>
            Retenção e descarte
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Os dados de interessados que não se tornem clientes são mantidos pelo tempo necessário
            ao atendimento da solicitação e, depois, descartados ou anonimizados, salvo dever legal
            de guarda.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Os dados e documentos de clientes são mantidos durante a vigência da relação
            profissional e, após seu término, pelos prazos exigidos pela legislação, pelas normas da
            OAB e pelos prazos prescricionais aplicáveis, para o cumprimento de obrigações legais e
            o exercício regular de direitos.
          </p>
        </section>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">09</span>
            Segurança da informação
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Mantemos medidas de segurança apropriadas para proteger suas informações pessoais contra
            perda, acesso não autorizado, divulgação, alteração ou destruição, adotando as melhores
            práticas de mercado em segurança da informação. O acesso às informações de clientes é
            restrito aos profissionais envolvidos no atendimento, todos sujeitos ao dever de sigilo.
            No entanto, lembramos que nenhum sistema de segurança é 100% à prova de falhas.
          </p>
        </section>
        <section className="border-t border-primary/20 pt-8 mt-8 space-y-4">
          <h2 className="font-heading text-2xl text-foreground flex items-baseline gap-3">
            <span className="text-primary text-sm font-body font-semibold tracking-widest">10</span>
            Seus direitos · contato
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Você tem direitos em relação aos seus dados pessoais, incluindo o direito de confirmar a
            existência de tratamento, acessar, corrigir, atualizar, portar ou excluir informações
            pessoais, bem como revogar consentimento. Para exercer esses direitos, entre em contato
            conosco pelos canais indicados abaixo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            O atendimento a essas solicitações observará os limites impostos pelo sigilo
            profissional e pelas obrigações legais de guarda de documentos.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Os detalhes sobre os direitos dos titulares podem ser consultados no texto oficial da
            LGPD (Lei Geral de Proteção de Dados do Brasil).
          </p>
        </section>
        <div className="mt-12 rounded-lg bg-card card-shadow p-8 space-y-2">
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              Contato — Encarregado de Proteção de Dados (DPO)
            </strong>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Encarregado (DPO): [Nome do sócio responsável]
          </p>
          <p className="text-muted-foreground leading-relaxed">
            E-mail: privacidade@carmelonunes.com.br
          </p>
        </div>
      </div>
    </Section>
  </PageLayout>
);

export default Privacidade;
