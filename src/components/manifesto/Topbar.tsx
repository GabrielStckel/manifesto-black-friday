import { useEffect, useState } from "react";
import { BF_FIM, formatarFimBF } from "../../lib/config";

// Faixa fina fixa no topo com o prazo da Black Friday.
// Some quando a campanha expira; nunca reinicia.
export function Topbar() {
  const [expirado, setExpirado] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => setExpirado(Date.now() > BF_FIM);
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  if (expirado) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-40 border-b border-brass/20 bg-black/85 backdrop-blur-md">
      <p className="px-4 py-2 text-center text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-brass sm:text-[10.5px] sm:tracking-[0.2em]">
        Black Friday do Manifesto · termina em {formatarFimBF()}
      </p>
    </div>
  );
}
