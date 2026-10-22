import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const bodySchema = z.object({
  source: z.enum(["hero", "oferta", "cta_bar"]),
  href: z.string().max(2048),
});

async function sha256(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await globalThis.crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0];
    return first ? first.trim() : "unknown";
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

export const Route = createFileRoute("/api/public/track-checkout-click")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = bodySchema.safeParse(body);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({
              error: "Invalid body",
              issues: parsed.error.issues,
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            },
          );
        }

        const { supabaseAdmin } = await import(
          "@/integrations/supabase/client.server"
        );

        const ip = getClientIp(request);
        const ipHash = await sha256(ip);

        const { error } = await supabaseAdmin.from("checkout_clicks").insert({
          source: parsed.data.source,
          url: parsed.data.href,
          user_agent: request.headers.get("user-agent") ?? null,
          ip_hash: ipHash,
          referrer: request.headers.get("referer") ?? null,
        });

        if (error) {
          console.error("track-checkout-click error:", error);
          return new Response(
            JSON.stringify({ error: "Failed to record click" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            },
          );
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
