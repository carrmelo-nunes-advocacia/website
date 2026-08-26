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

**Pergunte em texto simples, numa única mensagem, como lista numerada.** Não use a ferramenta
de formulário de perguntas (AskUserQuestion): ela limita a 4 opções e as categorias são 5, o que
gera erro. O usuário responde em texto livre.

Modelo da mensagem:

> Para escrever o artigo, me diga:
> 1. **Tema e mensagem central** — sobre o que é e qual a ideia principal, em uma frase.
> 2. **Categoria** — Conflitos entre Sócios · Contratos Empresariais · Planejamento Sucessório ·
>    Governança Empresarial · Investimentos Imobiliários.
> 3. **Autor** — nome do sócio que assina e número da OAB.
> 4. **Texto** — você já tem o texto pronto (cole aqui) ou quer que eu redija? Se eu redigir:
>    para quem é (empresário, sócio, investidor, família empresária) e tamanho (curto ≈ 500
>    palavras · médio ≈ 900 · longo ≈ 1.400).
> 5. **Fontes** (opcional) — leis, artigos de lei, súmulas ou decisões a citar.

Se a resposta vier incompleta, pergunte só o que faltou. Se a categoria não bater exatamente com
uma das cinco, proponha a mais próxima e confirme.

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

## 6. Nunca

- Editar arquivos fora de `src/content/artigos/` nesta skill (o guard bloqueia infra).
- Publicar sem "ok" explícito no texto e sem checks verdes.
- Mudar slug de artigo já publicado.
