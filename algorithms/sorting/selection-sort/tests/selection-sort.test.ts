import { test, expect } from "@jest/globals";
import bubbleSort from "../src/selection-sort";

test("should sort the array in ascending order", () => {
  const nums = [5, 4, 3, 2, 1];
  bubbleSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5]);
});
