import { ManifestoCta } from "./ManifestoCta";
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
    <SectionShell fundo={fundo} className="border-t border-brass/25 bg-resumo py-14 md:py-20">
      <div className="relative">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
          <Reveal>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.26em] text-brass-glow md:text-[12px]">
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
            <Reveal key={bloco.rotulo} delay={i * 100} className="rounded-lg border border-border-dark/[0.14] bg-surface-dark p-5">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-brass-glow md:text-[11.5px]">
                {bloco.rotulo}
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-section-dark-fg/95 md:text-[16px]">
                <Negrito texto={bloco.texto} />
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <ManifestoCta href="#planos" className="w-full max-w-[440px] sm:w-auto">{cta}</ManifestoCta>
            <p className="max-w-[40ch] text-[12.5px] leading-snug text-muted-foreground md:text-[13px]">
              {nota}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
