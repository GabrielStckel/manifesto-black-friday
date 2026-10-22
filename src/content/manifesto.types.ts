export type Meta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type CtaBar = {
  label: string;
};

export type Hero = {
  badge: string;
  h1: string;
  headlinePlayer: string;
  subtitulo: string;
  cta: string;
  microtexto: string;
};

export type Fundo = "dark" | "light" | "red";

export type SectionMentiras = {
  kind: "mentiras";
  fundo: Fundo;
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
  titulo: string;
  abertura: string;
  elos: { titulo: string; texto: string }[];
  fecho: string;
};

export type SectionParadigma = {
  kind: "paradigma";
  fundo: Fundo;
  titulo: string;
  antigo: {
    nome: string;
    texto: string;
  };
  novo: {
    nome: string;
    transicao: string;
    itens: { titulo: string; texto: string }[];
  };
};

export type SectionPadrao = {
  kind: "padrao";
  fundo: Fundo;
  titulo: string;
  paragrafos: string[];
};

export type SectionPilares = {
  kind: "pilares";
  fundo: Fundo;
  titulo: string;
  intro: string;
  itens: { titulo: string; texto: string }[];
  sozinho: { titulo: string; texto: string };
  fecho: string;
};

export type SectionJonas = {
  kind: "jonas";
  fundo: Fundo;
  titulo: string;
  nome: string;
  texto: string;
};

export type PlanoOferta = {
  nome: string;
  /** Selo opcional exibido acima do card (ex.: "Menor preço por mês"). */
  selo?: string;
  precoGrande: string;
  linhas: string[];
  cta: string;
};

export type SectionOferta = {
  kind: "oferta";
  fundo: Fundo;
  titulo: string;
  porQueAgora: { titulo: string; texto: string };
  inclui: { rotulo?: string; texto: string }[];
  compraSegura: { titulo: string; texto: string };
  planos: {
    anual: PlanoOferta;
    mensal: PlanoOferta;
  };
  textoPosCards: string;
  garantia: {
    rotulo: string;
    texto: string;
  };
  blocoFinal: {
    resumo: string;
    texto: string;
    cta: string;
  };
};

export type Trilha = {
  numero: string;
  rotulo: string;
  titulo: string;
  texto: string;
  /** Preenchido quando as capas existirem. Enquanto vazio, o card usa a capa tipográfica. */
  poster?: { src: string; alt: string; width: number; height: number };
  /** Selo opcional, ex.: conteúdo ainda não disponível. */
  status?: string;
};

export type SectionTrilhas = {
  kind: "trilhas";
  fundo: Fundo;
  titulo: string;
  trilhas: Trilha[];
  profundidadeTitulo: string;
  constancia: { titulo: string; itens: string[] };
  companhia: { titulo: string; texto: string };
  primeiraSemana: string;
};

export type Depoimento = {
  texto: string;
  nome: string;
  detalhe: string;
};

export type SectionDepoimentos = {
  kind: "depoimentos";
  fundo: Fundo;
  titulo: string;
  /** Lista vazia = a seção não renderiza. */
  itens: Depoimento[];
  nota: string;
};

export type SectionParaQuem = {
  kind: "paraQuem";
  fundo: Fundo;
  titulo: string;
  paraVoce: string[];
  naoParaVoce: string[];
};

export type SectionFaq = {
  kind: "faq";
  fundo: Fundo;
  titulo: string;
  itens: { pergunta: string; resposta: string }[];
};

export type SectionRodape = {
  kind: "rodape";
  fundo: Fundo;
  marca: string;
  copyright: string;
};

export type ManifestoSection =
  | SectionMentiras
  | SectionSetenios
  | SectionParadigma
  | SectionPadrao
  | SectionPilares
  | SectionJonas
  | SectionTrilhas
  | SectionDepoimentos
  | SectionParaQuem
  | SectionOferta
  | SectionFaq
  | SectionRodape;

export type ManifestoContent = {
  meta: Meta;
  ctaBar: CtaBar;
  hero: Hero;
  sections: ManifestoSection[];
};
