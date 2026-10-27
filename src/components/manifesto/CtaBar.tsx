import { useEffect, useState } from "react";
import type { CtaBar as CtaBarType } from "../../content/manifesto.types";
import { ManifestoCta } from "./ManifestoCta";
import { shouldShowFloatingCta } from "../../lib/cta-visibility";
import { TEM_VSL, VSL_REVELAR } from "../../lib/config";

export function CtaBar({ resumo, botao }: CtaBarType) {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero");
    const plans = document.getElementById("planos");
    const ctas = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href="#planos"]')).filter(el => !el.closest('.floating-cta'));
    const elements = [hero, plans, ...ctas].filter((el): el is HTMLElement => el !== null);
    const visible = new Map<Element, boolean>();
    const update = () => setVisivel(shouldShowFloatingCta(visible.get(hero as Element) ?? true, visible.get(plans as Element) ?? true, ctas.some(el => visible.get(el))));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) visible.set(entry.target, entry.isIntersecting);
      update();
    });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const parts = resumo.split(/(12x R\$ 79|R\$ 97\/mês)/g);
  const floatingCta = <div aria-hidden={!visivel} className={`floating-cta ${visivel ? "is-visible" : ""}`}>
    <ManifestoCta href="#planos" arrow={false} tabIndex={visivel ? undefined : -1}>
      {botao} · {parts.map((part, index) => /^(12x R\$ 79|R\$ 97\/mês)$/.test(part) ? <strong key={index}>{part}</strong> : part)}
    </ManifestoCta>
  </div>;
  return TEM_VSL ? <div className={VSL_REVELAR}>{floatingCta}</div> : floatingCta;
}
