# Como publicar artigos no site

**Carmelo Nunes Sociedade de Advogados**

Guia do Claude Code na web, para quem nunca usou. Não precisa saber programar nem instalar nada.
Versão de 26 de agosto de 2026 · Parte A é feita uma vez; Parte B, a cada artigo

**Como funciona, em uma frase:** você conversa com o Claude, ele escreve o artigo no formato certo, você aprova e clica em um botão. Verificações automáticas rodam e, se tudo passar, o artigo entra no ar sozinho em cerca de 5 minutos.

## Parte A · Configuração (uma vez)

### A1 · Conta no GitHub

O GitHub é onde o site fica guardado. Você precisa de uma conta gratuita.

- Acesse **github.com/signup** e crie a conta com o seu e-mail do escritório. Anote o **nome de usuário** escolhido.

- Envie esse nome de usuário ao Pedro. Ele vai adicionar você à organização **carrmelo-nunes-advocacia**.

- Você receberá um e-mail *"You've been invited to join carrmelo-nunes-advocacia"*. Clique em **Join** e aceite.

### A2 · Conectar o Claude ao GitHub

- Abra **claude.ai/code** (não é o chat comum) e entre com a conta do Claude do escritório (plano Pro).
- Se aparecer um botão para **conectar o GitHub**, clique e entre com a **sua conta GitHub** (a que aceitou o convite). Autorize o aplicativo **Claude**.
- **Abaixo da caixa de mensagem** há um seletor de repositório. Clique e escolha **carrmelo-nunes-advocacia / website**. Ao lado, no seletor de modo, deixe **Accept edits**.
- Pronto — não há mais nada a instalar: o aplicativo Claude já está instalado na organização pelo Pedro.

**Não use** *Settings → Connectors → GitHub Integration*: isso é outra coisa (conector do chat) e não faz o repositório aparecer.

Se o repositório não aparecer: você ainda não aceitou o convite da organização (A1, passo 3) ou entrou no GitHub com outra conta. Aceite/corrija e recarregue a página.

## Parte B · Uso (a cada artigo)

### B1 · Pedir o artigo

- Em **claude.ai/code**, confira que o repositório **website** está selecionado.

- Escreva o que quer, em português normal — por exemplo: *"quero adicionar um artigo no blog sobre acordo de sócios em PMEs"*. (Também funciona digitar `/novo-artigo`.)

- O Claude confirma o tema e abre um **menu de opções** para você clicar: categoria, quem assina, se ele redige (curto, médio ou longo) ou se você cola o texto pronto, e para quem é o artigo. Depois, se precisar, pede o número da OAB e as fontes em texto.

#### Exemplo de resposta

```
1. Acordo de sócios em PMEs: por que toda empresa com mais de um sócio precisa de um.
2. Governança Empresarial
3. Dr. Carlos Carmelo Nunes, OAB/SP 000.000
4. Redija você. Para empresários. Tamanho médio.
5. Código Civil, arts. 997 a 1.038.
```

### B2 · Revisar e aprovar

- O Claude mostra o artigo completo. Leia com calma.

- Peça ajustes à vontade: *"encurte a introdução"*, *"troque o título"*, *"acrescente um parágrafo sobre cláusula de saída"*.

- Quando estiver bom, responda **ok**. Só então ele grava.

**Regras da OAB (Provimento 205/2021)** — o Claude aplica sozinho: nada de promessa de resultado, "consulta grátis", preço, urgência, comparação com outros escritórios ou nome de cliente. Se o seu texto tiver algo assim, ele avisa e propõe a troca. Não insista.

### B3 · Publicar

- Depois do "ok", o Claude confere o site (leva ~1 min) e escreve: *"Pronto. Clique em Create PR."*
- Clique em **Create PR**, logo **acima da caixa de mensagem** (ao lado do contador de linhas, ex.: `+70 −0`). O **link do pedido** aparece ali mesmo na tela — abra-o.

### B4 · Conferir se ficou como você queria

- Na página do pedido, em ~2 minutos aparece um comentário **👀 Prévia pronta** com um link. Abra-o: é o site inteiro com a sua mudança, antes de ir ao ar.
- Veja no computador **e no celular**. Leia o artigo, confira título, data, autor e se nada ficou cortado ou fora do lugar.
- **Ficou bom?** Na mesma página do pedido, escreva **publicar** na caixa de comentário (embaixo) e envie. Em ~1 minuto o artigo entra no ar em **carmelonunes.com.br/conteudo/…** e você recebe o aviso **🚀 Publicado** ali e por e-mail. **Sem o seu "publicar", nada vai ao ar.**
- **Quer mudar algo?** Volte à conversa no claude.ai/code e peça o ajuste (*"troque o título por…"*). O Claude grava de novo e a prévia se atualiza sozinha no mesmo pedido — sem clicar em Create PR outra vez. Confira e pronto.

> Se você responder "publicar" antes de as verificações terminarem, a automação avisa e pede para responder de novo quando ficarem verdes. Se desistir, basta não responder — ou peça ao Claude *"desfaça tudo"*.

### B5 · Outras tarefas com artigos

| Quero… | O que dizer ao Claude |
|---|---|
| Corrigir um artigo publicado | *"No artigo <título>, troque … por …"* → ok → Create PR |
| Tirar um artigo do ar | *"Remova o artigo <título>"* → ok → Create PR |
| Ver a lista de artigos | *"Quais artigos estão publicados?"* |

Tudo isso segue o mesmo caminho (prévia → seu "publicar"), porque só mexe em artigos. Qualquer outra coisa (layout, texto de página, foto, sócio novo, menu) o Claude também faz — e você também clica em **Create PR** e recebe o link de **prévia** — mas o site **não publica automaticamente**: o Pedro revisa a prévia e aprova.

### B6 · Se algo der errado

| Situação | O que fazer |
|---|---|
| O repositório não aparece | Aceite o convite da organização no e-mail e recarregue |
| O Claude escreveu algo que não pedi | Diga: *"desfaça, altere só X e nada mais"* |
| Respondi "publicar" e não foi ao ar | Veja o último comentário na página do pedido: ⏳ = verificações ainda rodando, responda de novo depois; ❌ = mande o link ao Pedro |
| Apareceu "precisa de revisão técnica" | A mudança foi além de artigos. Avise o Pedro; ele aprova |
| Fechei a aba no meio | Sem problema: em claude.ai/code a sessão continua na lista da esquerda |
| Formulários, e-mails, domínio, fotos | Não é pelo Claude — chame o Pedro |

## Referências

- Anthropic — [Get started with Claude Code on the web](https://code.claude.com/docs/en/web-quickstart)

- Anthropic — [Use Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web)

- GitHub — [Inviting users to join your organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)

- OAB — [Provimento 205/2021 — publicidade na advocacia](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021)
