# Revisão da copy: alinhar a página 100% ao documento

Auditei toda a copy da página contra o `Manifesto_Sistêmico_3.docx`. O texto das seções está fiel ao documento. O que sobra são elementos de interface e rodapé que nunca existiram no arquivo. Eles saem.

## O que será removido

**Rodapé** — hoje traz três links com endereços falsos (`__URL_PRIVACIDADE__`, `__URL_TERMOS__`, `__URL_SUPORTE__`), uma descrição inventada ("Uma comunidade de evolução contínua com Jonas Peres.") e um aviso legal. Nada disso está no documento.
- Removidos: os 3 links, a descrição e o aviso legal.
- Mantidos: a marca "Manifesto Sistêmico" e o copyright.

**Rótulos auxiliares não presentes no documento**
- Topbar: rótulo "Comunidade" (a marca permanece).
- Seção do paradigma: "O modo antigo" e "A transição".
- Seção da oferta: "O que está incluído" (a lista de bônus continua).

## O que será preenchido

**Título e descrição do site** (hoje "[DEFINIR]"), a partir do documento:
- Título: `Manifesto Sistêmico — Atualize os princípios que governam suas decisões`
- Descrição: a subheadline do documento, resumida a menos de 160 caracteres.
- Mesmos valores em og:title / og:description.

## O que fica como está

- Todo o texto de hero, mentiras, setênios, paradigma, comunidade, trilhas, coletivo, oferta, garantia e FAQ — já bate palavra por palavra com o documento.
- Preço: 12x de R$ 103,11 ou R$ 997,00 à vista (confirmado por você).
- Barra de CTA fixa reutilizando o CTA do hero.

## Detalhes técnicos

- `src/content/manifesto.types.ts`: tornar opcionais/remover os campos `rotulo` (topbar), `rotulo` em `antigo`/`novo` (paradigma), `rotuloInclui` (oferta), `descricao`, `links` e `aviso` (rodapé).
- `src/content/manifesto.ts`: remover os valores correspondentes e preencher o bloco `meta`.
- Componentes afetados: `Topbar.tsx`, `SectionParadigma.tsx`, `SectionOferta.tsx`, `Rodape.tsx` — remover a renderização desses campos e ajustar o espaçamento onde o elemento sumir.
- Conferência visual em mobile (392px) e desktop após a mudança.
