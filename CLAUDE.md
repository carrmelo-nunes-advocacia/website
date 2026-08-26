# carmelo-nunes-website — guia para o Claude Code

Site institucional do **Carmelo Nunes Sociedade de Advogados** (Direito Empresarial e Societário,
Av. Paulista, SP, desde 1973). Vite + React 18 + TypeScript + Tailwind/shadcn, react-router,
em português (pt-BR). Código originado no Lovable; hoje o repo é a fonte da verdade.
Deploy contínuo na **Netlify** a partir de `main` (git-connected).

Construído para que **o escritório edite o site com o Claude Code** — principalmente publicar
**artigos em Conteúdo**, e ocasionalmente trocar textos, fotos e sócios — **sem tocar em código
ou git**. O portão de qualidade é o `make check`; se passar, abre PR e o merge publica.
Otimize para mudanças seguras e reversíveis.

## Onde as coisas ficam

- **Páginas** — `src/pages/*.tsx`, uma por rota. Rotas em `src/App.tsx` (**técnico**).
  `/`, `/escritorio`, `/atuacao` + 5 áreas (`/atuacao/<slug>`), `/conteudo`, `/contato`,
  `/agendamento`, `/privacidade`, 404.
- **Áreas de atuação** — cada uma é uma página (`DireitoEmpresarial.tsx`, …) que usa o
  componente `src/components/AreaPage.tsx`. Textos ficam dentro de cada página.
- **Conteúdo / artigos (o conteúdo recorrente)** — um arquivo Markdown por artigo em
  `src/content/artigos/<slug>.md` (frontmatter: `title`, `description`, `category`, `date`,
  `author`, `authorOab`; modelo em `_template.md`). Carregados por `src/lib/artigos.ts`
  (`import.meta.glob` + `marked`), listados em `/conteudo` (`Conteudo.tsx`, filtro por
  categoria) e renderizados em `/conteudo/<slug>` (`Artigo.tsx`, JSON-LD `BlogPosting`).
  **Publicar artigo = criar o `.md`** — a skill `/novo-artigo` faz o fluxo inteiro.
  Categorias fixas em `CATEGORIAS`. Arquivos que começam com `_` são ignorados.
- **Sócios, história, princípios** — `src/pages/Escritorio.tsx`. Fotos em `src/assets/`.
- **Navegação e rodapé** — `src/components/Navbar.tsx`, `src/components/Footer.tsx`
  (telefone, endereço, OAB, link da Privacidade). WhatsApp: `src/components/WhatsAppButton.tsx`.
- **SEO por página** — cada página renderiza `<SEO title description canonical jsonLd />`
  (`src/components/SEO.tsx`, **técnico**). Home tem JSON-LD `LegalService`. `public/sitemap.xml`
  é **gerado no build** por `scripts/gen-sitemap.mjs` (rotas fixas + artigos) — não editar à
  mão; **adicionar página = rota em `App.tsx` + entrada em `FIXED` do script.**
- **Formulários** — `/contato` e `/agendamento` enviam via **Netlify Forms**
  (`src/lib/netlify-forms.ts`; detecção via `public/__forms.html`). Adicionar campo = nos dois
  lugares. Notificações por e-mail configuradas no painel da Netlify.
- **Política de Privacidade (LGPD)** — texto-fonte em `docs/POLITICA-DE-PRIVACIDADE.md`;
  página em `src/pages/Privacidade.tsx`. Placeholders a preencher: CNPJ, nº OAB, DPO.
- **Design tokens** — `src/index.css` (HSL: navy `--background`, dourado `--primary`,
  `--radius`), `tailwind.config.ts`. Fontes Playfair Display (títulos) + Inter (corpo).
  Usar classes/tokens, não hex crus.
- **Segurança** — cabeçalhos (CSP, HSTS, X-Frame-Options…) em `netlify.toml` `[[headers]]`.
  Se adicionar script/imagem externa, ajustar a CSP lá.

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
- **Imagens:** JPEG q≈80, máx. 1600 px, < 200 KB. Em `src/assets/` (importadas) ou `public/`.
- **Commits:** Conventional Commits em PT-BR (`feat(conteudo): ...`, `fix(seo): ...`).
- **PR obrigatório em `main`**: CI `lint · type-check · build` e `lighthouse` precisam passar.
  Dependabot minor/patch faz auto-merge; major exige revisão.

## Guardrails — NÃO edite sem revisão técnica

Um hook `PreToolUse` (`.claude/hooks/guard-editor-edits.sh`) bloqueia edição de arquivos de
config/infra/segurança/SEO numa sessão de conteúdo: `vite.config.ts`, `package.json`,
`netlify.toml`, `src/App.tsx`, `src/components/SEO.tsx`, `src/components/ui/`, `.github/`,
`.claude/`, etc. Para editá-los de propósito (parte técnica), rode uma vez por clone:

```bash
touch .claude/.allow-infra   # git-ignored; desliga o guard localmente
```

## CI/CD

| Onde                                         | O quê                                                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `.github/workflows/CI.yml`                   | PR + push em main: `pnpm lint` (SAST via eslint-plugin-security), `type-check`, `build`               |
| `.github/workflows/lighthouse.yml`           | PR: aguarda o deploy preview da Netlify e audita a11y/best-practices (bloqueia <0.9), SEO/perf (warn) |
| `.github/workflows/dependabot-automerge.yml` | auto-merge de minor/patch do Dependabot                                                               |
| `.github/dependabot.yml`                     | npm + github-actions, semanal, cooldown 7 dias, agrupado minor+patch                                  |
| `netlify.toml`                               | build Vite → `dist`, headers de segurança, SPA fallback, redirects                                    |

## Fluxo de edição

Para qualquer mudança que o escritório pedir: 1. entenda e confirme o pedido → 2. edite → 3. `make dev` (localhost:8080) e confira → 4. `make check` → 5. branch + PR (CI verde) → 6. merge = publicado em ~1 min. **Sempre em português simples; nunca edite infra (o guard
bloqueia); nunca publique com check vermelho.**

**Claude Design** é só para desenhar peças novas (importando este repo como contexto) e fazer
_Handoff to Claude Code_. **Nunca** usar o "Deploy to Netlify" do Claude Design no site de
produção — ele sobrescreve o site com o protótipo.

## Pendências (técnico)

- [ ] Conectar a Netlify ao repo (build `pnpm build`, publish `dist`); deploy previews públicos.
- [ ] Netlify → Forms → notificação por e-mail para `secretaria@carmelonunes.com.br`.
- [ ] Domínio `carmelonunes.com.br` (HostGator) → Netlify + DNS, só após validação completa; redirects 301 do WordPress já em `netlify.toml`.
- [ ] Preencher CNPJ, nº OAB/SP (Footer e Privacidade) e nome do DPO; criar `privacidade@carmelonunes.com.br`. (Site antigo não tem esses dados — pedir ao escritório.)
- [ ] Primeiro artigo real (hoje `/conteudo` mostra "Em breve") — via `/novo-artigo`.
- [ ] Rever `public/llms.txt` e `public/placeholder.svg` (herança Lovable).
