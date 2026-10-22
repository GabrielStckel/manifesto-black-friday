import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionJonas as Props } from "../../content/manifesto.types";

// Quem conduz: retrato 4:5 com borda latão (ou monograma "JP" sem foto) +
// textos. Duas colunas no desktop, empilhado no mobile.
export function SectionJonas({ fundo, eyebrow, nome, textos, credencial, foto }: Props) {
  return (
    <SectionShell fundo={fundo} className="py-16 md:py-24">
      <div className="relative mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-14">
        <Reveal>
          <div className="mx-auto w-full max-w-[300px] md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-brass/35 bg-surface-dark shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)]">
              {foto ? (
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(60% 50% at 50% 40%, var(--brass) 0%, transparent 70%)",
                      opacity: 0.12,
                    }}
                  />
                  <span className="relative font-display text-[64px] font-semibold text-brass md:text-[80px]">
                    JP
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-brass md:text-[12px]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.6rem,6.4vw,2.3rem)] font-semibold leading-[1.1] tracking-[-0.01em]">
            {nome}
          </h2>
          <div className="mt-6 space-y-5">
            {textos.map((texto) => (
              <p key={texto} className="text-[15px] leading-[1.8] text-section-dark-fg/85 md:text-[16.5px]">
                {texto}
              </p>
            ))}
            {credencial && credencial.trim() ? (
              <p className="text-[15px] leading-[1.8] text-section-dark-fg/85 md:text-[16.5px]">
                {credencial}
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
