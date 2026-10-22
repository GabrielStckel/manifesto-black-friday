import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { useVisibleAnimation } from "./useVisibleAnimation";

type Props = ComponentProps<"a"> & { children: ReactNode; secondary?: boolean; arrow?: boolean };
export function ManifestoCta({ children, className = "", secondary = false, arrow = true, ...props }: Props) {
  const { ref, visible } = useVisibleAnimation<HTMLAnchorElement>();
  return <a {...props} ref={ref} className={`btn ${secondary ? "btn-secondary" : ""} ${visible ? "animation-visible" : ""} ${className}`}>
    <span>{children}</span>
    {arrow && <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />}
  </a>;
}