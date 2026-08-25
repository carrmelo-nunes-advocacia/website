# carmelo-nunes-website

Site institucional da **Carmelo Nunes Advocacia**. Next.js 16 (App Router) + React 19 +
TypeScript + Tailwind. Deploy contínuo na Netlify.

Feito para que **não técnicos editem o site com o Claude Code** e publiquem sem tocar em código.
O portão de qualidade é o `make check`; passou, vai pro ar.

## Começo rápido (macOS / Linux)

```bash
make setup     # instala Node + pnpm + dependências (só na primeira vez)
# abra um NOVO terminal, então:
make dev       # sobe o site em http://localhost:3000
```

## Comandos `make`

| Comando       | O que faz                                              |
| ------------- | ------------------------------------------------------ |
| `make setup`  | Instala Node + pnpm + dependências (rode primeiro)     |
| `make dev`    | Sobe o site com atualização automática                 |
| `make build`  | Build de produção                                      |
| `make check`  | lint + type-check + build — **rode antes de publicar** |
| `make fix`    | Corrige lint e formata                                 |
| `make doctor` | Mostra versões de ferramentas                          |

## Qualidade e segurança (automático)

- **CI** em todo PR: lint (com regras SAST), type-check, build.
- **Lighthouse** em todo PR contra o deploy preview: acessibilidade e boas práticas bloqueiam
  abaixo de 0.9; SEO e performance alertam.
- **Dependabot** semanal (npm + Actions), auto-merge de minor/patch.
- **Cabeçalhos de segurança** (CSP com nonce, HSTS, X-Frame-Options, etc.) em `src/middleware.ts`.
- `main` protegida: só via PR com checks verdes.

Regras e detalhes técnicos: [`CLAUDE.md`](./CLAUDE.md).
