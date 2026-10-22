import { ArrowDown, ArrowRight } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionParadigma as SectionParadigmaType } from "../../content/manifesto.types";

export function SectionParadigma({
  fundo,
  titulo,
  antigo,
  novo,
}: SectionParadigmaType) {
  return (
    <SectionShell fundo={fundo} className="py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 40% at 85% 40%, var(--red-deep) 0%, transparent 65%)",
          opacity: 0.28,
        }}
      />

      <div className="relative z-10">
      <Reveal>
        <h2 className="mx-auto max-w-[22ch] text-pretty text-center font-display font-semibold leading-[1.35] text-[clamp(1.05rem,4.4vw,1.45rem)] sm:max-w-[24ch] sm:text-[clamp(1.15rem,4.8vw,1.65rem)] md:max-w-4xl md:text-pretty md:text-[clamp(1.5rem,2.7vw,2.1rem)] md:leading-[1.12]">
          {titulo}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-12 md:items-start md:gap-10">
        {/* Bloco antigo — única caixa da seção, inerte */}
        <Reveal className="md:col-span-5">
          <div className="rounded-lg border border-white/8 bg-black/40 p-6 text-left sm:p-8">
            <h3 className="font-display text-[20px] font-semibold leading-snug text-section-dark-fg/70 sm:text-[22px] md:text-[21px]">
              {antigo.nome}
            </h3>
            <p className="mt-5 text-justify hyphens-auto text-[15px] leading-relaxed text-section-dark-fg/50 sm:text-base md:text-[17px] md:leading-[1.75]">
              {antigo.texto}
            </p>
          </div>
        </Reveal>

        {/* Divisor de transição — decorativo */}
        <div aria-hidden className="md:col-span-2 md:self-stretch">
          <div className="flex items-center gap-4 py-2 md:hidden">
            <span className="h-px flex-1 bg-brass/25" />
            <ArrowDown className="h-5 w-5 text-brass/70" />
            <span className="h-px flex-1 bg-brass/25" />
          </div>
          <div className="hidden h-full flex-col items-center justify-center md:flex">
            <span className="w-px flex-1 bg-brass/25" />
            <ArrowRight className="my-4 h-5 w-5 text-brass/70" />
            <span className="w-px flex-1 bg-brass/25" />
          </div>
        </div>

        {/* Bloco novo — aberto */}
        <div className="text-left md:col-span-5">
          <Reveal>
            <h3 className="font-display text-[20px] font-semibold leading-snug text-section-dark-fg sm:text-[22px] md:text-[21px]">
              {novo.nome}
            </h3>
            <p className="mt-5 text-justify hyphens-auto text-[15px] leading-relaxed text-section-dark-fg/80 sm:text-base md:text-[17px] md:leading-[1.75]">
              {novo.transicao}
            </p>
          </Reveal>

          <ul className="mt-8 space-y-6">
            {novo.itens.map((item, i) => (
              <Reveal
                as="li"
                key={item.titulo}
                delay={(i + 1) * 100}
                className="relative block border-l border-brass/30 pl-5"
              >
                <h4 className="font-display text-[16px] font-semibold leading-snug text-section-dark-fg sm:text-[17px] md:text-[18px]">
                  {item.titulo}
                </h4>
                <p className="mt-2 text-justify hyphens-auto text-[14.5px] leading-relaxed text-section-dark-fg/75 sm:text-[15px] md:text-[16px] md:leading-[1.7]">
                  {item.texto}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </SectionShell>
  );
}
