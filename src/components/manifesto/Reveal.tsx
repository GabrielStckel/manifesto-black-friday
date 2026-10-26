import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  /** Mantido por compatibilidade; a revelação é só CSS e ignora o atraso. */
  delay?: number;
};

// Revelação só em CSS (animation-timeline: view()). O conteúdo já vem
// visível no HTML; navegadores sem suporte simplesmente mostram tudo.
export function Reveal({ children, className, as = "div" }: Props) {
  const Tag = as;
  return <Tag className={`reveal ${className ?? ""}`}>{children}</Tag>;
}
