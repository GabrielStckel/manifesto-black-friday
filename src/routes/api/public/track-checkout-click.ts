import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { CHECKOUT_SOURCES } from "@/lib/analytics";

const bodySchema = z.object({
  source: z.enum(CHECKOUT_SOURCES),
  href: z.string().max(2048),
});

const json = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const Route = createFileRoute("/api/public/track-checkout-click")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return json({ error: "Invalid JSON" }, 400);
        }

        const parsed = bodySchema.safeParse(body);
        if (!parsed.success) {
          return json({ error: "Invalid body", issues: parsed.error.issues }, 400);
        }

        const { supabaseAdmin } = await import(
          "@/integrations/supabase/client.server"
        );

        // ip_hash fica nulo: não é preciso para contar cliques.
        const { error } = await supabaseAdmin.from("checkout_clicks").insert({
          source: parsed.data.source,
          url: parsed.data.href,
          user_agent: request.headers.get("user-agent") ?? null,
          ip_hash: null,
          referrer: request.headers.get("referer") ?? null,
        });

        if (error) {
          console.error("track-checkout-click error:", error);
          return json({ error: "Failed to record click" }, 500);
        }

        return json({ ok: true }, 200);
      },
    },
  },
});
