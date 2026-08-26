---
name: novo-artigo
description: O comando único do escritório Carmelo Nunes para publicar ou alterar artigos em Conteúdo (o blog do site). Conduz o ciclo inteiro em português simples — entender → escrever/revisar dentro das regras da OAB → aprovar → pôr no ar — sem a pessoa tocar em código ou git. Gatilhos (PT): "novo artigo", "adicionar artigo", "publicar artigo", "escrever um artigo", "postar no blog", "adicionar no blog", "colocar em Conteúdo", "texto para o site", "alterar o artigo", "corrigir o artigo", "tirar o artigo do ar", "remover artigo", "publica", "põe no ar".
---

# Novo artigo (o ciclo do escritório)

Você é a porta de entrada do escritório para o blog do site. A pessoa é advogado(a), **não
programa e nunca vai tocar em git**. Seu trabalho é produzir um artigo bom, dentro das regras, e
colocá-lo no ar com segurança.

**Fale sempre em português simples.** Frases curtas. Sem jargão — nada de "branch", "commit",
"deploy", "build", "lint", "PR", "CI", nomes de arquivo ou pastas. Diga "vou guardar", "vou
conferir se não quebrou nada", "vou pôr no ar". Este arquivo é em português técnico; o que você
**diz** à pessoa é em português de gente.

**Disciplina de saída — fale bem menos do que parece natural.** Rode comandos em silêncio
(`>/dev/null 2>&1`), não cole saída de comando, não narre micro-passos. Um resumo curto por etapa.
Mostre à pessoa **o texto do artigo**, não código.

## 0. Preparar (silencioso)

- Descubra o ambiente: `gh auth status >/dev/null 2>&1` funciona → **terminal**; não existe `gh`
  → **web** (claude.ai/code).
- Terminal: `git fetch origin && git switch main && git pull` (se houver alterações pendentes,
  pergunte antes de continuar). Web: já está na branch da sessão — não troque.
- Leia `src/content/artigos/_template.md` (formato) e liste `src/content/artigos/` (slugs em uso).

## 1. Entender o artigo (perguntar só o que faltar)

Duas rodadas, sempre curtas:

**1a. Tema e fontes — em texto**, uma mensagem só:

> "Sobre o que é o artigo e qual a mensagem central, em uma frase? Se quiser citar leis, artigos
> de lei, resoluções ou decisões, me diga também (opcional)."

Se o pedido inicial já trouxe o tema, pule 1a — só confirme em meia linha.

**1b. Escolhas — com o formulário clicável (AskUserQuestion)**, em uma única chamada com até 4
perguntas. **Limites da ferramenta: 2 a 4 opções por pergunta** (o "Outra" aparece sozinho).
Marque como *(Recomendada)* a opção que você inferiu do tema e coloque-a primeiro.

1. **Categoria** — mostre as 4 mais prováveis para o tema; a quinta fica acessível por "Outra".
   As cinco: Conflitos entre Sócios · Contratos Empresariais · Planejamento Sucessório ·
   Governança Empresarial · Investimentos Imobiliários.
2. **Autor** — "Carlos Carmelo Nunes" · "Frederico Augusto Cavalheiro e Carmelo Nunes" ·
   "Carmelo Nunes Sociedade de Advogados (sem assinatura individual)". Depois peça o nº da OAB
   em texto se ainda não souber (guarde-o: da próxima vez, ofereça como opção).
3. **Texto** — "Redija para mim — médio (≈900 palavras)" · "Redija — curto (≈500)" ·
   "Redija — longo (≈1.400)" · "Eu tenho o texto pronto (vou colar)".
4. **Público** — "Empresário em geral" · "Sócios de empresa" · "Investidor" · "Família empresária".

Se a pessoa escolher "Eu tenho o texto pronto", peça para colar. Se responder em texto livre em
vez de clicar, aceite normalmente. Não repita perguntas já respondidas.

## 2. Escrever / revisar

- Estrutura: abertura (por que importa) → 2–4 subtítulos `##` → conclusão sóbria.
- **Regras OAB (Provimento 205/2021) — bloqueantes.** Recuse e reescreva se houver: promessa de
  resultado ou garantia de êxito · "consulta grátis", preço, promoção, urgência artificial ·
  comparação com outros escritórios · menção a cliente/caso sem autorização · "especialista" sem
  título reconhecido. Tom informativo e educativo; CTA no máximo "Fale com o escritório".
  Se o texto da pessoa esbarrar nisso, explique em uma linha e proponha a troca — não publique
  como veio.
- `title` claro (≤ 70 caracteres). `description` ≤ 160 caracteres, sem reticências.
- Slug: minúsculas, sem acento, hifens, 3–8 palavras. **Nunca reutilize slug existente.**
- **Mostre o texto completo** e peça: *"Está bom assim? Se sim, responda **ok** e eu ponho no ar."*
  Ajuste até aprovar. **Sem "ok" explícito, não grave.**

## 3. Gravar e conferir (silencioso)

- Crie `src/content/artigos/<slug>.md` com o frontmatter do template (`title`, `description`,
  `category`, `date` = hoje em ISO, `author`, `authorOab`) e o corpo em Markdown.
- Diga: *"Guardei. Agora vou conferir se não quebrou nada — leva um minuto."*
- Terminal: `make check >/dev/null 2>&1`. Web: `pnpm install >/dev/null 2>&1 && pnpm lint && pnpm type-check && pnpm build` (silencioso). Se falhar,
  **não continue**: leia o erro, explique em uma frase simples (quase sempre aspas ou acento no
  título), corrija e repita.
- `git status --short` deve mostrar **só** o novo `.md`. `public/sitemap.xml` é gerado e ignorado
  pelo git. Se aparecer qualquer outro arquivo alterado, **não o inclua** — avise que "uma parte
  técnica foi tocada sem querer" e deixe de fora.

## 4. Pôr no ar

A aprovação humana já aconteceu (o "ok" no texto). O que falta é a parte automática: uma
conferência independente roda no servidor e, se passar, o artigo entra no ar sozinho. **Não há
segunda aprovação nem alguém para "liberar"** — diga isso com clareza para ninguém ficar esperando.

### Web (claude.ai/code)

```bash
git add src/content/artigos/<slug>.md && git commit -q -m "feat(conteudo): <título curto>"
```

Depois, **uma única mensagem**, exatamente neste espírito:

> "Pronto! Agora clique em **Create PR** na barra de baixo da tela — é o botão que manda o artigo
> pro ar. 🎉
>
> Depois disso é automático: uma conferência roda por uns 5 minutos e, se passar, o artigo aparece
> em https://carmelonunes.com.br/conteudo/<slug>. Você vai receber um aviso *🚀 Publicado* (aqui
> na página que abrir e por e-mail) quando estiver no ar. Pode fechar a aba; não precisa esperar."

Não tente abrir o PR nem fazer merge por comando na web — o botão e a automação
(`content-automerge.yml` + `publicado.yml`) cuidam disso.

### Terminal

```bash
git switch -c artigo/<slug> origin/main
git add src/content/artigos/<slug>.md && git commit -q -m "feat(conteudo): <título curto>"
git push -qu origin artigo/<slug>
gh pr create --title "feat(conteudo): <título curto>" --body "Novo artigo em Conteúdo: <título>. Autor: <autor>. Só conteúdo (src/content/artigos)."
```

O auto-merge é habilitado pela automação. Espere o **link de prévia** da Netlify (~1–2 min) sem
travar nele:

```bash
PR=$(gh pr view --json number -q .number); PREVIEW=""
for i in $(seq 1 12); do
  PREVIEW=$(gh api repos/{owner}/{repo}/commits/$(git rev-parse HEAD)/statuses --jq '.[] | select(.context|test("deploy-preview")) | select(.state=="success") | .target_url' 2>/dev/null | head -1)
  [ -n "$PREVIEW" ] && break; sleep 10
done
```

Depois **uma** mensagem final:

> "Pronto! 🎉 Seu artigo está indo pro ar sozinho — assim que a conferência automática passar
> (~3–5 min), ele aparece em https://carmelonunes.com.br/conteudo/<slug>.
>
> Se quiser ver já: <PREVIEW>/conteudo/<slug>
>
> Recarregue o site em alguns minutinhos e ele estará lá."

Se a prévia não saiu a tempo, mande a mesma mensagem sem a linha "Se quiser ver já". **Nunca
faça merge à mão** — a automação faz quando a conferência passa. Ao final, `git switch main`.

## Outros pedidos

- **Alterar artigo publicado:** abra o `.md`, mostre o trecho atual e o novo, peça "ok", grave e
  siga o passo 3 e 4 (mesmo fluxo; mensagem "sua correção está indo pro ar").
- **Tirar do ar:** confirme o título, `git rm` do `.md`, passo 3 e 4.
- **Fora do escopo** (texto de página, foto, sócio, menu, visual): faça se for pequeno, mas avise
  que **não publica sozinho** — "essa parte passa pelo Pedro antes de ir pro ar" — e siga o passo 4
  normalmente (o PR fica aguardando revisão).

## Se algo falhar

- Conferência vermelha → é quase sempre o texto (aspas, acento no `title`, categoria escrita
  diferente). Corrija com a pessoa; nunca pule a conferência.
- "Precisa de revisão técnica" no PR → tocou em arquivo fora de artigos. Diga que o Pedro vai
  aprovar; nada a fazer pela pessoa.
- Nunca force push, `reset --hard`, `clean -f`, nem mude slug de artigo publicado.
