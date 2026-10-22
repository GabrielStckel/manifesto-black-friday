export type Meta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type Topbar = {
  marca: string;
};

export type CtaBar = {
  label: string;
};

export type Hero = {
  badge: string;
  h1: string;
  subtitulo: string;
  cta: string;
  microtexto: string;
};




export type Fundo = "dark" | "light" | "red";

export type SectionMentiras = {
  kind: "mentiras";
  fundo: Fundo;
  titulo: string;
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

export type SectionComunidade = {
  kind: "comunidade";
  fundo: Fundo;
  titulo: string;
  texto: string;
};

export type SectionColetivo = {
  kind: "coletivo";
  fundo: Fundo;
  titulo: string;
  texto: string;
};

export type SectionOferta = {
  kind: "oferta";
  fundo: Fundo;
  titulo: string;
  inclui: string[];
  preco: {
    rotulo: string;
    /** Preço "de" para comparação. Deixar ausente até haver histórico de venda. */
    de?: string;
    parcelado: string;
    aVista: string;
    nota?: string;
  };

  cta: string;
  garantia: {
    rotulo: string;
    texto: string;
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
  | SectionComunidade
  | SectionColetivo
  | SectionTrilhas
  | SectionOferta
  | SectionFaq
  | SectionRodape;

export type ManifestoContent = {
  meta: Meta;
  topbar: Topbar;
  ctaBar: CtaBar;
  hero: Hero;
  sections: ManifestoSection[];
};
