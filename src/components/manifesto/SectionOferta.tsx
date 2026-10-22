import {
  ArrowRight,
  Check,
  CreditCard,
  Lock,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { ContadorOferta } from "./ContadorOferta";
import { CHECKOUT_URL } from "../../lib/config";
import { handleCheckoutClick } from "../../lib/analytics";
import type { SectionOferta as SectionOfertaType } from "../../content/manifesto.types";

const SELOS = [
  { icon: Lock, titulo: "Ambiente seguro", texto: "Conexão criptografada" },
  { icon: ShieldCheck, titulo: "Compra segura", texto: "Processada pela Hotmart" },
  { icon: CreditCard, titulo: "Cartão, Pix e boleto", texto: "Em até 12x" },
  { icon: RefreshCw, titulo: "Reembolso garantido", texto: "7 dias, sem burocracia" },
];

export function SectionOferta({
  fundo,
  titulo,
  inclui,
  preco,
  cta,
  garantia,
}: SectionOfertaType) {
  return (
    <SectionShell fundo={fundo} id="oferta" className="py-20 md:py-28">
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
            Sua decisão
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-center font-display font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(2rem,8vw,2.7rem)] md:mt-5 md:text-[clamp(2rem,3.6vw,2.75rem)]">
            {titulo}
          </h2>
          <div aria-hidden className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-brass/60 md:w-20" />
            <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-brass/60 md:w-20" />
          </div>
        </Reveal>

        {/* Card principal com borda em degradê de latão */}
        <Reveal delay={120}>
          <div className="mx-auto mt-11 max-w-5xl rounded-xl bg-gradient-to-b from-brass/55 via-brass/15 to-transparent p-px shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] md:mt-14">
            <div className="overflow-hidden rounded-[calc(0.75rem-1px)] bg-surface-dark/90 backdrop-blur-sm">
              <div className="grid md:grid-cols-[1.15fr_1fr]">
                {/* Coluna: o que está incluído */}
                <div className="border-b border-white/10 p-7 sm:p-9 md:border-b-0 md:border-r md:p-11">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[12px]">
                    Tudo o que você recebe
                  </p>

                  <ul className="mt-7 space-y-5">
                    {inclui.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3.5 text-[15px] leading-relaxed text-section-dark-fg/85 md:text-[16px] md:leading-[1.7]"
                      >
                        <span
                          aria-hidden
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-brass/10"
                        >
                          <Check className="h-3.5 w-3.5 text-brass" />
                        </span>
                        <span className="text-left">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coluna: preço e conversão */}
                <div className="relative flex flex-col justify-center bg-black/35 p-7 text-center sm:p-9 md:p-11">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-brass md:text-[12px]">
                    {preco.rotulo}
                  </p>

                  {preco.de ? (
                    <p className="mt-4 text-[15px] text-muted-foreground line-through md:text-[17px]">
                      {preco.de}
                    </p>
                  ) : null}

                  <p className="mt-4 break-words font-display font-semibold leading-[0.95] tracking-[-0.02em] text-section-dark-fg text-[clamp(2.2rem,10vw,3rem)] md:text-[clamp(2rem,3vw,2.7rem)]">
                    {preco.parcelado}
                  </p>

                  <p className="mt-3 text-[15px] text-section-dark-fg/70 md:text-[16px]">
                    {preco.aVista}
                  </p>

                  {preco.nota ? (
                    <p className="mx-auto mt-5 max-w-[46ch] text-[13px] leading-relaxed text-muted-foreground">
                      {preco.nota}
                    </p>
                  ) : null}

                  <div className="mt-7">
                    <ContadorOferta variante="completo" />
                  </div>

                  <a
                    href={CHECKOUT_URL}
                    onClick={handleCheckoutClick("oferta", CHECKOUT_URL)}
                    className="group relative mt-8 flex min-h-[60px] w-full items-center justify-center gap-2 overflow-hidden rounded-cta border border-white/15 bg-gradient-to-b from-red-primary to-red-primary-hover px-5 py-4 text-center text-[14px] font-bold uppercase leading-snug tracking-[0.05em] text-on-red shadow-[0_0_32px_rgba(211,58,52,0.28),0_20px_55px_-18px_var(--red-accent)] transition-all hover:shadow-[0_0_48px_rgba(211,58,52,0.42),0_26px_70px_-16px_var(--red-accent)] hover:brightness-110 active:scale-[0.98] sm:text-[15px] md:text-[15px]"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                    />
                    <span className="relative z-10">{cta}</span>
                    <ArrowRight
                      aria-hidden
                      className="relative z-10 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                    />
                  </a>


                  <p className="mt-4 flex items-center justify-center gap-1.5 text-[12px] text-muted-foreground md:text-[13px]">
                    <Lock aria-hidden className="h-3.5 w-3.5 text-brass/80" />
                    Checkout seguro Hotmart · acesso imediato
                  </p>
                </div>
              </div>

              {/* Faixa de selos Hotmart */}
              <div className="border-t border-white/10 bg-black/45 px-6 py-6 sm:px-9">
                <ul className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-4">
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

                <div
                  aria-hidden
                  className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Pagamento processado por
                  </span>
                  <span className="rounded-full border border-brass/35 bg-brass/10 px-3 py-1 font-display text-[13px] font-semibold tracking-wide text-brass">
                    Hotmart
                  </span>
                  {["Cartão", "Pix", "Boleto"].map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11.5px] font-medium text-section-dark-fg/75"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Garantia */}
        <Reveal delay={200}>
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
      </div>
    </SectionShell>
  );
}
