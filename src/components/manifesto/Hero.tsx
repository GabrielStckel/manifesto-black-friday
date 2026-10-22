import { ManifestoCta } from "./ManifestoCta";
import { CampoConstelacao } from "./CampoConstelacao";
import { Orbe } from "./Orbe";
import { VturbPlayer } from "./VturbPlayer";
import type { Hero as HeroType } from "../../content/manifesto.types";

// Destaca um trecho da headline em latão.
function HeadlinePlayer({ texto, destaque }: { texto: string; destaque: string }) {
  const idx = texto.indexOf(destaque);
  if (idx === -1) return <>{texto}</>;
  return (
    <>
      {texto.slice(0, idx)}
      <strong className="font-semibold text-brass-glow">{destaque}</strong>
      {texto.slice(idx + destaque.length)}
    </>
  );
}

// Destaca os preços do subtítulo em latão claro.
function Subtitulo({ texto, destaques }: { texto: string; destaques: string[] }) {
  const partes: { trecho: string; destaque: boolean }[] = [];
  let restante = texto;
  while (restante.length > 0) {
    let menorIdx = -1;
    let destaqueAchado = "";
    for (const d of destaques) {
      const i = restante.indexOf(d);
      if (i !== -1 && (menorIdx === -1 || i < menorIdx)) {
        menorIdx = i;
        destaqueAchado = d;
      }
    }
    if (menorIdx === -1) {
      partes.push({ trecho: restante, destaque: false });
      break;
    }
    if (menorIdx > 0) partes.push({ trecho: restante.slice(0, menorIdx), destaque: false });
    partes.push({ trecho: destaqueAchado, destaque: true });
    restante = restante.slice(menorIdx + destaqueAchado.length);
  }
  return (
    <>
      {partes.map((p, i) =>
        p.destaque ? (
          <strong key={i} className="font-semibold text-brass-glow">
            {p.trecho}
          </strong>
        ) : (
          <span key={i}>{p.trecho}</span>
        ),
      )}
    </>
  );
}

export function Hero({
  badge,
  h1,
  headlinePlayer,
  headlineDestaque,
  subtitulo,
  subtituloDestaques,
  cta,
  microtexto,
}: HeroType) {
  return (
    <section id="hero" className="relative overflow-hidden bg-hero px-5 pb-14 pt-12 text-section-dark-fg sm:px-8 md:pb-20 md:pt-16">
      {/* Camadas de fundo — todas decorativas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(10,4,4,0.45) 0%, rgba(20,8,8,0.15) 60%, transparent 100%)",
        }}
      />
      <CampoConstelacao />

      <Orbe />

      {/* Brilho vermelho: max() no tamanho faz o Chrome descartar o
          gradiente inteiro, então o celular (até 640px) e o desktop usam
          regras separadas com tamanhos válidos. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 sm:hidden"
        style={{
          background:
            "radial-gradient(150% 55% at 50% 42%, var(--red-accent) 0%, transparent 68%), radial-gradient(110% 38% at 50% 34%, var(--red-deep) 0%, transparent 72%)",
          opacity: 0.55,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background:
            "radial-gradient(70% 52% at 50% 42%, var(--red-accent) 0%, transparent 68%), radial-gradient(46% 34% at 50% 34%, var(--red-deep) 0%, transparent 72%)",
          opacity: 0.55,
        }}
      />
      {/* Luz rasante superior em latão (mesma correção de max() do brilho
          vermelho: regras separadas por breakpoint, tamanhos válidos). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 sm:hidden"
        style={{
          background:
            "radial-gradient(160% 45% at 50% 0%, var(--brass) 0%, transparent 72%)",
          opacity: 0.18,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background:
            "radial-gradient(80% 45% at 50% 0%, var(--brass) 0%, transparent 72%)",
          opacity: 0.2,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(140% 95% at 50% 42%, transparent 62%, rgba(0,0,0,0.32) 100%)",
        }}
      />
      {/* Linha de horizonte na base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass/25 to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center md:max-w-4xl">
        <p className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-brass/25 bg-surface-light/[0.04] px-4 py-2 text-[11.5px] font-semibold uppercase leading-[1.6] tracking-[0.2em] text-brass-glow sm:text-[11.5px] sm:tracking-[0.26em]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brass"
          />
          {badge}
        </p>

        <h1
          className="hero-title mt-7 md:mt-9"
          style={{ textShadow: "var(--text-shadow-hero)" }}
        >
          {h1}
        </h1>

        <p className="mt-7 max-w-[46ch] text-[15px] font-semibold leading-[1.55] text-section-dark-fg/90 md:mt-8 md:text-[17px]">
          <HeadlinePlayer texto={headlinePlayer} destaque={headlineDestaque} />
        </p>

        <div className="mt-6 flex w-full justify-center md:mt-8">
          <VturbPlayer />
        </div>

        <p
          className="mt-8 max-w-[44ch] text-[15.5px] leading-[1.65] text-section-dark-fg/90 md:mt-10 md:max-w-[58ch] md:text-[18px] md:leading-[1.65]"
          style={{ textShadow: "var(--text-shadow-soft)" }}
        >
          <Subtitulo texto={subtitulo} destaques={subtituloDestaques} />
        </p>

        <ManifestoCta href="#planos" className="mt-8 w-full max-w-[440px] md:mt-10">{cta}</ManifestoCta>

        <p className="mt-4 max-w-[34ch] text-[12px] leading-snug text-muted-foreground md:mt-5 md:max-w-none md:text-[13px]">
          {microtexto}
        </p>
      </div>
    </section>
  );
}
