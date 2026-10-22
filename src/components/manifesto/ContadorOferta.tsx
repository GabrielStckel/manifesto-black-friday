import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import {
  OFERTA_DEADLINE,
  OFERTA_INICIO,
  VAGAS_FIM,
  VAGAS_INICIO,
} from "../../lib/config";

type Estado = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  expirado: boolean;
  progresso: number;
};

function calcular(agora: number): Estado {
  const restante = Math.max(0, OFERTA_DEADLINE - agora);
  const total = Math.max(1, OFERTA_DEADLINE - OFERTA_INICIO);
  const decorrido = Math.min(1, Math.max(0, (agora - OFERTA_INICIO) / total));
  const progresso = VAGAS_INICIO + (VAGAS_FIM - VAGAS_INICIO) * decorrido;

  const seg = Math.floor(restante / 1000);
  return {
    dias: Math.floor(seg / 86400),
    horas: Math.floor((seg % 86400) / 3600),
    minutos: Math.floor((seg % 3600) / 60),
    segundos: seg % 60,
    expirado: restante <= 0,
    progresso,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function ContadorOferta({
  variante = "completo",
}: {
  variante?: "compacto" | "completo";
}) {
  const [estado, setEstado] = useState<Estado | null>(null);

  useEffect(() => {
    const tick = () => setEstado(calcular(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const compacto = variante === "compacto";
  const progresso = estado ? estado.progresso : VAGAS_INICIO;

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
      className={`w-full rounded-lg border border-brass/25 bg-black/40 backdrop-blur-sm ${
        compacto ? "px-4 py-4 sm:px-5" : "px-5 py-6 sm:px-7"
      }`}
      style={{ boxShadow: "inset 0 1px 0 rgba(197,162,103,0.12)" }}
    >
      <p className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brass md:text-[11px]">
        <Clock aria-hidden className="h-3.5 w-3.5" />
        {estado?.expirado
          ? "Últimas vagas desta condição"
          : "A oferta exclusiva expira em"}
      </p>

      <div
        className="mt-4 flex items-start justify-center gap-2 sm:gap-3"
        aria-live="off"
      >
        {blocos.map((b) => (
          <div
            key={b.rotulo}
            className={`flex min-w-[58px] flex-col items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-2 sm:min-w-[66px] ${
              compacto ? "" : "sm:px-3 sm:py-3"
            }`}
          >
            <span
              className={`font-display font-semibold leading-none tabular-nums text-section-dark-fg ${
                compacto ? "text-[22px] md:text-[24px]" : "text-[26px] md:text-[30px]"
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

      <div className="mt-5">
        <div className="flex items-baseline justify-between text-[11.5px] text-muted-foreground md:text-[12.5px]">
          <span>
            <span className="font-semibold text-brass tabular-nums">{Math.ceil(progresso)}%</span>{" "}
            das vagas preenchidas
          </span>
          <span className="text-[10.5px] uppercase tracking-[0.14em]">
            Vagas limitadas
          </span>
        </div>
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.06]"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.ceil(progresso)}
          aria-label="Vagas preenchidas"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-red-primary to-red-primary-hover transition-[width] duration-700 ease-out"
            style={{
              width: `${progresso}%`,
              boxShadow: "0 0 18px rgba(211,58,52,0.45)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
