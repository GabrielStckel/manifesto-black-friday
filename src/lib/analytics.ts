export const CHECKOUT_SOURCES = ["hero", "oferta", "cta_bar"] as const;
export type CheckoutSource = (typeof CHECKOUT_SOURCES)[number];

export function trackCheckoutClick(
  source: CheckoutSource,
  href: string,
): Promise<void> {
  return fetch("/api/public/track-checkout-click", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source, href }),
    keepalive: true,
  }).then(
    () => undefined,
    () => undefined,
  );
}

export function handleCheckoutClick(
  source: CheckoutSource,
  href: string,
): (event: React.MouseEvent<HTMLAnchorElement>) => void {
  return (event) => {
    event.preventDefault();
    trackCheckoutClick(source, href).finally(() => {
      window.location.href = href;
    });
  };
}
