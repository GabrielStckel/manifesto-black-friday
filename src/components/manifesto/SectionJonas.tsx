import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionJonas as Props } from "../../content/manifesto.types";

export function SectionJonas({ fundo, titulo, nome, texto }: Props) {
  if (!texto.trim()) return null;
  return (
    <SectionShell fundo={fundo}>
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-[26px] font-semibold md:text-[34px]">{titulo}</h2>
        <h3 className="mt-8 font-display text-[23px] font-semibold">{nome}</h3>
        <p className="mt-5 whitespace-pre-line text-[16px] leading-[1.8] md:text-[18px]">{texto}</p>
      </Reveal>
    </SectionShell>
  );
}