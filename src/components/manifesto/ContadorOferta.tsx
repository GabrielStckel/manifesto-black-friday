import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { BF_FIM, TEM_PRAZO } from "../../lib/config";

type Estado = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  expirado: boolean;
};

function calcular(agora: number): Estado {
  const restante = Math.max(0, BF_FIM - agora);
  const seg = Math.floor(restante / 1000);
  return {
    dias: Math.floor(seg / 86400),
    horas: Math.floor((seg % 86400) / 3600),
    minutos: Math.floor((seg % 3600) / 60),
    segundos: seg % 60,
    expirado: restante <= 0,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

// Contador honesto: igual para todo visitante, conta até BF_FIM e nunca
// reinicia. Enquanto REGRA_PRAZO estiver vazia (TEM_PRAZO falso), não
// renderiza nada — a página fica sem nenhum contador, data ou prazo.
export function ContadorOferta({
  variante = "completo",
}: {
  variante?: "compacto" | "completo";
}) {
  const [estado, setEstado] = useState<Estado | null>(null);

  useEffect(() => {
    if (!TEM_PRAZO) return;
    const tick = () => setEstado(calcular(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!TEM_PRAZO) return null;

  const compacto = variante === "compacto";

  const blocos = estado
    ? [
        { valor: pad(estado.dias), rotulo: "dias" },
        { valor: pad(estado.horas), rotulo: "horas" },
        { valor: pad(estado.minutos), rotulo: "min" },
        { valor: pad(estado.segundos), rotulo: "seg" },
      ]
    : [
        { valor: "--", rotulo: "dias" },
        { valor: "--", rotulo: "horas" },
        { valor: "--", rotulo: "min" },
        { valor: "--", rotulo: "seg" },
      ];

  return (
    <div
      className={`w-full rounded-lg border border-brass/25 bg-bg-black/60 backdrop-blur-sm ${
        compacto ? "px-4 py-4 sm:px-5" : "px-5 py-6 sm:px-7"
      }`}
      style={{ boxShadow: "inset 0 1px 0 rgba(197,162,103,0.12)" }}
    >
      {estado?.expirado ? (
        <p className="flex items-center justify-center gap-2 text-center text-[13px] font-semibold text-section-dark-fg md:text-[14px]">
          A condição de Black Friday terminou.
        </p>
      ) : (
        <>
          <p className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brass md:text-[11px]">
            <Clock aria-hidden className="h-3.5 w-3.5" />
            A condição de Black Friday termina em
          </p>

          <div
            className="mt-4 flex items-start justify-center gap-2 sm:gap-3"
            aria-live="off"
          >
            {blocos.map((b) => (
              <div
                key={b.rotulo}
                className={`flex min-w-[58px] flex-col items-center rounded-md border border-white/[0.14] bg-white/[0.04] px-2 py-2 sm:min-w-[66px] ${
                  compacto ? "" : "sm:px-3 sm:py-3"
                }`}
              >
                <span
                  className={`font-display font-semibold leading-none tabular-nums text-section-dark-fg ${
                    compacto
                      ? "text-[22px] md:text-[24px]"
                      : "text-[26px] md:text-[30px]"
                  }`}
                >
                  {b.valor}
                </span>
                <span className="mt-1.5 text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                  {b.rotulo}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
