export const CHECKOUT_SOURCES = [
  "hero",
  "oferta",
  "cta_bar",
  "plano_mensal",
  "plano_anual",
] as const;
export type CheckoutSource = (typeof CHECKOUT_SOURCES)[number];

const ENDPOINT = "/api/public/track-checkout-click";

// Registro "dispara e esquece": nunca segura a ida ao checkout.
export function trackCheckoutClick(source: CheckoutSource, href: string): void {
  const body = JSON.stringify({ source, href });
  try {
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "application/json" }))) return;
  } catch {
    /* cai no fetch abaixo */
  }
  void fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
}

// onClick dos links de checkout: registra e deixa o navegador seguir o href
// normalmente (sem preventDefault — nova aba e clique do meio funcionam).
export function handleCheckoutClick(
  source: CheckoutSource,
): (event: React.MouseEvent<HTMLAnchorElement>) => void {
  return (event) => trackCheckoutClick(source, event.currentTarget.href);
}
