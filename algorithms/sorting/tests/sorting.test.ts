import { test, expect } from "@jest/globals";
import bubbleSort from "../src/bubble-sort";
import selectionSort from "../src/selection-sort";
import insertionSort from "../src/insertion-sort";
import mergeSort from "../src/merge-sort";

test("should not change the array which is already sorted in ascending order", () => {
  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  expect(selectionSort([1, 2, 3])).toEqual([1, 2, 3]);
  expect(insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
  expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test("should sort the array which is unsorted", () => {
  expect(bubbleSort([2, 1, 3])).toEqual([1, 2, 3]);
  expect(selectionSort([2, 1, 3])).toEqual([1, 2, 3]);
  expect(insertionSort([2, 1, 3])).toEqual([1, 2, 3]);
  expect(mergeSort([2, 1, 3])).toEqual([1, 2, 3]);
});

test("should sort the array which is sorted descending order", () => {
  expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3]);
  expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
  expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
});
