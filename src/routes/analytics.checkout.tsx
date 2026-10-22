import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getCheckoutClicks } from "../lib/analytics.functions";

export const Route = createFileRoute("/analytics/checkout")({
  loader: async () => {
    const clicks = await getCheckoutClicks();
    return { clicks };
  },
  head: () => ({
    meta: [
      { title: "Analytics de Checkout | Manifesto Sistêmico" },
      {
        name: "description",
        content: "Visualização interna de cliques nos botões de checkout.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AnalyticsCheckout,
});

type Click = {
  id: string;
  created_at: string;
  source: string;
  user_agent: string | null;
  ip_hash: string | null;
  referrer: string | null;
  url: string | null;
};

const sourceLabels: Record<string, string> = {
  hero: "Hero",
  oferta: "Oferta",
  cta_bar: "Barra fixa",
};

function AnalyticsCheckout() {
  const { clicks } = Route.useLoaderData() as { clicks: Click[] };
  const now = Date.now();

  const ms24h = 24 * 60 * 60 * 1000;
  const ms7d = 7 * ms24h;
  const ms30d = 30 * ms24h;

  const total24h = clicks.filter(
    (c) => now - new Date(c.created_at).getTime() <= ms24h,
  ).length;
  const total7d = clicks.filter(
    (c) => now - new Date(c.created_at).getTime() <= ms7d,
  ).length;
  const total30d = clicks.filter(
    (c) => now - new Date(c.created_at).getTime() <= ms30d,
  ).length;

  const bySource = clicks.reduce(
    (acc, c) => {
      acc[c.source] = (acc[c.source] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="min-h-screen bg-section-dark-bg p-6 text-section-dark-fg">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 font-display text-2xl font-semibold">
          Analytics de Checkout
        </h1>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card label="Últimas 24h" value={total24h} />
          <Card label="Últimos 7 dias" value={total7d} />
          <Card label="Últimos 30 dias" value={total30d} />
          <Card label="Total" value={clicks.length} />
        </div>

        <div className="mb-8">
          <h2 className="mb-4 font-display text-lg font-semibold">Por origem</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {Object.entries(bySource).map(([source, count]) => (
              <div
                key={source}
                className="rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs uppercase tracking-wider text-brass">
                  {sourceLabels[source] ?? source}
                </p>
                <p className="mt-1 text-2xl font-semibold">{count}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">
            Últimos cliques
          </h2>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-wider text-brass">
                <tr>
                  <th className="px-4 py-3">Data/hora</th>
                  <th className="px-4 py-3">Origem</th>
                  <th className="px-4 py-3">Referrer</th>
                  <th className="px-4 py-3">User-Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {clicks.slice(0, 50).map((click) => (
                  <tr key={click.id}>
                    <td className="whitespace-nowrap px-4 py-3">
                      {format(new Date(click.created_at), "dd/MM/yyyy HH:mm", {
                        locale: ptBR,
                      })}
                    </td>
                    <td className="px-4 py-3">
                      {sourceLabels[click.source] ?? click.source}
                    </td>
                    <td className="max-w-xs truncate px-4 py-3">
                      {click.referrer || "-"}
                    </td>
                    <td className="max-w-xs truncate px-4 py-3">
                      {click.user_agent || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-wider text-brass">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  );
}
