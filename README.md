# carmelo-nunes-website

Site institucional do **Carmelo Nunes Sociedade de Advogados**. Vite + React + TypeScript +
Tailwind. Deploy contínuo na Netlify a partir da `main`.

Feito para que **não técnicos editem o site com o Claude Code** e publiquem sem tocar em código.
O portão de qualidade é o `make check`; passou e o PR foi mesclado, vai pro ar.

## Começo rápido (macOS / Linux)

```bash
make setup     # instala Node + pnpm + dependências (só na primeira vez)
# abra um NOVO terminal, então:
make dev       # sobe o site em http://localhost:8080
```

## Comandos `make`

| Comando       | O que faz                                              |
| ------------- | ------------------------------------------------------ |
| `make setup`  | Instala Node + pnpm + dependências (rode primeiro)     |
| `make dev`    | Sobe o site com atualização automática                 |
| `make build`  | Build de produção (`dist/`)                            |
| `make check`  | lint + type-check + build — **rode antes de publicar** |
| `make fix`    | Corrige lint e formata                                 |
| `make doctor` | Mostra versões de ferramentas                          |

## Qualidade e segurança (automático)

- **CI** em todo PR: lint (com regras SAST), type-check, build.
- **Lighthouse** em todo PR contra o deploy preview: acessibilidade e boas práticas bloqueiam
  abaixo de 0.9; SEO e performance alertam.
- **Dependabot** semanal (npm + Actions), auto-merge de minor/patch.
- **Cabeçalhos de segurança** (CSP, HSTS, X-Frame-Options…) em `netlify.toml`.
- **Formulários** via Netlify Forms (com honeypot anti-spam).
- `main` protegida: só via PR com checks verdes.

Regras e detalhes técnicos: [`CLAUDE.md`](./CLAUDE.md). Política de privacidade:
[`docs/POLITICA-DE-PRIVACIDADE.md`](./docs/POLITICA-DE-PRIVACIDADE.md).
