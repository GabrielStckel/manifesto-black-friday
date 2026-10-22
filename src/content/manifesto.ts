import type { ManifestoContent } from "./manifesto.types";

export const manifesto: ManifestoContent = {
  meta: {
    title: "Black Friday do Manifesto Sistêmico — 12x de R$ 79 ou R$ 97/mês",
    description: "Descubra como atualizar os princípios inconscientes que governam suas decisões silenciosamente.",
    ogTitle: "Black Friday do Manifesto Sistêmico — 12x de R$ 79 ou R$ 97/mês",
    ogDescription: "Descubra como atualizar os princípios inconscientes que governam suas decisões silenciosamente.",
  },
  ctaBar: { label: "Ver os planos da Black Friday" },
  hero: {
    badge: "BLACK FRIDAY · MANIFESTO SISTÊMICO",
    h1: "Você já entendeu o seu padrão. Por que ele continua voltando?",
    headlinePlayer: "O Jonas Peres explica por que entender não basta para sair do lugar. No fim, ele apresenta a Black Friday do Manifesto.",
    subtitulo: "Nesta Black Friday, pela primeira vez, você entra no Manifesto Sistêmico sem pagar tudo de uma vez: 12x de R$ 79 no anual, ou R$ 97 por mês, sem compromisso.",
    cta: "Ver os planos da Black Friday",
    microtexto: "Acesso imediato às trilhas no Hotmart Club · Garantia de 7 dias · Cancele quando quiser",
  },
  sections: [
    {
      kind: "padrao", fundo: "light",
      titulo: "Você leu. Estudou. Entendeu. E o padrão voltou.",
      paragrafos: [
        "Muita gente chega aqui depois de anos tentando. Leu os livros, assistiu às aulas, fez cursos, às vezes fez terapia. Entendeu de onde vem o medo, a briga que se repete, o dinheiro que escorre, a decisão que nunca sai.",
        "E, mesmo entendendo, continua no mesmo lugar.",
        "Não é falta de força de vontade. Nem de informação. Existe uma razão para isso, e ela não está no que você sabe: está no que continua operando por baixo.",
      ],
    },
    {
      kind: "mentiras", fundo: "dark",
      titulo: "As duas ideias que mantêm muita gente no mesmo lugar",
      itens: [
        { rotulo: "Ideia 01", mentira: "O tempo resolve.", rotuloVerdade: "A verdade", verdade: "O tempo, sozinho, não muda um padrão. Quando uma dor ou um conflito é deixado de lado, é como se o inconsciente guardasse essa informação e continuasse operando em silêncio, acionando evitação e autossabotagem ao menor sinal de risco." },
        { rotulo: "Ideia 02", mentira: "Basta entender e ressignificar.", rotuloVerdade: "A verdade", verdade: 'Entender com a cabeça ajuda, mas não basta. Uma "bela história" sobre o que doeu muda a narrativa, não necessariamente o padrão. A virada vem de integrar o acontecimento, pacificar a relação com o seu sistema e perceber a função que aquele episódio teve na sua vida.' },
      ],
      fecho: "Por isso entender acontece num dia e o padrão volta no dia seguinte.",
    },
    {
      kind: "setenios", fundo: "dark",
      titulo: 'O seu "sistema operacional" foi escrito antes dos 21 anos',
      abertura: 'O seu funcionamento atual não começou na vida adulta. Ele foi desenhado nos três primeiros setênios (dos 0 aos 21 anos), quando o mundo emocional governou a construção do seu "eu".',
      elos: [
        { titulo: "De 0 a 7 anos: o registro sem filtros", texto: "Você era puro sentimento, sem senso crítico. Se faltou segurança e acolhimento, a capacidade de confiar na vida ficou fraturada." },
        { titulo: "A busca sem fim por segurança", texto: "A criança que amadurece rápido demais para se proteger vira o adulto que busca segurança psicológica e financeira o tempo todo." },
        { titulo: "O medo de sofrer e o medo de mudar", texto: 'Para não sofrer, o "querer" fica limitado ao que é conhecido. O sofrimento familiar parece mais seguro que o risco do novo, e a decisão sai do medo, não do que faz sentido.' },
      ],
      fecho: "É esse programa que volta, mesmo depois de você entender tudo.",
    },
    {
      kind: "paradigma", fundo: "dark",
      titulo: "Você não sai de um padrão com a mesma lógica que o criou",
      antigo: { nome: "Paradigma Cartesiano", texto: "Fomos moldados pelo paradigma cartesiano: causa e efeito isolados, a ilusão de controlar o futuro, a vida em gavetas. Tentar controlar pessoas, dinheiro e destino por essa lógica gera exaustão e a sensação de estar sempre lutando contra a vida." },
      novo: {
        nome: "Paradigma Sistêmico", transicao: "O paradigma sistêmico olha diferente:",
        itens: [
          { titulo: "Nada está isolado.", texto: "As travas no dinheiro, no trabalho e nas relações fazem parte de um mesmo sistema de informações herdadas e de dinâmicas familiares." },
          { titulo: "A vida não se controla, se navega.", texto: "Sair do controle obsessivo para a presença e a maturidade emocional." },
          { titulo: "O modo como você percebe molda o que você vive.", texto: "Inspirada nas perguntas que a física moderna abriu sobre o papel do observador, a visão sistêmica propõe que a sua percepção molda o que você enxerga, escolhe e repete." },
          { titulo: "Pai é o mundo, mãe é a vida.", texto: "Na visão sistêmica, quando você pacifica a relação com seus pais e toma a força deles, aprende a confiar e a tomar a própria vida." },
        ],
      },
    },
    {
      kind: "pilares", fundo: "red", titulo: "O que de fato muda um padrão",
      intro: 'Quem consegue sair do lugar costuma ter três coisas que o "entender" sozinho não dá:',
      itens: [
        { titulo: "Profundidade", texto: "Olhar a origem do padrão no seu sistema, não só o sintoma do dia." },
        { titulo: "Constância", texto: "Voltar ao padrão muitas vezes, ao longo de meses, porque ele volta também." },
        { titulo: "Companhia", texto: "Não fazer isso sozinho." },
      ],
      sozinho: { titulo: "Por que é tão difícil sozinho", texto: "No esforço inconsciente de pertencer à família e ao meio em que vivemos, tendemos a repetir os comportamentos que nos prendem, para não nos sentirmos excluídos. Romper com o antigo gera medo de solidão. Sozinho, o pertencimento puxa de volta." },
      fecho: "Foi para reunir os três num lugar só que nasceu o Manifesto Sistêmico.",
    },
    {
      kind: "trilhas", fundo: "dark",
      titulo: "Por dentro do Manifesto: um streaming de autoconhecimento sistêmico",
      profundidadeTitulo: "Profundidade — as trilhas",
      trilhas: [
        { numero: "01", rotulo: "Trilha 01", titulo: "A Introdução: A arquitetura da consciência sistêmica", texto: "O início do movimento de consciência que leva à leveza e à compreensão da vida." },
        { numero: "02", rotulo: "Trilha 02", titulo: "As três motivações humanas: O resgate da força.", texto: "Investigue as motivações inconscientes gravadas dos 0 aos 21 anos. Desarme o medo de sofrer e o medo de mudar, pacificando sua relação com sua origem." },
        { numero: "03", rotulo: "Trilha 03", titulo: "O Despertar do Paradigma (Ciência e Filosofia)", texto: "As implicações filosóficas da física moderna e o que elas sugerem sobre o papel da sua consciência no dia a dia." },
        { numero: "04", rotulo: "Trilha 04", titulo: "A Individuação", texto: 'O caminho para sair da infantilização. Abandone a postura de "pequeno" e a terceirização de responsabilidades. Desenvolva a maturidade emocional para assumir o protagonismo e tomar sua vida com amor por você.' },
      ],
      constancia: { titulo: "Constância — enquanto você é membro", itens: ["Vivência ao vivo de aprofundamento a cada dois meses, com o Jonas e equipe; a gravação fica disponível depois.", "Materiais de apoio e exercícios práticos para o dia a dia."] },
      companhia: { titulo: "Companhia — a comunidade", texto: "Comunidade de membros que fazem o mesmo caminho." },
      primeiraSemana: "Sua primeira semana: comece pela Trilha 01, assista à primeira aula no dia em que entrar e faça o primeiro exercício.",
    },
    { kind: "jonas", fundo: "light", titulo: "Quem conduz", nome: "Jonas Peres", texto: "" },
    { kind: "depoimentos", fundo: "light", titulo: "O que dizem os membros", itens: [], nota: "Experiência individual; os resultados variam." },
    {
      kind: "paraQuem", fundo: "dark", titulo: "Para quem é, e para quem não é",
      paraVoce: ["Percebe que repete escolhas que já decidiu não repetir.", "Já leu, fez cursos ou terapia e quer olhar o padrão por outro ângulo.", "Quer estudar no seu ritmo, com encontros ao vivo periódicos e outras pessoas no mesmo caminho."],
      naoParaVoce: ["Procura uma solução rápida ou mudança em prazo marcado.", "Busca atendimento psicológico ou tratamento. O Manifesto é conteúdo educativo e não substitui acompanhamento profissional."],
    },
    {
      kind: "oferta", fundo: "dark", titulo: "Tome a sua vida hoje.",
      porQueAgora: { titulo: "Por que agora", texto: "Até hoje, a única forma de entrar no Manifesto era pagar R$ 997 de uma vez. Nesta Black Friday, a entrada passa a ser por assinatura: você começa com 12x de R$ 79 ou com R$ 97 por mês, e decide com a experiência na mão." },
      inclui: [
        { rotulo: "Profundidade:", texto: "as 4 trilhas completas no Hotmart Club." },
        { rotulo: "Constância:", texto: "vivências ao vivo bimestrais com o Jonas e equipe, com gravação depois, e as novas temporadas." },
        { rotulo: "Companhia:", texto: "a comunidade de membros." },
        { texto: "Materiais de apoio e exercícios práticos." },
      ],
      planos: {
        anual: { nome: "Plano Anual", selo: "Menor preço por mês", precoGrande: "12x de R$ 79", linhas: ["R$ 948 por ano, sem juros", "R$ 216 a menos que 12 meses do mensal", "Renova a cada 12 meses, com aviso antes"], cta: "Quero o anual por 12x de R$ 79" },
        mensal: { nome: "Plano Mensal", precoGrande: "R$ 97/mês", linhas: ["Sem compromisso", "Renova todo mês"], cta: "Quero começar pelo mensal" },
      },
      textoPosCards: "A assinatura renova automaticamente no período do plano. Avisamos por e-mail antes da renovação do anual. Você cancela em poucos cliques na sua conta Hotmart, e o acesso segue até o fim do período pago.",
      garantia: { rotulo: "Garantia de 7 dias, sem perguntas", texto: "Entre, assista às trilhas e participe da comunidade. Se em até 7 dias você sentir que o Manifesto não é para você, peça o reembolso: devolvemos 100% e encerramos a assinatura." },
      compraSegura: { titulo: "Compra segura", texto: "Pagamento processado pela Hotmart, ambiente criptografado, acesso liberado no e-mail da compra logo após a confirmação." },
      blocoFinal: {
        resumo: "Em resumo: as 4 trilhas para ir fundo, encontros ao vivo para manter a constância e uma comunidade para não fazer isso sozinho.",
        texto: "Você pode fechar esta página e seguir tentando sair do lugar como antes, com mais uma informação. Ou pode entrar no Manifesto agora, por 12x de R$ 79 ou R$ 97 por mês, e decidir com a experiência na mão. Se não fizer sentido, você cancela.",
        cta: "Quero entrar no Manifesto",
      },
    },
    {
      kind: "faq", fundo: "light", titulo: "Perguntas frequentes",
      itens: [
        { pergunta: "O que é a visão sistêmica?", resposta: "É um modo de olhar o indivíduo não isolado, mas dentro das relações e da família de onde veio, observando padrões que se repetem entre gerações e nas escolhas do dia a dia." },
        { pergunta: "Eu já faço terapia. O Manifesto substitui?", resposta: "Não. O Manifesto é conteúdo educativo de autoconhecimento e não substitui acompanhamento psicológico ou médico. Dá para estudar em paralelo, como outro ângulo para observar os seus padrões." },
        { pergunta: "Não tenho tempo. Consigo acompanhar?", resposta: "O conteúdo fica em trilhas no Hotmart Club e você assiste quando puder, no celular ou no computador. As vivências ao vivo ficam gravadas." },
        { pergunta: "Preciso saber física ou filosofia?", resposta: "Não. O Jonas explica conceitos profundos de forma didática, com exemplos de relacionamentos, carreira e dinheiro." },
        { pergunta: "Qual a diferença entre o mensal e o anual?", resposta: "O conteúdo é o mesmo. O anual sai por 12x de R$ 79 (R$ 948 no ano), R$ 216 a menos que o mensal; o mensal não tem permanência mínima." },
        { pergunta: "Como cancelo?", resposta: "Na sua conta Hotmart, em poucos cliques. O acesso continua até o fim do período já pago." },
        { pergunta: "Quando vou ter acesso?", resposta: "Logo após a confirmação do pagamento, no e-mail da compra." },
        { pergunta: "Já comprei o Manifesto por R$ 997. O que muda para mim?", resposta: "Nada: o seu acesso segue até a data contratada, nas condições que você comprou." },
      ],
    },
    { kind: "rodape", fundo: "dark", marca: "Manifesto Sistêmico", copyright: "© Manifesto Sistêmico. Todos os direitos reservados." },
  ],
};
