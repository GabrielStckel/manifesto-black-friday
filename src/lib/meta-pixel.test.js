import { expect, test } from "bun:test";
import { runInNewContext } from "node:vm";
import { META_PIXEL_ID } from "./config.ts";
import { metaPixelHeadScript } from "./meta-pixel.ts";

async function visit(country, { ok = true, refuse = false, gpc = false, path = "/" } = {}) {
  const listeners = {};
  const scripts = [];
  const window = {
    location: { pathname: path },
    setTimeout: () => 1, clearTimeout: () => {},
    requestIdleCallback: (callback) => callback(),
    addEventListener: (name, callback) => { listeners[name] = callback; },
  };
  const document = {
    readyState: "loading", head: { appendChild: (script) => scripts.push(script) },
    createElement: () => ({}), getElementById: () => scripts[0],
  };
  const context = {
    window, document, navigator: { globalPrivacyControl: gpc }, AbortController,
    localStorage: { getItem: () => refuse ? "true" : null },
    fetch: async () => ({ ok, text: async () => `loc=${country}\n` }),
  };
  const script = metaPixelHeadScript(META_PIXEL_ID);
  runInNewContext(script, context);
  await new Promise((resolve) => setImmediate(resolve));
  return { window, scripts, listeners, context, script };
}

test("uses the requested pixel and queues only one PageView per page load", async () => {
  expect(META_PIXEL_ID).toBe("489930819102829");
  const result = await visit("BR");
  runInNewContext(result.script, result.context);
  expect(result.window.fbq.queue.map((args) => Array.from(args))).toEqual([
    ["init", "489930819102829", {}, { agent: "lovable" }], ["track", "PageView"],
  ]);
});

test("loads async SDK only after load and never twice", async () => {
  const result = await visit("BR");
  expect(result.scripts).toHaveLength(0);
  result.listeners.load(); result.listeners.load();
  expect(result.scripts).toHaveLength(1);
  expect(result.scripts[0].async).toBe(true);
  expect(result.scripts[0].src).toBe("https://connect.facebook.net/en_US/fbevents.js");
});

for (const country of "AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH XX T1 undefined".split(" ")) {
  test(`blocks country ${country} without sending or loading`, async () => {
    const result = await visit(country);
    expect(result.window.fbq).toBeUndefined();
    expect(result.scripts).toHaveLength(0);
  });
}
test("failed location lookup stays blocked", async () => {
  expect((await visit("BR", { ok: false })).window.fbq).toBeUndefined();
});
test("honors saved advertising refusal", async () => {
  expect((await visit("BR", { refuse: true })).window.fbq).toBeUndefined();
});
test("honors Global Privacy Control", async () => {
  expect((await visit("BR", { gpc: true })).window.fbq).toBeUndefined();
});
test("does not report privacy policy visits", async () => {
  expect((await visit("BR", { path: "/privacidade" })).window.fbq).toBeUndefined();
});
test("withdrawal revokes tracking immediately and prevents deferred SDK", async () => {
  const result = await visit("BR");
  result.context.localStorage.getItem = () => "true";
  result.listeners["manifesto-advertising-change"]();
  result.listeners.load();
  expect(Array.from(result.window.fbq.queue.at(-1))).toEqual(["consent", "revoke"]);
  expect(result.scripts).toHaveLength(0);
});