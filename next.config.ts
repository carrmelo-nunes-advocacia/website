import type { NextConfig } from "next";

// Cabeçalhos de segurança + CSP (com nonce) ficam no middleware (src/middleware.ts),
// por request — necessário para a CSP baseada em nonce que permite o Next hidratar
// mantendo script-src estrito.
const nextConfig: NextConfig = {
  images: {
    // Adicionar aqui hosts externos de imagem (ex.: CDN/R2) se vierem a existir.
    remotePatterns: [],
    qualities: [75, 92],
  },
};

export default nextConfig;
