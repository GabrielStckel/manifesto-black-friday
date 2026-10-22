import { ArrowRight, Check } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { ContadorOferta } from "./ContadorOferta";
import { Negrito } from "./Negrito";
import { formatarFimBF, REGRA_PRAZO, TEM_PRAZO } from "../../lib/config";
import { buildCheckoutUrl, checkoutHrefEstatico } from "../../lib/checkout";
import { handleCheckoutClick } from "../../lib/analytics";
import type {
  PlanoOferta,
  SectionOferta as SectionOfertaType,
} from "../../content/manifesto.types";

function CardPlano({
  plano,
  planoId,
  destaque,
  className = "",
}: {
  plano: PlanoOferta;
  planoId: "mensal" | "anual";
  destaque?: boolean;
  className?: string;
}) {
  const source = planoId === "anual" ? "plano_anual" : "plano_mensal";

  return (
    <div
      className={`relative flex flex-col rounded-xl border p-6 text-center sm:p-8 ${
        destaque
          ? "border-brass/60 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)]"
          : "border-white/10 bg-white/[0.035]"
      } ${className}`}
      style={
        destaque
          ? {
              background:
                "linear-gradient(180deg, rgba(184,146,74,0.14) 0%, rgba(0,0,0,0.45) 55%)",
            }
          : undefined
      }
    >
      {plano.selo ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill border border-brass/50 bg-bg-black px-3.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-brass sm:text-[10px] sm:tracking-[0.14em]">
          {plano.selo}
        </span>
      ) : null}

      <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[12px]">
        {plano.rotulo}
      </p>

      <div className="mt-4">
        {plano.precoPre ? (
          <p className="text-[13px] font-medium text-section-dark-fg/70 md:text-[14px]">
            {plano.precoPre}
          </p>
        ) : null}
        <p className="font-display font-semibold leading-[0.95] tracking-[-0.02em] text-section-dark-fg">
          <span className="align-top text-[clamp(1.2rem,4.5vw,1.6rem)]">R$</span>{" "}
          <span className="text-[clamp(2.6rem,11vw,3.4rem)]">
            {plano.preco.replace(/^R\$\s*/, "")}
          </span>
          {plano.precoPos ? (
            <span className="ml-1 text-[clamp(0.95rem,3.5vw,1.15rem)] font-medium text-section-dark-fg/70">
              {plano.precoPos}
            </span>
          ) : null}
        </p>
        <p className="mt-2 text-[12.5px] leading-snug text-section-dark-fg/65 md:text-[13.5px]">
          {plano.linha}
        </p>
      </div>

      <ul className="mt-6 space-y-2.5 text-left">
        {plano.itens.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-[13.5px] leading-snug text-section-dark-fg/80 md:text-[14.5px]"
          >
            <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={checkoutHrefEstatico(planoId)}
        onClick={(event) => {
          const url = buildCheckoutUrl(planoId);
          handleCheckoutClick(source, url)(event);
        }}
        className={
          destaque
            ? "group relative mt-7 flex min-h-[56px] w-full items-center justify-center gap-2 overflow-hidden rounded-cta border border-white/15 bg-gradient-to-b from-red-primary to-red-primary-hover px-5 py-4 text-center text-[13.5px] font-bold uppercase leading-snug tracking-[0.05em] text-on-red shadow-[0_0_32px_rgba(211,58,52,0.28),0_20px_55px_-18px_var(--red-accent)] transition-all hover:shadow-[0_0_48px_rgba(211,58,52,0.42),0_26px_70px_-16px_var(--red-accent)] hover:brightness-110 active:scale-[0.98] sm:text-[14.5px]"
            : "group mt-7 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-cta border border-brass/50 bg-transparent px-5 py-4 text-center text-[13.5px] font-bold uppercase leading-snug tracking-[0.05em] text-brass transition-all hover:bg-brass/10 active:scale-[0.98] sm:text-[14.5px]"
        }
      >
        {destaque ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"
          />
        ) : null}
        <span className="relative z-10">{plano.cta}</span>
        <ArrowRight
          aria-hidden
          className="relative z-10 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
        />
      </a>

      <p className="mt-4 text-[11.5px] leading-relaxed text-muted-foreground md:text-[12px]">
        {plano.nota}
      </p>
    </div>
  );
}

export function SectionOferta({
  fundo,
  titulo,
  porQueAgora,
  inclui,
  planos,
  textoPosCards,
  garantia,
  passosCompra,
}: SectionOfertaType) {
  return (
    <SectionShell fundo={fundo} id="planos" className="scroll-mt-14 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 20%, var(--red-deep) 0%, transparent 65%)",
          opacity: 0.35,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 30% at 50% 92%, var(--brass) 0%, transparent 70%)",
          opacity: 0.1,
        }}
      />
      {/* Linha superior em latão */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent"
      />

      <div className="relative z-10">
        <Reveal>
          <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.26em] text-brass md:text-[12px]">
            Black Friday{TEM_PRAZO ? ` · até ${formatarFimBF()}` : ""}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-center font-display font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(1.9rem,7.6vw,2.6rem)] md:mt-5 md:text-[clamp(2rem,3.6vw,2.75rem)]">
            {titulo}
          </h2>
          <div aria-hidden className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-brass/60 md:w-20" />
            <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-brass/60 md:w-20" />
          </div>
        </Reveal>

        {/* Por que agora */}
        <Reveal delay={80}>
          <div className="mx-auto mt-10 max-w-3xl border-l-2 border-brass pl-5 text-left md:pl-6">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[12px]">
              {porQueAgora.rotulo}
            </p>
            <p className="mt-3 text-[15.5px] leading-[1.8] text-section-dark-fg/85 md:text-[17px]">
              <Negrito texto={porQueAgora.texto} />
            </p>
            {TEM_PRAZO ? (
              <p className="mt-3 text-[14.5px] leading-[1.75] text-brass md:text-[15.5px]">
                {REGRA_PRAZO}
              </p>
            ) : null}
          </div>
        </Reveal>

        {/* Tudo o que você recebe */}
        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-4xl md:mt-14">
            <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[12px]">
              Tudo o que você recebe
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3 md:gap-6">
              {inclui.map((item) => (
                <div
                  key={item.rotulo}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-left md:p-6"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brass md:text-[11px]">
                    {item.rotulo}
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.7] text-section-dark-fg/80 md:text-[14.5px]">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Planos: anual primeiro no mobile; no desktop, anual à esquerda */}
        <Reveal delay={160}>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:mt-14 md:grid-cols-2 md:gap-7">
            <CardPlano plano={planos.anual} planoId="anual" destaque />
            <CardPlano plano={planos.mensal} planoId="mensal" />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[12.5px] leading-relaxed text-muted-foreground md:text-[13.5px]">
            {textoPosCards}
          </p>
        </Reveal>

        {/* Garantia — logo abaixo dos planos */}
        <Reveal delay={220}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 rounded-lg border border-brass/20 bg-black/30 p-6 text-center sm:flex-row sm:text-left md:p-7">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brass/50 bg-brass/10 font-display text-[13px] font-semibold leading-tight text-brass">
              {garantia.selo}
            </span>
            <div>
              <p className="font-display text-[17px] font-semibold text-section-dark-fg md:text-[18px]">
                {garantia.titulo}
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-section-dark-fg/75 md:text-[15.5px] md:leading-[1.75]">
                {garantia.texto}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Contador completo — só com REGRA_PRAZO */}
        {TEM_PRAZO ? (
          <Reveal delay={240}>
            <div className="mx-auto mt-8 max-w-xl">
              <ContadorOferta variante="completo" />
            </div>
          </Reveal>
        ) : null}

        {/* Como funciona a compra */}
        <Reveal delay={260}>
          <div className="mx-auto mt-12 max-w-4xl md:mt-14">
            <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[12px]">
              {passosCompra.rotulo}
            </p>
            <ol className="mt-6 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 max-[460px]:grid-cols-1 min-[461px]:grid-cols-2 lg:grid-cols-4">
              {passosCompra.itens.map((passo, i) => (
                <li key={passo} className="flex gap-3 bg-section-dark-bg p-5 text-left">
                  <span className="font-display text-[18px] font-semibold leading-none text-brass">
                    {i + 1}
                  </span>
                  <p className="text-[13px] leading-relaxed text-section-dark-fg/80 md:text-[13.5px]">
                    {passo}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
