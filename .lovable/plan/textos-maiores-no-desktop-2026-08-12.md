# Textos maiores no desktop

Hoje quase todo o corpo de texto fica em 15–16px em qualquer largura de tela: o mobile e o desktop usam praticamente o mesmo tamanho. Num monitor grande isso fica pequeno e cansativo de ler.

A correção é subir apenas a escala do desktop (a partir de ~768px), mantendo o mobile exatamente como está.

## Nova escala (somente desktop)

- Parágrafos de corpo: 15/16px → 18px, com entrelinha mais generosa (1.75).
- Parágrafos de destaque (Comunidade, Coletivo): 18px → 20px.
- Subtítulos de blocos e cards (Setênios, Trilhas, Paradigma, FAQ): 17–22px → 20–24px.
- Itens da lista de inclusos e textos de apoio da Oferta: 15px → 17px.
- Perguntas e respostas do FAQ: 17/15px → 19/17px.
- Rótulos em caixa alta (kickers, badges) sobem levemente de 10–11px para 12px para não ficarem microscópicos ao lado do texto maior.
- Rodapé e barra superior acompanham o ajuste.

Títulos principais (H1 e H2) já usam `clamp` com escala por viewport e permanecem como estão, para não quebrar o equilíbrio das seções.

## Detalhes técnicos

Ajuste apenas de classes utilitárias nos componentes em `src/components/manifesto/` — adicionando/alterando variantes `md:text-*` e `md:leading-*` nos elementos de texto. Nenhuma mudança de conteúdo, estrutura, tokens ou lógica. As larguras máximas em `ch` já existentes seguram o comprimento de linha, então o texto maior não vira linhas longas demais.

Verificação com captura em 1440px e 390px para confirmar que o desktop ficou mais legível e o mobile não mudou.
