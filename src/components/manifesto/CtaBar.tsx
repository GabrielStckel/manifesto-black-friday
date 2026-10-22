import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "../../lib/config";
import { handleCheckoutClick } from "../../lib/analytics";




export function CtaBar({ label }: { label: string }) {
  const [visivel, setVisivel] = useState(false);
  const [sobreClaro, setSobreClaro] = useState(false);

  useEffect(() => {
    const atualizar = () => {
      const oferta = document.getElementById("oferta");
      const ofertaVisivel =
        !!oferta && oferta.getBoundingClientRect().top <= window.innerHeight - 40;

      const deveMostrar = window.scrollY > 400 && !ofertaVisivel;
      setVisivel(deveMostrar);

      // elementsFromPoint (plural) para ignorar a própria barra fixa,
      // que cobre o ponto de amostragem.
      const pilha = document.elementsFromPoint(
        window.innerWidth / 2,
        window.innerHeight - 40,
      );
      let secao: Element | null = null;
      for (const el of pilha) {
        const s = el.closest("[data-section-bg]");
        if (s) {
          secao = s;
          break;
        }
      }
      setSobreClaro(secao?.getAttribute("data-section-bg") === "light");
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
      className={`fixed inset-x-0 bottom-0 z-30 transition-all duration-300 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      } ${
        sobreClaro
          ? "border-t border-black/10 bg-section-light-bg/80 text-section-light-fg backdrop-blur-xl"
          : "border-t border-white/10 bg-bg-black/70 text-section-dark-fg backdrop-blur-xl"
      }`}
      style={{
        boxShadow: "0 -12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(197,162,103,0.12)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-3 sm:px-8">
        <a
          href={CHECKOUT_URL}
          onClick={handleCheckoutClick("cta_bar", CHECKOUT_URL)}
          tabIndex={visivel ? undefined : -1}
          className="group relative inline-flex min-h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-cta border border-white/10 bg-gradient-to-b from-red-primary to-red-primary-hover px-6 text-center text-[13.5px] font-bold uppercase leading-snug tracking-[0.06em] text-on-red shadow-[0_0_28px_rgba(211,58,52,0.28)] transition-all hover:shadow-[0_0_40px_rgba(211,58,52,0.42)] hover:brightness-110 active:scale-[0.98] sm:w-auto sm:min-w-[320px] md:min-h-[56px] md:text-[15px]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"
          />
          <span className="relative z-10">{label}</span>
          <ArrowRight
            aria-hidden="true"
            className="relative z-10 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}

