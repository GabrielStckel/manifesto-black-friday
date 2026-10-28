import { useEffect } from "react";
import { Play } from "lucide-react";
import { TEM_VSL, VTURB_PLAYER, VTURB_SCRIPT } from "../../lib/config";

// Declara o elemento customizado do VTurb para o JSX.
declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "vturb-smartplayer": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
      }
    }
  }
}

// Player da VSL. Com VTURB_CONTA e VTURB_PLAYER preenchidos, renderiza o
// <vturb-smartplayer> e injeta uma única vez o script oficial do VTurb.
// Vazio: placeholder escuro 16:9 com botão de play vermelho.
export function VturbPlayer() {
  const pronto = TEM_VSL;

  useEffect(() => {
    if (!pronto) return;
    const src = VTURB_SCRIPT;
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }, [pronto]);

  return (
    <div className="w-full max-w-[820px] overflow-hidden rounded-lg border border-brass/25 bg-player-placeholder shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)]">
      <div className="relative aspect-video w-full">
        {pronto ? (
          <>
            <vturb-smartplayer
              id={`vid-${VTURB_PLAYER}`}
              style={{ display: "block", width: "100%", height: "100%" }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(){var src=${JSON.stringify(VTURB_SCRIPT)};if(document.querySelector('script[src="'+src+'"]'))return;var s=document.createElement("script");s.src=src;s.async=true;document.head.appendChild(s);})();`,
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span
              aria-hidden
              className="player-play flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-red-primary to-red-primary-hover shadow-[0_0_40px_rgba(239,75,66,0.4)] md:h-20 md:w-20"
            >
              <Play className="ml-1 h-7 w-7 fill-on-red text-on-red md:h-8 md:w-8" />
            </span>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-[13px]">
              VSL do Jonas · em produção
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
