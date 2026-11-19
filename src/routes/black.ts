import { createFileRoute } from "@tanstack/react-router";
import html from "../content/black.html?raw";

export const Route = createFileRoute("/black")({
  server: {
    handlers: {
      GET: async () =>
        new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=0, must-revalidate",
          },
        }),
    },
  },
});
