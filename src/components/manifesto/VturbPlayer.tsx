import { useEffect } from "react";
import { VTURB_PLAYER_ID } from "../../lib/config";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const SCRIPT_SRC =
  "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js";

// Player da VSL (VTurb). Sem lazy-load: a VSL é o conteúdo principal do hero.
// Enquanto VTURB_PLAYER_ID estiver vazio, mostra um placeholder escuro.
export function VturbPlayer() {
  useEffect(() => {
    if (!VTURB_PLAYER_ID) return;
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="w-full max-w-[760px] overflow-hidden rounded-lg border border-brass/25 bg-black/40"
      style={{
        aspectRatio: "16 / 9",
        boxShadow: "inset 0 1px 0 rgba(197,162,103,0.12)",
      }}
    >
      {VTURB_PLAYER_ID ? (
        <vturb-smartplayer
          id={`vid-${VTURB_PLAYER_ID}`}
          style={{
            display: "block",
            margin: "0 auto",
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground md:text-[12px]">
            VSL em produção
          </p>
        </div>
      )}
    </div>
  );
}
