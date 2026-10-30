import { ManifestoCta } from "./ManifestoCta";
import { CampoConstelacao } from "./CampoConstelacao";
import { Orbe } from "./Orbe";
import { VturbPlayer } from "./VturbPlayer";
import { TEM_VSL, VSL_REVELAR } from "../../lib/config";
import type { Hero as HeroType } from "../../content/manifesto.types";

export function Hero({
  badge,
  h1,
  cta,
  microtexto,
}: HeroType) {
  return (
    <section id="hero" className="relative overflow-hidden bg-hero px-5 pb-14 pt-12 text-section-dark-fg sm:px-8 md:pb-20 md:pt-16">
      {/* Camadas de fundo — todas decorativas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(10,4,4,0.45) 0%, rgba(20,8,8,0.15) 60%, transparent 100%)",
        }}
      />
      <CampoConstelacao />

      <Orbe />

      {/* Brilho vermelho: max() no tamanho faz o Chrome descartar o
          gradiente inteiro, então o celular (até 640px) e o desktop usam
          regras separadas com tamanhos válidos. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 sm:hidden"
        style={{
          background:
            "radial-gradient(150% 55% at 50% 42%, var(--red-accent) 0%, transparent 68%), radial-gradient(110% 38% at 50% 34%, var(--red-deep) 0%, transparent 72%)",
          opacity: 0.55,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background:
            "radial-gradient(70% 52% at 50% 42%, var(--red-accent) 0%, transparent 68%), radial-gradient(46% 34% at 50% 34%, var(--red-deep) 0%, transparent 72%)",
          opacity: 0.55,
        }}
      />
      {/* Luz rasante superior em latão (mesma correção de max() do brilho
          vermelho: regras separadas por breakpoint, tamanhos válidos). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 sm:hidden"
        style={{
          background:
            "radial-gradient(160% 45% at 50% 0%, var(--brass) 0%, transparent 72%)",
          opacity: 0.18,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background:
            "radial-gradient(80% 45% at 50% 0%, var(--brass) 0%, transparent 72%)",
          opacity: 0.2,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(140% 95% at 50% 42%, transparent 62%, rgba(0,0,0,0.32) 100%)",
        }}
      />
      {/* Linha de horizonte na base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass/25 to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center md:max-w-4xl">
        <p className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-brass/25 bg-surface-light/[0.04] px-4 py-2 text-[11.5px] font-semibold uppercase leading-[1.6] tracking-[0.2em] text-brass-glow sm:text-[11.5px] sm:tracking-[0.26em]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brass"
          />
          {badge}
        </p>

        <h1
          className="hero-title mt-7 md:mt-9"
          style={{ textShadow: "var(--text-shadow-hero)" }}
        >
          {(() => {
            const indice = h1.indexOf(". ");
            if (indice === -1) return h1;
            const primeira = h1.slice(0, indice + 1);
            const segunda = h1.slice(indice + 2);
            return (
              <>
                <span className="block whitespace-nowrap">{primeira}</span>
                <span className="block whitespace-nowrap">{segunda}</span>
              </>
            );
          })()}
        </h1>

        {TEM_VSL ? (
          <div className="mt-7 flex w-full justify-center md:mt-9">
            <VturbPlayer />
          </div>
        ) : null}

        {TEM_VSL ? (
          <div className={`${VSL_REVELAR} w-full`}>
            <ManifestoCta href="#planos" className="mx-auto mt-8 w-full max-w-[440px] md:mt-10">{cta}</ManifestoCta>
            <p className="mx-auto mt-4 max-w-[34ch] text-[12px] leading-snug text-muted-foreground md:mt-5 md:max-w-none md:text-[13px]">
              {microtexto}
            </p>
          </div>
        ) : (
          <>
            <ManifestoCta href="#planos" className="mt-8 w-full max-w-[440px] md:mt-10">{cta}</ManifestoCta>
            <p className="mt-4 max-w-[34ch] text-[12px] leading-snug text-muted-foreground md:mt-5 md:max-w-none md:text-[13px]">
              {microtexto}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
