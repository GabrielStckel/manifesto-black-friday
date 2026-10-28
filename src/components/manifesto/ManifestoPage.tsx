import { Topbar } from "./Topbar";
import { Hero } from "./Hero";
import { SectionResumo } from "./SectionResumo";
import { SectionPadrao } from "./SectionPadrao";
import { SectionMentiras } from "./SectionMentiras";
import { SectionSetenios } from "./SectionSetenios";
import { SectionParadigma } from "./SectionParadigma";
import { SectionPilares } from "./SectionPilares";
import { SectionTrilhas } from "./SectionTrilhas";
import { SectionPassos7 } from "./SectionPassos7";
import { SectionJonas } from "./SectionJonas";
import { SectionDepoimentos } from "./SectionDepoimentos";
import { SectionParaQuem } from "./SectionParaQuem";
import { SectionOferta } from "./SectionOferta";
import { SectionDoisCaminhos } from "./SectionDoisCaminhos";
import { SectionFaq } from "./SectionFaq";
import { Footer } from "./Footer";
import { CtaBar } from "./CtaBar";
import type {
  ManifestoContent,
  ManifestoSection,
} from "../../content/manifesto.types";

// Exaustividade em tempo de compilação: adicionar um novo `kind` à união
// sem tratar aqui quebra o build.
type KindsTratados = "resumo" | "padrao" | "mentiras" | "setenios" | "paradigma" | "pilares" | "trilhas" | "passos7" | "jonas" | "depoimentos" | "paraQuem" | "oferta" | "doisCaminhos" | "faq" | "rodape";
type _Exaustivo = Exclude<ManifestoSection["kind"], KindsTratados> extends never
  ? true
  : ["kind sem case em ManifestoPage", Exclude<ManifestoSection["kind"], KindsTratados>];
const _exaustivo: _Exaustivo = true;
void _exaustivo;

export function ManifestoPage({ content }: { content: ManifestoContent }) {
  return (
    <main className="relative overflow-x-clip">
      <Topbar />
      <Hero {...content.hero} />

      {content.sections.map((s, i) => {
        const key = `${s.kind}-${i}`;
        switch (s.kind) {
          case "resumo":
            return <SectionResumo key={key} {...s} />;
          case "padrao":
            return <SectionPadrao key={key} {...s} />;
          case "mentiras":
            return <SectionMentiras key={key} {...s} />;
          case "setenios":
            return <SectionSetenios key={key} {...s} />;
          case "paradigma":
            return <SectionParadigma key={key} {...s} />;
          case "pilares":
            return <SectionPilares key={key} {...s} />;
          case "trilhas":
            return <SectionTrilhas key={key} {...s} />;
          case "passos7":
            return <SectionPassos7 key={key} {...s} />;
          case "jonas":
            return <SectionJonas key={key} {...s} />;
          case "depoimentos":
            return <SectionDepoimentos key={key} {...s} />;
          case "paraQuem":
            return <SectionParaQuem key={key} {...s} />;
          case "oferta":
            return <SectionOferta key={key} {...s} />;
          case "doisCaminhos":
            return <SectionDoisCaminhos key={key} {...s} />;
          case "faq":
            return <SectionFaq key={key} {...s} />;
          case "rodape":
            return <Footer key={key} {...s} />;
        }
      })}

      <CtaBar {...content.ctaBar} />
    </main>
  );
}
