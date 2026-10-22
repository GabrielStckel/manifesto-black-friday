import { useEffect, useState } from "react";
import { BF_FIM, formatarFimBF, TEM_PRAZO } from "../../lib/config";
import { useVisibleAnimation } from "./useVisibleAnimation";

export function Topbar() {
  const { ref, visible } = useVisibleAnimation<HTMLDivElement>();
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    if (!TEM_PRAZO) return;
    const update = () => setExpired(Date.now() >= BF_FIM);
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const items = expired
    ? [<>A condição de <strong>Black Friday</strong> terminou</>]
    : [<><strong>Black Friday</strong> do Manifesto Sistêmico</>, <>Pela primeira vez <strong>por assinatura</strong></>, <><strong>12x de R$ 79</strong> no anual</>, <><strong>R$ 97 por mês</strong> no mensal</>, <>Garantia de <strong>7 dias</strong></>, ...(TEM_PRAZO ? [<strong>até {formatarFimBF()}</strong>] : [])];
  return <div ref={ref} className={`announcement ${visible ? "animation-visible" : ""}`}>
    <div className="ribbon-track">{[0,1].map(copy => <div className="ribbon-copy" key={copy} aria-hidden={copy === 1 ? true : undefined}>
      {items.map((item,index) => <div className="contents" key={index}><p>{item}</p><span aria-hidden="true" className="ribbon-diamond" /></div>)}
    </div>)}</div>
  </div>;
}
