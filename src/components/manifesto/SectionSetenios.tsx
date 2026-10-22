import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionSetenios as SectionSeteniosType } from "../../content/manifesto.types";

export function SectionSetenios({
  fundo,
  titulo,
  abertura,
  elos,
}: SectionSeteniosType) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, var(--red-deep) 0%, transparent 62%)",
          opacity: 0.3,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/30 to-transparent"
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-brass md:text-[12px]">
              Os três primeiros setênios
            </p>
            <h2 className="mx-auto max-w-[24ch] text-pretty text-center font-display font-semibold leading-[1.35] tracking-[-0.01em] text-section-dark-fg text-[clamp(1.02rem,4.4vw,1.4rem)] sm:max-w-[26ch] sm:text-[clamp(1.15rem,4.8vw,1.6rem)] md:mt-5 md:max-w-3xl md:text-pretty md:text-[clamp(1.5rem,2.8vw,2.1rem)] md:leading-[1.12]">
              {titulo}
            </h2>
            <div aria-hidden className="mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-brass/60 md:w-16" />
              <span className="h-1 w-1 rotate-45 bg-brass" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-brass/60 md:w-16" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-7 max-w-[60ch] text-left hyphens-auto md:text-justify text-[15px] leading-relaxed text-section-dark-fg/80 sm:text-base md:text-[17px] md:leading-[1.75]">
              {abertura}
            </p>
          </Reveal>
        </div>

        <ol className="relative mx-auto mt-14 max-w-3xl md:mt-16">
          {elos.map((elo, i) => (
            <Reveal
              as="li"
              key={elo.titulo}
              delay={i * 120}
              className="relative block pl-12 pb-8 last:pb-0 md:pl-16"
            >
              {i < elos.length - 1 ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-[17px] top-10 -bottom-1 w-px bg-gradient-to-b from-brass/50 via-brass/20 to-transparent md:left-[23px]"
                />
              ) : null}

              <span
                aria-hidden
                className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-brass/45 bg-black/60 font-display text-[12px] font-semibold text-brass shadow-[0_0_28px_-6px_var(--brass)] md:h-12 md:w-12 md:text-[14px]"
              >
                {String(i + 1).padStart(2, "0")}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-[-6px] rounded-full border border-brass/15"
                />
              </span>

              <div className="rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.015] p-5 transition-colors hover:border-brass/35 md:p-7">
                <h3 className="font-display text-[17px] font-semibold leading-snug text-section-dark-fg sm:text-[19px] md:text-[20px]">
                  {elo.titulo}
                </h3>
                <p className="mt-3 max-w-[64ch] text-left hyphens-auto md:text-justify text-[15px] leading-relaxed text-section-dark-fg/75 sm:text-base md:text-[17px] md:leading-[1.75]">
                  {elo.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
