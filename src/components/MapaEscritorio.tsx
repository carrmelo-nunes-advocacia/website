import { ExternalLink } from "lucide-react";

// Mapa do escritório (Av. Paulista, 509 — Bela Vista, São Paulo).
// Usa OpenStreetMap em vez do Google Maps: sem cookies de rastreamento, coerente com a
// Política de Privacidade. Os botões abrem o app de mapas do visitante fora do site.
const LAT = -23.5705;
const LON = -46.6452;
const D = 0.004; // ~400 m de raio
const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${LON - D}%2C${LAT - D}%2C${LON + D}%2C${LAT + D}&layer=mapnik&marker=${LAT}%2C${LON}`;
const GOOGLE = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Av. Paulista, 509, Bela Vista, São Paulo - SP")}`;
const WAZE = `https://waze.com/ul?ll=${LAT},${LON}&navigate=yes`;

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
    </div>
  </div>
);

export default MapaEscritorio;
