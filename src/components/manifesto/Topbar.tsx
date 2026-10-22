import { formatarFimBF, TEM_PRAZO } from "../../lib/config";

// Faixa fina fixa no topo: marca à esquerda (some no mobile) e o selo da
// Black Friday à direita. A data só aparece quando REGRA_PRAZO está
// preenchida (TEM_PRAZO).
export function Topbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-40 border-b border-brass/20 bg-bg-bg-black/95 ">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-8">
        <p className="hidden font-display text-[13px] font-semibold tracking-wide text-section-dark-fg/90 sm:block">
          Manifesto Sistêmico
        </p>
        <p className="mx-auto text-center text-[11.5px] font-semibold uppercase leading-snug tracking-[0.14em] text-brass-glow sm:mx-0 sm:text-[11.5px] sm:tracking-[0.18em]">
          BLACK FRIDAY · PELA PRIMEIRA VEZ POR ASSINATURA
          {TEM_PRAZO ? ` · ATÉ ${formatarFimBF().toUpperCase()}` : ""}
        </p>
      </div>
    </div>
  );
}
