import { CHECKOUT_BASE, PLANOS, type PlanoId } from "./config";

// Monta a URL de checkout do plano preservando TODOS os parâmetros da URL
// atual da página (utm_*, src, sck etc.), sem deixar que eles sobrescrevam
// o `off` do plano. Roda só no cliente (lê window.location.search).
export function buildCheckoutUrl(plano: PlanoId): string {
  const params = new URLSearchParams();

  if (typeof window !== "undefined") {
    const atuais = new URLSearchParams(window.location.search);
    atuais.forEach((valor, chave) => {
      if (chave !== "off" && chave !== "checkoutMode") {
        params.append(chave, valor);
      }
    });
  }

  params.set("off", PLANOS[plano].off);
  params.set("checkoutMode", "10");

  return `${CHECKOUT_BASE}?${params.toString()}`;
}

// Fallback estático para o atributo href (sem os parâmetros da página);
// o clique sempre recalcula via buildCheckoutUrl.
export function checkoutHrefEstatico(plano: PlanoId): string {
  return `${CHECKOUT_BASE}?off=${PLANOS[plano].off}&checkoutMode=10`;
}
