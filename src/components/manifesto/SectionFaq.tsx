import { ManifestoCta } from "./ManifestoCta";
import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionFaq as SectionFaqType } from "../../content/manifesto.types";

export function SectionFaq({ fundo, eyebrow, titulo, itens, cta, microtexto }: SectionFaqType) {
  const [aberto, setAberto] = useState<number | null>(0);
  const baseId = useId();

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

        <div className="mx-auto mt-12 max-w-3xl">
          <ul>
            {itens.map((item, i) => {
              const estaAberto = aberto === i;
              const botaoId = `${baseId}-b-${i}`;
              const painelId = `${baseId}-p-${i}`;

              return (
                <Reveal as="li" key={item.pergunta} className="border-b border-on-parchment/10">
              <button
                type="button"
                id={botaoId}
                aria-expanded={estaAberto}
                aria-controls={painelId}
                onClick={() => setAberto(estaAberto ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <h3 className="text-[15px] font-semibold leading-snug text-section-light-fg sm:text-[17px] md:text-[17px]">
                  {item.pergunta}
                </h3>
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-transparent text-red-primary"
                >
                  {estaAberto ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>

                  <div
                    id={painelId}
                    role="region"
                    aria-labelledby={botaoId}
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: estaAberto ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="pb-5 pr-2 text-left text-[14.5px] leading-relaxed text-section-light-fg/80 sm:pr-10 sm:text-[15px] md:text-[16px] md:leading-[1.75]">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center md:mt-12">
            <ManifestoCta href="#planos" className="w-full max-w-[440px] sm:w-auto">{cta}</ManifestoCta>
            <p className="mt-4 text-[12px] text-section-light-fg/60 md:text-[13px]">{microtexto}</p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
