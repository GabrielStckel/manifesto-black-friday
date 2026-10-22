import { afterEach, describe, expect, test } from "bun:test";
import { buildCheckoutUrl } from "./checkout";
import { BF_FIM, CHECKOUT_BASE } from "./config";

afterEach(() => { Reflect.deleteProperty(globalThis, "window"); });

describe("Black Friday checkout rules", () => {
  test("annual offer uses bfcr3ntt and preserves all tracking", () => {
    Object.defineProperty(globalThis, "window", { configurable: true, value: { location: { search: "?utm_source=insta&sck=abc&custom=x&custom=y&off=wrong&checkoutMode=wrong" } } });
    const url = new URL(buildCheckoutUrl("anual"));
    expect(url.origin + url.pathname).toBe(CHECKOUT_BASE);
    expect(url.searchParams.get("off")).toBe("bfcr3ntt");
    expect(url.searchParams.get("checkoutMode")).toBe("10");
    expect(url.searchParams.get("utm_source")).toBe("insta");
    expect(url.searchParams.get("sck")).toBe("abc");
    expect(url.searchParams.getAll("custom")).toEqual(["x", "y"]);
  });
  test("monthly offer uses 5int9ubm", () => {
    expect(new URL(buildCheckoutUrl("mensal")).searchParams.get("off")).toBe("5int9ubm");
  });
  test("campaign ends at 23:59 Brasília on November 30 2026", () => {
    expect(BF_FIM).toBe(Date.UTC(2026, 11, 1, 2, 59));
  });
});