import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionMentiras as SectionMentirasType } from "../../content/manifesto.types";

export function SectionMentiras({ fundo, titulo, itens }: SectionMentirasType) {
  return (
    <SectionShell fundo={fundo}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 40% at 15% 25%, var(--red-deep) 0%, transparent 65%)",
          opacity: 0.28,
        }}
      />

      <div className="relative z-10">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="mx-auto max-w-[24ch] text-pretty text-center font-display font-semibold leading-[1.35] text-[clamp(1rem,4.2vw,1.35rem)] sm:max-w-[26ch] sm:text-[clamp(1.1rem,4.6vw,1.55rem)] md:max-w-3xl md:text-pretty md:text-[clamp(1.35rem,2.6vw,2rem)] md:leading-[1.14]">
          {titulo}
        </h2>
        <div aria-hidden className="mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-brass/60 md:w-16" />
          <span className="h-1 w-1 rotate-45 bg-brass/80" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-brass/60 md:w-16" />
        </div>
      </Reveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7 md:items-stretch">
        {itens.map((item, i) => (
          <Reveal as="li" key={item.rotulo} delay={i * 120} className="h-full">
            <article className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-surface-dark/60 p-6 text-left sm:p-8">
              <p className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.18em] text-brass md:text-[12px]">
                {item.rotulo}
              </p>

              <p className="relative z-10 mt-4 font-display text-[clamp(1.05rem,1.5vw,1.12rem)] italic leading-snug text-muted-foreground lg:whitespace-nowrap">
                {"\u201C"}
                {item.mentira}
                {"\u201D"}
              </p>

              <div aria-hidden className="relative z-10 mt-6 h-px w-12 bg-brass/50" />

              <p className="relative z-10 mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-accent md:text-[12px]">
                {item.rotuloVerdade}
              </p>

              <p className="relative z-10 mt-3 text-justify hyphens-auto text-[15px] leading-relaxed text-section-dark-fg/90 sm:text-base md:text-[17px] md:leading-[1.75]">
                {item.verdade}
              </p>

              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-4 right-4 z-0 select-none font-display font-semibold leading-none text-brass/[0.07] text-[70px] sm:text-[90px] md:text-[100px]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          </Reveal>
        ))}
      </ul>
      </div>
    </SectionShell>
  );
}
