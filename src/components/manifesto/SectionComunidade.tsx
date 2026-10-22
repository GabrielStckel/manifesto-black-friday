import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionComunidade as SectionComunidadeType } from "../../content/manifesto.types";

export function SectionComunidade({
  fundo,
  titulo,
  texto,
}: SectionComunidadeType) {
  const [primeiraLetra, ...resto] = texto;

  return (
    <SectionShell fundo={fundo} className="overflow-hidden md:py-36">
      {/* Luz quente central */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 55% at 50% 22%, var(--red-accent) 0%, transparent 62%)",
          opacity: 0.35,
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Ornamento superior */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-on-red/60 md:w-20" />
          <span className="h-1.5 w-1.5 rotate-45 border border-on-red/70" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-on-red/60 md:w-20" />
        </div>

        <Reveal>
          <h2 className="mt-8 whitespace-pre-line text-balance font-display text-[clamp(1.45rem,5.8vw,2rem)] font-semibold leading-[1.18] tracking-[-0.015em] text-section-red-fg md:mt-10 md:text-[clamp(1.55rem,2.7vw,2.05rem)] md:leading-[1.12]">
            {titulo}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mx-auto mt-10 max-w-[60ch] md:mt-12">
            {/* Cantoneiras em latão */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 h-6 w-6 border-l border-t border-on-red/45 md:-left-6 md:-top-6 md:h-10 md:w-10"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-on-red/45 md:-bottom-6 md:-right-6 md:h-10 md:w-10"
            />

            <p className="text-left text-[16.5px] leading-[1.8] text-section-red-fg/85 sm:text-[18px] md:text-justify md:hyphens-auto md:text-[18px] md:leading-[1.85]">
              <span className="float-left mr-3 mt-1 font-display text-[3.1rem] font-semibold leading-[0.78] text-on-red md:mr-4 md:text-[3.6rem]">
                {primeiraLetra}
              </span>
              {resto.join("")}
            </p>
          </div>
        </Reveal>

        {/* Ornamento inferior */}
        <div
          aria-hidden="true"
          className="mt-12 flex items-center justify-center gap-3 md:mt-16"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-on-red/40 md:w-24" />
          <span className="h-1 w-1 rotate-45 bg-on-red/60" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-on-red/40 md:w-24" />
        </div>
      </div>
    </SectionShell>
  );
}
