import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// schema.org LegalService — o tipo correto para escritório de advocacia.
// Preencher address/telephone/areaServed quando confirmados.
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    // address: { "@type": "PostalAddress", streetAddress: "", addressLocality: "", addressRegion: "", postalCode: "", addressCountry: "BR" },
    // telephone: "+55 ...",
  };
}
