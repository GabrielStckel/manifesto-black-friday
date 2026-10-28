import { useEffect, useState } from "react";
import { MarkedTitle } from "./MarkedTitle";
import { ManifestoCta } from "./ManifestoCta";
import { Check } from "lucide-react";
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
  // href já completo (com utm_*, src, sck) depois de montar no cliente.
  const [href, setHref] = useState(() => checkoutHrefEstatico(planoId));
  useEffect(() => setHref(buildCheckoutUrl(planoId)), [planoId]);

  return (
    <div
      className={`plan-card ${destaque ? "plan-annual" : "plan-monthly"} ${className}`}
    >
      {plano.selo ? (
        <span className="ticket-stub">
          {plano.selo}
        </span>
      ) : null}

      <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-brass-glow md:text-[12px]">
        {plano.rotulo}
      </p>

      <div className="mt-4 plan-price">
        {plano.precoPre ? (
          <p className="text-[13px] font-semibold text-section-dark-fg/70 md:text-[14px]">
            {plano.precoPre}
          </p>
        ) : null}
        <p className="font-display font-semibold leading-[0.95] tracking-[-0.02em] text-section-dark-fg">
          <span className="align-top text-[clamp(1.2rem,4.5vw,1.6rem)]">R$</span>{" "}
          <span className="text-[clamp(2.6rem,11vw,3.4rem)]">
            {plano.preco.replace(/^R\$\s*/, "")}
          </span>
          {plano.precoPos ? (
            <span className="ml-1 text-[clamp(0.95rem,3.5vw,1.15rem)] font-semibold text-section-dark-fg/70">
              {plano.precoPos}
            </span>
          ) : null}
        </p>
        <p className="mt-2 text-[12.5px] leading-snug text-section-dark-fg/65 md:text-[13.5px]">
          {plano.linha}
        </p>
      </div>

      <div className="ticket-divider" aria-hidden="true" />
      <ul className="mt-6 space-y-2.5 text-left">
        {plano.itens.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-[13.5px] leading-snug text-section-dark-fg/95 md:text-[14.5px]"
          >
            <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brass-glow" />
            <span className="texto min-w-0 flex-1">{item}</span>
          </li>
        ))}
      </ul>

      <ManifestoCta
        href={href}
        onClick={handleCheckoutClick(source)}
        secondary={!destaque}
        className="plan-cta mt-7 w-full"
      >{plano.cta}</ManifestoCta>

    </div>
  );
}

export function SectionOferta({
  fundo,
  titulo,
  porQueAgora,
  inclui,
  planos,
  garantia,
}: SectionOfertaType) {
  return (
    <SectionShell fundo={fundo} id="planos" className="bg-oferta scroll-mt-14 py-14 md:py-28">
      {/* Brilho vermelho: no celular vira uma luz larga e suave (mais de 160%
          da largura da tela, centrada), para não formar uma coluna de luz
          atrás dos cards. Unidades em vw: com max() dentro do gradiente o
          Chrome descarta a regra inteira e o brilho some. No desktop o halo
          alto continua exatamente como estava. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "radial-gradient(160vw 60vw at 50% 21%, rgba(239,75,66,0.17), transparent 76%), radial-gradient(120vw 420px at 50% 0%, rgba(212,173,90,0.18), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(70% 900px at 50% 38%, rgba(239,75,66,0.24), transparent 70%), radial-gradient(60% 420px at 50% 0%, rgba(212,173,90,0.20), transparent 70%)",
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
          <p className="text-center text-[11.5px] font-semibold uppercase tracking-[0.26em] text-brass-glow md:text-[12px]">
            Black Friday{TEM_PRAZO ? ` · até ${formatarFimBF()}` : ""}
          </p>
          <MarkedTitle text={titulo} phrase="entrar no Manifesto" className="offer-title mx-auto mt-4 max-w-3xl text-balance text-center font-display font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(1.9rem,7.6vw,2.6rem)] md:mt-5 md:text-[clamp(2rem,3.6vw,2.75rem)]" />
          <div aria-hidden className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-brass/60 md:w-20" />
            <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-brass/60 md:w-20" />
          </div>
        </Reveal>

        {/* Por que agora */}
        <Reveal delay={80}>
          <div className="mx-auto mt-10 max-w-3xl border-l-2 border-brass pl-5 text-left md:pl-6">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-brass-glow md:text-[12px]">
              {porQueAgora.rotulo}
            </p>
            <p className="texto mt-3 text-[15.5px] leading-[1.8] text-section-dark-fg/95 md:text-[17px]">
              <Negrito texto={porQueAgora.texto} />
            </p>
            {TEM_PRAZO ? (
              <p className="texto mt-3 text-[14.5px] leading-[1.75] text-brass-glow md:text-[15.5px]">
                {REGRA_PRAZO}
              </p>
            ) : null}
          </div>
        </Reveal>

        {/* Tudo o que você recebe */}
        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-4xl md:mt-14">
            <p className="text-center text-[11.5px] font-semibold uppercase tracking-[0.22em] text-brass-glow md:text-[12px]">
              Tudo o que você recebe
            </p>
            <div className="card-unico mt-6 grid gap-5 md:grid-cols-3 md:gap-6">
              {inclui.map((item) => (
                <div
                  key={item.rotulo}
                  className="rounded-lg border border-border-dark/[0.14] bg-surface-light/[0.03] p-5 text-left md:p-6"
                >
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-brass-glow md:text-[11px]">
                    {item.rotulo}
                  </p>
                  <p className="texto mt-3 text-[14px] leading-[1.7] text-section-dark-fg/95 md:text-[14.5px]">
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

        {/* Garantia — logo abaixo dos planos */}
        <Reveal delay={220}>
          <div className="guarantee mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 rounded-lg border border-brass/20 bg-[rgba(212,173,90,0.10)] p-6 text-center sm:flex-row sm:text-left md:p-7">
            <span className="guarantee-seal flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brass/50 bg-brass/10 font-display text-[13px] font-semibold leading-tight text-brass-glow">
              <span className="gold-number">{garantia.selo.split(" ")[0]}</span><span>{garantia.selo.split(" ").slice(1).join(" ")}</span>
            </span>
            <div>
              <p className="font-display text-[17px] font-semibold text-section-dark-fg md:text-[18px]">
                {garantia.titulo}
              </p>
              <p className="texto texto-centro texto-centro-sm-off mt-2 text-[14.5px] leading-relaxed text-section-dark-fg/95 md:text-[15.5px] md:leading-[1.75]">
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

      </div>
    </SectionShell>
  );
}
