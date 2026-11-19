declare global {
  interface Window {
    dataLayer?: unknown[];
    manifestoGtmStarted?: boolean;
  }
}

// This function is serialized into the head; keep it self-contained.
function bootstrapGtm(gtmId: string) {
  if (window.manifestoGtmStarted || window.location.pathname !== "/") return;
  window.manifestoGtmStarted = true;
  const refused = () => {
    if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl || navigator.doNotTrack === "1") return true;
    try { if (localStorage.getItem("manifesto-advertising-refused") === "true") return true; }
    catch { return true; }
    const permitido = (window as Window & { manifestoPixelPermitido?: () => boolean }).manifestoPixelPermitido;
    if (typeof permitido === "function" && permitido() === false) return true;
    return false;
  };
  if (refused()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  let loaded = false;
  const load = () => {
    if (loaded) return;
    loaded = true;
    window.removeEventListener("pointerdown", load);
    window.removeEventListener("keydown", load);
    if (refused() || document.getElementById("manifesto-gtm")) return;
    const script = document.createElement("script");
    script.id = "manifesto-gtm";
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(gtmId);
    document.head.appendChild(script);
  };
  const idle = () => {
    const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    if (ric) ric(load, { timeout: 2500 });
    else setTimeout(load, 400);
  };
  window.addEventListener("pointerdown", load, { once: true, passive: true });
  window.addEventListener("keydown", load, { once: true });
  if (document.readyState === "complete") idle();
  else window.addEventListener("load", idle, { once: true });
}

export function gtmHeadScript(gtmId: string): string {
  if (!gtmId.trim()) return "";
  return `(${bootstrapGtm.toString()})(${JSON.stringify(gtmId)});`;
}

export function gtmNoscriptHtml(gtmId: string): string {
  return `<iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
}

export function enviarDataLayer(evento: string, dados: Record<string, unknown> = {}): void {
  try {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: evento, ...dados });
  } catch { /* nunca quebra a página */ }
}
