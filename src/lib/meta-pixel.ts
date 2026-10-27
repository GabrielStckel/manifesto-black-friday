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
  let permittedRegion = false;
  let initialized = false;
  let pageViewed = false;
  const refused = () => {
    if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl || navigator.doNotTrack === "1") return true;
    try { return localStorage.getItem("manifesto-advertising-refused") === "true"; }
    catch { return true; }
  };
  const allowed = () => permittedRegion && !refused();
  const sync = () => {
    if (!allowed()) { window.fbq?.("consent", "revoke"); return; }
    window.fbq?.("consent", "grant");
  };
  window.addEventListener("storage", sync);
  window.addEventListener("manifesto-advertising-change", sync);

  const start = () => {
    if (!allowed() || initialized) return;
    initialized = true;
    // Official queue contract, with partner attribution and no matching data.
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
    if (!pageViewed) {
      pageViewed = true;
      window.fbq("track", "PageView");
    }
    const loadSdk = () => {
      if (!allowed() || document.getElementById("manifesto-meta-sdk")) return;
      const script = document.createElement("script");
      script.id = "manifesto-meta-sdk";
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    };
    const idle = () => {
      if (window.requestIdleCallback) window.requestIdleCallback(loadSdk, { timeout: 2000 });
      else window.setTimeout(loadSdk, 0);
    };
    if (document.readyState === "complete") idle();
    else window.addEventListener("load", idle, { once: true });
  };
  // Same-origin hosting country signal. Never infer country from time zone.
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 2000);
  fetch("/cdn-cgi/trace", { signal: controller.signal, credentials: "same-origin", cache: "no-store" })
    .then(async (response) => {
      if (!response.ok) return;
      const country = (await response.text()).match(/^loc=([A-Z]{2})$/m)?.[1];
      permittedRegion = Boolean(country && country !== "XX" && country !== "T1" && !blocked.has(country));
      start();
    })
    .catch(() => { /* Unknown country remains blocked. */ })
    .finally(() => window.clearTimeout(timeout));
}

export function metaPixelHeadScript(pixelId: string): string {
  return `(${bootstrapMetaPixel.toString()})(${JSON.stringify(pixelId)});`;
}