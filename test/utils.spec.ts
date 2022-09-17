import { test, expect } from "vitest";
import { clamp, smoothstep } from "../src/utils";
test("clamp", () => {
  expect(clamp(2, 1, 10)).toEqual(2);
  expect(clamp(12, 1, 10)).toEqual(10);
  expect(clamp(-2, 1, 10)).toEqual(1);
});

test("smoothstep", () => {
  expect(smoothstep(0, 10, 1)).toBeGreaterThan(0);
  expect(smoothstep(0, 10, 1)).toBeLessThan(1);

  expect(smoothstep(0, 10, 2)).toBeGreaterThan(0);
  expect(smoothstep(0, 10, 2)).toBeLessThan(1);

  expect(smoothstep(0, 10, 4)).toBeGreaterThan(0);
  expect(smoothstep(0, 10, 4)).toBeLessThan(1);

  expect(smoothstep(0, 10, 8)).toBeGreaterThan(0);
  expect(smoothstep(0, 10, 8)).toBeLessThan(1);

  expect(smoothstep(0, 10, 1)).toBeLessThan(smoothstep(0, 10, 2));
  expect(smoothstep(0, 10, 2)).toBeLessThan(smoothstep(0, 10, 4));
  expect(smoothstep(0, 10, 4)).toBeLessThan(smoothstep(0, 10, 8));

  expect(smoothstep(0, 10, 0)).toEqual(0);
  expect(smoothstep(0, 10, 10)).toEqual(1);
});
