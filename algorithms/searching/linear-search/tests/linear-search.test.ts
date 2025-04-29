import { test, expect } from "@jest/globals";
import linearSearch from "../src/linear-search";

test("should return index of the target element if it is present in the array", () => {
  expect(linearSearch([1, 2, 3], 2)).toBe(1);
});

test("should return -1 if target element is not present in the array", () => {
  expect(linearSearch([1, 2, 3], 4)).toBe(-1);
});
