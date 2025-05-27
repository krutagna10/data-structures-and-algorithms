import { test, expect, beforeEach } from "@jest/globals";
import linearSearch from "../src/linear-search";
import binarySearch from "../src/binary-search";

let nums: number[];
beforeEach(() => {
  nums = [1, 2, 3];
});

test("should return index of the target element if it is present in the array", () => {
  expect(linearSearch(nums, 2)).toBe(1);
  expect(binarySearch(nums, 2)).toBe(1);
});

test("should return -1 if target element is not present in the array", () => {
  expect(binarySearch(nums, 4)).toBe(-1);
  expect(binarySearch(nums, 4)).toBe(-1);
});
