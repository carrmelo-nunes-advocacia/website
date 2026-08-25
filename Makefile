# Carmelo Nunes Advocacia — site. Comandos simples para quem edita o site.
# Carrega o Node via nvm em cada alvo (os que rodam node/pnpm).
SHELL := /bin/bash
NVM := export NVM_DIR="$$HOME/.nvm"; [ -s "$$NVM_DIR/nvm.sh" ] && . "$$NVM_DIR/nvm.sh" >/dev/null 2>&1; nvm use >/dev/null 2>&1;

.PHONY: setup dev build start check fix doctor clean

## Instala Node + pnpm + dependências (rode isto primeiro)
setup:
	@echo "==> Preparando o site (só na primeira vez)…"
	@export NVM_DIR="$$HOME/.nvm"; [ -s "$$NVM_DIR/nvm.sh" ] || (curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash); \
	  . "$$NVM_DIR/nvm.sh"; nvm install; nvm use; corepack enable; corepack prepare pnpm@10.34.4 --activate; pnpm install
	@echo "==> Pronto. Abra um NOVO terminal e rode: make dev"

## Sobe o site com atualização automática — veja suas mudanças ao vivo
dev:
	@$(NVM) pnpm dev

## Build de produção
build:
	@$(NVM) pnpm build

## Build + serve (mais próximo de produção)
start:
	@$(NVM) pnpm build && pnpm start

## lint + type-check + build — RODE ISTO ANTES DE PUBLICAR (é o portão de qualidade)
check:
	@$(NVM) pnpm lint && pnpm type-check && pnpm build

## Corrige lint e formata
fix:
	@$(NVM) pnpm lint --fix; pnpm format

## Mostra versões de ferramentas (útil quando algo dá errado)
doctor:
	@$(NVM) echo "OS: $$(uname -a)"; node -v; pnpm -v

## Remove build e dependências
clean:
	@rm -rf .next node_modules
