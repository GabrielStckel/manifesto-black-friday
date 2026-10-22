import { createServerFn } from "@tanstack/react-start";

export const getCheckoutClicks = createServerFn({ method: "GET" }).handler(
  async () => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    const { data, error } = await supabaseAdmin
      .from("checkout_clicks")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);

    if (error) {
      throw new Error(error.message);
    }

    return data ?? [];
  },
);
