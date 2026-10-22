import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { CtaBar as CtaBarType } from "../../content/manifesto.types";

// Barra fixa inferior: preta translúcida com desfoque e borda superior em
// latão. Aparece depois que o hero sai da tela e some quando #planos está
// visível. Respeita a área segura do iPhone.
export function CtaBar({ resumo, detalhe, botao }: CtaBarType) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const atualizar = () => {
      const planos = document.getElementById("planos");
      const planosVisivel =
        !!planos && planos.getBoundingClientRect().top <= window.innerHeight - 40;

      const deveMostrar = window.scrollY > 400 && !planosVisivel;
      setVisivel(deveMostrar);
    };

    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    return () => {
      window.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  return (
    <div
      aria-hidden={!visivel}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-brass/25 bg-bg-black/75 text-section-dark-fg backdrop-blur-xl transition-all duration-300 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{
        boxShadow: "0 -12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(197,162,103,0.12)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <div className="min-w-0">
          <p className="truncate font-display text-[13.5px] font-semibold leading-tight text-section-dark-fg sm:text-[15px]">
            {resumo}
          </p>
          <p className="mt-0.5 hidden text-[10.5px] leading-tight text-muted-foreground min-[380px]:block sm:text-[11.5px]">
            {detalhe}
          </p>
        </div>
        <a
          href="#planos"
          tabIndex={visivel ? undefined : -1}
          className="group relative inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 overflow-hidden rounded-cta border border-white/10 bg-gradient-to-b from-red-primary to-red-primary-hover px-5 text-center text-[12.5px] font-bold uppercase leading-snug tracking-[0.06em] text-on-red shadow-[0_0_28px_rgba(211,58,52,0.28)] transition-all hover:shadow-[0_0_40px_rgba(211,58,52,0.42)] hover:brightness-110 active:scale-[0.98] sm:min-h-[52px] sm:px-7 sm:text-[13.5px]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"
          />
          <span className="relative z-10">{botao}</span>
          <ArrowRight
            aria-hidden="true"
            className="relative z-10 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}
