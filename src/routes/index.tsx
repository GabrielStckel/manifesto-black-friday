import { createFileRoute } from "@tanstack/react-router";
import { ManifestoPage } from "../components/manifesto/ManifestoPage";
import { manifesto } from "../content/manifesto";
import type { ManifestoSection } from "../content/manifesto.types";

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
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: manifesto.meta.ogTitle },
      { name: "twitter:description", content: manifesto.meta.ogDescription },
    ],
    links: [{ rel: "canonical", href: "https://manifestosistemico.com.br/" }],
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

