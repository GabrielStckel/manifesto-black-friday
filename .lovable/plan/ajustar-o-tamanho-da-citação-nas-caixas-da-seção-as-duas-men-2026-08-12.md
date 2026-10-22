Ajustar o tamanho da citação nas caixas da seção "As duas mentiras"

Objetivo: fazer as frases "Você só precisa ressignificar o seu passado" e "O tempo cura todas as feridas" ocuparem apenas uma linha dentro dos cards, deixando o layout das duas caixas mais simétrico.

Alterações propostas:
- Em `src/components/manifesto/SectionMentiras.tsx`, reduzir o `clamp` do parágrafo da citação (`mentira`) para uma escala que caiba em uma linha dentro da largura de cada coluna do grid em desktop.
- Manter o destaque tipográfico (itálico, cor `muted-foreground`) e não alterar a copy.
- Validar visualmente que ambas as frases ficam em uma única linha no desktop e que o mobile continua legível, sem quebrar o grid ou criar overflow.
- Não alterar demais tokens, seções adjacentes ou animações.