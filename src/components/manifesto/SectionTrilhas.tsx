import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type {
  SectionTrilhas as SectionTrilhasType,
  Trilha,
} from "../../content/manifesto.types";

function Medalhao({ trilha }: { trilha: Trilha }) {
  if (trilha.poster) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-brass/45 md:h-16 md:w-16">
        <img
          src={trilha.poster.src}
          alt={trilha.poster.alt}
          width={trilha.poster.width}
          height={trilha.poster.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brass/45 bg-black/40 transition-colors duration-300 group-hover:border-brass/80 md:h-16 md:w-16">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-30 transition-opacity duration-300 group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, var(--brass-glow) 0%, transparent 70%)",
        }}
      />
      <span className="relative font-display text-[19px] font-semibold leading-none text-brass md:text-[20px]">
        {trilha.numero}
      </span>
    </div>
  );
}

export function SectionTrilhas({ fundo, titulo, trilhas }: SectionTrilhasType) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden md:py-28">
      {/* Luz superior em latão */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 40% at 50% 0%, var(--brass) 0%, transparent 70%)",
          opacity: 0.1,
        }}
      />

      <div className="relative">
        {/* Ornamento superior */}
        <div aria-hidden className="flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-brass/50 md:w-20" />
          <span className="h-1.5 w-1.5 rotate-45 border border-brass/70" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-brass/50 md:w-20" />
        </div>

        <Reveal>
          <h2 className="mx-auto mt-8 max-w-3xl text-balance text-center font-display text-[clamp(1.65rem,6.6vw,2.25rem)] font-semibold leading-[1.14] tracking-[-0.015em] md:mt-10 md:text-[clamp(1.7rem,2.9vw,2.25rem)] md:leading-[1.1]">
            {titulo}
          </h2>
        </Reveal>

        <ul className="relative mx-auto mt-10 grid max-w-5xl items-stretch gap-5 sm:grid-cols-2 md:mt-16 md:gap-7">
          {trilhas.map((trilha, i) => (
            <Reveal
              as="li"
              key={trilha.numero}
              delay={i * 100}
              className="block h-full"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-brass/50 md:p-8">
                {/* Brilho de canto no hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.13]"
                  style={{
                    background:
                      "radial-gradient(70% 60% at 0% 0%, var(--brass) 0%, transparent 65%)",
                  }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-brass/50 to-transparent opacity-60"
                />

                <div className="relative flex items-center gap-4">
                  <Medalhao trilha={trilha} />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brass md:text-[12px]">
                      {trilha.rotulo}
                    </p>
                    {trilha.status ? (
                      <span className="mt-2 inline-block rounded-pill border border-brass/40 bg-black/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brass">
                        {trilha.status}
                      </span>
                    ) : null}
                  </div>
                </div>

                <h3 className="relative mt-5 font-display text-[18px] font-semibold leading-snug text-section-dark-fg md:text-[19px]">
                  {trilha.titulo}
                </h3>

                <span
                  aria-hidden
                  className="relative mt-4 block h-px w-14 bg-gradient-to-r from-brass/60 to-transparent transition-all duration-300 group-hover:w-24"
                />

                <p className="relative mt-4 text-left text-[15px] leading-[1.75] text-section-dark-fg/75 md:text-[16px] md:leading-[1.8]">
                  {trilha.texto}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Ornamento inferior */}
        <div
          aria-hidden
          className="mt-12 flex items-center justify-center gap-3 md:mt-16"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-brass/40 md:w-24" />
          <span className="h-1 w-1 rotate-45 bg-brass/60" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-brass/40 md:w-24" />
        </div>
      </div>
    </SectionShell>
  );
}
