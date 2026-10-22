import { useEffect, useRef } from "react";

const DIST = 108; // distância máxima de conexão, em px
const DIST2 = DIST * DIST;
const FPS_ALVO = 30; // partículas lentas não precisam de 60fps

export function CampoConstelacao() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const touch = window.matchMedia("(hover: none)").matches;

    let w = 0,
      h = 0,
      raf = 0,
      rodando = true,
      ultimo = 0;
    const mouse = { x: -9999, y: -9999, ativo: false };

    type P = { x: number; y: number; vx: number; vy: number; r: number; f: number };
    let pts: P[] = [];
    let cols = 0,
      linhas = 0;
    let grade: number[][] = [];

    const medir = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Densidade menor no mobile: tela pequena, bateria limitada.
      const divisor = touch ? 26000 : 17000;
      const n = Math.min(touch ? 45 : 95, Math.floor((w * h) / divisor));

      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        r: Math.random() * 1.2 + 0.4,
        f: Math.random() * Math.PI * 2,
      }));

      cols = Math.max(1, Math.ceil(w / DIST));
      linhas = Math.max(1, Math.ceil(h / DIST));
    };

    const preencherGrade = () => {
      grade = Array.from({ length: cols * linhas }, () => [] as number[]);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]!;
        const c = Math.min(cols - 1, Math.max(0, Math.floor(p.x / DIST)));
        const l = Math.min(linhas - 1, Math.max(0, Math.floor(p.y / DIST)));
        grade[l * cols + c]!.push(i);
      }
    };

    const desenhar = (t: number) => {
      raf = requestAnimationFrame(desenhar);
      if (!rodando) return;
      if (t - ultimo < 1000 / FPS_ALVO) return;
      ultimo = t;

      ctx.clearRect(0, 0, w, h);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        p.f += 0.012;

        if (mouse.ativo) {
          const dx = p.x - mouse.x,
            dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12000 && d2 > 1) {
            const forca = (1 - d2 / 12000) * 0.5;
            const d = Math.sqrt(d2);
            p.x += (dx / d) * forca;
            p.y += (dy / d) * forca;
          }
        }

        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;
      }

      preencherGrade();

      // Linhas: cada ponto só compara com sua célula e as 4 células seguintes.
      ctx.lineWidth = 0.5;
      for (let l = 0; l < linhas; l++) {
        for (let c = 0; c < cols; c++) {
          const atual = grade[l * cols + c];
          if (!atual || !atual.length) continue;
          const vizinhas = [
            atual,
            grade[l * cols + c + 1],
            grade[(l + 1) * cols + c - 1],
            grade[(l + 1) * cols + c],
            grade[(l + 1) * cols + c + 1],
          ];
          for (const idxA of atual) {
            const a = pts[idxA]!;
            for (const celula of vizinhas) {
              if (!celula) continue;
              for (const idxB of celula) {
                if (idxB <= idxA) continue;
                const b = pts[idxB]!;
                const dx = a.x - b.x,
                  dy = a.y - b.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < DIST2) {
                  ctx.strokeStyle = `rgba(184,146,74,${(1 - d2 / DIST2) * 0.16})`;
                  ctx.beginPath();
                  ctx.moveTo(a.x, a.y);
                  ctx.lineTo(b.x, b.y);
                  ctx.stroke();
                }
              }
            }
          }
        }
      }

      for (const p of pts) {
        const alfa = 0.34 + Math.sin(p.f) * 0.22;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214,178,104,${alfa})`;
        ctx.fill();
      }
    };

    const mover = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.ativo = true;
    };
    const sair = () => {
      mouse.ativo = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    medir();
    raf = requestAnimationFrame(desenhar);

    const io = new IntersectionObserver(
      (entradas) => {
        rodando = entradas[0]?.isIntersecting ?? false;
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const aoRedimensionar = () => medir();
    window.addEventListener("resize", aoRedimensionar, { passive: true });
    if (!touch) {
      window.addEventListener("mousemove", mover, { passive: true });
      window.addEventListener("mouseleave", sair, { passive: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", aoRedimensionar);
      window.removeEventListener("mousemove", mover);
      window.removeEventListener("mouseleave", sair);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
