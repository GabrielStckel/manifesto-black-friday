import type { ManifestoContent } from "./manifesto.types";
import jonas480 from "../assets/jonas-peres-480.webp.asset.json";
import jonas720 from "../assets/jonas-peres-720.webp.asset.json";

// Textos com **trecho** rendem o trecho em negrito/destaque (ver Negrito.tsx).
export const manifesto: ManifestoContent = {
  meta: {
    title: "Black Friday do Manifesto Sistêmico: 12x de R$ 79 ou R$ 97/mês",
    description: "Black Friday do Manifesto Sistêmico: pela primeira vez por assinatura, 12x de R$ 79 no anual ou R$ 97 por mês, com garantia de 7 dias.",
    ogTitle: "Black Friday do Manifesto Sistêmico: 12x de R$ 79 ou R$ 97/mês",
    ogDescription: "Black Friday do Manifesto Sistêmico: pela primeira vez por assinatura, 12x de R$ 79 no anual ou R$ 97 por mês, com garantia de 7 dias.",
  },
  ctaBar: {
    resumo: "12x R$ 79 ou R$ 97/mês",
    detalhe: "Black Friday do Manifesto · garantia de 7 dias",
    botao: "Ver planos",
  },
  hero: {
    badge: "BLACK FRIDAY · MANIFESTO SISTÊMICO",
    h1: "Você já entendeu o seu padrão. Por que ele continua voltando?",
    cta: "Ver os planos da Black Friday",
    microtexto: "Acesso no Hotmart Club logo após a confirmação do pagamento · Garantia de 7 dias",
  },
  sections: [
    {
      kind: "resumo", fundo: "dark",
      eyebrow: "PARA QUEM JÁ CONHECE O JONAS",
      titulo: "A Black Friday do Manifesto, em resumo",
      blocos: [
        { rotulo: "O QUE É", texto: "Um streaming de autoconhecimento sistêmico no Hotmart Club: **4 trilhas** em ordem, com exercícios, **vivências ao vivo a cada dois meses** com o Jonas e a equipe, e uma **comunidade de membros**." },
        { rotulo: "O QUE MUDA AGORA", texto: "Até hoje, a entrada era um pagamento único de R$ 997, por 1 ano de acesso. Nesta Black Friday, **pela primeira vez, dá para entrar por assinatura** e começar com menos." },
        { rotulo: "QUANTO CUSTA", texto: "**12x de R$ 79** no anual (R$ 948 por ano) ou **R$ 97 por mês**. Garantia de 7 dias nos dois planos." },
      ],
      cta: "Escolher meu plano",
      nota: "Prefere entender antes? O argumento completo está logo abaixo.",
      notaComVsl: "Prefere entender antes? O argumento completo está logo abaixo, e no vídeo acima.",
    },
    {
      kind: "padrao", fundo: "light",
      eyebrow: "O PADRÃO",
      titulo: "Talvez você reconheça alguma destas cenas",
      paragrafos: [
        "Muita gente chega aqui depois de anos tentando entender. Leu os livros, assistiu às aulas, fez cursos. Sabe de onde vem. E, mesmo sabendo, continua no mesmo lugar.",
        "Não é falta de força de vontade. Nem de informação. Existe uma razão para o padrão voltar, e ela não está no que você sabe: está no que continua operando por baixo.",
      ],
      destaque: "Não é falta de força de vontade. Nem de informação.",
      linkTopo: "O Jonas explica no vídeo ↑",
      cenas: [
        "Você jurou que nunca falaria com os seus filhos daquele jeito. Um dia, ouviu a própria voz repetindo o mesmo tom.",
        "A briga muda de pessoa, de casa, de década. O roteiro é o mesmo.",
        "O dinheiro entra e, de algum jeito, escorre, justo quando as coisas começam a melhorar.",
        "A decisão que você sabe que precisa tomar está adiada há anos. E não é por falta de clareza.",
      ],
    },
    {
      kind: "mentiras", fundo: "dark",
      eyebrow: "POR QUE ENTENDER NÃO BASTA",
      titulo: "As duas ideias que mantêm muita gente no mesmo lugar",
      itens: [
        { rotulo: "A PRIMEIRA IDEIA", mentira: "O tempo resolve.", rotuloVerdade: "NA VISÃO SISTÊMICA", verdade: "O tempo, sozinho, não muda um padrão. Quando uma dor ou um conflito é deixado de lado, é como se o inconsciente guardasse essa informação e continuasse operando em silêncio, acionando evitação e autossabotagem ao menor sinal de risco." },
        { rotulo: "A SEGUNDA IDEIA", mentira: "Basta entender e ressignificar.", rotuloVerdade: "NA VISÃO SISTÊMICA", verdade: "Entender com a cabeça ajuda, mas não basta. Uma “bela história” sobre o que doeu muda a narrativa, não necessariamente o padrão. A virada vem de integrar o acontecimento, pacificar a relação com o seu sistema e perceber a função que aquele episódio teve na sua vida." },
      ],
      fecho: "Por isso entender acontece num dia, e o padrão volta no dia seguinte.",
    },
    {
      kind: "setenios", fundo: "red",
      eyebrow: "DE ONDE VEM O PADRÃO",
      titulo: "O seu “sistema operacional” foi escrito antes dos 21 anos",
      abertura: "Na leitura sistêmica que o Jonas ensina, o seu funcionamento atual não começou na vida adulta. Ele foi desenhado nos três primeiros setênios, dos 0 aos 21 anos, quando o mundo emocional governou a construção do seu “eu”.",
      marcas: ["0", "7", "14", "21 anos"],
      reguaRotulos: ["1º SETÊNIO · 0 A 7", "2º SETÊNIO · 7 A 14", "3º SETÊNIO · 14 A 21"],
      rotuloLista: "O QUE ESSE PERÍODO COSTUMA DEIXAR",
      elos: [
        { titulo: "De 0 a 7 anos: o registro sem filtros", texto: "Você era puro sentimento, sem senso crítico. Se faltou segurança e acolhimento, confiar na vida pode ter ficado mais difícil." },
        { titulo: "A busca sem fim por segurança", texto: "A criança que amadurece rápido demais para se proteger muitas vezes vira o adulto que busca segurança psicológica e financeira o tempo todo." },
        { titulo: "O medo de sofrer e o medo de mudar", texto: "Para não sofrer, o “querer” fica limitado ao que é conhecido. O sofrimento conhecido parece mais seguro que o risco do novo, e a decisão sai do medo, não do que faz sentido." },
      ],
      pertencimento: {
        titulo: "E uma camada a mais: o pertencimento",
        texto: "No esforço inconsciente de pertencer à família e ao meio em que vivemos, tendemos a repetir os comportamentos que nos prendem, para não nos sentirmos excluídos. Romper com o antigo gera medo de solidão. Por isso, quando você tenta sair do padrão sozinho, alguma coisa puxa de volta.",
      },
      fecho: "É esse programa que volta, mesmo depois de você entender tudo.",
    },
    {
      kind: "paradigma", fundo: "light",
      eyebrow: "A VIRADA",
      titulo: "Você não sai de um padrão com a mesma lógica que o criou",
      antigo: { rotulo: "O OLHAR QUE NOS MOLDOU", nome: "Paradigma cartesiano", texto: "Causa e efeito isolados, a ilusão de controlar o futuro, a vida em gavetas. Tentar controlar pessoas, dinheiro e destino por essa lógica gera exaustão e a sensação de estar sempre lutando contra a vida." },
      novo: {
        rotulo: "O OLHAR SISTÊMICO",
        itens: [
          { titulo: "Nada está isolado.", texto: "As travas no dinheiro, no trabalho e nas relações fazem parte de um mesmo sistema de informações herdadas e de dinâmicas familiares." },
          { titulo: "A vida não se controla, se navega.", texto: "Sair do controle obsessivo para a presença e a maturidade emocional." },
          { titulo: "O modo como você percebe molda o que você vive.", texto: "Inspirada nas perguntas que a física moderna abriu sobre o papel do observador, a visão sistêmica propõe que a sua percepção molda o que você enxerga, escolhe e repete." },
          { titulo: "Pai é o mundo, mãe é a vida.", texto: "Na visão sistêmica, olhar de outro jeito para a relação com seus pais, e reconhecer a força que veio deles, é parte de aprender a confiar e a tomar a própria vida." },
        ],
      },
    },
    {
      kind: "pilares", fundo: "red",
      eyebrow: "O QUE DE FATO MUDA UM PADRÃO",
      titulo: "Quem sai do lugar costuma ter três coisas que o “entender” sozinho não dá",
      itens: [
        { titulo: "Profundidade", texto: "O padrão foi escrito na origem. Por isso é preciso olhar para ela no seu sistema, não só para o que aparece na superfície." },
        { titulo: "Constância", texto: "O padrão volta. Por isso é preciso voltar a ele muitas vezes, ao longo de meses. Uma aula, um livro ou um fim de semana abrem a porta; não seguram a mudança." },
        { titulo: "Companhia", texto: "Sozinho, o pertencimento puxa de volta. Com outras pessoas no mesmo caminho, ele passa a puxar para a frente." },
      ],
      fecho: "Foi para reunir os três num lugar só que nasceu o Manifesto Sistêmico.",
    },
    {
      kind: "trilhas", fundo: "dark",
      eyebrow: "O MANIFESTO POR DENTRO",
      titulo: "Um streaming de autoconhecimento sistêmico, organizado em trilhas",
      texto: "Tudo fica no Hotmart Club, no celular ou no computador. Cada parte do Manifesto cuida de um dos três pilares.",
      profundidade: { titulo: "Profundidade", sublegenda: "AS QUATRO TRILHAS" },
      trilhas: [
        { numero: "01", titulo: "A arquitetura da consciência sistêmica", texto: "O começo do movimento: entender como funciona o sistema de que você faz parte." },
        { numero: "02", titulo: "As três motivações humanas", texto: "As motivações gravadas dos 0 aos 21 anos, o medo de sofrer e o medo de mudar, e a relação com a sua origem." },
        { numero: "03", titulo: "O despertar do paradigma", texto: "As implicações filosóficas da física moderna e o que elas sugerem sobre o papel da sua consciência no dia a dia." },
        { numero: "04", titulo: "A individuação", texto: "Sair da postura de “pequeno”, parar de terceirizar responsabilidades e tomar a própria vida." },
      ],
      constancia: {
        titulo: "Constância", sublegenda: "ENQUANTO VOCÊ É MEMBRO",
        itens: [
          "Vivência ao vivo de aprofundamento a cada dois meses (seis por ano), com o Jonas e a equipe. A gravação fica disponível depois na área de membros.",
          "Materiais de apoio e exercícios práticos para o dia a dia.",
        ],
      },
      companhia: { titulo: "Companhia", sublegenda: "A COMUNIDADE", texto: "Comunidade de membros que fazem o mesmo caminho, para você não atravessar isso sozinho." },
      prints: [],
    },
    {
      kind: "passos7", fundo: "light",
      eyebrow: "DEPOIS QUE VOCÊ ASSINA",
      titulo: "Em 7 dias, você sabe se o Manifesto é para você",
      passos: [
        { titulo: "No dia em que assinar", texto: "O acesso chega no e-mail da compra. Comece pela Trilha 01: assista à primeira aula e faça o primeiro exercício." },
        { titulo: "Ao longo da primeira semana", texto: "Siga a Trilha 01 no seu ritmo e entre na comunidade de membros." },
        { titulo: "Até o 7º dia", texto: "Decida com a experiência na mão. Se sentir que não é para você, peça o reembolso dentro da garantia: devolvemos 100%." },
      ],
    },
    {
      kind: "jonas", fundo: "dark",
      eyebrow: "QUEM CONDUZ",
      nome: "Jonas Peres",
      textos: [
        "Educador e criador de conteúdo de autoconhecimento sistêmico. Toda quinta-feira, dá aula ao vivo no canal Autoconhecimento Sistêmico.",
        "No Manifesto, é ele quem conduz as trilhas e, com a equipe, as vivências ao vivo, explicando conceitos profundos de forma didática, com exemplos de relacionamentos, carreira e dinheiro.",
      ],
      credencial: "",
      foto: {
        src: jonas720.url,
        srcSet: `${jonas480.url} 480w, ${jonas720.url} 720w`,
        alt: "Jonas Peres falando ao microfone em um evento",
      },
    },
    {
      kind: "depoimentos", fundo: "light",
      eyebrow: "O QUE DIZEM OS MEMBROS",
      titulo: "O que dizem os membros",
      itens: [],
      nota: "Experiência individual; os resultados variam.",
    },
    {
      kind: "paraQuem", fundo: "dark",
      eyebrow: "ANTES DE ESCOLHER O PLANO",
      titulo: "Para quem é, e para quem não é",
      paraVoce: [
        "Percebe que repete escolhas que já decidiu não repetir.",
        "Já leu, estudou ou fez terapia e quer olhar o padrão por outro ângulo.",
        "Quer estudar no seu ritmo, com encontros ao vivo periódicos e outras pessoas no mesmo caminho.",
      ],
      naoParaVoce: [
        "Procura uma solução rápida ou uma mudança com prazo marcado.",
        "Busca atendimento psicológico ou tratamento. O Manifesto é conteúdo educativo e não substitui acompanhamento profissional.",
      ],
    },
    {
      kind: "oferta", fundo: "dark",
      titulo: "Escolha como entrar no Manifesto",
      porQueAgora: {
        rotulo: "POR QUE AGORA",
        texto: "Até hoje, a entrada no Manifesto era um pagamento único de **R$ 997**, por 1 ano de acesso. Nesta Black Friday, pela primeira vez, dá para entrar por assinatura e começar com menos: **R$ 97 por mês**, ou **12x de R$ 79** no anual. Você decide com a experiência na mão.",
      },
      inclui: [
        { rotulo: "PROFUNDIDADE", texto: "As 4 trilhas completas no Hotmart Club, com exercícios práticos." },
        { rotulo: "CONSTÂNCIA", texto: "Seis vivências ao vivo por ano com o Jonas e a equipe, com gravação depois, e materiais de apoio para o dia a dia." },
        { rotulo: "COMPANHIA", texto: "A comunidade de membros que fazem o mesmo caminho." },
      ],
      planos: {
        anual: {
          rotulo: "PLANO ANUAL",
          selo: "MAIS EM CONTA QUE O MENSAL",
          precoPre: "12x de",
          preco: "R$ 79",
          linha: "R$ 948 por ano, sem juros · cerca de R$ 2,60 por dia",
          itens: [
            "R$ 216 a menos que 12 meses do mensal (R$ 1.164)",
            "Todo o Manifesto: trilhas, vivências ao vivo e comunidade",
            "Renova automaticamente a cada 12 meses, com aviso por e-mail antes",
          ],
          cta: "Quero o anual por 12x de R$ 79",
        },
        mensal: {
          rotulo: "PLANO MENSAL",
          preco: "R$ 97",
          precoPos: "por mês",
          linha: "Sem permanência mínima",
          itens: [
            "Cancele quando quiser, em poucos cliques",
            "Todo o Manifesto: trilhas, vivências ao vivo e comunidade",
            "Renova automaticamente todo mês",
          ],
          cta: "Começar pelo mensal",
        },
      },
      garantia: {
        selo: "7 DIAS",
        titulo: "Garantia de 7 dias",
        texto: "Entre, assista às trilhas e participe da comunidade. Se em até 7 dias da compra você sentir que o Manifesto não é para você, peça o reembolso na sua conta Hotmart: devolvemos 100% da primeira cobrança e encerramos a assinatura.",
      },
    },
    {
      kind: "doisCaminhos", fundo: "red",
      eyebrow: "EM RESUMO",
      titulo: "As 4 trilhas para ir fundo, encontros ao vivo para manter a constância e uma comunidade para não fazer isso sozinho",
      cards: [
        { titulo: "Fechar esta página", texto: "E seguir tentando sair do lugar como antes, com mais uma informação." },
        { titulo: "Entrar no Manifesto agora", texto: "Por 12x de R$ 79 no anual ou R$ 97 por mês, e decidir com a experiência na mão. Se não fizer sentido em 7 dias, você pede o reembolso.", destaque: true },
      ],
      cta: "Quero entrar no Manifesto",
      microtexto: "Garantia de 7 dias nos dois planos",
    },
    {
      kind: "faq", fundo: "light",
      eyebrow: "PERGUNTAS FREQUENTES",
      titulo: "O que as pessoas perguntam antes de entrar",
      itens: [
        { pergunta: "Eu já assisto às aulas de quinta do Jonas. O que muda no Manifesto?", resposta: "As aulas de quinta são abertas e cada uma trata de um tema. No Manifesto, o conteúdo segue uma ordem, em trilhas com exercícios, e você tem as vivências ao vivo de aprofundamento e a comunidade de membros." },
        { pergunta: "O que é a visão sistêmica?", resposta: "Um modo de olhar a pessoa não isolada, mas dentro das relações e da família de onde veio, observando padrões que se repetem entre gerações e nas escolhas do dia a dia." },
        { pergunta: "Eu já faço terapia. O Manifesto substitui?", resposta: "Não. O Manifesto é conteúdo educativo de autoconhecimento e não substitui acompanhamento psicológico ou médico. Dá para estudar em paralelo, como outro ângulo para observar os seus padrões." },
        { pergunta: "Não tenho tempo. Consigo acompanhar?", resposta: "Sim. As trilhas ficam no Hotmart Club e você assiste quando puder, no celular ou no computador. As vivências ao vivo ficam gravadas." },
        { pergunta: "Preciso saber física ou filosofia?", resposta: "Não. O Jonas explica conceitos profundos de forma didática, com exemplos de relacionamentos, carreira e dinheiro." },
        { pergunta: "Qual a diferença entre o mensal e o anual?", resposta: "O conteúdo é o mesmo. O anual sai por 12x de R$ 79 (R$ 948 no ano), R$ 216 a menos que 12 meses do mensal. O mensal custa R$ 97 e não tem permanência mínima." },
        { pergunta: "A assinatura renova sozinha?", resposta: "Sim, no período do plano: a cada 12 meses no anual e todo mês no mensal. Avisamos por e-mail antes da renovação do anual, e você pode cancelar na sua conta Hotmart. O acesso segue até o fim do período já pago." },
        { pergunta: "E se eu cancelar o anual depois da garantia?", resposta: "O cancelamento impede a próxima renovação, e o seu acesso segue até o fim dos 12 meses. As parcelas do ano já contratado continuam, porque o anual é um pagamento de R$ 948 dividido em 12x. Se você quer poder parar a qualquer mês, o mensal é o plano certo." },
        { pergunta: "Como funciona a garantia?", resposta: "Você tem 7 dias, contados da compra, para experimentar. Se sentir que não é para você, peça o reembolso na sua conta Hotmart: devolvemos 100% da primeira cobrança e encerramos a assinatura. Vale para os dois planos." },
        { pergunta: "Quando vou ter acesso?", resposta: "Logo após a confirmação do pagamento, no e-mail usado na compra." },
        { pergunta: "Já comprei o Manifesto por R$ 997. O que muda para mim?", resposta: "Nada. O seu acesso segue até a data contratada, nas condições em que você comprou. Se o seu acesso já venceu, você pode voltar por um dos planos da Black Friday." },
      ],
      cta: "Ver os planos da Black Friday",
      microtexto: "12x de R$ 79 no anual ou R$ 97 por mês · Garantia de 7 dias",
    },
    { kind: "rodape", fundo: "dark", marca: "Manifesto Sistêmico", copyright: "© Manifesto Sistêmico. Todos os direitos reservados." },
  ],
};
