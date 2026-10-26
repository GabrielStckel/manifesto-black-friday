import { MarkedTitle } from "./MarkedTitle";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionPassos7 as Props } from "../../content/manifesto.types";

// Primeiros 7 dias: três passos com círculo numerado ligados por linha
// (empilhados no mobile), sobre pergaminho.
export function SectionPassos7({ fundo, eyebrow, titulo, passos }: Props) {
  return (
    <SectionShell fundo={fundo} className="py-14 md:py-24">
      <div className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.26em] text-brass-ink md:text-[12px]">
            {eyebrow}
          </p>
          <MarkedTitle text={titulo} phrase="se o Manifesto é para você" className="mt-4 text-balance font-display text-[clamp(1.5rem,6vw,2.1rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-section-light-fg" />
        </Reveal>

        <ol className="relative mx-auto mt-12 grid max-w-4xl gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
          {/* Linha ligando os círculos (desktop) */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[16%] right-[16%] top-6 hidden h-px bg-bg-black/15 md:block"
          />
          {passos.map((passo, i) => (
            <Reveal as="li" key={passo.titulo} delay={i * 120} className="relative grid grid-cols-[44px_1fr] items-start gap-[14px] text-left md:block md:text-center">
              <span className="medallion step-medallion relative z-10 md:mx-auto">
                {i + 1}
              </span>
              <div className="min-w-0">
              <h3 className="font-display md:mt-5 text-[18px] font-semibold leading-snug text-section-light-fg md:text-[19px]">
                {passo.titulo}
              </h3>
              <p className="texto texto-centro-md mt-2 md:mx-auto md:mt-3 md:max-w-[34ch] text-[14.5px] leading-[1.7] text-section-light-fg/80 md:text-[15px]">
                {passo.texto}
              </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
