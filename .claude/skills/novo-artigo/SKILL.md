---
name: novo-artigo
description: Publica um novo artigo em Conteúdo (blog) do site Carmelo Nunes — faz as perguntas certas, escreve/revisa o texto dentro das regras da OAB, cria o arquivo Markdown, roda o check e abre o PR para publicar. Use quando o usuário disser "novo artigo", "publicar artigo", "escrever um texto para o blog", "postar em Conteúdo".
---

# /novo-artigo — publicar artigo em Conteúdo

Fale sempre em português simples. O usuário é advogado, não técnico. Nunca mostre código;
mostre o **texto** do artigo para ele aprovar.

## 0. Preflight

- `git status` limpo e na `main` atualizada (`git switch main && git pull`). Se houver
  alterações pendentes, avise e pare.
- Existe `src/content/artigos/_template.md`? Leia-o — é o formato.

## 1. Entender o artigo (perguntar só o que faltar)

Pergunte de uma vez, em lista curta:

1. **Tema e tese** — sobre o que é e qual a mensagem central em uma frase?
2. **Categoria** — uma de: Conflitos entre Sócios · Contratos Empresariais · Planejamento
   Sucessório · Governança Empresarial · Investimentos Imobiliários.
3. **Autor** — qual sócio assina (nome + OAB)?
4. **Texto** — ele já tem o texto pronto (colar) ou quer que eu redija a partir de um rascunho/
   tópicos? Se redigir: público-alvo (empresário, sócio, investidor, família empresária) e
   tamanho (curto ≈ 500 palavras · médio ≈ 900 · longo ≈ 1.400).
5. **Fontes** — legislação, súmulas ou decisões a citar (opcional).

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
- Opcional, se o usuário quiser ver: `make dev` → http://localhost:8080/conteudo/<slug>.

## 5. Publicar

```bash
git switch -c artigo/<slug>
git add src/content/artigos/<slug>.md
git commit -m "feat(conteudo): novo artigo — <título curto>"
git push -u origin artigo/<slug>
gh pr create --fill --title "feat(conteudo): <título curto>" --body "Novo artigo em Conteúdo: <título>. Autor: <autor>."
```

Aguarde os checks (`gh pr checks --watch`). Com tudo verde:

```bash
gh pr merge --squash --delete-branch
git switch main && git pull
```

Diga ao usuário: "Publicado. Em ~1 minuto estará em https://carmelonunes.com.br/conteudo/<slug>".
Se algum check falhar, explique em uma frase o que falhou e o que fará; não faça merge.

## 6. Nunca

- Editar arquivos fora de `src/content/artigos/` nesta skill (o guard bloqueia infra).
- Publicar sem "ok" explícito no texto e sem checks verdes.
- Mudar slug de artigo já publicado.
