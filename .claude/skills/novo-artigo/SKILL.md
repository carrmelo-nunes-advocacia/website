---
name: novo-artigo
description: Publica um novo artigo em Conteúdo (o blog do site Carmelo Nunes) — faz as perguntas certas, escreve/revisa o texto dentro das regras da OAB, cria o arquivo Markdown, roda o check e abre o PR para publicar. Acione SEMPRE que o pedido for sobre artigo/blog, mesmo sem o comando. Gatilhos (PT): "novo artigo", "adicionar artigo", "publicar artigo", "escrever um artigo", "postar no blog", "adicionar no blog", "colocar em Conteúdo", "texto para o site", "alterar o artigo", "corrigir o artigo", "tirar o artigo do ar", "remover artigo", "publica", "põe no ar".
---

# /novo-artigo — publicar artigo em Conteúdo

Fale sempre em português simples. O usuário é advogado, não técnico. Nunca mostre código;
mostre o **texto** do artigo para ele aprovar.

## 0. Preflight

- `git status` limpo e na `main` atualizada (`git switch main && git pull`). Se houver
  alterações pendentes, avise e pare.
- Existe `src/content/artigos/_template.md`? Leia-o — é o formato.

## 1. Entender o artigo (perguntar só o que faltar)

Duas rodadas, sempre curtas:

**1a. Tema e fontes — em texto**, uma mensagem só (pule se o pedido já trouxe o tema; então só
confirme em meia linha):

> "Sobre o que é o artigo e qual a mensagem central, em uma frase? Se quiser citar leis, artigos
> de lei, resoluções ou decisões, me diga também (opcional)."

**1b. Escolhas — com o formulário clicável (ferramenta AskUserQuestion)**, numa única chamada
com as 4 perguntas abaixo. **Limite da ferramenta: de 2 a 4 opções por pergunta** — mais que isso
dá erro. O "Outra" (texto livre) aparece sozinho. Coloque primeiro, marcada *(Recomendada)*, a
opção que você inferiu do tema.

1. **Categoria** — mostre as 4 mais prováveis para o tema; a quinta fica acessível por "Outra".
   As cinco: Conflitos entre Sócios · Contratos Empresariais · Planejamento Sucessório ·
   Governança Empresarial · Investimentos Imobiliários.
2. **Autor** — "Carlos Carmelo Nunes" · "Frederico Augusto Cavalheiro e Carmelo Nunes" ·
   "Carmelo Nunes Sociedade de Advogados (sem assinatura individual)". Se ainda não souber o nº
   da OAB do autor escolhido, peça em texto depois.
3. **Texto** — "Redija para mim — médio (≈900 palavras)" · "Redija — curto (≈500)" ·
   "Redija — longo (≈1.400)" · "Eu tenho o texto pronto (vou colar)".
4. **Público** — "Empresário em geral" · "Sócios de empresa" · "Investidor" · "Família empresária".

Se a pessoa escolher "Eu tenho o texto pronto", peça para colar. Se responder em texto em vez de
clicar, aceite normalmente. Não repita perguntas já respondidas.

## 2. Escrever / revisar

- Estrutura: abertura (por que importa) → 2–4 subtítulos `##` → conclusão sóbria.
- **Regras OAB (Provimento 205/2021) — bloqueantes.** Recuse e reescreva se houver:
  promessa de resultado ou garantia de êxito · "consulta grátis", preço, promoção, urgência
  artificial · comparação com outros escritórios · menção a cliente/caso sem autorização ·
  "especialista" sem título reconhecido. Tom informativo e educativo; CTA no máximo
  "Fale com o escritório".
- `title` claro (≤ 70 chars). `description` ≤ 160 chars, sem reticências.
- Slug: minúsculas, sem acento, hifens, 3–8 palavras (ex.: `acordo-de-socios-pmes`).
  **Nunca reutilize slug existente** (`ls src/content/artigos`).
- Mostre o texto completo ao usuário e peça **"ok"** antes de gravar. Ajuste até aprovar.

## 3. Gravar

Crie `src/content/artigos/<slug>.md` com o frontmatter do template (`title`, `description`,
`category`, `date` = hoje em ISO, `author`, `authorOab`) e o corpo em Markdown.

## 4. Conferir

- `make check` — precisa passar. Se falhar, corrija (geralmente frontmatter) e repita.
- `git status` deve mostrar **só** o novo `.md` (`public/sitemap.xml` é gerado e ignorado pelo git).
- Opcional, se o usuário quiser ver: `make dev` → http://localhost:8080/conteudo/<slug>.

## 5. Publicar

Descubra onde está rodando: se o comando `gh auth status` funciona, é **terminal**; se não
existe `gh` (Claude Code na web / claude.ai/code), é **web**.

**Web (claude.ai/code):**
1. Commit na branch da sessão: `git add src/content/artigos/<slug>.md && git commit -m "feat(conteudo): novo artigo — <título curto>"`.
2. Diga ao usuário, exatamente: **"Pronto. Clique em *Create PR* no topo da tela. Como só o
   artigo foi alterado, a publicação é automática: em cerca de 5 minutos ele estará em
   https://carmelonunes.com.br/conteudo/<slug>. Você receberá um comentário 🚀 *Publicado* no
   PR (e por e-mail do GitHub) quando estiver no ar."**
3. Não tente abrir PR nem fazer merge por comando — a automação (`content-automerge.yml`)
   cuida do merge quando os checks ficarem verdes.

**Terminal:**
```bash
git switch -c artigo/<slug>
git add src/content/artigos/<slug>.md
git commit -m "feat(conteudo): novo artigo — <título curto>"
git push -u origin artigo/<slug>
gh pr create --fill --title "feat(conteudo): <título curto>" --body "Novo artigo em Conteúdo: <título>. Autor: <autor>."
```
O auto-merge é habilitado pela automação; acompanhe com `gh pr checks --watch`. Com tudo
verde o merge acontece sozinho; depois `git switch main && git pull`.
Diga ao usuário: "Publicado. Em ~1 minuto estará em https://carmelonunes.com.br/conteudo/<slug>".
Se algum check falhar, explique em uma frase o que falhou e o que fará; não force nada.

## Alterar ou remover um artigo publicado

Mesmo fluxo, pulando a criação:

- **Alterar** ("corrigir o artigo X", "trocar o título", "acrescentar um parágrafo"): localize o
  arquivo em `src/content/artigos/` pelo título (`grep -l "title:" …`). Mostre o trecho atual e o
  novo, peça **"ok"**, edite o `.md` e atualize `updated:` no frontmatter com a data de hoje.
  **Nunca mude o nome do arquivo (slug)** — a URL do artigo depende dele.
- **Remover** ("tirar o artigo X do ar", "apagar"): confirme o título exato e peça **"ok"**;
  então `git rm src/content/artigos/<slug>.md`. O artigo sai da lista, da página e do sitemap.
- Siga os passos 4 (Conferir) e 5 (Publicar). Como só toca `src/content/artigos/`, publica
  sozinho. Mensagem final: "sua correção está indo pro ar" / "o artigo está saindo do ar".

## 6. Nunca

- Editar arquivos fora de `src/content/artigos/` nesta skill (o guard bloqueia infra).
- Publicar sem "ok" explícito no texto e sem checks verdes.
- Mudar slug de artigo já publicado.
