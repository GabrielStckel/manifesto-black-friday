import type { ReactNode } from "react";

// Renderiza texto com **trecho** em negrito (e cor de destaque opcional).
export function Negrito({
  texto,
  destaqueClassName = "font-semibold text-brass",
}: {
  texto: string;
  destaqueClassName?: string;
}): ReactNode {
  const partes = texto.split("**");
  return partes.map((parte, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={destaqueClassName}>
        {parte}
      </strong>
    ) : (
      <span key={i}>{parte}</span>
    ),
  );
}
