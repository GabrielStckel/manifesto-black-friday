import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionColetivo as SectionColetivoType } from "../../content/manifesto.types";

export function SectionColetivo({
  fundo,
  titulo,
  texto,
}: SectionColetivoType) {
  return (
    <SectionShell fundo={fundo} className="py-20 md:py-36">
      {/* Profundidade: brilho central quente + vinheta nas bordas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 55% at 50% 32%, var(--red-accent) 0%, transparent 62%)",
          opacity: 0.35,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(95% 75% at 50% 42%, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Moldura editorial */}
        <div className="relative px-1 py-2 sm:px-8 md:px-14 md:py-6">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 hidden h-14 w-14 border-l border-t border-on-red/25 md:block"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 hidden h-14 w-14 border-b border-r border-on-red/25 md:block"
          />

          <Reveal>
            <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.26em] text-on-red/60 md:text-[12px]">
              O campo mórfico
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-center font-display font-semibold leading-[1.08] tracking-[-0.01em] text-section-red-fg text-[clamp(1.85rem,7.6vw,2.6rem)] md:mt-6 md:text-[clamp(1.85rem,3.3vw,2.6rem)]">
              {titulo}
            </h2>
          </Reveal>

          {/* Divisor com losango */}
          <div aria-hidden className="mt-8 flex items-center justify-center gap-3 md:mt-10">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-on-red/45 md:w-20" />
            <span className="h-1.5 w-1.5 rotate-45 bg-on-red/70" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-on-red/45 md:w-20" />
          </div>

          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-[40ch] text-justify hyphens-auto text-[16.5px] leading-[1.8] text-section-red-fg/90 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[3.1rem] first-letter:font-semibold first-letter:leading-[0.82] first-letter:text-on-red sm:max-w-[60ch] sm:text-[18.5px] md:mt-10 md:text-[18px] md:leading-[1.85] md:first-letter:text-[3.4rem] md:first-letter:mr-4">
              {texto}
            </p>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
