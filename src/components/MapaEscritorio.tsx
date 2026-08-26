import { ExternalLink, Star } from "lucide-react";

// Mapa do escritório (Av. Paulista, 509 — Bela Vista, São Paulo).
// Usa OpenStreetMap em vez do Google Maps: sem cookies de rastreamento, coerente com a
// Política de Privacidade. Os botões abrem o app de mapas do visitante fora do site.
// Edifício Patrimônio, Av. Paulista 509 (geocodificado em 2026-08-26, OSM/Nominatim).
const LAT = -23.56838;
const LON = -46.64879;
const ENDERECO = "Av. Paulista, 509 - Bela Vista, São Paulo - SP, 01311-000";
const D = 0.004; // ~400 m de raio
const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${LON - D}%2C${LAT - D}%2C${LON + D}%2C${LAT + D}&layer=mapnik&marker=${LAT}%2C${LON}`;
const GOOGLE = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`;
// Avaliação no Google. TODO: trocar pelo link oficial do Perfil da Empresa
// (Perfil da Empresa → "Pedir avaliações" → https://g.page/r/<código>/review).
export const GOOGLE_REVIEW = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Carmelo Nunes Sociedade de Advogados, " + ENDERECO)}`;
const WAZE = `https://waze.com/ul?q=${encodeURIComponent(ENDERECO)}&ll=${LAT}%2C${LON}&navigate=yes`;

const MapaEscritorio = () => (
  <div className="card-shadow rounded-lg bg-card overflow-hidden">
    <iframe
      title="Mapa — localização do escritório na Av. Paulista, 509"
      src={OSM_EMBED}
      className="w-full h-56 border-0 [filter:grayscale(1)_invert(0.92)_hue-rotate(180deg)_brightness(0.9)_contrast(0.9)]"
      loading="lazy"
      referrerPolicy="no-referrer"
    />
    <div className="p-4 flex flex-wrap gap-2">
      <a
        href={GOOGLE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase font-semibold text-primary border border-primary/30 rounded-sm px-3 py-2 hover:bg-primary/10 transition-colors"
      >
        Abrir no Google Maps <ExternalLink size={12} strokeWidth={1.5} />
      </a>
      <a
        href={WAZE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase font-semibold text-primary border border-primary/30 rounded-sm px-3 py-2 hover:bg-primary/10 transition-colors"
      >
        Abrir no Waze <ExternalLink size={12} strokeWidth={1.5} />
      </a>
      <a
        href={GOOGLE_REVIEW}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase font-semibold text-primary-foreground bg-primary rounded-sm px-3 py-2 hover:opacity-90 transition-opacity"
      >
        <Star size={12} strokeWidth={1.5} /> Avalie-nos no Google
      </a>
    </div>
  </div>
);

export default MapaEscritorio;
