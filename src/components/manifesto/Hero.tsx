import { ArrowRight } from "lucide-react";
import { CampoConstelacao } from "./CampoConstelacao";
import { Orbe } from "./Orbe";
import { ContadorOferta } from "./ContadorOferta";
import type { Hero as HeroType } from "../../content/manifesto.types";

export function Hero({ badge, h1, subtitulo, cta, microtexto }: HeroType) {
  return (
    <section className="relative flex min-h-[94svh] items-center overflow-hidden bg-section-dark-bg px-5 pb-14 pt-24 text-section-dark-fg sm:px-8 md:min-h-[92vh] md:pb-24 md:pt-28">
      {/* Camadas de fundo — todas decorativas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.92) 0%, rgba(18,9,9,0.88) 50%, rgba(38,13,13,0.82) 100%)",
        }}
      />
      <CampoConstelacao />

      <Orbe />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(62% 52% at 50% 42%, var(--red-accent) 0%, transparent 66%), radial-gradient(42% 34% at 50% 38%, var(--red-deep) 0%, transparent 70%)",
          opacity: 0.26,
        }}
      />
      {/* Luz rasante superior em latão */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[45%]"
        style={{
          background:
            "radial-gradient(70% 100% at 50% 0%, var(--brass) 0%, transparent 70%)",
          opacity: 0.07,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 80% at 50% 45%, transparent 46%, rgba(0,0,0,0.68) 100%)",
        }}
      />
      {/* Linha de horizonte na base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass/25 to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center md:max-w-4xl">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-brass/25 bg-white/[0.04] px-4 py-2 text-[9.5px] font-semibold uppercase leading-[1.6] tracking-[0.2em] text-brass/90 backdrop-blur-[2px] sm:text-[10.5px] sm:tracking-[0.26em]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brass"
          />
          {badge}
        </p>

        <h1
          className="mt-7 text-pretty font-display text-[clamp(1.5rem,5.6vw,1.95rem)] font-semibold leading-[1.32] tracking-[-0.015em] sm:max-w-[22ch] md:mt-9 md:max-w-[26ch] md:text-[clamp(1.8rem,3.4vw,2.5rem)] md:leading-[1.2] md:tracking-[-0.02em]"
          style={{ textShadow: "var(--text-shadow-hero)" }}
        >
          {h1}
        </h1>

        <div
          aria-hidden="true"
          className="mt-7 flex items-center justify-center gap-3 md:mt-9"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-brass/55 md:w-16" />
          <span className="h-1 w-1 rotate-45 bg-brass/80" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-brass/55 md:w-16" />
        </div>

        <div className="mt-8 w-full max-w-[420px] md:mt-10">
          <ContadorOferta variante="compacto" />
        </div>

        <p
          className="mt-8 max-w-[44ch] text-[15.5px] leading-[1.65] text-section-dark-fg/90 md:mt-10 md:max-w-[58ch] md:whitespace-pre-line md:text-[18px] md:leading-[1.65]"
          style={{ textShadow: "var(--text-shadow-soft)" }}
        >
          {subtitulo}
        </p>

        <a
          href="#oferta"
          className="group relative mt-8 flex min-h-[60px] w-full max-w-[440px] items-center justify-center gap-2 overflow-hidden rounded-cta border border-white/15 bg-gradient-to-b from-red-primary to-red-primary-hover px-6 text-center text-[14.5px] font-bold uppercase leading-snug tracking-[0.06em] text-on-red shadow-[0_0_32px_rgba(211,58,52,0.32),0_22px_60px_-18px_var(--red-accent)] transition-all hover:shadow-[0_0_48px_rgba(211,58,52,0.48),0_28px_75px_-16px_var(--red-accent)] hover:brightness-110 active:scale-[0.98] md:mt-10 md:text-[16px]"
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

        <p className="mt-4 max-w-[34ch] text-[12px] leading-snug text-muted-foreground md:mt-5 md:max-w-none md:text-[13px]">
          {microtexto}
        </p>
      </div>
    </section>
  );
}

