# Contador regressivo + barra de vagas

Adicionar um bloco de urgência (contagem regressiva + barra de progresso das vagas) em dois pontos da página: no Hero (abaixo do CTA) e na seção "Tome a sua vida hoje" (oferta, acima do botão de checkout).

## Comportamento

- **Prazo**: 17/08/2026 às 23:50 (horário de Brasília, UTC-3). Encerramento fixo, igual para todos os visitantes.
- **Contador**: dias, horas, minutos e segundos, atualizando a cada segundo. Formato compacto em mobile.
- **Barra de vagas**: começa em 32% e cresce linearmente até 98% exatamente no momento do prazo. O percentual é calculado a partir da data/hora atual — nada aleatório, nada salvo por usuário, então todos veem o mesmo número no mesmo instante.
- **Depois do prazo**: contador fica em 00:00:00, barra em 98% e o texto muda para "Últimas vagas desta condição". Os botões de checkout continuam funcionando normalmente (nada é bloqueado).
- Nada de animação pesada: só uma transição de largura na barra.

## Visual

- Mesma linguagem da página: fundo escuro translúcido, borda e detalhes em latão, barra preenchida em vermelho com brilho suave.
- Rótulos: "A oferta exclusiva expira em" acima do contador e "X% das vagas preenchidas" acima/abaixo da barra.
- No Hero fica em versão compacta, logo abaixo do botão principal; na seção de oferta fica em versão completa, imediatamente acima do botão de checkout.

## Detalhes técnicos

- Novo componente `src/components/manifesto/ContadorOferta.tsx` com prop `variante: "compacto" | "completo"`.
- Prazo e limites (32% / 98%) em `src/lib/config.ts` como constantes (`OFERTA_DEADLINE`, `VAGAS_INICIO`, `VAGAS_FIM`), fonte única de verdade.
- Cálculo do tempo restante em `useEffect` + `setInterval` de 1s; render inicial neutro para evitar divergência de hidratação no SSR.
- Textos do bloco entram em `src/content/manifesto.ts` com tipos em `manifesto.types.ts`, seguindo o padrão do projeto.
- Integração em `Hero.tsx` e `SectionOferta.tsx` apenas; sem mudanças de backend.
