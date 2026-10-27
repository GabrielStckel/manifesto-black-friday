import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [
    { title: "Política de privacidade | Manifesto Sistêmico" },
    { name: "description", content: "Saiba como o Manifesto Sistêmico usa o Pixel da Meta e como bloquear a medição de visitas." },
    { property: "og:title", content: "Política de privacidade | Manifesto Sistêmico" },
    { property: "og:description", content: "Uso de cookies para medição de visitas e anúncios e opções de privacidade." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const [disabled, setDisabled] = useState(false);
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <article className="mx-auto max-w-2xl space-y-6 text-sm leading-relaxed md:text-base">
        <Link to="/" className="text-brass-glow underline underline-offset-4">Manifesto Sistêmico</Link>
        <h1 className="font-display text-3xl font-semibold">Política de privacidade</h1>
        <p>Esta página usa o Pixel da Meta, responsável pelo Facebook e Instagram, para medir visitas e o desempenho de anúncios. A medição desta página registra apenas a visualização da página.</p>
        <p>Quando permitido, o Pixel pode usar cookies e compartilhar com a Meta informações sobre a visita, endereço da página, endereço IP, navegador, dispositivo e identificadores de cookies. Esses dados podem ser usados pela Meta para medição, atribuição e otimização de anúncios, conforme suas políticas. Não enviamos dados de formulários nem identificadores de clientes para correspondência.</p>
        <p>Não carregamos o Pixel para visitantes identificados na União Europeia, Espaço Econômico Europeu, Reino Unido ou Suíça, nem quando o país não puder ser confirmado. Não exibimos banner de consentimento. Respeitamos os sinais de privacidade Global Privacy Control e Do Not Track.</p>
        <p>Você pode bloquear cookies nas configurações do navegador ou ajustar suas preferências nas <a href="https://accountscenter.facebook.com/ad_preferences" className="text-brass-glow underline underline-offset-4" rel="noreferrer" target="_blank">configurações de anúncios da Meta</a>. Consulte também a <a href="https://www.facebook.com/privacy/policy/" className="text-brass-glow underline underline-offset-4" rel="noreferrer" target="_blank">Política de Privacidade da Meta</a>.</p>
        <p>Para impedir futuras medições neste navegador por esta página, use a opção abaixo. A recusa fica salva neste navegador e vale também nas outras abas deste site. Limpar os dados do navegador remove essa preferência.</p>
        <button type="button" className="text-brass-glow underline underline-offset-4" onClick={() => {
          try {
            localStorage.setItem("manifesto-advertising-refused", "true");
            window.dispatchEvent(new Event("manifesto-advertising-change"));
            setDisabled(true);
          } catch { setDisabled(false); }
        }}>{disabled ? "Medição bloqueada neste navegador" : "Bloquear medição neste navegador"}</button>
        <p>O pagamento acontece na Hotmart, que possui suas próprias práticas de privacidade e rastreamento.</p>
      </article>
    </main>
  );
}