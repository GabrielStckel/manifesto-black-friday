import { Quote } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionDepoimentos as SectionDepoimentosType } from "../../content/manifesto.types";

export function SectionDepoimentos({
  fundo,
  eyebrow,
  titulo,
  itens,
  nota,
}: SectionDepoimentosType) {
  // Lista vazia: a seção não renderiza.
  if (itens.length === 0) return null;

  return (
    <SectionShell fundo={fundo}>
      <div>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.26em] text-brass-ink md:text-[12px]">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display font-semibold leading-[1.12] text-section-light-fg text-[clamp(1.6rem,6.8vw,2.2rem)] md:text-[clamp(1.45rem,2.5vw,1.95rem)]">
              {titulo}
            </h2>
          </Reveal>
          <span aria-hidden className="mx-auto mt-6 block h-px w-12 bg-brass/60" />
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {itens.map((item, i) => (
            <Reveal as="li" key={`${item.nome}-${i}`} delay={i * 100} className="block h-full">
              <figure className="flex h-full flex-col rounded-xl border border-on-parchment/10 bg-surface-light/60 p-6 md:p-7">
                <Quote aria-hidden className="h-5 w-5 text-brass-ink/70" />
                <blockquote className="mt-4 flex-1 text-left text-[14.5px] leading-[1.7] text-section-light-fg/85 md:text-[15px]">
                  {item.texto}
                </blockquote>
                <figcaption className="mt-5 border-t border-on-parchment/10 pt-4 text-left">
                  <p className="text-[13.5px] font-semibold text-section-light-fg">
                    {item.nome}
                  </p>
                  <p className="mt-0.5 text-[12px] text-section-light-fg/60">
                    {item.detalhe}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[12px] text-section-light-fg/60 md:text-[12.5px]">
          {nota}
        </p>
      </div>
    </SectionShell>
  );
}
