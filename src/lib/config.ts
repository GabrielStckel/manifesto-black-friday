// Única fonte de verdade do checkout e da campanha de Black Friday.
// TODO CTA da página deve importar daqui — nunca escrever a URL inline.

export const CHECKOUT_BASE = "https://pay.hotmart.com/A107112795R";

// Códigos de oferta (off) de cada plano no checkout.
export const PLANOS = {
  mensal: { off: "5int9ubm" },
  anual: { off: "bfcr3ntt" },
} as const;

export type PlanoId = keyof typeof PLANOS;

// Fim real da Black Friday: 30/11/2026 23:59 (horário de Brasília, UTC-3).
// CONFIRMAR antes de publicar.
export const BF_FIM = new Date("2026-11-30T23:59:00-03:00").getTime();

// Uma frase dizendo o que de fato termina no prazo (ex.: "A condição de
// Black Friday — entrada por assinatura a partir de 12x de R$ 79 — termina
// em 30/11 às 23h59."). Enquanto estiver VAZIA, a página não mostra nenhum
// contador, data ou prazo: a topbar fica sem a parte da data, o eyebrow da
// oferta fica só "BLACK FRIDAY" e os contadores somem.
export const REGRA_PRAZO = "";

// Verdadeiro quando há uma regra de prazo definida — só então a página
// mostra datas e contadores.
export const TEM_PRAZO = REGRA_PRAZO.trim().length > 0;

// Player VTurb da VSL: conta + ID do player. Com os dois preenchidos, o
// player real renderiza; vazio, o hero mostra um placeholder escuro 16:9.
export const VTURB_CONTA = "";
export const VTURB_PLAYER = "";

// Dados da empresa para o rodapé. Enquanto vazios, a linha não renderiza.
export const EMPRESA = {
  razaoSocial: "",
  cnpj: "",
  email: "",
};

// "30/11 às 23h59" — gerado a partir de BF_FIM (fuso de Brasília).
export function formatarFimBF(): string {
  const data = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "America/Sao_Paulo",
  }).format(BF_FIM);
  const hora = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  })
    .format(BF_FIM)
    .replace(":", "h");
  return `${data} às ${hora}`;
}
