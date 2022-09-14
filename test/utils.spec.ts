import { test,expect } from "vitest";
import { clamp } from "../src/utils";
test("clamp",()=>{

  expect(clamp(2,1,10)).toEqual(2)
  expect(clamp(12,1,10)).toEqual(10)
  expect(clamp(-2,1,10)).toEqual(1)
})