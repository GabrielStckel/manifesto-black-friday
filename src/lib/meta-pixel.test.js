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

const queueOf = (result) => result.window.fbq.queue.map((args) => Array.from(args));
const ACTIVE = [["init", "489930819102829", {}, { agent: "lovable" }], ["track", "PageView"]];

test("BR: queues exactly init and PageView, SDK injected immediately and once", async () => {
  expect(META_PIXEL_ID).toBe("489930819102829");
  const result = await visit("BR");
  runInNewContext(result.script, result.context);
  expect(queueOf(result)).toEqual(ACTIVE);
  expect(result.scripts).toHaveLength(1);
  expect(result.scripts[0].async).toBe(true);
  expect(result.scripts[0].src).toBe("https://connect.facebook.net/en_US/fbevents.js");
});

for (const country of "AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH".split(" ")) {
  test(`blocked country ${country} revokes consent`, async () => {
    const result = await visit(country);
    await new Promise((resolve) => setImmediate(resolve));
    expect(queueOf(result).at(-1)).toEqual(["consent", "revoke"]);
  });
}
for (const [label, country, opts] of [["failed lookup", "BR", { ok: false }], ["XX", "XX"], ["T1", "T1"], ["no country", undefined]]) {
  test(`${label} keeps pixel active`, async () => {
    const result = await visit(country, opts);
    await new Promise((resolve) => setImmediate(resolve));
    expect(queueOf(result)).toEqual(ACTIVE);
  });
}
test("honors saved advertising refusal", async () => {
  const r = await visit("BR", { refuse: true });
  expect(r.window.fbq).toBeUndefined(); expect(r.scripts).toHaveLength(0);
});
test("honors Global Privacy Control", async () => {
  const r = await visit("BR", { gpc: true });
  expect(r.window.fbq).toBeUndefined(); expect(r.scripts).toHaveLength(0);
});
test("does not report privacy policy visits", async () => {
  const r = await visit("BR", { path: "/privacidade" });
  expect(r.window.fbq).toBeUndefined(); expect(r.scripts).toHaveLength(0);
});
test("later refusal revokes tracking", async () => {
  const result = await visit("BR");
  result.context.localStorage.getItem = () => "true";
  result.listeners["manifesto-advertising-change"]();
  expect(queueOf(result).at(-1)).toEqual(["consent", "revoke"]);
});