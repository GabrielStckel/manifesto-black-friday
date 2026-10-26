import { MarkedTitle } from "./MarkedTitle";
import { useVisibleAnimation } from "./useVisibleAnimation";
import type { Trilha } from "../../content/manifesto.types";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionTrilhas as SectionTrilhasType } from "../../content/manifesto.types";

function Medalhao({ numero }: { numero: string }) {
  return <div className="medallion"><span>{numero}</span></div>;
}

function Sublegenda({ children }: { children: string }) {
  return (
    <p className="mt-2 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-brass-glow md:text-[11.5px]">
      {children}
    </p>
  );
}

function TrailCard({ trilha }: { trilha: Trilha }) {
  const { ref, visible } = useVisibleAnimation<HTMLElement>();
  return <article ref={ref} className={`trail-card ${visible ? "animation-visible" : ""}`} data-n={trilha.numero}>
    <Medalhao numero={trilha.numero} />
    <div className="relative min-w-0">
      <p className="trail-label">TRILHA {trilha.numero}</p>
      <h4 className="trail-title mt-2">{trilha.titulo}</h4>
      <p className="trail-text texto mt-3">{trilha.texto}</p>
    </div>
  </article>;
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
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.26em] text-brass-glow md:text-[12px]">
            {eyebrow}
          </p>
          <MarkedTitle text={titulo} phrase="organizado em trilhas" className="mx-auto mt-4 max-w-3xl text-balance text-center font-display text-[clamp(1.5rem,6.4vw,2.2rem)] font-semibold leading-[1.14] tracking-[-0.015em] md:text-[clamp(1.6rem,2.9vw,2.25rem)] md:leading-[1.1]" />
          <p className="texto texto-centro mx-auto mt-5 max-w-[56ch] text-[15px] leading-[1.75] text-section-dark-fg/95 md:text-[16.5px]">
            {texto}
          </p>
        </Reveal>

        {/* Profundidade — as quatro trilhas */}
        <Reveal>
          <div className="mx-auto mt-12 max-w-5xl md:mt-14">
            <h3 className="font-display text-[22px] font-semibold text-brass-glow md:text-[25px]">
              {profundidade.titulo}
            </h3>
            <Sublegenda>{profundidade.sublegenda}</Sublegenda>
          </div>
        </Reveal>
        <ul className="relative mx-auto mt-6 grid max-w-5xl items-stretch gap-3.5 md:grid-cols-2 md:mt-7">
          {trilhas.map((trilha, i) => (
            <Reveal as="li" key={trilha.numero} delay={i * 100} className="block h-full">
              <TrailCard trilha={trilha} />
            </Reveal>
          ))}
        </ul>

        {/* Constância e Companhia */}
        <Reveal delay={160}>
          <div className="mx-auto mt-12 grid max-w-5xl gap-9 border-t border-brass/25 pt-9 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="font-display text-[22px] font-semibold leading-snug text-brass-glow md:text-[25px]">
                {constancia.titulo}
              </h3>
              <Sublegenda>{constancia.sublegenda}</Sublegenda>
              <ul className="mt-5 space-y-4 text-[15px] leading-[1.75] text-section-dark-fg/95 md:text-[16px]">
                {constancia.itens.map((item) => (
                  <li key={item} className="texto border-l border-brass/30 pl-4">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[22px] font-semibold leading-snug text-brass-glow md:text-[25px]">
                {companhia.titulo}
              </h3>
              <Sublegenda>{companhia.sublegenda}</Sublegenda>
              <p className="texto mt-5 text-[15px] leading-[1.75] text-section-dark-fg/95 md:text-[16px]">
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
                  className="w-[78%] shrink-0 snap-center rounded-lg border border-border-dark/[0.14] object-cover sm:w-[60%] md:w-full"
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
