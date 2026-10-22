# Sincronizar a copy da página com o documento

A página passa a usar exatamente o texto do arquivo enviado — nada a mais, nada a menos. Todas as alterações ficam em `src/content/manifesto.ts` e nos tipos, sem redesenhar layout.

## Diferenças encontradas entre a página atual e o documento

**Hero**
- Tag de contexto: igual, mantida.
- Headline: igual, mantida.
- Subheadline: o documento traz um único parágrafo. A página hoje quebra esse texto em "subtítulo" + "apoio" e alterou palavras ("é uma comunidade" em vez de "é a primeira comunidade"). Passa a exibir o texto do documento, integral e sem edição.
- CTA: muda de "Entrar para o Manifesto" para **"Quero Entrar para o Manifesto Sistêmico"**.
- Texto de apoio abaixo do botão: muda para **"Assinatura anual com acesso imediato a todas as trilhas no Hotmart Club."**
- As 4 pílulas ("2 anos de acesso", "Trilhas no Hotmart Club", "Vivências ao vivo bimestrais", "Comunidade ativa de membros") **não existem no documento** e serão removidas.

**Seção 2 — As duas mentiras**
- Título e os dois blocos já batem com o documento. Os rótulos passam a ser "Mentira #1" e "Mentira #2" (hoje estão como "Mentira 01" / "Mentira 02").

**Seção 3 — Setênios**: já idêntica ao documento. Sem mudança.

**Seção 4 — Paradigma**: já idêntica. Sem mudança.

**Seção 5 — Comunidade**: já idêntica. Sem mudança.

**Seção 6 — Trilhas**
- Hoje o título está dividido em título + subtítulo. No documento é uma linha só: "As temporadas da sua transformação. A jornada começa pelo essencial:".
- Os rótulos mudam de "Temporada 01..04" para **"Trilha 01..04"**.
- Trilha 02: o documento coloca "O resgate da força." dentro do título ("As três motivações humanas: O resgate da força."). O texto passa a começar em "Investigue as motivações...".

**Seção 7 — Coletivo**: já idêntica. Sem mudança.

**Seção 8 — Oferta**
- Título e os 4 itens de inclusão: já idênticos.
- Rótulo do preço muda para **"Preço Especial de Lançamento:"**.
- O documento traz placeholders `[VALOR_CHEIO]`, `[VALOR_PARCELA]`, `[VALOR_A_VISTA]`. Como placeholders não podem aparecer na página publicada, mantenho os valores reais já confirmados (12x de R$ 103,11 / R$ 997,00 à vista) e passo a exibir a frase no formato do documento: "por apenas 12x de R$ 103,11 ou R$ 997,00 à vista no plano anual". O "De R$ [VALOR_CHEIO]" fica de fora até você informar o valor cheio.
- CTA de compra muda para **"Quero Assinar o Manifesto e Tomar Minha Vida"**.
- Garantia: rótulo passa a "Garantia Incondicional de 7 dias" e o texto já bate.

**Seção 9 — FAQ**: as 4 perguntas e respostas já batem. Sem mudança.

**Barra de CTA fixa**: usa o CTA principal do documento ("Quero Entrar para o Manifesto Sistêmico").

**Rodapé**: não existe no documento. Mantido como está (marca, links legais e aviso), pois é exigência de página publicada.

**Meta tags**: hoje estão como `[DEFINIR]`, o que prejudica SEO e compartilhamento. Serão preenchidas com a headline e a subheadline do documento, sem inventar texto novo.

## Detalhes técnicos

- `src/content/manifesto.types.ts`: remover `apoio` e `pilulas` do tipo `Hero`; remover `subtitulo` de `SectionTrilhas`.
- `src/content/manifesto.ts`: aplicar toda a copy acima.
- `src/components/manifesto/Hero.tsx`: remover o bloco de pílulas e o parágrafo de apoio; a subheadline única ganha o espaço.
- `src/components/manifesto/SectionTrilhas.tsx`: remover a renderização do subtítulo.
- `src/routes/index.tsx`: metadados a partir do `meta` atualizado.
