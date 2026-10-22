import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionPilares as Props } from "../../content/manifesto.types";

export function SectionPilares({ fundo, titulo, intro, itens, sozinho, fecho }: Props) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden md:py-28">
      <div className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div aria-hidden className="mx-auto h-1.5 w-1.5 rotate-45 border border-on-red/70" />
          <h2 className="mt-8 text-balance font-display text-[27px] font-semibold leading-snug md:text-[36px]">{titulo}</h2>
          <p className="mt-6 text-[16px] leading-relaxed text-section-red-fg/85 md:text-[18px]">{intro}</p>
        </Reveal>
        <ol className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3 md:gap-7">
          {itens.map((item, i) => (
            <Reveal as="li" key={item.titulo} delay={i * 100} className="h-full">
              <article className="h-full rounded-lg border border-on-red/25 bg-section-dark-bg/20 p-7">
                <span aria-hidden className="font-display text-[32px] text-on-red/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-[22px] font-semibold">{item.titulo}</h3>
                <p className="mt-3 text-[16px] leading-[1.75] text-section-red-fg/85">{item.texto}</p>
              </article>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={200} className="mx-auto mt-12 max-w-3xl border-t border-on-red/25 pt-9">
          <h3 className="text-center font-display text-[23px] font-semibold md:text-[27px]">{sozinho.titulo}</h3>
          <p className="mt-6 text-[16px] leading-[1.8] text-section-red-fg/90 md:text-[18px]">{sozinho.texto}</p>
          <p className="mt-9 text-balance text-center font-display text-[23px] font-semibold leading-snug md:text-[29px]">{fecho}</p>
        </Reveal>
      </div>
    </SectionShell>
  );
}