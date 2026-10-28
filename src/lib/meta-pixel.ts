type Pixel = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Pixel;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Pixel;
    _fbq?: Pixel;
    manifestoPixelStarted?: boolean;
  }
}

// This function is serialized into the head; keep it self-contained.
function bootstrapMetaPixel(pixelId: string) {
  if (window.manifestoPixelStarted || window.location.pathname !== "/") return;
  window.manifestoPixelStarted = true;
  const blocked = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH".split(" "));
  let blockedRegion = false;
  let initialized = false;
  const refused = () => {
    if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl || navigator.doNotTrack === "1") return true;
    try { return localStorage.getItem("manifesto-advertising-refused") === "true"; }
    catch { return true; }
  };
  const allowed = () => !blockedRegion && !refused();
  const sync = () => {
    if (!allowed()) { window.fbq?.("consent", "revoke"); return; }
    window.fbq?.("consent", "grant");
  };
  window.addEventListener("storage", sync);
  window.addEventListener("manifesto-advertising-change", sync);

  // Começa na hora: os anúncios rodam só no Brasil, então não esperamos o país.
  if (allowed()) {
    initialized = true;
    if (!window.fbq) {
      const pixel = function (...args: unknown[]) {
        if (pixel.callMethod) pixel.callMethod.apply(pixel, args);
        else pixel.queue.push(args);
      } as Pixel;
      pixel.queue = [];
      pixel.push = pixel;
      pixel.loaded = true;
      pixel.version = "2.0";
      window.fbq = pixel;
      window._fbq = pixel;
    }
    window.fbq("init", pixelId, {}, { agent: "lovable" });
    window.fbq("track", "PageView");
    if (!document.getElementById("manifesto-meta-sdk")) {
      const script = document.createElement("script");
      script.id = "manifesto-meta-sdk";
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }
  }

  // País em paralelo: só revoga se confirmar um país bloqueado. Falha ou demora não bloqueia.
  if (initialized) {
    fetch("/cdn-cgi/trace", { credentials: "same-origin", cache: "no-store" })
      .then((response) => (response.ok ? response.text() : ""))
      .then((text) => {
        const country = text.match(/^loc=([A-Z]{2})$/m)?.[1];
        if (country && blocked.has(country)) {
          blockedRegion = true;
          sync();
        }
      })
      .catch(() => { /* sem país: segue ativo */ });
  }
}

export function metaPixelHeadScript(pixelId: string): string {
  return `(${bootstrapMetaPixel.toString()})(${JSON.stringify(pixelId)});`;
}