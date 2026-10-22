import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionTrilhas as SectionTrilhasType } from "../../content/manifesto.types";

function Medalhao({ numero }: { numero: string }) {
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
        {numero}
      </span>
    </div>
  );
}

function Sublegenda({ children }: { children: string }) {
  return (
    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brass md:text-[11.5px]">
      {children}
    </p>
  );
}

// O Manifesto por dentro: os três grupos (Profundidade com as 4 trilhas,
// Constância, Companhia) e, quando houver, uma faixa de prints da área de
// membros.
export function SectionTrilhas({
  fundo,
  eyebrow,
  titulo,
  texto,
  profundidade,
  trilhas,
  constancia,
  companhia,
  prints,
}: SectionTrilhasType) {
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
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-brass md:text-[12px]">
            {eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-center font-display text-[clamp(1.5rem,6.4vw,2.2rem)] font-semibold leading-[1.14] tracking-[-0.015em] md:text-[clamp(1.6rem,2.9vw,2.25rem)] md:leading-[1.1]">
            {titulo}
          </h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-[15px] leading-[1.75] text-section-dark-fg/80 md:text-[16.5px]">
            {texto}
          </p>
        </Reveal>

        {/* Profundidade — as quatro trilhas */}
        <Reveal>
          <div className="mx-auto mt-12 max-w-5xl md:mt-14">
            <h3 className="font-display text-[22px] font-semibold text-brass md:text-[25px]">
              {profundidade.titulo}
            </h3>
            <Sublegenda>{profundidade.sublegenda}</Sublegenda>
          </div>
        </Reveal>
        <ul className="relative mx-auto mt-6 grid max-w-5xl items-stretch gap-5 sm:grid-cols-2 md:mt-7 md:gap-7">
          {trilhas.map((trilha, i) => (
            <Reveal as="li" key={trilha.numero} delay={i * 100} className="block h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-brass/50 md:p-7">
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
                  <Medalhao numero={trilha.numero} />
                  <h4 className="min-w-0 font-display text-[17.5px] font-semibold leading-snug text-section-dark-fg md:text-[19px]">
                    {trilha.titulo}
                  </h4>
                </div>
                <span
                  aria-hidden
                  className="relative mt-4 block h-px w-14 bg-gradient-to-r from-brass/60 to-transparent transition-all duration-300 group-hover:w-24"
                />
                <p className="relative mt-4 text-left text-[14.5px] leading-[1.7] text-section-dark-fg/75 md:text-[15.5px] md:leading-[1.75]">
                  {trilha.texto}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Constância e Companhia */}
        <Reveal delay={160}>
          <div className="mx-auto mt-12 grid max-w-5xl gap-9 border-t border-brass/25 pt-9 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="font-display text-[22px] font-semibold leading-snug text-brass md:text-[25px]">
                {constancia.titulo}
              </h3>
              <Sublegenda>{constancia.sublegenda}</Sublegenda>
              <ul className="mt-5 space-y-4 text-[15px] leading-[1.75] text-section-dark-fg/80 md:text-[16px]">
                {constancia.itens.map((item) => (
                  <li key={item} className="border-l border-brass/30 pl-4">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-semibold leading-snug text-brass md:text-[25px]">
                {companhia.titulo}
              </h3>
              <Sublegenda>{companhia.sublegenda}</Sublegenda>
              <p className="mt-5 text-[15px] leading-[1.75] text-section-dark-fg/80 md:text-[16px]">
                {companhia.texto}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Prints da área de membros — só com itens */}
        {prints && prints.length > 0 ? (
          <Reveal delay={200}>
            <div className="mx-auto mt-12 flex max-w-5xl snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
              {prints.map((print) => (
                <img
                  key={print.src}
                  src={print.src}
                  alt={print.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-[78%] shrink-0 snap-center rounded-lg border border-white/10 object-cover sm:w-[60%] md:w-full"
                />
              ))}
            </div>
          </Reveal>
        ) : null}

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
