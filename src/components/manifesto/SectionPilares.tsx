import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionPilares as Props } from "../../content/manifesto.types";

// Os três pilares: três colunas separadas por linhas (empilhadas no
// mobile), palavra grande em Archivo + texto. Fundo vinho.
export function SectionPilares({ fundo, eyebrow, titulo, itens, fecho }: Props) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden py-16 md:py-24">
      <div className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.26em] text-on-red/70 md:text-[12px]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-[clamp(1.4rem,5.6vw,2rem)] font-semibold leading-[1.2] md:text-[clamp(1.5rem,2.8vw,2.1rem)]">
            {titulo}
          </h2>
        </Reveal>

        <ol className="mx-auto mt-12 grid max-w-5xl gap-0 md:mt-14 md:grid-cols-3">
          {itens.map((item, i) => (
            <Reveal
              as="li"
              key={item.titulo}
              delay={i * 100}
              className={`block py-8 md:px-8 md:py-2 ${
                i > 0 ? "border-t border-on-red/20 md:border-l md:border-t-0" : ""
              }`}
            >
              <h3 className="font-display text-[26px] font-semibold leading-tight md:text-[30px]">
                {item.titulo}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-section-red-fg/85 md:text-[16px]">
                {item.texto}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={240}>
          <p className="mx-auto mt-12 max-w-3xl text-balance text-center font-display text-[22px] font-semibold leading-snug md:mt-16 md:text-[28px]">
            {fecho}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
