import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionJonas as Props } from "../../content/manifesto.types";

// Quem conduz. Celular: olho + nome centralizados, foto, textos.
// Desktop: foto à esquerda (até 380px) e cabeçalho + textos à direita.
// Sem foto, mostra o monograma "JP".
export function SectionJonas({ fundo, eyebrow, nome, textos, credencial, foto }: Props) {
  return (
    <SectionShell fundo={fundo} className="py-14 md:py-24">
      <div className="relative mx-auto grid max-w-4xl gap-8 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] md:grid-rows-[auto_1fr] md:gap-x-14 md:gap-y-0">
        <Reveal className="text-center md:col-start-2 md:row-start-1 md:self-end md:text-left">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.26em] text-brass-glow md:text-[12px]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.6rem,6.4vw,2.3rem)] font-semibold leading-[1.1] tracking-[-0.01em]">
            {nome}
          </h2>
        </Reveal>

        <Reveal className="md:col-start-1 md:row-span-2 md:row-start-1 md:self-center">
          <div className="mx-auto w-full max-w-[400px] md:max-w-[380px]">
            <div className="jonas-foto relative aspect-[4/5] overflow-hidden bg-surface-dark">
              {foto ? (
                <img
                  src={foto.src}
                  srcSet={foto.srcSet}
                  sizes="(min-width: 768px) 380px, 100vw"
                  width={720}
                  height={900}
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
                  <span className="relative font-display text-[64px] font-semibold text-brass-glow md:text-[80px]">
                    JP
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-start-2 md:row-start-2">
          <div className="space-y-5 md:mt-6">
            {textos.map((texto) => (
              <p key={texto} className="texto text-[15px] leading-[1.8] text-section-dark-fg/95 md:text-[16.5px]">
                {texto}
              </p>
            ))}
            {credencial && credencial.trim() ? (
              <p className="texto text-[15px] leading-[1.8] text-section-dark-fg/95 md:text-[16.5px]">
                {credencial}
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
