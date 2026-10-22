import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionParadigma as SectionParadigmaType } from "../../content/manifesto.types";

// A virada: dois painéis sobre pergaminho — o olhar cartesiano (claro,
// inerte) e o olhar sistêmico (escuro, com os quatro pontos).
export function SectionParadigma({
  fundo,
  eyebrow,
  titulo,
  antigo,
  novo,
}: SectionParadigmaType) {
  return (
    <SectionShell fundo={fundo} className="py-16 md:py-24">
      <div className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-brass-ink md:text-[12px]">
            {eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-[24ch] text-pretty text-center font-display font-semibold leading-[1.3] text-section-light-fg text-[clamp(1.15rem,4.8vw,1.55rem)] sm:max-w-[26ch] md:max-w-3xl md:text-pretty md:text-[clamp(1.45rem,2.7vw,2.05rem)] md:leading-[1.12]">
            {titulo}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:mt-14 md:grid-cols-2 md:gap-7 md:items-stretch">
          {/* Painel claro — o olhar que nos moldou */}
          <Reveal className="h-full">
            <div className="h-full rounded-xl border border-black/10 bg-white/50 p-6 md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-section-light-fg/50 md:text-[11px]">
                {antigo.rotulo}
              </p>
              <h3 className="mt-4 font-display text-[20px] font-semibold leading-snug text-section-light-fg/75 md:text-[22px]">
                {antigo.nome}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-section-light-fg/65 md:text-[16px]">
                {antigo.texto}
              </p>
            </div>
          </Reveal>

          {/* Painel escuro — o olhar sistêmico */}
          <Reveal delay={120} className="h-full">
            <div className="h-full rounded-xl border border-brass/30 bg-section-dark-bg p-6 text-section-dark-fg shadow-[0_30px_90px_-40px_rgba(0,0,0,0.7)] md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brass md:text-[11px]">
                {novo.rotulo}
              </p>
              <ul className="mt-6 space-y-6">
                {novo.itens.map((item, i) => (
                  <li key={item.titulo} className={i > 0 ? "border-t border-white/10 pt-6" : ""}>
                    <h4 className="font-display text-[16.5px] font-semibold leading-snug md:text-[18px]">
                      {item.titulo}
                    </h4>
                    <p className="mt-2 text-[14.5px] leading-[1.7] text-section-dark-fg/75 md:text-[15.5px]">
                      {item.texto}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
