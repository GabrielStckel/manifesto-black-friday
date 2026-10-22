import { Topbar } from "./Topbar";
import { Hero } from "./Hero";
import { SectionMentiras } from "./SectionMentiras";
import { SectionSetenios } from "./SectionSetenios";
import { SectionParadigma } from "./SectionParadigma";
import { SectionComunidade } from "./SectionComunidade";
import { SectionColetivo } from "./SectionColetivo";
import { SectionTrilhas } from "./SectionTrilhas";
import { SectionDepoimentos } from "./SectionDepoimentos";
import { SectionParaQuem } from "./SectionParaQuem";
import { SectionOferta } from "./SectionOferta";
import { SectionFaq } from "./SectionFaq";
import { Footer } from "./Footer";
import { CtaBar } from "./CtaBar";
import type {
  ManifestoContent,
  ManifestoSection,
} from "../../content/manifesto.types";

// Exaustividade em tempo de compilação: adicionar um novo `kind` à união
// sem tratar aqui quebra o build.
type KindsTratados = "mentiras" | "setenios" | "paradigma" | "comunidade" | "coletivo" | "trilhas" | "depoimentos" | "paraQuem" | "oferta" | "faq" | "rodape";
type _Exaustivo = Exclude<ManifestoSection["kind"], KindsTratados> extends never
  ? true
  : ["kind sem case em ManifestoPage", Exclude<ManifestoSection["kind"], KindsTratados>];
const _exaustivo: _Exaustivo = true;
void _exaustivo;

export function ManifestoPage({ content }: { content: ManifestoContent }) {
  return (
    <main className="relative">
      <Topbar />
      <Hero {...content.hero} />

      {content.sections.map((s, i) => {
        const key = `${s.kind}-${i}`;
        switch (s.kind) {
          case "mentiras":
            return <SectionMentiras key={key} {...s} />;
          case "setenios":
            return <SectionSetenios key={key} {...s} />;
          case "paradigma":
            return <SectionParadigma key={key} {...s} />;
          case "comunidade":
            return <SectionComunidade key={key} {...s} />;
          case "coletivo":
            return <SectionColetivo key={key} {...s} />;
          case "trilhas":
            return <SectionTrilhas key={key} {...s} />;
          case "depoimentos":
            return <SectionDepoimentos key={key} {...s} />;
          case "paraQuem":
            return <SectionParaQuem key={key} {...s} />;
          case "oferta":
            return <SectionOferta key={key} {...s} />;
          case "faq":
            return <SectionFaq key={key} {...s} />;
          case "rodape":
            return <Footer key={key} {...s} />;
        }
      })}

      <div aria-hidden className="h-24" />
      <CtaBar label={content.ctaBar.label} />
    </main>
  );
}
