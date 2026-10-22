import { ArrowRight } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionDoisCaminhos as Props } from "../../content/manifesto.types";

// Dois caminhos: fecho emocional antes do FAQ. Fundo vinho.
export function SectionDoisCaminhos({ fundo, eyebrow, titulo, cards, cta, microtexto }: Props) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 100%, rgba(0,0,0,0.35) 0%, transparent 62%)",
        }}
      />

      <div className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-on-red/70 md:text-[12px]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-[clamp(1.35rem,5.4vw,1.9rem)] font-semibold leading-[1.25] md:text-[clamp(1.45rem,2.6vw,1.95rem)]">
            {titulo}
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:mt-12 md:grid-cols-2 md:gap-7">
          {cards.map((card, i) => (
            <Reveal key={card.titulo} delay={i * 120} className="h-full">
              <div
                className={`h-full rounded-xl p-6 md:p-8 ${
                  card.destaque
                    ? "border border-on-red/50 bg-black/25 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)]"
                    : "border border-on-red/20 bg-black/10"
                }`}
              >
                <h3 className="font-display text-[19px] font-semibold leading-snug md:text-[21px]">
                  {card.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-section-red-fg/85 md:text-[16px]">
                  {card.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mt-10 text-center md:mt-12">
            <a
              href="#planos"
              className="group relative inline-flex min-h-[56px] w-full max-w-[440px] items-center justify-center gap-2 overflow-hidden rounded-cta border border-white/15 bg-gradient-to-b from-red-primary to-red-primary-hover px-6 text-center text-[14px] font-bold uppercase leading-snug tracking-[0.06em] text-on-red shadow-[0_0_32px_rgba(211,58,52,0.32),0_22px_60px_-18px_var(--red-accent)] transition-all hover:shadow-[0_0_48px_rgba(211,58,52,0.48),0_28px_75px_-16px_var(--red-accent)] hover:brightness-110 active:scale-[0.98] sm:w-auto md:text-[15px]"
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
            <p className="mt-4 text-[12px] text-section-red-fg/70 md:text-[13px]">{microtexto}</p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
