import { test, expect } from "vitest";
import { clamp, lerp, smoothstep } from "../src/utils";

test("clamp", () => {
  expect(clamp(0, 10, -11)).toEqual(0);
  expect(clamp(0, 10, -5)).toEqual(0);
  expect(clamp(0, 10, -1)).toEqual(0);
  expect(clamp(0, 10, 1)).toEqual(1);
  expect(clamp(0, 10, 5)).toEqual(5);
  expect(clamp(0, 10, 11)).toEqual(10);
});

test("lerp", () => {
  // positive
  expect(lerp(0, 10, 0.0)).toEqual(0);
  expect(lerp(0, 10, 0.5)).toEqual(5);
  expect(lerp(0, 10, 1.0)).toEqual(10);
  // negative
  expect(lerp(0, -10, 0.0)).toEqual(0);
  expect(lerp(0, -10, 0.5)).toEqual(-5);
  expect(lerp(0, -10, 1.0)).toEqual(-10);
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
