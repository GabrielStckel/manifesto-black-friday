import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionPadrao as Props } from "../../content/manifesto.types";

export function SectionPadrao({ fundo, titulo, paragrafos }: Props) {
  return (
    <SectionShell fundo={fundo}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-balance text-center font-display text-[24px] font-semibold leading-snug md:text-[34px]">{titulo}</h2>
          <div aria-hidden className="mx-auto mt-7 h-px w-20 bg-brass/60" />
        </Reveal>
        <div className="mt-9 space-y-6">
          {paragrafos.map((texto, i) => (
            <Reveal key={texto} delay={i * 100}>
              <p className={i === 1 ? "border-l-2 border-brass pl-5 font-display text-[21px] font-semibold leading-relaxed md:text-[25px]" : "text-[16px] leading-[1.8] md:text-[18px]"}>{texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}