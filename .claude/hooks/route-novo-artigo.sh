#!/usr/bin/env bash
# UserPromptSubmit: se o pedido parece "coisa de artigo/blog" do escritório, injeta um lembrete de
# roteamento para a skill /novo-artigo ANTES do Claude agir — para o tom sem jargão e o fluxo
# não dependerem da memória do modelo. Nunca bloqueia (exit 0). Só roda no terminal (na web os
# hooks não executam; lá o CLAUDE.md e a description da skill fazem esse papel).
input=$(cat)
repo_root=$(git rev-parse --show-toplevel 2>/dev/null || echo "")
[ -n "$repo_root" ] && [ -f "$repo_root/.claude/.allow-infra" ] && exit 0
if printf '%s' "$input" | grep -iqE 'artigo|blog|conte[uú]do|postar|publicar|p[oõ]e no ar|no ar\b|texto (pro|para o) site'; then
  cat <<'MSG'
🔔 [route-novo-artigo] Este pedido parece ser sobre ARTIGO/BLOG do escritório.
Entre pelo ciclo da skill /novo-artigo antes de mexer em qualquer coisa:
• Português simples, SEM jargão — nada de build/commit/deploy/PR/lint, nomes de arquivo ou pastas.
• Fale do ARTIGO, não do código. Mostre o texto para aprovação e espere o "ok".
• Regras da OAB (Provimento 205/2021) são bloqueantes.
• Pôr no ar = abrir o PR que se mescla sozinho quando a conferência passa; explique que é automático.
Sessão técnica deliberada? `touch .claude/.allow-infra` silencia este aviso.
MSG
fi
exit 0
