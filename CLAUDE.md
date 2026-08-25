# carmelo-nunes-website — guia para o Claude Code

Site institucional do escritório **Carmelo Nunes Advocacia**. Next.js 16 (App Router) + React 19 +
TypeScript + Tailwind, em português (pt-BR). Deploy contínuo na Netlify a partir de `main`.

Construído para que **o escritório edite o site com o Claude Code** — principalmente **publicar
novos artigos no blog**, e ocasionalmente trocar textos institucionais — **sem tocar em código ou
git**. O portão de qualidade é o `make check`; se
passar, publica (auto-deploy). Otimize para mudanças seguras e reversíveis.

## Onde as coisas ficam

- **Dados institucionais** (nome, domínio, descrição) — `src/lib/site.ts`. Alimenta metadata,
  JSON-LD e footer. **Técnico.**
- **Rotas publicadas** — `src/lib/routes.ts` → `ALL_ROUTES`. Fonte única que dirige o sitemap.
  **Adicionar página = rota aqui + pasta em `src/app/`.**
- **Blog (o conteúdo principal)** — a criar: um artigo = um arquivo em `src/content/blog/<slug>.mdx`
  (frontmatter: título, descrição, data, autor/OAB, tags). URL `/blog/<slug>`, SEO por artigo
  (JSON-LD `Article`/`BlogPosting`, OG image), entrada automática no sitemap. **Publicar artigo =
  criar o arquivo; nunca mudar o slug de artigo já publicado.**
- **Textos institucionais** (home, sobre, áreas de atuação, equipe, contato, nav, footer) — a
  criar em `src/lib/content/site-copy.ts`. Componentes em `src/components/`.
- **Design tokens** — `src/app/globals.css` (`--ink`, `--paper`, `--accent`). Usar via `var()`,
  nunca hex/px crus.
- **SEO** — `src/app/layout.tsx` (metadata base + JSON-LD `LegalService`), `src/lib/jsonld.ts`,
  `src/app/robots.ts`, `src/app/sitemap.ts`. Cada página exporta seu próprio `metadata`.
- **Segurança** — `src/middleware.ts`: CSP com nonce por request (`strict-dynamic`), HSTS,
  `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy, Permissions-Policy. Scripts inline
  precisam do `nonce` lido de `headers().get("x-nonce")` — ver `layout.tsx`.
- **LGPD** — `src/app/privacidade/` (obrigatória antes de qualquer formulário de contato).

## Regras de conteúdo — publicidade advocatícia (OAB)

O Provimento 205/2021 do CFOAB e o Código de Ética restringem a publicidade da advocacia. Ao
escrever ou revisar texto do site, **não** aceite nem gere:

- Promessa de resultado, garantia de êxito, "ganhe sua causa".
- Captação de clientela: "consulta grátis", preços/promoções, urgência artificial, CTA agressivo.
- Menção a clientes/casos sem autorização; comparação com outros escritórios.
- Termos como "especialista" sem título de especialização reconhecido.

Tom: informativo, sóbrio, educativo. Sempre exibir nome do escritório e número(s) de OAB.
Se um pedido esbarrar nessas regras, explique em uma linha e proponha alternativa.

## Convenções

- **Rode `make check` antes de publicar** — lint + type-check + build. Verde = pode publicar.
- **Nunca mude o path de uma página já publicada** sem adicionar redirect 301 em `netlify.toml`.
- **Commits:** Conventional Commits em PT-BR (`feat(areas): ...`, `fix(seo): ...`).
- **PR obrigatório em `main`** (ruleset): CI `lint · type-check · build` e `lighthouse` precisam
  passar. Dependabot minor/patch faz auto-merge; major exige revisão.

## Guardrails — NÃO edite sem revisão técnica

Um hook `PreToolUse` (`.claude/hooks/guard-editor-edits.sh`) bloqueia edição de arquivos de
config/infra/segurança/SEO numa sessão de conteúdo: `next.config.ts`, `package.json`,
`src/middleware.ts`, `src/lib/site.ts`, `src/lib/routes.ts`, `.github/`, `.claude/`, etc. Para
editá-los de propósito (parte técnica), rode uma vez por clone:

```bash
touch .claude/.allow-infra   # git-ignored; desliga o guard localmente
```

## CI/CD

| Onde                                         | O quê                                                                                                                       |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `.github/workflows/CI.yml`                   | PR + push em main: `pnpm lint`, `type-check`, `build` (SAST via eslint-plugin-security)                                     |
| `.github/workflows/lighthouse.yml`           | PR: aguarda o deploy preview da Netlify e audita a11y/best-practices (bloqueia <0.9), SEO/perf (warn) — `lighthouserc.json` |
| `.github/workflows/dependabot-automerge.yml` | auto-merge de minor/patch do Dependabot                                                                                     |
| `.github/dependabot.yml`                     | npm + github-actions, semanal, cooldown 7 dias, agrupado minor+patch                                                        |
| `netlify.toml`                               | build, plugin Next, redirects 301                                                                                           |

## Fluxo de edição

Para qualquer mudança que o escritório pedir: 1. entenda e confirme o pedido → 2. edite → 3. `make dev` e confira no navegador → 4. `make check` → 5. branch + PR (CI verde) → 6. merge =
publicado. **Sempre em português simples; nunca edite infra (o guard bloqueia); nunca publique
com check vermelho.**

## Pendências de setup (técnico)

- [ ] Confirmar domínio em `src/lib/site.ts` e conectar o site na Netlify (deploy previews públicos, senão o job `lighthouse` não roda).
- [ ] Preencher `address`/`telephone`/OAB no JSON-LD (`src/lib/jsonld.ts`).
- [ ] Redigir Política de Privacidade (LGPD) com o escritório.
- [ ] Mapear URLs do site antigo → redirects 301 em `netlify.toml` antes da virada de DNS.
- [ ] Implementar o blog (MDX + rotas `/blog`, `/blog/<slug>`, JSON-LD `BlogPosting`, sitemap dinâmico).
- [ ] Criar a skill `/novo-artigo` — fluxo de perguntas próprio para artigo (tema, público, tese,
  fontes/legislação citada, revisão OAB), **diferente** do `/update-website` do `yhb-website`.
- [ ] Criar `src/lib/content/site-copy.ts` para textos institucionais.
