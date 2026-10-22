import { SectionShell } from "./SectionShell";
import type { SectionRodape } from "../../content/manifesto.types";

export function Footer({ fundo, marca, copyright }: SectionRodape) {
  return (
    <SectionShell fundo={fundo} className="py-14 md:py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="font-display text-[18px] font-semibold text-section-dark-fg md:text-[18px]">
          {marca}
        </p>
        <span aria-hidden className="h-px w-24 bg-white/10" />
        <p className="text-[12px] text-muted-foreground md:text-[13px]">{copyright}</p>
      </div>
    </SectionShell>
  );
}
