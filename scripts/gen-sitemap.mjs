// Gera public/sitemap.xml a partir das rotas fixas + artigos em src/content/artigos.
// Roda no `prebuild` (pnpm build). Não editar public/sitemap.xml à mão.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const BASE = "https://carmelonunes.com.br";
const FIXED = [
  ["/", "monthly", "1.0"],
  ["/escritorio", "monthly", "0.9"],
  ["/atuacao", "monthly", "0.9"],
  ["/atuacao/direito-empresarial-contratos", "monthly", "0.8"],
  ["/atuacao/direito-societario-conflitos-socios", "monthly", "0.8"],
  ["/atuacao/assessoria-juridica-empresarial", "monthly", "0.8"],
  ["/atuacao/planejamento-sucessorio-empresarios", "monthly", "0.8"],
  ["/atuacao/investimentos-imobiliarios", "monthly", "0.8"],
  ["/conteudo", "weekly", "0.8"],
  ["/contato", "monthly", "0.7"],
  ["/agendamento", "monthly", "0.7"],
  ["/privacidade", "yearly", "0.3"],
];

const artigos = readdirSync("src/content/artigos")
  .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
  .map((f) => {
    const src = readFileSync(`src/content/artigos/${f}`, "utf8");
    const date = (src.match(/^(?:updated|date):\s*"?(\d{4}-\d{2}-\d{2})"?/m) || [])[1];
    return [`/conteudo/${f.replace(/\.md$/, "")}`, "yearly", "0.6", date];
  });

const url = ([path, freq, prio, lastmod]) =>
  `  <url>\n    <loc>${BASE}${path === "/" ? "/" : path}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""}    <changefreq>${freq}</changefreq>\n    <priority>${prio}</priority>\n  </url>`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...FIXED, ...artigos].map(url).join("\n")}\n</urlset>\n`;
writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap: ${FIXED.length} rotas + ${artigos.length} artigos`);
