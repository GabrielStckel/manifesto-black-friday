import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionSetenios as SectionSeteniosType } from "../../content/manifesto.types";

// De onde vem o padrão: régua dos setênios + o que o período costuma
// deixar + a camada do pertencimento. Fundo vinho.
export function SectionSetenios({
  fundo,
  eyebrow,
  titulo,
  abertura,
  marcas,
  reguaRotulos,
  rotuloLista,
  elos,
  pertencimento,
  fecho,
}: SectionSeteniosType) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden py-14 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, rgba(0,0,0,0.35) 0%, transparent 62%)",
        }}
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.26em] text-on-red/70 md:text-[12px]">
              {eyebrow}
            </p>
            <h2 className="mx-auto mt-4 max-w-[24ch] text-pretty text-center font-display font-semibold leading-[1.3] tracking-[-0.01em] text-section-red-fg text-[clamp(1.15rem,4.8vw,1.55rem)] sm:max-w-[26ch] md:max-w-3xl md:text-pretty md:text-[clamp(1.45rem,2.8vw,2.05rem)] md:leading-[1.12]">
              {titulo}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="texto texto-centro mx-auto mt-7 max-w-[60ch] text-[15px] leading-relaxed text-section-red-fg/85 sm:text-base md:text-[17px] md:leading-[1.75]">
              {abertura}
            </p>
          </Reveal>
        </div>

        {/* Régua dos setênios */}
        <Reveal delay={160}>
          <div className="mx-auto mt-12 max-w-3xl px-6 sm:px-4 md:mt-14 md:px-0">
            <div className="relative h-px bg-on-red/30">
              {marcas.map((marca, i) => (
                <span
                  key={marca}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${(i / (marcas.length - 1)) * 100}%` }}
                >
                  <span aria-hidden className="mx-auto block h-2.5 w-px bg-on-red/60" />
                  <span className="mt-2 block whitespace-nowrap text-center font-display text-[12px] font-semibold text-section-red-fg md:text-[13px]">
                    {marca}
                  </span>
                </span>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-2 text-center">
              {reguaRotulos.map((rotulo) => {
                const [nome, faixa] = rotulo.split(" · ");
                return (
                  <p
                    key={rotulo}
                    className="text-[11px] font-semibold leading-snug tracking-[0.12em] text-on-red/70 md:tracking-[0.16em]"
                  >
                    <span className="block whitespace-nowrap uppercase md:inline">{nome}</span>
                    {faixa ? (
                      <>
                        <span aria-hidden className="hidden md:inline"> · </span>
                        <span className="block whitespace-nowrap md:inline md:uppercase">{faixa.toLowerCase()}</span>
                      </>
                    ) : null}
                  </p>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* O que esse período costuma deixar */}
        <Reveal delay={200}>
          <div className="mx-auto mt-12 max-w-4xl md:mt-14">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-on-red/70 md:text-[12px]">
              {rotuloLista}
            </p>
            <ul className="mt-6">
              {elos.map((elo) => (
                <li
                  key={elo.titulo}
                  className="grid gap-2 border-t border-on-red/20 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10"
                >
                  <h3 className="font-display text-[18px] font-semibold leading-snug text-section-red-fg md:text-[20px]">
                    {elo.titulo}
                  </h3>
                  <p className="texto text-[15px] leading-[1.75] text-section-red-fg/85 md:text-[16px]">
                    {elo.texto}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Pertencimento */}
        <Reveal delay={240}>
          <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-on-red/30 bg-bg-black/15 p-6 md:p-8">
            <h3 className="font-display text-[18px] font-semibold leading-snug text-section-red-fg md:text-[21px]">
              {pertencimento.titulo}
            </h3>
            <p className="texto mt-4 text-[15px] leading-[1.8] text-section-red-fg/90 md:text-[16.5px]">
              {pertencimento.texto}
            </p>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-[19px] font-semibold leading-relaxed text-section-red-fg md:text-[22px]">
            {fecho}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
