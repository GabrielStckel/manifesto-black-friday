import { expect, test } from "bun:test";
import { TEM_VSL, VTURB_CONTA, VTURB_PLAYER, VTURB_VIDEO, VTURB_HLS, VSL_REVELAR } from "./config.ts";

test("enables the supplied VTurb player", () => {
  expect(TEM_VSL).toBe(true);
  expect(VTURB_CONTA).toBe("ac22f9bb-c7ee-4060-9a6e-7ec3b5fa2ff8");
  expect(VTURB_PLAYER).toBe("6ae11ab246271b50ab04eb96");
});

test("preloads the supplied video and exposes the pitch reveal class", () => {
  expect(VTURB_VIDEO).toBe("6ae11a7214709eb481e0277e");
  expect(VTURB_HLS).toBe("https://cdn.converteai.net/ac22f9bb-c7ee-4060-9a6e-7ec3b5fa2ff8/6ae11a7214709eb481e0277e/main.m3u8");
  expect(VSL_REVELAR).toBe("vsl-revelar");
});