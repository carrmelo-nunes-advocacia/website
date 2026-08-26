#!/usr/bin/env bash
# PreToolUse guard para Edit/Write/MultiEdit.
# Bloqueia edição de arquivos técnicos (config, infra, segurança, SEO) numa sessão de
# conteúdo, para o Claude Code de um não-técnico não mexer em infra por acidente.
# É guardrail contra confusão, NÃO segurança forte — o portão real é `make check` (CI)
# e a revisão técnica.
#
# Bypass técnico: `touch .claude/.allow-infra` (git-ignored) na raiz do repo.
#
# REGRA DE OURO: bloquear por NOME ESPECÍFICO de arquivo, nunca por glob largo tipo
# `src/**` — os arquivos de conteúdo em src/lib/content/ precisam ficar editáveis.

input=$(cat)
repo_root=$(git rev-parse --show-toplevel 2>/dev/null || echo "")

if [ -n "$repo_root" ] && [ -f "$repo_root/.claude/.allow-infra" ]; then
  exit 0
fi

file=$(printf '%s' "$input" \
  | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' \
  | head -1 \
  | sed 's/.*"file_path"[[:space:]]*:[[:space:]]*"//; s/"$//')

[ -z "$file" ] && exit 0

rel="$file"
[ -n "$repo_root" ] && rel="${file#"$repo_root"/}"

block=0
case "$rel" in
  # Config / build / infra
  vite.config.ts|tsconfig*.json|eslint.config.js|tailwind.config.ts|postcss.config.js|components.json|Makefile|netlify.toml|lighthouserc.json) block=1 ;;
  package.json|pnpm-lock.yaml|.nvmrc|.npmrc|.prettierrc|.prettierignore|index.html) block=1 ;;
  # SEO estrutural, formulários e roteamento
  src/App.tsx|src/main.tsx|src/components/SEO.tsx|src/lib/netlify-forms.ts|public/__forms.html|public/robots.txt|public/sitemap.xml|scripts/*|src/lib/artigos.ts|src/pages/Artigo.tsx|src/content/artigos/_template.md) block=1 ;;
  # Biblioteca de componentes base (shadcn) — não é conteúdo
  src/components/ui/*) block=1 ;;
  # CI/deploy e o próprio harness
  .github/*|.claude/*|docs/*) block=1 ;;
esac

if [ "$block" = "1" ]; then
  cat >&2 <<MSG
[guard-editor-edits] BLOQUEADO: "$rel" é arquivo técnico (config, infra, segurança
ou SEO) e não deve ser editado numa sessão de conteúdo. Peça a quem cuida do código.
(Parte técnica: 'touch .claude/.allow-infra' na raiz do repo desbloqueia localmente.)
MSG
  exit 2
fi

exit 0
