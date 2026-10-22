import { Check, Minus } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionParaQuem as SectionParaQuemType } from "../../content/manifesto.types";

export function SectionParaQuem({
  fundo,
  eyebrow,
  titulo,
  paraVoce,
  naoParaVoce,
}: SectionParaQuemType) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden bg-surface-dark">
      {/* Luz superior em latão */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 40% at 50% 0%, var(--brass) 0%, transparent 70%)",
          opacity: 0.1,
        }}
      />

      <div className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-brass md:text-[12px]">
            {eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-center font-display text-[clamp(1.5rem,6.4vw,2.2rem)] font-semibold leading-[1.14] tracking-[-0.015em] md:text-[clamp(1.6rem,2.9vw,2.25rem)] md:leading-[1.1]">
            {titulo}
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:mt-14 md:grid-cols-2 md:gap-7">
          <Reveal delay={80}>
            <div className="h-full rounded-xl border border-brass/30 bg-white/[0.035] p-6 md:p-8">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[12px]">
                É para você se
              </p>
              <ul className="mt-6 space-y-4">
                {paraVoce.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-left text-[14.5px] leading-relaxed text-section-dark-fg/85 md:text-[15.5px]"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-brass/10"
                    >
                      <Check className="h-3.5 w-3.5 text-brass" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="h-full rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-muted-foreground md:text-[12px]">
                Não é para você se
              </p>
              <ul className="mt-6 space-y-4">
                {naoParaVoce.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-left text-[14.5px] leading-relaxed text-section-dark-fg/70 md:text-[15.5px]"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]"
                    >
                      <Minus className="h-3.5 w-3.5 text-muted-foreground" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
