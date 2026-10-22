import { ArrowRight, Check, Lock, RefreshCw, ShieldCheck } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { ContadorOferta } from "./ContadorOferta";
import { formatarFimBF } from "../../lib/config";
import { buildCheckoutUrl, checkoutHrefEstatico } from "../../lib/checkout";
import { handleCheckoutClick } from "../../lib/analytics";
import type {
  PlanoOferta,
  SectionOferta as SectionOfertaType,
} from "../../content/manifesto.types";

const SELOS = [
  { icon: Lock, titulo: "Ambiente seguro", texto: "Conexão criptografada" },
  {
    icon: ShieldCheck,
    titulo: "Processado pela Hotmart",
    texto: "Compra protegida",
  },
  {
    icon: RefreshCw,
    titulo: "Reembolso em 7 dias",
    texto: "Sem burocracia",
  },
];

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
      className={`relative flex flex-col rounded-xl border p-7 text-center sm:p-8 ${
        destaque
          ? "border-brass/45 bg-black/45 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)]"
          : "border-white/10 bg-white/[0.035]"
      } ${className}`}
    >
      {plano.selo ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill border border-brass/50 bg-bg-black px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brass">
          {plano.selo}
        </span>
      ) : null}

      <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[12px]">
        {plano.nome}
      </p>

      <p className="mt-4 break-words font-display font-semibold leading-[0.95] tracking-[-0.02em] text-section-dark-fg text-[clamp(2rem,9vw,2.6rem)]">
        {plano.precoGrande}
      </p>

      <ul className="mt-5 space-y-2.5">
        {plano.linhas.map((linha) => (
          <li
            key={linha}
            className="text-[13.5px] leading-snug text-section-dark-fg/70 md:text-[14.5px]"
          >
            {linha}
          </li>
        ))}
      </ul>

      <a
        href={checkoutHrefEstatico(planoId)}
        onClick={(event) => {
          const url = buildCheckoutUrl(planoId);
          handleCheckoutClick(source, url)(event);
        }}
        className="group relative mt-7 flex min-h-[56px] w-full items-center justify-center gap-2 overflow-hidden rounded-cta border border-white/15 bg-gradient-to-b from-red-primary to-red-primary-hover px-5 py-4 text-center text-[13.5px] font-bold uppercase leading-snug tracking-[0.05em] text-on-red shadow-[0_0_32px_rgba(211,58,52,0.28),0_20px_55px_-18px_var(--red-accent)] transition-all hover:shadow-[0_0_48px_rgba(211,58,52,0.42),0_26px_70px_-16px_var(--red-accent)] hover:brightness-110 active:scale-[0.98] sm:text-[14.5px]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"
        />
        <span className="relative z-10">{plano.cta}</span>
        <ArrowRight
          aria-hidden
          className="relative z-10 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}

export function SectionOferta({
  fundo,
  titulo,
  porQueAgora,
  inclui,
  compraSegura,
  planos,
  textoPosCards,
  garantia,
  blocoFinal,
}: SectionOfertaType) {
  return (
    <SectionShell fundo={fundo} id="oferta" className="scroll-mt-12 py-20 md:py-28">
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

      <div className="relative z-10">
        <Reveal>
          <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.26em] text-brass md:text-[12px]">
            Black Friday · até {formatarFimBF()}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-center font-display font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(2rem,8vw,2.7rem)] md:mt-5 md:text-[clamp(2rem,3.6vw,2.75rem)]">
            {titulo}
          </h2>
          <div className="mx-auto mt-8 max-w-3xl text-left">
            <h3 className="font-display text-[22px] font-semibold text-brass md:text-[25px]">{porQueAgora.titulo}</h3>
            <p className="mt-4 text-[16px] leading-[1.8] text-section-dark-fg/85 md:text-[18px]">{porQueAgora.texto}</p>
          </div>
          <div aria-hidden className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-brass/60 md:w-20" />
            <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-brass/60 md:w-20" />
          </div>
        </Reveal>

        {/* O que está incluído */}
        <Reveal delay={100}>
          <div className="mx-auto mt-11 max-w-3xl rounded-xl bg-gradient-to-b from-brass/55 via-brass/15 to-transparent p-px shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] md:mt-14">
            <div className="rounded-[calc(0.75rem-1px)] bg-surface-dark/90 p-7 backdrop-blur-sm sm:p-9 md:p-11">
              <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[12px]">
                Tudo o que você recebe
              </p>

              <ul className="mx-auto mt-7 max-w-xl space-y-5">
                {inclui.map((item) => (
                  <li
                    key={item.texto}
                    className="flex gap-3.5 text-[15px] leading-relaxed text-section-dark-fg/85 md:text-[16px] md:leading-[1.7]"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-brass/10"
                    >
                      <Check className="h-3.5 w-3.5 text-brass" />
                    </span>
                    <span className="text-left">{item.rotulo ? <><strong>{item.rotulo}</strong>{" "}</> : null}{item.texto}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Planos: anual primeiro no mobile; no desktop, mensal à esquerda */}
        <Reveal delay={160}>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:mt-14 md:grid-cols-2 md:gap-7">
            <CardPlano
              plano={planos.anual}
              planoId="anual"
              destaque
              className="md:order-2"
            />
            <CardPlano
              plano={planos.mensal}
              planoId="mensal"
              className="md:order-1"
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-[13px] leading-relaxed text-muted-foreground md:text-[14px]">
            {textoPosCards}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mx-auto mt-8 max-w-xl">
            <ContadorOferta variante="completo" />
          </div>
        </Reveal>

        {/* Garantia */}
        <Reveal delay={240}>
          <div className="mx-auto mt-8 flex max-w-3xl gap-4 rounded-lg border border-brass/20 bg-black/30 p-6 text-left md:p-7">
            <ShieldCheck aria-hidden className="mt-0.5 h-6 w-6 shrink-0 text-brass" />
            <div>
              <p className="font-display text-[16px] font-semibold text-section-dark-fg md:text-[17px]">
                {garantia.rotulo}
              </p>
              <p className="mt-2 text-justify hyphens-auto text-[14.5px] leading-relaxed text-section-dark-fg/75 md:text-[16px] md:leading-[1.75]">
                {garantia.texto}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Selos */}
        <Reveal delay={260}>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h3 className="font-display text-[21px] font-semibold text-brass">{compraSegura.titulo}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-section-dark-fg/80 md:text-[16px]">{compraSegura.texto}</p>
          </div>
          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-3">
            {SELOS.map((selo) => (
              <li key={selo.titulo} className="flex items-start gap-2.5 text-left">
                <selo.icon
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                />
                <span>
                  <span className="block text-[12px] font-semibold leading-tight text-section-dark-fg/90 md:text-[13px]">
                    {selo.titulo}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-tight text-muted-foreground md:text-[12px]">
                    {selo.texto}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Bloco final: dois caminhos */}
        <Reveal delay={300}>
          <div className="mx-auto mt-14 max-w-3xl text-center md:mt-16">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-brass md:text-[12px]">
              Dois caminhos
            </p>
            <p className="mx-auto mt-5 max-w-[58ch] text-left text-[16px] leading-[1.75] text-brass md:text-[18px]">{blocoFinal.resumo}</p>
            <p className="mx-auto mt-5 max-w-[58ch] text-justify hyphens-auto text-[15.5px] leading-[1.75] text-section-dark-fg/85 md:text-[17px] md:leading-[1.8]">
              {blocoFinal.texto}
            </p>
            <a
              href="#oferta"
              className="group relative mt-8 inline-flex min-h-[56px] w-full max-w-[440px] items-center justify-center gap-2 overflow-hidden rounded-cta border border-white/15 bg-gradient-to-b from-red-primary to-red-primary-hover px-6 text-center text-[14px] font-bold uppercase leading-snug tracking-[0.06em] text-on-red shadow-[0_0_32px_rgba(211,58,52,0.32),0_22px_60px_-18px_var(--red-accent)] transition-all hover:shadow-[0_0_48px_rgba(211,58,52,0.48),0_28px_75px_-16px_var(--red-accent)] hover:brightness-110 active:scale-[0.98] sm:w-auto md:text-[15px]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"
              />
              <span className="relative z-10">{blocoFinal.cta}</span>
              <ArrowRight
                aria-hidden="true"
                className="relative z-10 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
