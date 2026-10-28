export type Meta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type CtaBar = {
  /** Texto principal à esquerda (ex.: "Anual 12x R$ 79 · Mensal R$ 97"). */
  resumo: string;
  /** Linha menor abaixo do resumo (escondida em telas muito estreitas). */
  detalhe: string;
  /** Rótulo do botão. */
  botao: string;
};

export type Hero = {
  badge: string;
  h1: string;
  cta: string;
  microtexto: string;
};

export type Fundo = "dark" | "light" | "red";

export type SectionResumo = {
  kind: "resumo";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  blocos: { rotulo: string; texto: string }[];
  cta: string;
  nota: string;
  /** Versão da nota usada quando há VSL (cita o vídeo). */
  notaComVsl: string;
};

export type SectionPadrao = {
  kind: "padrao";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  paragrafos: string[];
  /** Frase em negrito dentro do último parágrafo. */
  destaque: string;
  linkTopo: string;
  cenas: string[];
};

export type SectionMentiras = {
  kind: "mentiras";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  fecho: string;
  itens: {
    rotulo: string;
    mentira: string;
    rotuloVerdade: string;
    verdade: string;
  }[];
};

export type SectionSetenios = {
  kind: "setenios";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  abertura: string;
  /** Marcas da régua (ex.: "0", "7", "14", "21 anos"). */
  marcas: string[];
  /** Rótulos dos três setênios sob a régua. */
  reguaRotulos: string[];
  rotuloLista: string;
  elos: { titulo: string; texto: string }[];
  pertencimento: { titulo: string; texto: string };
  fecho: string;
};

export type SectionParadigma = {
  kind: "paradigma";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  antigo: {
    rotulo: string;
    nome: string;
    texto: string;
  };
  novo: {
    rotulo: string;
    itens: { titulo: string; texto: string }[];
  };
};

export type SectionPilares = {
  kind: "pilares";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  itens: { titulo: string; texto: string }[];
  fecho: string;
};

export type Trilha = {
  numero: string;
  titulo: string;
  texto: string;
};

export type SectionTrilhas = {
  kind: "trilhas";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  texto: string;
  profundidade: { titulo: string; sublegenda: string };
  trilhas: Trilha[];
  constancia: { titulo: string; sublegenda: string; itens: string[] };
  companhia: { titulo: string; sublegenda: string; texto: string };
  /** Imagens da área de membros. Vazio = a faixa não renderiza. */
  prints?: { src: string; alt: string }[];
};

export type SectionPassos7 = {
  kind: "passos7";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  passos: { titulo: string; texto: string }[];
};

export type SectionJonas = {
  kind: "jonas";
  fundo: Fundo;
  eyebrow: string;
  nome: string;
  textos: string[];
  /** Parágrafo extra, só renderiza se preenchido. */
  credencial?: string;
  /** Retrato 4:5. Sem foto, mostra o monograma "JP". */
  foto?: { src: string; alt: string; srcSet?: string };
};

export type Depoimento = {
  texto: string;
  nome: string;
  detalhe: string;
};

export type SectionDepoimentos = {
  kind: "depoimentos";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  /** Lista vazia = a seção não renderiza. */
  itens: Depoimento[];
  nota: string;
};

export type SectionParaQuem = {
  kind: "paraQuem";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  paraVoce: string[];
  naoParaVoce: string[];
};

export type PlanoOferta = {
  rotulo: string;
  /** Selo opcional exibido acima do card (ex.: "MAIS EM CONTA QUE O MENSAL"). */
  selo?: string;
  /** Linha acima do preço (ex.: "12x de"). */
  precoPre?: string;
  preco: string;
  /** Linha ao lado/abaixo do preço (ex.: "por mês"). */
  precoPos?: string;
  /** Linha de apoio sob o preço. */
  linha: string;
  itens: string[];
  cta: string;
};

export type SectionOferta = {
  kind: "oferta";
  fundo: Fundo;
  titulo: string;
  porQueAgora: { rotulo: string; texto: string };
  inclui: { rotulo: string; texto: string }[];
  planos: {
    anual: PlanoOferta;
    mensal: PlanoOferta;
  };
  garantia: {
    selo: string;
    titulo: string;
    texto: string;
  };
};

export type SectionDoisCaminhos = {
  kind: "doisCaminhos";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  cards: { titulo: string; texto: string; destaque?: boolean }[];
  cta: string;
  microtexto: string;
};

export type SectionFaq = {
  kind: "faq";
  fundo: Fundo;
  eyebrow: string;
  titulo: string;
  itens: { pergunta: string; resposta: string }[];
  cta: string;
  microtexto: string;
};

export type SectionRodape = {
  kind: "rodape";
  fundo: Fundo;
  marca: string;
  copyright: string;
};

export type ManifestoSection =
  | SectionResumo
  | SectionPadrao
  | SectionMentiras
  | SectionSetenios
  | SectionParadigma
  | SectionPilares
  | SectionTrilhas
  | SectionPassos7
  | SectionJonas
  | SectionDepoimentos
  | SectionParaQuem
  | SectionOferta
  | SectionDoisCaminhos
  | SectionFaq
  | SectionRodape;

export type ManifestoContent = {
  meta: Meta;
  ctaBar: CtaBar;
  hero: Hero;
  sections: ManifestoSection[];
};
