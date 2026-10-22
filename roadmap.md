# Roadmap

## Acabamento da imersão
- [x] Archivo + Inter, cores e tipografia
- [x] Pílulas, fita, marca-texto, trilhas e ingresso anual
- [x] Visibilidade da CTA e animações; constelação leve
- [x] Conferência a 390px e desktop; testes de checkout preservado

## Black Friday v3
- [x] Config: VTURB_CONTA/VTURB_PLAYER, REGRA_PRAZO (vazia = sem contadores/datas)
- [x] Tipos e conteúdo reescritos (15 seções na nova ordem)
- [x] Componentes: Resumo, Passos7, DoisCaminhos (novos); demais reescritos
- [x] Build OK + typecheck limpo
- [x] Mobile 390px: todas as seções conferidas, sem rolagem horizontal
- [x] Checkout: anual off=bfcr3ntt, mensal off=5int9ubm, UTMs/src/sck repassados
- [x] Nenhum contador/data visível com REGRA_PRAZO vazia

## Antes de publicar (pendências do usuário, em src/lib/config.ts)
- [ ] Confirmar BF_FIM (30/11/2026 23:59 BRT)
- [ ] Preencher REGRA_PRAZO (frase do que termina no prazo) — liga datas e contadores
- [ ] Preencher VTURB_CONTA e VTURB_PLAYER (VSL)
- [ ] Preencher EMPRESA (razão social, CNPJ, e-mail)
