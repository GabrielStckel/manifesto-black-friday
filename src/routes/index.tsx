import { createFileRoute } from "@tanstack/react-router";
import { ManifestoPage } from "../components/manifesto/ManifestoPage";
import { manifesto } from "../content/manifesto";
import type { ManifestoSection } from "../content/manifesto.types";
import { TEM_VSL, VTURB_SCRIPT, VTURB_LIB, VTURB_HLS } from "../lib/config";

const faqSection = manifesto.sections.find(
  (s): s is Extract<ManifestoSection, { kind: "faq" }> => s.kind === "faq",
);

const FAQ_LD = faqSection
  ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqSection.itens.map((item) => ({
        "@type": "Question",
        name: item.pergunta,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.resposta,
        },
      })),
    }
  : null;

const OG_IMAGE = "https://manifestosistemico.com.br/og-black-friday.jpg";
const OG_IMAGE_ALT = "Black Friday do Manifesto Sistêmico com Jonas Peres";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: manifesto.meta.title },
      { name: "description", content: manifesto.meta.description },
      { property: "og:title", content: manifesto.meta.ogTitle },
      { property: "og:description", content: manifesto.meta.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Manifesto Sistêmico" },
      { property: "og:url", content: "https://manifestosistemico.com.br/" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: manifesto.meta.ogTitle },
      { name: "twitter:description", content: manifesto.meta.ogDescription },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [
      { rel: "canonical", href: "https://manifestosistemico.com.br/" },
      ...(TEM_VSL
        ? [
            { rel: "preconnect", href: "https://scripts.converteai.net" },
            { rel: "preconnect", href: "https://cdn.converteai.net" },
            { rel: "preload", as: "script", href: VTURB_SCRIPT },
            { rel: "preload", as: "script", href: VTURB_LIB },
            { rel: "preload", as: "fetch", href: VTURB_HLS, crossOrigin: "anonymous" },
            { rel: "dns-prefetch", href: "https://cdn.converteai.net" },
            { rel: "dns-prefetch", href: "https://scripts.converteai.net" },
            { rel: "dns-prefetch", href: "https://images.converteai.net" },
            { rel: "dns-prefetch", href: "https://license.vturb.com" },
          ]
        : []),
    ],
    scripts: FAQ_LD
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(FAQ_LD),
          },
        ]
      : [],
  }),
  component: Index,
});

function Index() {
  return <ManifestoPage content={manifesto} />;
}
