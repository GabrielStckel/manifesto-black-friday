import { ArrowRight } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { ContadorOferta } from "./ContadorOferta";
import { Negrito } from "./Negrito";
import { TEM_PRAZO } from "../../lib/config";
import type { SectionResumo as Props } from "../../content/manifesto.types";

// Faixa de resumo logo abaixo do hero: para quem já conhece o Jonas e quer
// ir direto ao ponto. Fundo preto com borda superior em latão.
export function SectionResumo({ fundo, eyebrow, titulo, blocos, cta, nota }: Props) {
  return (
    <SectionShell fundo={fundo} className="border-t border-brass/25 bg-bg-black py-14 md:py-20">
      <div className="relative">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
          <Reveal>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-brass md:text-[12px]">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl text-balance font-display text-[clamp(1.5rem,6vw,2.1rem)] font-semibold leading-[1.15] tracking-[-0.01em]">
              {titulo}
            </h2>
          </Reveal>
          {TEM_PRAZO ? (
            <Reveal delay={100} className="w-full md:w-[340px]">
              <ContadorOferta variante="compacto" />
            </Reveal>
          ) : null}
        </div>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-10">
          {blocos.map((bloco, i) => (
            <Reveal key={bloco.rotulo} delay={i * 100}>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[11.5px]">
                {bloco.rotulo}
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-section-dark-fg/85 md:text-[16px]">
                <Negrito texto={bloco.texto} />
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="#planos"
              className="group relative inline-flex min-h-[54px] w-full items-center justify-center gap-2 overflow-hidden rounded-cta border border-white/15 bg-gradient-to-b from-red-primary to-red-primary-hover px-6 text-center text-[13.5px] font-bold uppercase leading-snug tracking-[0.06em] text-on-red shadow-[0_0_28px_rgba(211,58,52,0.28)] transition-all hover:shadow-[0_0_40px_rgba(211,58,52,0.42)] hover:brightness-110 active:scale-[0.98] sm:w-auto md:text-[14.5px]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"
              />
              <span className="relative z-10">{cta}</span>
              <ArrowRight
                aria-hidden="true"
                className="relative z-10 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
              />
            </a>
            <p className="max-w-[40ch] text-[12.5px] leading-snug text-muted-foreground md:text-[13px]">
              {nota}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
