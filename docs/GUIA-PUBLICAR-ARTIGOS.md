Carmelo Nunes Sociedade de Advogados
# Como publicar artigos no site

Guia do Claude Code na web, para quem nunca usou. Não precisa saber programar nem instalar nada.
Versão de 26 de agosto de 2026 · Parte A é feita uma vez; Parte B, a cada artigo

**Como funciona, em uma frase:** você conversa com o Claude, ele escreve o artigo no formato certo, você aprova e clica em um botão. Verificações automáticas rodam e, se tudo passar, o artigo entra no ar sozinho em cerca de 5 minutos.

Parte A · Configuração (uma vez)

## A1 · Conta no GitHub

O GitHub é onde o site fica guardado. Você precisa de uma conta gratuita.

- Acesse **github.com/signup** e crie a conta com o seu e-mail do escritório. Anote o **nome de usuário** escolhido.

- Envie esse nome de usuário ao Pedro. Ele vai adicionar você à organização **carrmelo-nunes-advocacia**.

- Você receberá um e-mail *"You've been invited to join carrmelo-nunes-advocacia"*. Clique em **Join** e aceite.

## A2 · Conectar o Claude ao GitHub

- Abra **claude.ai/code** (não é o chat comum) e entre com a conta do Claude do escritório (plano Pro).

- Na primeira vez aparece um botão para conectar o GitHub. Clique, entre na sua conta GitHub e autorize o aplicativo **Claude**.

- Se aparecer uma tela de *environment*, aceite o padrão (**Default**).

- Abaixo da caixa de mensagem há um **seletor de repositório**. Escolha **carrmelo-nunes-advocacia / website**.

- Ao lado, no seletor de modo, deixe **Accept edits**.

Se o repositório não aparecer na lista: você ainda não aceitou o convite da organização (A1, passo 3). Aceite e recarregue a página.

Parte B · Uso (a cada artigo)

## B1 · Pedir o artigo

- Em **claude.ai/code**, confira que o repositório **website** está selecionado.

- Digite `/novo-artigo` e envie.

- O Claude faz cinco perguntas numa lista: tema e mensagem central, categoria, quem assina (nome e OAB), se você já tem o texto ou quer que ele redija, e fontes. Responda tudo numa mensagem só, em português normal. Se já tiver o texto, cole inteiro.

### Exemplo de resposta

```
1. Acordo de sócios em PMEs: por que toda empresa com mais de um sócio precisa de um.
2. Governança Empresarial
3. Dr. Carlos Carmelo Nunes, OAB/SP 000.000
4. Redija você. Para empresários. Tamanho médio.
5. Código Civil, arts. 997 a 1.038.
```

## B2 · Revisar e aprovar

- O Claude mostra o artigo completo. Leia com calma.

- Peça ajustes à vontade: *"encurte a introdução"*, *"troque o título"*, *"acrescente um parágrafo sobre cláusula de saída"*.

- Quando estiver bom, responda **ok**. Só então ele grava.

**Regras da OAB (Provimento 205/2021)** — o Claude aplica sozinho: nada de promessa de resultado, "consulta grátis", preço, urgência, comparação com outros escritórios ou nome de cliente. Se o seu texto tiver algo assim, ele avisa e propõe a troca. Não insista.

## B3 · Publicar

- Depois do "ok", o Claude confere o site (leva ~1 min) e escreve: *"Pronto. Clique em Create PR."*

- Clique em **Create PR**, na barra inferior da tela (ao lado do contador `+70 −0`).

- Só isso. As verificações automáticas rodam (~5 min) e o artigo entra no ar em **carmelonunes.com.br/conteudo/…**. O Claude te dá o link exato — abra e confira.

Você pode fechar a aba depois de clicar; a publicação continua sozinha.

## B4 · Outras tarefas com artigos

| Quero… | O que dizer ao Claude |
|---|---|

| Corrigir um artigo publicado | *"No artigo <título>, troque … por …"* → ok → Create PR |

| Tirar um artigo do ar | *"Remova o artigo <título>"* → Create PR |

| Ver a lista de artigos | *"Quais artigos estão publicados?"* |

Tudo isso publica sozinho, porque só mexe em artigos. Qualquer outra coisa (texto de página, foto, sócio novo, menu) o Claude também faz, mas o site **não publica automaticamente** — o Pedro revisa e aprova.

## B5 · Se algo der errado

| Situação | O que fazer |
|---|---|

| O repositório não aparece | Aceite o convite da organização no e-mail e recarregue |

| O Claude escreveu algo que não pedi | Diga: *"desfaça, altere só X e nada mais"* |

| Cliquei em Create PR e passaram 15 min sem publicar | Abra o link do PR que apareceu; se houver um ❌, mande o link ao Pedro |

| Apareceu "precisa de revisão técnica" | A mudança foi além de artigos. Avise o Pedro; ele aprova |

| Fechei a aba no meio | Sem problema: em claude.ai/code a sessão continua na lista da esquerda |

| Formulários, e-mails, domínio, fotos | Não é pelo Claude — chame o Pedro |

## Referências

- Anthropic — [Get started with Claude Code on the web](https://code.claude.com/docs/en/web-quickstart)

- Anthropic — [Use Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web)

- GitHub — [Inviting users to join your organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)

- OAB — [Provimento 205/2021 — publicidade na advocacia](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021)
