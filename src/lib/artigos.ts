// Artigos do blog: um arquivo Markdown por artigo em src/content/artigos/<slug>.md,
// com frontmatter YAML simples (chave: valor). O slug é o nome do arquivo.
import { marked } from "marked";

export const CATEGORIAS = [
  "Conflitos entre Sócios",
  "Contratos Empresariais",
  "Planejamento Sucessório",
  "Governança Empresarial",
  "Investimentos Imobiliários",
] as const;
export type Categoria = (typeof CATEGORIAS)[number];

export interface Artigo {
  slug: string;
  title: string;
  description: string; // resumo (card + meta description), ≤ 160 chars
  category: Categoria;
  date: string; // ISO: 2026-08-26
  author: string; // "Carlos Carmelo Nunes"
  authorOab?: string; // "OAB/SP 12.345"
  updated?: string; // ISO
  html: string; // corpo renderizado
}

const RAW = import.meta.glob("/src/content/artigos/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(src: string): { meta: Record<string, string>; body: string } {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: src };
  const meta: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i < 0) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'")))
      val = val.slice(1, -1);
    meta[key] = val;
  }
  return { meta, body: m[2] };
}

function build(): Artigo[] {
  const list: Artigo[] = [];
  for (const [path, src] of Object.entries(RAW)) {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    if (slug.startsWith("_")) continue; // _template.md etc.
    const { meta, body } = parseFrontmatter(src);
    if (!meta.title || !meta.date || !meta.category) {
      console.warn(`[artigos] ${slug}: frontmatter incompleto (title/date/category)`);
      continue;
    }
    list.push({
      slug,
      title: meta.title,
      description: meta.description ?? "",
      category: meta.category as Categoria,
      date: meta.date,
      author: meta.author ?? "Carmelo Nunes Sociedade de Advogados",
      authorOab: meta.authorOab,
      updated: meta.updated,
      html: marked.parse(body, { async: false }) as string,
    });
  }
  return list.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const ARTIGOS: Artigo[] = build();

export const getArtigo = (slug: string) => ARTIGOS.find((a) => a.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
