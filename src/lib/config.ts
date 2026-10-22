// Única fonte de verdade da URL do checkout.
// TODO CTA da página deve importar daqui — nunca escrever a URL inline.
export const CHECKOUT_URL =
  "https://pay.hotmart.com/H107116234U?off=39c3sjhm&checkoutMode=10";

// Encerramento da oferta: 16/08/2026 23:59 (horário de Brasília, UTC-3).
export const OFERTA_DEADLINE = new Date("2026-08-16T23:59:00-03:00").getTime();
// Início da contagem de vagas (âncora de 32%): 12/08/2026 00:00 (UTC-3).
export const OFERTA_INICIO = new Date("2026-08-12T00:00:00-03:00").getTime();
export const VAGAS_INICIO = 32;
export const VAGAS_FIM = 98;
