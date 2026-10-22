import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionPadrao as Props } from "../../content/manifesto.types";

// O padrão: texto à esquerda e a lista de cenas em Archivo à direita
// (empilhado no mobile), sobre pergaminho.
export function SectionPadrao({ fundo, eyebrow, titulo, paragrafos, destaque, linkTopo, cenas }: Props) {
  return (
    <SectionShell fundo={fundo} className="py-16 md:py-24">
      <div className="relative grid gap-10 md:grid-cols-2 md:gap-14">
        <Reveal>
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.26em] text-brass-ink md:text-[12px]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-[clamp(1.5rem,6vw,2.1rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-section-light-fg">
            {titulo}
          </h2>
          <div className="mt-7 space-y-5">
            {paragrafos.map((texto) => {
              const idx = destaque ? texto.indexOf(destaque) : -1;
              return (
                <p key={texto} className="text-[15px] leading-[1.8] text-section-light-fg/85 md:text-[16.5px]">
                  {idx === -1 ? (
                    texto
                  ) : (
                    <>
                      {texto.slice(0, idx)}
                      <strong className="font-semibold text-section-light-fg">{destaque}</strong>
                      {texto.slice(idx + destaque.length)}
                    </>
                  )}
                </p>
              );
            })}
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-6 inline-block text-[14px] font-semibold text-red-ink underline underline-offset-4 decoration-red-ink/50 hover:decoration-red-ink md:text-[15px]"
          >
            {linkTopo}
          </a>
        </Reveal>

        <Reveal delay={120}>
          <ul className="md:pt-2">
            {cenas.map((cena, i) => (
              <li
                key={cena}
                className={`relative flex gap-4 py-5 ${i > 0 ? "border-t border-on-parchment/10" : ""}`}
              >
                <span
                  aria-hidden
                  className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45 border border-brass-ink/70"
                />
                <p className="font-display text-[16.5px] leading-[1.6] text-section-light-fg md:text-[18px]">
                  {cena}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  );
}
