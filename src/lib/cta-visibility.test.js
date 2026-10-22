import { describe, expect, test } from "bun:test";
import { shouldShowFloatingCta } from "./cta-visibility";

describe("floating CTA visibility", () => {
  test("never shows while the hero is visible", () => expect(shouldShowFloatingCta(true, false, false)).toBe(false));
  test("never shows while plans are visible", () => expect(shouldShowFloatingCta(false, true, false)).toBe(false));
  test("never duplicates another visible plans CTA", () => expect(shouldShowFloatingCta(false, false, true)).toBe(false));
  test("shows only when all three are out of view", () => expect(shouldShowFloatingCta(false, false, false)).toBe(true));
});